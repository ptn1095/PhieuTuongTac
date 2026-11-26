/* ===== PHONG CÁCH TUYẾT MÙA ĐÔNG ===== */
const pine = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-10" y="-20" width="20" height="26" fill="#8D5524" stroke="${O}" stroke-width="5"/>
  ${[[0, 90], [-46, 72], [-88, 54]].map(([dy, w]) => `<path d="M0 ${dy - 80} L${w} ${dy - 14} H${-w}Z" fill="#2E8B57" stroke="${O}" stroke-width="6" stroke-linejoin="round"/><path d="M0 ${dy - 78} L${w*.45} ${dy - 50} Q${w*.2} ${dy - 40} 0 ${dy - 50} Q${-w*.2} ${dy - 40} ${-w*.45} ${dy - 50}Z" fill="#fff"/>`).join('')}</g>`;
const snowman = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><circle cx="0" cy="-40" r="46" fill="#fff" stroke="${O}" stroke-width="6"/><circle cx="0" cy="-118" r="34" fill="#fff" stroke="${O}" stroke-width="6"/>
  <rect x="-36" y="-92" width="72" height="14" rx="7" fill="#E03131" stroke="${O}" stroke-width="4"/><rect x="14" y="-86" width="14" height="38" rx="6" fill="#E03131" stroke="${O}" stroke-width="4"/>
  <circle cx="-11" cy="-124" r="5" fill="${O}"/><circle cx="11" cy="-124" r="5" fill="${O}"/><path d="M0 -114 L26 -108 L0 -104Z" fill="#FF7F11" stroke="${O}" stroke-width="3" stroke-linejoin="round"/>
  <circle cx="0" cy="-54" r="5" fill="${O}"/><circle cx="0" cy="-34" r="5" fill="${O}"/><path d="M-26 -160 H26 V-150 H-26Z M-18 -150 V-186 H18 V-150" fill="#3D405B" stroke="${O}" stroke-width="5"/></g>`;
