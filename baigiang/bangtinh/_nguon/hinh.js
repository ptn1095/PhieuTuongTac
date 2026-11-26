// ===== Hình vẽ dùng chung cho chuỗi Bảng tính THCS =====
const PAL = [['#FFA62B', '#FF5DA2', '#D9480F'], ['#3A8DFF', '#00C2D1', '#1864AB'], ['#7AD86F', '#14A0A0', '#0B7A6E'], ['#FFB14E', '#FF5E78', '#C2255C'],
  ['#4F7CFF', '#B06BFF', '#5F3DC4'], ['#22C493', '#1E9BD7', '#0B7285'], ['#FF7F11', '#FF006E', '#C2185B'], ['#B65CFF', '#5A189A', '#4A148C'],
  ['#2EC4B6', '#1982C4', '#145DA0'], ['#FF595E', '#FFB14E', '#C92A2A']];
const T = (x, y, t, fs = 24, c = O, a = 'middle', w = 900) => `<text x="${x}" y="${y}" text-anchor="${a}" font-size="${fs}" fill="${c}" font-family="Inter,sans-serif" font-weight="${w}">${t}</text>`;
// Lưới trang tính mini: data là mảng 2 chiều chuỗi; o.cw rộng cột, o.rh cao hàng, o.c0 cột bắt đầu (0=A), o.r0 hàng bắt đầu,
// o.fill {'r-c': màu}, o.tc {'r-c': màu chữ}, o.sel [r,c] ô chọn, o.box [r1,c1,r2,c2] khối chọn, o.head false = không vẽ tên cột/hàng
function grid(x, y, data, o = {}) {
  const cw = o.cw || 100, rh = o.rh || 44, fs = o.fs || 22, c0 = o.c0 || 0, r0 = o.r0 || 1, hd = o.head !== false;
  const hw = hd ? 44 : 0, hh = hd ? 34 : 0, nc = data[0].length, nr = data.length, W = hw + nc*cw, H = hh + nr*rh;
  const cws = o.cws || Array(nc).fill(cw), cx = [x + hw]; cws.forEach((w, i) => cx.push(cx[i] + w));
  const WW = cx[nc] - x;
  let g = `<rect x="${x}" y="${y}" width="${WW}" height="${H}" fill="#fff"/>`;
  if (hd) {
    g += `<rect x="${x}" y="${y}" width="${WW}" height="${hh}" fill="#E9ECEF"/><rect x="${x}" y="${y}" width="${hw}" height="${H}" fill="#E9ECEF"/>`;
    for (let i = 0; i < nc; i++) g += T((cx[i] + cx[i+1])/2, y + hh - 9, String.fromCharCode(65 + c0 + i), 20, '#495057');
    for (let r = 0; r < nr; r++) g += T(x + hw/2, y + hh + r*rh + rh/2 + 7, r0 + r, 20, '#495057');
  }
  for (const k in (o.fill || {})) { const [r, c] = k.split('-').map(Number); g += `<rect x="${cx[c]}" y="${y + hh + r*rh}" width="${cws[c]}" height="${rh}" fill="${o.fill[k]}"/>`; }
  for (let i = 0; i <= nc; i++) g += `<line x1="${cx[i]}" y1="${y}" x2="${cx[i]}" y2="${y + H}" stroke="#CED4DA" stroke-width="2"/>`;
  for (let r = 0; r <= nr; r++) g += `<line x1="${x}" y1="${y + hh + r*rh}" x2="${x + WW}" y2="${y + hh + r*rh}" stroke="#CED4DA" stroke-width="2"/>`;
  data.forEach((row, r) => row.forEach((v, c) => {
    if (v === '' || v == null) return;
    v = String(v); const num = /^-?[\d.,]+%?$/.test(v) || /^#/.test(v), col = (o.tc || {})[r + '-' + c] || (v[0] === '=' ? '#8338EC' : O);
    g += T(num ? cx[c+1] - 10 : cx[c] + 10, y + hh + r*rh + rh/2 + fs*.36, v.replace(/</g, '&lt;').replace(/>/g, '&gt;'), fs, col, num ? 'end' : 'start', (o.bold || []).includes(r) ? 900 : 700);
  }));
  if (o.box) { const [r1, c1, r2, c2] = o.box; g += `<rect x="${cx[c1]}" y="${y + hh + r1*rh}" width="${cx[c2+1] - cx[c1]}" height="${(r2 - r1 + 1)*rh}" fill="#4F7CFF" opacity=".16"/><rect x="${cx[c1]}" y="${y + hh + r1*rh}" width="${cx[c2+1] - cx[c1]}" height="${(r2 - r1 + 1)*rh}" fill="none" stroke="#1982C4" stroke-width="5"/>`; }
  if (o.sel) { const [r, c] = o.sel; g += `<rect x="${cx[c]}" y="${y + hh + r*rh}" width="${cws[c]}" height="${rh}" fill="none" stroke="#FF006E" stroke-width="6"/>`; if (o.handle) g += `<rect x="${cx[c+1] - 8}" y="${y + hh + (r+1)*rh - 8}" width="16" height="16" fill="#FF006E" stroke="#fff" stroke-width="3"/>`; }
  g += `<rect x="${x}" y="${y}" width="${WW}" height="${H}" rx="6" fill="none" stroke="${O}" stroke-width="5"/>`;
  return g;
}
// Thanh công thức: hộp tên + fx + nội dung
const fbar = (x, y, w, name, txt, fs = 26) => `<rect x="${x}" y="${y}" width="96" height="48" rx="12" fill="#FFE066" stroke="${O}" stroke-width="4"/>${T(x + 48, y + 33, name, fs, '#D62828')}
  <rect x="${x + 108}" y="${y}" width="${w - 108}" height="48" rx="12" fill="#F1F3F5" stroke="${O}" stroke-width="4"/>${T(x + 126, y + 33, 'fx', 22, '#2DA44E', 'start')}${T(x + 170, y + 34, txt.replace(/</g, '&lt;').replace(/>/g, '&gt;'), fs, '#8338EC', 'start')}`;
