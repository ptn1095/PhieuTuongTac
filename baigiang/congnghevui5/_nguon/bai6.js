/* ===== BÀI 6: SỬ DỤNG TỦ LẠNH ===== */
const META = { key: 'bai6', num: 6, title: 'Bài 6. Sử dụng tủ lạnh', big: 'SỬ DỤNG<br>TỦ LẠNH',
  st2: 'Công nghệ 5 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng tìm hiểu cách dùng tủ lạnh đúng cách, tiết kiệm nhé!',
  cert: 'CÔNG NGHỆ 5 – BÀI 6: SỬ DỤNG TỦ LẠNH', file: 'CN5_Bai6', pass: 8 };

// tủ lạnh mở cửa, 2 khoang: góc trên trái (x,y), thân 220×330
const fridgeOpen = (x, y, s = 1, top = '', bot = '') => G(x, y, s, `<rect x="0" y="0" width="220" height="330" rx="22" fill="#E7F5FF" ${ST}/>
  <rect x="16" y="16" width="188" height="100" rx="10" fill="#D0EBFF" stroke="${O}" stroke-width="4"/><rect x="16" y="132" width="188" height="182" rx="10" fill="#F8F9FA" stroke="${O}" stroke-width="4"/>
  <line x1="16" y1="222" x2="204" y2="222" stroke="${O}" stroke-width="4"/>${top}${bot}`);

const ILL_T = {
  t1: () => svg(`${fridge(70, 70, 1.1)}${apple(330, 140, 1)}${carrot(440, 140, 1)}${milk(540, 140, 1)}
    ${pillS(270, 260, 300, 46, '#2DA44E', 'Giữ thực phẩm tươi', 24)}${star(560, 360, 14, '#FFD60A')}${star(300, 360, 12, '#FF006E')}`),
  t2: () => svg(`${fridgeOpen(40, 40, 1, `${icecream(80, 68, .7)}${cube(160, 74, .9)}`, `${apple(70, 186, .8)}${carrot(150, 180, .7)}${milk(90, 274, .7)}${apple(160, 280, .7)}`)}
    ${lab(250, 100, 320, 60, 250, '#1982C4', 'Cấp đông (dưới 0°C)', 20)}${lab(250, 260, 320, 240, 250, '#2DA44E', 'Làm lạnh (mát)', 22)}${thermo(560, 340, .7)}`),
  t3: () => svg(`${icecream(80, 80, 1)}${cube(180, 90, 1)}${apple(80, 250, 1)}${carrot(180, 250, 1)}${milk(270, 250, 1)}
    ${arr(230, 90, 350, 90, '#1982C4')}${arr(320, 250, 350, 250, '#2DA44E')}
    ${pillS(360, 66, 220, 46, '#1982C4', 'Cấp đông', 24)}${pillS(360, 226, 220, 46, '#2DA44E', 'Làm lạnh', 24)}${star(300, 380, 14, '#FFD60A')}`),
  t4: () => svg(`${fridge(40, 90, 1)}
    ${tick(260, 70, .7)}${pillS(290, 48, 290, 44, '#2DA44E', 'Đóng cửa ngay', 22)}${tick(260, 150, .7)}${pillS(290, 128, 290, 44, '#1982C4', 'Đậy kín thức ăn', 22)}
    ${cross(260, 230, .7)}${pillS(290, 208, 290, 44, '#E5383B', 'Cho đồ còn nóng', 22)}${cross(260, 310, .7)}${pillS(290, 288, 290, 44, '#E5383B', 'Xếp quá chật', 22)}`),
  t5: () => svg(`${fridge(60, 90, 1)}${warn(240, 90, 1.2)}${smart(400, 265, .4, `<circle cx="0" cy="-10" r="26" fill="#2DA44E"/>`)}${gear(500, 265, 30, "#FFD60A")}
    ${pillS(230, 150, 340, 44, '#FF7F11', 'Kêu to? Bốc mùi?', 22)}${pillS(230, 340, 340, 46, '#8338EC', 'Hỏng nặng: gọi thợ', 24)}`),
};

