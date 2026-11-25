/* ===== BÀI 5: SỬ DỤNG MÁY THU HÌNH ===== */
const META = { key: 'bai5', num: 5, title: 'Bài 5. Sử dụng máy thu hình', big: 'SỬ DỤNG<br>MÁY THU HÌNH',
  st2: 'Công nghệ 3 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Ti vi vừa có hình vừa có tiếng – cùng tìm hiểu nhé!',
  cert: 'CÔNG NGHỆ 3 – BÀI 5: SỬ DỤNG MÁY THU HÌNH', file: 'Bai5', pass: 8 };

const ILL_T = {
  t1: () => svg(`${tv(140, 70, 1)}${pillS(130, 350, 340, 46, '#8338EC', 'Ti vi = máy thu hình', 22)}
    ${star(60, 60, 16, '#FFD60A')}${star(550, 80, 14, '#FF006E')}${star(560, 300, 12, '#2EC4B6')}`),
  t2: () => svg(`${tower(80, 210, .9, '#1982C4')}${waves(150, 170, '#1982C4')}${tv(262, 106, .66)}${eye(548, 150, .6)}${ear(552, 262, .7)}
    ${pillS(14, 30, 110, 42, '#E5383B', 'VTV', 22)}
    ${pillS(8, 340, 196, 42, '#1982C4', 'Đài truyền hình', 20)}${pillS(272, 330, 186, 42, '#FF7F11', 'Máy thu hình', 20)}`),
  t3: () => svg(`${tv(30, 70, .4)}${remote(240, 56, 1)}
    ${lab(300, 94, 400, 50, 170, '#E5383B', 'Nút nguồn', 22)}${lab(330, 160, 400, 130, 170, '#1982C4', 'Nút số', 22)}
    ${lab(274, 300, 30, 240, 160, '#FF7F11', 'Âm lượng', 22)}${lab(326, 300, 400, 300, 180, '#2EC4B6', 'Chuyển kênh', 22)}`),
  t4: () => svg(`${kid(90, 220, .9)}${tv(380, 110, .55)}${arr(160, 330, 380, 330, '#2DA44E')}
    ${pillS(150, 360, 260, 44, '#2DA44E', 'Ngồi xa màn hình', 22)}${clock(250, 120, .9)}${pillS(170, 20, 260, 44, '#FF006E', 'Không xem quá lâu', 22)}`),
  t5: () => svg(`<rect x="40" y="30" width="520" height="360" rx="30" fill="#fff" ${ST}/><rect x="40" y="30" width="520" height="70" rx="30" fill="#8338EC" ${ST}/>
    ${txt(300, 78, 'LỊCH XEM TI VI CỦA EM', 28, '#fff')}
    ${pillS(70, 130, 130, 44, '#FF7F11', 'Chiều', 22)}${txt(220, 162, 'Hoạt hình – 30 phút', 26, O, 'start')}
    ${pillS(70, 210, 130, 44, '#1982C4', 'Tối', 22)}${txt(220, 242, 'Khoa học vui – 30 phút', 26, O, 'start')}
    ${pillS(70, 290, 130, 44, '#2DA44E', 'Đi ngủ', 22)}${txt(220, 322, 'Tắt ti vi', 26, O, 'start')}${tick(500, 312, .6)}`),
};

