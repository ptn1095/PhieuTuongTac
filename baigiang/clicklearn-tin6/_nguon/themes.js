// Các phong cách giao diện cho bài ClickLearn Tin học 6. Dùng trong build.js (META.theme).
// Mỗi phong cách: vars (biến màu CSS), bar (kiểu khung), grain (hoa văn bảng), css (thêm), js (đối tượng THEME trong trang).

function barCSS(kind, k1, k2, dir, sc) {
  const D = dir === 'H' ? '90deg' : '180deg', px = v => Math.max(2, Math.round(v*sc)) + 'px', sz = s => dir === 'H' ? `${px(s)} 100%` : `100% ${px(s)}`;
  const slant = dir === 'H' ? '60deg' : '30deg', perp = dir === 'H' ? '180deg' : '90deg';
  switch (kind) {
    case 'node': return `repeating-linear-gradient(${D},transparent 0 ${px(220)},${k1} ${px(220)} ${px(228)},${k2} ${px(228)} ${px(234)},transparent ${px(234)} ${px(330)})`;
    case 'band': return `repeating-linear-gradient(${D},transparent 0 ${px(150)},${k1} ${px(150)} ${px(170)},${k2} ${px(170)} ${px(176)},transparent ${px(176)} ${px(260)})`;
    case 'rivet': return `radial-gradient(circle at 50% 50%,${k2} 0 ${px(8)},${k1} ${px(8)} ${px(11)},transparent ${px(12)}) 0 0/${sz(90)}`;
    case 'rope': return `repeating-linear-gradient(${slant},${k1} 0 ${px(7)},transparent ${px(7)} ${px(18)})`;
    case 'dot': return `radial-gradient(circle at 50% 50%,${k1} 0 ${px(7)},transparent ${px(8)}) 0 0/${sz(40)}`;
    case 'brick': return `repeating-linear-gradient(${D},transparent 0 ${px(56)},${k1} ${px(56)} ${px(61)}),linear-gradient(${perp},transparent 46%,${k1} 46% 54%,transparent 54%)`;
    case 'ice': return `repeating-linear-gradient(${slant},${k1} 0 ${px(5)},transparent ${px(5)} ${px(46)})`;
  }
}

const T = {};

T.rung = { name: 'Tre gỗ rừng', ic: '🌿', js: `const THEME = { id: 'rung', deco: { kind: 'ffly', n: 16 } };` };

