/* ===== BÀI 2: SỬ DỤNG ĐÈN HỌC ===== */
const META = { key: 'bai2', num: 2, title: 'Bài 2. Sử dụng đèn học', big: 'SỬ DỤNG<br>ĐÈN HỌC',
  st2: 'Công nghệ 3 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Hôm nay mình cùng tìm hiểu chiếc đèn học nhé!',
  cert: 'CÔNG NGHỆ 3 – BÀI 2: SỬ DỤNG ĐÈN HỌC', file: 'Bai2', pass: 8 };

const ILL_T = {
  t1: () => svg(`<rect x="0" y="352" width="600" height="68" fill="#C68B59"/><line x1="0" y1="352" x2="600" y2="352" stroke="${O}" stroke-width="6"/>
    ${lamp(170, 342, .95)}${book(380, 318, .8)}${pillS(330, 40, 240, 46, '#8338EC', 'Sáng rõ – học tốt', 22)}
    ${star(60, 60, 16, '#FFD60A')}${star(560, 150, 14, '#FF006E')}`),
  t2: () => svg(`${lamp(220, 350, .95)}
    ${lab(352, 150, 430, 50, 150, '#8338EC', 'Chụp đèn')}${lab(362, 214, 444, 210, 146, '#FF7F11', 'Bóng đèn')}
    ${lab(196, 252, 20, 176, 150, '#1982C4', 'Thân đèn')}${lab(266, 330, 420, 316, 160, '#2DA44E', 'Công tắc')}
    ${lab(170, 356, 16, 330, 140, '#FF006E', 'Đế đèn')}`),
  t3: () => svg(`${lamp(150, 340, .75)}
    ${ball(370, 82, 24, '#FF006E', '1', 24)}${pillS(400, 60, 186, 44, '#FF006E', 'Đặt chắc chắn', 20)}
    ${ball(370, 162, 24, '#1982C4', '2', 24)}${pillS(400, 140, 186, 44, '#1982C4', 'Bật công tắc', 20)}
    ${ball(370, 242, 24, '#2DA44E', '3', 24)}${pillS(400, 220, 186, 44, '#2DA44E', 'Chỉnh ánh sáng', 20)}
    ${ball(370, 322, 24, '#FF7F11', '4', 24)}${pillS(400, 300, 186, 44, '#FF7F11', 'Học xong tắt', 20)}`),
  t4: () => svg(`${lamp(140, 350, .7)}${hand(330, 250, 1, 180)}${cross(340, 170, .9)}
    ${pillS(300, 40, 280, 46, '#E5383B', 'Bóng đèn rất NÓNG!', 22)}${pillS(300, 320, 280, 46, '#1982C4', 'Không chạm tay vào', 22)}
    ${star(40, 50, 14, '#FFD60A')}`),
  t5: () => svg(`<rect x="0" y="330" width="600" height="90" fill="#C68B59"/><line x1="0" y1="330" x2="600" y2="330" stroke="${O}" stroke-width="6"/>
    ${lamp(110, 320, .62)}${book(360, 296, .9)}
    ${pillS(30, 30, 210, 44, '#FF006E', 'Đèn bên trái', 22)}${pillS(330, 190, 230, 44, '#2DA44E', 'Sách sáng rõ', 22)}
    ${star(560, 60, 16, '#FFD60A')}${star(300, 60, 12, '#8338EC')}`),
};

