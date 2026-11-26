/* ---- 4 bước của mỗi hoạt động ---- */
const L4 = ['🎯 Nhiệm vụ', '🔍 Tìm hiểu', '💬 Trao đổi', '⭐ Ghi nhớ'];
const S4 = (...x) => `<ul class="s4">${x.map((t, i) => `<li><span class="l4 l4-${i}">${L4[i]}</span> ${t}</li>`).join('')}</ul>`;
/* ---- 5 hoạt động: tên + màu ---- */
const ACT = [
  { name: 'Khởi động', c: ['#FFA62B', '#FF5DA2'], dk: '#D9480F' },
  { name: 'Khám phá', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB' },
  { name: 'Luyện tập', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B' },
  { name: 'Vận dụng', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4' },
  { name: 'Củng cố', c: ['#FF7F11', '#FF006E'], dk: '#C2255C' },
];

/* ---- hình vẽ đồ vật (khung 600×420) ---- */
const G = (x, y, s, inner) => `<g transform="translate(${x} ${y}) scale(${s})">${inner}</g>`;
const ST = `stroke="${O}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"`;
// nhãn có đường chỉ: chỉ vào (px,py), viên nhãn đặt ở (x,y)
const lab = (px, py, x, y, w, c, t, fs = 22) => `<line x1="${px}" y1="${py}" x2="${x + w/2}" y2="${y + 20}" stroke="${O}" stroke-width="4" stroke-dasharray="2 8" stroke-linecap="round"/><circle cx="${px}" cy="${py}" r="7" fill="#fff" stroke="${O}" stroke-width="4"/>${pillS(x, y, w, 40, c, t, fs)}`;
const tick = (x, y, s = 1) => G(x, y, s, `<circle r="30" fill="#2DA44E" stroke="${O}" stroke-width="5"/><path d="M-14 0 L-4 11 L15 -11" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`);
const cross = (x, y, s = 1) => G(x, y, s, `<circle r="30" fill="#E5383B" stroke="${O}" stroke-width="5"/><path d="M-11 -11 L11 11 M11 -11 L-11 11" stroke="#fff" stroke-width="8" stroke-linecap="round"/>`);
const sun = (x, y, r = 40) => G(x, y, 1, `${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<line x1="0" y1="${-r - 10}" x2="0" y2="${-r - 26}" stroke="#FFB703" stroke-width="8" stroke-linecap="round" transform="rotate(${a})"/>`).join('')}<circle r="${r}" fill="#FFD60A" stroke="${O}" stroke-width="6"/><circle cx="${-r*.3}" cy="${-r*.1}" r="4" fill="${O}"/><circle cx="${r*.3}" cy="${-r*.1}" r="4" fill="${O}"/><path d="M${-r*.3} ${r*.25} Q0 ${r*.5} ${r*.3} ${r*.25}" stroke="${O}" stroke-width="4" fill="none" stroke-linecap="round"/>`);
const tree = (x, y, s = 1) => G(x, y, s, `<rect x="-14" y="10" width="28" height="70" rx="8" fill="#8D5524" ${ST}/><circle cx="0" cy="-30" r="52" fill="#2DA44E" ${ST}/><circle cx="-34" cy="0" r="34" fill="#8AC926" ${ST}/><circle cx="34" cy="0" r="34" fill="#8AC926" ${ST}/><circle cx="-14" cy="-44" r="9" fill="#FF595E"/><circle cx="22" cy="-20" r="9" fill="#FF595E"/><circle cx="-26" cy="4" r="8" fill="#FF595E"/>`);
const mountain = (x, y, s = 1) => G(x, y, s, `<path d="M-90 50 L-20 -60 L20 0 L45 -30 L100 50Z" fill="#6A994E" ${ST}/><path d="M-36 -34 L-20 -60 L-4 -34 L-14 -40 L-22 -32Z" fill="#fff"/>`);
const cat = (x, y, s = 1) => G(x, y, s, `<path d="M38 30 Q78 20 66 -20" stroke="${O}" stroke-width="14" fill="none" stroke-linecap="round"/><path d="M38 30 Q78 20 66 -20" stroke="#FF9F1C" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="30" rx="44" ry="34" fill="#FF9F1C" ${ST}/><path d="M-36 -44 L-30 -78 L-8 -54 L8 -54 L30 -78 L36 -44 Q42 -6 0 -4 Q-42 -6 -36 -44Z" fill="#FF9F1C" ${ST}/><circle cx="-14" cy="-36" r="5" fill="${O}"/><circle cx="14" cy="-36" r="5" fill="${O}"/><path d="M-6 -24 L6 -24 L0 -18Z" fill="#FF595E"/>`);
const flower = (x, y, s = 1, c = '#FF006E') => G(x, y, s, `<line x1="0" y1="0" x2="0" y2="60" stroke="#2DA44E" stroke-width="8"/>${[0, 72, 144, 216, 288].map(a => `<ellipse cx="0" cy="-20" rx="13" ry="20" fill="${c}" stroke="${O}" stroke-width="4" transform="rotate(${a})"/>`).join('')}<circle r="12" fill="#FFD60A" stroke="${O}" stroke-width="4"/>`);
// đèn học: gốc là tâm đế (x,y)
const lamp = (x, y, s = 1, on = true) => G(x, y, s, `${on ? `<path d="M118 -150 L40 60 L250 60 L190 -150Z" fill="#FFE066" opacity=".45"/>` : ''}
  <ellipse cx="0" cy="0" rx="80" ry="24" fill="#FF006E" ${ST}/><rect x="-80" y="-14" width="160" height="14" fill="#FF006E"/><ellipse cx="0" cy="-14" rx="80" ry="24" fill="#FF5DA2" ${ST}/>
  <rect x="34" y="-30" width="30" height="18" rx="6" fill="#FFD60A" ${ST}/>
  <path d="M-10 -20 L-30 -150 L110 -200" fill="none" stroke="${O}" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/><path d="M-10 -20 L-30 -150 L110 -200" fill="none" stroke="#1982C4" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="-30" cy="-150" r="14" fill="#FFD60A" ${ST}/>
  <circle cx="150" cy="-150" r="${on ? 24 : 20}" fill="${on ? '#FFF3BF' : '#E9ECEF'}" ${ST}/>
  <path d="M70 -232 L180 -244 L214 -150 L96 -136Z" fill="#8338EC" ${ST}/>`);
// quạt cây: gốc là tâm lồng quạt (x,y)
const fan = (x, y, s = 1, spin = true) => G(x, y, s, `<rect x="-14" y="80" width="28" height="150" rx="10" fill="#ADB5BD" ${ST}/>
  <ellipse cx="0" cy="236" rx="96" ry="24" fill="#1982C4" ${ST}/><rect x="-56" y="212" width="20" height="14" rx="4" fill="#FFD60A" stroke="${O}" stroke-width="4"/><rect x="-28" y="212" width="20" height="14" rx="4" fill="#FF7F11" stroke="${O}" stroke-width="4"/><rect x="0" y="212" width="20" height="14" rx="4" fill="#FF006E" stroke="${O}" stroke-width="4"/><rect x="28" y="212" width="20" height="14" rx="4" fill="#2DA44E" stroke="${O}" stroke-width="4"/>
  <circle r="96" fill="#E7F5FF" ${ST}/>
  <g>${[0, 120, 240].map(a => `<path d="M0 0 C 20 -30 56 -62 30 -80 C 6 -92 -10 -50 0 0Z" fill="#3A8DFF" stroke="${O}" stroke-width="5" transform="rotate(${a})"/>`).join('')}${spin ? `<animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="1.6s" repeatCount="indefinite"/>` : ''}</g>
  <circle r="18" fill="#FFD60A" stroke="${O}" stroke-width="5"/>
  ${[-60, -30, 0, 30, 60].map(d => `<line x1="${d}" y1="${-Math.sqrt(96*96 - d*d) + 4}" x2="${d}" y2="${Math.sqrt(96*96 - d*d) - 4}" stroke="${O}" stroke-width="3" opacity=".55"/>`).join('')}
  <circle r="96" fill="none" stroke="${O}" stroke-width="7"/><rect x="-38" y="76" width="76" height="52" rx="20" fill="#2EC4B6" ${ST}/>`);
// máy thu thanh: gốc là góc trên trái thân máy, thân 300×170
const radio = (x, y, s = 1) => G(x, y, s, `<line x1="250" y1="0" x2="320" y2="-120" stroke="${O}" stroke-width="7" stroke-linecap="round"/><circle cx="320" cy="-120" r="9" fill="#FF006E" stroke="${O}" stroke-width="4"/>
  <path d="M60 0 Q150 -60 240 0" fill="none" stroke="${O}" stroke-width="12" stroke-linecap="round"/>
  <rect x="0" y="0" width="300" height="170" rx="30" fill="#FF7F11" ${ST}/>
  <circle cx="86" cy="92" r="56" fill="#FFE8CC" ${ST}/>${[[-24, -24], [0, -30], [24, -24], [-30, 0], [0, 0], [30, 0], [-24, 24], [0, 30], [24, 24]].map(([a, b]) => `<circle cx="${86 + a}" cy="${92 + b}" r="6" fill="${O}"/>`).join('')}
  <rect x="160" y="30" width="118" height="46" rx="10" fill="#1B2A49" stroke="${O}" stroke-width="5"/><text x="219" y="62" text-anchor="middle" font-size="22" fill="#7DF9FF" ${F}>FM 91</text>
  <circle cx="186" cy="122" r="22" fill="#FFD60A" ${ST}/><line x1="186" y1="122" x2="186" y2="104" stroke="${O}" stroke-width="5" stroke-linecap="round"/>
  <circle cx="252" cy="122" r="22" fill="#2EC4B6" ${ST}/><line x1="252" y1="122" x2="266" y2="110" stroke="${O}" stroke-width="5" stroke-linecap="round"/>
  <rect x="136" y="-14" width="34" height="18" rx="6" fill="#E5383B" stroke="${O}" stroke-width="4"/>`);
// máy thu hình: gốc là góc trên trái màn hình 300×190
const tv = (x, y, s = 1, pic = 'cartoon') => G(x, y, s, `<path d="M110 190 L80 236 M190 190 L220 236" stroke="${O}" stroke-width="10" stroke-linecap="round"/><rect x="60" y="230" width="180" height="16" rx="8" fill="#ADB5BD" stroke="${O}" stroke-width="5"/>
  <rect x="-14" y="-14" width="328" height="218" rx="26" fill="#3D405B" ${ST}/>
  <rect x="0" y="0" width="300" height="190" rx="14" fill="#8ECAE6" stroke="${O}" stroke-width="4"/>
  ${pic === 'cartoon' ? `<rect x="0" y="130" width="300" height="60" fill="#8AC926"/><circle cx="240" cy="50" r="24" fill="#FFD60A"/><path d="M40 130 L90 60 L140 130Z" fill="#6A994E"/><circle cx="170" cy="112" r="24" fill="#FF006E" stroke="${O}" stroke-width="4"/><circle cx="162" cy="106" r="4" fill="${O}"/><circle cx="178" cy="106" r="4" fill="${O}"/>` : pic}
  <circle cx="290" cy="196" r="5" fill="#2DA44E"/>`);
// điều khiển ti vi: gốc là góc trên trái 120×300
const remote = (x, y, s = 1) => G(x, y, s, `<rect x="0" y="0" width="120" height="300" rx="40" fill="#3D405B" ${ST}/>
  <circle cx="60" cy="38" r="18" fill="#E5383B" stroke="${O}" stroke-width="4"/><path d="M60 28 V40 M52 32 A11 11 0 1 0 68 32" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>
  ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n, i) => `<rect x="${16 + (i % 3)*32}" y="${70 + Math.floor(i/3)*30}" width="26" height="24" rx="7" fill="#fff"/><text x="${29 + (i % 3)*32}" y="${89 + Math.floor(i/3)*30}" text-anchor="middle" font-size="17" fill="${O}" ${F}>${n}</text>`).join('')}
  <rect x="14" y="170" width="40" height="96" rx="18" fill="#FFD60A" stroke="${O}" stroke-width="4"/><text x="34" y="196" text-anchor="middle" font-size="22" fill="${O}" ${F}>+</text><text x="34" y="222" text-anchor="middle" font-size="13" fill="${O}" ${F}>VOL</text><text x="34" y="256" text-anchor="middle" font-size="24" fill="${O}" ${F}>−</text>
  <rect x="66" y="170" width="40" height="96" rx="18" fill="#2EC4B6" stroke="${O}" stroke-width="4"/><text x="86" y="196" text-anchor="middle" font-size="22" fill="${O}" ${F}>+</text><text x="86" y="222" text-anchor="middle" font-size="14" fill="${O}" ${F}>CH</text><text x="86" y="256" text-anchor="middle" font-size="24" fill="${O}" ${F}>−</text>`);
const fridge = (x, y, s = 1) => G(x, y, s, `<rect x="0" y="0" width="130" height="230" rx="20" fill="#E7F5FF" ${ST}/><line x1="0" y1="80" x2="130" y2="80" stroke="${O}" stroke-width="6"/><rect x="104" y="24" width="10" height="36" rx="5" fill="${O}"/><rect x="104" y="100" width="10" height="50" rx="5" fill="${O}"/><path d="M30 30 l8 8 m-8 0 l8 -8" stroke="#3A8DFF" stroke-width="4"/>`);
const socket = (x, y, s = 1) => G(x, y, s, `<rect x="-60" y="-60" width="120" height="120" rx="24" fill="#fff" ${ST}/><circle r="38" fill="#F1F3F5" stroke="${O}" stroke-width="4"/><rect x="-20" y="-16" width="10" height="26" rx="4" fill="${O}"/><rect x="10" y="-16" width="10" height="26" rx="4" fill="${O}"/>`);
const bolt = (x, y, s = 1) => G(x, y, s, `<path d="M8 -50 L-26 6 L-2 6 L-12 50 L26 -8 L2 -8Z" fill="#FFD60A" ${ST}/>`);
const iron = (x, y, s = 1) => G(x, y, s, `<path d="M-90 40 Q-90 -20 -20 -40 L90 -40 L90 40Z" fill="#FF006E" ${ST}/><path d="M-30 -40 Q-20 -90 40 -90 L80 -90 L80 -40" fill="none" stroke="${O}" stroke-width="16" stroke-linecap="round"/><path d="M-30 -40 Q-20 -90 40 -90 L80 -90 L80 -40" fill="none" stroke="#FFD60A" stroke-width="7" stroke-linecap="round"/><rect x="-92" y="40" width="184" height="14" rx="6" fill="#ADB5BD" ${ST}/>`);
const steam = (x, y, c = '#ADB5BD') => `<path d="M${x} ${y} q-14 -18 0 -36 q14 -18 0 -36 M${x + 26} ${y + 6} q-14 -18 0 -36 q14 -18 0 -36" stroke="${c}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
const cooker = (x, y, s = 1) => G(x, y, s, `<ellipse cx="0" cy="-60" rx="80" ry="26" fill="#2EC4B6" ${ST}/><path d="M-80 -60 L-80 40 Q0 70 80 40 L80 -60" fill="#fff" ${ST}/><rect x="-20" y="-96" width="40" height="18" rx="8" fill="#FFD60A" stroke="${O}" stroke-width="5"/><rect x="-28" y="0" width="56" height="22" rx="8" fill="#FF7F11" stroke="${O}" stroke-width="4"/>`);
const scissors = (x, y, s = 1) => G(x, y, s, `<path d="M0 0 L90 -40 M0 0 L90 40" stroke="#ADB5BD" stroke-width="16" stroke-linecap="round"/><path d="M0 0 L90 -40 M0 0 L90 40" stroke="${O}" stroke-width="4" stroke-linecap="round" opacity=".6"/><circle cx="-26" cy="-26" r="22" fill="none" stroke="#FF006E" stroke-width="12"/><circle cx="-26" cy="26" r="22" fill="none" stroke="#FF006E" stroke-width="12"/>`);
const tower = (x, y, s = 1, c = '#FF006E') => G(x, y, s, `<path d="M-50 120 L0 -100 L50 120" fill="none" stroke="${O}" stroke-width="10" stroke-linejoin="round"/><path d="M-32 40 L32 40 M-20 -10 L20 -10 M-42 90 L42 90 M-32 40 L20 -10 M32 40 L-20 -10 M-42 90 L32 40 M42 90 L-32 40" stroke="${O}" stroke-width="5"/><circle cx="0" cy="-104" r="14" fill="${c}" stroke="${O}" stroke-width="5"/>`);
const waves = (x, y, c = '#FF006E', n = 3) => [...Array(n)].map((_, i) => `<path d="M${x + i*28} ${y - 26 - i*14} Q${x + 18 + i*28} ${y} ${x + i*28} ${y + 26 + i*14}" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`).join('');
const ear = (x, y, s = 1) => G(x, y, s, `<path d="M-20 -50 Q40 -70 40 -10 Q40 20 10 30 Q0 50 -20 50" fill="#FFD6A5" ${ST}/><path d="M-4 -24 Q20 -30 18 -6 Q16 8 2 10" fill="none" stroke="${O}" stroke-width="5" stroke-linecap="round"/>`);
const eye = (x, y, s = 1) => G(x, y, s, `<path d="M-50 0 Q0 -44 50 0 Q0 44 -50 0Z" fill="#fff" ${ST}/><circle r="18" fill="#1982C4" stroke="${O}" stroke-width="4"/><circle r="8" fill="${O}"/><circle cx="6" cy="-6" r="4" fill="#fff"/>`);
const basket = (x, y, w, c, t) => `<path d="M${x} ${y} L${x + w} ${y} L${x + w - 22} ${y + 110} L${x + 22} ${y + 110}Z" fill="${c}" ${ST}/>${[1, 2, 3].map(i => `<line x1="${x + i*w/4}" y1="${y + 4}" x2="${x + i*w/4 + (i - 2)*-6}" y2="${y + 106}" stroke="${O}" stroke-width="4" opacity=".5"/>`).join('')}${pillS(x + 10, y + 118, w - 20, 42, '#fff', t, 22, 0, O)}`;
const bike = (x, y, s = 1) => G(x, y, s, `<circle cx="-60" cy="0" r="40" fill="none" ${ST}/><circle cx="60" cy="0" r="40" fill="none" ${ST}/><path d="M-60 0 L-20 -50 L40 -50 L60 0 M-20 -50 L0 0 L40 -50 M40 -50 L34 -72 L54 -74" fill="none" stroke="#FF006E" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><rect x="-34" y="-62" width="28" height="10" rx="5" fill="${O}"/>`);
const hand = (x, y, s = 1, r = 0) => G(x, y, s, `<g transform="rotate(${r})"><rect x="-96" y="-22" width="62" height="44" rx="12" fill="#FF006E" ${ST}/><path d="M-38 -24 L10 -24 L10 -14 L54 -14 Q64 -14 64 -4 Q64 6 54 6 L22 6 Q26 10 24 16 Q22 26 12 26 L-38 26Z" fill="#FFD6A5" ${ST}/><path d="M-6 6 L20 6 M-6 16 L16 16" stroke="${O}" stroke-width="3" stroke-linecap="round" opacity=".5"/></g>`);
const note = (x, y, c = '#8338EC', s = 1) => G(x, y, s, `<line x1="12" y1="0" x2="12" y2="-46" stroke="${O}" stroke-width="6" stroke-linecap="round"/><path d="M12 -46 Q30 -40 32 -22" stroke="${O}" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="0" rx="15" ry="11" fill="${c}" stroke="${O}" stroke-width="5" transform="rotate(-20)"/>`);
const warn = (x, y, s = 1) => G(x, y, s, `<path d="M0 -34 L34 26 L-34 26Z" fill="#FFD60A" ${ST}/><text x="0" y="18" text-anchor="middle" font-size="40" fill="${O}" ${F}>!</text>`);
const kid = (x, y, s = 1, c = '#FF006E') => G(x, y, s, `<rect x="-32" y="10" width="64" height="80" rx="24" fill="${c}" ${ST}/><rect x="-26" y="86" width="20" height="44" rx="8" fill="#1982C4" ${ST}/><rect x="6" y="86" width="20" height="44" rx="8" fill="#1982C4" ${ST}/><circle cx="0" cy="-24" r="38" fill="#FFD6A5" ${ST}/><path d="M-38 -30 Q-36 -66 0 -64 Q36 -66 38 -30 Q20 -46 -4 -42 Q-24 -40 -38 -30Z" fill="#3D2B1F" stroke="${O}" stroke-width="5"/><circle cx="-13" cy="-20" r="5" fill="${O}"/><circle cx="13" cy="-20" r="5" fill="${O}"/><path d="M-10 -4 Q0 6 10 -4" stroke="${O}" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse cx="-24" cy="-8" rx="7" ry="4" fill="#FF8FAB"/><ellipse cx="24" cy="-8" rx="7" ry="4" fill="#FF8FAB"/>`);
const clock = (x, y, s = 1) => G(x, y, s, `<circle r="44" fill="#fff" ${ST}/><circle r="44" fill="none" stroke="#FF006E" stroke-width="5" stroke-dasharray="3 20"/><line x1="0" y1="0" x2="0" y2="-28" stroke="${O}" stroke-width="6" stroke-linecap="round"/><line x1="0" y1="0" x2="20" y2="8" stroke="#FF006E" stroke-width="6" stroke-linecap="round"/><circle r="6" fill="${O}"/>`);
const house = (x, y, s = 1) => G(x, y, s, `<rect x="-120" y="-20" width="240" height="170" rx="10" fill="#FFF3BF" ${ST}/><path d="M-150 -10 L0 -130 L150 -10Z" fill="#FF595E" ${ST}/><rect x="-30" y="60" width="60" height="90" rx="8" fill="#8D5524" ${ST}/><rect x="-100" y="20" width="56" height="50" rx="8" fill="#8ECAE6" ${ST}/><rect x="44" y="20" width="56" height="50" rx="8" fill="#8ECAE6" ${ST}/><circle cx="18" cy="108" r="5" fill="#FFD60A"/>`);
const mic = (x, y, s = 1, r = 0) => G(x, y, s, `<g transform="rotate(${r})"><rect x="-10" y="20" width="20" height="70" rx="8" fill="#3D405B" ${ST}/><rect x="-26" y="-40" width="52" height="66" rx="26" fill="#ADB5BD" ${ST}/>${[-20, -6, 8].map(v => `<line x1="-20" y1="${v}" x2="20" y2="${v}" stroke="${O}" stroke-width="3"/>`).join('')}</g>`);
const phone = (x, y, s = 1, t = '115') => G(x, y, s, `<rect x="-40" y="-70" width="80" height="140" rx="16" fill="#3D405B" ${ST}/><rect x="-30" y="-56" width="60" height="96" rx="8" fill="#8ECAE6"/><text x="0" y="0" text-anchor="middle" font-size="26" fill="#E5383B" ${F}>${t}</text><circle cx="0" cy="54" r="7" fill="#fff"/>`);
const book = (x, y, s = 1) => G(x, y, s, `<path d="M0 0 Q-50 -16 -100 0 L-100 60 Q-50 44 0 60Z" fill="#fff" ${ST}/><path d="M0 0 Q50 -16 100 0 L100 60 Q50 44 0 60Z" fill="#fff" ${ST}/>${[14, 28, 42].map(v => `<line x1="-80" y1="${v - 4}" x2="-20" y2="${v - 8}" stroke="#8ECAE6" stroke-width="4"/><line x1="20" y1="${v - 8}" x2="80" y2="${v - 4}" stroke="#8ECAE6" stroke-width="4"/>`).join('')}`);
const breaker = (x, y, s = 1) => G(x, y, s, `<rect x="-40" y="-56" width="80" height="112" rx="12" fill="#fff" ${ST}/><rect x="-14" y="-30" width="28" height="60" rx="8" fill="#ADB5BD" stroke="${O}" stroke-width="4"/><rect x="-12" y="4" width="24" height="24" rx="6" fill="#E5383B" stroke="${O}" stroke-width="4"/><text x="0" y="-36" text-anchor="middle" font-size="14" fill="${O}" ${F}>OFF</text>`);
const stick = (x, y, s = 1) => G(x, y, s, `<rect x="-110" y="-12" width="220" height="24" rx="12" fill="#C68B59" ${ST} transform="rotate(-20)"/>`);
const knife = (x, y, s = 1) => G(x, y, s, `<path d="M0 -12 L110 -12 Q130 -12 140 8 L0 12Z" fill="#E9ECEF" ${ST}/><rect x="-80" y="-14" width="84" height="28" rx="12" fill="#8D5524" ${ST}/>`);
const kettle = (x, y, s = 1) => G(x, y, s, `<path d="M-50 60 L-60 -40 Q0 -64 60 -40 L50 60Z" fill="#FF7F11" ${ST}/><path d="M60 -30 Q100 -20 92 30" fill="none" stroke="${O}" stroke-width="14" stroke-linecap="round"/><path d="M-60 -20 L-96 -46" stroke="${O}" stroke-width="12" stroke-linecap="round"/><ellipse cx="0" cy="68" rx="64" ry="14" fill="#3D405B" ${ST}/>`);