T.vutru = {
  name: 'Vũ trụ', ic: '🚀',
  vars: { 'wood-light': '#E3EAF7', wood: '#BFCBE3', 'wood-mid': '#8E9BBE', 'wood-dark': '#5B6B92', 'wood-edge': '#26305A', ink: '#1F2547',
    'bamboo-hi': '#9AA7C7', bamboo: '#4A5680', 'bamboo-dark': '#262F55', 'bamboo-node': '#00E5FF', 'btn-top': '#7FE6FF', btn: '#2BB3E6', 'btn-dark': '#1B5E9A',
    cream: '#E9FDFF', paper: '#F7F9FF', paper2: '#FFFFFF', cell: '#E2E8F7', title: '#5B3FD0', bg0: '#2B2465', bg1: '#0A0B22', plq1: '#6A4FD8', plq2: '#3B2A8F', hb1: '#EEF2FB' },
  bar: ['rivet', '#1B2445', '#9DE8FF'],
  grain: 'linear-gradient(90deg,rgba(38,48,90,.10) 3px,transparent 3px) 0 0/236px 100%,linear-gradient(180deg,rgba(38,48,90,.10) 3px,transparent 3px) 0 0/100% 230px',
  grainS: 'linear-gradient(90deg,rgba(38,48,90,.08) 2px,transparent 2px) 0 0/120px 100%',
  plqgrain: 'linear-gradient(180deg,rgba(255,255,255,.14) 0 42%,transparent 42%)',
  css: `.tie{border-radius:50%;transform:none;background:radial-gradient(circle at 35% 30%,#E6ECF8,#7D8AB0 60%,#3B4570);border-color:#1B2445}
.tie::after{content:"✦";position:absolute;inset:0;display:grid;place-items:center;color:#00E5FF;font-size:30px;line-height:1}
.wood{box-shadow:inset 0 0 0 8px var(--wood-dark),inset 0 16px 0 rgba(255,255,255,.35),0 0 50px rgba(0,229,255,.28),0 30px 0 rgba(0,0,0,.35)}
.plq{border-color:#1B1A4A}`,
  js: `const THEME = { id: 'vutru',
  top: \`<ellipse cx="0" cy="-112" rx="118" ry="26" fill="none" stroke="#26305A" stroke-width="16" transform="rotate(-14 0 -112)"/><ellipse cx="0" cy="-112" rx="118" ry="26" fill="none" stroke="#7FB8D8" stroke-width="8" transform="rotate(-14 0 -112)"/>
    <circle cx="0" cy="-118" r="58" fill="#FFB347" stroke="#26305A" stroke-width="7"/><path d="M-46 -132 Q0 -146 44 -126 M-50 -104 Q0 -116 52 -98" stroke="#FFD58A" stroke-width="9" fill="none" stroke-linecap="round"/>
    <path d="M-118 -112 A118 26 0 0 0 118 -112" fill="none" stroke="#26305A" stroke-width="16" transform="rotate(-14 0 -112)"/><path d="M-118 -112 A118 26 0 0 0 118 -112" fill="none" stroke="#9DE8FF" stroke-width="8" transform="rotate(-14 0 -112)"/>
    <circle cx="-232" cy="-96" r="22" fill="#E3EAF7" stroke="#26305A" stroke-width="5"/><circle cx="-238" cy="-100" r="5" fill="#9AA7C7"/>
    \${star(-170, -150, 16, '#FFF27A')}\${star(180, -150, 18, '#FFFFFF')}\${star(-110, -176, 9, '#9DE8FF')}\${star(240, -96, 11, '#FFF27A')}\${star(130, -184, 7, '#FFFFFF')}\`,
  bg: [['#3A2C7A', '#0B0C26'], ['#1E3A7A', '#070B22'], ['#4A1F6E', '#120822'], ['#123E63', '#05121F'], ['#3B2A6B', '#0D0A24']],
  bgTitle: ['#2B2465', '#0A0B22'], bgResult: ['#5A2D82', '#140A2A'],
  road: ['rgba(157,232,255,.55)', '#FFF27A', '#26305A'], conf: ['#00E5FF', '#FFF27A', '#B388FF', '#FF6FD8', '#7CFFB2', '#FFFFFF'],
  deco: { kind: 'twk', n: 80, colors: ['#FFFFFF', '#9DE8FF', '#FFF27A'], corners: false,
    extra: '<div style="position:absolute;right:6%;top:9%;width:96px;height:96px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#FFD58A,#E8890C 70%);opacity:.5"></div><div style="position:absolute;left:4%;bottom:16%;width:150px;height:150px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#B388FF,#4B2A9A 70%);opacity:.38"></div>' },
  cert: { bg: ['#2B2465', '#0A0B22'], corners: ['stars'], board: ['#EEF2FB', '#C9D4EA'], grain: 'panels', grainC: 'rgba(38,48,90,.12)', inner: '#5B6B92',
    bar: { grad: ['#9AA7C7', '#4A5680', '#262F55'], stroke: '#1B2445', kind: 'rivet', k1: '#1B2445', k2: '#9DE8FF' },
    tie: { grad: ['#E6ECF8', '#3B4570'], stroke: '#1B2445', shape: 'circle', glyph: '✦', glyphC: '#00E5FF' },
    plaque: ['#6A4FD8', '#3B2A8F', '#1B1A4A'], plaqueTxt: '#E9FDFF', plaqueSh: '#1B1A4A', btn: ['#7FE6FF', '#2BB3E6', '#1B5E9A'],
    ink: '#1F2547', name: '#5B3FD0', nameStroke: '#FFFFFF', accent: '#2B6CB0', slot: ['rgba(38,48,90,.12)', '#5B6B92'], teacher: '#5B3FD0', rank: '#D6336C' } };`,
};

