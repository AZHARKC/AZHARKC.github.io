function makeScreenshot(type, color1, color2, label) {
  const svgs = {
    login: `<svg viewBox="0 0 110 190" xmlns="http://www.w3.org/2000/svg">
      <rect width="110" height="190" fill="${color1}"/>
      <rect x="0" y="0" width="110" height="60" fill="${color2}" opacity="0.7"/>
      <circle cx="55" cy="34" r="18" fill="white" opacity="0.15"/>
      <text x="55" y="39" text-anchor="middle" fill="white" font-size="16" font-family="sans-serif" font-weight="bold">${(label || 'A')[0]}</text>
      <rect x="14" y="72" width="82" height="14" rx="7" fill="white" opacity="0.12"/>
      <rect x="14" y="92" width="82" height="14" rx="7" fill="white" opacity="0.12"/>
      <rect x="22" y="116" width="66" height="16" rx="8" fill="${color2}" opacity="0.9"/>
      <text x="55" y="128" text-anchor="middle" fill="white" font-size="9" font-family="sans-serif" font-weight="bold">LOGIN</text>
      <rect x="14" y="144" width="36" height="6" rx="3" fill="white" opacity="0.2"/>
      <rect x="14" y="156" width="82" height="5" rx="2.5" fill="white" opacity="0.1"/>
      <rect x="14" y="166" width="60" height="5" rx="2.5" fill="white" opacity="0.1"/>
    </svg>`,
    dashboard: `<svg viewBox="0 0 110 190" xmlns="http://www.w3.org/2000/svg">
      <rect width="110" height="190" fill="${color1}"/>
      <rect x="0" y="0" width="110" height="38" fill="${color2}" opacity="0.8"/>
      <rect x="12" y="12" width="40" height="7" rx="3.5" fill="white" opacity="0.8"/>
      <rect x="12" y="24" width="28" height="5" rx="2.5" fill="white" opacity="0.4"/>
      <circle cx="94" cy="20" r="11" fill="white" opacity="0.12"/>
      <rect x="10" y="46" width="42" height="40" rx="8" fill="${color2}" opacity="0.25"/>
      <rect x="58" y="46" width="42" height="40" rx="8" fill="${color2}" opacity="0.15"/>
      <rect x="14" y="52" width="20" height="5" rx="2.5" fill="white" opacity="0.5"/>
      <rect x="14" y="62" width="30" height="12" rx="4" fill="white" opacity="0.15"/>
      <text x="29" y="72" text-anchor="middle" fill="white" font-size="12" font-family="sans-serif" font-weight="bold">24</text>
      <rect x="62" y="52" width="20" height="5" rx="2.5" fill="white" opacity="0.5"/>
      <rect x="62" y="62" width="30" height="12" rx="4" fill="white" opacity="0.1"/>
      <text x="77" y="72" text-anchor="middle" fill="white" font-size="12" font-family="sans-serif" font-weight="bold">8</text>
      <rect x="10" y="94" width="90" height="1" fill="white" opacity="0.08"/>
      <rect x="10" y="102" width="90" height="28" rx="8" fill="${color2}" opacity="0.18"/>
      <rect x="10" y="136" width="90" height="22" rx="8" fill="${color2}" opacity="0.12"/>
      <rect x="10" y="164" width="90" height="22" rx="8" fill="${color2}" opacity="0.12"/>
      <rect x="18" y="109" width="28" height="5" rx="2.5" fill="white" opacity="0.5"/>
      <rect x="18" y="119" width="50" height="4" rx="2" fill="white" opacity="0.25"/>
      <rect x="18" y="142" width="35" height="4" rx="2" fill="white" opacity="0.5"/>
      <rect x="18" y="152" width="55" height="3" rx="1.5" fill="white" opacity="0.25"/>
      <rect x="18" y="170" width="42" height="4" rx="2" fill="white" opacity="0.5"/>
      <rect x="18" y="180" width="60" height="3" rx="1.5" fill="white" opacity="0.25"/>
    </svg>`,
    map: `<svg viewBox="0 0 110 190" xmlns="http://www.w3.org/2000/svg">
      <rect width="110" height="190" fill="${color1}"/>
      <rect x="0" y="0" width="110" height="34" fill="${color2}" opacity="0.85"/>
      <rect x="10" y="10" width="50" height="7" rx="3.5" fill="white" opacity="0.8"/>
      <rect x="10" y="22" width="35" height="5" rx="2.5" fill="white" opacity="0.45"/>
      <rect x="8" y="42" width="94" height="100" rx="8" fill="${color2}" opacity="0.15"/>
      <line x1="8" y1="75" x2="102" y2="75" stroke="white" stroke-opacity="0.07" stroke-width="1"/>
      <line x1="8" y1="108" x2="102" y2="108" stroke="white" stroke-opacity="0.07" stroke-width="1"/>
      <line x1="40" y1="42" x2="40" y2="142" stroke="white" stroke-opacity="0.07" stroke-width="1"/>
      <line x1="75" y1="42" x2="75" y2="142" stroke="white" stroke-opacity="0.07" stroke-width="1"/>
      <polyline points="30,130 45,95 60,85 80,65" fill="none" stroke="${color2}" stroke-width="3" stroke-opacity="0.9" stroke-linecap="round"/>
      <circle cx="80" cy="65" r="8" fill="${color2}" opacity="0.9"/>
      <circle cx="80" cy="65" r="4" fill="white" opacity="0.9"/>
      <circle cx="30" cy="130" r="6" fill="white" opacity="0.3"/>
      <circle cx="30" cy="130" r="3" fill="white" opacity="0.8"/>
      <rect x="8" y="150" width="94" height="34" rx="8" fill="${color2}" opacity="0.25"/>
      <rect x="16" y="157" width="40" height="5" rx="2.5" fill="white" opacity="0.6"/>
      <rect x="16" y="168" width="60" height="4" rx="2" fill="white" opacity="0.3"/>
    </svg>`,
    list: `<svg viewBox="0 0 110 190" xmlns="http://www.w3.org/2000/svg">
      <rect width="110" height="190" fill="${color1}"/>
      <rect x="0" y="0" width="110" height="36" fill="${color2}" opacity="0.8"/>
      <rect x="12" y="12" width="46" height="7" rx="3.5" fill="white" opacity="0.85"/>
      <rect x="12" y="24" width="30" height="5" rx="2.5" fill="white" opacity="0.4"/>
      <rect x="10" y="46" width="90" height="24" rx="7" fill="${color2}" opacity="0.12"/>
      <circle cx="24" cy="58" r="6" fill="${color2}" opacity="0.7"/>
      <rect x="36" y="53" width="30" height="4" rx="2" fill="white" opacity="0.55"/>
      <rect x="36" y="61" width="50" height="3" rx="1.5" fill="white" opacity="0.25"/>
      <rect x="10" y="76" width="90" height="24" rx="7" fill="${color2}" opacity="0.15"/>
      <circle cx="24" cy="88" r="6" fill="${color2}" opacity="0.7"/>
      <rect x="36" y="83" width="30" height="4" rx="2" fill="white" opacity="0.55"/>
      <rect x="36" y="91" width="50" height="3" rx="1.5" fill="white" opacity="0.25"/>
      <rect x="10" y="106" width="90" height="24" rx="7" fill="${color2}" opacity="0.18"/>
      <circle cx="24" cy="118" r="6" fill="${color2}" opacity="0.7"/>
      <rect x="36" y="113" width="30" height="4" rx="2" fill="white" opacity="0.55"/>
      <rect x="36" y="121" width="50" height="3" rx="1.5" fill="white" opacity="0.25"/>
      <rect x="10" y="136" width="90" height="24" rx="7" fill="${color2}" opacity="0.12"/>
      <circle cx="24" cy="148" r="6" fill="${color2}" opacity="0.7"/>
      <rect x="36" y="143" width="30" height="4" rx="2" fill="white" opacity="0.55"/>
      <rect x="36" y="151" width="50" height="3" rx="1.5" fill="white" opacity="0.25"/>
      <rect x="10" y="166" width="90" height="18" rx="7" fill="${color2}" opacity="0.1"/>
    </svg>`,
    chat: `<svg viewBox="0 0 110 190" xmlns="http://www.w3.org/2000/svg">
      <rect width="110" height="190" fill="${color1}"/>
      <rect x="0" y="0" width="110" height="34" fill="${color2}" opacity="0.8"/>
      <rect x="12" y="12" width="40" height="7" rx="3.5" fill="white" opacity="0.8"/>
      <rect x="8" y="42" width="70" height="26" rx="12" fill="${color2}" opacity="0.4"/>
      <rect x="12" y="46" width="60" height="4" rx="2" fill="white" opacity="0.3"/>
      <rect x="12" y="54" width="45" height="4" rx="2" fill="white" opacity="0.2"/>
      <rect x="32" y="76" width="70" height="26" rx="12" fill="${color2}" opacity="0.7"/>
      <rect x="36" y="80" width="58" height="4" rx="2" fill="white" opacity="0.5"/>
      <rect x="36" y="88" width="42" height="4" rx="2" fill="white" opacity="0.35"/>
      <rect x="8" y="110" width="60" height="22" rx="12" fill="${color2}" opacity="0.35"/>
      <rect x="12" y="115" width="50" height="4" rx="2" fill="white" opacity="0.3"/>
      <rect x="12" y="123" width="35" height="4" rx="2" fill="white" opacity="0.2"/>
      <rect x="32" y="140" width="70" height="22" rx="12" fill="${color2}" opacity="0.6"/>
      <rect x="36" y="145" width="55" height="4" rx="2" fill="white" opacity="0.5"/>
      <rect x="36" y="153" width="38" height="4" rx="2" fill="white" opacity="0.3"/>
      <rect x="8" y="168" width="94" height="16" rx="8" fill="white" opacity="0.08"/>
      <rect x="16" y="173" width="50" height="4" rx="2" fill="white" opacity="0.18"/>
    </svg>`,
    form: `<svg viewBox="0 0 110 190" xmlns="http://www.w3.org/2000/svg">
      <rect width="110" height="190" fill="${color1}"/>
      <rect x="0" y="0" width="110" height="34" fill="${color2}" opacity="0.8"/>
      <rect x="12" y="12" width="40" height="7" rx="3.5" fill="white" opacity="0.8"/>
      <rect x="10" y="44" width="28" height="4" rx="2" fill="white" opacity="0.4"/>
      <rect x="10" y="54" width="90" height="13" rx="6" fill="${color2}" opacity="0.2"/>
      <rect x="10" y="75" width="28" height="4" rx="2" fill="white" opacity="0.4"/>
      <rect x="10" y="85" width="90" height="13" rx="6" fill="${color2}" opacity="0.2"/>
      <rect x="10" y="106" width="28" height="4" rx="2" fill="white" opacity="0.4"/>
      <rect x="10" y="116" width="90" height="13" rx="6" fill="${color2}" opacity="0.2"/>
      <rect x="10" y="137" width="28" height="4" rx="2" fill="white" opacity="0.4"/>
      <rect x="10" y="147" width="90" height="13" rx="6" fill="${color2}" opacity="0.2"/>
      <rect x="22" y="168" width="66" height="16" rx="8" fill="${color2}" opacity="0.9"/>
      <rect x="36" y="173" width="38" height="4" rx="2" fill="white" opacity="0.8"/>
    </svg>`
  };
  return svgs[type] || svgs.dashboard;
}

