/* ===== BÀI 15: THUẬT TOÁN ===== */
const META = { key: 'bai15', theme: 'vutru', num: 15, title: 'Bài 15. Thuật toán', big: 'Thuật toán',
  st2: 'Chủ đề 6 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Thuật toán là các bước giải quyết vấn đề – cùng khám phá nhé!',
  cert: 'Tin học 6 – Bài 15. Thuật toán', file: 'Tin6_Bai15', pass: 8 };

const shp = {
  elip: (x, y, w, h, c, t, fs = 22) => `<ellipse cx="${x}" cy="${y}" rx="${w/2}" ry="${h/2}" fill="${c}" ${ST}/>${txt(x, y + fs*.36, t, fs, '#fff')}`,
  para: (x, y, w, h, c, t, fs = 22) => `<path d="M${x - w/2 + 20} ${y - h/2} H${x + w/2 + 20} L${x + w/2 - 20} ${y + h/2} H${x - w/2 - 20}Z" fill="${c}" ${ST}/>${txt(x, y + fs*.36, t, fs, '#fff')}`,
  rect: (x, y, w, h, c, t, fs = 22) => `<rect x="${x - w/2}" y="${y - h/2}" width="${w}" height="${h}" rx="6" fill="${c}" ${ST}/>${txt(x, y + fs*.36, t, fs, '#fff')}`,
  dia: (x, y, w, h, c, t, fs = 22) => `<path d="M${x} ${y - h/2} L${x + w/2} ${y} L${x} ${y + h/2} L${x - w/2} ${y}Z" fill="${c}" ${ST}/>${txt(x, y + fs*.36, t, fs, '#fff')}`,
};
const ILL_T = {
  t1: () => svg(`${vflow([['#1982C4', '1. Đun sôi nước'], ['#FF7F11', '2. Cho mì vào bát'], ['#2DA44E', '3. Rót nước, đậy 3 phút'], ['#8338EC', '4. Thưởng thức']], 120, 26, 360, 98, 22)}`),
  t2: () => svg(`${pillS(20, 170, 160, 60, '#1982C4', 'Đầu vào', 26)}${arr(185, 200, 225, 200, O)}${gear(300, 200, 50, '#FFD60A')}${arr(375, 200, 415, 200, O)}${pillS(420, 170, 160, 60, '#2DA44E', 'Đầu ra', 26)}
    ${txt(300, 300, 'Thuật toán', 30, '#8338EC')}${txt(100, 270, 'Mì, nước', 20)}${txt(500, 270, 'Bát mì', 20)}`),
  t3: () => svg(`${paper(70, 40, 460, 340)}${['Bước 1: Nhập hai số a, b', 'Bước 2: Tính tổng S = a + b', 'Bước 3: Thông báo S', 'Bước 4: Kết thúc'].map((t, i) => txt(100, 110 + i*74, t, 26, i % 2 ? '#1982C4' : O, 'start')).join('')}`),
  t4: () => svg(`${shp.elip(130, 70, 200, 70, '#2DA44E', 'Bắt đầu')}${shp.para(130, 175, 200, 70, '#1982C4', 'Nhập/Xuất')}${shp.rect(130, 280, 200, 70, '#FF7F11', 'Xử lí')}${shp.dia(130, 375, 220, 70, '#E5383B', 'Điều kiện?', 20)}
    ${txt(270, 78, '← Bắt đầu, kết thúc', 20, O, 'start')}${txt(270, 183, '← Đầu vào, đầu ra', 20, O, 'start')}${txt(270, 288, '← Các bước xử lí', 20, O, 'start')}${txt(270, 383, '← Kiểm tra điều kiện', 20, O, 'start')}`),
  t5: () => svg(`${shp.elip(300, 45, 200, 60, '#2DA44E', 'Bắt đầu')}${arr(300, 76, 300, 108, O, 6)}${shp.para(300, 145, 240, 64, '#1982C4', 'Nhập a, b')}${arr(300, 178, 300, 210, O, 6)}
    ${shp.rect(300, 245, 220, 64, '#FF7F11', 'S = a + b')}${arr(300, 278, 300, 300, O, 6)}${shp.para(300, 330, 240, 56, '#1982C4', 'In S')}${arr(300, 358, 300, 372, O, 5)}${shp.elip(300, 395, 180, 44, '#2DA44E', 'Kết thúc', 20)}`),
};