T.daiduong = {
  name: 'Đại dương', ic: '🌊',
  vars: { 'wood-light': '#E4F8FB', wood: '#B5E6EE', 'wood-mid': '#7FC8D6', 'wood-dark': '#2C8BA3', 'wood-edge': '#0E5068', ink: '#0B3A4A',
    'bamboo-hi': '#F3E2B8', bamboo: '#D9B57C', 'bamboo-dark': '#A9814A', 'bamboo-node': '#8A6534', 'btn-top': '#5FE0D2', btn: '#14A9A0', 'btn-dark': '#0B6E72',
    cream: '#FFFFFF', paper: '#F5FDFF', paper2: '#FFFFFF', cell: '#D7F1F6', title: '#0E7490', bg0: '#0E6E99', bg1: '#062A48', plq1: '#FF9E6E', plq2: '#E8563A', hb1: '#F0FBFD' },
  bar: ['rope', '#8A6534', '#F3E2B8'],
  grain: 'radial-gradient(circle,rgba(255,255,255,.55) 0 6px,transparent 7px) 0 0/130px 96px,repeating-linear-gradient(180deg,transparent 0 50px,rgba(44,139,163,.10) 50px 54px)',
  grainS: 'repeating-linear-gradient(180deg,transparent 0 26px,rgba(44,139,163,.10) 26px 28px)',
  plqgrain: 'linear-gradient(180deg,rgba(255,255,255,.18) 0 40%,transparent 40%)',
  css: `.tie{border-radius:50%;transform:none;background:radial-gradient(circle at 35% 30%,#FFE2D2,#FF8A5B 60%,#E8563A);border-color:#9A3418}
.tie::after{content:"✶";position:absolute;inset:0;display:grid;place-items:center;color:#fff;font-size:32px;line-height:1}
.plq{border-color:#9A3418;text-shadow:0 4px 0 #9A3418}`,
  js: `const THEME = { id: 'daiduong',
  top: (() => { const sw = (x, h, c) => \`<path d="M\${x} 0 C\${x - 30} \${-h*.3} \${x + 26} \${-h*.55} \${x - 6} \${-h*.8} C\${x - 22} \${-h*.92} \${x + 4} \${-h} \${x + 8} \${-h}" fill="none" stroke="#1E6B4A" stroke-width="20" stroke-linecap="round"/><path d="M\${x} 0 C\${x - 30} \${-h*.3} \${x + 26} \${-h*.55} \${x - 6} \${-h*.8} C\${x - 22} \${-h*.92} \${x + 4} \${-h} \${x + 8} \${-h}" fill="none" stroke="\${c}" stroke-width="9" stroke-linecap="round"/>\`;
    const sf = (x, y, r) => '<path d="' + [...Array(10)].map((_, i) => { const a = -Math.PI/2 + i*Math.PI/5, q = i % 2 ? r*.42 : r; return (i ? 'L' : 'M') + (x + q*Math.cos(a)).toFixed(1) + ' ' + (y + q*Math.sin(a)).toFixed(1); }).join(' ') + 'Z" fill="#FF8A5B" stroke="#9A3418" stroke-width="6" stroke-linejoin="round"/>';
    return sw(-240, 150, '#4CC38A') + sw(-180, 180, '#6FD8A0') + sw(190, 175, '#6FD8A0') + sw(245, 140, '#4CC38A') + sf(0, -120, 52)
      + '<circle cx="-6" cy="-126" r="6" fill="#9A3418"/><circle cx="8" cy="-120" r="5" fill="#9A3418"/>'
      + [[-100, -160, 12], [110, -150, 16], [80, -182, 8], [-70, -184, 7]].map(([x, y, r]) => \`<circle cx="\${x}" cy="\${y}" r="\${r}" fill="rgba(255,255,255,.35)" stroke="#fff" stroke-width="4"/>\`).join(''); })(),
  bg: [['#0E7AA8', '#06304F'], ['#0B6B8F', '#04233A'], ['#138A9E', '#063443'], ['#1A6FA6', '#082A4A'], ['#0F5F8F', '#041E36']],
  bgTitle: ['#0E6E99', '#062A48'], bgResult: ['#1593A6', '#073246'],
  road: ['rgba(255,255,255,.55)', '#FF8A5B', '#0E5068'], conf: ['#5FE0D2', '#FF8A5B', '#FFD166', '#FFFFFF', '#3FC7F2', '#B5F0E0'],
  deco: { kind: 'bub', n: 24, corners: false, bottom: true, bottomOp: .35 },
  cert: { bg: ['#0E6E99', '#062A48'], corners: ['bubbles'], board: ['#EAFBFD', '#BDE9F0'], grain: 'waves', grainC: 'rgba(44,139,163,.14)', inner: '#2C8BA3',
    bar: { grad: ['#F3E2B8', '#D9B57C', '#A9814A'], stroke: '#7A5A2E', kind: 'rope', k1: '#8A6534' },
    tie: { grad: ['#FFD6C2', '#E8563A'], stroke: '#9A3418', shape: 'circle', glyph: '✶' },
    plaque: ['#FF9E6E', '#E8563A', '#9A3418'], plaqueTxt: '#FFFFFF', plaqueSh: '#9A3418', btn: ['#5FE0D2', '#14A9A0', '#0B6E72'],
    ink: '#0B3A4A', name: '#0E7490', nameStroke: '#FFFFFF', accent: '#C2410C', slot: ['rgba(44,139,163,.15)', '#2C8BA3'], teacher: '#0E7490' } };`,
};

