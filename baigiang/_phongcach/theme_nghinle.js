/* ===== PHONG CÁCH NGHÌN LẺ MỘT ĐÊM (giống Thư viện bài giảng) ===== */
const crescent = (x, y, r, c = '#FFF1C2') => `<path d="M${x + r*.2} ${y - r} A${r} ${r} 0 1 0 ${x + r*.2} ${y + r} A${r*.78} ${r*.78} 0 1 1 ${x + r*.2} ${y - r}Z" fill="${c}"/>`;
const dome = (x, y, w, h, c = '#2A8C82') => `<path d="M${x - w/2} ${y} Q${x - w/2} ${y - h*.55} ${x} ${y - h*.85} Q${x + w/2} ${y - h*.55} ${x + w/2} ${y}Z" fill="${c}" stroke="${O}" stroke-width="6" stroke-linejoin="round"/><line x1="${x}" y1="${y - h*.85}" x2="${x}" y2="${y - h}" stroke="${O}" stroke-width="5"/>${crescent(x, y - h - 10, 10, '#F5C86A')}`;
const palace = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})">
  ${[-150, 150].map(m => `<rect x="${m - 16}" y="-170" width="32" height="170" fill="#F3DDB0" stroke="${O}" stroke-width="6"/><rect x="${m - 24}" y="-118" width="48" height="12" fill="#B9832C" stroke="${O}" stroke-width="4"/>${dome(m, -170, 40, 60, '#B9832C')}`).join('')}
  <rect x="-110" y="-90" width="220" height="90" fill="#F3DDB0" stroke="${O}" stroke-width="6"/>${dome(0, -90, 160, 130, '#2A8C82')}${dome(-78, -90, 54, 60, '#8B2C5C')}${dome(78, -90, 54, 60, '#8B2C5C')}
  <path d="M-26 0 V-40 Q0 -72 26 -40 V0Z" fill="#4A2470" stroke="${O}" stroke-width="5"/>${[-70, 70].map(m => `<path d="M${m - 12} -30 V-52 Q${m} -66 ${m + 12} -52 V-30Z" fill="#4A2470" stroke="${O}" stroke-width="4"/>`).join('')}</g>`;
const lantern = (x, y, s, c = '#F5C86A') => `<g transform="translate(${x} ${y}) scale(${s})"><line x1="0" y1="0" x2="0" y2="40" stroke="#B9832C" stroke-width="4"/><path d="M-14 40 H14 L22 56 H-22Z" fill="#B9832C" stroke="${O}" stroke-width="4" stroke-linejoin="round"/>
  <path d="M-22 56 Q-30 90 -14 118 H14 Q30 90 22 56Z" fill="${c}" stroke="${O}" stroke-width="5"/><path d="M-8 64 Q-12 90 -6 110 M8 64 Q12 90 6 110" stroke="#8B2C5C" stroke-width="4" fill="none"/><ellipse cx="0" cy="88" rx="8" ry="14" fill="#FFF3C4" opacity=".9"/><path d="M-14 118 L0 134 L14 118Z" fill="#B9832C" stroke="${O}" stroke-width="4"/></g>`;
const carpetS = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-90 0 Q-45 -16 0 0 T90 0 L80 40 Q35 24 -10 40 T-100 40Z" fill="#8B2C5C" stroke="${O}" stroke-width="5" stroke-linejoin="round"/><path d="M-80 10 Q-40 -4 0 10 T80 10 L74 30 Q34 16 -6 30 T-88 30Z" fill="none" stroke="#F5C86A" stroke-width="4"/>${[-96, 94].map(m => `<path d="M${m} 4 l-12 6 M${m - 2} 20 l-12 6 M${m - 4} 34 l-12 6" stroke="#F5C86A" stroke-width="3"/>`).join('')}</g>`;
const TH = {
  key: 'nghinle', name: 'Nghìn lẻ một đêm', ic: '🌙',
  bgs: [['#3A1D5E', '#0B0A2A'], ['#2A3A7A', '#0A0F2E'], ['#4E1238', '#150616'], ['#1C4E5A', '#071A20'], ['#5A3A12', '#1E1206']],
  tbg: ['#3A1D5E', '#0B0A2A'], rbg: ['#4E1238', '#150616'],
  road: 'rgba(245,200,106,.6)', dot: ['#F5C86A', '#3A1C0E'], off: ['#6E5A8A', '#2A1758'],
  conf: ['#F5C86A', '#FFE9A8', '#8B2C5C', '#2A8C82', '#B06BFF', '#FFFFFF'],
  crown: `${palace(0, -8, .78)}${crescent(-250, -130, 30)}${star(-170, -160, 12, '#F5C86A')}${star(220, -150, 14, '#FFE9A8')}${star(270, -70, 9, '#F5C86A')}`,
  edge: `<svg class="edg lan" style="left:130px;top:-150px" width="60" height="140" viewBox="-30 0 60 140">${lantern(0, 0, 1)}</svg><svg class="edg lan" style="right:130px;top:-150px;animation-delay:-1.7s" width="60" height="140" viewBox="-30 0 60 140">${lantern(0, 0, 1, '#3FC8B9')}</svg>`,
  deco(d) {
    for (let i = 0; i < 44; i++) { const e = mk(d, '', `left:${rnd(0, 99)}%;top:${rnd(0, 96)}%`); e.className = 'tw'; e.style.animationDelay = -rnd(0, 3) + 's'; e.style.scale = rnd(.5, 1.4); }
    mk(d, SV(120, 120, crescent(60, 60, 50)), 'right:50px;top:30px;filter:drop-shadow(0 0 18px rgba(255,230,150,.6))');
    const c = mk(d, SV(230, 80, carpetS(115, 30, 1)), 'top:22%;left:0;opacity:.75'); c.className = 'carpet';
    mk(d, SV(560, 260, palace(280, 255, 1.2)), 'left:50%;bottom:-6px;translate:-50% 0;opacity:.2');
  },
  acc: `<path d="M34 60 Q30 14 100 10 Q170 14 166 60 Q100 40 34 60Z" fill="#8B2C5C" stroke="${O}" stroke-width="5" stroke-linejoin="round"/><path d="M40 48 Q100 26 160 48" fill="none" stroke="#F5C86A" stroke-width="5"/>
    <circle cx="100" cy="34" r="10" fill="#2A8C82" stroke="#F5C86A" stroke-width="4"/><path d="M104 26 Q124 -6 142 4 Q124 8 110 28Z" fill="#FFE9A8" stroke="${O}" stroke-width="3"/>`,
  cert: {
    fh: 'Playfair Display', tw: 800, ttext: 'Giấy Chứng Nhận', tsize: 70, fb: 'Lora', fn: 'Dancing Script', nw: 700, nsize: 104,
    ink: '#3B2412', name: '#6E1F4E', nstroke: '#FFF6DE', accent: '#8B2C5C', line: '#B9832C', pill: 'rgba(185,131,44,.18)', rank: '#8B2C5C', teacher: '#6E1F4E',
    plq: ['#8B2C5C', '#4E1238', '#F5C86A'], prad: 40, tink: '#FFE9A8', tsh: '#2A0618', tglow: '#F5C86A', rib: ['#3FC8B9', '#16857A', '#0B4F49'],
    bg(W, H) {
      const r = prng(9); let st = '';
      for (let i = 0; i < 150; i++) { const x = r()*W, y = r()*H*.9, s = r(); st += `<circle cx="${x}" cy="${y}" r="${.8 + s*2}" fill="#FFE9A8" opacity="${.3 + s*.6}"/>`; }
      return `<defs><radialGradient id="ng" cx="50%" cy="0%" r="110%"><stop offset="0" stop-color="#3A1D5E"/><stop offset=".45" stop-color="#1C1350"/><stop offset="1" stop-color="#0B0A2A"/></radialGradient>
        <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FBF1D6"/><stop offset="1" stop-color="#E9D2A0"/></linearGradient></defs>
        <rect width="${W}" height="${H}" fill="url(#ng)"/>${st}${crescent(W - 110, 110, 56)}
        <g opacity=".55">${palace(W/2, H + 30, 2.4)}</g>
        <path d="M80 ${H - 84} V300 Q80 96 ${W/2} 92 Q${W - 80} 96 ${W - 80} 300 V${H - 84}Z" fill="#3A1C0E" stroke="#B9832C" stroke-width="8"/>
        <path d="M100 ${H - 104} V310 Q100 116 ${W/2} 112 Q${W - 100} 116 ${W - 100} 310 V${H - 104}Z" fill="url(#pg)" stroke="#F5C86A" stroke-width="5"/>
        <path d="M122 ${H - 126} V318 Q122 138 ${W/2} 134 Q${W - 122} 138 ${W - 122} 318 V${H - 126}Z" fill="none" stroke="#B9832C" stroke-width="3" stroke-dasharray="2 10" stroke-linecap="round"/>
        ${lantern(150, 0, 1.5)}${lantern(W - 150, 0, 1.5, '#3FC8B9')}${carpetS(170, H - 50, .9)}${star(60, 500, 16, '#F5C86A')}${star(W - 60, 560, 14, '#FFE9A8')}`;
    },
  },
};
