/* ===== BÀI 5: SỬ DỤNG ĐIỆN THOẠI ===== */
const META = { key: 'bai5', num: 5, title: 'Bài 5. Sử dụng điện thoại', big: 'SỬ DỤNG<br>ĐIỆN THOẠI',
  st2: 'Công nghệ 5 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng học cách dùng điện thoại an toàn và lịch sự nhé!',
  cert: 'CÔNG NGHỆ 5 – BÀI 5: SỬ DỤNG ĐIỆN THOẠI', file: 'CN5_Bai5', pass: 8 };

const plane = (x, y, s = 1) => G(x, y, s, `<path d="M0 -34 Q6 -34 6 -24 L6 -8 L34 8 L34 16 L6 6 L6 22 L16 30 L16 36 L0 31 L-16 36 L-16 30 L-6 22 L-6 6 L-34 16 L-34 8 L-6 -8 L-6 -24 Q-6 -34 0 -34Z" fill="#fff" stroke="${O}" stroke-width="4" stroke-linejoin="round"/>`);
const bars = (x, y, s = 1) => G(x, y, s, [0, 1, 2, 3].map(i => `<rect x="${-34 + i*18}" y="${10 - i*14}" width="12" height="${20 + i*14}" rx="3" fill="#2DA44E" stroke="${O}" stroke-width="3"/>`).join(''));
const batt = (x, y, s = 1) => G(x, y, s, `<rect x="-32" y="-16" width="60" height="32" rx="6" fill="#fff" stroke="${O}" stroke-width="4"/><rect x="28" y="-7" width="7" height="14" rx="2" fill="${O}"/><rect x="-27" y="-11" width="34" height="22" rx="3" fill="#2DA44E"/>`);

const ILL_T = {
  t1: () => svg(`${kid(120, 200, .9, '#FF7F11')}${smart(300, 180, .7, `<text x="0" y="-10" text-anchor="middle" font-size="30" fill="#1D3557" ${F}>Alô!</text>`)}${waves(350, 150, '#FF006E')}${kid(500, 200, .9, '#2DA44E')}
    ${pillS(130, 350, 340, 46, '#8338EC', 'Liên lạc, trao đổi', 24)}`),
  t2: () => svg(`${smart(150, 200, 1.4, apps())}
    ${lab(150, 62, 330, 20, 200, '#3D405B', 'Camera, loa', 22)}${lab(190, 170, 330, 100, 200, '#1982C4', 'Màn hình', 22)}${lab(150, 342, 330, 330, 200, '#FF7F11', 'Cổng sạc', 22)}
    ${plane(380, 230, .9)}${bars(470, 236, .9)}${batt(550, 236, .8)}`),
  t3: () => svg(`${smart(110, 200, .9, `<circle cx="0" cy="-10" r="26" fill="#2DA44E"/>`)}
    ${ball(250, 70, 22, '#FFD60A', 1, 22)}${pillS(280, 48, 300, 44, '#FF7F11', 'Chào, giới thiệu', 22)}
    ${ball(250, 150, 22, '#FFD60A', 2, 22)}${pillS(280, 128, 300, 44, '#1982C4', 'Nói mục đích', 22)}
    ${ball(250, 230, 22, '#FFD60A', 3, 22)}${pillS(280, 208, 300, 44, '#2DA44E', 'Ngắn gọn, lịch sự', 22)}
    ${ball(250, 310, 22, '#FFD60A', 4, 22)}${pillS(280, 288, 300, 44, '#8338EC', 'Chào tạm biệt', 22)}`),
  t4: () => svg(`${key3d(30, 60, 160, 120, '#1982C4', '#0B5D8C', '113', 56)}${key3d(220, 60, 160, 120, '#FF7F11', '#C2410C', '114', 56)}${key3d(410, 60, 160, 120, '#E5383B', '#9B1C1F', '115', 56)}
    ${pillS(30, 230, 160, 42, '#1982C4', 'Công an', 22)}${pillS(220, 230, 160, 42, '#FF7F11', 'Cứu hoả', 22)}${pillS(410, 230, 160, 42, '#E5383B', 'Cấp cứu', 22)}
    ${pillS(110, 330, 380, 46, '#8338EC', 'Nhớ số của bố mẹ!', 24)}`),
  t5: () => svg(`${smart(300, 180, .9, apps())}
    ${cross(110, 90, .9)}${pillS(20, 140, 180, 42, '#E5383B', 'Vừa sạc vừa chơi', 18)}
    ${cross(110, 260, .9)}${pillS(20, 310, 180, 42, '#E5383B', 'Gần bếp lửa', 20)}
    ${tick(490, 90, .9)}${pillS(400, 140, 180, 42, '#2DA44E', 'Tắt ứng dụng', 20)}
    ${tick(490, 260, .9)}${pillS(400, 310, 180, 42, '#2DA44E', 'Đi đường: cất', 20)}`),
};