const flake = (x, y, s, c = '#fff') => `<g transform="translate(${x} ${y}) scale(${s})" stroke="${c}" stroke-width="5" stroke-linecap="round">${[0, 60, 120].map(a => `<g transform="rotate(${a})"><line x1="0" y1="-26" x2="0" y2="26"/><path d="M-8 -18 L0 -10 L8 -18 M-8 18 L0 10 L8 18" fill="none"/></g>`).join('')}</g>`;
const snowcap = (w) => `<path d="M0 30 Q0 4 26 6 ${[...Array(Math.floor(w/80))].map((_, i) => `Q${60 + i*80} ${-8 + (i % 2)*6} ${100 + i*80} 8`).join(' ')} Q${w} 2 ${w} 30 Q${w - 20} 44 ${w - 40} 34 ${[...Array(Math.floor(w/120))].map((_, i) => `L${w - 70 - i*120} 36 L${w - 82 - i*120} ${58 + (i % 3)*10} L${w - 94 - i*120} 36`).join(' ')} L40 36 Q10 44 0 30Z" fill="#fff" stroke="#9CC8EE" stroke-width="4"/>`;
const TH = {
  key: 'tuyet', name: 'Tuyết mùa đông', ic: '⛄',
  bgs: [['#3E7CB1', '#102A43'], ['#4A6FA5', '#14213D'], ['#5B8DB8', '#1B3A5B'], ['#3C6E91', '#0F2533'], ['#6A7FB5', '#1E2547']],
  tbg: ['#5B8DB8', '#0F2540'], rbg: ['#4A6FA5', '#14213D'],
  road: 'rgba(255,255,255,.7)', dot: ['#E03131', '#1F3A5F'], off: ['#B9D3EA', '#4A7FB5'],
  conf: ['#FFFFFF', '#8FD0FF', '#E03131', '#2E8B57', '#FFD23F', '#BFE6FF'],
  crown: `${pine(-245, 0, 1.05)}${pine(-160, 0, .75)}${snowman(175, 0, .8)}${pine(255, 0, .95)}${flake(-60, -150, .7)}${flake(80, -165, .55, '#BFE6FF')}${flake(0, -110, .45)}`,
  edge: `<svg class="edg" style="left:-22px;top:-26px" width="1644" height="80" viewBox="0 0 1644 80">${snowcap(1644)}</svg>`,
  deco(d) {
    for (let i = 0; i < 40; i++) { const e = mk(d, '❄', `left:${rnd(-5, 98)}%;font-size:${rnd(10, 30)}px;opacity:${rnd(.4, .95)}`); e.className = 'snow'; e.style.animationDuration = rnd(8, 18) + 's'; e.style.animationDelay = -rnd(0, 18) + 's'; }
    mk(d, SV(1600, 160, `<path d="M0 160 V90 Q300 10 650 80 T1300 60 T1600 70 V160Z" fill="#fff"/>`, '0 0 1600 160'), 'left:0;right:0;bottom:-20px;width:100%;opacity:.18');
    mk(d, SV(220, 220, pine(70, 210, 1.1) + pine(160, 210, .8)), 'left:-10px;bottom:0;opacity:.45');
    mk(d, SV(140, 220, snowman(70, 216, 1)), 'right:10px;bottom:0;opacity:.45');
  },
  acc: `<path d="M40 60 Q42 4 100 4 Q158 4 160 60Z" fill="#E03131" stroke="${O}" stroke-width="5" stroke-linejoin="round"/><path d="M70 16 L70 58 M100 6 L100 58 M130 16 L130 58" stroke="#B02525" stroke-width="5"/>
    <rect x="34" y="46" width="132" height="22" rx="11" fill="#fff" stroke="${O}" stroke-width="5"/><circle cx="100" cy="6" r="15" fill="#fff" stroke="${O}" stroke-width="4"/>
    <rect x="46" y="150" width="108" height="20" rx="10" fill="#E03131" stroke="${O}" stroke-width="5"/><rect x="118" y="160" width="20" height="44" rx="8" fill="#E03131" stroke="${O}" stroke-width="5" transform="rotate(-10 128 160)"/>`,
  cert: {
    fh: 'Lobster', tw: 400, tsize: 80, ttext: 'Giấy Chứng Nhận', fb: 'Nunito', fn: 'Lobster', nw: 400, nsize: 100,
    ink: '#1F3A5F', name: '#2F7BD8', nstroke: '#fff', nglow: '#BFE6FF', accent: '#1F4E8C', line: '#7FB6E8', pill: 'rgba(127,182,232,.18)', rank: '#E03131', teacher: '#2F7BD8',
    plq: ['#6FB8F0', '#2F7BD8', '#1F4E8C'], prad: 40, tink: '#fff', tsh: '#1F4E8C', rib: ['#FF8787', '#E03131', '#A61E1E'],
    bg(W, H) {
      const r = prng(3); let fl = '';
      for (let i = 0; i < 70; i++) { const x = r()*W, y = r()*H; fl += x > 110 && x < W - 110 && y > 120 && y < H - 100 ? '' : flake(x, y, .3 + r()*.5, r() < .5 ? '#fff' : '#BFE6FF'); }
      return `<defs><linearGradient id="wg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5B8DB8"/><stop offset="1" stop-color="#14213D"/></linearGradient>
        <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#E3F1FC"/></linearGradient></defs>
        <rect width="${W}" height="${H}" fill="url(#wg)"/>${fl}
        <circle cx="${W - 120}" cy="70" r="44" fill="#FFF6D5" opacity=".9"/>
        <path d="M0 ${H - 160} Q300 ${H - 240} 700 ${H - 170} T${W} ${H - 190} V${H} H0Z" fill="#E8F3FC"/>
        <rect x="86" y="100" width="${W - 172}" height="${H - 186}" rx="36" fill="#4A7FB5"/>
        <rect x="100" y="114" width="${W - 200}" height="${H - 214}" rx="28" fill="url(#pg)" stroke="#7FB6E8" stroke-width="8"/>
        <rect x="120" y="134" width="${W - 240}" height="${H - 254}" rx="20" fill="none" stroke="#B9DAF5" stroke-width="4"/>
        <g transform="translate(70 86)">${snowcap(W - 140)}</g>
        ${pine(70, H - 30, 1.3)}${pine(170, H - 20, .9)}${snowman(W - 110, H - 20, 1.05)}${pine(W - 230, H - 16, .8)}
        ${flake(60, 300, .9)}${flake(W - 60, 420, .8)}${flake(W - 70, 700, .6, '#BFE6FF')}${flake(50, 620, .7, '#BFE6FF')}`;
    },
  },
};
