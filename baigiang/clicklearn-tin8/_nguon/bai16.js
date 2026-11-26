/* ===== BÀI 16: TIN HỌC VÀ NGHỀ NGHIỆP ===== */
const META = { key: 'bai16', num: 16, theme: 'lauda', title: 'Bài 16. Tin học và nghề nghiệp', big: 'Tin học và<br>nghề nghiệp',
  st2: 'Chủ đề 6 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Bước vào lâu đài nghề nghiệp – mỗi căn phòng là một nghề thú vị!',
  cert: 'Tin học 8 – Bài 16. Tin học và nghề nghiệp', file: 'Tin8_Bai16', pass: 8 };

const ILL_T = {
  t1: () => svg(`${person(120, 210, 1.1, '#8338EC')}${bubble(220, 40, 340, 80, '#FFF3BF', 'Lớn lên em sẽ làm…?', 26)}${laptop(260, 170, .75)}${star(560, 200, 14, '#FFD60A')}
    ${pillS(60, 330, 480, 54, '#2DA44E', 'Nghề nào cũng cần tin học', 26)}`),
  t2: () => svg(`${[['#1982C4', 'Lập trình viên'], ['#E5383B', 'An toàn thông tin'], ['#2DA44E', 'Quản trị mạng'], ['#FF7F11', 'Phân tích dữ liệu'], ['#8338EC', 'Kĩ sư AI'], ['#2EC4B6', 'Thiết kế trò chơi']].map(([c, t], i) => pillS(30 + (i % 2)*285, 40 + Math.floor(i/2)*110, 255, 60, c, t, 24)).join('')}
    ${star(300, 390, 14, '#FFD60A')}`),
  t3: () => svg(`${[['Kế toán', 'Bảng tính', '#1982C4'], ['Kiến trúc sư', 'Phần mềm thiết kế', '#FF7F11'], ['Nông dân', 'Tưới cây tự động', '#2DA44E'], ['Giáo viên', 'Bài giảng điện tử', '#8338EC']].map(([a, b, c], i) => pillS(30, 30 + i*92, 210, 56, c, a, 24) + arr(250, 58 + i*92, 300, 58 + i*92, O, 6) + pillS(310, 30 + i*92, 260, 56, '#fff', b, 21, 0, O)).join('')}`),
  t4: () => svg(`${tlist([[1, '#1982C4', 'Tư duy logic, cẩn thận'], [1, '#FF7F11', 'Sáng tạo, tự học suốt đời'], [1, '#2DA44E', 'Giỏi tiếng Anh, làm việc nhóm'], [0, '#E5383B', 'Ngại học hỏi cái mới']], 60, 96, 22)}`),
  t5: () => svg(`${[[110, 110, '#FF006E', 'Lập trình'], [490, 110, '#1982C4', 'Mạng'], [110, 320, '#2DA44E', 'Dữ liệu'], [490, 320, '#FF7F11', 'Ứng dụng']].map(([x, y, c, t]) => `<line x1="300" y1="215" x2="${x}" y2="${y}" stroke="${c}" stroke-width="10" stroke-linecap="round"/>` + pillS(x - 95, y - 27, 190, 54, c, t, 24)).join('')}${ball(300, 215, 70, '#8338EC', 'Tin học', 26)}${crownI(300, 118, .7)}`),
};

