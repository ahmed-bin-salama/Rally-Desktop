# Development Plan

This document outlines the 16 sequential phases required to fully implement and deploy the **Rally Board Interactive Desktop** project.

---

## Phase 1: Repository Architecture (Current Phase)
- **Objective**: Establish repo structure, ID system, data schemas, asset directories, guidelines, and technical documentation.
- **Expected Output**: Completed documentation, empty directory structure, schema templates, and clear guidelines.
- **Dependencies**: None.
- **Completion Criteria**: All 9 root Markdown files, 5 `data/*.js` schemas, and `docs/` files created and verified.

---

## Phase 2: Desktop Shell
- **Objective**: Build basic HTML structural shell and CSS layout for the desktop viewport.
- **Expected Output**: Responsive full-screen desktop viewport (`RLY-D001`) with background asset placeholder (`RLY-D002`).
- **Dependencies**: Phase 1.
- **Completion Criteria**: Responsive viewport renders cleanly across desktop and mobile screens.

---

## Phase 3: Top Bar
- **Objective**: Build macOS-style top bar navigation container (`RLY-T001`).
- **Expected Output**: Top bar containing logo (`RLY-L001`), dropdown menu (`RLY-MN001`), center marquee (`RLY-MS001`), active season badge (`RLY-S001`), language switch (`RLY-LG001`), and notification bell (`RLY-N001`).
- **Dependencies**: Phase 2.
- **Completion Criteria**: Top bar items render statically; layout adapts cleanly to smaller viewports.

---

## Phase 4: Folder System
- **Objective**: Render interactive folder icons on the desktop.
- **Expected Output**: 6 desktop folder icons (`RLY-F001` through `RLY-F006`) with dynamic folder label bindings.
- **Dependencies**: Phase 2, Phase 3.
- **Completion Criteria**: Folders appear in desktop grid and respond to click/tap events.

---

## Phase 5: Window System
- **Objective**: Implement reusable window manager component with chrome header and close controls (`RLY-WC001`, `RLY-WX001`).
- **Expected Output**: Draggable, focusable window containers with opening/closing state management.
- **Dependencies**: Phase 4.
- **Completion Criteria**: Windows open upon folder click, focus on click, and close via close button or backdrop tap.

---

## Phase 6: Committee System
- **Objective**: Populate committee windows with structured content layouts.
- **Expected Output**: Render committee title, description, artwork graphic, member sticker slot, join button, and members app link inside `RLY-W001`–`RLY-W006`.
- **Dependencies**: Phase 5, `data/committees.js`.
- **Completion Criteria**: Each committee window renders metadata accurately from `committees.js`.

---

## Phase 7: Member Sticker + Info System
- **Objective**: Render playful sticker photos for committee members and open profile detail modals on click.
- **Expected Output**: Member sticker elements (`RLY-M001`+) inside windows; member info windows (`RLY-I001`+) showing photo, name, position, bio, and social media links.
- **Dependencies**: Phase 6, `data/members.js`.
- **Completion Criteria**: Clicking a member sticker opens their detailed profile info card.

---

## Phase 8: Join + External Link System
- **Objective**: Connect "Join Committee" application buttons to external form URLs.
- **Expected Output**: Functional buttons (`RLY-J001`–`RLY-J005`) opening target external application forms in new browser tabs.
- **Dependencies**: Phase 6, `data/committees.js`.
- **Completion Criteria**: Clicking join buttons opens specified application link securely (`target="_blank" rel="noopener"`).

---

## Phase 9: Members App
- **Objective**: Create dedicated "Members Directory App" launcher inside each committee window.
- **Expected Output**: App icon (`RLY-A001`–`RLY-A006`) launching a full directory view window (`RLY-AW001`–`RLY-AW006`) listing committee members in grid/list format.
- **Dependencies**: Phase 7.
- **Completion Criteria**: Directory app window displays all assigned committee members.

---

## Phase 10: Notification System
- **Objective**: Implement top bar notification drawer panel (`RLY-NP001`).
- **Expected Output**: Bell icon (`RLY-N001`) toggles panel; panel displays active items (`RLY-N101`–`RLY-N105`) with dates, titles, descriptions, and action links.
- **Dependencies**: Phase 3, `data/notifications.js`.
- **Completion Criteria**: Notification items render dynamically and panel toggles smoothly. Deleting an item dynamically reflows remaining items.

---

## Phase 11: Language System (Bilingual EN / AR)
- **Objective**: Enable runtime switching between English (LTR) and Arabic (RTL).
- **Expected Output**: Language switcher (`RLY-LG001`) toggles document `dir="ltr"` / `dir="rtl"` and switches string properties between `EN` and `AR`.
- **Dependencies**: Phase 2 through Phase 10.
- **Completion Criteria**: All user-facing UI labels, descriptions, and titles switch seamlessly between English and Arabic without page reloads.

---

## Phase 12: Responsive Design
- **Objective**: Optimize desktop layout and window interactions for tablet and mobile screens.
- **Expected Output**: Mobile-friendly desktop drawer, scaled window overlays, and touch-optimized touch targets.
- **Dependencies**: Phase 11.
- **Completion Criteria**: Full functionality accessible on screens down to 320px width.

---

## Phase 13: Demo Content Integration
- **Objective**: Insert clean, representative demo assets and text to verify visual design.
- **Expected Output**: Visual QA of complete desktop experience using generic demo placeholders.
- **Dependencies**: Phase 12.
- **Completion Criteria**: Demo environment looks polished and glitch-free.

---

## Phase 14: Real Content Integration
- **Objective**: Populate `data/*.js` and `assets/` with actual Rally committee photos, descriptions, social links, and application forms.
- **Expected Output**: Live production-ready content integrated.
- **Dependencies**: Phase 13, real content provided by Rally team.
- **Completion Criteria**: Zero template placeholders remaining in production view.

---

## Phase 15: Quality Assurance & Testing
- **Objective**: Conduct comprehensive cross-browser, responsive, accessibility, and performance testing.
- **Expected Output**: QA report and bug fixes.
- **Dependencies**: Phase 14.
- **Completion Criteria**: Passes accessibility checks, loads under 1.5s, no console errors.

---

## Phase 16: Cloudflare Pages Deployment
- **Objective**: Connect GitHub repository to Cloudflare Pages for automated static deployment.
- **Expected Output**: Live production HTTPS URL (e.g., `rally-board.pages.dev`).
- **Dependencies**: Phase 15.
- **Completion Criteria**: Automated deployment pipeline active on push to main branch.