const TOPICS = [
  { id: 't1', name: 'Tủ lạnh nhà em', tip: 'Nhờ tủ lạnh mà rau, thịt, sữa tươi được lâu hơn!',
    html: S4('Kể những thứ nhà em hay cất trong tủ lạnh.',
      'Tủ lạnh dùng để <span class="k">bảo quản thực phẩm</span>.',
      'Giữ thực phẩm <b>tươi lâu</b> hơn, làm đá, làm kem.',
      'Dùng tủ lạnh đúng cách giúp <b>bền máy</b>, <b>tiết kiệm điện</b>.'),
    quiz: [
      { q: 'Tủ lạnh có tác dụng gì?', o: ['Làm nóng thức ăn', 'Bảo quản thực phẩm', 'Giặt quần áo', 'Chiếu sáng'], a: 1, why: 'Tủ lạnh giữ lạnh để thực phẩm tươi lâu hơn.' },
      { q: 'Tủ lạnh thường có những khoang nào?', o: ['Khoang nấu và khoang rửa', 'Chỉ một khoang', 'Khoang sấy và khoang hút', 'Cấp đông và làm lạnh'], a: 3, why: 'Tủ lạnh thường có khoang cấp đông và khoang làm lạnh.' } ] },
  { id: 't2', name: 'Các khoang tủ lạnh', tip: 'Ngăn đá lạnh dưới 0°C – nước để vào sẽ đông thành đá!',
    html: S4('Quan sát hai khoang của tủ lạnh.',
      '<span class="k">Khoang cấp đông</span> (ngăn đá): dưới 0°C, làm đông thực phẩm.',
      '<span class="k">Khoang làm lạnh</span> (ngăn mát): mát lạnh, không đông đá.',
      'Mỗi loại thực phẩm cất vào <b>đúng khoang</b>.'),
    quiz: [
      { q: 'Khoang cấp đông (ngăn đá) có nhiệt độ:', o: ['Dưới 0°C', 'Bằng nhiệt độ phòng', 'Rất nóng', 'Trên 50°C'], a: 0, why: 'Khoang cấp đông lạnh dưới 0°C nên nước đông thành đá.' },
      { q: 'Khay làm đá viên nên đặt ở khoang nào?', o: ['Khoang làm lạnh', 'Ngoài tủ', 'Khoang cấp đông', 'Trên nóc tủ'], a: 2, why: 'Chỉ khoang cấp đông đủ lạnh để nước thành đá.' } ] },
  { id: 't3', name: 'Xếp đồ vào tủ', tip: 'Để lâu, cần đông: ngăn đá. Dùng vài ngày: ngăn mát!',
    html: S4('Xếp thực phẩm vào đúng khoang.',
      'Cấp đông: <b>kem</b>, <b>đá viên</b>, <b>thịt, cá</b> để dành nhiều tuần.',
      'Làm lạnh: <b>rau xanh</b>, <b>sữa tươi</b>, <b>hoa quả</b>.',
      'Cho thực phẩm vào <span class="k">hộp, túi kín</span> trước khi cất.'),
    quiz: [
      { q: 'Rau xanh nên cất ở khoang nào?', o: ['Khoang cấp đông', 'Khoang làm lạnh', 'Trên nóc tủ', 'Ngoài cửa sổ'], a: 1, why: 'Rau dùng trong vài ngày, để ngăn mát cho tươi, không bị đông.' },
      { q: 'Thịt cần để dành nhiều tuần nên cất ở khoang nào?', o: ['Khoang làm lạnh', 'Ngăn cửa tủ', 'Trên bàn', 'Khoang cấp đông'], a: 3, why: 'Khoang cấp đông giữ thịt được lâu nhiều tuần.' } ] },
  { id: 't4', name: 'Dùng tủ lạnh đúng cách', tip: 'Mở cửa nhanh, đóng cửa ngay – vừa lạnh vừa tiết kiệm điện!',
    html: S4('Việc nên và không nên khi dùng tủ lạnh.',
      'Lấy đồ xong <span class="k">đóng kín cửa</span> ngay để tiết kiệm điện.',
      '<b>Không</b> cho đồ còn nóng vào; <b>không</b> xếp quá chật.',
      '<b>Đậy kín</b> thực phẩm; thường xuyên <b>lau dọn</b>, xem hạn dùng.'),
    quiz: [
      { q: 'Việc nào ĐÚNG khi dùng tủ lạnh?', o: ['Đóng cửa ngay khi lấy xong', 'Mở cửa thật lâu', 'Cho canh nóng vào ngay', 'Xếp thật chật'], a: 0, why: 'Đóng cửa ngay giữ hơi lạnh, tiết kiệm điện.' },
      { q: 'Vì sao không nên xếp thực phẩm quá chật?', o: ['Để tủ trông đẹp', 'Để hơi lạnh lưu thông', 'Để tủ kêu to', 'Để đồ mau hỏng'], a: 1, why: 'Để khoảng trống giúp hơi lạnh đi khắp tủ.' } ] },
  { id: 't5', name: 'Tủ lạnh bất thường', tip: 'Thấy tủ lạnh lạ, báo ngay người lớn nhé!',
    html: S4('Nhận biết và xử lí khi tủ lạnh bất thường.',
      '<b>Kêu to</b>: kiểm tra tủ kê chắc chưa. <b>Bốc mùi</b>: bỏ đồ hỏng, lau tủ.',
      '<b>Đóng tuyết dày</b>: rã đông. <b>Chảy nước</b>: xem ống thoát nước.',
      'Hỏng không tự sửa được: <span class="k">gọi thợ sửa chữa</span>.'),
    quiz: [
      { q: 'Tủ lạnh bốc mùi khó chịu. Em cùng người lớn:', o: ['Xịt nước hoa vào tủ', 'Bỏ đồ hỏng, lau sạch tủ', 'Tắt tủ cả tháng', 'Để kệ'], a: 1, why: 'Bỏ thực phẩm hỏng và lau tủ sạch sẽ thì hết mùi.' },
      { q: 'Tủ lạnh hỏng mà gia đình không tự sửa được thì:', o: ['Đập tủ ra xem', 'Vẫn dùng tiếp', 'Tự tháo dây điện', 'Gọi thợ sửa chữa'], a: 3, why: 'Tủ lạnh dùng điện, cần thợ có chuyên môn sửa cho an toàn.' } ] },
];

const KEY = [
  'Tủ lạnh dùng để<br><b>bảo quản thực phẩm</b>.',
  '<b>Cấp đông</b>: dưới 0°C.<br><b>Làm lạnh</b>: mát, không đông.',
  'Kem, đá, thịt để lâu: <b>ngăn đá</b>.<br>Rau, sữa, quả: <b>ngăn mát</b>.',
  '<b>Đóng cửa ngay</b>, đậy kín,<br>không cho đồ nóng vào.',
  'Bất thường: báo người lớn;<br>hỏng nặng: <b>gọi thợ</b>.',
];
