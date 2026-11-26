/* ===== BÀI 12: SHAPES – HÌNH KHỐI ===== */
const META = { key: 'shapes', num: 12, title: 'Nhóm lệnh Shapes', big: 'NHÓM LỆNH<br>SHAPES',
  st2: 'Đường thẳng, hình tròn, hình cầu — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng vẽ đường thẳng, hình tròn, hình cầu khổng lồ với nhóm Shapes (màu cam, mục Advanced) nhé!',
  cert: 'NHÓM LỆNH SHAPES – HÌNH KHỐI', file: 'Shapes', pass: 8 };

const ring = (r, y, m, hollow = true) => { const a = []; for (let x = -r; x <= r; x++) for (let z = -r; z <= r; z++) { const d = Math.sqrt(x*x + z*z); if (d <= r + .5 && (!hollow || d > r - .5)) a.push([x, y, z, m]); } return a; };
const ball3 = (r, m) => { const a = []; for (let x = -r; x <= r; x++) for (let y = -r; y <= r; y++) for (let z = -r; z <= r; z++) if (Math.sqrt(x*x + y*y + z*z) <= r + .3) a.push([x, y + r, z, m]); return a; };
const ILL_T = {
  t1: () => svg(`${VX([...GR(6, 2), [0, 0, 0, 'gold'], [1, 1, 0, 'gold'], [2, 2, 0, 'gold'], [3, 3, 0, 'gold']], 250, 260, 38)}
    ${ball(...PT(.5, 1.5, .5, 250, 260, 38), 16, '#FF006E', 'A', 16)}${ball(...PT(3.5, 4.5, .5, 250, 260, 38), 16, '#1982C4', 'B', 16)}
    ${pillS(330, 40, 250, 50, '#EC7505', 'line of', 28)}${pillS(330, 104, 250, 44, '#FF7F11', 'from A to B', 22)}${stars([40, 60], [560, 380, 12])}`),
  t2: () => svg(`${VX(ring(4, 0, 'blue'), 300, 175, 26)}${pillS(20, 24, 250, 50, '#EC7505', 'circle of', 28)}
    ${pillS(330, 24, 250, 50, '#FF7F11', 'radius 4', 26)}${pillS(120, 362, 360, 44, '#EC7505', 'around y (Up/Down)', 20)}`),
  t3: () => svg(`${VX(ball3(3, 'glass'), 300, 280, 30)}${pillS(20, 24, 250, 50, '#EC7505', 'sphere of', 28)}
    ${pillS(330, 24, 250, 50, '#FF7F11', 'radius 3', 26)}${stars([40, 380, 12], [560, 380, 12])}`),
  t4: () => svg(`${VX(ring(3, 0, 'red', false), 150, 170, 20)}${VX(ring(3, 0, 'red', true), 450, 170, 20)}
    ${pillS(40, 320, 220, 52, '#EC7505', 'replace', 28)}${pillS(340, 320, 220, 52, '#EC7505', 'hollow', 28)}
    ${txt(150, 60, 'Đặc', 32)}${txt(450, 60, 'Rỗng', 32)}`),
  t5: () => { const a = []; [3, 2, 1, 0].forEach((r, y) => a.push(...ring(r, y, ['lime', 'yellow', 'orange', 'red'][y], false))); return svg(`${VX([...a], 300, 230, 34)}
    ${pillS(20, 24, 560, 50, '#569138', 'for index from 0 to 3 + circle', 22)}${pillS(150, 362, 300, 44, '#FF7F11', 'Tháp tròn nhỏ dần', 20)}`); },
};

