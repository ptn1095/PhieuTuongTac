/* ===== Khối lệnh MakeCode (mô phỏng bằng HTML, giữ màu & chữ tiếng Anh gốc) ===== */
// cat: pl bl mo ag ga po lo lg va ma bu sh
const RW = s => s.includes('<br>') ? s.split('<br>').map(r => `<span class="row">${r}</span>`).join('') : s;
const ML = s => s.includes('<br>') ? 'ml' : '';
const M = (cat, s, cls = '') => `<span class="mb ${cat} ${cls} ${ML(s)}">${RW(s)}</span>`;          // khối lệnh
const MR = (cat, s, cls = '') => `<span class="mb rp ${cat} ${cls} ${ML(s)}">${RW(s)}</span>`;       // khối giá trị (tròn)
const MH = (cat, s, cls = '') => `<span class="mb hx ${cat} ${cls}">${s}</span>`;       // khối đúng/sai (lục giác)
const STK = (...b) => `<div class="stk">${b.join('')}</div>`;
// khối chữ C: sự kiện (hat = true) hoặc vòng lặp/điều kiện
const MC = (cat, head, body, hat = false) => `<div class="mc ${cat}"><span class="mb ${cat} top ${hat ? 'hat' : ''} ${ML(head)}">${RW(head)}</span><div class="mid"><div class="arm"></div>${STK(...(body || []))}</div><span class="mb ${cat} bot ${hat ? 'cap' : ''}"></span></div>`;
const MIF = (cond, a, b) => `<div class="mc lg"><span class="mb lg top">if ${cond} then</span><div class="mid"><div class="arm"></div>${STK(...a)}</div><span class="mb lg mid2">else</span><div class="mid"><div class="arm"></div>${STK(...b)}</div><span class="mb lg bot"></span></div>`;
const n = v => `<span class="n">${v}</span>`;
const s = v => `<span class="s">${v}</span>`;
const dd = v => `<span class="dd">${v}</span>`;
const P3 = (a = '~', x = 0, y = 0, z = 0) => MR('po', a === 'world' ? `world ${n(x)} ${n(y)} ${n(z)}` : `${a} ${n(x)} ${a} ${n(y)} ${a} ${n(z)}`, 'sd');
const SEL = (t = 'nearest player (@p)') => MR('mo', `${t} ▾`, 'sd');
const VR = v => MR('va', `${v} ▾`, 'sd');
const TRUE = (v = 'true') => MH('lg', `${v} ▾`, 'sd');

/* ---- hình khối lập phương nhìn nghiêng (isometric) ---- */
const MAT = { grass: ['#7ABB55', '#9B6B3D'], dirt: ['#A9774A', '#9B6B3D'], stone: ['#B4BAC0', '#9AA0A6'], cobble: ['#A3A8AD', '#868C92'],
  plank: ['#E0A964', '#C8924F'], log: ['#C8924F', '#7A5230'], gold: ['#FFE45C', '#F2C200'], diamond: ['#9BF6FA', '#3FCFD6'], tnt: ['#F2F2F2', '#E5383B'],
  glass: ['#E3F7FD', '#BDE8F5'], water: ['#6FB8EE', '#3E8FD6'], lava: ['#FFB347', '#FF7F11'], sand: ['#F7E7A6', '#EBD27E'], brick: ['#D2735C', '#B5523B'],
  snow: ['#FFFFFF', '#E3EAF0'], leaf: ['#5FB04A', '#3F8E33'], red: ['#FF5A7A', '#E5383B'], yellow: ['#FFE066', '#FFC300'], blue: ['#6FB1FF', '#1982C4'],
  purple: ['#B98CFF', '#8338EC'], pink: ['#FF8FC7', '#FF006E'], orange: ['#FFB067', '#FF7F11'], lime: ['#B6EB6A', '#8AC926'], cyan: ['#7CE7DF', '#2EC4B6'],
  white: ['#FFFFFF', '#E6E6EE'], gray: ['#9CA3AF', '#6B7280'], dark: ['#4B5563', '#374151'], skin: ['#F6C9A0', '#E0A97A'], shirt: ['#FF8A3D', '#E8590C'],
  pants: ['#5C6BC0', '#3949AB'], hair: ['#6B4226', '#4E2F1A'], robot: ['#5EDBD0', '#2EC4B6'], face: ['#1B2A49', '#1B2A49'] };
