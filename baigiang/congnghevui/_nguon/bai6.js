/* ===== BÀI 6: AN TOÀN VỚI MÔI TRƯỜNG CÔNG NGHỆ TRONG GIA ĐÌNH ===== */
const META = { key: 'bai6', num: 6, title: 'Bài 6. An toàn với môi trường công nghệ trong gia đình', big: 'AN TOÀN<br>TRONG GIA ĐÌNH',
  st2: 'Công nghệ 3 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng học cách giữ an toàn với đồ dùng điện trong nhà nhé!',
  cert: 'CÔNG NGHỆ 3 – BÀI 6: AN TOÀN TRONG GIA ĐÌNH', file: 'Bai6', pass: 8 };

const ILL_T = {
  t1: () => svg(`${socket(130, 110, .8)}${iron(440, 130, .75)}${scissors(130, 310, .9)}${cooker(450, 330, .75)}
    ${warn(220, 70)}${warn(560, 60)}${warn(240, 270)}${warn(560, 250)}${pillS(200, 180, 200, 46, '#E5383B', 'Cẩn thận!', 24)}`),
  t2: () => svg(`${socket(140, 150, 1)}${hand(270, 150, 1, 180)}${cross(270, 70, .8)}
    <path d="M370 300 L460 300" stroke="${O}" stroke-width="18" stroke-linecap="round"/><path d="M370 300 L460 300" stroke="#1982C4" stroke-width="9" stroke-linecap="round"/>
    <path d="M500 300 L580 300" stroke="${O}" stroke-width="18" stroke-linecap="round"/><path d="M500 300 L580 300" stroke="#1982C4" stroke-width="9" stroke-linecap="round"/>
    <path d="M462 300 L498 290 M462 300 L498 310 M462 300 L498 300" stroke="#FF7F11" stroke-width="5" stroke-linecap="round"/>${bolt(480, 220, .7)}
    ${pillS(20, 330, 290, 44, '#FF006E', 'Chọc tay vào ổ điện', 20)}${pillS(380, 340, 200, 44, '#E5383B', 'Dây điện hở', 20)}`),
  t3: () => svg(`<line x1="300" y1="20" x2="300" y2="400" stroke="${O}" stroke-width="5" stroke-dasharray="12 10"/>
    ${pillS(40, 16, 220, 46, '#FF7F11', 'VẬT NÓNG', 24)}${pillS(340, 16, 220, 46, '#8338EC', 'VẬT SẮC', 24)}
    ${steam(130, 170, '#FF595E')}${iron(150, 230, .75)}${kettle(150, 340, .6)}${scissors(420, 170, .9)}${knife(400, 310, .9)}`),
  t4: () => svg(`${breaker(100, 140, 1.1)}${stick(300, 150, .8)}${phone(500, 140, 1)}
    ${ball(100, 270, 26, '#FF006E', '1', 26)}${ball(300, 270, 26, '#1982C4', '2', 26)}${ball(500, 270, 26, '#2DA44E', '3', 26)}
    ${pillS(20, 316, 160, 44, '#FF006E', 'Ngắt điện', 21)}${pillS(214, 316, 172, 44, '#1982C4', 'Dùng vật khô', 21)}${pillS(420, 316, 160, 44, '#2DA44E', 'Gọi 115', 21)}`),
  t5: () => svg(`${house(260, 220, 1)}${tick(470, 100, 1.1)}${pillS(400, 330, 186, 46, '#8338EC', 'Nhà an toàn', 22)}
    ${star(60, 60, 16, '#FFD60A')}${star(560, 220, 14, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Ai nhanh mắt?', tip: 'Tìm thật nhanh các đồ vật có thể gây nguy hiểm trong nhà!',
    html: S4('Quan sát tranh phòng khách, nhà bếp.',
      'Tìm đồ vật có thể gây <b>nguy hiểm</b>.',
      'Nói với bạn: vì sao đồ vật đó nguy hiểm?',
      'Trong nhà có <span class="k">điện, vật nóng, vật sắc</span> – phải cẩn thận!'),
    quiz: [
      { q: 'Đồ vật nào có thể gây bỏng?', o: ['Gối ôm', 'Quyển sách', 'Con gấu bông', 'Bàn là đang nóng'], a: 3, why: 'Bàn là đang dùng rất nóng, dễ gây bỏng.' },
      { q: 'Ổ cắm điện có thể gây ra nguy hiểm gì?', o: ['Bị lạnh', 'Điện giật', 'Bị ướt', 'Bị đói'], a: 1, why: 'Chạm vào ổ điện có thể bị điện giật.' } ] },
  { id: 't2', name: 'Phòng tránh điện giật', tip: 'Điện rất có ích nhưng cũng rất nguy hiểm!',
    html: S4('Tìm hiểu: khi nào có thể bị điện giật?',
      'Chọc tay, que vào <b>ổ điện</b>; chạm <b>dây điện hở</b>; cầm đồ điện khi <b>tay ướt</b>.',
      'Kể tình huống em từng thấy và cách tránh.',
      '<span class="k">Không</span> chạm ổ điện, dây hở; <b>lau khô tay</b> trước khi dùng điện.'),
    quiz: [
      { q: 'Việc làm nào có thể gây điện giật?', o: ['Lau khô tay trước khi cắm điện', 'Nhờ người lớn cắm điện', 'Cắm điện khi tay đang ướt', 'Tránh xa dây điện hở'], a: 2, why: 'Tay ướt dễ dẫn điện, rất nguy hiểm.' },
      { q: 'Thấy dây điện bị hở, em nên:', o: ['Chạm thử xem', 'Lấy kéo cắt', 'Buộc lại bằng tay', 'Tránh xa và báo người lớn'], a: 3, why: 'Không chạm vào – tránh xa và báo người lớn.' } ] },
  { id: 't3', name: 'Vật nóng, vật sắc', tip: 'Vật nóng đừng chạm, vật sắc cầm cẩn thận!',
    html: S4('Phân loại: vật <b>nóng</b> và vật <b>sắc nhọn</b> trong nhà.',
      'Vật nóng: <b>bàn là, nồi cơm, ấm siêu tốc, bếp</b>. Vật sắc: <b>dao, kéo</b>.',
      'Đóng vai: nhắc em nhỏ tránh xa.',
      'Không chạm vật đang nóng; dùng dao, kéo <span class="k">cẩn thận</span>.'),
    quiz: [
      { q: 'Đồ dùng nào KHÔNG nóng lên khi đang dùng?', o: ['Bàn là', 'Quạt điện', 'Ấm siêu tốc', 'Nồi cơm điện'], a: 1, why: 'Quạt tạo gió mát; bàn là, ấm, nồi cơm đều rất nóng.' },
      { q: 'Nồi cơm đang nấu, hơi nước bốc lên. Em nên:', o: ['Tránh xa, không chạm vào', 'Mở nắp ngửi thử', 'Đưa tay hứng hơi nước', 'Bê nồi đi chỗ khác'], a: 0, why: 'Hơi nước rất nóng, dễ gây bỏng.' } ] },
  { id: 't4', name: 'Khi gặp sự cố', tip: 'Bình tĩnh – ngắt điện – gọi người lớn!',
    html: S4('Tình huống: thấy bạn bị điện giật, em làm gì?',
      '<b>Không chạm</b> vào bạn; nhờ người lớn <b>ngắt điện</b>, dùng <b>vật khô</b> tách ra.',
      'Gọi to người lớn; gọi <b>115</b> cấp cứu, <b>114</b> báo cháy.',
      'Bình tĩnh – <span class="k">ngắt điện – gọi người lớn</span>.'),
    quiz: [
      { q: 'Thấy bạn bị điện giật, em KHÔNG được:', o: ['Gọi người lớn', 'Nhờ người lớn ngắt điện', 'Dùng tay kéo bạn ra', 'Gọi 115'], a: 2, why: 'Chạm tay vào người bị điện giật thì mình cũng bị giật.' },
      { q: 'Số điện thoại gọi cấp cứu là:', o: ['113', '114', '111', '115'], a: 3, why: '115 là cấp cứu; 114 là cứu hoả.' } ] },
  { id: 't5', name: 'Ngôi nhà an toàn', tip: 'Em là “đại sứ an toàn” của gia đình mình đó!',
    html: S4('Vẽ “Ngôi nhà an toàn” với 3 lời nhắc.',
      'Chọn lời nhắc: tránh xa ổ điện, vật nóng, vật sắc.',
      'Trưng bày, giới thiệu với cả lớp.',
      'Em biết <span class="k">phòng tránh</span> và <b>nhắc người thân</b> cùng an toàn.'),
    quiz: [
      { q: 'Số điện thoại báo cháy là:', o: ['114', '115', '113', '118'], a: 0, why: '114 là số báo cháy, cứu nạn.' },
      { q: 'Nhà có em bé, ổ cắm điện ở thấp. Nên:', o: ['Để em bé chơi gần', 'Dùng nắp che ổ cắm', 'Cắm que vào ổ', 'Không cần làm gì'], a: 1, why: 'Nắp che giúp em bé không chọc tay vào ổ điện.' } ] },
];

const KEY = [
  'Nguy hiểm: <b>điện</b>, <b>vật nóng</b>, <b>vật sắc</b>.',
  'Không chạm <b>ổ điện</b>, <b>dây hở</b>; không <b>tay ướt</b>.',
  'Tránh xa <b>vật nóng</b>; dùng <b>dao, kéo</b> cẩn thận.',
  '<b>Ngắt điện</b>, gọi người lớn. <b>115</b> cấp cứu, <b>114</b> cháy.',
  'Biết phòng tránh, <b>nhắc người thân</b>.',
];
