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
    const langBtnText = document.getElementById('RLY-LG001-TXT');
    if (langBtnText) {
      langBtnText.textContent = lang === 'ar' ? 'English' : 'العربية';
    }

    // Update Rally Logo Text
    const logoTextLabel = document.getElementById('RLY-L001-TXT');
    if (logoTextLabel && appData.logoText) {
      logoTextLabel.textContent = appData.logoText[lang];
    }

    // Update Center Announcement Banner
    const annText = document.getElementById('RLY-MS001-TXT');
    const annBtn = document.getElementById('RLY-MS001');
    if (annText && appData.announcement) {
      annText.textContent = appData.announcement[lang];
      if (annBtn) annBtn.href = appData.announcement.url || appData.defaultUrl;
    }

    // Update Season Badge
    const seasonText = document.getElementById('RLY-S001-TXT');
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
    const visitMeTooltip = document.getElementById('RLY-TP-K002');
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

    const notifModalCloseBtn = document.getElementById('RLY-NM001-CLOSE');
    if (notifModalCloseBtn) {
      notifModalCloseBtn.addEventListener('click', () => this.closeModal('RLY-NM001'));
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
    const notifClose = document.getElementById('RLY-NP001-CLOSE');
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

  // Notification Timing Engine
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
    const title = document.getElementById('RLY-NP001-TITLE');
    const desc = document.getElementById('RLY-NP001-DESC');
    const badge = document.getElementById('RLY-NP001-BADGE');
    const link = document.getElementById('RLY-NP001-LINK');
    const progress = document.getElementById('RLY-NP001-PROG');

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
    const modal = document.getElementById('RLY-NM001');
    const listContainer = document.getElementById('RLY-NM001-LIST');
    const modalTitle = document.getElementById('RLY-NM001-TITLE');
    if (!modal || !listContainer) return;

    const lang = this.currentLang;
    if (modalTitle) modalTitle.textContent = lang === 'ar' ? 'الإشعارات' : 'Notifications';

    const activeNotifs = appData.notifications.slice(0, 3);
    listContainer.innerHTML = activeNotifs.map(n => `
      <a id="${n.id}" href="${n.url || appData.defaultUrl}" target="_blank" rel="noopener" class="notif-card-item">
        <div class="notif-card-header">
          <span id="${n.id}-BADGE" class="notification-tag">${n.badge[lang]}</span>
        </div>
        <h4 id="${n.id}-TITLE" style="font-size:14px; font-weight:700;">${n.title[lang]}</h4>
        <p id="${n.id}-DESC" style="font-size:12px; color:var(--text-secondary);">${n.description[lang]}</p>
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
    const winContainer = document.getElementById('RLY-WC001');
    if (winContainer) winContainer.innerHTML = '';
    this.activeWindowId = null;
  }

  renderWindow(folderData) {
    const winContainer = document.getElementById('RLY-WC001');
    if (!winContainer) return;

    const lang = this.currentLang;
    const isBoard = folderData.type === 'board';

    // Board Stickers renderer using individual derived DOM IDs
    // All stickers render tooltip RLY-TP-{mCode} containing member's exact name
    const membersHtml = folderData.members.map(m => {
      const code = m.id.startsWith('RLY-') ? m.id.slice(4) : m.id; // e.g. M001
      const stkId = `RLY-STK-${code}`;
      const imgId = `RLY-IMG-${code}`;
      const nameId = `RLY-TXT-NAME-${code}`;
      const titleId = `RLY-TXT-TITLE-${code}`;
      const tpId = `RLY-TP-${code}`;

      if (isBoard) {
        return `
          <div id="${stkId}" class="sticker-card" data-member-id="${m.id}" data-info-id="${m.infoId}">
            <span id="${tpId}" class="sticker-tooltip">${m.name[lang]}</span>
            <div class="sticker-img-wrapper">
              <img id="${imgId}" src="${m.image}" alt="${m.title[lang]}" class="sticker-img">
            </div>
            <span id="${nameId}" class="sticker-name">${m.name[lang]}</span>
            <span id="${titleId}" class="sticker-title">${m.title[lang]}</span>
          </div>
        `;
      } else {
        return `
          <div id="${stkId}" class="sticker-card" data-member-id="${m.id}" data-info-id="${m.infoId}">
            <span id="${tpId}" class="sticker-tooltip">${m.name[lang]}</span>
            <div class="sticker-img-wrapper">
              <img id="${imgId}" src="${m.image}" alt="${m.title[lang]}" class="sticker-img">
            </div>
            <span id="${nameId}" class="sticker-name">${m.title[lang]}</span>
          </div>
        `;
      }
    }).join('');

    let actionHeaderHtml = '';
    if (!isBoard) {
      actionHeaderHtml = `
        <div id="RLY-HDR-${folderData.windowId}" class="committee-top-header">
          <img id="RLY-ART-${folderData.windowId}" src="${folderData.artwork}" alt="${folderData.name[lang]}" class="committee-art-img">
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
        <div id="RLY-TB-${folderData.windowId}" class="window-top-bar">
          <div class="window-controls">
            <button id="RLY-CLOSE-${folderData.windowId}" class="win-btn close close-window-btn" aria-label="Close Window"></button>
            <button id="RLY-MIN-${folderData.windowId}" class="win-btn minimize" aria-label="Minimize Window"></button>
            <button id="RLY-MAX-${folderData.windowId}" class="win-btn maximize" aria-label="Maximize Window"></button>
          </div>
          <span id="RLY-TITLE-${folderData.windowId}" class="window-title-text">${folderData.name[lang]}</span>
        </div>
        <div id="RLY-BODY-${folderData.windowId}" class="window-body">
          ${actionHeaderHtml}
          <div id="RLY-STK-CTR-${folderData.windowId}" class="stickers-container">
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

  // Member Info Modal Popup - Traceable to RLY-Ixxx
  openMemberInfoModal(member) {
    const modal = document.getElementById('member-info-modal');
    const infoWin = document.getElementById('info-modal-window');
    if (!modal) return;

    const lang = this.currentLang;
    const infoId = member.infoId; // e.g. RLY-I001 .. RLY-I019

    if (infoWin) infoWin.id = `${infoId}-WINDOW`;

    const nameEl = document.getElementById('info-member-name') || document.querySelector('[id$="-NAME"]');
    const roleEl = document.getElementById('info-member-role') || document.querySelector('[id$="-TITLE"]');
    const commEl = document.getElementById('info-member-committee') || document.querySelector('[id$="-COMMITTEE"]');
    const studiesEl = document.getElementById('info-member-studies') || document.querySelector('[id$="-STUDIES"]');
    const interestsEl = document.getElementById('info-member-interests') || document.querySelector('[id$="-INTERESTS"]');
    const bioEl = document.getElementById('info-member-bio') || document.querySelector('[id$="-BIO"]');
    const imgEl = document.getElementById('info-member-img') || document.querySelector('[id$="-IMAGE"]');
    const linkEl = document.getElementById('info-member-link') || document.querySelector('[id$="-CONTACT"]');

    if (nameEl) {
      nameEl.id = `${infoId}-NAME`;
      nameEl.textContent = member.name[lang];
    }
    if (roleEl) {
      roleEl.id = `${infoId}-TITLE`;
      roleEl.textContent = member.title[lang];
    }
    if (commEl) {
      commEl.id = `${infoId}-COMMITTEE`;
      commEl.textContent = `${lang === 'ar' ? 'اللجنة: ' : 'Committee: '}${member.committee[lang]}`;
    }
    if (studiesEl) {
      studiesEl.id = `${infoId}-STUDIES`;
      studiesEl.textContent = `${lang === 'ar' ? 'الدراسة: ' : 'Studies: '}${member.studies[lang]}`;
    }
    if (interestsEl) {
      interestsEl.id = `${infoId}-INTERESTS`;
      interestsEl.textContent = `${lang === 'ar' ? 'الاهتمامات: ' : 'Interests: '}${member.interests[lang]}`;
    }
    if (bioEl) {
      bioEl.id = `${infoId}-BIO`;
      bioEl.textContent = member.bio[lang];
    }
    if (imgEl) {
      imgEl.id = `${infoId}-IMAGE`;
      imgEl.src = member.image;
    }
    if (linkEl) {
      linkEl.id = `${infoId}-CONTACT`;
      linkEl.href = member.contactUrl || appData.defaultEmail;
      linkEl.textContent = lang === 'ar'
        ? `تواصل مع ${member.title[lang]}`
        : `Contact ${member.title[lang]}`;
    }

    modal.classList.remove('hidden');
  }

  // Members Directory App Modal - Separated from Board People
  openMembersAppModal(folderData) {
    const modal = document.getElementById('members-app-modal');
    const list = document.getElementById('app-members-list');
    const title = document.getElementById('app-modal-header-title');
    if (!modal || !list) return;

    const lang = this.currentLang;
    if (title) title.textContent = `${folderData.name[lang]} - ${folderData.app.name[lang]}`;

    const membersDir = folderData.membersDirectory;
    const dirId = membersDir ? membersDir.id : 'RLY-MD000';

    // Set list container ID to directory ID (RLY-MD001 .. RLY-MD005)
    list.id = dirId;

    const membersList = membersDir ? membersDir.members : [];

    list.innerHTML = membersList.map((m, idx) => {
      const itemNum = idx + 1;
      const itemId = `RLY-MDI-${dirId}-${itemNum}`;
      const genderIconId = `RLY-MDI-GENDER-${dirId}-${itemNum}`;
      const nameTxtId = `RLY-MDI-NAME-${dirId}-${itemNum}`;

      const genderIcon = m.gender === 'female' ? '♀' : '♂';
      const genderClass = m.gender === 'female' ? 'gender-female' : 'gender-male';

      return `
        <li id="${itemId}" class="members-app-item">
          <span id="${genderIconId}" class="member-gender-icon ${genderClass}" aria-hidden="true">${genderIcon}</span>
          <span id="${nameTxtId}" class="member-name-text">${m.name}</span>
        </li>
      `;
    }).join('');

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
