import { appData } from '../data/app-data.js';

class RallyDesktopApp {
  constructor() {
    this.currentLang = localStorage.getItem('rally_lang') || 'en';
    this.activeWindowId = null;
    this.notificationCycleIndex = 0;
    this.notificationIntervalTimer = null;

    this.init();
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.bindEvents();
    this.startNotificationCycle();
    this.updateStaticLinks();
  }

  // Language Switching Engine
  applyLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('rally_lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update Language Toggle Button
    const langBtnText = document.getElementById('lang-indicator');
    if (langBtnText) {
      langBtnText.textContent = lang === 'ar' ? 'English' : 'العربية';
    }

    // Update Rally Logo Text
    const logoTextLabel = document.getElementById('logo-text-label');
    if (logoTextLabel && appData.logoText) {
      logoTextLabel.textContent = appData.logoText[lang];
    }

    // Update Center Announcement Banner
    const annText = document.getElementById('announcement-text');
    const annBtn = document.getElementById('RLY-MS001');
    if (annText && appData.announcement) {
      annText.textContent = appData.announcement[lang];
      if (annBtn) annBtn.href = appData.announcement.url || appData.defaultUrl;
    }

    // Update Season Badge
    const seasonText = document.getElementById('season-text');
    if (seasonText) {
      seasonText.textContent = appData.season;
    }

    // Update Dropdown Menu Labels
    document.querySelectorAll('.menu-label').forEach(el => {
      const key = el.dataset.key;
      if (key && appData.menuLinks[key]) {
        el.textContent = appData.menuLinks[key].label[lang];
      }
    });

    // Update Dock Folder Tooltip Labels
    document.querySelectorAll('.folder-label').forEach(el => {
      const folderIdx = parseInt(el.dataset.folder, 10);
      if (!isNaN(folderIdx) && appData.folders[folderIdx]) {
        el.textContent = appData.folders[folderIdx].name[lang];
      }
    });

    // Update Visit Me Tooltip
    const visitMeTooltip = document.getElementById('visit-me-tooltip');
    if (visitMeTooltip && appData.dock.visitMe) {
      visitMeTooltip.textContent = appData.dock.visitMe.label[lang];
    }

    // Re-render active window if open
    if (this.activeWindowId) {
      const folder = appData.folders.find(f => f.windowId === this.activeWindowId);
      if (folder) this.renderWindow(folder);
    }
  }

  toggleLanguage() {
    const newLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.applyLanguage(newLang);
  }

  // Bind UI Event Listeners
  bindEvents() {
    // Rally Logo Menu Toggle
    const logoBtn = document.getElementById('RLY-L001');
    const dropdownMenu = document.getElementById('RLY-MN001');
    if (logoBtn && dropdownMenu) {
      logoBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('hidden');
      });