const APPS = [
  {
    id: 'ess', name: 'ESS HR', company: 'Ionob Technologies', period: 'Jul 2025 – Present', color: 'ic-blue', iconEmoji: '👤', iconImg: 'images/stimes.png', iconBg: '#3b82f6',
    desc: 'Employee Self Service HRMS app for attendance, leave, payroll & approvals.',
    bullets: ['Developing HRMS mobile app for employee management, attendance, leave, payroll & approvals', 'Implemented BLoC architecture with clean structure and scalable modules', 'Integrated REST APIs, biometric authentication & deep linking', 'Optimized local persistence using Hive CE', 'Implemented Google Maps, location tracking & real-time attendance'],
    tags: [['Flutter', ''], ['BLoC', 'purple'], ['Hive CE', ''], ['Google Maps', 'green'], ['Biometric Auth', 'pink'], ['REST APIs', '']],
    screenshots: [{ img: 'images/ess/Preview.png' }, { img: 'images/ess/Preview-1.png' }, { img: 'images/ess/Preview-2.png' }, { img: 'images/ess/Preview-3.png' }, { img: 'images/ess/Preview-4.png' }, { img: 'images/ess/Preview-5.png' }], links: []
  },
  {
    id: 'kiosk', name: 'KIOSK', company: 'Ionob Technologies', period: 'Jul 2025 – Present', color: 'ic-indigo', iconEmoji: '🖥️', iconImg: 'images/Stimes%20kiosk.png', iconBg: '#6366f1',
    desc: 'Tablet-based attendance kiosk for office environments with real-time sync.',
    bullets: ['Developed tablet-based attendance system for office environments', 'Implemented QR scan, Face authentication & PIN-based check-in', 'Real-time sync with backend using REST APIs and WebSocket', 'Designed responsive UI optimized for large screen devices'],
    tags: [['Flutter', ''], ['WebSocket', 'purple'], ['QR Scan', ''], ['Face Auth', 'pink'], ['Tablet UI', 'green']],
    screenshots: [{ img: 'images/KIOSK/Setup%20screen.png' }, { img: 'images/KIOSK/4DIGIT%20PIN%20KIOSK.png' }, { img: 'images/KIOSK/Face%20ID%20Kiosk.png' }, { img: 'images/KIOSK/QR%20Scanner%20Kiosk.png' }, { img: 'images/KIOSK/QR%20Code%20Generator%20Kiosk.png' }, { img: 'images/KIOSK/Network%20Error%20Screen.png' }], links: []
  },
  {
    id: 'twsp', name: 'Twaddan SP', company: 'Dataspot Technologies', period: 'Feb 2024 – Jul 2025', color: 'ic-teal', iconEmoji: '🚗', iconImg: 'images/twaddan/logo.webp', iconContain: true, iconBg: '#14b8a6',
    desc: 'Driver app — Firebase, real-time location, multilingual, Play Store + App Store.',
    bullets: ['Firebase integration, real-time location tracking, multilingual notifications', 'Handled both Android and iOS builds', 'Tested and deployed to Play Store and App Store'],
    tags: [['Flutter', ''], ['Firebase', 'green'], ['Real-time', ''], ['iOS Deploy', 'pink'], ['Multilingual', 'purple']],
    screenshots: [{ img: 'images/twaddan/twddan1.webp' }, { img: 'images/twaddan/twaddan2.webp' }, { img: 'images/twaddan/twaddan3.webp' }],
    links: [{ label: 'Play Store', url: '#' }, { label: 'App Store', url: '#', o: 1 }]
  },
  {
    id: 'twcust', name: 'Twaddan App', company: 'Dataspot Technologies', period: 'Feb 2024 – Jul 2025', color: 'ic-sky', iconEmoji: '🛵', iconImg: 'images/twaddan/twaddan%20logo.webp', iconContain: true, iconBg: '#0ea5e9',
    desc: 'Customer booking app with MVVM, Jetpack Compose, payments & notifications.',
    bullets: ['Native Android app using MVVM architecture with Jetpack Compose', 'Built features in Kotlin & Java — booking, payments, offers, notifications', 'Integrated REST APIs and WebHook-based real-time updates'],
    tags: [['Android', ''], ['MVVM', 'purple'], ['Jetpack Compose', ''], ['Kotlin', 'pink'], ['Payments', 'green']],
    screenshots: [{ img: 'images/twaddan/1.webp' }, { img: 'images/twaddan/2.webp' }, { img: 'images/twaddan/3.webp' }, { img: 'images/twaddan/4.webp' }],
    links: [{ label: 'Play Store', url: '#' }]
  },
  {
    id: 'vfuel', name: 'V Fuel Driver', company: 'Dataspot Technologies', period: 'Feb 2024 – Jul 2025', color: 'ic-amber', iconEmoji: '⛽', iconImg: 'images/vfuel/VF-logo.png', iconContain: true, iconBg: '#f59e0b',
    desc: 'Native Android driver app for live fuel delivery tracking with Google Maps.',
    bullets: ['Developed native Android app using MVP architecture in Java', 'Implemented order handling, tracking & reporting features', 'Integrated REST APIs and Google Maps for live operations'],
    tags: [['Android', ''], ['MVP', 'purple'], ['Java', ''], ['Google Maps', 'green']],
    screenshots: [{ img: 'images/vfuel/1.jpg' }, { img: 'images/vfuel/2.png' }, { img: 'images/vfuel/3.png' }, { img: 'images/vfuel/4.jpg' }], links: []
  },
  {
    id: 'tahsin', name: 'Tahsin', company: 'Dataspot Technologies', period: 'Feb 2024 – Jul 2025', color: 'ic-lime', iconEmoji: '📋', iconBg: '#84cc16',
    desc: 'Task tracking, reporting & engineer supervision app built in Java.',
    bullets: ['Native Android app using MVP architecture with Java', 'Developed modules for task tracking, reporting & engineer supervision'],
    tags: [['Android', ''], ['MVP', 'purple'], ['Java', ''], ['Task Mgmt', 'green']],
    screenshots: [{ t: 'dashboard', c1: '#0d160a', c2: '#84cc16' }, { t: 'list', c1: '#0d160a', c2: '#65a30d' }, { t: 'form', c1: '#0d160a', c2: '#84cc16' }, { t: 'chat', c1: '#0d160a', c2: '#65a30d' }], links: []
  },
  {
    id: 'cway', name: 'Cityway Limo', company: 'Dataspot Technologies', period: 'Feb 2024 – Jul 2025', color: 'ic-violet', iconEmoji: '🚙', iconImg: 'images/CITYWAY/logo.png', iconContain: true, iconBg: '#7c3aed',
    desc: 'Luxury limousine booking with RTL, dark mode & real-time trip updates.',
    bullets: ['Implemented GetX, Google Maps, RTL/dark mode, real-time trip updates', 'Managed real-time status updates and ride flow'],
    tags: [['Flutter', ''], ['GetX', 'purple'], ['Google Maps', 'green'], ['RTL', ''], ['Dark Mode', 'pink']],
    screenshots: [{ img: 'images/CITYWAY/first.png' }, { img: 'images/CITYWAY/onboard_1.png' }, { img: 'images/CITYWAY/onboard_2.jpg' }, { img: 'images/CITYWAY/onboard_3.jpg' }, { img: 'images/CITYWAY/Boardtwo.png' }, { img: 'images/CITYWAY/Boardfour.png' }, { img: 'images/CITYWAY/carousel_1.png' }, { img: 'images/CITYWAY/carousel_2.png' }],
    links: [{ label: 'citywaylimo.ae', url: 'https://citywaylimo.ae', o: 1 }]
  },
  {
    id: 'cwpilot', name: 'Cityway Pilot', company: 'Dataspot Technologies', period: 'Feb 2024 – Jul 2025', color: 'ic-rose', iconEmoji: '🧑‍✈️', iconImg: 'images/CITYWAY/logo.png', iconContain: true, iconBg: '#f43f5e',
    desc: 'Driver pilot app with OTP auth, background tracking & GetX state management.',
    bullets: ['Built login, OTP verification & profile modules using Flutter and GetX', 'Integrated background services for driver status tracking'],
    tags: [['Flutter', ''], ['GetX', 'purple'], ['OTP Auth', 'pink'], ['Background Svc', 'green']],
    screenshots: [{ img: 'images/CITYWAY/first.png' }, { img: 'images/CITYWAY/onboard_1.png' }, { img: 'images/CITYWAY/onboard_2.jpg' }, { img: 'images/CITYWAY/onboard_3.jpg' }, { img: 'images/CITYWAY/Boardtwo.png' }, { img: 'images/CITYWAY/Boardfour.png' }, { img: 'images/CITYWAY/carousel_1.png' }, { img: 'images/CITYWAY/carousel_2.png' }],
    links: [{ label: 'citywaylimo.ae', url: 'https://citywaylimo.ae', o: 1 }]
  },
  {
    id: 'vansale', name: 'Van Sale', company: 'Beeka Technologies', period: '2023', color: 'ic-green', iconEmoji: '🚚', iconImg: 'images/KOT/logo.jpg', iconContain: true, iconBg: '#10b981',
    desc: 'Sales management app from scratch with SQLite sync & authentication.',
    bullets: ['Designed and developed app from scratch using Flutter', 'Authentication, product listings, SQL database sync'],
    tags: [['Flutter', ''], ['SQLite', 'green'], ['Authentication', 'purple']],
    screenshots: [{ t: 'login', c1: '#051a10', c2: '#10b981' }, { t: 'list', c1: '#051a10', c2: '#059669' }, { t: 'dashboard', c1: '#051a10', c2: '#10b981' }, { t: 'form', c1: '#051a10', c2: '#059669' }], links: []
  },
  {
    id: 'kot', name: 'KOT App', company: 'Beeka Technologies', period: '2023', color: 'ic-red', iconEmoji: '🍳', iconImg: 'images/KOT/logo.jpg', iconContain: true, iconBg: '#ef4444',
    desc: 'Kitchen Order Ticket app with real-time updates and print-ready receipts.',
    bullets: ['Real-time KOT updates for kitchen staff', 'Order history and print-ready receipts'],
    tags: [['Flutter', ''], ['Real-time', 'pink'], ['Receipt Print', 'green']],
    screenshots: [{ img: 'images/KOT/1.jpg' }, { img: 'images/KOT/2.jpg' }], links: []
  }
];

