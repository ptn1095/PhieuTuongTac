/* ===== PHONG CÁCH SA MẠC ===== */
const cactus = (x, y, s, c = '#4FAE2C') => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-14 0 V-120 Q-14 -140 0 -140 Q14 -140 14 -120 V0Z M-14 -60 H-36 Q-50 -60 -50 -74 V-96 Q-50 -106 -42 -106 Q-34 -106 -34 -96 V-78 H-14Z M14 -80 H36 Q50 -80 50 -94 V-112 Q50 -122 42 -122 Q34 -122 34 -112 V-96 H14Z" fill="${c}" stroke="${O}" stroke-width="6" stroke-linejoin="round"/>
  <path d="M-4 -126 V-16 M4 -126 V-16" stroke="#2A6F16" stroke-width="3" opacity=".6"/><circle cx="0" cy="-142" r="9" fill="#FF5DA2" stroke="${O}" stroke-width="4"/></g>`;
const pyramid = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-110 0 L0 -100 L110 0Z" fill="#F2B866" stroke="${O}" stroke-width="6" stroke-linejoin="round"/><path d="M0 -100 L110 0 L30 0Z" fill="#D98B3A" stroke="${O}" stroke-width="6" stroke-linejoin="round"/>${[-70, -40].map(h => `<path d="M${-110 - h*1.1*-1} ${h} H${-h*1.1}" stroke="${O}" stroke-width="3" opacity=".25"/>`).join('')}</g>`;
const sunD = (x, y, r) => `<g transform="translate(${x} ${y})">${[...Array(12)].map((_, i) => `<path d="M0 ${-r - 10} L8 ${-r - 34} L-8 ${-r - 34}Z" fill="#FFB703" transform="rotate(${i*30})"/>`).join('')}<circle r="${r}" fill="#FFD23F" stroke="${O}" stroke-width="6"/><circle cx="${-r*.3}" cy="${-r*.3}" r="${r*.2}" fill="#fff" opacity=".5"/></g>`;
const camel = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-70 0 V-50 Q-70 -70 -50 -76 Q-40 -110 -14 -84 Q0 -112 24 -80 Q40 -72 44 -60 L58 -100 Q62 -116 78 -112 L92 -104 Q96 -96 86 -94 L76 -94 L62 -50 Q56 -40 50 -40 V0 H38 V-34 H-50 V0Z" fill="#E9A64B" stroke="${O}" stroke-width="6" stroke-linejoin="round"/><circle cx="80" cy="-104" r="3" fill="${O}"/></g>`;
const TH = {
  key: 'samac', name: 'Sa mạc', ic: '🌵',
  bgs: [['#F29E4C', '#5B2A1A'], ['#E0662A', '#3E1A12'], ['#D99A2B', '#5A3410'], ['#C4573A', '#3A140E'], ['#9C5A8C', '#2B1230']],
  tbg: ['#F29E4C', '#4A1F12'], rbg: ['#D99A2B', '#4A2A0C'],
  road: 'rgba(255,243,214,.6)', dot: ['#2EC4B6', '#6B2A0B'], off: ['#D9A86B', '#8A3B12'],
  conf: ['#FFC93C', '#E0662A', '#2EC4B6', '#FF5DA2', '#FFF3D6', '#8AC926'],
  crown: `${sunD(0, -112, 54)}${pyramid(-150, -6, .9)}${cactus(-255, 0, .95)}${cactus(240, 0, 1.05, '#8AC926')}${pyramid(140, -4, .7)}
    <path d="M-60 -170 q10 -8 20 0 q10 -8 20 0 M50 -160 q8 -6 16 0 q8 -6 16 0" stroke="${O}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  edge: `<svg class="edg" style="right:-50px;bottom:-30px" width="170" height="130" viewBox="-85 -125 170 130">${camel(-4, 0, .95)}</svg>
    <svg class="edg" style="left:-40px;bottom:-24px" width="90" height="170" viewBox="-45 -165 90 170">${cactus(0, 0, 1.05)}</svg>`,
  deco(d) {
    mk(d, SV(260, 260, sunD(130, 130, 70)), 'right:-40px;top:-40px;opacity:.55;animation:floaty 9s ease-in-out infinite');
    for (let i = 0; i < 34; i++) { const e = mk(d, '', `top:${rnd(0, 100)}%;left:0`); e.className = 'sand'; e.style.animationDuration = rnd(6, 14) + 's'; e.style.animationDelay = -rnd(0, 14) + 's'; }
    const t = mk(d, SV(90, 90, `<circle cx="45" cy="45" r="36" fill="none" stroke="#B07A3B" stroke-width="5" stroke-dasharray="20 8"/><circle cx="45" cy="45" r="22" fill="none" stroke="#B07A3B" stroke-width="5" stroke-dasharray="14 8"/><path d="M15 30 L75 60 M20 65 L70 25" stroke="#B07A3B" stroke-width="4"/>`), 'bottom:8px;left:0;opacity:.7'); t.className = 'tumble';
    mk(d, SV(300, 180, cactus(60, 178, 1.1) + pyramid(200, 178, 1)), 'left:-10px;bottom:-4px;opacity:.35');
  },
  acc: `<path d="M52 44 Q54 2 100 2 Q146 2 148 44Z" fill="#E9C46A" stroke="${O}" stroke-width="5" stroke-linejoin="round"/><rect x="52" y="30" width="96" height="12" fill="#B8481B" stroke="${O}" stroke-width="4"/>
    <ellipse cx="100" cy="46" rx="84" ry="14" fill="#E9C46A" stroke="${O}" stroke-width="5"/>`,
  cert: {
    fh: 'Rowdies', tw: 700, fb: 'Baloo 2', fn: 'Rowdies', nw: 700,
    ink: '#5A2E0C', name: '#C2410C', nstroke: '#FFF6E0', accent: '#8A3B12', line: '#C46A2B', pill: 'rgba(196,106,43,.15)', rank: '#C2190E', teacher: '#B8481B',
    plq: ['#E9783B', '#B8481B', '#6B2A0B'], prad: 16, tink: '#FFF3D6', tsh: '#6B2A0B', rib: ['#2EC4B6', '#1C7C73', '#0E4F49'],
    bg(W, H) {
      const zig = (y, c1, c2) => `<path d="M126 ${y} ${[...Array(Math.floor((W - 252)/28))].map((_, i) => `L${140 + i*28} ${y + (i % 2 ? 0 : 14)}`).join(' ')}" fill="none" stroke="${c1}" stroke-width="6" stroke-linejoin="round"/>${[...Array(Math.floor((W - 252)/56))].map((_, i) => `<circle cx="${154 + i*56}" cy="${y + 26}" r="4" fill="${c2}"/>`).join('')}`;
      return `<defs><linearGradient id="dg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD88A"/><stop offset=".6" stop-color="#F29E4C"/><stop offset="1" stop-color="#C4573A"/></linearGradient>
        <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF8E8"/><stop offset="1" stop-color="#FCE6C2"/></linearGradient></defs>
        <rect width="${W}" height="${H}" fill="url(#dg)"/>${sunD(W/2, 140, 120)}
        <path d="M0 ${H - 210} Q300 ${H - 300} 620 ${H - 220} T1200 ${H - 240} T${W} ${H - 230} V${H} H0Z" fill="#E9A64B"/>
        <path d="M0 ${H - 120} Q400 ${H - 200} 800 ${H - 130} T${W} ${H - 150} V${H} H0Z" fill="#D98B3A"/>
        ${pyramid(150, H - 200, 1.2)}${pyramid(320, H - 190, .8)}${camel(1380, H - 160, 1.1)}
        <rect x="80" y="96" width="${W - 160}" height="${H - 182}" rx="22" fill="#8A3B12"/>
        <rect x="96" y="112" width="${W - 192}" height="${H - 214}" rx="14" fill="url(#pg)" stroke="#C46A2B" stroke-width="8"/>
        ${zig(128, '#D9622B', '#2EC4B6')}${zig(H - 150, '#2EC4B6', '#D9622B')}
        ${cactus(60, H - 30, 1.5)}${cactus(1540, H - 30, 1.3, '#8AC926')}${cactus(40, 300, .9)}`;
    },
  },
};