T.samac = {
  name: 'Sa mạc', ic: '🏜️',
  vars: { 'wood-light': '#FBE3B4', wood: '#F0C27F', 'wood-mid': '#E0A562', 'wood-dark': '#B86B2E', 'wood-edge': '#7A3B12', ink: '#5A2A0A',
    'bamboo-hi': '#F2A066', bamboo: '#D2693C', 'bamboo-dark': '#9C3F1E', 'bamboo-node': '#6E2A10', 'btn-top': '#FFB547', btn: '#E8890C', 'btn-dark': '#9C4A06',
    cream: '#FFF4DC', paper: '#FFF8EA', paper2: '#FFFCF4', cell: '#F8E2BE', title: '#C2501E', bg0: '#F0A04B', bg1: '#9A4A1C', plq1: '#D9652E', plq2: '#8F3412', hb1: '#FFE7BF' },
  bar: ['band', '#6E2A10', '#F7C08A'],
  grain: 'radial-gradient(circle,rgba(150,80,20,.13) 0 3px,transparent 4px) 0 0/34px 30px,radial-gradient(circle,rgba(150,80,20,.08) 0 2px,transparent 3px) 17px 15px/34px 30px',
  grainS: 'radial-gradient(circle,rgba(150,80,20,.12) 0 2px,transparent 3px) 0 0/22px 20px',
  plqgrain: 'repeating-linear-gradient(180deg,transparent 0 18px,rgba(255,220,160,.18) 18px 22px)',
  css: `.tie{border-radius:50%;transform:none;background:radial-gradient(circle at 35% 30%,#FFF6B0,#FFC94A 55%,#F59E0B);border-color:#9C4A06}
.tie::after{content:"✹";position:absolute;inset:0;display:grid;place-items:center;color:#9C4A06;font-size:32px;line-height:1}`,
  js: `const THEME = { id: 'samac',
  top: (() => { const cac = (x, s) => \`<g transform="translate(\${x} 0) scale(\${s})"><path d="M-36 -70 Q-66 -70 -66 -100 V-128" fill="none" stroke="#2D5A1E" stroke-width="30" stroke-linecap="round"/><path d="M-36 -70 Q-66 -70 -66 -100 V-128" fill="none" stroke="#5FAE45" stroke-width="18" stroke-linecap="round"/>
      <path d="M36 -96 Q64 -96 64 -124 V-146" fill="none" stroke="#2D5A1E" stroke-width="30" stroke-linecap="round"/><path d="M36 -96 Q64 -96 64 -124 V-146" fill="none" stroke="#5FAE45" stroke-width="18" stroke-linecap="round"/>
      <rect x="-30" y="-180" width="60" height="190" rx="30" fill="#5FAE45" stroke="#2D5A1E" stroke-width="7"/><path d="M-10 -160 V0 M10 -160 V0" stroke="#3E8A2E" stroke-width="5"/><circle cx="0" cy="-182" r="11" fill="#FF6FA8" stroke="#2D5A1E" stroke-width="4"/></g>\`;
    return [...Array(12)].map((_, i) => \`<line x1="0" y1="-90" x2="\${(Math.cos(i*Math.PI/6)*112).toFixed(1)}" y2="\${(-90 + Math.sin(i*Math.PI/6)*112).toFixed(1)}" stroke="#FFC94A" stroke-width="12" stroke-linecap="round"/>\`).join('')
      + '<circle cx="0" cy="-90" r="74" fill="#FFD95A" stroke="#C2501E" stroke-width="7"/>' + cac(-215, .88) + cac(225, .72); })(),
  bg: [['#F4A259', '#A4471B'], ['#E9965A', '#8A3B19'], ['#F2B05E', '#A0521E'], ['#E58C52', '#87351A'], ['#F0A04B', '#9A4A1C']],
  bgTitle: ['#F0A04B', '#9A4A1C'], bgResult: ['#F7B955', '#B4561E'],
  road: ['rgba(255,244,220,.65)', '#FFF27A', '#7A3B12'], conf: ['#FFB547', '#E8890C', '#C2501E', '#4E9A3A', '#FFF27A', '#FFF4DC'],
  deco: { kind: 'ffly', n: 26, colors: ['#FFE7B0'], corners: false, bottom: true, bottomOp: .35,
    extra: '<svg style="position:absolute;left:0;bottom:0;width:100%;height:28%;opacity:.32" viewBox="0 0 100 30" preserveAspectRatio="none"><path d="M0 18 Q18 6 36 16 T72 12 T100 16 V30 H0Z" fill="#7A3B12"/></svg><div style="position:absolute;right:8%;top:8%;width:120px;height:120px;border-radius:50%;background:radial-gradient(circle,#FFF6B0,rgba(255,201,74,.0) 70%);opacity:.8"></div>' },
  cert: { bg: ['#F0A04B', '#9A4A1C'], corners: ['sand'], board: ['#FCEACB', '#F0C27F'], grain: 'dots', grainC: 'rgba(150,80,20,.12)', inner: '#B86B2E',
    bar: { grad: ['#F2A066', '#D2693C', '#9C3F1E'], stroke: '#6E2A10', kind: 'band', k1: '#6E2A10', k2: '#F7C08A' },
    tie: { grad: ['#FFF27A', '#F59E0B'], stroke: '#9C4A06', shape: 'circle', glyph: '✹', glyphC: '#9C4A06' },
    plaque: ['#D9652E', '#8F3412', '#5E200A'], plaqueTxt: '#FFF4DC', plaqueSh: '#5E200A', btn: ['#FFB547', '#E8890C', '#9C4A06'],
    ink: '#5A2A0A', name: '#C2501E', nameStroke: '#FFF8EA', accent: '#2D7A3A', slot: ['rgba(150,80,20,.15)', '#B86B2E'], teacher: '#C2501E' } };`,
};

