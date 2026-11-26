/* ===== PHONG CÁCH VŨ TRỤ ===== */
const planet = (x, y, r, c, c2, ring = '#FFB14E') => `<path d="M${x - r*2.1} ${y} A${r*2.1} ${r*.42} 0 0 1 ${x + r*2.1} ${y}" fill="none" stroke="${O}" stroke-width="${r*.2 + 6}" transform="rotate(-12 ${x} ${y})"/><path d="M${x - r*2.1} ${y} A${r*2.1} ${r*.42} 0 0 1 ${x + r*2.1} ${y}" fill="none" stroke="${ring}" stroke-width="${r*.2}" transform="rotate(-12 ${x} ${y})"/>
  <circle cx="${x}" cy="${y}" r="${r}" fill="${c}" stroke="${O}" stroke-width="6"/><path d="M${x - r*.95} ${y - r*.25} Q${x} ${y - r*.05} ${x + r*.95} ${y - r*.35} L${x + r*.92} ${y - r*.05} Q${x} ${y + r*.25} ${x - r*.92} ${y + r*.05}Z" fill="${c2}"/><circle cx="${x - r*.4}" cy="${y - r*.45}" r="${r*.18}" fill="#fff" opacity=".55"/>
  <path d="M${x - r*2.1} ${y} A${r*2.1} ${r*.42} 0 0 0 ${x + r*2.1} ${y}" fill="none" stroke="${O}" stroke-width="${r*.2 + 6}" transform="rotate(-12 ${x} ${y})"/><path d="M${x - r*2.1} ${y} A${r*2.1} ${r*.42} 0 0 0 ${x + r*2.1} ${y}" fill="none" stroke="${ring}" stroke-width="${r*.2}" transform="rotate(-12 ${x} ${y})"/>`;
const moon = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#DDE3F0" stroke="${O}" stroke-width="5"/><circle cx="${x - r*.3}" cy="${y - r*.2}" r="${r*.22}" fill="#B8C2D6"/><circle cx="${x + r*.35}" cy="${y + r*.3}" r="${r*.16}" fill="#B8C2D6"/>`;
const rocket = (x, y, s, rot = 0) => `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})"><path d="M-14 60 Q0 110 14 60Z" fill="#FFD23F"/><path d="M-8 60 Q0 92 8 60Z" fill="#FF7F11"/>
  <path d="M-30 30 L-48 66 L-20 56Z M30 30 L48 66 L20 56Z" fill="#FF006E" stroke="${O}" stroke-width="5" stroke-linejoin="round"/><path d="M0 -70 Q34 -30 26 58 L-26 58 Q-34 -30 0 -70Z" fill="#F1F3F5" stroke="${O}" stroke-width="6" stroke-linejoin="round"/>
  <circle cx="0" cy="-4" r="14" fill="#7DF9FF" stroke="${O}" stroke-width="5"/><path d="M-22 -36 Q0 -48 22 -36" stroke="#FF006E" stroke-width="8" fill="none"/></g>`;
