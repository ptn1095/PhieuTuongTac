/* ===== PHONG CÁCH LÂU ĐÀI CHÂU ÂU ===== */
const ctower = (x, y, w, h, roof, flag) => `<rect x="${x - w/2}" y="${y - h}" width="${w}" height="${h}" fill="#E9DCC9" stroke="${O}" stroke-width="6"/>
  ${[...Array(Math.max(2, Math.round(w/26)))].map((_, i, a) => `<rect x="${x - w/2 + i*w/a.length + 3}" y="${y - h - 16}" width="${w/a.length - 6}" height="18" fill="#E9DCC9" stroke="${O}" stroke-width="5"/>`).join('')}
  <path d="M${x - w/2 - 8} ${y - h - 14} L${x} ${y - h - w*1.15} L${x + w/2 + 8} ${y - h - 14}Z" fill="${roof}" stroke="${O}" stroke-width="6" stroke-linejoin="round"/>
  <line x1="${x}" y1="${y - h - w*1.15}" x2="${x}" y2="${y - h - w*1.15 - 40}" stroke="${O}" stroke-width="5"/><path class="flag" d="M${x} ${y - h - w*1.15 - 40} l34 9 l-34 9Z" fill="${flag}" stroke="${O}" stroke-width="4" style="transform-origin:${x}px ${y - h - w*1.15 - 31}px"/>
  <path d="M${x - w*.16} ${y - h*.42} V${y - h*.62} Q${x} ${y - h*.78} ${x + w*.16} ${y - h*.62} V${y - h*.42}Z" fill="#4A1D63" stroke="${O}" stroke-width="4"/>`;