const TOPICS = [
  { id: 't1', name: 'Alô, ai đấy?', tip: 'Điện thoại giúp mọi người ở xa vẫn nói chuyện được với nhau!',
    html: S4Q(['Kể những lần em thấy người thân <b>dùng điện thoại</b>.', ''],
      ['Điện thoại dùng để làm gì?', 'Liên lạc, nhắn tin, chụp ảnh, học tập.'],
      ['Dùng điện thoại lúc nào là hợp lí?', 'Khi cần liên lạc, học tập; không làm phiền người khác.'],
      ['Điện thoại để <b>liên lạc</b>.', 'Còn nhắn tin, <b>chụp ảnh</b>, học tập.', 'Dùng <span class="k">đúng lúc, đúng mục đích</span>.']),
    quiz: [
      { q: 'Tác dụng chính của điện thoại là:', o: ['Nấu cơm', 'Liên lạc, trao đổi thông tin', 'Làm mát', 'Chiếu sáng căn phòng'], a: 1, why: 'Điện thoại giúp con người liên lạc, trao đổi thông tin.' },
      { q: 'Vì sao em nên nhớ số điện thoại của bố mẹ?', o: ['Để khoe với bạn', 'Để chơi trò chơi', 'Để liên lạc khi khẩn cấp', 'Không cần nhớ'], a: 2, why: 'Nhớ số người thân để liên lạc khi cần thiết, khẩn cấp.' } ] },
  { id: 't2', name: 'Bộ phận và biểu tượng', tip: 'Thấy hình máy bay trên màn hình là không gọi được đâu nhé!',
    html: S4Q(['Chỉ các <b>bộ phận</b> và <b>biểu tượng</b> trên điện thoại.', ''],
      ['Điện thoại có những bộ phận nào?', 'Màn hình, loa, micro, camera, cổng sạc.'],
      ['Các biểu tượng cho biết gì?', 'Chế độ máy bay, mức sóng, pin, máy ảnh, cuộc gọi.'],
      ['<b>Bộ phận</b>: màn hình, loa, micro…', '<b>Biểu tượng</b>: sóng, pin…', 'Chế độ máy bay: <span class="k">không gọi được</span>.']),
    quiz: [
      { q: 'Điện thoại đang bật chế độ máy bay. Em có gọi điện được không?', o: ['Gọi được', 'Không gọi được', 'Chỉ gọi 2 phút', 'Gọi được ban đêm'], a: 1, why: 'Chế độ máy bay tắt sóng nên không gọi điện được.' },
      { q: 'Bộ phận nào dùng để chụp ảnh?', o: ['Cổng sạc', 'Loa', 'Micro', 'Camera'], a: 3, why: 'Camera là bộ phận chụp ảnh, quay phim.' } ] },
  { id: 't3', name: 'Gọi điện lịch sự', tip: 'Chào hỏi – nói mục đích – ngắn gọn – tạm biệt!',
    html: S4Q(['Đóng vai <b>gọi điện</b> cho ông bà.', ''],
      ['Hai bước đầu khi gọi điện là gì?', '1. Chào hỏi, giới thiệu tên. 2. Nói người cần gặp, mục đích.'],
      ['Hai bước sau là gì?', '3. Trao đổi ngắn gọn, nhẹ nhàng. 4. Chào tạm biệt.'],
      ['<b>Chào hỏi</b>, giới thiệu.', 'Nói <b>ngắn gọn</b>, nhẹ nhàng.', 'Gọi điện <span class="k">lịch sự, đúng giờ</span>.']),
    quiz: [
      { q: 'Khi bắt đầu cuộc gọi, em làm gì trước?', o: ['Chào hỏi, giới thiệu tên', 'Tắt máy ngay', 'Nói thật to', 'Im lặng'], a: 0, why: 'Chào hỏi và giới thiệu tên là phép lịch sự đầu tiên.' },
      { q: 'Khi nói chuyện điện thoại, em nên:', o: ['Nói thật dài', 'Hét to', 'Gọi lúc nửa đêm', 'Ngắn gọn, lịch sự'], a: 3, why: 'Nói ngắn gọn, nhẹ nhàng, đúng mục đích là gọi điện lịch sự.' } ] },
  { id: 't4', name: 'Số khẩn cấp', tip: '113 công an – 114 cứu hoả – 115 cấp cứu!',
    html: S4Q(['Ghi nhớ các <b>số điện thoại khẩn cấp</b>.', ''],
      ['Số 113 gọi khi nào?', 'Công an: kẻ trộm, đánh nhau, mất trật tự.'],
      ['Số 114 và 115 gọi khi nào?', '114: cứu hoả; 115: cấp cứu y tế.'],
      ['<b>113</b>: công an.', '<b>114</b>: cứu hoả; <b>115</b>: cấp cứu.', '<span class="k">Bình tĩnh</span>, báo người lớn.']),
    quiz: [
      { q: 'Thấy nhà hàng xóm bốc cháy, cần gọi số:', o: ['113', '115', '114', '116'], a: 2, why: '114 là số cứu hoả.' },
      { q: 'Có người bị ngất xỉu cần cấp cứu, gọi số:', o: ['115', '113', '114', '118'], a: 0, why: '115 là số cấp cứu y tế.' } ] },
  { id: 't5', name: 'An toàn, tiết kiệm', tip: 'Dùng điện thoại an toàn giúp em và máy đều khoẻ!',
    html: S4Q(['Việc <b>nên</b> và <b>không nên</b> làm với điện thoại.', ''],
      ['Những việc nào không nên làm?', 'Vừa sạc vừa chơi; để gần lửa; dùng khi đi đường.'],
      ['Làm sao tiết kiệm pin?', 'Tắt ứng dụng không dùng.'],
      ['Không <b>vừa sạc vừa chơi</b>.', 'Không dùng khi <b>đi đường</b>.', 'Tắt ứng dụng để <span class="k">tiết kiệm pin</span>.']),
    quiz: [
      { q: 'Việc làm nào AN TOÀN khi dùng điện thoại?', o: ['Vừa sạc vừa chơi game', 'Để gần bếp lửa', 'Cất máy khi đi đường', 'Vừa đi xe vừa nhắn tin'], a: 2, why: 'Không dùng điện thoại khi đi đường để tránh tai nạn.' },
      { q: 'Muốn điện thoại tiết kiệm pin, em nên:', o: ['Mở thật nhiều ứng dụng', 'Tắt ứng dụng không dùng', 'Để màn hình sáng nhất', 'Bật mọi thứ cả đêm'], a: 1, why: 'Tắt bớt ứng dụng không dùng giúp đỡ tốn pin.' } ] },
];

const KEY = [
  'Điện thoại dùng để<br><b>liên lạc</b>, trao đổi thông tin.',
  'Màn hình, loa, micro, camera;<br><b>chế độ máy bay</b>: không gọi được.',
  '<b>Chào – mục đích</b><br><b>– ngắn gọn – tạm biệt</b>.',
  '<b>113</b> công an, <b>114</b> cứu hoả,<br><b>115</b> cấp cứu.',
  'Không vừa sạc vừa chơi;<br>đi đường <b>không dùng</b> điện thoại.',
];