const TOPICS = [
  { id: 't1', c: ['#FF7F11', '#FF006E'], dk: '#C2185B', title: 'Đường thẳng: line of',
    tip: 'Đường thẳng đi chéo được cả lên trời – xây cầu vồng thử xem!',
    html: `<div class="blocks">${M('sh', `line of ${PK('gold')}<br>from ${P3('~', 0, 0, 0)}<br>to ${P3('~', 3, 3, 0)}`)}</div><ul>
      <li>Nhóm <span class="k">Shapes</span> (Hình khối) màu <b style="color:#EC7505">cam</b>, trong mục <b>Advanced</b>.</li>
      <li><b>line of</b>: vẽ <span class="k">đường thẳng</span> bằng khối từ điểm <b>from</b> tới <b>to</b>.</li>
      <li>Đường có thể <b>đi chéo</b>, kể cả đi lên cao.</li></ul>`,
    quiz: [
      { q: 'Lệnh line of cần hai vị trí nào?', o: ['center và radius', 'from và to', 'into và mask', 'x và y'], a: 1, why: 'line of vẽ từ điểm from tới điểm to.' },
      { q: 'Nhóm lệnh Shapes có màu gì?', o: ['Xanh dương', 'Tím', 'Xanh lá', 'Cam'], a: 3, why: 'Nhóm Shapes có màu cam.' } ] },
  { id: 't2', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Hình tròn: circle of',
    tip: 'around y thì hình tròn nằm phẳng như cái đĩa trên mặt đất!',
    html: `<div class="blocks">${M('sh', `circle of ${PK('blue')}<br>center ${P3('~', 0, 0, 0)}<br>radius ${n(4)}<br>around ${dd('y (Up/Down)')}<br>${dd('replace')}`)}</div><ul>
      <li><b>center</b>: <span class="k">tâm</span> • <b>radius</b>: <span class="k">bán kính</span>.</li>
      <li><b>around</b>: trục xoay – <code>y</code> nằm ngang, <code>x</code>/<code>z</code> dựng đứng.</li></ul>`,
    quiz: [
      { q: 'Trong lệnh circle of, radius là:', o: ['Tâm hình tròn', 'Loại khối', 'Bán kính hình tròn', 'Màu khối'], a: 2, why: 'radius là bán kính.' },
      { q: 'Muốn hình tròn nằm PHẲNG trên mặt đất, chọn around:', o: ['y (Up/Down)', 'x (East/West)', 'z (South/North)', 'Không chọn được'], a: 0, why: 'Xoay quanh trục y (thẳng đứng) → hình tròn nằm ngang.' } ] },
  { id: 't3', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Hình cầu: sphere of',
    tip: 'Hình cầu bằng kính bay lơ lửng = nhà mái vòm siêu đẹp!',
    html: `<div class="blocks">${M('sh', `sphere of ${PK('glass')}<br>center ${P3('~', 0, 10, 0)}<br>radius ${n(5)}<br>${dd('hollow')}`)}</div><ul>
      <li><b>sphere of</b>: xây <span class="k">quả cầu</span> bằng khối.</li>
      <li>Đặt tâm <code>~0 ~10 ~0</code> → quả cầu <b>lơ lửng</b> trên đầu.</li>
      <li>Bán kính lớn dùng <b>rất nhiều</b> khối – máy có thể chậm.</li></ul>`,
    quiz: [
      { q: 'Lệnh nào xây một quả cầu?', o: ['circle of', 'line of', 'fill with', 'sphere of'], a: 3, why: 'sphere nghĩa là hình cầu.' },
      { q: 'Quả cầu bán kính 5 thì đường kính khoảng:', o: ['5 khối', '10 khối', '25 khối', '2 khối'], a: 1, why: 'Đường kính = 2 × bán kính = 10 (thêm khối tâm là 11).' } ] },
  { id: 't4', c: ['#FFB14E', '#FF5E78'], dk: '#C2255C', title: 'Đặc, rỗng, viền',
    tip: 'hollow dùng ít khối hơn rất nhiều – máy chạy nhẹ hơn!',
    html: `<div class="blocks">${MR('sh', `${dd('replace')}`)}${MR('sh', `${dd('hollow')}`)}${MR('sh', `${dd('outline')}`)}</div><ul>
      <li><code>replace</code>: <span class="k">đặc</span> – lấp kín, thay mọi khối cũ.</li>
      <li><code>hollow</code>: <span class="k">rỗng</span> – chỉ xây vỏ, bên trong là khoảng trống.</li>
      <li><code>outline</code>: chỉ xây <span class="k">viền</span>, giữ nguyên bên trong.</li></ul>`,
    quiz: [
      { q: 'Muốn quả cầu có chỗ trống bên trong để vào ở, chọn:', o: ['replace', 'hollow', 'keep', 'normal'], a: 1, why: 'hollow xây vỏ rỗng bên trong.' },
      { q: 'Chế độ nào lấp kín toàn bộ hình?', o: ['hollow', 'outline', 'replace', 'around'], a: 2, why: 'replace lấp đặc toàn bộ hình.' } ] },
  { id: 't5', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Kết hợp với vòng lặp',
    tip: 'Mỗi vòng lên cao 1 và nhỏ đi 1 – thành cái tháp tròn!',
    html: `<div class="blocks">${MC('lo', `for ${VR('index')} from 0 to ${n(3)}<br>do`, [M('sh', `circle of ${PK('orange')}<br>center ${MR('po', `~ ${n(0)} ~ ${MR('va', 'index')} ~ ${n(0)}`, 'sd')}<br>radius ${MR('ma', `${n(3)} ${dd('-')} ${MR('va', 'index')}`)}<br>around ${dd('y (Up/Down)')}`)])}</div><ul>
      <li>Mỗi vòng: <b>lên cao 1</b> và <b>bán kính nhỏ đi 1</b> → <span class="k">tháp tròn</span>.</li></ul>`,
    quiz: [
      { q: 'Ở vòng có index = 2, bán kính (3 − index) bằng:', o: ['3', '2', '5', '1'], a: 3, why: '3 − 2 = 1.' },
      { q: 'Chương trình mẫu xây được bao nhiêu tầng hình tròn?', o: ['4', '3', '2', '1'], a: 0, why: 'index = 0, 1, 2, 3 → 4 tầng.' } ] },
];

const KEY = ['<b>line of</b><br>from → to', '<b>circle of</b><br>center • radius • around', '<b>sphere of</b><br>quả cầu bằng khối',
  '<b>replace</b> đặc<br><b>hollow</b> rỗng • <b>outline</b> viền', 'Vòng lặp + hình<br>= <b>tháp tròn</b>'];