const DOCK = [
  { id: 'about', name: 'About', color: 'ic-slate', iconEmoji: '🙋', iconBg: '#475569', type: 'about' },
  { id: 'skills', name: 'Skills', color: 'ic-purple', iconEmoji: '⚡', iconBg: '#8b5cf6', type: 'skills' },
  { id: 'edu', name: 'Education', color: 'ic-green', iconEmoji: '🎓', iconBg: '#10b981', type: 'edu' },
  { id: 'contact', name: 'Contact', color: 'ic-pink', iconEmoji: '📬', iconBg: '#ec4899', type: 'contact' }
];

const SKILLS = [
  { icon: '📱', name: 'Languages & Frameworks', tags: [['Kotlin', ''], ['Java', ''], ['Flutter', ''], ['Dart', '']] },
  { icon: '🤖', name: 'Android Development', tags: [['Android SDK', ''], ['MVVM', 'purple'], ['MVP', 'purple'], ['Jetpack Compose', ''], ['REST APIs', ''], ['Firebase', 'green']] },
  { icon: '⚡', name: 'State Management', tags: [['Provider', 'purple'], ['GetX', 'purple'], ['Bloc', 'purple'], ['Riverpod', 'purple']] },
  { icon: '🛠', name: 'Tools & Platforms', tags: [['Firebase', 'green'], ['SQLite', ''], ['Git', ''], ['GitHub', ''], ['Android Studio', 'pink'], ['VS Code', 'pink']] },
  { icon: '🌐', name: 'Integrations', tags: [['Google Maps', ''], ['Payment Gateways', ''], ['FCM', 'green'], ['Meta Pixel', ''], ['WebSocket', 'purple'], ['Lottie', '']] },
  { icon: '🚀', name: 'Deployment', tags: [['Play Store', 'green'], ['App Store', 'green'], ['Figma→Flutter', ''], ['Hive CE', 'purple'], ['Zoho Sprint', '']] }
];