/* ---- hình thêm cho Công nghệ 5 ---- */
// bóng đèn sợi đốt: gốc là tâm bóng (x,y)
const bulb = (x, y, s = 1, on = true) => G(x, y, s, `${on ? [0, 45, 90, 135, 225, 270, 315].map(a => `<line x1="0" y1="-78" x2="0" y2="-100" stroke="#FFB703" stroke-width="8" stroke-linecap="round" transform="rotate(${a})"/>`).join('') : ''}
  <path d="M-26 40 Q-62 10 -60 -22 Q-56 -70 0 -70 Q56 -70 60 -22 Q62 10 26 40Z" fill="${on ? '#FFE066' : '#F1F3F5'}" ${ST}/>
  <path d="M-14 40 L-14 4 Q-8 -14 0 4 Q8 -14 14 4 L14 40" fill="none" stroke="#FF7F11" stroke-width="5" stroke-linejoin="round"/>
  <rect x="-28" y="40" width="56" height="16" rx="5" fill="#ADB5BD" ${ST}/><rect x="-24" y="56" width="48" height="14" rx="5" fill="#868E96" ${ST}/><path d="M-12 70 L12 70 L4 84 L-4 84Z" fill="${O}"/>
  <path d="M-36 -34 Q-34 -52 -16 -56" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round"/>`);
