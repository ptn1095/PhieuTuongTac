// THƯ VIỆN PHONG CÁCH GIAO DIỆN dùng chung cho các app bài giảng zoom (ClickLearn Tin học 6, 7, 8…)
// Mỗi phong cách = theme_<tên>.css (biến màu, phông, khung) + theme_<tên>.js (đối tượng TH: trang trí, phụ kiện Bít, giấy chứng nhận).
// Dùng trong build.js của từng app:  const PC = require('../../_phongcach/phongcach.js');  PC.css(th), PC.js(th), PC.fonts(th)
const fs = require('fs'), path = require('path');
const ORDER = ['vutru', 'daiduong', 'samac', 'chibi', 'lauda', 'tuyet', 'go', 'nghinle'];   // vòng so le mặc định
const INFO = {
  vutru: { ten: 'Vũ trụ', ic: '🚀', mau: '#3A8DFF', fonts: ['Chakra+Petch:wght@500;600;700', 'Exo+2:wght@500;600;700;800'] },
  daiduong: { ten: 'Đại dương', ic: '🐠', mau: '#14A3C7', fonts: ['Paytone+One', 'Nunito:wght@600;700;800;900'] },
  samac: { ten: 'Sa mạc', ic: '🌵', mau: '#E8762B', fonts: ['Rowdies:wght@400;700'] },
  chibi: { ten: 'Thú cưng chibi', ic: '🐱', mau: '#FF6F9F', fonts: ['Mali:wght@500;600;700'] },
  lauda: { ten: 'Lâu đài châu Âu', ic: '🏰', mau: '#7B3FA8', fonts: ['Playfair+Display:wght@700;800;900', 'Grenze+Gotisch:wght@600;700;800'] },
  tuyet: { ten: 'Tuyết mùa đông', ic: '⛄', mau: '#3D8BD9', fonts: ['Lobster', 'Nunito:wght@600;700;800;900'] },
  go: { ten: 'Gỗ tre', ic: '🌿', mau: '#5CAE2E', fonts: [] },
  nghinle: { ten: 'Nghìn lẻ một đêm', ic: '🌙', mau: '#8B2C5C', fonts: ['Playfair+Display:wght@700;800;900', 'Lora:wght@500;600;700', 'Dancing+Script:wght@700'] },
};
const rd = f => fs.readFileSync(path.join(__dirname, f), 'utf8');
const check = th => { if (!INFO[th]) throw new Error('Chưa có phong cách: ' + th + ' (có: ' + ORDER.join(', ') + ')'); };
module.exports = {
  ORDER, INFO,
  css: th => (check(th), rd(`theme_${th}.css`)),
  js: th => (check(th), rd(`theme_${th}.js`)),
  fonts: th => (check(th), 'https://fonts.googleapis.com/css2?' + [...new Set([...INFO[th].fonts, 'Baloo+2:wght@500;600;700;800', 'Inter:wght@700;800;900'])].map(x => 'family=' + x).join('&') + '&display=swap'),
  // kiểm tra hai bài liền nhau không trùng phong cách
  soLe: list => list.forEach((t, i) => { if (i && t === list[i - 1]) throw new Error(`Bài thứ ${i} và ${i + 1} trùng phong cách ${t}`); }),
};
