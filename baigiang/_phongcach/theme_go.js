/* ===== PHONG CÁCH GỖ TRE (từ Tin học 6) ===== */
const LEAF = (a, L, c, d) => `<g transform="rotate(${a})"><path d="M0 0 C${L*.2} ${-L*.25} ${L*.24} ${-L*.72} 0 ${-L} C${-L*.24} ${-L*.72} ${-L*.2} ${-L*.25} 0 0Z" fill="${c}" stroke="${d}" stroke-width="5" stroke-linejoin="round"/><path d="M0 -4 L0 ${-L*.92}" stroke="${d}" stroke-width="4" stroke-linecap="round"/>${[.3, .5, .7].map(k => `<path d="M0 ${-L*k} l${L*.1} ${-L*.1} M0 ${-L*k} l${-L*.1} ${-L*.1}" stroke="${d}" stroke-width="3" stroke-linecap="round" opacity=".6"/>`).join('')}</g>`;
const LEAVES = [[-74, 120, '#3F9A22'], [74, 120, '#3F9A22'], [-50, 160, '#5DBB34'], [50, 160, '#5DBB34'], [-24, 178, '#4FAE2C'], [24, 178, '#4FAE2C'], [0, 186, '#6CC63C']].map(([a, L, c]) => LEAF(a, L, c, '#2A6F16')).join('');
const bambooBar = (x, y, w, h) => { const hor = w > h, len = hor ? w : h; let n = ''; for (let p = 150; p < len - 40; p += 170) n += hor ? `<rect x="${x + p}" y="${y + 3}" width="6" height="${h - 6}" fill="#2C5C12"/><rect x="${x + p + 6}" y="${y + 3}" width="4" height="${h - 6}" fill="#C4EC7A"/>` : `<rect x="${x + 3}" y="${y + p}" width="${w - 6}" height="6" fill="#2C5C12"/><rect x="${x + 3}" y="${y + p + 6}" width="${w - 6}" height="4" fill="#C4EC7A"/>`;
  return `<rect x="${x}" y="${y + 6}" width="${w}" height="${h}" rx="${Math.min(w, h)/2}" fill="#000" opacity=".3"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${Math.min(w, h)/2}" fill="url(#bam${hor ? 'H' : 'V'})" stroke="#2C5C12" stroke-width="3"/>${n}`; };
const tieS = (x, y) => `<rect x="${x - 26}" y="${y - 26}" width="52" height="52" rx="10" fill="#7A4520" stroke="#3E220C" stroke-width="5" transform="rotate(45 ${x} ${y})"/>`;
const TH = {
  key: 'go', name: 'Gỗ tre', ic: '🌿',
  bgs: [['#2F6E22', '#0F2E12'], ['#1F6046', '#0B2B1C'], ['#356B1C', '#11320D'], ['#1C5A50', '#0A2A24'], ['#4E5A18', '#1E2A0C']],
  tbg: ['#2F6E22', '#0F2E12'], rbg: ['#4E5A18', '#1E2A0C'],
  road: 'rgba(255,247,223,.5)', dot: ['#FFCF2F', '#5E3515'], off: ['#8A5A2B', '#5E3515'],
  conf: ['#FFCF2F', '#8CC63F', '#3FC7F2', '#E8890C', '#E5392C', '#FFF7DF'],
  crown: `<g class="sw">${LEAVES}</g>`,
  edge: `<i class="bb t"></i><i class="bb b"></i><i class="bb l"></i><i class="bb r"></i>` + ['left:-25px;top:-25px', 'right:-25px;top:-25px', 'left:-25px;bottom:-25px', 'right:-25px;bottom:-25px'].map(p => `<i class="tie" style="${p}"></i>`).join(''),
  deco(d) {
    [['left:-60px;top:-40px', 30], ['right:-70px;top:-40px', -25], ['left:-80px;bottom:-60px', 160], ['right:-60px;bottom:-50px', 200]].forEach(([p, r], i) => {
      const e = mk(d, `<svg width="420" height="230" viewBox="-310 -200 620 210">${LEAVES}</svg>`, p + `;transform:rotate(${r}deg)`); e.className = 'lfc'; e.style.animationDelay = -i*1.3 + 's'; });
    for (let i = 0; i < 16; i++) { const f = mk(d, '', `left:${rnd(0, 96)}%;top:${rnd(0, 85)}%`); f.className = 'ffly'; f.style.animationDelay = -rnd(0, 3) + 's'; f.style.animationDuration = rnd(2.6, 5) + 's'; }
  },
  acc: `<g transform="translate(100 12)">${LEAF(-30, 40, '#5DBB34', '#2A6F16')}${LEAF(30, 40, '#4FAE2C', '#2A6F16')}</g>`,
  cert: {
    fh: 'Baloo 2', tw: 800, fb: 'Baloo 2', fn: 'Baloo 2', nw: 800,
    ink: '#4A2A0F', name: '#2D7612', nstroke: '#FFF7DF', accent: '#9C3F00', line: '#93592A', pill: 'rgba(90,50,15,.18)', rank: '#C2190E', teacher: '#2D7612',
    plq: ['#B97F3D', '#93592A', '#5E3515'], prad: 22, tink: '#FFF7DF', tsh: '#5E3515', rib: ['#93D655', '#4C9B22', '#2D7612'],
    bg(W, H) {
      const lv = (x, y, r) => `<g transform="translate(${x} ${y}) rotate(${r}) scale(.9)" opacity=".55">${LEAVES}</g>`;
      return `<defs><radialGradient id="fg" cx="50%" cy="50%" r="60%"><stop offset="0" stop-color="#2F6E22"/><stop offset="1" stop-color="#0F2E12"/></radialGradient>
        <linearGradient id="wd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E6B873"/><stop offset="1" stop-color="#CF9750"/></linearGradient>
        <linearGradient id="bamH" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C4EC7A"/><stop offset=".42" stop-color="#7FBF35"/><stop offset="1" stop-color="#3F7F1A"/></linearGradient>
        <linearGradient id="bamV" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#C4EC7A"/><stop offset=".42" stop-color="#7FBF35"/><stop offset="1" stop-color="#3F7F1A"/></linearGradient></defs>
        <rect width="${W}" height="${H}" fill="url(#fg)"/>${lv(0, 0, 135)}${lv(W, 0, -135)}${lv(0, H, 45)}${lv(W, H, -45)}
        <rect x="96" y="110" width="${W - 192}" height="${H - 210}" rx="30" fill="url(#wd)"/>
        ${[...Array(30)].map((_, i) => `<rect x="${110 + i*46}" y="110" width="3" height="${H - 210}" fill="rgba(110,60,15,.10)"/>`).join('')}
        <rect x="120" y="134" width="${W - 240}" height="${H - 258}" rx="20" fill="none" stroke="#93592A" stroke-width="6"/>
        ${bambooBar(66, 88, W - 132, 46)}${bambooBar(66, H - 124, W - 132, 46)}${bambooBar(74, 80, 46, H - 196)}${bambooBar(W - 120, 80, 46, H - 196)}
        ${tieS(97, 111)}${tieS(W - 97, 111)}${tieS(97, H - 101)}${tieS(W - 97, H - 101)}<g transform="translate(${W/2} 116) scale(.95)">${LEAVES}</g>`;
    },
  },
};