// điện thoại thông minh: gốc là tâm (x,y), thân 120×220
const smart = (x, y, s = 1, scr = '') => G(x, y, s, `<rect x="-60" y="-110" width="120" height="220" rx="22" fill="#3D405B" ${ST}/><rect x="-48" y="-90" width="96" height="172" rx="10" fill="#8ECAE6"/>
  <circle cx="0" cy="-100" r="4" fill="#fff"/><rect x="-14" y="94" width="28" height="7" rx="3" fill="#fff"/>${scr}`);
// màn hình chính: 6 ô ứng dụng
const apps = () => [['#2DA44E', 0], ['#FF7F11', 1], ['#FF006E', 2], ['#1982C4', 3], ['#8338EC', 4], ['#FFD60A', 5]].map(([c, i]) => `<rect x="${-38 + (i % 3)*28}" y="${-60 + Math.floor(i/3)*30}" width="20" height="20" rx="6" fill="${c}" stroke="${O}" stroke-width="3"/>`).join('');
// ô tô: gốc là giữa đáy (x,y)
const car = (x, y, s = 1, c = '#E5383B') => G(x, y, s, `<path d="M-120 -10 L-120 -50 Q-118 -60 -100 -62 L-70 -64 L-40 -104 L50 -104 L86 -64 L110 -60 Q124 -56 124 -40 L124 -10Z" fill="${c}" ${ST}/>
  <path d="M-30 -92 L-4 -92 L-4 -66 L-52 -66Z M8 -92 L44 -92 L66 -66 L8 -66Z" fill="#8ECAE6" stroke="${O}" stroke-width="4" stroke-linejoin="round"/>
  <circle cx="-72" cy="-8" r="26" fill="#3D405B" ${ST}/><circle cx="-72" cy="-8" r="9" fill="#ADB5BD"/><circle cx="74" cy="-8" r="26" fill="#3D405B" ${ST}/><circle cx="74" cy="-8" r="9" fill="#ADB5BD"/><rect x="108" y="-54" width="14" height="12" rx="4" fill="#FFD60A"/>`);