T.chibi = {
  name: 'Thú chibi', ic: '🐱',
  vars: { 'wood-light': '#FFF7FB', wood: '#FFE1EE', 'wood-mid': '#F7B6D2', 'wood-dark': '#F08CB4', 'wood-edge': '#C94F86', ink: '#5B2A4A',
    'bamboo-hi': '#FFD3E6', bamboo: '#FF9EC4', 'bamboo-dark': '#E5609A', 'bamboo-node': '#FFFFFF', 'btn-top': '#C9A7FF', btn: '#9B6BFF', 'btn-dark': '#6A3FD0',
    cream: '#FFFFFF', paper: '#FFFFFF', paper2: '#FFFFFF', cell: '#FFE8F2', title: '#E5609A', bg0: '#FFC7DD', bg1: '#B98AE8', plq1: '#C9A7FF', plq2: '#8E62DE', hb1: '#FFF0F6' },
  bar: ['dot', 'rgba(255,255,255,.95)', '#fff'],
  grain: 'radial-gradient(circle,rgba(240,140,180,.16) 0 10px,transparent 11px) 0 0/64px 64px,radial-gradient(circle,rgba(155,107,255,.11) 0 10px,transparent 11px) 32px 32px/64px 64px',
  grainS: 'radial-gradient(circle,rgba(240,140,180,.16) 0 5px,transparent 6px) 0 0/32px 32px',
  plqgrain: 'linear-gradient(180deg,rgba(255,255,255,.22) 0 40%,transparent 40%)',
  css: `.tie{border-radius:50%;transform:none;background:radial-gradient(circle at 35% 30%,#FFE3EF,#FF9EC4 60%,#E5609A);border-color:#C94F86}
.tie::after{content:"♥";position:absolute;inset:0;display:grid;place-items:center;color:#fff;font-size:30px;line-height:1}
.plq{border-color:#5B3AA8;text-shadow:0 4px 0 #5B3AA8}.wood{border-radius:44px}`,
  js: `const THEME = { id: 'chibi',
  top: (() => { const ear = (x, f) => \`<g transform="translate(\${x} 0) scale(\${f} 1)"><path d="M-80 10 Q-62 -150 -20 -178 Q10 -160 70 10Z" fill="#FFD3E6" stroke="#C94F86" stroke-width="9" stroke-linejoin="round"/><path d="M-48 0 Q-38 -112 -18 -132 Q2 -118 38 0Z" fill="#FF8FB8"/></g>\`;
    return ear(-195, 1) + ear(195, -1) + '<path d="M0 -92 C-34 -122 -56 -150 -30 -170 C-14 -182 0 -170 0 -156 C0 -170 14 -182 30 -170 C56 -150 34 -122 0 -92Z" fill="#FF6FA8" stroke="#C94F86" stroke-width="7"/>'
      + \`\${star(-90, -150, 12, '#FFFFFF')}\${star(96, -160, 14, '#FFF27A')}\`; })(),
  bg: [['#FFC7DD', '#B98AE8'], ['#BDE7FF', '#9B8CF0'], ['#C9F2D8', '#7FC8E8'], ['#FFE3B3', '#F59EC0'], ['#E0C8FF', '#FF9EC4']],
  bgTitle: ['#FFC7DD', '#B98AE8'], bgResult: ['#FFE3B3', '#F59EC0'],
  road: ['rgba(255,255,255,.8)', '#FF9EC4', '#C94F86'], conf: ['#FF9EC4', '#C9A7FF', '#9BE7FF', '#FFE38A', '#A8F0C6', '#FFFFFF'],
  deco: { kind: 'flt', n: 20, glyphs: ['♥', '✿', '★', '♥', '●'], colors: ['#FFFFFF', '#FF9EC4', '#C9A7FF', '#FFF27A'], corners: false },
  cert: { bg: ['#FFC7DD', '#B98AE8'], corners: ['hearts'], board: ['#FFFFFF', '#FFE1EE'], grain: 'dots', grainC: 'rgba(240,140,180,.18)', inner: '#F08CB4',
    bar: { grad: ['#FFD3E6', '#FF9EC4', '#E5609A'], stroke: '#C94F86', kind: 'dot', k1: 'rgba(255,255,255,.95)' },
    tie: { grad: ['#FFD3E6', '#E5609A'], stroke: '#C94F86', shape: 'circle', glyph: '♥' },
    plaque: ['#C9A7FF', '#8E62DE', '#5B3AA8'], plaqueTxt: '#FFFFFF', plaqueSh: '#5B3AA8', btn: ['#FFB3D1', '#E5609A', '#A8336A'],
    ink: '#5B2A4A', name: '#E5609A', nameStroke: '#FFFFFF', accent: '#8E62DE', slot: ['rgba(240,140,180,.15)', '#F08CB4'], star: ['#FFCF2F', '#C98A00'], teacher: '#8E62DE', rank: '#E5609A' } };`,
};

