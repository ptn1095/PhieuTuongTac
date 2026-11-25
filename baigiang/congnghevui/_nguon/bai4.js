/* ===== BÀI 4: SỬ DỤNG MÁY THU THANH ===== */
const META = { key: 'bai4', num: 4, title: 'Bài 4. Sử dụng máy thu thanh', big: 'SỬ DỤNG<br>MÁY THU THANH',
  st2: 'Công nghệ 3 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'A lô a lô! Cùng tìm hiểu máy thu thanh – cái đài nhé!',
  cert: 'CÔNG NGHỆ 3 – BÀI 4: SỬ DỤNG MÁY THU THANH', file: 'Bai4', pass: 8 };

const bars = (x, y) => [1, 2, 3, 4, 5].map(i => `<rect x="${x + (i - 1)*40}" y="${y - i*26}" width="30" height="${i*26}" rx="8" fill="${i <= 3 ? '#2DA44E' : '#E5383B'}" stroke="${O}" stroke-width="4"/>`).join('');
const ILL_T = {
  t1: () => svg(`${radio(150, 190, 1)}${note(90, 140, '#FF006E')}${note(520, 250, '#8338EC', 1.1)}${note(110, 330, '#1982C4', .9)}
    ${pillS(20, 24, 230, 46, '#FF7F11', 'Cái đài (radio)', 22)}${star(560, 380, 14, '#FFD60A')}`),
  t2: () => svg(`${tower(90, 210, .9)}${waves(160, 170, '#FF006E')}${radio(262, 168, .66)}${waves(480, 230, '#8338EC', 2)}${ear(555, 222, .85)}
    ${pillS(14, 30, 110, 42, '#1982C4', 'VOV', 22)}
    ${pillS(10, 340, 190, 42, '#FF006E', 'Đài phát thanh', 20)}${pillS(240, 330, 190, 42, '#FF7F11', 'Máy thu thanh', 20)}${pillS(456, 330, 130, 42, '#2DA44E', 'Em nghe', 20)}`),
  t3: () => svg(`${radio(150, 170, 1)}
    ${lab(440, 112, 476, 130, 116, '#E5383B', 'Ăng-ten', 20)}${lab(204, 262, 14, 232, 90, '#FF006E', 'Loa', 22)}
    ${lab(303, 162, 70, 80, 160, '#8338EC', 'Bật / tắt', 22)}${lab(336, 292, 170, 370, 160, '#FF7F11', 'Chọn kênh', 22)}
    ${lab(402, 292, 400, 370, 160, '#2EC4B6', 'Âm lượng', 22)}`),
  t4: () => svg(`${radio(30, 170, .8)}${waves(290, 220, '#8338EC', 2)}${bars(360, 300)}
    ${tick(420, 350, .7)}${cross(540, 350, .7)}${pillS(330, 40, 250, 44, '#2DA44E', 'Vừa đủ nghe', 22)}
    ${star(40, 60, 14, '#FFD60A')}`),
  t5: () => svg(`<g transform="translate(70 70) scale(.95)">${robot()}</g>${mic(300, 220, 1.1, 10)}
    ${pillS(380, 40, 170, 48, '#E5383B', 'ON AIR', 26)}${note(430, 190, '#FF006E')}${note(510, 250, '#1982C4')}
    ${pillS(330, 330, 250, 44, '#8338EC', 'Phát thanh viên nhí', 20)}`),
};