const TH = {
  key: 'vutru', name: 'Vũ trụ', ic: '🚀',
  bgs: [['#2B2F77', '#0B0E2A'], ['#3A1C71', '#0D0628'], ['#123A6B', '#050F24'], ['#4B1D5E', '#120623'], ['#1D4E6B', '#06141F']],
  tbg: ['#2B2F77', '#070A1F'], rbg: ['#4B1D5E', '#0D0628'],
  road: 'rgba(125,249,255,.55)', dot: ['#FFD23F', '#2A1F6B'], off: ['#3A3F8F', '#1B1F4B'],
  conf: ['#7DF9FF', '#B06BFF', '#FFD23F', '#FF5DA2', '#4F7CFF', '#FFFFFF'],
  crown: `${planet(0, -112, 62, '#B06BFF', '#8A4FE0')}${moon(-230, -70, 30)}${star(-150, -150, 16, '#FFD23F')}${star(240, -150, 13, '#7DF9FF')}${star(170, -50, 10, '#fff')}${star(-280, -150, 9, '#fff')}
    <g style="animation:floaty 3.4s ease-in-out infinite">${rocket(250, -95, .75, 30)}</g>`,
  edge: `<svg class="edg" style="left:-70px;bottom:-70px" width="190" height="190" viewBox="-95 -95 190 190">${planet(0, 0, 42, '#2EC4B6', '#1C9C90', '#FFD23F')}</svg>
    <svg class="edg" style="right:-46px;top:150px" width="90" height="90" viewBox="-45 -45 90 90">${moon(0, 0, 32)}</svg>`,
  deco(d) {
    for (let i = 0; i < 46; i++) mk(d, '', `left:${rnd(0, 99)}%;top:${rnd(0, 96)}%`).className = 'tw', d.lastChild.style.animationDelay = -rnd(0, 3) + 's', d.lastChild.style.scale = rnd(.5, 1.4);
    for (let i = 0; i < 2; i++) { const s = mk(d, '', `left:${rnd(60, 100)}%;top:${rnd(0, 30)}%`); s.className = 'shoot'; s.style.animationDelay = i*3.5 + 's'; }
    mk(d, SV(240, 240, planet(120, 120, 56, '#FF5DA2', '#E0457B', '#7DF9FF')), 'right:-60px;bottom:40px;opacity:.5;animation:floaty 6s ease-in-out infinite');
    mk(d, SV(160, 160, moon(80, 80, 50)), 'left:-30px;top:30px;opacity:.45;animation:floaty 7s ease-in-out infinite');
  },
  acc: `<circle cx="100" cy="92" r="84" fill="#BDEBFF" fill-opacity=".2" stroke="#E6F7FF" stroke-width="6"/><path d="M42 62 Q58 26 98 18" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round" opacity=".85"/>
    <rect x="44" y="160" width="112" height="16" rx="8" fill="#E9ECEF" stroke="${O}" stroke-width="5"/>`,
  cert: {
    fh: 'Chakra Petch', tw: 700, fb: 'Exo 2', fn: 'Chakra Petch', nw: 700,
    ink: '#1B1F4B', name: '#3A2C8F', nstroke: '#fff', accent: '#6A3FC7', line: '#6A5FE0', pill: 'rgba(106,95,224,.12)', rank: '#D6336C', teacher: '#3A2C8F',
    plq: ['#B06BFF', '#4F7CFF', '#7DF9FF'], prad: 59, tink: '#fff', tsh: '#2A1F6B', tglow: '#7DF9FF', rib: ['#00C2D1', '#1982C4', '#0B4F7A'],
    bg(W, H) {
      const r = prng(7); let st = '';
      for (let i = 0; i < 260; i++) { const x = r()*W, y = r()*H, s = r(); st += `<circle cx="${x}" cy="${y}" r="${.8 + s*2.2}" fill="#fff" opacity="${.35 + s*.6}"/>`; }
      return `<defs><radialGradient id="sg" cx="50%" cy="45%" r="75%"><stop offset="0" stop-color="#2B2F77"/><stop offset="1" stop-color="#05071A"/></radialGradient>
        <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#E3E8FF"/></linearGradient>
        <filter id="bl"><feGaussianBlur stdDeviation="40"/></filter></defs>
        <rect width="${W}" height="${H}" fill="url(#sg)"/>
        <circle cx="260" cy="200" r="220" fill="#B06BFF" opacity=".45" filter="url(#bl)"/><circle cx="1380" cy="930" r="240" fill="#00C2D1" opacity=".35" filter="url(#bl)"/>${st}
        <rect x="88" y="102" width="${W - 176}" height="${H - 194}" rx="42" fill="none" stroke="#B06BFF" stroke-width="6" opacity=".9"/>
        <rect x="100" y="114" width="${W - 200}" height="${H - 218}" rx="34" fill="url(#pg)" stroke="#7DF9FF" stroke-width="10"/>
        <rect x="126" y="140" width="${W - 252}" height="${H - 270}" rx="24" fill="none" stroke="#6A5FE0" stroke-width="4" stroke-dasharray="14 12"/>
        ${planet(70, 1060, 70, '#2EC4B6', '#1C9C90', '#FFD23F')}${planet(1520, 120, 48, '#FF5DA2', '#E0457B', '#7DF9FF')}${moon(80, 90, 40)}
        ${rocket(1540, 1000, .9, -20)}${star(1450, 260, 18, '#FFD23F')}${star(150, 600, 16, '#7DF9FF')}${star(1500, 700, 14, '#fff')}`;
    },
  },
};