const TOPICS = [
  { id: 't1', name: 'Nghề em mơ ước', tip: 'Dù làm nghề gì, tin học cũng là “chìa khoá vàng” của lâu đài!',
    html: S4('Kể tên <b>nghề em mơ ước</b> và công việc của nghề đó.',
      'Hầu hết các nghề ngày nay đều <b>dùng máy tính</b> và phần mềm.',
      'Bác sĩ, giáo viên, kiến trúc sư dùng máy tính để làm gì?',
      'Tin học có mặt trong <span class="k">mọi ngành nghề</span>.'),
    quiz: [
      { q: 'Ngày nay, tin học được ứng dụng:', o: ['Chỉ trong ngân hàng', 'Chỉ trong trường học', 'Trong hầu hết các ngành nghề', 'Không ở đâu cả'], a: 2, why: 'Tin học hỗ trợ hầu hết các ngành nghề.' },
      { q: 'Bác sĩ dùng tin học để:', o: ['Lưu hồ sơ bệnh án điện tử', 'Trồng cây', 'Nấu ăn', 'Sửa xe đạp'], a: 0, why: 'Bệnh án điện tử giúp lưu và tra cứu thông tin bệnh nhân.' } ] },
  { id: 't2', name: 'Nghề thuộc ngành tin học', tip: 'Lập trình viên, kĩ sư AI… những nghề đang rất “hot”!',
    html: S4('Tìm hiểu các nghề <b>chuyên về tin học</b>.',
      'Lập trình viên, <b>kĩ sư phần mềm</b>, quản trị mạng, chuyên gia <b>an toàn thông tin</b>, kĩ sư AI…',
      'Người làm trò chơi, ứng dụng điện thoại làm nghề gì?',
      'Ngành tin học có <span class="k">nhiều nghề hấp dẫn</span>.'),
    quiz: [
      { q: 'Người viết phần mềm, ứng dụng là:', o: ['Kế toán', 'Lập trình viên', 'Thợ may', 'Nông dân'], a: 1, why: 'Lập trình viên viết chương trình, phần mềm.' },
      { q: 'Người bảo vệ hệ thống khỏi tin tặc là:', o: ['Đầu bếp', 'Hoạ sĩ', 'Chuyên gia an toàn thông tin', 'Tài xế'], a: 2, why: 'Chuyên gia an toàn thông tin bảo vệ dữ liệu, hệ thống.' } ] },
  { id: 't3', name: 'Tin học trong các nghề khác', tip: 'Ở đâu cũng có máy tính “giúp một tay”!',
    html: S4('Ghép nghề với <b>ứng dụng tin học</b> phù hợp.',
      'Kế toán – <b>bảng tính</b>; kiến trúc sư – phần mềm <b>thiết kế</b>; nông dân – <b>nông nghiệp thông minh</b>.',
      'Giáo viên dùng tin học trong dạy học thế nào?',
      'Tin học giúp các nghề <span class="k">năng suất, hiệu quả</span>.'),
    quiz: [
      { q: 'Kế toán thường dùng phần mềm nào?', o: ['Phần mềm vẽ tranh', 'Trò chơi', 'Trình phát nhạc', 'Phần mềm bảng tính'], a: 3, why: 'Bảng tính giúp tính toán, quản lí số liệu.' },
      { q: 'Tưới cây tự động theo độ ẩm đất là ứng dụng trong:', o: ['Nông nghiệp thông minh', 'Thời trang', 'Thể thao', 'Âm nhạc'], a: 0, why: 'Cảm biến và máy tính điều khiển việc tưới cây.' } ] },
  { id: 't4', name: 'Phẩm chất cần có', tip: 'Muốn mở cửa lâu đài nghề tin học – hãy chăm học từ hôm nay!',
    html: S4('Muốn làm nghề tin học, em cần rèn luyện gì?',
      'Tư duy <b>logic</b>, cẩn thận, sáng tạo, <b>tự học</b> suốt đời, giỏi tiếng Anh, làm việc nhóm.',
      'Ngay từ bây giờ, em có thể làm gì để chuẩn bị?',
      'Học tốt <span class="k">Toán, Tin, tiếng Anh</span> là nền tảng.'),
    quiz: [
      { q: 'Phẩm chất quan trọng của người làm tin học là:', o: ['Ngại học hỏi', 'Tư duy logic, sáng tạo', 'Cẩu thả', 'Ngại làm việc nhóm'], a: 1, why: 'Tư duy logic và sáng tạo giúp giải quyết vấn đề.' },
      { q: 'Vì sao người làm tin học cần tự học suốt đời?', o: ['Vì máy tính không đổi', 'Vì không cần bằng cấp', 'Vì công nghệ thay đổi rất nhanh', 'Vì để chơi trò chơi'], a: 2, why: 'Công nghệ đổi mới liên tục nên phải học thường xuyên.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Chuẩn bị từ hôm nay cho nghề tương lai nhé!',
    html: S4('Vẽ <b>sơ đồ</b> các nghề liên quan đến tin học.',
      'Nghề <b>chuyên tin học</b> và nghề <b>ứng dụng tin học</b>.',
      'Nghề nào em thấy phù hợp với mình? Vì sao?',
      'Chuẩn bị từ hôm nay cho <span class="k">nghề tương lai</span>.'),
    quiz: [
      { q: 'Nghề nào thuộc ngành tin học?', o: ['Thợ mộc', 'Ca sĩ', 'Vận động viên', 'Kĩ sư trí tuệ nhân tạo'], a: 3, why: 'Kĩ sư AI phát triển các hệ thống trí tuệ nhân tạo.' },
      { q: 'Câu nào ĐÚNG?', o: ['Chỉ dân tin học mới cần máy tính', 'Tin học hỗ trợ hầu hết các nghề', 'Tin học không liên quan nghề', 'Máy tính thay thế mọi nghề'], a: 1, why: 'Tin học là công cụ hỗ trợ hầu hết các nghề.' } ] },
];

const KEY = [
  'Tin học ở<br><b>mọi ngành nghề</b>.',
  'Lập trình, mạng,<br><b>an toàn thông tin</b>.',
  'Tin học giúp nghề<br><b>hiệu quả</b> hơn.',
  'Logic, sáng tạo,<br><b>tự học</b>.',
  'Chuẩn bị cho<br><b>nghề tương lai</b>.',
];