T.laudai = {
  name: 'Lâu đài châu Âu', ic: '🏰',
  vars: { 'wood-light': '#FBF1D6', wood: '#EED9A6', 'wood-mid': '#D9BE84', 'wood-dark': '#9A7A4A', 'wood-edge': '#5A4325', ink: '#3B2A14',
    'bamboo-hi': '#D8D3C8', bamboo: '#A9A398', 'bamboo-dark': '#6F695E', 'bamboo-node': '#57524A', 'btn-top': '#7FA8FF', btn: '#3D6FD8', 'btn-dark': '#22449A',
    cream: '#FFE9A8', paper: '#FFFBEF', paper2: '#FFFDF6', cell: '#F3E5C0', title: '#7B2CBF', bg0: '#3D4FA3', bg1: '#141A3D', plq1: '#D0364A', plq2: '#8A1424', hb1: '#FFF6DF' },
  bar: ['brick', '#57524A', '#D8D3C8'],
  grain: 'radial-gradient(circle,rgba(120,90,40,.10) 0 2px,transparent 3px) 0 0/26px 22px,radial-gradient(ellipse at 30% 20%,rgba(255,255,255,.35),transparent 50%)',
  grainS: 'radial-gradient(circle,rgba(120,90,40,.10) 0 2px,transparent 3px) 0 0/18px 16px',
  plqgrain: 'linear-gradient(180deg,rgba(255,255,255,.16) 0 40%,transparent 40%)',
  css: `.tie{border-radius:6px;transform:none;background:linear-gradient(180deg,#D8D3C8,#8A847A);border-color:#4A463F}
.tie::after{content:"♛";position:absolute;inset:0;display:grid;place-items:center;color:#E0B23A;font-size:30px;line-height:1}
.plq{border-color:#E0B23A;color:#FFE9A8;text-shadow:0 4px 0 #5A0E18}.sboard .pq{border-color:#E0B23A}`,
  js: `const THEME = { id: 'laudai',
  top: (() => { const tw = (x, w, h, roof) => \`<rect x="\${x - w/2}" y="\${-h}" width="\${w}" height="\${h + 10}" fill="#C9C3B6" stroke="#4A463F" stroke-width="6"/>
      \${[0, 1, 2].map(i => \`<line x1="\${x - w/2}" y1="\${-h + 30 + i*30}" x2="\${x + w/2}" y2="\${-h + 30 + i*30}" stroke="#8A847A" stroke-width="3"/>\`).join('')}
      <path d="M\${x - 12} \${-h + 56} V\${-h + 36} Q\${x} \${-h + 22} \${x + 12} \${-h + 36} V\${-h + 56}Z" fill="#3B2A14"/>
      <path d="M\${x - w/2 - 12} \${-h} L\${x} \${-h - roof} L\${x + w/2 + 12} \${-h}Z" fill="#3E5BA9" stroke="#1E2E66" stroke-width="6" stroke-linejoin="round"/>
      <line x1="\${x}" y1="\${-h - roof}" x2="\${x}" y2="\${-h - roof - 18}" stroke="#4A463F" stroke-width="4"/><path d="M\${x} \${-h - roof - 18} l26 7 l-26 7Z" fill="#C0283A"/>\`;
    return tw(-205, 66, 86, 56) + tw(205, 66, 86, 56) + tw(0, 96, 108, 60); })(),
  bg: [['#3D4FA3', '#141A3D'], ['#4B3A8F', '#170F33'], ['#2F5C9E', '#0E1D3A'], ['#5A3A8C', '#1C0F30'], ['#34488F', '#111733']],
  bgTitle: ['#3D4FA3', '#141A3D'], bgResult: ['#6A3FA0', '#1E0F36'],
  road: ['rgba(255,233,168,.6)', '#E0B23A', '#5A4325'], conf: ['#E0B23A', '#C0283A', '#7B2CBF', '#3D6FD8', '#FFE9A8', '#FFFFFF'],
  deco: { kind: 'twk', n: 55, colors: ['#FFFFFF', '#FFE9A8'], corners: false, bottom: true, bottomOp: .28,
    extra: '<div style="position:absolute;right:7%;top:8%;width:84px;height:84px;border-radius:50%;background:radial-gradient(circle at 40% 35%,#FFF8DC,#E8D9A0 70%);box-shadow:0 0 40px rgba(255,240,180,.6);opacity:.85"></div>' },
  cert: { bg: ['#3D4FA3', '#141A3D'], corners: ['stars'], board: ['#FBF1D6', '#E9D3A0'], grain: 'specks', grainC: 'rgba(120,90,40,.10)', inner: '#9A7A4A',
    bar: { grad: ['#D8D3C8', '#A9A398', '#6F695E'], stroke: '#4A463F', kind: 'brick', k1: '#57524A' },
    tie: { grad: ['#D8D3C8', '#8A847A'], stroke: '#4A463F', shape: 'square', glyph: '♛', glyphC: '#E0B23A' },
    plaque: ['#D0364A', '#8A1424', '#E0B23A'], plaqueTxt: '#FFE9A8', plaqueSh: '#5A0E18', btn: ['#7FA8FF', '#3D6FD8', '#22449A'],
    ink: '#3B2A14', name: '#7B2CBF', nameStroke: '#FFFBEF', accent: '#8A1424', slot: ['rgba(120,90,40,.15)', '#9A7A4A'], teacher: '#7B2CBF' } };`,
};