const shade = (h, k) => { const v = parseInt(h.slice(1), 16), f = c => Math.max(0, Math.min(255, Math.round(c*k))); return '#' + [v >> 16, (v >> 8) & 255, v & 255].map(c => f(c).toString(16).padStart(2, '0')).join(''); };
// Vẽ danh sách hộp [x, y, z, loại, w=1, h=1, d=1] — tự sắp xếp xa → gần
function VX(list, ox = 300, oy = 250, S = 40, o = {}) {
  const C = S*0.866, H = S*0.5, P = (x, y, z) => `${(ox + (x - z)*C).toFixed(1)},${(oy + (x + z)*H - y*S).toFixed(1)}`;
  const items = list.map(b => { const [x, y, z, m, w = 1, h = 1, d = 1] = b; return { x, y, z, m, w, h, d }; })
    .sort((a, b) => (a.x + a.w + a.z + a.d) - (b.x + b.w + b.z + b.d) || a.y - b.y);
  return items.map(({ x, y, z, m, w, h, d }) => {
    const c = MAT[m] || [m, shade(m, .8)], op = m === 'glass' ? .72 : m === 'water' ? .85 : 1, sw = o.sw ?? 2.5;
    const st = `stroke="${O}" stroke-width="${sw}" stroke-linejoin="round"`;
    let g = `<g opacity="${op}"><polygon points="${P(x, y + h, z)} ${P(x + w, y + h, z)} ${P(x + w, y + h, z + d)} ${P(x, y + h, z + d)}" fill="${c[0]}" ${st}/>`
      + `<polygon points="${P(x + w, y, z)} ${P(x + w, y + h, z)} ${P(x + w, y + h, z + d)} ${P(x + w, y, z + d)}" fill="${shade(c[1], .82)}" ${st}/>`
      + `<polygon points="${P(x, y, z + d)} ${P(x + w, y, z + d)} ${P(x + w, y + h, z + d)} ${P(x, y + h, z + d)}" fill="${c[1]}" ${st}/>`;
    if (m === 'grass') g += `<polygon points="${P(x, y + h, z + d)} ${P(x + w, y + h, z + d)} ${P(x + w, y + h - .18, z + d)} ${P(x, y + h - .18, z + d)}" fill="#7ABB55"/><polygon points="${P(x + w, y + h, z)} ${P(x + w, y + h, z + d)} ${P(x + w, y + h - .18, z + d)} ${P(x + w, y + h - .18, z)}" fill="#649C45"/>`;
    if (m === 'tnt') g += `<text x="${ox + (x + w/2 - (z + d))*C}" y="${oy + (x + w/2 + z + d)*H - (y + h/2)*S + S*.14}" text-anchor="middle" font-size="${S*.36}" fill="#fff" ${F} transform="skewY(30)" transform-origin="${ox + (x + w/2 - (z + d))*C} ${oy + (x + w/2 + z + d)*H - (y + h/2)*S}">TNT</text>`;
    return g + '</g>';
  }).join('');
}
// nền cỏ n×m ở độ cao y = -1
const GR = (n, m, mat = 'grass', x0 = 0, z0 = 0) => { const a = []; for (let x = 0; x < n; x++) for (let z = 0; z < m; z++) a.push([x0 + x, -1, z0 + z, mat]); return a; };
// nhân vật khối (người chơi) đứng tại ô (x, z), mặt hướng +x
const MAN = (x, y, z) => [[x + .3, y, z + .25, 'pants', .4, .75, .5], [x + .25, y + .75, z + .2, 'shirt', .5, .75, .6], [x + .2, y + 1.5, z + .2, 'skin', .6, .6, .6], [x + .2, y + 1.98, z + .2, 'hair', .6, .14, .6]];
// tác tử (robot nhỏ của Bít)
const BOT = (x, y, z) => [[x + .15, y, z + .15, 'gray', .7, .35, .7], [x + .1, y + .35, z + .1, 'robot', .8, .6, .8]];
// gà khối & heo khối
const HEN = (x, y, z) => [[x + .1, y, z + .2, 'white', .7, .6, .6], [x + .62, y + .45, z + .3, 'white', .36, .5, .4], [x + .98, y + .65, z + .4, 'orange', .16, .14, .2]];
const PIG = (x, y, z) => [[x + .1, y, z + .2, 'pink', .8, .55, .6], [x + .78, y + .15, z + .3, 'pink', .3, .4, .4]];
// toạ độ màn hình của điểm (x, y, z) — để đặt nhãn, mũi tên
const PT = (x, y, z, ox = 300, oy = 250, S = 40) => [ox + (x - z)*S*0.866, oy + (x + z)*S*0.5 - y*S];
// khung chat của Minecraft
const CHAT = (x, y, w, t, fs = 26) => `<rect x="${x}" y="${y}" width="${w}" height="${fs + 26}" rx="6" fill="#1B1B24" opacity=".85"/><text x="${x + 14}" y="${y + fs + 6}" font-size="${fs}" fill="#fff" font-family="Roboto Mono,monospace" font-weight="700">${t}</text>`;
// một khối lệnh nhỏ trong hình (chữ tiếng Anh, màu gốc)
const BK = (x, y, cat, t, fs = 20) => { const col = { pl: '#0078D7', bl: '#7ABB55', mo: '#764BCC', ag: '#D83B01', ga: '#8F6D40', po: '#69B090', lo: '#569138', lg: '#459197', va: '#EA2B1F', ma: '#6C6EA0', bu: '#CB48B7', sh: '#EC7505' }[cat], w = t.length*fs*.62 + 26;
  return `<rect x="${x}" y="${y}" width="${w}" height="${fs + 22}" rx="5" fill="${col}"/><text x="${x + 13}" y="${y + fs + 5}" font-size="${fs}" fill="#fff" font-family="Roboto Mono,monospace" font-weight="700">${t}</text>`; };
