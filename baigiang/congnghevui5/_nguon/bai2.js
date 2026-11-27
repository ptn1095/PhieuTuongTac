/* ===== BÀI 2: NHÀ SÁNG CHẾ ===== */
const META = { key: 'bai2', num: 2, title: 'Bài 2. Nhà sáng chế', big: 'NHÀ<br>SÁNG CHẾ',
  st2: 'Công nghệ 5 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng gặp những nhà sáng chế đã làm thay đổi thế giới nhé!',
  cert: 'CÔNG NGHỆ 5 – BÀI 2: NHÀ SÁNG CHẾ', file: 'CN5_Bai2', pass: 8 };

const ILL_T = {
  t1: () => svg(`${bulb(110, 150, .9)}${smart(300, 170, .7, apps())}${car(470, 230, .8)}
    ${pillS(120, 330, 360, 46, '#8338EC', 'Ai đã làm ra chúng?', 24)}${star(560, 60, 14, '#FFD60A')}${star(40, 380, 12, '#FF006E')}`),
  t2: () => svg(`${bulb(150, 170, 1)}${gear(400, 130, 50, '#1982C4')}${gear(490, 210, 36, '#FF7F11')}
    ${pillS(30, 320, 250, 46, '#FF7F11', 'Tạo ra cái mới', 24)}${pillS(310, 320, 260, 46, '#1982C4', 'Cải tiến cái cũ', 24)}${star(300, 50, 16, '#FFD60A')}`),
  t3: () => svg(`${engine(150, 190, .7)}${pillS(30, 210, 240, 40, '#2DA44E', 'Máy hơi nước', 22)}
    ${smart(430, 110, .45)}${pillS(330, 210, 200, 40, '#8338EC', 'Điện thoại', 22)}
    ${bulb(140, 318, .4)}${pillS(30, 370, 240, 40, '#FFB703', 'Bóng đèn', 22)}
    ${car(440, 340, .5)}${pillS(330, 370, 200, 40, '#E5383B', 'Ô tô', 22)}`),
  t4: () => svg(`${kid(140, 190, 1, '#8338EC')}${bulb(300, 120, .6)}
    ${pillS(350, 40, 230, 44, '#FF7F11', 'Kiên trì', 24)}${pillS(350, 110, 230, 44, '#1982C4', 'Ham hiểu biết', 22)}${pillS(350, 180, 230, 44, '#FF006E', 'Sáng tạo', 24)}${pillS(350, 250, 230, 44, '#2DA44E', 'Không ngại khó', 22)}
    ${star(560, 380, 14, '#FFD60A')}`),
  t5: () => svg(`${sun(90, 80, 30)}${fan(300, 150, .55)}<rect x="420" y="250" width="140" height="80" rx="8" fill="#1982C4" ${ST}/><path d="M420 290 H560 M466 250 V330 M514 250 V330" stroke="#8ECAE6" stroke-width="4"/>
    ${arr(130, 110, 410, 250, '#FFB703')}${pillS(40, 350, 330, 46, '#2DA44E', 'Quạt sạc mặt trời', 24)}${star(560, 60, 14, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Ai đã làm ra?', tip: 'Mỗi đồ vật quanh em đều bắt đầu từ ý tưởng của một người!',
    html: S4Q(['Quan sát: <b>bóng đèn, điện thoại, ô tô</b>.', ''],
      ['Ai đã nghĩ ra những thứ này?', 'Các <b>nhà sáng chế</b> (VD: Edison – bóng đèn).'],
      ['Kể một đồ vật em thấy rất thông minh.', 'Robot hút bụi, đèn cảm ứng, quạt sạc…'],
      ['Mọi đồ vật đều có <b>người nghĩ ra</b>.', 'Người tạo ra sáng chế: <b>nhà sáng chế</b>.', 'Sáng chế làm <span class="k">cuộc sống tốt hơn</span>.']),
    quiz: [
      { q: 'Người tạo ra sáng chế được gọi là:', o: ['Nhà thơ', 'Ca sĩ', 'Nhà sáng chế', 'Họa sĩ'], a: 2, why: 'Người nghĩ ra và tạo ra sáng chế là nhà sáng chế.' },
      { q: 'Ai là người sáng chế ra bóng đèn sợi đốt?', o: ['Ê-đi-xơn', 'Các Ben', 'Giêm Oát', 'Gra-ham Beo'], a: 0, why: 'Tô-mát Ê-đi-xơn sáng chế bóng đèn sợi đốt (1879).' } ] },
  { id: 't2', name: 'Sáng chế là gì?', tip: 'Sáng chế có thể là đồ vật hoàn toàn mới, hoặc làm đồ cũ tốt hơn!',
    html: S4Q(['Tìm hiểu: <b>sáng chế</b> là gì, có vai trò gì?', ''],
      ['Sáng chế là gì?', 'Tạo ra sản phẩm mới hoặc cải tiến sản phẩm đã có.'],
      ['Sáng chế có vai trò gì?', 'Làm cuộc sống tiện nghi; thúc đẩy công nghệ phát triển.'],
      ['<b>Sáng chế</b>: tạo mới hoặc cải tiến.', 'Giúp cuộc sống <b>tiện nghi</b>.', 'Thúc đẩy <span class="k">công nghệ phát triển</span>.']),
    quiz: [
      { q: 'Câu nào nói ĐÚNG về sáng chế?', o: ['Không có vai trò gì', 'Chỉ cần may mắn', 'Có thể cải tiến sản phẩm cũ', 'Chỉ có ở thời xưa'], a: 2, why: 'Sáng chế có thể tạo ra cái mới hoặc cải tiến cái đã có.' },
      { q: 'Các sáng chế giúp cuộc sống con người:', o: ['Vất vả hơn', 'Tiện nghi hơn', 'Buồn hơn', 'Không thay đổi'], a: 1, why: 'Sáng chế làm cuộc sống tiện nghi và thúc đẩy công nghệ phát triển.' } ] },
  { id: 't3', name: 'Nhà sáng chế nổi tiếng', tip: 'Nhớ theo thứ tự năm: hơi nước → điện thoại → bóng đèn → ô tô!',
    html: `<table class="tb"><tr><th>Nhà sáng chế</th><th>Sáng chế</th><th>Năm</th></tr>
      <tr><td>Giêm Oát</td><td>Máy hơi nước</td><td>TK 18</td></tr>
      <tr><td>Gra-ham Beo</td><td>Điện thoại</td><td>1876</td></tr>
      <tr><td>Ê-đi-xơn</td><td>Bóng đèn sợi đốt</td><td>1879</td></tr>
      <tr><td>Các Ben</td><td>Ô tô</td><td>1886</td></tr></table>`,
    quiz: [
      { q: 'A-lếch-xan-đơ Gra-ham Beo sáng chế ra:', o: ['Ô tô', 'Bóng đèn', 'Máy hơi nước', 'Điện thoại'], a: 3, why: 'Gra-ham Beo được cấp bằng sáng chế điện thoại năm 1876.' },
      { q: 'Ô tô của Các Ben được cấp bằng sáng chế năm nào?', o: ['1879', '1876', '1866', '1886'], a: 3, why: 'Ô tô của Các Ben được cấp bằng sáng chế năm 1886.' } ] },
  { id: 't4', name: 'Phẩm chất nhà sáng chế', tip: 'Ê-đi-xơn thử rất nhiều lần mới thành công – kiên trì là chìa khoá!',
    html: S4Q(['Nhà sáng chế cần có những <b>phẩm chất</b> nào?', ''],
      ['Khi gặp thất bại, nhà sáng chế làm gì?', 'Kiên trì, nhẫn nại, không ngại khó, làm lại.'],
      ['Nhà sáng chế còn cần điều gì?', 'Ham hiểu biết khoa học, luôn sáng tạo.'],
      ['<b>Kiên trì</b>, nhẫn nại.', '<b>Ham hiểu biết</b>, sáng tạo.', 'Em cũng <span class="k">rèn được</span> phẩm chất này.']),
    quiz: [
      { q: 'Ê-đi-xơn thử rất nhiều lần mới làm ra bóng đèn. Ông rất:', o: ['Lười biếng', 'Kiên trì', 'Nóng vội', 'Ngại khó'], a: 1, why: 'Thất bại nhiều lần vẫn tiếp tục thử là đức tính kiên trì.' },
      { q: 'Phẩm chất nào KHÔNG cần ở nhà sáng chế?', o: ['Sáng tạo', 'Ham hiểu biết', 'Dễ bỏ cuộc', 'Kiên trì'], a: 2, why: 'Nhà sáng chế không bỏ cuộc khi gặp thất bại.' } ] },
  { id: 't5', name: 'Nhà sáng chế nhí', tip: 'Thử nghĩ: đồ vật nào quanh em có thể làm tốt hơn?',
    html: S4Q(['Tìm một <b>sáng chế</b> giúp ích cho cuộc sống.', 'Gợi ý: quạt sạc năng lượng mặt trời.'],
      ['Quạt năng lượng mặt trời có ích gì?', 'Không cần điện lưới, tiết kiệm điện.'],
      ['Em muốn cải tiến đồ vật nào?', 'Mỗi em tự nêu ý tưởng và lí do.'],
      ['Sáng chế <b>giúp ích</b> cuộc sống.', 'Tiết kiệm điện, <b>bảo vệ môi trường</b>.', 'Em cũng có thể <span class="k">sáng tạo</span>.']),
    quiz: [
      { q: 'Quạt sạc năng lượng mặt trời mang lại lợi ích gì?', o: ['Tiết kiệm điện, bảo vệ môi trường', 'Tốn nhiều điện hơn', 'Gây ô nhiễm', 'Chỉ dùng ban đêm'], a: 0, why: 'Quạt dùng năng lượng mặt trời nên tiết kiệm điện, sạch cho môi trường.' },
      { q: 'Sáng chế nào ra đời sớm nhất?', o: ['Ô tô', 'Bóng đèn sợi đốt', 'Điện thoại', 'Máy hơi nước'], a: 3, why: 'Máy hơi nước của Giêm Oát ra đời từ thế kỉ 18, sớm nhất.' } ] },
];

const KEY = [
  'Người tạo ra sáng chế<br>là <b>nhà sáng chế</b>.',
  'Sáng chế: <b>tạo mới</b> hoặc <b>cải tiến</b>;<br>cuộc sống <b>tiện nghi</b> hơn.',
  'Oát – <b>hơi nước</b>, Beo – <b>điện thoại</b>,<br>Ê-đi-xơn – <b>bóng đèn</b>, Ben – <b>ô tô</b>.',
  '<b>Kiên trì</b>, ham hiểu biết,<br><b>sáng tạo</b>, không ngại khó.',
  'Sáng chế giúp <b>tiết kiệm</b>,<br>bảo vệ <b>môi trường</b>.',
];