T.tuyet = {
  name: 'Tuyết mùa đông', ic: '❄️',
  vars: { 'wood-light': '#FFFFFF', wood: '#E3F1FB', 'wood-mid': '#BFDDF2', 'wood-dark': '#7FB3D5', 'wood-edge': '#2F6690', ink: '#17324D',
    'bamboo-hi': '#FFFFFF', bamboo: '#CDEBFA', 'bamboo-dark': '#86BFE0', 'bamboo-node': '#5FA3CF', 'btn-top': '#7CC4FF', btn: '#2F8FE0', 'btn-dark': '#1C5C9A',
    cream: '#FFFFFF', paper: '#FFFFFF', paper2: '#FFFFFF', cell: '#E6F2FB', title: '#2B6CB0', bg0: '#5B8FC7', bg1: '#1B3558', plq1: '#4A92D4', plq2: '#1F5A94', hb1: '#FFFFFF' },
  bar: ['ice', 'rgba(255,255,255,.8)', '#fff'],
  grain: 'radial-gradient(circle,rgba(127,179,213,.18) 0 3px,transparent 4px) 0 0/48px 40px,radial-gradient(ellipse at 20% 10%,rgba(255,255,255,.8),transparent 40%)',
  grainS: 'radial-gradient(circle,rgba(127,179,213,.18) 0 2px,transparent 3px) 0 0/24px 20px',
  plqgrain: 'linear-gradient(180deg,rgba(255,255,255,.2) 0 40%,transparent 40%)',
  css: `.tie{border-radius:50%;transform:none;background:radial-gradient(circle at 35% 30%,#FFFFFF,#CDEBFA 60%,#86BFE0);border-color:#2F6690}
.tie::after{content:"❄";position:absolute;inset:0;display:grid;place-items:center;color:#3B82C4;font-size:30px;line-height:1}
.bb.t::after{content:"";position:absolute;left:20px;right:20px;top:-20px;height:30px;background:radial-gradient(circle at 50% 100%,#fff 0 17px,transparent 18px) 0 0/44px 30px}
.sboard .bs.t::after{content:"";position:absolute;left:8px;right:8px;top:-9px;height:14px;background:radial-gradient(circle at 50% 100%,#fff 0 8px,transparent 9px) 0 0/20px 14px}
.plq{border-color:#17324D;text-shadow:0 4px 0 #17324D}`,
  js: `const THEME = { id: 'tuyet',
  top: (() => { const pine = (x, s) => \`<g transform="translate(\${x} 0) scale(\${s})"><rect x="-10" y="-30" width="20" height="40" fill="#7A4A26" stroke="#1E4D3A" stroke-width="4"/>
      \${[[0, 90], [-50, 72], [-96, 54]].map(([y, w]) => \`<path d="M\${-w} \${y - 30} L0 \${y - 30 - w*1.1} L\${w} \${y - 30}Z" fill="#2F7D5B" stroke="#1E4D3A" stroke-width="6" stroke-linejoin="round"/><path d="M\${-w*.55} \${y - 30 - w*.5} L0 \${y - 30 - w*1.1} L\${w*.55} \${y - 30 - w*.5} Q0 \${y - 30 - w*.38} \${-w*.55} \${y - 30 - w*.5}Z" fill="#fff"/>\`).join('')}</g>\`;
    const flake = (x, y, r) => [0, 60, 120].map(a => \`<g transform="rotate(\${a} \${x} \${y})"><line x1="\${x}" y1="\${y - r}" x2="\${x}" y2="\${y + r}" stroke="#fff" stroke-width="9" stroke-linecap="round"/><path d="M\${x - 14} \${y - r + 8} L\${x} \${y - r + 24} L\${x + 14} \${y - r + 8} M\${x - 14} \${y + r - 8} L\${x} \${y + r - 24} L\${x + 14} \${y + r - 8}" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/></g>\`).join('');
    return pine(-215, .95) + pine(220, .8) + flake(0, -122, 56) + '<circle cx="0" cy="-122" r="12" fill="#CDEBFA" stroke="#fff" stroke-width="4"/>'; })(),
  bg: [['#5B8FC7', '#1B3558'], ['#4F7FB8', '#16304F'], ['#6A9BCF', '#1F3D63'], ['#5784BE', '#172F52'], ['#6C8FD0', '#1E2F5E']],
  bgTitle: ['#5B8FC7', '#1B3558'], bgResult: ['#7BA7DA', '#24466F'],
  road: ['rgba(255,255,255,.7)', '#FFFFFF', '#2F6690'], conf: ['#FFFFFF', '#CDEBFA', '#7CC4FF', '#FFCF2F', '#E5392C', '#2F7D5B'],
  deco: { kind: 'fall', n: 44, colors: ['#FFFFFF'], glyphs: ['❄', '•', '❅', '•'], corners: false, bottom: true, bottomOp: .32 },
  cert: { bg: ['#5B8FC7', '#1B3558'], corners: ['snow'], board: ['#FFFFFF', '#DCEEFA'], grain: 'dots', grainC: 'rgba(127,179,213,.16)', inner: '#7FB3D5', snowTop: true,
    bar: { grad: ['#FFFFFF', '#CDEBFA', '#86BFE0'], stroke: '#5FA3CF', kind: 'ice', k1: 'rgba(255,255,255,.85)' },
    tie: { grad: ['#FFFFFF', '#BFDDF2'], stroke: '#2F6690', shape: 'circle', glyph: '❄', glyphC: '#3B82C4' },
    plaque: ['#4A92D4', '#1F5A94', '#17324D'], plaqueTxt: '#FFFFFF', plaqueSh: '#17324D', btn: ['#7CC4FF', '#2F8FE0', '#1C5C9A'],
    ink: '#17324D', name: '#2B6CB0', nameStroke: '#FFFFFF', accent: '#1F5A94', slot: ['rgba(127,179,213,.18)', '#7FB3D5'], teacher: '#2B6CB0', rank: '#D6336C' } };`,
};

function themeCSS(id) {
  const t = T[id]; if (!t || !t.vars) return '';
  const v = Object.entries(t.vars).map(([k, x]) => `--${k}:${x}`);
  const [kind, k1, k2] = t.bar;
  v.push(`--barH:${barCSS(kind, k1, k2, 'H', 1)}`, `--barV:${barCSS(kind, k1, k2, 'V', 1)}`, `--barHs:${barCSS(kind, k1, k2, 'H', .45)}`, `--barVs:${barCSS(kind, k1, k2, 'V', .45)}`);
  v.push(`--grain:${t.grain}`, `--grain-s:${t.grainS}`, `--plqgrain:${t.plqgrain}`);
  return `:root{${v.join(';\n  ')}}\n${t.css || ''}`;
}
module.exports = { T, themeCSS };
