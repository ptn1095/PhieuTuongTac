/* ===== BÀI 2: BLOCKS – KHỐI ===== */
const META = { key: 'blocks', num: 2, title: 'Nhóm lệnh Blocks', big: 'NHÓM LỆNH<br>BLOCKS',
  st2: 'Khối — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng học cách đặt, lấp đầy và sao chép khối bằng nhóm Blocks (màu xanh lá) nhé!',
  cert: 'NHÓM LỆNH BLOCKS – KHỐI', file: 'Blocks', pass: 8 };

const ILL_T = {
  t1: () => svg(`${VX([...GR(4, 4), ...MAN(0, 0, 0), [2, 0, 2, 'gold']], 300, 170, 44)}
    ${arr(140, 120, ...PT(2.5, 1.3, 2.5, 300, 170, 44), '#FF006E', 7)}${pillS(20, 70, 230, 48, '#7ABB55', 'place', 26)}
    ${pillS(320, 356, 260, 48, '#59967A', '~2 ~0 ~2', 26)}${stars([570, 60], [40, 380, 12])}`),
  t2: () => { const a = []; for (let x = 0; x < 3; x++) for (let y = 0; y < 3; y++) for (let z = 0; z < 3; z++) a.push([x + 1, y, z + 1, 'stone']); return svg(`${VX([...GR(5, 5), ...a], 300, 150, 34)}
    ${ball(...PT(1, 0, 1, 300, 150, 34), 18, '#FF006E', 'A', 20)}${ball(...PT(4, 3, 4, 300, 150, 34), 18, '#1982C4', 'B', 20)}
    ${pillS(20, 30, 220, 48, '#7ABB55', 'fill with', 26)}${pillS(360, 360, 220, 46, '#FF7F11', 'từ A đến B', 22)}${stars([560, 40], [40, 380, 12])}`); },
  t3: () => svg(`${VX([...GR(5, 3), [0, 0, 0, 'dirt'], [1, 0, 1, 'dirt'], [3, 0, 0, 'dirt']], 150, 150, 30)}
    ${VX([...GR(5, 3, 'grass'), [0, 0, 0, 'diamond'], [1, 0, 1, 'diamond'], [3, 0, 0, 'diamond']], 450, 150, 30)}
    ${arr(250, 230, 340, 230, '#FF006E', 9)}${pillS(150, 330, 300, 52, '#7ABB55', 'replace with', 28)}
    ${txt(150, 110, 'Đất', 26, O)}${txt(450, 110, 'Kim cương', 26, O)}${stars([570, 50], [30, 50, 12])}`),
  t4: () => svg(`${VX([...GR(6, 3), [0, 0, 1, 'brick'], [0, 1, 1, 'brick'], [1, 0, 1, 'brick'], [1, 1, 1, 'red'], [4, 0, 1, 'brick'], [4, 1, 1, 'brick'], [5, 0, 1, 'brick'], [5, 1, 1, 'red']], 290, 170, 38)}
    ${arr(...PT(2, 2.4, 1.5, 290, 170, 38), ...PT(4, 2.4, 1.5, 290, 170, 38), '#1982C4', 8)}
    ${pillS(20, 28, 200, 48, '#7ABB55', 'clone', 28)}${pillS(330, 352, 250, 48, '#FF7F11', 'Bản gốc → Bản sao', 22)}${stars([570, 50], [30, 380, 12])}`),
  t5: () => svg(`${VX([...GR(4, 3), ...MAN(0, 0, 0), [2, 0, 1, 'gold'], [3, 0, 2, 'stone']], 300, 170, 44)}
    ${pillS(14, 24, 200, 46, '#7ABB55', 'on placed', 24)}${pillS(228, 24, 200, 46, '#7ABB55', 'on broken', 24)}
    <g>${txt(520, 70, '?', 64, '#FF006E')}</g>${pillS(320, 356, 260, 48, '#7ABB55', 'test for … at', 24)}${stars([40, 380, 12], [570, 160, 12])}`),
};