const TOPICS = [
  { id: 't1', name: 'Đèn học nhà em', tip: 'Kể cho bạn nghe về chiếc đèn học của em nhé!',
    html: S4('Kể về chiếc đèn học ở nhà em.',
      'Đèn có màu gì? Hình dáng ra sao? Đặt ở đâu?',
      'Giới thiệu với bạn bên cạnh.',
      'Đèn học cho <span class="k">ánh sáng</span> giúp em học bài.'),
    quiz: [
      { q: 'Đèn học dùng để làm gì?', o: ['Làm mát căn phòng', 'Cung cấp ánh sáng khi học', 'Nấu chín thức ăn', 'Phát ra bản nhạc'], a: 1, why: 'Đèn học cung cấp ánh sáng giúp em học, đọc, viết.' },
      { q: 'Khi nào em cần bật đèn học?', o: ['Ra sân chơi', 'Lúc đi ngủ', 'Khi ngồi học thiếu ánh sáng', 'Lúc đang ăn cơm'], a: 2, why: 'Bật đèn khi ngồi học mà chỗ học chưa đủ sáng.' } ] },
  { id: 't2', name: 'Các bộ phận của đèn học', tip: 'Chỉ vào từng bộ phận và đọc to tên của nó nhé!',
    html: S4('Quan sát đèn học, tìm tên các bộ phận.',
      '<span class="k">Đế đèn</span>, <span class="k">thân đèn</span>, <span class="k">chụp đèn</span>, <span class="k">bóng đèn</span>, <span class="k">công tắc</span>.',
      'Chỉ vào từng bộ phận và nói tên cho bạn nghe.',
      'Bóng đèn <b>phát sáng</b>; công tắc để <b>bật, tắt</b>.'),
    quiz: [
      { q: 'Bộ phận nào của đèn học phát ra ánh sáng?', o: ['Đế đèn', 'Thân đèn', 'Dây điện', 'Bóng đèn'], a: 3, why: 'Bóng đèn là bộ phận phát ra ánh sáng.' },
      { q: 'Muốn bật hoặc tắt đèn, em dùng bộ phận nào?', o: ['Công tắc', 'Chụp đèn', 'Đế đèn', 'Thân đèn'], a: 0, why: 'Công tắc dùng để bật và tắt đèn.' } ] },
  { id: 't3', name: 'Bật đèn đúng cách', tip: 'Nhớ 4 bước: Đặt – Bật – Chỉnh – Tắt!',
    html: S4('Thực hành bật, chỉnh và tắt đèn học.',
      '<b>Đặt</b> đèn chắc chắn → <b>bật</b> công tắc → <b>chỉnh</b> ánh sáng vào chỗ học.',
      'Làm mẫu cho bạn xem, bạn nhận xét.',
      'Học xong nhớ <span class="k">tắt đèn</span> để tiết kiệm điện.'),
    quiz: [
      { q: 'Bạn viết bằng tay phải nên đặt đèn ở:', o: ['Phía bên trái', 'Bên tay phải', 'Sau lưng', 'Dưới gầm bàn'], a: 0, why: 'Đặt bên trái để bóng của tay không che chỗ viết.' },
      { q: 'Học bài xong, em cần:', o: ['Để đèn sáng cả đêm', 'Sờ tay vào bóng đèn', 'Xoay đèn vào mắt bạn', 'Tắt đèn cho tiết kiệm'], a: 3, why: 'Tắt đèn khi không dùng giúp tiết kiệm điện.' } ] },
  { id: 't4', name: 'Dùng đèn an toàn', tip: 'Bóng đèn đang sáng rất nóng – đừng chạm vào nhé!',
    html: S4('Xem tranh: bạn nào dùng đèn chưa an toàn?',
      'Không <b>chạm vào bóng</b> đang sáng; không để đèn <b>chiếu vào mắt</b>.',
      'Nhắc nhau: không cắm điện khi <b>tay ướt</b>, không để đèn ở <b>mép bàn</b>.',
      'Đèn hỏng, dây hở → <span class="k">báo người lớn</span>.'),
    quiz: [
      { q: 'Vì sao không chạm tay vào bóng đèn đang sáng?', o: ['Bóng đèn sẽ tắt', 'Bóng rất nóng, dễ bị bỏng', 'Tay sẽ bẩn', 'Đèn sáng hơn'], a: 1, why: 'Bóng đèn đang sáng rất nóng, chạm vào dễ bị bỏng.' },
      { q: 'Thấy dây điện của đèn bị hở, em nên:', o: ['Lấy tay sờ thử', 'Vẫn dùng bình thường', 'Báo ngay cho người lớn', 'Lấy kéo cắt dây'], a: 2, why: 'Dây hở dễ gây điện giật – phải báo người lớn sửa.' } ] },
  { id: 't5', name: 'Góc học tập sáng', tip: 'Thiết kế góc học tập vừa sáng vừa an toàn nào!',
    html: S4('Sắp xếp góc học tập có đèn học hợp lí.',
      'Đèn <b>bên trái</b>, đặt chắc chắn, ánh sáng chiếu vào <b>trang sách</b>.',
      'Kể cách em dùng đèn học ở nhà.',
      'Dùng đèn <span class="k">đúng – an toàn – tiết kiệm</span>.'),
    quiz: [
      { q: 'Đâu KHÔNG phải bộ phận của đèn học?', o: ['Chụp đèn', 'Công tắc', 'Cánh quạt', 'Đế đèn'], a: 2, why: 'Cánh quạt là bộ phận của quạt điện.' },
      { q: 'Ánh sáng đèn chiếu thẳng vào mắt sẽ:', o: ['Làm mắt khoẻ hơn', 'Làm chói, mỏi mắt', 'Giúp ngủ ngon', 'Không sao cả'], a: 1, why: 'Ánh sáng chiếu thẳng vào mắt gây chói, hại mắt.' } ] },
];

const KEY = [
  'Đèn học cho <b>ánh sáng</b> khi học bài.',
  'Đế, thân, <b>chụp đèn</b>, <b>bóng đèn</b>, <b>công tắc</b>.',
  '<b>Đặt – Bật – Chỉnh – Tắt</b>. Đèn ở bên trái.',
  'Không chạm <b>bóng nóng</b>, không <b>tay ướt</b>.',
  'Dùng đèn <b>đúng, an toàn, tiết kiệm</b>.',
];