function adjustColor(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, ((n >> 16) & 0xff) - 40);
  const g = Math.max(0, ((n >> 8) & 0xff) - 40);
  const b = Math.max(0, (n & 0xff) - 40);
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}

function iconBoxHtml(app, large) {
  const cls = large ? 'app-icon-large' : 'icon-box';
  const bg = app.iconBg || '#3b82f6';
  const emoji = app.iconEmoji || '📱';
  const fit = app.iconContain ? 'contain' : 'cover';
  const pad = app.iconContain ? (large ? '6px' : '4px') : '0';
  const inner = app.iconImg ? `<img src="${app.iconImg}" alt="${app.name}" style="width:100%;height:100%;object-fit:${fit};display:block;padding:${pad};box-sizing:border-box;"/>` : `<div class="icon-placeholder" style="font-size:${large ? 30 : 26}px">${emoji}</div>`;
  const boxBg = app.iconContain ? 'transparent' : `linear-gradient(135deg,${bg},${adjustColor(bg)})`;
  const boxShadow = app.iconContain ? 'box-shadow:none;' : '';
  return `<div class="${cls} ${app.color}" style="background:${boxBg};${boxShadow}">${inner}</div>`;
}

function dockIconHtml(app) {
  const bg = app.iconBg || '#475569';
  const emoji = app.iconEmoji || '📱';
  return `<div class="icon-box ${app.color}" style="background:linear-gradient(135deg,${bg},${adjustColor(bg)})"><div class="icon-placeholder" style="font-size:22px">${emoji}</div></div>`;
}