const TOPICS = [
  { id: 't1', name: 'Chương trình em yêu', tip: 'Em thích chương trình ti vi nào nhất?',
    html: S4('Kể tên chương trình ti vi em thích.',
      'Em xem ở kênh nào? Vào lúc nào?',
      'Chia sẻ với bạn vì sao em thích.',
      'Ti vi còn gọi là <span class="k">máy thu hình</span>.'),
    quiz: [
      { q: 'Máy thu hình còn được gọi là:', o: ['Cái đài', 'Máy giặt', 'Ti vi', 'Loa kéo'], a: 2, why: 'Máy thu hình chính là ti vi.' },
      { q: 'Máy thu hình cho em:', o: ['Xem hình ảnh và nghe âm thanh', 'Chỉ nghe tiếng', 'Chỉ đọc chữ', 'Làm mát phòng'], a: 0, why: 'Ti vi có cả hình ảnh và âm thanh.' } ] },
  { id: 't2', name: 'Đài truyền hình', tip: 'Đài truyền hình phát – ti vi nhà em thu và hiện hình!',
    html: S4('Tìm hiểu đường đi của hình ảnh, âm thanh.',
      '<span class="k">Đài truyền hình</span> phát tín hiệu → <span class="k">máy thu hình</span> hiện hình, phát tiếng.',
      'Kể tên kênh: <b>VTV1</b> thời sự, <b>VTV2</b> khoa học – giáo dục, <b>VTV3</b> thể thao – giải trí.',
      'Ti vi có <b>màn hình</b> (hiện hình) và <b>loa</b> (phát tiếng).'),
    quiz: [
      { q: 'Đài Truyền hình Việt Nam viết tắt là:', o: ['VOV', 'VNA', 'VPN', 'VTV'], a: 3, why: 'VTV là Đài Truyền hình Việt Nam.' },
      { q: 'Bộ phận nào của ti vi hiện ra hình ảnh?', o: ['Loa', 'Màn hình', 'Dây điện', 'Chân đế'], a: 1, why: 'Màn hình hiện ra hình ảnh.' } ] },
  { id: 't3', name: 'Dùng điều khiển ti vi', tip: 'Nút đỏ bật tắt, VOL chỉnh tiếng, CH đổi kênh!',
    html: S4('Quan sát điều khiển, tìm các nút.',
      '<span class="k">Nút nguồn</span> bật/tắt; <span class="k">nút số</span> chọn kênh; <span class="k">CH</span> chuyển kênh; <span class="k">VOL</span> âm lượng.',
      'Thực hành: bật → chọn kênh → chỉnh tiếng.',
      'Xem xong nhớ <b>tắt ti vi</b> bằng nút nguồn.'),
    quiz: [
      { q: 'Muốn tăng âm lượng, em bấm nút:', o: ['CH +', 'Nút số 0', 'VOL +', 'Nút nguồn'], a: 2, why: 'VOL + tăng âm lượng, VOL − giảm âm lượng.' },
      { q: 'Kênh em thích ở số 3. Cách chọn nhanh nhất là bấm:', o: ['Nút số 3', 'VOL −', 'Nút tắt tiếng', 'Nút nguồn'], a: 0, why: 'Bấm nút số để chọn ngay kênh đó.' } ] },
  { id: 't4', name: 'Xem ti vi khoa học', tip: 'Ngồi xa màn hình, xem vừa đủ – mắt luôn sáng khoẻ!',
    html: S4('Tình huống: Bin ngồi sát ti vi, xem cả buổi.',
      'Ngồi <b>cách xa</b> màn hình, ngang tầm mắt; không xem <b>quá lâu</b>.',
      'Nhắc nhau: tiếng vừa phải, chọn chương trình <b>hợp lứa tuổi</b>.',
      'Xem xong <span class="k">tắt ti vi</span>, nghỉ mắt, vận động.'),
    quiz: [
      { q: 'Bin ngồi sát màn hình ti vi. Em khuyên Bin:', o: ['Ngồi sát hơn nữa', 'Ngồi lùi ra xa màn hình', 'Nằm xem cho thoải mái', 'Mở tiếng thật to'], a: 1, why: 'Ngồi xa màn hình giúp bảo vệ mắt.' },
      { q: 'Việc nào thể hiện xem ti vi đúng cách?', o: ['Xem suốt cả ngày', 'Vừa ăn vừa xem thật lâu', 'Để tiếng thật to', 'Xem có giờ giấc, hợp lứa tuổi'], a: 3, why: 'Xem có giờ giấc, chọn chương trình hợp lứa tuổi.' } ] },
  { id: 't5', name: 'Lịch xem ti vi', tip: 'Lập lịch xem ti vi để vừa học vừa chơi thật vui!',
    html: S4('Lập lịch xem ti vi trong một ngày.',
      'Chọn 1–2 chương trình bổ ích, mỗi lần xem <b>không quá lâu</b>.',
      'Chia sẻ lịch với bạn và người thân.',
      'Ti vi giúp em <span class="k">học hỏi, giải trí</span> – xem có chừng mực!'),
    quiz: [
      { q: 'Máy thu thanh khác máy thu hình ở chỗ:', o: ['Máy thu thanh có màn hình to hơn', 'Máy thu thanh chỉ nghe, không có hình', 'Hai máy giống hệt nhau', 'Ti vi không có tiếng'], a: 1, why: 'Máy thu thanh chỉ có âm thanh; ti vi có cả hình và tiếng.' },
      { q: 'Nút CH + / CH − trên điều khiển dùng để:', o: ['Tăng giảm âm lượng', 'Bật tắt ti vi', 'Chuyển kênh', 'Tắt tiếng'], a: 2, why: 'CH là viết tắt của kênh (channel).' } ] },
];

const KEY = [
  'Máy thu hình = <b>ti vi</b>.',
  '<b>Đài truyền hình</b> phát → <b>ti vi</b> thu. Màn hình, loa.',
  'Nút <b>nguồn</b>, nút <b>số</b>, <b>CH</b> kênh, <b>VOL</b> tiếng.',
  'Ngồi <b>xa</b> màn hình, không xem <b>quá lâu</b>.',
  'Xem ti vi <b>có giờ giấc</b>, bổ ích.',
];