const TOPICS = [
  { id: 't1', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Đặt một khối: place',
    tip: 'Bấm vào hình khối trong lệnh để chọn loại khối em thích!',
    html: `<div class="blocks">${M('bl', `place ${PK('grass')} at ${P3('~', 0, 0, 0)}`)}</div><ul>
      <li>Nhóm <span class="k">Blocks</span> (Khối) có màu <b style="color:#5E9E3A">xanh lá</b>.</li>
      <li><b>place</b>: đặt <span class="k">1 khối</span> tại một vị trí.</li>
      <li>Ô hình khối: chọn <b>loại khối</b> (cỏ, đá, vàng…).</li>
      <li><code>~2 ~0 ~2</code>: đặt cách người chơi 2 khối theo x và z.</li></ul>`,
    quiz: [
      { q: 'Lệnh place dùng để làm gì?', o: ['Xoá một vùng', 'Sinh ra con gà', 'Đặt một khối tại vị trí', 'Đổi thời tiết'], a: 2, why: 'place đặt một khối tại vị trí đã chọn.' },
      { q: 'Khối lệnh nhóm Blocks có màu gì?', o: ['Xanh lá', 'Xanh dương', 'Đỏ cam', 'Hồng'], a: 0, why: 'Nhóm Blocks có màu xanh lá.' } ] },
  { id: 't2', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Lấp đầy: fill with',
    tip: 'Hai góc đối diện quyết định cả cái hộp to cỡ nào!',
    html: `<div class="blocks">${M('bl', `fill with ${PK('stone')}<br>from ${P3('~', 1, 0, 1)}<br>to ${P3('~', 3, 2, 3)}<br>${dd('replace')}`)}</div><ul>
      <li><b>fill with</b>: lấp đầy cả một <span class="k">hình hộp</span> bằng một loại khối.</li>
      <li><b>from</b> – <b>to</b>: hai <span class="k">góc đối diện</span> của hộp.</li>
      <li>Chế độ: <code>replace</code> đặc • <code>hollow</code> rỗng • <code>outline</code> vỏ • <code>destroy</code> phá • <code>keep</code> giữ.</li></ul>`,
    quiz: [
      { q: 'fill with từ ~0 ~0 ~0 đến ~2 ~0 ~2 tạo ra bao nhiêu khối?', o: ['3', '6', '4', '9'], a: 3, why: 'Mỗi cạnh gồm 3 khối (0, 1, 2) → 3 × 3 = 9 khối.' },
      { q: 'Muốn làm một căn phòng RỖNG bên trong, em chọn chế độ:', o: ['replace', 'hollow', 'keep', 'destroy'], a: 1, why: 'hollow tạo vỏ hộp và để trống bên trong.' } ] },
  { id: 't3', c: ['#FFA62B', '#FF5DA2'], dk: '#D9480F', title: 'Thay khối: replace with',
    tip: 'Biến đất thành kim cương chỉ với một lệnh – phép thuật code!',
    html: `<div class="blocks">${M('bl', `replace with ${PK('diamond')}<br>when block is ${PK('dirt')}<br>from ${P3('~', -5, -1, -5)}<br>to ${P3('~', 5, -1, 5)}`)}</div><ul>
      <li><b>replace with</b>: tìm trong vùng, khối nào là <span class="k">loại cũ</span> thì đổi thành <span class="k">loại mới</span>.</li>
      <li>Khối loại khác <b>giữ nguyên</b>.</li>
      <li>Vùng cũng được chọn bằng <b>from</b> – <b>to</b>.</li></ul>`,
    quiz: [
      { q: 'replace with (kim cương) when block is (đất): khối CỎ trong vùng sẽ:', o: ['Thành kim cương', 'Biến mất', 'Giữ nguyên là cỏ', 'Thành đất'], a: 2, why: 'Chỉ khối đất mới bị thay; khối khác giữ nguyên.' },
      { q: 'Trong lệnh replace with, ô "when block is" là:', o: ['Loại khối cũ cần tìm để thay', 'Loại khối mới', 'Vị trí người chơi', 'Số lần lặp'], a: 0, why: '"when block is" chọn loại khối cần tìm và thay.' } ] },
  { id: 't4', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Sao chép: clone',
    tip: 'Xây một lần, clone bao nhiêu lần cũng được!',
    html: `<div class="blocks">${M('bl', `clone from ${P3('~', 0, 0, 0)}<br>to ${P3('~', 1, 1, 0)}<br>into ${P3('~', 4, 0, 0)}<br>mask ${dd('replace')} mode ${dd('normal')}`)}</div><ul>
      <li><b>clone</b>: <span class="k">sao chép</span> một vùng khối sang chỗ mới.</li>
      <li><b>from – to</b>: vùng gốc • <b>into</b>: góc của bản sao.</li>
      <li>Mode <code>move</code>: chuyển hẳn sang, chỗ cũ trống.</li></ul>`,
    quiz: [
      { q: 'Trong lệnh clone, ô "into" là:', o: ['Góc vùng gốc', 'Vị trí đặt bản sao', 'Loại khối', 'Thời gian'], a: 1, why: 'into là vị trí bản sao được đặt vào.' },
      { q: 'Chọn mode move thì vùng gốc sẽ:', o: ['Vẫn còn nguyên', 'Nhân đôi', 'Đổi thành vàng', 'Trở thành trống'], a: 3, why: 'move chuyển khối sang chỗ mới, chỗ cũ thành trống.' } ] },
  { id: 't5', c: ['#22C493', '#1E9BD7'], dk: '#0B7285', title: 'Sự kiện và kiểm tra khối',
    tip: 'test for là khối lục giác: nó chỉ trả lời Đúng hoặc Sai!',
    html: `<div class="blocks">${MC('bl', `on ${PK('gold')} placed`, [], true)}${MC('bl', `on ${PK('gold')} broken`, [], true)}${MH('bl', `test for ${PK('stone')} at ${P3('~', 0, -1, 0)}`)}</div><ul>
      <li><b>on placed / broken</b>: chạy khi em <span class="k">đặt / phá</span> loại khối đó.</li>
      <li><b>test for</b>: kiểm tra vị trí có phải loại khối đó không → <b>true</b> / <b>false</b>.</li></ul>`,
    quiz: [
      { q: 'Khối on (vàng) broken chạy khi nào?', o: ['Khi em đặt khối vàng', 'Khi trời mưa', 'Khi em phá khối vàng', 'Khi gõ chat'], a: 2, why: 'broken nghĩa là bị phá.' },
      { q: 'test for (đá) at (~0 ~-1 ~0) trả về kết quả dạng:', o: ['true hoặc false', 'Một con số', 'Một vị trí', 'Một tên khối'], a: 0, why: 'test for là khối lục giác, trả về đúng (true) hoặc sai (false).' } ] },
];

const KEY = ['<b>place</b>: đặt 1 khối<br>chọn loại + vị trí', '<b>fill with</b>: lấp hộp<br>from – to<br>hollow = rỗng', '<b>replace with</b><br>đổi loại cũ → mới',
  '<b>clone</b>: sao chép<br>into = chỗ bản sao', '<b>on placed / broken</b><br><b>test for</b> → true/false'];