// bánh răng: tâm (x,y), bán kính r
const gear = (x, y, r = 50, c = '#1982C4') => G(x, y, 1, `${[...Array(8)].map((_, i) => `<rect x="${-r*.2}" y="${-r - 16}" width="${r*.4}" height="34" rx="6" fill="${c}" ${ST} transform="rotate(${i*45})"/>`).join('')}<circle r="${r}" fill="${c}" ${ST}/><circle r="${r*.38}" fill="#fff" ${ST}/>`);
// máy hơi nước (đầu tàu): gốc là giữa đáy (x,y)
const engine = (x, y, s = 1) => G(x, y, s, `<rect x="-110" y="-90" width="150" height="70" rx="16" fill="#2DA44E" ${ST}/><rect x="30" y="-140" width="90" height="120" rx="12" fill="#1982C4" ${ST}/><rect x="48" y="-124" width="54" height="40" rx="6" fill="#8ECAE6" stroke="${O}" stroke-width="4"/>
  <path d="M-90 -90 L-96 -136 L-60 -136 L-66 -90Z" fill="#3D405B" ${ST}/><rect x="-124" y="-30" width="258" height="14" rx="6" fill="#3D405B" ${ST}/>
  <circle cx="-70" cy="-4" r="26" fill="#FF006E" ${ST}/><circle cx="0" cy="-4" r="26" fill="#FF006E" ${ST}/><circle cx="80" cy="-4" r="26" fill="#FF006E" ${ST}/>
  <circle cx="-86" cy="-160" r="16" fill="#E9ECEF" stroke="${O}" stroke-width="4"/><circle cx="-60" cy="-182" r="20" fill="#E9ECEF" stroke="${O}" stroke-width="4"/><circle cx="-24" cy="-196" r="14" fill="#E9ECEF" stroke="${O}" stroke-width="4"/>`);