const TOPICS = [
  { id: 't1', name: 'Các bước nấu mì', tip: 'Làm đúng thứ tự từng bước thì mì mới ngon!',
    html: S4('Viết các bước <b>pha một bát mì</b> ăn liền.',
      'Đun nước → cho mì vào bát → rót nước, đậy 3 phút → thưởng thức.',
      'Nếu đổi thứ tự các bước thì có được bát mì không?',
      'Giải quyết việc gì cũng cần <span class="k">các bước rõ ràng, đúng thứ tự</span>.'),
    quiz: [
      { q: 'Muốn pha mì thành công, các bước cần:', o: ['Làm tuỳ ý', 'Bỏ bớt bước', 'Làm ngược lại', 'Rõ ràng, đúng thứ tự'], a: 3, why: 'Các bước phải rõ ràng và theo đúng trình tự.' },
      { q: 'Bước nào nên làm đầu tiên khi pha mì?', o: ['Đun sôi nước', 'Thưởng thức', 'Đậy nắp 3 phút', 'Rửa bát'], a: 0, why: 'Cần có nước sôi trước rồi mới pha mì.' } ] },
  { id: 't2', name: 'Thuật toán là gì?', tip: 'Thuật toán = các bước để biến đầu vào thành đầu ra!',
    html: S4('Xác định <b>đầu vào</b> và <b>đầu ra</b> của việc pha mì.',
      'Đầu vào: gói mì, nước. Đầu ra: bát mì chín.',
      '<b>Thuật toán</b> là dãy các chỉ dẫn rõ ràng, có trình tự để giải quyết nhiệm vụ.',
      'Thuật toán biến <span class="k">đầu vào</span> thành <span class="k">đầu ra</span>.'),
    quiz: [
      { q: 'Thuật toán là:', o: ['Một chiếc máy tính', 'Dãy chỉ dẫn rõ ràng, có trình tự', 'Một trò chơi', 'Một phép cộng'], a: 1, why: 'Thuật toán là dãy các chỉ dẫn rõ ràng để giải quyết nhiệm vụ.' },
      { q: 'Thuật toán tính tổng hai số có đầu ra là:', o: ['Hai số', 'Bàn phím', 'Tổng hai số', 'Màn hình'], a: 2, why: 'Kết quả cần tìm (tổng) là đầu ra.' } ] },
  { id: 't3', name: 'Mô tả bằng lời', tip: 'Liệt kê Bước 1, Bước 2… là cách mô tả dễ nhất!',
    html: S4('Mô tả thuật toán <b>tính tổng hai số</b>.',
      'Bước 1: nhập a, b. Bước 2: tính <code>S = a + b</code>. Bước 3: thông báo S.',
      'Cách viết này dùng ngôn ngữ gì? (<b>ngôn ngữ tự nhiên</b>)',
      'Có thể mô tả thuật toán bằng <span class="k">liệt kê các bước</span>.'),
    quiz: [
      { q: 'Liệt kê "Bước 1, Bước 2…" là mô tả thuật toán bằng:', o: ['Ngôn ngữ tự nhiên', 'Sơ đồ khối', 'Hình vẽ', 'Âm thanh'], a: 0, why: 'Liệt kê các bước bằng lời là dùng ngôn ngữ tự nhiên.' },
      { q: 'Thuật toán tính tổng a + b có đầu vào là:', o: ['Tổng S', 'Máy in', 'Kết quả', 'Hai số a và b'], a: 3, why: 'Dữ liệu cho trước a, b là đầu vào.' } ] },
  { id: 't4', name: 'Sơ đồ khối', tip: 'Mỗi hình có một nhiệm vụ riêng – nhớ kĩ nhé!',
    html: S4('Nhận biết các <b>hình</b> trong sơ đồ khối.',
      '<b>Elip</b>: bắt đầu/kết thúc; <b>hình bình hành</b>: nhập/xuất.',
      '<b>Chữ nhật</b>: xử lí; <b>hình thoi</b>: điều kiện; <b>mũi tên</b>: hướng đi.',
      'Sơ đồ khối mô tả thuật toán <span class="k">trực quan</span>.'),
    quiz: [
      { q: 'Trong sơ đồ khối, hình thoi dùng để:', o: ['Bắt đầu', 'Nhập dữ liệu', 'Kiểm tra điều kiện', 'Kết thúc'], a: 2, why: 'Hình thoi thể hiện điều kiện cần kiểm tra.' },
      { q: 'Hình nào thể hiện "Bắt đầu" và "Kết thúc"?', o: ['Hình chữ nhật', 'Hình elip', 'Hình thoi', 'Hình bình hành'], a: 1, why: 'Hình elip dùng cho bắt đầu và kết thúc.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn nhanh: thuật toán, đầu vào – đầu ra, sơ đồ khối!',
    html: S4('Tóm tắt bài bằng 3 ý chính.',
      '<b>Thuật toán</b>: dãy chỉ dẫn rõ ràng, có trình tự.',
      'Có <b>đầu vào</b>, <b>đầu ra</b>; mô tả bằng lời hoặc <b>sơ đồ khối</b>.',
      'Mỗi hình trong sơ đồ khối có <span class="k">ý nghĩa riêng</span>.'),
    quiz: [
      { q: 'Hình chữ nhật trong sơ đồ khối dùng cho:', o: ['Các bước xử lí', 'Điều kiện', 'Bắt đầu', 'Nhập dữ liệu'], a: 0, why: 'Hình chữ nhật thể hiện bước xử lí, tính toán.' },
      { q: 'Hình bình hành trong sơ đồ khối dùng để:', o: ['Kết thúc', 'Kiểm tra điều kiện', 'Xử lí', 'Nhập hoặc xuất dữ liệu'], a: 3, why: 'Hình bình hành thể hiện đầu vào, đầu ra.' } ] },
];

const KEY = [
  'Các bước<br><b>đúng thứ tự</b>.',
  '<b>Đầu vào</b> →<br><b>đầu ra</b>.',
  'Mô tả bằng<br><b>liệt kê bước</b>.',
  '<b>Sơ đồ khối</b>:<br>elip, thoi…',
  'Thuật toán:<br><b>rõ ràng, trình tự</b>.',
];