function backBtn(fn) {
  return `<div class="app-back" onclick="${fn}"><svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>Home</div>`;
}

function screenshotsSection(app) {
  if (!app.screenshots || !app.screenshots.length) return '';
  const frames = app.screenshots.map(s => {
    const inner = s.img ? `<img src="${s.img}" alt="${app.name}" style="width:110px;height:190px;object-fit:cover;display:block;"/>` : makeScreenshot(s.t, s.c1, s.c2, app.name);
    return `<div class="screenshot-frame">${inner}</div>`;
  }).join('');
  return `<div class="section-label" style="display:flex;align-items:center;gap:6px;"><span>App Preview</span><span style="font-size:9px;color:var(--muted);font-weight:500;text-transform:none;letter-spacing:0;background:var(--app-card);padding:2px 7px;border-radius:8px;border:1px solid var(--app-border);">Scroll →</span></div>
  <div class="screenshots-scroll"><div class="screenshots-row">${frames}</div></div>`;
}

function projectHtml(app) {
  const bullets = app.bullets.map(b => `<li><span class="bullet-dot"></span>${b}</li>`).join('');
  const tags = app.tags.map(([t, c]) => `<span class="tag ${c}">${t}</span>`).join('');
  const links = app.links.length ? `<div class="store-links">${app.links.map(l => `<a href="${l.url}" target="_blank" class="store-btn ${l.o ? 'outline' : ''}">${l.label}</a>`).join('')}</div>` : '';
  return `<div class="app-header">${backBtn(`closeApp('${app.id}')`)}<div class="app-hero">${iconBoxHtml(app, true)}<div class="app-title-block"><div class="app-title">${app.name}</div><div class="app-company">${app.company}</div><div class="app-period">${app.period}</div></div></div></div>
  <div class="app-divider"></div>
  <div class="app-content"><p style="font-size:13.5px;font-weight:500;color:var(--muted);margin-bottom:14px;line-height:1.6;">${app.desc}</p>
  <div class="section-label">What I built</div><ul class="bullet-list">${bullets}</ul>
  <div class="section-label">Tech Stack</div><div class="tags">${tags}</div>${links}
  ${screenshotsSection(app)}</div>`;
}