      document.addEventListener('click', () => {
        dropdownMenu.classList.add('hidden');
      });
    }

    // Language Toggle Button
    const langBtn = document.getElementById('RLY-LG001');
    if (langBtn) {
      langBtn.addEventListener('click', () => this.toggleLanguage());
    }

    // Dock Folders Click Events
    document.querySelectorAll('.dock-folder-item').forEach(folderBtn => {
      folderBtn.addEventListener('click', () => {
        const winId = folderBtn.dataset.window;
        const folderData = appData.folders.find(f => f.windowId === winId);
        if (folderData) {
          this.openWindow(folderData);
        }
      });
    });

    // Modals Close Buttons
    const infoCloseBtn = document.getElementById('info-close-btn');
    if (infoCloseBtn) {
      infoCloseBtn.addEventListener('click', () => this.closeModal('member-info-modal'));
    }

    const appCloseBtn = document.getElementById('app-close-btn');
    if (appCloseBtn) {
      appCloseBtn.addEventListener('click', () => this.closeModal('members-app-modal'));
    }

    const attrCloseBtn = document.getElementById('attribution-close-btn');
    if (attrCloseBtn) {
      attrCloseBtn.addEventListener('click', () => this.closeModal('attribution-modal'));
    }

    const notifModalCloseBtn = document.getElementById('notif-modal-close-btn');
    if (notifModalCloseBtn) {
      notifModalCloseBtn.addEventListener('click', () => this.closeModal('notifications-modal'));
    }

    const attrBtn = document.getElementById('RLY-LC001');
    if (attrBtn) {
      attrBtn.addEventListener('click', () => {
        const modal = document.getElementById('attribution-modal');
        const textBody = document.getElementById('attribution-text-body');
        const headerTitle = document.getElementById('attribution-header-title');
        if (headerTitle) headerTitle.textContent = appData.menuLinks.attribution.label[this.currentLang];
        if (textBody) textBody.textContent = appData.menuLinks.attribution.text[this.currentLang];
        if (modal) modal.classList.remove('hidden');
      });
    }

    // Manual Notifications Trigger Button (RLY-N001) -> Opens Full Notifications Modal
    const notifTrigger = document.getElementById('RLY-N001');
    if (notifTrigger) {
      notifTrigger.addEventListener('click', () => {
        this.openNotificationsModal();
      });
    }

    // Single Toast Popup Close Button
    const notifClose = document.getElementById('notification-close-btn');
    if (notifClose) {
      notifClose.addEventListener('click', () => {
        const notifPanel = document.getElementById('RLY-NP001');
        if (notifPanel) notifPanel.classList.add('hidden');
      });
    }
  }

  // Update Static Anchor URLs
  updateStaticLinks() {
    const setUrl = (id, url) => {
      const el = document.getElementById(id);
      if (el && url) el.href = url;
    };

    setUrl('RLY-B001', appData.menuLinks.facebook.url);
    setUrl('RLY-B002', appData.menuLinks.tiktok.url);
    setUrl('RLY-B003', appData.menuLinks.instagram.url);
    setUrl('RLY-B004', appData.menuLinks.whatsappGroup.url);
    setUrl('RLY-C001', appData.menuLinks.email.url);
    setUrl('RLY-C002', appData.menuLinks.whatsappContact.url);
    setUrl('RLY-K002', appData.dock.visitMe.url);
  }

  // Notification Timing Engine:
  // 3 Active Notifications (RLY-N101, RLY-N102, RLY-N103)
  // 0s -> N101 (3s) | 15s -> N102 (3s) | 30s -> N103 (3s) | 45s -> N101 repeat cycle
  startNotificationCycle() {
    const cycleNotifications = () => {
      this.displayNotificationToast(this.notificationCycleIndex);
      this.notificationCycleIndex = (this.notificationCycleIndex + 1) % 3;
    };

    cycleNotifications(); // Trigger immediately at 0s
    this.notificationIntervalTimer = setInterval(cycleNotifications, 15000); // Repeat every 15s
  }

  displayNotificationToast(index) {
    const activeNotifs = appData.notifications.slice(0, 3);
    const notif = activeNotifs[index];
    if (!notif) return;

    const panel = document.getElementById('RLY-NP001');
    const title = document.getElementById('notification-title');
    const desc = document.getElementById('notification-desc');
    const badge = document.getElementById('notification-badge');
    const link = document.getElementById('notification-link');
    const progress = document.getElementById('notification-progress');

    if (title) title.textContent = notif.title[this.currentLang];
    if (desc) desc.textContent = notif.description[this.currentLang];
    if (badge) badge.textContent = notif.badge[this.currentLang];
    if (link) link.href = notif.url || appData.defaultUrl;

    if (panel) {
      panel.classList.remove('hidden');
      if (progress) {
        progress.style.transition = 'none';
        progress.style.width = '0%';
        setTimeout(() => {
          progress.style.transition = 'width 3s linear';
          progress.style.width = '100%';
        }, 50);
      }

      // Hide after exactly 3 seconds
      setTimeout(() => {
        if (panel) panel.classList.add('hidden');
      }, 3000);
    }
  }

  // Open Full Notifications Section Modal
  openNotificationsModal() {
    const modal = document.getElementById('notifications-modal');
    const listContainer = document.getElementById('notifications-list-container');
    const modalTitle = document.getElementById('notif-modal-title');
    if (!modal || !listContainer) return;

    const lang = this.currentLang;
    if (modalTitle) modalTitle.textContent = lang === 'ar' ? 'الإشعارات' : 'Notifications';

    const activeNotifs = appData.notifications.slice(0, 3);
    listContainer.innerHTML = activeNotifs.map(n => `
      <a href="${n.url || appData.defaultUrl}" target="_blank" rel="noopener" class="notif-card-item">
        <div class="notif-card-header">
          <span class="notification-tag">${n.badge[lang]}</span>
        </div>
        <h4 style="font-size:14px; font-weight:700;">${n.title[lang]}</h4>
        <p style="font-size:12px; color:var(--text-secondary);">${n.description[lang]}</p>
      </a>
    `).join('');

    modal.classList.remove('hidden');
  }

  // Single Primary Window Manager
  openWindow(folderData) {
    this.activeWindowId = folderData.windowId;
    this.renderWindow(folderData);
  }

  closeWindow() {
    const winContainer = document.getElementById('window-container');
    if (winContainer) winContainer.innerHTML = '';
    this.activeWindowId = null;
  }

  renderWindow(folderData) {
    const winContainer = document.getElementById('window-container');
    if (!winContainer) return;

    const lang = this.currentLang;
    const isBoard = folderData.type === 'board';

    // Committee stickers vs Administration stickers
    // For Committees: position only on sticker
    // For Administration: name on top, position underneath
    const membersHtml = folderData.members.map(m => {
      if (isBoard) {
        return `
          <div class="sticker-card" data-member-id="${m.id}" data-info-id="${m.infoId}">
            <div class="sticker-img-wrapper">
              <img src="${m.image}" alt="${m.title[lang]}" class="sticker-img">
            </div>
            <span class="sticker-name">${m.name[lang]}</span>
            <span class="sticker-title">${m.title[lang]}</span>
          </div>
        `;
      } else {
        return `
          <div class="sticker-card" data-member-id="${m.id}" data-info-id="${m.infoId}">
            <div class="sticker-img-wrapper">
              <img src="${m.image}" alt="${m.title[lang]}" class="sticker-img">
            </div>
            <span class="sticker-name">${m.title[lang]}</span>
          </div>
        `;
      }
    }).join('');

    let actionHeaderHtml = '';
    if (!isBoard) {
      actionHeaderHtml = `
        <div class="committee-top-header">
          <img src="${folderData.artwork}" alt="${folderData.name[lang]}" class="committee-art-img">
          <div class="committee-actions">
            <a id="${folderData.joinButton.id}" href="${folderData.joinButton.url}" target="_blank" rel="noopener" class="btn-join">
              ${folderData.joinButton.label[lang]}
            </a>
            <button id="${folderData.app.id}" class="btn-app-icon" data-window="${folderData.app.windowId}">
              📱 ${folderData.app.name[lang]}
            </button>
          </div>
        </div>
      `;
    }

    const windowMarkup = `
      <div id="${folderData.windowId}" class="mac-window">
        <div class="window-top-bar">
          <div class="window-controls">
            <button class="win-btn close close-window-btn" aria-label="Close Window"></button>
            <button class="win-btn minimize" aria-label="Minimize Window"></button>
            <button class="win-btn maximize" aria-label="Maximize Window"></button>
          </div>
          <span class="window-title-text">${folderData.name[lang]}</span>
        </div>
        <div class="window-body">
          ${actionHeaderHtml}
          <div class="stickers-container">
            ${membersHtml}
          </div>
        </div>
      </div>
    `;

    winContainer.innerHTML = windowMarkup;

    // Attach Close Event
    const closeBtn = winContainer.querySelector('.close-window-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeWindow());
    }

    // Attach Sticker Info Click Events
    winContainer.querySelectorAll('.sticker-card').forEach(card => {
      card.addEventListener('click', () => {
        const memId = card.dataset.memberId;
        const member = folderData.members.find(m => m.id === memId);
        if (member) this.openMemberInfoModal(member);
      });
    });

    // Attach App Button Click Event
    if (!isBoard) {
      const appBtn = winContainer.querySelector(`#${folderData.app.id}`);
      if (appBtn) {
        appBtn.addEventListener('click', () => this.openMembersAppModal(folderData));
      }
    }
  }

  // Member Info Modal Popup
  openMemberInfoModal(member) {
    const modal = document.getElementById('member-info-modal');
    if (!modal) return;

    const lang = this.currentLang;
    const nameEl = document.getElementById('info-member-name');
    const roleEl = document.getElementById('info-member-role');
    const commEl = document.getElementById('info-member-committee');
    const studiesEl = document.getElementById('info-member-studies');
    const interestsEl = document.getElementById('info-member-interests');
    const bioEl = document.getElementById('info-member-bio');
    const imgEl = document.getElementById('info-member-img');
    const linkEl = document.getElementById('info-member-link');

    if (nameEl) nameEl.textContent = member.name[lang];
    if (roleEl) roleEl.textContent = member.title[lang];
    if (commEl) commEl.textContent = `${lang === 'ar' ? 'اللجنة: ' : 'Committee: '}${member.committee[lang]}`;
    if (studiesEl) studiesEl.textContent = `${lang === 'ar' ? 'الدراسة: ' : 'Studies: '}${member.studies[lang]}`;
    if (interestsEl) interestsEl.textContent = `${lang === 'ar' ? 'الاهتمامات: ' : 'Interests: '}${member.interests[lang]}`;
    if (bioEl) bioEl.textContent = member.bio[lang];
    if (imgEl) imgEl.src = member.image;

    if (linkEl) {
      linkEl.href = member.contactUrl || appData.defaultEmail;
      linkEl.textContent = lang === 'ar'
        ? `تواصل مع ${member.title[lang]}`
        : `Contact ${member.title[lang]}`;
    }

    modal.classList.remove('hidden');
  }

  // Members Directory App Modal - Displays Name-Only List
  openMembersAppModal(folderData) {
    const modal = document.getElementById('members-app-modal');
    const list = document.getElementById('app-members-list');
    const title = document.getElementById('app-modal-header-title');
    if (!modal || !list) return;

    const lang = this.currentLang;
    if (title) title.textContent = `${folderData.name[lang]} - ${folderData.app.name[lang]}`;

    // Name-only list, no positions or action buttons beside names
    list.innerHTML = folderData.members.map(m => `
      <li class="members-app-item">
        <span>${m.name[lang]}</span>
      </li>
    `).join('');

    modal.classList.remove('hidden');
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('hidden');
  }
}

// Initialize application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.rallyApp = new RallyDesktopApp();
});
