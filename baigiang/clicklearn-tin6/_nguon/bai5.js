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
    html: S4('Kể những việc em và gia đình làm <b>trên Internet</b>.',
      'Học trực tuyến, tra cứu, xem video, gọi điện video, mua sắm…',
      'Muốn vào Internet cần có gì? (thiết bị + kết nối mạng)',
      'Internet có mặt trong <span class="k">học tập và đời sống</span>.'),
    quiz: [
      { q: 'Việc nào cần dùng Internet?', o: ['Đọc sách giấy', 'Gọi video cho ông bà ở xa', 'Đá bóng', 'Viết bằng bút chì'], a: 1, why: 'Gọi video qua mạng cần kết nối Internet.' },
      { q: 'Muốn truy cập Internet, máy tính cần:', o: ['Được kết nối mạng', 'Có loa to', 'Có máy in', 'Có bàn phím màu'], a: 0, why: 'Máy tính phải kết nối mạng mới vào được Internet.' } ] },
  { id: 't2', name: 'Internet là gì?', tip: 'Internet là "mạng của các mạng" trải khắp thế giới!',
    html: S4('Tìm hiểu Internet được tạo thành như thế nào.',
      'Internet là mạng <b>kết nối các mạng máy tính</b> trên khắp thế giới.',
      'Ai giúp em kết nối Internet? (<b>nhà cung cấp dịch vụ</b>: VNPT, Viettel, FPT…)',
      'Internet là <span class="k">mạng toàn cầu</span>.'),
    quiz: [
      { q: 'Internet là:', o: ['Một máy tính rất lớn', 'Một phần mềm soạn thảo', 'Mạng kết nối các mạng trên thế giới', 'Một trang web'], a: 2, why: 'Internet kết nối hàng triệu mạng máy tính toàn cầu.' },
      { q: 'Đơn vị cung cấp đường truyền Internet cho gia đình là:', o: ['Nhà sách', 'Bưu điện văn hoá', 'Cửa hàng tạp hoá', 'Nhà cung cấp dịch vụ Internet'], a: 3, why: 'Ví dụ VNPT, Viettel, FPT là nhà cung cấp dịch vụ Internet.' } ] },
  { id: 't3', name: 'Đặc điểm của Internet', tip: 'Không ai làm chủ Internet cả – thú vị không?',
    html: S4('Nêu các <b>đặc điểm</b> nổi bật của Internet.',
      'Phạm vi <b>toàn cầu</b>; <b>tương tác</b> hai chiều; <b>dễ tiếp cận</b>.',
      'Internet có thuộc về riêng ai không? (<b>không có chủ sở hữu</b>)',
      'Internet có <span class="k">rất nhiều thông tin</span>, luôn cập nhật.'),
    quiz: [
      { q: 'Đâu là đặc điểm của Internet?', o: ['Chỉ dùng trong một trường', 'Phạm vi toàn cầu', 'Thuộc về một người', 'Không thể tương tác'], a: 1, why: 'Internet kết nối trên phạm vi toàn thế giới.' },
      { q: 'Câu nào đúng về Internet?', o: ['Không có chủ sở hữu', 'Chỉ có ở Việt Nam', 'Không có thông tin mới', 'Chỉ người lớn được dùng'], a: 0, why: 'Internet không thuộc sở hữu của riêng ai.' } ] },
  { id: 't4', name: 'Lợi ích và nguy cơ', tip: 'Internet rất có ích – nhưng dùng sai sẽ có hại nhé!',
    html: S4('Liệt kê lợi ích và nguy cơ khi dùng Internet.',
      'Lợi ích: <b>học tập</b>, tra cứu, liên lạc, giải trí, mua bán.',
      'Nguy cơ: <b>nghiện</b> Internet, thông tin xấu, bị lừa đảo. Em phòng tránh thế nào?',
      'Dùng Internet <span class="k">có ích, có giới hạn</span>.'),
    quiz: [
      { q: 'Đâu là nguy cơ khi dùng Internet?', o: ['Tra cứu bài học', 'Gọi điện cho bạn', 'Xem bản đồ', 'Nghiện chơi trò chơi trực tuyến'], a: 3, why: 'Dùng quá nhiều dễ dẫn tới nghiện Internet.' },
      { q: 'Để dùng Internet an toàn, em nên:', o: ['Dùng cả ngày lẫn đêm', 'Tin mọi thông tin', 'Dùng có giới hạn, có người lớn hướng dẫn', 'Cho người lạ mật khẩu'], a: 2, why: 'Dùng có giới hạn và có người lớn hướng dẫn là an toàn.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn nhanh: Internet là gì, đặc điểm, lợi ích!',
    html: S4('Tóm tắt bài bằng 3 ý chính.',
      'Internet: mạng <b>kết nối các mạng</b> máy tính toàn cầu.',
      'Đặc điểm: toàn cầu, tương tác, dễ tiếp cận, không chủ sở hữu.',
      'Dùng Internet <span class="k">an toàn, có ích</span>.'),
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