const stars = (...p) => p.map(([x, y, s = 14, c]) => star(x, y, s, c || ['#FFD60A', '#FF006E', '#2EC4B6', '#8338EC'][(x + y) % 4])).join('');
// biểu tượng nhỏ trong ô chọn khối (block picker)
const ICON = m => `<svg viewBox="0 0 40 40">${VX([[0, 0, 0, m]], 20, 20, 20, { sw: 1.6 })}</svg>`;
const PK = (m = 'grass') => `<span class="pk">${ICON(m)}</span>`;
const txt = (x, y, t, fs, c = O, anc = 'middle') => `<text x="${x}" y="${y}" text-anchor="${anc}" font-size="${fs}" fill="${c}" ${F}>${t}</text>`;
const arr = (x1, y1, x2, y2, c, w = 9) => { const a = Math.atan2(y2-y1, x2-x1), d = a*180/Math.PI; return `<line x1="${x1}" y1="${y1}" x2="${x2 - 14*Math.cos(a)}" y2="${y2 - 14*Math.sin(a)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>${arrowHead(x2 + 8*Math.cos(a), y2 + 8*Math.sin(a), d, c)}`; };
const arc = (cx, cy, r, a1, a2, sw, c) => { const p = a => [cx + r*Math.cos(a*Math.PI/180), cy + r*Math.sin(a*Math.PI/180)]; const [x1, y1] = p(a1), [x2, y2] = p(a2); return `<path d="M${x1} ${y1} A${r} ${r} 0 ${Math.abs(a2 - a1) > 180 ? 1 : 0} ${sw} ${x2} ${y2}" fill="none" stroke="${c}" stroke-width="11" stroke-linecap="round"/>${arrowHead(x2, y2, sw ? a2 + 90 : a2 - 90, c)}`; };