function specialHtml(app) {
  if (app.type === 'about') return `<div class="app-header">${backBtn(`closeApp('${app.id}')`)}<div class="app-hero">${iconBoxHtml(app, true)}<div class="app-title-block"><div class="app-title">About Me</div><div class="app-company">Asharudheen KC</div></div></div></div>
  <div class="app-divider"></div>
  <div class="app-content">
    <div class="info-card"><div class="info-card-row"><p style="font-size:13px;font-weight:500;color:var(--muted);line-height:1.7;padding:4px 0;">Mobile Application Developer with experience in Flutter and Android (Kotlin/Java), building scalable and high-performance applications. Strong understanding of MVVM and MVP architecture, REST APIs, and modern mobile development practices.</p></div></div>
    <div class="section-label">Work History</div>
    <div class="info-card">
      <div class="info-card-row"><div class="info-icon ic-blue" style="font-size:14px;">🏢</div><div><div style="font-size:13px;font-weight:800;color:var(--text);">Ionob Technologies</div><div style="font-size:11px;color:var(--muted);margin-top:2px;">App Developer · Jul 2025 – Present</div></div></div>
      <div class="info-card-row"><div class="info-icon ic-teal" style="font-size:14px;">🏢</div><div><div style="font-size:13px;font-weight:800;color:var(--text);">Dataspot Technologies</div><div style="font-size:11px;color:var(--muted);margin-top:2px;">Mobile App Developer · Feb 2024 – Jul 2025</div></div></div>
      <div class="info-card-row"><div class="info-icon ic-green" style="font-size:14px;">🏢</div><div><div style="font-size:13px;font-weight:800;color:var(--text);">Beeka Technologies</div><div style="font-size:11px;color:var(--muted);margin-top:2px;">Flutter Developer · 2023</div></div></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:4px;">
      <div class="info-card" style="text-align:center;padding:14px 8px;"><div style="font-size:28px;font-weight:900;color:var(--accent);">10</div><div style="font-size:10px;color:var(--muted);font-weight:700;margin-top:2px;text-transform:uppercase;letter-spacing:.06em;">Projects</div></div>
      <div class="info-card" style="text-align:center;padding:14px 8px;"><div style="font-size:28px;font-weight:900;color:var(--accent2);">3</div><div style="font-size:10px;color:var(--muted);font-weight:700;margin-top:2px;text-transform:uppercase;letter-spacing:.06em;">Companies</div></div>
    </div>
  </div>`;
  if (app.type === 'skills') return `<div class="app-header">${backBtn(`closeApp('${app.id}')`)}<div class="app-hero">${iconBoxHtml(app, true)}<div class="app-title-block"><div class="app-title">Skills</div><div class="app-company">Technical Expertise</div></div></div></div>
  <div class="app-divider"></div>
  <div class="app-content">${SKILLS.map(s => `<div class="skill-row"><div class="skill-emoji">${s.icon}</div><div style="flex:1;min-width:0;"><div class="skill-name">${s.name}</div><div class="tags">${s.tags.map(([t, c]) => `<span class="tag ${c}">${t}</span>`).join('')}</div></div></div>`).join('')}</div>`;
  if (app.type === 'edu') return `<div class="app-header">${backBtn(`closeApp('${app.id}')`)}<div class="app-hero">${iconBoxHtml(app, true)}<div class="app-title-block"><div class="app-title">Education</div></div></div></div>
  <div class="app-divider"></div>
  <div class="app-content"><div class="info-card">
    <div class="info-card-row"><div class="info-icon ic-purple" style="font-size:18px;">🎓</div><div><div style="font-size:13.5px;font-weight:800;color:var(--text);">Master of Computer Application</div><div style="font-size:11px;color:var(--muted);margin-top:3px;">Indira Gandhi University</div></div></div>
    <div class="info-card-row"><div class="info-icon ic-green" style="font-size:18px;">💻</div><div><div style="font-size:13.5px;font-weight:800;color:var(--text);">B.Voc Software Development</div><div style="font-size:11px;color:var(--muted);margin-top:3px;">Calicut University</div></div></div>
  </div></div>`;
  if (app.type === 'contact') return `<div class="app-header">${backBtn(`closeApp('${app.id}')`)}<div class="app-hero">${iconBoxHtml(app, true)}<div class="app-title-block"><div class="app-title">Contact</div><div class="app-company">Let's Connect</div></div></div></div>
  <div class="app-divider"></div>
  <div class="app-content"><div class="info-card">
    <div class="info-card-row"><div class="info-icon ic-blue">✉️</div><div><div style="font-size:10px;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">Email</div><a href="mailto:asharudheen.kmp@gmail.com" style="font-size:12px;color:var(--accent);font-weight:700;text-decoration:none;">asharudheen.kmp@gmail.com</a></div></div>
    <div class="info-card-row"><div class="info-icon ic-green">📞</div><div><div style="font-size:10px;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">Phone</div><a href="tel:+919633157916" style="font-size:13px;color:var(--accent);font-weight:700;text-decoration:none;">+91 96331 57916</a></div></div>
    <div class="info-card-row"><div class="info-icon ic-indigo">💼</div><div><div style="font-size:10px;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">LinkedIn</div><a href="https://linkedin.com/in/asharudheen-kc-30a79813b" target="_blank" style="font-size:11.5px;color:var(--accent);font-weight:700;text-decoration:none;">asharudheen-kc-30a79813b</a></div></div>
  </div></div>`;
  return '';
}

