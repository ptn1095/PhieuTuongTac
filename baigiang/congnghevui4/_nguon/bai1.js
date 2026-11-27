/* ===== BÀI 1: LỢI ÍCH CỦA HOA, CÂY CẢNH ĐỐI VỚI ĐỜI SỐNG ===== */
const META = { key: 'bai1', num: 1, title: 'Bài 1. Lợi ích của hoa, cây cảnh', big: 'LỢI ÍCH CỦA<br>HOA, CÂY CẢNH',
  st2: 'Công nghệ 4 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng tìm hiểu hoa, cây cảnh mang lại lợi ích gì nhé!',
  cert: 'CÔNG NGHỆ 4 – BÀI 1: LỢI ÍCH CỦA HOA, CÂY CẢNH', file: 'CN4_Bai1', pass: 8 };

const ILL_T = {
  t1: () => svg(`${house(165, 200, .82)}${pot(395, 290, .7, '#E76F51', daisy(0, -120, .9, '#FF8FAB', '#FFD60A', 120))}${pot(520, 290, .7, '#1982C4', rose(0, -120, .9, '#E5383B', 120))}
    ${pillS(110, 356, 380, 46, '#2DA44E', 'Nhà có hoa thật đẹp!', 24)}${star(560, 60, 16, '#FFD60A')}${star(330, 60, 12, '#FF006E')}`),
  t2: () => svg(`${rose(105, 110, 1.05, '#E5383B', 110)}${gift(105, 250, .95)}${daisy(300, 130, 1.15, '#FFD60A', '#FF7F11', 110)}${coin(470, 150, 46)}${coin(535, 215, 34)}${coin(440, 240, 30)}
    ${pillS(20, 340, 170, 44, '#FF006E', 'Quà tặng', 24)}${pillS(215, 340, 170, 44, '#FF7F11', 'Làm trà', 24)}${pillS(410, 340, 170, 44, '#2DA44E', 'Thu nhập', 24)}${star(560, 50, 14, '#FFD60A')}`),
  t3: () => svg(`${sun(60, 60, 28)}${tree(120, 200, 1.05)}${branch(235, 125, .85)}${pot(485, 245, .6, '#1982C4', snake(0, -12, 1))}
    ${pillS(20, 345, 180, 44, '#2DA44E', 'Bóng mát', 24)}${pillS(215, 345, 180, 44, '#1982C4', 'Trong lành', 24)}${pillS(410, 345, 170, 44, '#FF006E', 'Ngày Tết', 24)}`),
  t4: () => svg(`${pillS(130, 24, 340, 46, '#8338EC', 'Trồng, chăm sóc hoa', 24)}${kid(100, 250, 1)}${pot(280, 300, .72, '#FF7F11', daisy(0, -120, .9, '#fff', '#FFC300', 120))}${can(430, 300, .72, '#1982C4', true)}
    ${star(560, 110, 14, '#FFD60A')}${star(40, 90, 12, '#FF006E')}`),
  t5: () => svg(`${tick(70, 80, 1)}${pillS(120, 56, 450, 48, '#FF006E', 'Hoa: trang trí, quà tặng, thu nhập', 22)}
    ${tick(70, 185, 1)}${pillS(120, 161, 450, 48, '#2DA44E', 'Cây cảnh: trong lành, thư giãn', 22)}
    ${heart(70, 290, 1.1)}${pillS(120, 266, 450, 48, '#8338EC', 'Yêu quý, không bẻ cành, hái hoa', 22)}
    ${star(560, 385, 14, '#FFD60A')}${star(40, 385, 12, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Ngôi nhà có hoa', tip: 'Nhà có hoa, cây cảnh trông tươi vui hẳn lên đấy!',
    html: S4Q(['Quan sát hai ngôi nhà: <b>có</b> và <b>không có</b> hoa, cây cảnh.', ''],
      ['Ngôi nhà có hoa, cây cảnh trông thế nào?', 'Tươi đẹp, mát mắt, dễ chịu hơn.'],
      ['Em thích nơi nào hơn? Vì sao?', 'Nơi có hoa, cây cảnh – vì đẹp và trong lành.'],
      ['Hoa, cây cảnh làm <b>nhà cửa đẹp</b> hơn.', 'Mang lại cảm giác <b>dễ chịu</b>.', 'Hoa, cây cảnh có <span class="k">nhiều lợi ích</span>.']),
    quiz: [
      { q: 'Ngôi nhà có trồng hoa, cây cảnh trông như thế nào?', o: ['Tối tăm, buồn tẻ', 'Tươi đẹp, mát mắt', 'Bụi bặm hơn', 'Chật chội, ồn ào'], a: 1, why: 'Hoa, cây cảnh làm cho ngôi nhà tươi đẹp, mát mắt.' },
      { q: 'Hoa, cây cảnh thường được trồng ở đâu?', o: ['Chỉ trong rừng sâu', 'Chỉ ngoài biển', 'Nhà ở, trường học, công viên', 'Chỉ trên núi cao'], a: 2, why: 'Hoa, cây cảnh được trồng ở khắp nơi quanh ta: nhà, trường, công viên.' } ] },
  { id: 't2', name: 'Lợi ích của hoa', tip: 'Hoa đẹp để ngắm, để tặng, còn giúp nhiều người có thu nhập!',
    html: S4Q(['Tìm hiểu: hoa có những <b>lợi ích</b> gì?', ''],
      ['Hoa dùng để làm gì trong đời sống?', 'Trang trí nhà cửa, đường phố; làm quà tặng ngày lễ.'],
      ['Hoa còn có lợi ích nào khác?', 'Một số hoa làm trà, thuốc, món ăn; trồng hoa có thu nhập.'],
      ['Hoa dùng để <b>trang trí</b>, làm quà.', 'Một số hoa làm <b>trà, thuốc</b>.', 'Trồng hoa giúp <span class="k">có thu nhập</span>.']),
    quiz: [
      { q: 'Ngày 20/11, em thường tặng thầy cô gì để bày tỏ lòng biết ơn?', o: ['Bó hoa tươi', 'Chiếc lá khô', 'Hòn đá', 'Cái chổi'], a: 0, why: 'Hoa là món quà đẹp để bày tỏ tình cảm trong ngày lễ.' },
      { q: 'Ngoài trang trí, hoa cúc còn có thể dùng để làm gì?', o: ['Làm gạch', 'Làm trà uống', 'Làm giấy', 'Làm muối'], a: 1, why: 'Một số loại hoa như hoa cúc được phơi khô để làm trà.' } ] },
  { id: 't3', name: 'Lợi ích của cây cảnh', tip: 'Cây xanh cho bóng mát và không khí trong lành!',
    html: S4Q(['Quan sát tranh, nêu <b>lợi ích của cây cảnh</b>.', ''],
      ['Cây cảnh giúp gì cho không khí?', 'Tạo bóng mát, làm không khí trong lành.'],
      ['Ngắm cây xanh giúp con người thế nào?', 'Thư giãn, vui vẻ; dịp Tết còn trưng đào, mai, quất.'],
      ['Cây cảnh tạo <b>bóng mát</b>.', 'Làm không khí <b>trong lành</b>.', 'Giúp con người <span class="k">thư giãn</span>.']),
    quiz: [
      { q: 'Cây cảnh đặt trong nhà giúp:', o: ['Không khí bẩn hơn', 'Nhà nóng hơn', 'Tăng tiếng ồn', 'Không khí trong lành hơn'], a: 3, why: 'Cây xanh giúp không khí trong lành, mát mẻ hơn.' },
      { q: 'Dịp Tết, nhiều gia đình trưng cây gì?', o: ['Cây lúa', 'Cây đào, cây mai', 'Cây ngô', 'Cây mía'], a: 1, why: 'Đào, mai là cây cảnh quen thuộc trong ngày Tết.' } ] },
  { id: 't4', name: 'Hoa, cây cảnh quanh em', tip: 'Nhà em và trường em có những hoa, cây cảnh nào nhỉ?',
    html: S4Q(['Kể hoa, cây cảnh ở <b>nhà em</b> và ở <b>trường</b>.', ''],
      ['Mỗi loại được dùng để làm gì?', 'Trang trí, tạo bóng mát, làm quà…'],
      ['Em có thể làm gì cho nơi ở thêm xanh?', 'Trồng, tưới và chăm sóc hoa, cây cảnh.'],
      ['Hoa, cây cảnh có ở <b>khắp nơi</b>.', 'Mỗi loại có <b>công dụng</b> riêng.', 'Em cùng gia đình <span class="k">trồng, chăm sóc</span>.']),
    quiz: [
      { q: 'Cây bàng to trong sân trường mang lại lợi ích gì?', o: ['Tạo bóng mát', 'Gây ồn ào', 'Làm bẩn nước', 'Làm hỏng sân'], a: 0, why: 'Cây to cho bóng mát để em vui chơi giờ ra chơi.' },
      { q: 'Việc làm nào giúp góc học tập thêm xanh, đẹp?', o: ['Vứt rác trên bàn', 'Bẻ cành cây', 'Đặt một chậu cây nhỏ', 'Đổ nước ra sàn'], a: 2, why: 'Một chậu cây nhỏ làm góc học tập xanh mát, dễ chịu.' } ] },
  { id: 't5', name: 'Bé yêu hoa, cây cảnh', tip: 'Ôn lại thật nhanh lợi ích của hoa và cây cảnh nào!',
    html: S4Q(['Ghép mỗi tranh với <b>lợi ích</b> đúng.', ''],
      ['Hoa có những lợi ích nào?', 'Trang trí, quà tặng, làm trà, thuốc, có thu nhập.'],
      ['Cây cảnh có những lợi ích nào?', 'Trang trí, không khí trong lành, thư giãn.'],
      ['<b>Hoa</b>: đẹp, có ích, có thu nhập.', '<b>Cây cảnh</b>: xanh, mát, trong lành.', 'Em <span class="k">yêu quý, bảo vệ</span> cây.']),
    quiz: [
      { q: 'Đâu KHÔNG phải lợi ích của hoa, cây cảnh?', o: ['Làm đẹp nhà cửa', 'Không khí trong lành', 'Gây ô nhiễm', 'Giúp thư giãn'], a: 2, why: 'Hoa, cây cảnh làm đẹp và làm sạch không khí, không gây ô nhiễm.' },
      { q: 'Khi đi chơi công viên, em nên:', o: ['Hái hoa mang về', 'Giẫm lên bồn hoa', 'Bẻ cành để chơi', 'Ngắm hoa, không hái'], a: 3, why: 'Bảo vệ hoa, cây cảnh nơi công cộng để mọi người cùng ngắm.' } ] },
];

const KEY = [
  'Hoa, cây cảnh làm nơi ở<br><b>tươi đẹp</b>, mát mắt.',
  'Hoa: <b>trang trí</b>, <b>quà tặng</b>,<br>làm <b>trà</b>, <b>thu nhập</b>.',
  'Cây cảnh: <b>bóng mát</b>,<br><b>không khí trong lành</b>.',
  'Cùng gia đình <b>trồng</b><br>và <b>chăm sóc</b> cây.',
  'Yêu quý, <b>bảo vệ</b><br>hoa và cây cảnh.',
];
