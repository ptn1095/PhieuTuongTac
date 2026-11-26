/* ===== PHONG CÁCH THÚ CƯNG CHIBI ===== */
// mặt thú chibi: kind = cat | bunny | bear | panda | chick
const chibi = (x, y, s, kind) => {
  const C = { cat: ['#FFB866', '#FF8FAB'], bunny: ['#FFFFFF', '#FFB3C7'], bear: ['#C68B59', '#FFB3A7'], panda: ['#FFFFFF', '#FFB3C7'], chick: ['#FFE066', '#FF9F1C'] }[kind];
  const ears = kind === 'cat' ? `<path d="M-46 -24 L-50 -78 L-12 -50Z M46 -24 L50 -78 L12 -50Z" fill="${C[0]}" stroke="${O}" stroke-width="6" stroke-linejoin="round"/><path d="M-40 -34 L-43 -64 L-22 -48Z M40 -34 L43 -64 L22 -48Z" fill="${C[1]}"/>`
    : kind === 'bunny' ? `<ellipse cx="-22" cy="-82" rx="15" ry="42" fill="${C[0]}" stroke="${O}" stroke-width="6" transform="rotate(-10 -22 -82)"/><ellipse cx="22" cy="-82" rx="15" ry="42" fill="${C[0]}" stroke="${O}" stroke-width="6" transform="rotate(10 22 -82)"/><ellipse cx="-22" cy="-80" rx="6" ry="28" fill="${C[1]}" transform="rotate(-10 -22 -82)"/><ellipse cx="22" cy="-80" rx="6" ry="28" fill="${C[1]}" transform="rotate(10 22 -82)"/>`
    : kind === 'chick' ? `<path d="M-6 -56 Q0 -80 8 -58 Q16 -76 18 -54" fill="none" stroke="${O}" stroke-width="5" stroke-linecap="round"/>`
    : `<circle cx="-40" cy="-42" r="18" fill="${kind === 'panda' ? '#3D405B' : C[0]}" stroke="${O}" stroke-width="6"/><circle cx="40" cy="-42" r="18" fill="${kind === 'panda' ? '#3D405B' : C[0]}" stroke="${O}" stroke-width="6"/>`;
  const patch = kind === 'panda' ? `<ellipse cx="-20" cy="2" rx="15" ry="18" fill="#3D405B" transform="rotate(20 -20 2)"/><ellipse cx="20" cy="2" rx="15" ry="18" fill="#3D405B" transform="rotate(-20 20 2)"/>` : '';
  const mouth = kind === 'chick' ? `<path d="M-10 18 L0 30 L10 18Z" fill="${C[1]}" stroke="${O}" stroke-width="4" stroke-linejoin="round"/>` : `<path d="M-10 20 Q-5 27 0 20 Q5 27 10 20" fill="none" stroke="${O}" stroke-width="4" stroke-linecap="round"/>`;
  return `<g transform="translate(${x} ${y}) scale(${s})">${ears}<ellipse cx="0" cy="0" rx="56" ry="50" fill="${C[0]}" stroke="${O}" stroke-width="6"/>${patch}
    <ellipse cx="-20" cy="2" rx="9" ry="12" fill="${O}"/><ellipse cx="20" cy="2" rx="9" ry="12" fill="${O}"/><circle cx="-17" cy="-3" r="4" fill="#fff"/><circle cx="23" cy="-3" r="4" fill="#fff"/>
    <ellipse cx="-36" cy="18" rx="10" ry="6" fill="#FF8FAB" opacity=".8"/><ellipse cx="36" cy="18" rx="10" ry="6" fill="#FF8FAB" opacity=".8"/>${mouth}</g>`;
};
const pawP = (x, y, s, c) => `<g transform="translate(${x} ${y}) scale(${s})" fill="${c}"><ellipse cx="0" cy="10" rx="18" ry="15"/><circle cx="-18" cy="-10" r="7"/><circle cx="-6" cy="-20" r="7"/><circle cx="8" cy="-20" r="7"/><circle cx="20" cy="-10" r="7"/></g>`;
const heartP = (x, y, s, c) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 14 C-26 -2 -22 -26 -8 -24 Q0 -22 0 -14 Q0 -22 8 -24 C22 -26 26 -2 0 14Z" fill="${c}" stroke="${O}" stroke-width="4"/>`;
const TH = {
  key: 'chibi', name: 'Thú cưng chibi', ic: '🐱',
  bgs: [['#FFB3C7', '#D45D87'], ['#A6E3D8', '#2F9C8E'], ['#FFD59E', '#D98236'], ['#C8B6FF', '#7056C9'], ['#B9E6A1', '#4F9A3C']],
  tbg: ['#FFD9E6', '#C9608F'], rbg: ['#C8B6FF', '#7056C9'],
  road: 'rgba(255,255,255,.75)', dot: ['#FF6F9F', '#7A2048'], off: ['#E8C3D2', '#C2577F'],
  conf: ['#FF6F9F', '#8FE3CF', '#FFD23F', '#C8B6FF', '#FFFFFF', '#FFB866'],
  crown: `${chibi(-215, -100, 1, 'bear')}${chibi(0, -122, 1.1, 'bunny')}${chibi(215, -100, 1, 'cat')}
    ${heartP(-120, -160, 1, '#FF6F9F')}${heartP(120, -168, .8, '#FFB3C7')}${star(-300, -140, 12, '#FFD23F')}${star(300, -150, 12, '#8FE3CF')}
    ${[-250, -180, 180, 250].map(x => `<ellipse cx="${x}" cy="-50" rx="16" ry="12" fill="#fff" stroke="${O}" stroke-width="5"/>`).join('')}`,
  edge: `<svg class="edg" style="left:-58px;bottom:-34px" width="130" height="120" viewBox="-65 -70 130 120">${chibi(0, 0, .95, 'panda')}</svg>
    <svg class="edg" style="right:-52px;bottom:-30px" width="120" height="110" viewBox="-60 -80 120 110">${chibi(0, 0, .85, 'chick')}</svg>`,
  deco(d) {
    for (let i = 0; i < 16; i++) { const e = mk(d, SV(40, 40, heartP(20, 22, 1, ['#FF6F9F', '#FFB3C7', '#C8B6FF', '#8FE3CF'][i % 4])), `left:${rnd(0, 97)}%`); e.className = 'heart'; e.style.animationDuration = rnd(9, 17) + 's'; e.style.animationDelay = -rnd(0, 17) + 's'; e.style.scale = rnd(.6, 1.3); }
    for (let i = 0; i < 12; i++) { const e = mk(d, SV(60, 60, pawP(30, 34, 1, '#fff')), `left:${rnd(0, 95)}%;top:${rnd(0, 90)}%;rotate:${rnd(-40, 40)}deg`); e.className = 'paw'; e.style.animationDelay = -rnd(0, 4) + 's'; }
    mk(d, SV(150, 130, chibi(75, 80, 1, 'cat')), 'left:-20px;bottom:110px;opacity:.5;animation:floaty 5s ease-in-out infinite');
    mk(d, SV(150, 150, chibi(75, 100, 1, 'bunny')), 'right:-14px;top:40px;opacity:.5;animation:floaty 6s ease-in-out infinite');
  },
  acc: `<path d="M44 62 L36 10 L82 38Z M156 62 L164 10 L118 38Z" fill="#FFB866" stroke="${O}" stroke-width="5" stroke-linejoin="round"/><path d="M50 50 L46 24 L70 38Z M150 50 L154 24 L130 38Z" fill="#FF8FAB"/>
    <path d="M60 40 Q100 22 140 40" fill="none" stroke="#FF6F9F" stroke-width="0"/>${heartP(150, 34, .55, '#FF6F9F')}`,
  cert: {
    fh: 'Mali', tw: 700, fb: 'Baloo 2', fn: 'Mali', nw: 700,
    ink: '#5B3A55', name: '#E0457B', nstroke: '#fff', accent: '#C2577F', line: '#FF8FB1', pill: 'rgba(255,143,177,.16)', rank: '#E0457B', teacher: '#1E9B83',
    plq: ['#8FE3CF', '#3BB59B', '#1E7A68'], prad: 59, tink: '#fff', tsh: '#1E7A68', rib: ['#FFA8C5', '#FF6F9F', '#C2577F'],
    bg(W, H) {
      const r = prng(5); let dots = '';
      for (let y = 30; y < H; y += 80) for (let x = (y/80 % 2) ? 40 : 0; x < W; x += 80) dots += `<circle cx="${x}" cy="${y}" r="${9 + r()*4}" fill="${r() < .5 ? '#FFD1E1' : '#CFF3E8'}"/>`;
      return `<rect width="${W}" height="${H}" fill="#FFF0F5"/>${dots}
        <rect x="84" y="100" width="${W - 168}" height="${H - 190}" rx="56" fill="#FFC2D6" stroke="#C2577F" stroke-width="6"/>
        <rect x="104" y="120" width="${W - 208}" height="${H - 230}" rx="42" fill="#FFFDF8" stroke="#FF8FB1" stroke-width="6"/>
        <rect x="124" y="140" width="${W - 248}" height="${H - 270}" rx="30" fill="none" stroke="#FF8FB1" stroke-width="5" stroke-dasharray="16 12"/>
        ${chibi(110, H - 110, 1.3, 'cat')}${chibi(W - 110, H - 110, 1.3, 'bear')}${chibi(100, 150, 1.05, 'bunny')}${chibi(W - 100, 140, 1.05, 'panda')}${chibi(W/2 - 470, H - 70, .8, 'chick')}
        ${pawP(W/2 + 470, H - 66, 1.2, '#FFB3C7')}${heartP(260, 1030, 1.4, '#FF6F9F')}${heartP(W - 260, 1040, 1.2, '#C8B6FF')}${heartP(1300, 240, 1, '#FFB3C7')}`;
    },
  },
};
