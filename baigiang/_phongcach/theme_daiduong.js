/* ===== PHONG CÁCH ĐẠI DƯƠNG ===== */
const fishS = (x, y, s, c, c2, flip) => `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})"><path d="M40 0 L70 -26 L66 0 L70 26Z" fill="${c2}" stroke="${O}" stroke-width="5" stroke-linejoin="round"/><ellipse cx="0" cy="0" rx="50" ry="32" fill="${c}" stroke="${O}" stroke-width="6"/><path d="M-6 -30 Q10 -50 26 -26" fill="${c2}" stroke="${O}" stroke-width="5"/><path d="M8 -26 Q20 0 8 26" stroke="${c2}" stroke-width="7" fill="none"/><circle cx="-26" cy="-6" r="9" fill="#fff" stroke="${O}" stroke-width="4"/><circle cx="-28" cy="-6" r="4" fill="${O}"/></g>`;
const starfish = (x, y, s, c = '#FF8A5B') => `<g transform="translate(${x} ${y}) scale(${s})"><path d="${[...Array(10)].map((_, i) => { const a = -Math.PI/2 + i*Math.PI/5, r = i % 2 ? 22 : 56; return (i ? 'L' : 'M') + (r*Math.cos(a)).toFixed(1) + ' ' + (r*Math.sin(a)).toFixed(1); }).join(' ')}Z" fill="${c}" stroke="${O}" stroke-width="6" stroke-linejoin="round"/>${[0, 1, 2, 3, 4].map(i => { const a = -Math.PI/2 + i*2*Math.PI/5; return `<circle cx="${(30*Math.cos(a)).toFixed(1)}" cy="${(30*Math.sin(a)).toFixed(1)}" r="4" fill="#fff" opacity=".8"/>`; }).join('')}</g>`;
const shell = (x, y, s, c = '#FFC2D6') => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-60 20 Q-64 -50 0 -62 Q64 -50 60 20 Q0 34 -60 20Z" fill="${c}" stroke="${O}" stroke-width="6" stroke-linejoin="round"/>${[-40, -20, 0, 20, 40].map(d => `<path d="M${d*.2} 24 L${d} -48" stroke="${O}" stroke-width="4" opacity=".5"/>`).join('')}<rect x="-18" y="18" width="36" height="20" rx="8" fill="${c}" stroke="${O}" stroke-width="5"/></g>`;
const weed = (x, y, s, c = '#2DA44E') => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 C-30 -40 30 -80 0 -120 C-30 -160 20 -190 4 -220" fill="none" stroke="${O}" stroke-width="22" stroke-linecap="round"/><path d="M0 0 C-30 -40 30 -80 0 -120 C-30 -160 20 -190 4 -220" fill="none" stroke="${c}" stroke-width="12" stroke-linecap="round"/></g>`;
const coral = (x, y, s, c = '#FF5E78') => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 V-60 M0 -40 L-30 -80 V-110 M-30 -90 L-50 -120 M0 -60 L30 -100 V-130 M30 -110 L52 -140" fill="none" stroke="${O}" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/><path d="M0 0 V-60 M0 -40 L-30 -80 V-110 M-30 -90 L-50 -120 M0 -60 L30 -100 V-130 M30 -110 L52 -140" fill="none" stroke="${c}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/></g>`;
const bubs = (pts) => pts.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" fill-opacity=".35" stroke="#fff" stroke-width="3"/><circle cx="${x - r*.35}" cy="${y - r*.35}" r="${r*.25}" fill="#fff"/>`).join('');
const TH = {
  key: 'daiduong', name: 'Đại dương', ic: '🐠',
  bgs: [['#1E9BD7', '#06304F'], ['#14A0A0', '#04313A'], ['#3A8DFF', '#0A2A5E'], ['#22C493', '#053B33'], ['#2B6CB0', '#081B3A']],
  tbg: ['#1E9BD7', '#06304F'], rbg: ['#22C493', '#053B33'],
  road: 'rgba(255,255,255,.6)', dot: ['#FFD23F', '#0B5E7A'], off: ['#7FB7CC', '#0B5E7A'],
  conf: ['#FFD23F', '#FF6F59', '#5FE0F5', '#FFFFFF', '#2EC4B6', '#FF8FAB'],
  crown: `<g class="sw">${coral(-235, 0, 1, '#FF5E78')}</g>${weed(-150, 0, .62, '#2DA44E')}${shell(0, -110, 1.25, '#FFC2D6')}${weed(150, 0, .7, '#8AC926')}<g class="sw">${coral(240, 0, .95, '#B06BFF')}</g>
    ${bubs([[-80, -165, 14], [-60, -130, 9], [90, -170, 12], [110, -140, 7]])}${starfish(-300, -40, .5, '#FFD23F')}`,
  edge: `<svg class="edg" style="left:-46px;top:-46px" width="110" height="110" viewBox="-55 -55 110 110">${starfish(0, 0, .85)}</svg>
    <svg class="edg" style="right:-40px;bottom:-40px" width="120" height="100" viewBox="-60 -70 120 100">${shell(0, 0, .8, '#FFE3B3')}</svg>`,
  deco(d) {
    for (let i = 0; i < 22; i++) { const s = rnd(10, 34), e = mk(d, '', `left:${rnd(0, 98)}%;width:${s}px;height:${s}px`); e.className = 'bub'; e.style.animationDuration = rnd(7, 15) + 's'; e.style.animationDelay = -rnd(0, 15) + 's'; }
    [['#FFB14E', '#FF7F11', 18, 1], ['#FF8FAB', '#FF006E', 52, 0], ['#7DF9FF', '#1982C4', 76, 1]].forEach(([c, c2, top, f], i) => {
      const e = mk(d, SV(160, 100, fishS(80, 50, .9, c, c2, f), '0 0 160 100'), `top:${top}%;left:0;opacity:.75`); e.className = 'fish'; e.style.animationDuration = 26 + i*7 + 's'; e.style.animationDelay = -i*9 + 's'; if (!f) e.style.animationDirection = 'reverse'; });
    mk(d, `<div class="sway">${SV(120, 260, weed(60, 255, 1, '#2DA44E') + weed(30, 255, .7, '#8AC926'))}</div>`, 'left:6px;bottom:-10px;opacity:.6');
    mk(d, `<div class="sway" style="animation-delay:-1.5s">${SV(140, 200, coral(70, 196, 1, '#FF5E78'))}</div>`, 'right:12px;bottom:-6px;opacity:.6');
  },
  acc: `<path d="M30 88 H52 M148 88 H170" stroke="#FF7F11" stroke-width="9" stroke-linecap="round"/><rect x="50" y="62" width="100" height="50" rx="22" fill="#9BE7FF" fill-opacity=".35" stroke="#FF7F11" stroke-width="7"/>
    <path d="M170 104 V30 Q170 12 186 12" fill="none" stroke="${O}" stroke-width="15" stroke-linecap="round"/><path d="M170 104 V30 Q170 12 186 12" fill="none" stroke="#FFD60A" stroke-width="8" stroke-linecap="round"/>`,
  cert: {
    fh: 'Paytone One', tw: 400, fb: 'Nunito', fn: 'Paytone One', nw: 400,
    ink: '#0B3954', name: '#0E7490', nstroke: '#fff', accent: '#E8590C', line: '#1597BB', pill: 'rgba(21,151,187,.12)', rank: '#E8590C', teacher: '#0E7490',
    plq: ['#FF9A76', '#FF6F59', '#B23A2A'], prad: 59, tink: '#fff', tsh: '#B23A2A', rib: ['#5FE0F5', '#14A3C7', '#0B5E7A'],
    bg(W, H) {
      const r = prng(11); let bb = '';
      for (let i = 0; i < 40; i++) { const x = r() < .5 ? r()*110 + 6 : W - 116 + r()*110, y = 140 + r()*(H - 260), s = 5 + r()*16; bb += bubs([[x, y, s]]); }
      return `<defs><linearGradient id="og" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9BE7FF"/><stop offset=".55" stop-color="#1E9BD7"/><stop offset="1" stop-color="#0A4F7A"/></linearGradient>
        <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#E3F9FF"/></linearGradient></defs>
        <rect width="${W}" height="${H}" fill="url(#og)"/>
        ${[200, 520, 1000, 1320].map((x, i) => `<path d="M${x} 0 L${x + 90} 0 L${x - 80 + i*30} ${H} L${x - 220 + i*30} ${H}Z" fill="#fff" opacity=".08"/>`).join('')}${bb}
        <rect x="88" y="102" width="${W - 176}" height="${H - 194}" rx="44" fill="none" stroke="#FFE8B8" stroke-width="14"/>
        <rect x="88" y="102" width="${W - 176}" height="${H - 194}" rx="44" fill="none" stroke="#C9A26B" stroke-width="5" stroke-dasharray="22 14"/>
        <rect x="104" y="118" width="${W - 208}" height="${H - 226}" rx="34" fill="url(#pg)" stroke="#1597BB" stroke-width="9"/>
        <path d="M104 ${H - 190} Q300 ${H - 230} 500 ${H - 196} T900 ${H - 200} T1300 ${H - 196} T${W - 104} ${H - 205} V${H - 140} Q${W - 104} ${H - 108} ${W - 138} ${H - 108} H138 Q104 ${H - 108} 104 ${H - 140}Z" fill="#C6F1FB" opacity=".7"/>
        <path d="M0 ${H - 70} Q200 ${H - 120} 400 ${H - 80} T800 ${H - 80} T1200 ${H - 85} T${W} ${H - 90} V${H} H0Z" fill="#F2D49B" stroke="${O}" stroke-width="5"/>
        ${weed(40, H - 40, 1.1, '#2DA44E')}${weed(90, H - 30, .8, '#8AC926')}${coral(1500, H - 40, 1.2, '#FF5E78')}${coral(1420, H - 30, .8, '#B06BFF')}
        ${starfish(300, H - 60, .7, '#FFD23F')}${shell(1240, H - 60, .6, '#FFC2D6')}${starfish(80, 70, .8, '#FF8A5B')}${shell(1520, 80, .8, '#FFE3B3')}
        ${fishS(70, 520, .9, '#FFB14E', '#FF7F11', 1)}${fishS(1530, 420, .9, '#FF8FAB', '#FF006E', 0)}`;
    },
  },
};
