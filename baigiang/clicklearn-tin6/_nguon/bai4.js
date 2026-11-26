/* ===== BÀI 4: MẠNG MÁY TÍNH ===== */
const META = { key: 'bai4', num: 4, title: 'Bài 4. Mạng máy tính', big: 'Mạng<br>máy tính',
  st2: 'Chủ đề 2 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Các máy tính nắm tay nhau thành mạng – cùng khám phá nhé!',
  cert: 'Tin học 6 – Bài 4. Mạng máy tính', file: 'Tin6_Bai4', pass: 8 };

const pcS = (x, y, s = .45) => laptop(x, y, s);
const ILL_T = {
  t1: () => svg(`${dline(300, 210, 110, 90)}${dline(300, 210, 490, 90)}${dline(300, 210, 110, 320)}${dline(300, 210, 490, 320)}
    ${pcS(55, 55)}${pcS(435, 55)}${pcS(55, 285)}${G(490, 320, 1, `<rect x="-60" y="-34" width="120" height="68" rx="12" fill="#ADB5BD" ${ST}/><rect x="-40" y="-60" width="80" height="30" rx="6" fill="#fff" ${ST}/>`)}
    ${pillS(220, 180, 160, 56, '#FF7F11', 'Kết nối', 26)}${txt(490, 395, 'Máy in', 24)}`),
  t2: () => svg(`${globe(300, 160, 80)}${pillS(30, 290, 260, 50, '#1982C4', 'Trao đổi dữ liệu', 22)}${pillS(310, 290, 260, 50, '#2DA44E', 'Dùng chung thiết bị', 22)}
    ${pillS(130, 355, 340, 50, '#8338EC', 'Mạng máy tính', 26)}${star(560, 50, 14, '#FFD60A')}${star(40, 50, 12, '#FF006E')}`),
  t3: () => svg(`${vflow([['#1982C4', 'Thiết bị đầu cuối'], ['#FF7F11', 'Thiết bị kết nối'], ['#2DA44E', 'Phần mềm mạng']], 150, 50, 300, 120, 26)}
    ${txt(70, 400, 'Máy tính, máy in', 18, O, 'start')}${txt(530, 400, 'Switch, router, cáp', 18, O, 'end')}`),
  t4: () => svg(`${G(160, 200, 1, `<path d="M-90 40 Q-40 -60 0 40 Q40 140 90 40" fill="none" stroke="#2DA44E" stroke-width="14" stroke-linecap="round"/>`)}${txt(160, 330, 'Có dây', 32)}
    ${waves(430, 170, '#1982C4', 3)}${txt(430, 330, 'Không dây', 32)}${pillS(330, 360, 220, 44, '#1982C4', 'Wi-Fi, Bluetooth', 20)}${pillS(50, 360, 220, 44, '#2DA44E', 'Dây cáp mạng', 20)}`),
  t5: () => svg(`${tlist([[1, '#1982C4', 'Máy tính kết nối với nhau'], [1, '#2DA44E', 'Chia sẻ dữ liệu, thiết bị'], [1, '#FF7F11', 'Đầu cuối – kết nối – phần mềm'], [1, '#8338EC', 'Mạng có dây và không dây']], 60, 96, 22)}`),
};