const castle = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-150" y="-80" width="300" height="80" fill="#D8C8AE" stroke="${O}" stroke-width="6"/>${[...Array(9)].map((_, i) => `<rect x="${-148 + i*34}" y="-96" width="22" height="18" fill="#D8C8AE" stroke="${O}" stroke-width="5"/>`).join('')}
  <path d="M-30 0 V-46 Q0 -76 30 -46 V0Z" fill="#8D5524" stroke="${O}" stroke-width="6"/>${ctower(-150, 0, 70, 150, '#6B2D8A', '#C0392B')}${ctower(150, 0, 70, 150, '#6B2D8A', '#F5C542')}${ctower(0, -70, 84, 120, '#8E1B2A', '#F5C542')}</g>`;
const crownI = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-50 20 L-50 -24 L-26 -6 L0 -36 L26 -6 L50 -24 L50 20Z" fill="#F5C542" stroke="${O}" stroke-width="6" stroke-linejoin="round"/><rect x="-54" y="16" width="108" height="16" rx="6" fill="#D4A017" stroke="${O}" stroke-width="5"/><circle cx="0" cy="4" r="8" fill="#C0392B" stroke="${O}" stroke-width="3"/><circle cx="-30" cy="8" r="6" fill="#1982C4" stroke="${O}" stroke-width="3"/><circle cx="30" cy="8" r="6" fill="#2DA44E" stroke="${O}" stroke-width="3"/></g>`;
const gem = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><circle r="30" fill="#F5C542" stroke="${O}" stroke-width="5"/><path d="M0 -18 L16 0 L0 18 L-16 0Z" fill="#C0392B" stroke="${O}" stroke-width="4"/><circle r="38" fill="none" stroke="#D4A017" stroke-width="4" stroke-dasharray="4 7"/></g>`;
const TH = {
  key: 'lauda', name: 'Lâu đài châu Âu', ic: '🏰',
  bgs: [['#4B2C82', '#1A0F33'], ['#2C3E82', '#0E1433'], ['#7A2348', '#2A0A18'], ['#2F5D50', '#0E211C'], ['#6B4A1D', '#24170A']],
  tbg: ['#5B3A9E', '#140A2A'], rbg: ['#7A2348', '#2A0A18'],
  road: 'rgba(245,197,66,.6)', dot: ['#F5C542', '#4A1D63'], off: ['#B9A27A', '#6B4A1D'],
  conf: ['#F5C542', '#C0392B', '#7B3FA8', '#FFFBF0', '#1982C4', '#2DA44E'],
  crown: `${castle(0, -40, .78)}${star(-280, -120, 14, '#F5C542')}${star(285, -140, 12, '#F5C542')}${star(-230, -40, 9, '#fff')}`,
  edge: ['left:-38px;top:-38px', 'right:-38px;top:-38px', 'left:-38px;bottom:-38px', 'right:-38px;bottom:-38px'].map(p => `<svg class="edg" style="${p}" width="76" height="76" viewBox="-38 -38 76 76">${gem(0, 0, .9)}</svg>`).join(''),
  deco(d) {
    for (let i = 0; i < 26; i++) { const e = mk(d, SV(30, 30, star(15, 15, 13, i % 3 ? '#F5C542' : '#fff')), `left:${rnd(0, 98)}%;top:${rnd(0, 92)}%`); e.className = 'spk'; e.style.animationDelay = -rnd(0, 2.6) + 's'; e.style.scale = rnd(.5, 1.4); }
    mk(d, SV(110, 110, `<path d="M70 10 A46 46 0 1 0 100 80 A36 36 0 1 1 70 10Z" fill="#FFE7A0"/>`), 'right:40px;top:30px;opacity:.7');
    mk(d, SV(520, 300, castle(260, 290, 1)), 'left:50%;bottom:-6px;translate:-50% 0;opacity:.18');
  },
  acc: `<g transform="translate(100 30) scale(.9)"><path d="M-50 20 L-50 -24 L-26 -6 L0 -36 L26 -6 L50 -24 L50 20Z" fill="#F5C542" stroke="${O}" stroke-width="6" stroke-linejoin="round"/><rect x="-54" y="14" width="108" height="14" rx="6" fill="#D4A017" stroke="${O}" stroke-width="5"/><circle cx="0" cy="2" r="7" fill="#C0392B" stroke="${O}" stroke-width="3"/></g>`,
  cert: {
    fh: 'Grenze Gotisch', tw: 800, tsize: 84, ttext: 'Giấy Chứng Nhận', fb: 'Baloo 2', fn: 'Playfair Display', nw: 900,
    ink: '#3B1F0E', name: '#5B1F7A', nstroke: '#FFF6DE', accent: '#8E1B2A', line: '#B8860B', pill: 'rgba(212,160,23,.18)', rank: '#8E1B2A', teacher: '#5B1F7A',
    plq: null, tink: '#FFE7A0', tsh: '#5A0F1A', rib: ['#9B59B6', '#5B1F7A', '#3A0F52'],
    bg(W, H) {
      const corner = (x, y, sx, sy) => `<g transform="translate(${x} ${y}) scale(${sx} ${sy})"><path d="M0 90 V20 Q0 0 20 0 H90" fill="none" stroke="#D4A017" stroke-width="8"/><path d="M14 70 Q14 14 70 14" fill="none" stroke="#D4A017" stroke-width="4"/><circle cx="20" cy="20" r="12" fill="#C0392B" stroke="#D4A017" stroke-width="4"/><path d="M40 40 q20 -6 26 -26 M40 40 q-6 20 -26 26" fill="none" stroke="#B8860B" stroke-width="4" stroke-linecap="round"/></g>`;
      return `<defs><radialGradient id="cg" cx="50%" cy="40%" r="80%"><stop offset="0" stop-color="#5B3A9E"/><stop offset="1" stop-color="#140A2A"/></radialGradient>
        <radialGradient id="pg" cx="50%" cy="50%" r="70%"><stop offset="0" stop-color="#FFF8E4"/><stop offset=".75" stop-color="#F5E2B5"/><stop offset="1" stop-color="#E5C688"/></radialGradient></defs>
        <rect width="${W}" height="${H}" fill="url(#cg)"/>
        ${[...Array(40)].map((_, i) => star(30 + (i*197) % (W - 60), 20 + (i*131) % (H - 40), 6 + i % 3*3, i % 4 ? '#F5C542' : '#fff')).join('')}
        <g opacity=".5">${castle(W/2, H + 40, 2.2)}</g>
        <rect x="78" y="92" width="${W - 156}" height="${H - 176}" rx="10" fill="#4A1D63" stroke="#D4A017" stroke-width="8"/>
        <rect x="100" y="114" width="${W - 200}" height="${H - 220}" rx="6" fill="url(#pg)" stroke="#D4A017" stroke-width="6"/>
        <rect x="116" y="130" width="${W - 232}" height="${H - 252}" rx="4" fill="none" stroke="#6B2D8A" stroke-width="4"/>
        ${corner(122, 136, 1, 1)}${corner(W - 122, 136, -1, 1)}${corner(122, H - 122, 1, -1)}${corner(W - 122, H - 122, -1, -1)}
        <path d="M${W/2 - 470} 70 H${W/2 - 380} V160 H${W/2 - 470} L${W/2 - 440} 115Z" fill="#8E1B2A" stroke="#D4A017" stroke-width="6" stroke-linejoin="round"/>
        <path d="M${W/2 + 470} 70 H${W/2 + 380} V160 H${W/2 + 470} L${W/2 + 440} 115Z" fill="#8E1B2A" stroke="#D4A017" stroke-width="6" stroke-linejoin="round"/>
        <path d="M${W/2 - 400} 46 H${W/2 + 400} Q${W/2 + 420} 105 ${W/2 + 400} 164 H${W/2 - 400} Q${W/2 - 420} 105 ${W/2 - 400} 46Z" fill="#C0392B" stroke="#D4A017" stroke-width="8"/>
        <path d="M${W/2 - 380} 60 H${W/2 + 380}" stroke="#E25A4A" stroke-width="6"/>${crownI(W/2, 20, .7)}
        ${ctower(140, H - 70, 70, 160, '#6B2D8A', '#C0392B')}${ctower(W - 140, H - 70, 70, 160, '#6B2D8A', '#F5C542')}`;
    },
  },
};