function attachDragToClose(s, id) {
  const header = s.querySelector('.app-header');
  if (!header) return;
  let startY = 0, curY = 0, dragging = false;
  const onDown = (e) => {
    if (e.target.closest('.app-back')) return;
    const t = e.touches ? e.touches[0] : e;
    startY = t.clientY; curY = 0; dragging = true;
    s.style.transition = 'none';
  };
  const onMove = (e) => {
    if (!dragging) return;
    const t = e.touches ? e.touches[0] : e;
    curY = t.clientY - startY;
    if (curY < 0) curY = 0;
    const scale = Math.max(0.85, 1 - curY / 1800);
    s.style.transform = `translateY(${curY}px) scale(${scale})`;
    s.style.borderRadius = Math.min(28, curY / 8) + 'px';
  };
  const onUp = () => {
    if (!dragging) return;
    dragging = false;
    s.style.transition = '';
    s.style.transform = '';
    s.style.borderRadius = '';
    if (curY > 110) closeApp(id);
  };
  header.addEventListener('touchstart', onDown, { passive: true });
  header.addEventListener('touchmove', onMove, { passive: true });
  header.addEventListener('touchend', onUp);
  header.addEventListener('touchcancel', onUp);
  header.addEventListener('mousedown', onDown);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onUp);
}