// Cửa sổ phần mềm
const win = (x, y, w, h, c = '#2DA44E', title = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="24" fill="#fff" stroke="${O}" stroke-width="7"/>
  <path d="M${x} ${y + 56} V${y + 24} Q${x} ${y} ${x + 24} ${y} H${x + w - 24} Q${x + w} ${y} ${x + w} ${y + 24} V${y + 56}Z" fill="${c}" stroke="${O}" stroke-width="7"/>
  <circle cx="${x + 32}" cy="${y + 28}" r="9" fill="#FF595E" stroke="${O}" stroke-width="3"/><circle cx="${x + 58}" cy="${y + 28}" r="9" fill="#FFD60A" stroke="${O}" stroke-width="3"/><circle cx="${x + 84}" cy="${y + 28}" r="9" fill="#8AC926" stroke="${O}" stroke-width="3"/>
  ${T(x + w/2 + 40, y + 38, title, 26, '#fff')}`;
// Con trỏ chuột
const cursor = (x, y, s = 1) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 0 L0 46 L11 36 L20 56 L30 51 L21 32 L36 32Z" fill="#fff" stroke="${O}" stroke-width="4" stroke-linejoin="round"/>`;
// Mũi tên cong / thẳng
const arrow = (x1, y1, x2, y2, c = '#FF006E', w = 8) => { const a = Math.atan2(y2 - y1, x2 - x1)*180/Math.PI; return `<line x1="${x1}" y1="${y1}" x2="${x2 - 18*Math.cos(a*Math.PI/180)}" y2="${y2 - 18*Math.sin(a*Math.PI/180)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>${arrowHead(x2, y2, a, c)}`; };
const curve = (x1, y1, cx, cy, x2, y2, c = '#FF006E', w = 8) => { const a = Math.atan2(y2 - cy, x2 - cx)*180/Math.PI; return `<path d="M${x1} ${y1} Q${cx} ${cy} ${x2 - 14*Math.cos(a*Math.PI/180)} ${y2 - 14*Math.sin(a*Math.PI/180)}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>${arrowHead(x2, y2, a, c)}`; };
// Bong bóng chữ
const bubble = (x, y, w, h, c, t, fs = 26, tc = '#fff') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="${c}" stroke="${O}" stroke-width="5"/>${T(x + w/2, y + h/2 + fs*.36, t, fs, tc)}`;
const stars3 = (a, b, c) => star(a[0], a[1], 16, '#FFD60A') + star(b[0], b[1], 13, '#FF006E') + star(c[0], c[1], 11, '#8338EC');