const TOPICS = [
  { id: 't1', name: 'Phòng máy của em', tip: 'Cả lớp in bài chỉ với một máy in – nhờ có mạng đấy!',
    html: S4('Quan sát phòng tin học: các máy được <b>nối</b> với nhau thế nào?',
      'Các máy nối qua dây cáp hoặc Wi-Fi, dùng chung một <b>máy in</b>.',
      'Không có kết nối thì việc in bài sẽ khó khăn ra sao?',
      'Các máy tính kết nối với nhau tạo thành <span class="k">mạng máy tính</span>.'),
    quiz: [
      { q: 'Nhờ đâu cả phòng máy có thể dùng chung một máy in?', o: ['Nhờ bàn phím', 'Nhờ mạng máy tính', 'Nhờ màn hình', 'Nhờ chuột'], a: 1, why: 'Mạng máy tính cho phép các máy dùng chung thiết bị.' },
      { q: 'Các máy tính trong mạng có thể kết nối bằng:', o: ['Dây cáp hoặc sóng Wi-Fi', 'Dây phơi đồ', 'Sợi chỉ', 'Băng dính'], a: 0, why: 'Máy tính kết nối bằng dây cáp mạng hoặc sóng không dây.' } ] },
  { id: 't2', name: 'Mạng máy tính là gì?', tip: 'Mạng giúp các máy "trò chuyện" và chia sẻ với nhau!',
    html: S4('Nêu lợi ích khi các máy tính <b>kết nối</b> với nhau.',
      'Mạng máy tính là nhóm máy tính, thiết bị <b>kết nối</b> để trao đổi dữ liệu.',
      'Em có thể chia sẻ gì qua mạng? (tệp, máy in, kết nối Internet…)',
      'Mạng giúp <span class="k">chia sẻ dữ liệu</span> và dùng chung thiết bị.'),
    quiz: [
      { q: 'Lợi ích của mạng máy tính là:', o: ['Làm máy chạy chậm', 'Tốn điện hơn', 'Chia sẻ dữ liệu, thiết bị', 'Không có lợi ích'], a: 2, why: 'Mạng giúp trao đổi dữ liệu và dùng chung tài nguyên.' },
      { q: 'Mạng máy tính gồm:', o: ['Một máy tính duy nhất', 'Chỉ có máy in', 'Chỉ có dây điện', 'Các máy tính, thiết bị kết nối với nhau'], a: 3, why: 'Mạng là nhiều máy tính và thiết bị được kết nối.' } ] },
  { id: 't3', name: 'Thành phần của mạng', tip: 'Ba thành phần: thiết bị đầu cuối, thiết bị kết nối, phần mềm mạng!',
    html: S4('Phân loại các thiết bị trong mạng.',
      '<b>Thiết bị đầu cuối</b>: máy tính, điện thoại, máy in.',
      '<b>Thiết bị kết nối</b>: dây cáp, switch, router. Cùng với <b>phần mềm mạng</b>.',
      'Mạng gồm: <span class="k">đầu cuối – kết nối – phần mềm</span>.'),
    quiz: [
      { q: 'Thiết bị nào là thiết bị kết nối?', o: ['Máy in', 'Bộ định tuyến (router)', 'Máy tính bảng', 'Điện thoại'], a: 1, why: 'Router dùng để kết nối các thiết bị và các mạng.' },
      { q: 'Máy tính trong mạng thuộc nhóm:', o: ['Thiết bị kết nối', 'Phần mềm mạng', 'Thiết bị đầu cuối', 'Dây cáp'], a: 2, why: 'Máy tính là thiết bị đầu cuối của mạng.' } ] },
  { id: 't4', name: 'Có dây và không dây', tip: 'Wi-Fi là mạng không dây – không thấy dây mà vẫn kết nối!',
    html: S4('So sánh mạng <b>có dây</b> và <b>không dây</b>.',
      'Có dây: nối bằng <b>dây cáp</b>. Không dây: dùng <b>sóng</b> (Wi-Fi, Bluetooth).',
      'Ở nhà em dùng mạng nào để điện thoại vào Internet?',
      'Mạng không dây giúp thiết bị <span class="k">di chuyển</span> dễ dàng.'),
    quiz: [
      { q: 'Wi-Fi là kiểu kết nối:', o: ['Có dây', 'Bằng dây điện', 'Bằng cáp quang', 'Không dây'], a: 3, why: 'Wi-Fi truyền dữ liệu bằng sóng – không dây.' },
      { q: 'Ưu điểm của mạng không dây là:', o: ['Thiết bị di chuyển dễ dàng', 'Cần rất nhiều dây', 'Không kết nối được', 'Chỉ dùng cho máy in'], a: 0, why: 'Không cần dây nên thiết bị dễ di chuyển.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn nhanh: khái niệm, lợi ích, thành phần mạng!',
    html: S4('Tóm tắt bài bằng 3 ý chính.',
      'Mạng máy tính: các máy, thiết bị <b>kết nối</b> để trao đổi dữ liệu.',
      'Gồm thiết bị đầu cuối, thiết bị kết nối, phần mềm mạng.',
      'Có <span class="k">mạng có dây</span> và <span class="k">mạng không dây</span>.'),
    quiz: [
      { q: 'Switch (bộ chuyển mạch) là:', o: ['Thiết bị đầu cuối', 'Phần mềm', 'Thiết bị kết nối', 'Máy in'], a: 2, why: 'Switch dùng để nối các máy tính trong mạng.' },
      { q: 'Câu nào đúng?', o: ['Mạng chỉ có dây', 'Mạng giúp dùng chung máy in', 'Mạng không có phần mềm', 'Mạng làm mất dữ liệu'], a: 1, why: 'Mạng cho phép nhiều máy dùng chung thiết bị.' } ] },
];

const KEY = [
  'Các máy <b>kết nối</b><br>tạo thành mạng.',
  'Mạng giúp<br><b>chia sẻ</b>.',
  'Đầu cuối –<br><b>kết nối</b> – phần mềm.',
  '<b>Có dây</b> và<br><b>không dây</b>.',
  'Mạng: kết nối<br>để <b>trao đổi</b>.',
];
