/* ===== BÀI 5: INTERNET ===== */
const META = { key: 'bai5', theme: 'nghinle', num: 5, title: 'Bài 5. Internet', big: 'Internet',
  st2: 'Chủ đề 2 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Như tấm thảm bay, Internet nối cả thế giới lại với nhau – cùng tìm hiểu nhé!',
  cert: 'Tin học 6 – Bài 5. Internet', file: 'Tin6_Bai5', pass: 8 };

const ILL_T = {
  t1: () => svg(`${smart(300, 200, .9, apps())}${pillS(20, 60, 170, 48, '#1982C4', 'Học bài', 24)}${pillS(410, 60, 170, 48, '#FF7F11', 'Xem video', 24)}
    ${pillS(20, 300, 170, 48, '#2DA44E', 'Gọi video', 24)}${pillS(410, 300, 170, 48, '#8338EC', 'Đọc tin', 24)}${star(560, 390, 12, '#FFD60A')}`),
  t2: () => svg(`${dline(300, 200, 100, 80)}${dline(300, 200, 500, 80)}${dline(300, 200, 100, 320)}${dline(300, 200, 500, 320)}${globe(300, 200, 80)}
    ${ball(100, 80, 40, '#FF006E', 'Mạng', 20)}${ball(500, 80, 40, '#1982C4', 'Mạng', 20)}${ball(100, 320, 40, '#2DA44E', 'Mạng', 20)}${ball(500, 320, 40, '#FF7F11', 'Mạng', 20)}
    ${pillS(170, 360, 260, 46, '#8338EC', 'Mạng của các mạng', 22)}`),
  t3: () => svg(`${vflow([['#1982C4', 'Phạm vi toàn cầu'], ['#FF7F11', 'Tính tương tác'], ['#2DA44E', 'Dễ tiếp cận'], ['#8338EC', 'Không chủ sở hữu']], 140, 26, 320, 98, 26)}${globe(530, 360, 40)}`),
  t4: () => svg(`${tlist([[1, '#2DA44E', 'Học tập, tra cứu'], [1, '#1982C4', 'Liên lạc, giải trí'], [0, '#E5383B', 'Nghiện Internet'], [0, '#FF7F11', 'Thông tin xấu, lừa đảo']], 60, 96, 24)}`),
  t5: () => svg(`${globe(300, 160, 90)}${pillS(60, 300, 480, 54, '#2DA44E', 'Dùng Internet an toàn, có ích', 24)}${star(80, 70, 16, '#FFD60A')}${star(520, 70, 14, '#FF006E')}${star(540, 390, 12, '#2EC4B6')}`),
};

