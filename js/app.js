import { appData } from '../data/app-data.js';

class RallyDesktopApp {
  constructor() {
    this.currentLang = localStorage.getItem('rally_lang') || 'en';
    this.activeWindowId = null;
    this.notificationIndex = 0;
    this.notificationTimer = null;
    this.notificationProgressTimer = null;

    this.init();
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.bindEvents();
    this.startNotificationRotation();
    this.renderFolders();
    this.updateStaticLinks();
  }

  // Language Switching Engine
  applyLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('rally_lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const langBtnText = document.getElementById('lang-indicator');
    if (langBtnText) {
      langBtnText.textContent = lang === 'ar' ? 'English' : 'العربية';
    }

    // Update announcement
    const annText = document.getElementById('announcement-text');
    const annBtn = document.getElementById('RLY-MS001');
    if (annText && appData.announcement) {
      annText.textContent = appData.announcement[lang];
      if (annBtn) annBtn.href = appData.announcement.url;
    }

    // Update season
    const seasonText = document.getElementById('season-text');
    if (seasonText) {
      seasonText.textContent = appData.season;
    }

    // Update menu labels
    document.querySelectorAll('.menu-label').forEach(el => {
      const key = el.dataset.key;
      if (key && appData.menuLinks[key]) {
        el.textContent = appData.menuLinks[key].label[lang];
      }
    });

    // Update folder names
    document.querySelectorAll('.folder-label').forEach(el => {
      const folderIdx = parseInt(el.dataset.folder, 10);
      if (!isNaN(folderIdx) && appData.folders[folderIdx]) {
        el.textContent = appData.folders[folderIdx].name[lang];
      }
    });

    // Re-render active window if open
    if (this.activeWindowId) {
      const folder = appData.folders.find(f => f.windowId === this.activeWindowId);
      if (folder) this.renderWindow(folder);
    }

    // Update notification content
    this.displayNotification(this.notificationIndex);
  }

  toggleLanguage() {
    const newLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.applyLanguage(newLang);
  }

  // Bind UI Event Listeners
  bindEvents() {
    // Rally Menu Toggle
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

    // Folders Click Events
    document.querySelectorAll('.folder-item').forEach(folderBtn => {
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

    const attrBtn = document.getElementById('RLY-LC001');
    if (attrBtn) {
      attrBtn.addEventListener('click', () => {
        const modal = document.getElementById('attribution-modal');
        const textBody = document.getElementById('attribution-text-body');
        if (textBody) textBody.textContent = appData.menuLinks.attribution.text[this.currentLang];
        if (modal) modal.classList.remove('hidden');
      });
    }

    // Notification Panel Manual Controls
    const notifTrigger = document.getElementById('RLY-N001');
    const notifPanel = document.getElementById('RLY-NP001');
    const notifClose = document.getElementById('notification-close-btn');

    if (notifTrigger && notifPanel) {
      notifTrigger.addEventListener('click', () => {
        notifPanel.classList.toggle('hidden');
      });
    }

    if (notifClose && notifPanel) {
      notifClose.addEventListener('click', () => {
        notifPanel.classList.add('hidden');
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
    setUrl('RLY-K002', appData.dock.instagram.url);
  }

  // Dynamic Notification Auto-Rotation Engine (~10s timer, ~3s display)
  startNotificationRotation() {
    const cycle = () => {
      this.displayNotification(this.notificationIndex);
      this.notificationIndex = (this.notificationIndex + 1) % appData.notifications.length;
    };

    cycle();
    this.notificationTimer = setInterval(cycle, 10000);
  }

  displayNotification(index) {
    const notif = appData.notifications[index];
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
    if (link) link.href = notif.url;

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

      // Hide after ~3 seconds
      setTimeout(() => {
        if (panel) panel.classList.add('hidden');
      }, 3500);
    }
  }

  // Folder Rendering
  renderFolders() {
    document.querySelectorAll('.folder-label').forEach(el => {
      const idx = parseInt(el.dataset.folder, 10);
      if (!isNaN(idx) && appData.folders[idx]) {
        el.textContent = appData.folders[idx].name[this.currentLang];
      }
    });
  }

  // Single Active Window Manager
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

    const membersHtml = folderData.members.map(m => `
      <div class="sticker-card" data-member-id="${m.id}" data-info-id="${m.infoId}">
        <div class="sticker-img-wrapper">
          <img src="${m.image}" alt="${m.name[lang]}" class="sticker-img">
        </div>
        <span class="sticker-name">${m.name[lang]}</span>
        <span class="sticker-title">${m.title[lang]}</span>
      </div>
    `).join('');

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

  // Member Info Modal Popup (RLY-I001 .. RLY-I019)
  openMemberInfoModal(member) {
    const modal = document.getElementById('member-info-modal');
    if (!modal) return;

    const lang = this.currentLang;
    const nameEl = document.getElementById('info-member-name');
    const roleEl = document.getElementById('info-member-role');
    const commEl = document.getElementById('info-member-committee');
    const bioEl = document.getElementById('info-member-bio');
    const imgEl = document.getElementById('info-member-img');
    const linkEl = document.getElementById('info-member-link');

    if (nameEl) nameEl.textContent = member.name[lang];
    if (roleEl) roleEl.textContent = member.title[lang];
    if (commEl) commEl.textContent = member.committee[lang];
    if (bioEl) bioEl.textContent = member.bio[lang];
    if (imgEl) imgEl.src = member.image;
    if (linkEl) linkEl.href = member.contactUrl;

    modal.classList.remove('hidden');
  }

  // Members Directory App Modal (RLY-AW001 .. RLY-AW005)
  openMembersAppModal(folderData) {
    const modal = document.getElementById('members-app-modal');
    const list = document.getElementById('app-members-list');
    const title = document.getElementById('app-modal-header-title');
    if (!modal || !list) return;

    const lang = this.currentLang;
    if (title) title.textContent = `${folderData.name[lang]} - ${folderData.app.name[lang]}`;

    list.innerHTML = folderData.members.map(m => `
      <li class="members-app-item">
        <span><strong>${m.name[lang]}</strong> - ${m.title[lang]}</span>
        <a href="${m.contactUrl}" target="_blank" rel="noopener" class="btn-primary" style="padding: 3px 8px; font-size:11px;">Profile</a>
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
