/* ===== PHONG CÁCH MÀU SẮC (giống ClickLearn Tin học 9) ===== */
const sparkM = (x, y, s, c) => `<path d="M${x} ${y - s} Q${x + s*.18} ${y - s*.18} ${x + s} ${y} Q${x + s*.18} ${y + s*.18} ${x} ${y + s} Q${x - s*.18} ${y + s*.18} ${x - s} ${y} Q${x - s*.18} ${y - s*.18} ${x} ${y - s}Z" fill="${c}"/>`;
const confM = (x, y, w, h, r, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${Math.min(w, h)/2}" fill="${c}" stroke="#1D3557" stroke-width="4" transform="rotate(${r} ${x + w/2} ${y + h/2})"/>`;
const TH = {
  key: 'mausac', name: 'Màu sắc', ic: '🎨',
  bgs: [['#FFB347', '#FF5E78'], ['#5FB8FF', '#3A5BFF'], ['#8FE07A', '#14A0A0'], ['#4FE0D0', '#1982C4'], ['#C77DFF', '#FF5DA2']],
  tbg: ['#6B8CFF', '#B06BFF'], rbg: ['#FFC300', '#FF7F11'],
  // màu gradient riêng của từng bảng (khuôn gán vào --g0/--g1)
  gt: ['#4F7CFF', '#B06BFF'], gr: ['#FFC300', '#FF7F11'], gk: ['#22C493', '#1E9BD7'],
  road: 'rgba(255,255,255,.8)', dot: ['#FFD60A', '#fff'], off: ['#fff', '#B0B8D0'],
  conf: ['#FF006E', '#FFD60A', '#3A8DFF', '#2DA44E', '#FF7F11', '#8338EC'],
  crown: `${confM(-250, -60, 70, 26, -20, '#FFD60A')}${confM(190, -70, 70, 26, 25, '#2EC4B6')}${confM(-120, -120, 56, 22, 15, '#FF7F11')}${confM(80, -130, 56, 22, -12, '#8338EC')}
    <circle cx="-40" cy="-60" r="18" fill="#FF006E" stroke="#1D3557" stroke-width="4"/><circle cx="40" cy="-150" r="14" fill="#3A8DFF" stroke="#1D3557" stroke-width="4"/>
    ${sparkM(-190, -150, 22, '#fff')}${sparkM(270, -150, 18, '#FFD60A')}${sparkM(0, -110, 26, '#fff')}`,
  edge: '',
  deco(d) {
    for (let i = 0; i < 18; i++) { const s = rnd(16, 60), e = mk(d, '', `left:${rnd(0, 98)}%;width:${s}px;height:${s}px`); e.className = 'bubm'; e.style.animationDuration = rnd(9, 20) + 's'; e.style.animationDelay = -rnd(0, 20) + 's'; }
    const C = ['#fff', '#FFD60A', '#fff', '#FFC2E2'];
    for (let i = 0; i < 12; i++) { const e = mk(d, SV(30, 30, sparkM(15, 15, 14, C[i % 4])), `left:${rnd(0, 96)}%;top:${rnd(0, 90)}%`); e.className = 'spkm'; e.style.animationDelay = -rnd(0, 2.6) + 's'; }
  },
  // mũ tiệc sặc sỡ
  acc: `<g transform="translate(100 34)"><path d="M-30 4 L0 -58 L30 4Z" fill="#FF006E" stroke="#1D3557" stroke-width="5" stroke-linejoin="round"/><path d="M-18 -20 L18 -20 M-10 -38 L10 -38" stroke="#FFD60A" stroke-width="7" stroke-linecap="round"/><circle cy="-62" r="10" fill="#FFD60A" stroke="#1D3557" stroke-width="4"/></g>`,
  cert: {
    fh: 'Inter', tw: 900, fb: 'Inter', fn: 'Inter', nw: 900, tsize: 96,
    ink: '#1D3557', name: '#FF006E', nstroke: '#fff', accent: '#5A189A', line: '#8338EC', pill: '#FFF3BF', rank: '#E5383B', teacher: '#8338EC',
    plq: ['#4F7CFF', '#8338EC', '#1D3557'], prad: 59, tink: '#FFD60A', tsh: '#1D3557', rib: ['#FF5DA2', '#FF006E', '#1D3557'],
    bg(W, H) {
      const r = prng(7); let dots = '';
      for (let y = 30; y < H; y += 60) for (let x = 30; x < W; x += 60) dots += `<circle cx="${x + (y/60 % 2)*30}" cy="${y}" r="3" fill="#fff" opacity=".35"/>`;
      const C = ['#FF006E', '#FFD60A', '#3A8DFF', '#2DA44E', '#FF7F11', '#8338EC', '#2EC4B6'];
      let cf = ''; for (let i = 0; i < 34; i++) { const x = r() < .5 ? 110 + r()*170 : W - 280 + r()*170, y = 150 + r()*(H - 330); cf += i % 3 ? sparkM(x, y, 6 + r()*10, C[i % 7]) : `<circle cx="${x}" cy="${y}" r="${4 + r()*5}" fill="${C[i % 7]}"/>`; }
      const st = (x, y, c) => `<path d="${[...Array(10)].map((_, i) => { const a = -Math.PI/2 + i*Math.PI/5, rr = i % 2 ? 14 : 34; return (i ? 'L' : 'M') + (x + rr*Math.cos(a)).toFixed(1) + ' ' + (y + rr*Math.sin(a)).toFixed(1); }).join(' ')}Z" fill="${c}" stroke="#1D3557" stroke-width="5" stroke-linejoin="round"/>`;
      return `<defs><linearGradient id="mg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4F7CFF"/><stop offset=".55" stop-color="#B06BFF"/><stop offset="1" stop-color="#FF5DA2"/></linearGradient></defs>
        <rect width="${W}" height="${H}" fill="url(#mg)"/>${dots}
        <rect x="44" y="44" width="${W - 88}" height="${H - 88}" rx="44" fill="#FFFDF5" stroke="#1D3557" stroke-width="10"/>
        <rect x="74" y="74" width="${W - 148}" height="${H - 148}" rx="30" fill="none" stroke="#FFC300" stroke-width="6" stroke-dasharray="26 16"/>${cf}
        ${st(112, 112, '#FF006E')}${st(W - 112, 112, '#1982C4')}${st(112, H - 112, '#2DA44E')}${st(W - 112, H - 112, '#FF7F11')}`;
    },
  },
};