const TOPICS = [
  { id: 't1', name: 'Em dùng Internet làm gì?', tip: 'Học bài, xem video, gọi cho ông bà… đều nhờ Internet!',
    html: S4Q(['Kể những việc gia đình em làm <b>trên Internet</b>.', 'Gợi ý: đọc tin tức, học bài, gọi video…'],
      ['Internet giúp con người làm <b>những việc gì</b>?', 'Học trực tuyến, tra cứu, xem video, mua sắm…'],
      ['Muốn vào Internet cần có <b>những gì</b>?', '<b>Thiết bị</b> (máy tính, điện thoại) và <b>kết nối mạng</b> (wifi, 4G).'],
      ['Internet có mặt trong <b>học tập, liên lạc, giải trí, mua sắm</b>.', 'Cần <b>thiết bị</b> và <b>kết nối mạng</b> để vào Internet.', 'Internet <span class="k">kết nối mọi người</span> khắp nơi.']),
    quiz: [
      { q: 'Việc nào cần dùng Internet?', o: ['Đọc sách giấy', 'Gọi video cho ông bà ở xa', 'Đá bóng', 'Viết bằng bút chì'], a: 1, why: 'Gọi video qua mạng cần kết nối Internet.' },
      { q: 'Muốn truy cập Internet, máy tính cần:', o: ['Được kết nối mạng', 'Có loa to', 'Có máy in', 'Có bàn phím màu'], a: 0, why: 'Máy tính phải kết nối mạng mới vào được Internet.' } ] },
  { id: 't2', name: 'Internet là gì?', tip: 'Internet là "mạng của các mạng" trải khắp thế giới!',
    html: S4Q(['Tìm hiểu Internet được <b>tạo thành</b> như thế nào.', ''],
      ['Internet là gì?', 'Mạng kết nối các <b>mạng máy tính</b> trên khắp thế giới.'],
      ['Ai giúp gia đình em kết nối Internet?', '<b>Nhà cung cấp dịch vụ</b>: VNPT, Viettel, FPT…'],
      ['Internet là <b>"mạng của các mạng"</b>.', 'Trải rộng <b>khắp thế giới</b>.', 'Kết nối qua <span class="k">nhà cung cấp dịch vụ</span>.']),
    quiz: [
      { q: 'Internet là:', o: ['Một máy tính rất lớn', 'Một phần mềm soạn thảo', 'Mạng kết nối các mạng trên thế giới', 'Một trang web'], a: 2, why: 'Internet kết nối hàng triệu mạng máy tính toàn cầu.' },
      { q: 'Đơn vị cung cấp đường truyền Internet cho gia đình là:', o: ['Nhà sách', 'Bưu điện văn hoá', 'Cửa hàng tạp hoá', 'Nhà cung cấp dịch vụ Internet'], a: 3, why: 'Ví dụ VNPT, Viettel, FPT là nhà cung cấp dịch vụ Internet.' } ] },
  { id: 't3', name: 'Đặc điểm của Internet', tip: 'Không ai làm chủ Internet cả – thú vị không?',
    html: S4Q(['Nêu các <b>đặc điểm nổi bật</b> của Internet.', ''],
      ['Internet có những đặc điểm gì?', 'Phạm vi toàn cầu, tương tác hai chiều, dễ tiếp cận.'],
      ['Internet có thuộc về riêng ai không?', 'Không, Internet <b>không có chủ sở hữu</b>.'],
      ['Phạm vi <b>toàn cầu</b>, dễ tiếp cận.', 'Có <b>tính tương tác</b>, thông tin cập nhật.', '<span class="k">Không có chủ sở hữu</span>.']),
    quiz: [
      { q: 'Đâu là đặc điểm của Internet?', o: ['Chỉ dùng trong một trường', 'Phạm vi toàn cầu', 'Thuộc về một người', 'Không thể tương tác'], a: 1, why: 'Internet kết nối trên phạm vi toàn thế giới.' },
      { q: 'Câu nào đúng về Internet?', o: ['Không có chủ sở hữu', 'Chỉ có ở Việt Nam', 'Không có thông tin mới', 'Chỉ người lớn được dùng'], a: 0, why: 'Internet không thuộc sở hữu của riêng ai.' } ] },
  { id: 't4', name: 'Lợi ích và nguy cơ', tip: 'Internet rất có ích – nhưng dùng sai sẽ có hại nhé!',
    html: S4Q(['Liệt kê <b>lợi ích</b> và <b>nguy cơ</b> khi dùng Internet.', ''],
      ['Internet mang lại những lợi ích gì?', 'Học tập, tra cứu, liên lạc, giải trí, mua bán…'],
      ['Có những nguy cơ nào? Em phòng tránh ra sao?', 'Nghiện mạng, tin xấu, lừa đảo; dùng có giờ, hỏi người lớn.'],
      ['Internet giúp <b>học tập, liên lạc</b>.', 'Cẩn thận: <b>nghiện mạng</b>, lừa đảo, tin xấu.', 'Dùng Internet <span class="k">có ích, có giới hạn</span>.']),
    quiz: [
      { q: 'Đâu là nguy cơ khi dùng Internet?', o: ['Tra cứu bài học', 'Gọi điện cho bạn', 'Xem bản đồ', 'Nghiện chơi trò chơi trực tuyến'], a: 3, why: 'Dùng quá nhiều dễ dẫn tới nghiện Internet.' },
      { q: 'Để dùng Internet an toàn, em nên:', o: ['Dùng cả ngày lẫn đêm', 'Tin mọi thông tin', 'Dùng có giới hạn, có người lớn hướng dẫn', 'Cho người lạ mật khẩu'], a: 2, why: 'Dùng có giới hạn và có người lớn hướng dẫn là an toàn.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn nhanh: Internet là gì, đặc điểm, lợi ích!',
    html: S4Q(['Tóm tắt bài học bằng <b>3 ý chính</b>.', ''],
      ['Internet là gì?', 'Mạng kết nối các mạng máy tính trên toàn cầu.'],
      ['Internet có đặc điểm gì?', 'Toàn cầu, tương tác, dễ tiếp cận, không chủ sở hữu.'],
      ['Internet: <b>mạng toàn cầu</b>.', 'Có nhiều <b>lợi ích</b> và cả <b>nguy cơ</b>.', 'Dùng Internet <span class="k">an toàn, có ích</span>.']),
    quiz: [
      { q: 'Tính tương tác của Internet có nghĩa là:', o: ['Chỉ xem được, không gửi được', 'Người dùng có thể trao đổi hai chiều', 'Không ai dùng được', 'Chỉ dùng được ban ngày'], a: 1, why: 'Người dùng vừa nhận vừa gửi thông tin được.' },
      { q: 'Internet có phạm vi:', o: ['Toàn cầu', 'Một lớp học', 'Một ngôi nhà', 'Một thành phố'], a: 0, why: 'Internet trải rộng khắp thế giới.' } ] },
];

const KEY = [
  'Internet có mặt<br>trong <b>đời sống</b>.',
  '<b>Mạng của<br>các mạng</b>.',
  'Toàn cầu,<br><b>tương tác</b>.',
  '<b>Có ích</b> nhưng<br>có nguy cơ.',
  'Dùng Internet<br><b>an toàn</b>.',
];

// tranh bìa
const COVER = () => svgC(`${[[95, 120], [500, 95], [470, 250], [130, 250]].map(([x, y]) => dline(300, 150, x, y)).join('')}${globe(300, 150, 82)}
  ${smart(95, 125, .5)}${laptop(440, 50, .45)}${G(470, 250, .6, `<rect x="-60" y="-40" width="120" height="80" rx="10" fill="#3D405B" ${ST}/><rect x="-48" y="-30" width="96" height="58" rx="6" fill="#8ECAE6"/>`)}${cloud(130, 255, .55, '#E7F5FF')}
  ${pillS(40, 290, 250, 52, '#1982C4', 'Mạng toàn cầu', 26)}${pillS(310, 290, 250, 52, '#2DA44E', 'Kết nối mọi nơi', 26)}${star(40, 40, 14, '#FFD60A')}${star(560, 200, 12, '#FF006E')}`);