const TOPICS = [
  { id: 't1', name: 'Nghe đài cùng ông bà', tip: 'Nhà em có ai hay nghe đài không? Kể cho bạn nghe nhé!',
    html: S4('Kể: ông bà, bố mẹ em có hay nghe đài không?',
      'Đoán: chiếc hộp phát ra tiếng nói, tiếng nhạc là gì?',
      'Nói tên chương trình em từng được nghe.',
      'Đó là <span class="k">máy thu thanh</span> (cái đài, radio).'),
    quiz: [
      { q: 'Máy thu thanh còn được gọi là:', o: ['Ti vi', 'Máy tính', 'Cái đài (radio)', 'Điện thoại bàn'], a: 2, why: 'Máy thu thanh còn gọi là cái đài, radio.' },
      { q: 'Với máy thu thanh, em có thể:', o: ['Nghe tin tức, ca nhạc', 'Xem phim hoạt hình', 'Gọi điện video', 'Chụp ảnh'], a: 0, why: 'Máy thu thanh chỉ phát âm thanh: tin tức, ca nhạc, kể chuyện…' } ] },
  { id: 't2', name: 'Đài phát thanh', tip: 'Đài phát thanh “nói”, máy thu thanh “nghe” rồi phát ra loa!',
    html: S4('Tìm hiểu đường đi của âm thanh.',
      '<span class="k">Đài phát thanh</span> phát tín hiệu → <span class="k">máy thu thanh</span> thu lại, phát ra tiếng.',
      'Kể tên kênh: <b>VOV1</b> thời sự, <b>VOV2</b> văn hoá, <b>VOV3</b> âm nhạc, <b>VOV Giao thông</b>.',
      'Đài Tiếng nói Việt Nam: <b>VOV</b>, có nhiều <b>kênh</b>.'),
    quiz: [
      { q: 'Nơi phát tín hiệu cho máy thu thanh là:', o: ['Đài truyền hình', 'Trạm điện', 'Bưu điện', 'Đài phát thanh'], a: 3, why: 'Đài phát thanh phát tín hiệu, máy thu thanh thu lại.' },
      { q: 'Đài Tiếng nói Việt Nam viết tắt là:', o: ['VTV', 'VOV', 'HTV', 'VTC'], a: 1, why: 'VOV là Đài Tiếng nói Việt Nam; VTV là Đài Truyền hình.' } ] },
  { id: 't3', name: 'Bộ phận và cách dùng', tip: 'Bật máy – chọn kênh – chỉnh âm lượng. Dễ ợt!',
    html: S4('Quan sát máy thu thanh, tìm các bộ phận.',
      '<span class="k">Ăng-ten</span>, <span class="k">loa</span>, <span class="k">nút bật/tắt</span>, <span class="k">nút chọn kênh</span>, <span class="k">nút âm lượng</span>.',
      'Thực hành: bật máy → chọn kênh → chỉnh tiếng vừa nghe.',
      'Ăng-ten <b>thu sóng</b>; loa <b>phát ra âm thanh</b>.'),
    quiz: [
      { q: 'Bộ phận nào của máy thu thanh phát ra âm thanh?', o: ['Ăng-ten', 'Loa', 'Nút chọn kênh', 'Quai xách'], a: 1, why: 'Loa phát ra âm thanh cho em nghe.' },
      { q: 'Muốn nghe kênh khác, em dùng:', o: ['Nút âm lượng', 'Nút bật/tắt', 'Quai xách', 'Nút chọn kênh (dò đài)'], a: 3, why: 'Nút chọn kênh giúp chuyển sang kênh khác.' } ] },
  { id: 't4', name: 'Nghe đài đúng cách', tip: 'Âm lượng vừa đủ nghe – không làm phiền người khác!',
    html: S4('Xem tình huống: em bé mở đài thật to.',
      'Để âm lượng <b>vừa đủ nghe</b>; không làm ồn người khác.',
      'Nhắc nhau: dùng nhẹ nhàng, không làm rơi máy.',
      'Nghe xong <span class="k">tắt máy</span>; bị rè thì kéo ăng-ten, dò lại kênh.'),
    quiz: [
      { q: 'Ông đang ngủ, em muốn nghe đài. Em nên:', o: ['Mở thật to', 'Mở tất cả các kênh', 'Mở nhỏ hoặc đợi ông dậy', 'Đập vào máy'], a: 2, why: 'Mở nhỏ hoặc chờ để không làm phiền ông.' },
      { q: 'Đài bị rè, nghe không rõ. Em thử:', o: ['Kéo dài ăng-ten, dò lại kênh', 'Ném máy xuống đất', 'Đổ nước vào loa', 'Bấm loạn các nút'], a: 0, why: 'Kéo ăng-ten và dò lại kênh giúp thu sóng rõ hơn.' } ] },
  { id: 't5', name: 'Phát thanh viên nhí', tip: 'Xin chào các bạn! Đây là chương trình của lớp mình…',
    html: S4('Đóng vai phát thanh viên giới thiệu chương trình.',
      'Chọn chủ đề: tin tức lớp, ca nhạc hay kể chuyện.',
      'Cả lớp bình chọn bạn dẫn hay nhất.',
      'Máy thu thanh giúp em <span class="k">nghe tin tức, học hỏi, giải trí</span>.'),
    quiz: [
      { q: 'Muốn nghe tình hình giao thông, nên chọn kênh:', o: ['VOV3', 'VOV Giao thông', 'VTV3', 'VOV2'], a: 1, why: 'VOV Giao thông phát tin về tình hình giao thông.' },
      { q: 'Bộ phận giúp máy thu thanh bắt sóng tốt hơn là:', o: ['Loa', 'Nút âm lượng', 'Vỏ máy', 'Ăng-ten'], a: 3, why: 'Ăng-ten giúp thu sóng của đài phát thanh.' } ] },
];

const KEY = [
  'Máy thu thanh = <b>cái đài</b>, radio.',
  '<b>Đài phát thanh</b> phát → <b>máy thu thanh</b> thu.',
  '<b>Ăng-ten</b>, <b>loa</b>, nút bật, chọn kênh, âm lượng.',
  'Âm lượng <b>vừa đủ nghe</b>; nghe xong <b>tắt</b>.',
  'Nghe đài để <b>học hỏi, giải trí</b>.',
];