function openApp(id) {
  const app = [...APPS, ...DOCK].find(a => a.id === id);
  if (!app) return;
  let s = document.getElementById('s_' + id);
  if (!s) {
    s = document.createElement('div'); s.id = 's_' + id; s.className = 'app-screen';
    s.innerHTML = app.type ? specialHtml(app) : projectHtml(app);
    document.getElementById('appScreens').appendChild(s);
    attachDragToClose(s, id);
  }
  s.classList.remove('closing');
  document.getElementById('homeScreen').classList.add('hidden');
  requestAnimationFrame(() => s.classList.add('open'));
}

function closeApp(id) {
  const s = document.getElementById('s_' + id);
  if (!s) return;
  s.classList.add('closing');
  s.classList.remove('open');
  setTimeout(() => { s.classList.remove('closing'); document.getElementById('homeScreen').classList.remove('hidden'); }, 400);
}

function toggleTheme() {
  const h = document.documentElement;
  const light = h.hasAttribute('data-light');
  if (light) { h.removeAttribute('data-light'); document.querySelector('.theme-toggle').textContent = '🌙'; }
  else { h.setAttribute('data-light', ''); document.querySelector('.theme-toggle').textContent = '☀️'; }
}

function updateClock() { const n = new Date(); document.getElementById('clock').textContent = n.getHours() + ':' + String(n.getMinutes()).padStart(2, '0'); }
setInterval(updateClock, 15000); updateClock();

(function () { const c = document.getElementById('stars'); for (let i = 0; i < 60; i++) { const s = document.createElement('div'); s.className = 'star'; s.style.left = Math.random() * 100 + '%'; s.style.top = Math.random() * 100 + '%'; s.style.setProperty('--d', (2 + Math.random() * 4) + 's'); s.style.setProperty('--delay', Math.random() * 5 + 's'); s.style.setProperty('--op', (0.3 + Math.random() * 0.6).toFixed(2)); c.appendChild(s); } })();

(function () { const grid = document.getElementById('appGrid'); APPS.forEach(app => { const el = document.createElement('div'); el.className = 'app-icon'; el.innerHTML = `${iconBoxHtml(app)}<div class="icon-label">${app.name}</div>`; el.onclick = () => openApp(app.id); grid.appendChild(el); }); })();

(function () { const dock = document.getElementById('dockEl'); DOCK.forEach(app => { const el = document.createElement('div'); el.className = 'app-icon'; el.innerHTML = `${dockIconHtml(app)}<div class="icon-label">${app.name}</div>`; el.onclick = () => openApp(app.id); dock.appendChild(el); }); })();