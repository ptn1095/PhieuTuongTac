/* ===== BÀI 1: THẾ GIỚI KĨ THUẬT SỐ ===== */
const META = { key: 'bai1', num: 1, title: 'Bài 1. Thế giới kĩ thuật số', big: 'THẾ GIỚI<br>KĨ THUẬT SỐ',
  st2: 'Tin học 9 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng khám phá các thiết bị thông minh và máy tính quanh ta nhé!',
  cert: 'TIN HỌC 9 – BÀI 1: THẾ GIỚI KĨ THUẬT SỐ', file: 'Tin9_Bai1', pass: 8 };

const ILL_T = {
  t1: () => svg(`${washer(110, 190, .85)}${swatch(290, 180, .9)}${smart(470, 150, .6, apps())}${vacbot(300, 320, .7)}
    ${pillS(20, 350, 170, 46, '#FF7F11', 'Máy giặt', 22)}${pillS(410, 300, 180, 46, '#8338EC', 'Thông minh', 22)}
    ${star(560, 40, 14, '#FFD60A')}${star(200, 40, 12, '#FF006E')}${star(570, 390, 12, '#2EC4B6')}`),
  t2: () => svg(`${chip(300, 175, 1)}
    ${pillS(14, 60, 180, 50, '#FF7F11', 'Cảm biến', 24)}${arr(150, 116, 216, 156, '#FF7F11')}
    ${pillS(406, 60, 180, 50, '#2DA44E', 'Điều khiển', 24)}${arr(384, 156, 450, 116, '#2DA44E')}
    ${pillS(20, 210, 170, 46, '#1982C4', 'Dữ liệu vào', 22)}${pillS(410, 210, 170, 46, '#FF006E', 'Hành động', 22)}
    ${pillS(80, 330, 440, 54, '#8338EC', 'Nhận → Xử lí → Điều khiển', 26)}${star(570, 300, 14, '#FFD60A')}${star(30, 300, 12, '#FF006E')}`),
  t3: () => svg(`${dline(300, 180, 110, 84)}${dline(300, 180, 490, 84)}${dline(300, 180, 110, 274)}${dline(300, 180, 490, 274)}${globe(300, 180, 84)}
    ${pillS(20, 60, 180, 48, '#E5383B', 'Y tế', 24)}${pillS(400, 60, 180, 48, '#1982C4', 'Giáo dục', 24)}
    ${pillS(20, 250, 180, 48, '#FF7F11', 'Giao thông', 24)}${pillS(400, 250, 180, 48, '#2DA44E', 'Ngân hàng', 24)}
    ${pillS(130, 350, 340, 50, '#8338EC', 'Máy tính ở khắp nơi', 26)}${star(560, 380, 12, '#FFD60A')}${star(40, 380, 12, '#FF006E')}`),
  t4: () => svg(`${tlist([[1, '#2DA44E', 'Học, làm việc từ xa'], [1, '#1982C4', 'Kết nối mọi người'], [0, '#E5383B', 'Nghiện, hại sức khoẻ'], [0, '#FF7F11', 'Tin giả, lừa đảo, rác điện tử']], 60, 96, 24)}
    ${star(570, 400, 12, '#FFD60A')}`),
  t5: () => svg(`${kid(110, 230, 1)}${laptop(240, 80, .9, `${globe(120, 75, 52)}`)}${shieldI(530, 330, .5)}
    ${pillS(40, 365, 430, 46, '#8338EC', 'Dùng thông minh, có trách nhiệm', 21)}${star(40, 40, 14, '#FFD60A')}${star(560, 50, 12, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Thiết bị thông minh quanh em', tip: 'Máy giặt, đồng hồ, robot hút bụi… chúng đều biết "tự làm việc" đấy!',
    html: S4Q(['Kể tên thiết bị trong nhà có thể <b>tự làm việc</b> theo cài đặt.', 'Gợi ý: máy giặt, điều hoà, đồng hồ thông minh…'],
      ['Các thiết bị đó tự làm được những gì?', 'Máy giặt giặt theo chương trình; điều hoà giữ nhiệt độ; đồng hồ đếm bước.'],
      ['Vì sao chúng được gọi là "thông minh"?', 'Vì có <b>bộ xử lí thông tin</b> bên trong.'],
      ['Thiết bị thông minh có <b>bộ xử lí</b>.', 'Tự làm việc theo <b>chương trình</b> cài đặt.', 'Có mặt <span class="k">khắp nơi</span> quanh ta.']),
    quiz: [
      { q: 'Thiết bị nào dưới đây có gắn bộ xử lí thông tin?', o: ['Cái kéo', 'Bàn chải gỗ', 'Máy giặt tự động', 'Cái ghế'], a: 2, why: 'Máy giặt tự động có bộ xử lí điều khiển các chương trình giặt.' },
      { q: 'Đồng hồ thông minh có thể làm được việc nào?', o: ['Đếm bước chân, đo nhịp tim', 'Nấu cơm', 'Phát điện cho nhà', 'Giặt quần áo'], a: 0, why: 'Đồng hồ thông minh có cảm biến và bộ xử lí để theo dõi sức khoẻ.' } ] },
  { id: 't2', name: 'Bộ xử lí thông tin', tip: 'Bộ xử lí giống "bộ não" nhỏ: nhận – xử lí – điều khiển!',
    html: S4Q(['Tìm hiểu <b>bộ xử lí</b> làm gì bên trong thiết bị.', ''],
      ['Bộ xử lí hoạt động thế nào?', 'Nhận dữ liệu từ cảm biến → xử lí → điều khiển thiết bị.'],
      ['Robot hút bụi tránh vật cản thế nào?', 'Cảm biến báo vật cản → bộ xử lí ra lệnh đổi hướng.'],
      ['<b>Cảm biến</b> thu nhận dữ liệu.', '<b>Bộ xử lí</b> xử lí theo chương trình.', 'Thiết bị <span class="k">tự động, linh hoạt</span>.']),
    quiz: [
      { q: 'Bộ phận giúp thiết bị thông minh "suy nghĩ" và ra quyết định là:', o: ['Vỏ máy', 'Bộ xử lí thông tin', 'Dây điện', 'Chân đế'], a: 1, why: 'Bộ xử lí thông tin xử lí dữ liệu và điều khiển thiết bị.' },
      { q: 'Robot hút bụi phát hiện vật cản phía trước nhờ:', o: ['Bánh xe', 'Pin', 'Chổi quét', 'Cảm biến'], a: 3, why: 'Cảm biến phát hiện vật cản rồi gửi dữ liệu cho bộ xử lí.' } ] },
  { id: 't3', name: 'Máy tính ở khắp nơi', tip: 'Đi khám bệnh, rút tiền, xem đường… đều có máy tính giúp sức!',
    html: S4Q(['Ghép máy tính với <b>lĩnh vực</b> mà nó hỗ trợ.', ''],
      ['Máy tính giúp gì trong y tế, giáo dục, giao thông?', 'Bệnh án điện tử; học trực tuyến; bản đồ số.'],
      ['Ngân hàng, mua bán dùng máy tính thế nào?', 'ATM, chuyển khoản; thương mại điện tử.'],
      ['Máy tính hỗ trợ <b>y tế, giáo dục</b>.', 'Và <b>giao thông, ngân hàng</b>, mua bán.', 'Có mặt ở <span class="k">hầu hết lĩnh vực</span>.']),
    quiz: [
      { q: 'Ứng dụng bản đồ số chỉ đường thuộc lĩnh vực nào?', o: ['Y tế', 'Giao thông', 'Nông nghiệp', 'Thể thao'], a: 1, why: 'Bản đồ số giúp tìm đường, tránh tắc – lĩnh vực giao thông.' },
      { q: 'Máy ATM rút tiền tự động là ứng dụng của máy tính trong:', o: ['Giáo dục', 'Y tế', 'Ngân hàng', 'Du lịch'], a: 2, why: 'ATM là máy giao dịch tự động của ngân hàng.' } ] },
  { id: 't4', name: 'Hai mặt của thế giới số', tip: 'Công nghệ số rất có ích – nhưng dùng quá đà sẽ có hại nhé!',
    html: S4Q(['Liệt kê <b>lợi ích</b> và <b>tác hại</b> của thiết bị số.', ''],
      ['Thiết bị số mang lại lợi ích gì?', 'Học, làm việc từ xa; kết nối mọi người; tăng năng suất.'],
      ['Thiết bị số có mặt tiêu cực nào?', 'Nghiện thiết bị, hại sức khoẻ, tin giả, lừa đảo, rác thải điện tử.'],
      ['Mặt <b>tích cực</b>: tiện lợi, năng suất.', 'Mặt <b>tiêu cực</b>: nghiện, lừa đảo, rác thải.', 'Dùng <span class="k">có giới hạn, an toàn</span>.']),
    quiz: [
      { q: 'Đâu là tác động TIÊU CỰC của công nghệ số?', o: ['Học trực tuyến', 'Gọi video với người thân', 'Nghiện trò chơi điện tử', 'Tra cứu tài liệu'], a: 2, why: 'Nghiện trò chơi điện tử hại sức khoẻ và việc học.' },
      { q: 'Thiết bị điện tử hỏng (rác thải điện tử) nên được:', o: ['Vứt chung rác sinh hoạt', 'Đốt ngoài vườn', 'Chôn xuống đất', 'Thu gom, tái chế đúng nơi'], a: 3, why: 'Rác điện tử chứa chất độc, cần thu gom và tái chế đúng cách.' } ] },
  { id: 't5', name: 'Công dân số nhí', tip: 'Ôn nhanh: bộ xử lí – máy tính ở khắp nơi – dùng có trách nhiệm!',
    html: S4Q(['Tóm tắt bài học bằng <b>3 ý chính</b>.', ''],
      ['Thế nào là thiết bị thông minh?', 'Thiết bị có bộ xử lí, tự làm việc theo chương trình.'],
      ['Máy tính tác động đến đời sống thế nào?', 'Hỗ trợ mọi lĩnh vực; có cả mặt tích cực và tiêu cực.'],
      ['Thiết bị có <b>bộ xử lí</b> → thông minh.', 'Có <b>hai mặt</b>: tích cực, tiêu cực.', 'Là <span class="k">công dân số</span> có trách nhiệm.']),
    quiz: [
      { q: 'Thiết bị thông minh có đặc điểm nào?', o: ['Không cần dùng điện', 'Tự động, tương tác với người dùng', 'Chỉ có trong nhà máy', 'Không bao giờ hỏng'], a: 1, why: 'Có bộ xử lí nên thiết bị tự động và tương tác được.' },
      { q: 'Câu nào ĐÚNG?', o: ['Máy tính có mặt ở hầu hết lĩnh vực', 'Máy tính chỉ để chơi trò chơi', 'Dùng máy tính không có hại gì', 'Chỉ người lớn mới dùng máy tính'], a: 0, why: 'Máy tính hỗ trợ y tế, giáo dục, giao thông, ngân hàng…' } ] },
];

const KEY = [
  'Nhiều thiết bị có<br><b>bộ xử lí thông tin</b>.',
  'Cảm biến → <b>xử lí</b><br>→ điều khiển.',
  'Máy tính có mặt<br>ở <b>mọi lĩnh vực</b>.',
  'Có <b>tích cực</b> và<br><b>tiêu cực</b>.',
  'Dùng công nghệ<br><b>có trách nhiệm</b>.',
];
