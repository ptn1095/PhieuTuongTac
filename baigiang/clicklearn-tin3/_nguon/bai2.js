/* ===== BÀI 2: XỬ LÍ THÔNG TIN ===== */
const META = { key: 'bai2', num: 2, theme: 'mausac', ic: '🧠', cd: 1, en: 'Xử lí thông tin',
  title: 'Bài 2. Xử lí thông tin', big: 'Xử lí<br>thông tin',
  st2: 'Chủ đề 1 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Thế giới đầy màu sắc! Cùng xem bộ não và máy tính xử lí thông tin nhé!',
  cert: 'Tin học 3 – Bài 2. Xử lí thông tin', file: 'Tin3_Bai2', pass: 8 };

const COVER = () => svgC(`${eye(90, 110, .8)}${ear(90, 240, .7)}${arr(160, 170, 230, 170, O, 8)}${chip(300, 170, .8, '#8338EC', 'XỬ LÍ')}${arr(370, 170, 440, 170, O, 8)}${bulb(510, 170, .7)}
  ${star(560, 40, 14, '#FFD60A')}${star(300, 40, 12, '#FF006E')}${pillS(150, 290, 300, 50, '#FF006E', 'Vào → Xử lí → Ra', 24)}`);
const ILL_T = {
  t1: () => svg(`${pillS(30, 40, 250, 56, '#1982C4', 'Chữ: TIN HỌC', 24)}${pillS(320, 40, 250, 56, '#FF7F11', 'Số: 1 2 3', 24)}
    ${note(120, 200, '#8338EC', 1.1)}${note(170, 180, '#FF006E', .9)}${sun(450, 210, 46)}${tree(450, 260, .55)}
    ${pillS(30, 330, 250, 50, '#8338EC', 'Âm thanh', 24)}${pillS(320, 330, 250, 50, '#2DA44E', 'Hình ảnh', 24)}`),
  t2: () => svg(`${hflow([['#FF7F11', 'Nhận vào'], ['#8338EC', 'Xử lí'], ['#2DA44E', 'Đưa ra']], 60, 24)}
    ${eye(110, 230, .8)}${chip(300, 240, .7, '#8338EC', 'NÃO')}${mic(500, 240, .7)}${star(560, 380, 12, '#FFD60A')}`),
  t3: () => svg(`${desk(170, 36, .82, '')}${pillS(20, 330, 260, 50, '#FF7F11', 'Bàn phím, chuột', 22)}${pillS(320, 330, 250, 50, '#2DA44E', 'Màn hình, loa', 22)}${star(40, 40, 12, '#FF006E')}`),
  t4: () => svg(`${kbd(30, 80, .6, { A: '#FFD60A' })}${arr(170, 220, 170, 300, O, 7)}${monitor(360, 60, 180, 110, `${txt(450, 130, 'A', 60)}`)}
    ${pillS(40, 320, 260, 54, '#FF7F11', 'Gõ phím A', 24)}${pillS(330, 320, 240, 54, '#2DA44E', 'Hiện chữ A', 24)}`),
  t5: () => svg(`${vflow([['#FF7F11', 'Thông tin vào'], ['#8338EC', 'Xử lí'], ['#2DA44E', 'Thông tin ra']], 150, 40, 300, 110, 26)}
    ${star(60, 60, 14, '#FFD60A')}${star(550, 360, 12, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Các dạng thông tin', tip: 'Thông tin có thể là chữ, số, hình ảnh hay âm thanh!',
    html: S4Q(['Quan sát lớp học: kể các thông tin em <b>đọc, nhìn, nghe</b> được.', ''],
      ['Thông tin có những dạng nào?', 'Dạng <b>chữ</b>, <b>số</b>, <b>hình ảnh</b> và <b>âm thanh</b>.'],
      ['Tiếng hát của bạn là dạng thông tin gì?', 'Là thông tin dạng <b>âm thanh</b>.'],
      ['Thông tin dạng <b>chữ, số</b>.', 'Thông tin dạng <b>hình ảnh</b>.', 'Thông tin dạng <span class="k">âm thanh</span>.']),
    quiz: [
      { q: 'Bức tranh vẽ bông hoa là thông tin dạng:', o: ['Âm thanh', 'Chữ', 'Hình ảnh', 'Số'], a: 2, why: 'Bức tranh nhìn thấy bằng mắt là dạng hình ảnh.' },
      { q: 'Tiếng chim hót là thông tin dạng:', o: ['Âm thanh', 'Hình ảnh', 'Chữ', 'Số'], a: 0, why: 'Em nghe tiếng chim bằng tai – đó là âm thanh.' } ] },
  { id: 't2', name: 'Con người xử lí thông tin', tip: 'Bộ não là "nhà máy" xử lí thông tin của em!',
    html: S4Q(['Cô đọc câu đố, em <b>trả lời</b>. Em đã làm những gì?', ''],
      ['Em nhận thông tin bằng gì?', 'Bằng <b>tai</b> (nghe câu đố) và <b>mắt</b>.'],
      ['Sau khi suy nghĩ, em làm gì?', 'Em <b>nói</b> câu trả lời – đưa thông tin ra.'],
      ['Giác quan <b>nhận</b> thông tin vào.', '<span class="k">Bộ não</span> xử lí thông tin.', 'Em <b>nói, viết</b> để đưa thông tin ra.']),
    quiz: [
      { q: 'Bộ phận nào xử lí thông tin trong cơ thể người?', o: ['Tai', 'Bộ não', 'Mắt', 'Miệng'], a: 1, why: 'Bộ não suy nghĩ, xử lí thông tin.' },
      { q: 'Khi em nói câu trả lời là em đang:', o: ['Nhận thông tin', 'Ngủ', 'Nghe nhạc', 'Đưa thông tin ra'], a: 3, why: 'Nói là cách đưa kết quả xử lí ra bên ngoài.' } ] },
  { id: 't3', name: 'Máy tính xử lí thông tin', tip: 'Máy tính cũng nhận – xử lí – đưa ra giống em!',
    html: S4Q(['Tìm bộ phận máy tính giống <b>tai, mắt, bộ não, miệng</b> của em.', ''],
      ['Bộ phận nào nhận thông tin vào?', '<b>Bàn phím</b>, <b>chuột</b>.'],
      ['Bộ phận nào đưa thông tin ra?', '<b>Màn hình</b> hiện chữ, hình; <b>loa</b> phát âm thanh.'],
      ['Bàn phím, chuột: <b>nhận vào</b>.', '<span class="k">Thân máy</span> xử lí thông tin.', 'Màn hình, loa: <b>đưa ra</b>.']),
    quiz: [
      { q: 'Bộ phận nào giúp máy tính nhận thông tin vào?', o: ['Loa', 'Màn hình', 'Bàn phím', 'Máy in'], a: 2, why: 'Em gõ bàn phím để đưa thông tin vào máy tính.' },
      { q: 'Màn hình máy tính dùng để:', o: ['Hiển thị thông tin ra', 'Gõ chữ', 'Nghe âm thanh', 'Di chuyển con trỏ'], a: 0, why: 'Màn hình hiện kết quả cho em xem.' } ] },
  { id: 't4', name: 'Thử xử lí với máy tính', tip: 'Gõ một phím – xem máy tính trả lời ngay!',
    html: S4Q(['Mở phần mềm soạn thảo, gõ phím <b>A</b>. Em thấy gì?', 'Gợi ý: nhìn lên màn hình.'],
      ['Thông tin vào ở đây là gì?', 'Là phím <b>A</b> em vừa gõ.'],
      ['Kết quả xử lí hiện ở đâu?', 'Chữ <b>A</b> hiện trên <b>màn hình</b>.'],
      ['Em gõ phím: <b>thông tin vào</b>.', 'Máy tính <span class="k">xử lí</span> rất nhanh.', 'Màn hình hiện <b>kết quả</b>.']),
    quiz: [
      { q: 'Em gõ chữ B, màn hình hiện chữ B. Chữ B hiện trên màn hình là:', o: ['Thông tin vào', 'Bàn phím', 'Thông tin ra', 'Con chuột'], a: 2, why: 'Chữ hiện trên màn hình là kết quả – thông tin ra.' },
      { q: 'Loa máy tính đưa ra thông tin dạng:', o: ['Hình ảnh', 'Âm thanh', 'Chữ', 'Số'], a: 1, why: 'Loa phát ra âm thanh.' } ] },
  { id: 't5', name: 'Vào – xử lí – ra', tip: 'Ba bước thần kì: vào, xử lí, ra!',
    html: S4Q(['Nói lại <b>3 bước</b> xử lí thông tin.', ''],
      ['Người và máy tính giống nhau ở đâu?', 'Đều <b>nhận</b>, <b>xử lí</b> và <b>đưa ra</b> thông tin.'],
      ['Máy tính giúp gì cho em?', 'Xử lí thông tin <b>nhanh, chính xác</b>.'],
      ['Bước 1: <b>nhận thông tin vào</b>.', 'Bước 2: <span class="k">xử lí</span>.', 'Bước 3: <b>đưa thông tin ra</b>.']),
    quiz: [
      { q: 'Thứ tự đúng của xử lí thông tin là:', o: ['Ra – xử lí – vào', 'Xử lí – vào – ra', 'Vào – ra – xử lí', 'Vào – xử lí – ra'], a: 3, why: 'Nhận vào trước, xử lí, rồi đưa kết quả ra.' },
      { q: 'Thông tin có các dạng nào?', o: ['Chữ, số, hình ảnh, âm thanh', 'Chỉ có chữ', 'Chỉ có hình ảnh', 'Chỉ có số'], a: 0, why: 'Thông tin có nhiều dạng: chữ, số, hình ảnh, âm thanh.' } ] },
];

const KEY = [
  'Chữ, số, <b>hình ảnh</b>,<br><b>âm thanh</b>.',
  '<b>Bộ não</b> xử lí<br>thông tin.',
  'Phím, chuột: vào<br>Màn hình, loa: <b>ra</b>.',
  'Gõ phím → <b>hiện chữ</b>.',
  'Vào → <b>xử lí</b> → ra.',
];