// chong chóng 4 cánh: tâm (x,y)
const pinwheel = (x, y, s = 1) => G(x, y, s, `<rect x="-7" y="0" width="14" height="190" rx="6" fill="#C68B59" ${ST}/>
  ${[['#FF006E', 0], ['#FFD60A', 90], ['#1982C4', 180], ['#2DA44E', 270]].map(([c, a]) => `<path d="M0 0 L0 -90 Q50 -90 64 -64Z" fill="${c}" ${ST} transform="rotate(${a})"/>`).join('')}<circle r="10" fill="#fff" ${ST}/>`);
// bút chì nằm: gốc là đầu ngòi (x,y), quay r độ
const pencil = (x, y, s = 1, r = 0, c = '#FFC300') => G(x, y, s, `<g transform="rotate(${r})"><path d="M0 0 L40 -18 L40 18Z" fill="#FFD6A5" ${ST}/><path d="M0 0 L14 -6 L14 6Z" fill="${O}"/><rect x="40" y="-18" width="170" height="36" fill="${c}" ${ST}/><rect x="210" y="-18" width="30" height="36" rx="8" fill="#FF8FAB" ${ST}/></g>`);
// tờ giấy phác thảo: góc trên trái (x,y), w×h
const paper = (x, y, w, h, inner = '') => `<rect x="${x + 8}" y="${y + 8}" width="${w}" height="${h}" rx="14" fill="#000" opacity=".15"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="#fff" ${ST}/>${[...Array(Math.floor(h/36))].map((_, i) => `<line x1="${x + 16}" y1="${y + 36 + i*36}" x2="${x + w - 16}" y2="${y + 36 + i*36}" stroke="#D0EBFF" stroke-width="3"/>`).join('')}${inner}`;
// máy gặt / máy cày: gốc là giữa đáy (x,y)
const tractor = (x, y, s = 1) => G(x, y, s, `<rect x="-100" y="-80" width="130" height="50" rx="10" fill="#FF7F11" ${ST}/><path d="M10 -80 L10 -150 L80 -150 L90 -80Z" fill="#FFD60A" ${ST}/><rect x="24" y="-138" width="50" height="42" rx="6" fill="#8ECAE6" stroke="${O}" stroke-width="4"/>
  <rect x="-80" y="-112" width="16" height="32" rx="4" fill="#3D405B" ${ST}/><circle cx="-70" cy="-20" r="28" fill="#3D405B" ${ST}/><circle cx="-70" cy="-20" r="10" fill="#FFD60A"/><circle cx="60" cy="-40" r="48" fill="#3D405B" ${ST}/><circle cx="60" cy="-40" r="16" fill="#FFD60A"/>`);
// nhà máy có ống khói xả khói đen: gốc là giữa đáy (x,y)
const factory = (x, y, s = 1, dirty = true) => G(x, y, s, `<path d="M-120 0 L-120 -80 L-70 -110 L-70 -80 L-20 -110 L-20 -80 L30 -110 L30 -80 L120 -80 L120 0Z" fill="#ADB5BD" ${ST}/><rect x="70" y="-180" width="30" height="100" fill="#868E96" ${ST}/>
  <rect x="-96" y="-56" width="28" height="28" rx="4" fill="#FFD60A" stroke="${O}" stroke-width="4"/><rect x="-46" y="-56" width="28" height="28" rx="4" fill="#FFD60A" stroke="${O}" stroke-width="4"/><rect x="4" y="-56" width="28" height="28" rx="4" fill="#FFD60A" stroke="${O}" stroke-width="4"/>
  ${dirty ? `<circle cx="96" cy="-206" r="22" fill="#495057"/><circle cx="126" cy="-232" r="28" fill="#495057"/><circle cx="166" cy="-250" r="22" fill="#495057"/>` : ''}`);
// đồng hồ đeo tay bằng bìa: tâm (x,y)
const watch = (x, y, s = 1, c = '#FF006E') => G(x, y, s, `<rect x="-30" y="-140" width="60" height="280" rx="18" fill="${c}" ${ST}/>${[-110, -84, 84, 110].map(t => `<circle cx="0" cy="${t}" r="6" fill="#fff"/>`).join('')}
  <circle r="62" fill="#FFD60A" ${ST}/><circle r="48" fill="#fff" stroke="${O}" stroke-width="4"/>${[0, 90, 180, 270].map(a => `<line x1="0" y1="-40" x2="0" y2="-32" stroke="${O}" stroke-width="5" transform="rotate(${a})"/>`).join('')}
  <line x1="0" y1="0" x2="0" y2="-30" stroke="${O}" stroke-width="6" stroke-linecap="round"/><line x1="0" y1="0" x2="22" y2="8" stroke="#E5383B" stroke-width="6" stroke-linecap="round"/><circle r="5" fill="${O}"/>`);
// quả táo, củ cà rốt, cây kem, khối đá
const apple = (x, y, s = 1) => G(x, y, s, `<path d="M0 -24 Q-30 -40 -36 -6 Q-38 30 -10 34 Q0 30 10 34 Q38 30 36 -6 Q30 -40 0 -24Z" fill="#E5383B" ${ST}/><path d="M0 -24 L4 -42" stroke="${O}" stroke-width="5" stroke-linecap="round"/><path d="M4 -38 Q20 -50 26 -36 Q12 -30 4 -38Z" fill="#2DA44E" stroke="${O}" stroke-width="3"/>`);
const carrot = (x, y, s = 1) => G(x, y, s, `<path d="M-14 -30 L14 -30 L0 46Z" fill="#FF7F11" ${ST}/><path d="M-6 -30 L-14 -56 M0 -30 L0 -60 M6 -30 L14 -56" stroke="#2DA44E" stroke-width="7" stroke-linecap="round"/>`);
const icecream = (x, y, s = 1) => G(x, y, s, `<path d="M-24 0 L24 0 L0 60Z" fill="#E9C46A" ${ST}/><circle cx="0" cy="-14" r="26" fill="#FF8FAB" ${ST}/><circle cx="-8" cy="-22" r="5" fill="#fff"/>`);
const cube = (x, y, s = 1) => G(x, y, s, `<path d="M-26 -10 L0 -24 L26 -10 L26 20 L0 34 L-26 20Z" fill="#D0EBFF" ${ST}/><path d="M-26 -10 L0 4 L26 -10 M0 4 L0 34" fill="none" stroke="${O}" stroke-width="4"/>`);
const milk = (x, y, s = 1) => G(x, y, s, `<path d="M-22 -30 L0 -50 L22 -30 L22 40 L-22 40Z" fill="#fff" ${ST}/><rect x="-22" y="0" width="44" height="22" fill="#3A8DFF"/><path d="M-22 -30 L0 -50 L22 -30 L22 40 L-22 40Z" fill="none" ${ST}/>`);
// nhiệt kế nhỏ ghi chữ
const thermo = (x, y, s = 1, c = '#3A8DFF') => G(x, y, s, `<rect x="-12" y="-70" width="24" height="100" rx="12" fill="#fff" ${ST}/><rect x="-5" y="-20" width="10" height="50" fill="${c}"/><circle cx="0" cy="40" r="20" fill="${c}" ${ST}/>`);
// cái kéo nhỏ + lọ keo
const glue = (x, y, s = 1) => G(x, y, s, `<rect x="-24" y="-40" width="48" height="80" rx="10" fill="#fff" ${ST}/><rect x="-14" y="-62" width="28" height="24" rx="6" fill="#FF7F11" ${ST}/><rect x="-24" y="-6" width="48" height="24" fill="#8338EC"/><rect x="-24" y="-40" width="48" height="80" rx="10" fill="none" ${ST}/>`);
