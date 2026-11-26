/* ===== BÀI 2: THÔNG TIN TRONG MÔI TRƯỜNG SỐ ===== */
const META = { key: 'bai2', num: 2, theme: 'vutru', title: 'Bài 2. Thông tin trong môi trường số', big: 'Thông tin trong<br>môi trường số',
  st2: 'Chủ đề 2 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng bay vào vũ trụ thông tin số nhé!',
  cert: 'Tin học 8 – Bài 2. Thông tin trong môi trường số', file: 'Tin8_Bai2', pass: 8 };

const ILL_T = {
  t1: () => svg(`${smart(140, 220, 1.1, `<text x="0" y="-20" text-anchor="middle" font-size="22" fill="${O}" ${F}>Tin tức</text>${apps()}`)}${laptop(300, 110, .95)}
    ${pillS(320, 300, 250, 52, '#8338EC', 'Thông tin số', 26)}${star(560, 50, 14, '#FFD60A')}${star(40, 60, 12, '#FF006E')}`),
  t2: () => svg(`${globe(300, 200, 80)}${[['#FF006E', 'Truy cập từ xa', 20, 40], ['#1982C4', 'Dễ sao chép', 360, 40], ['#2DA44E', 'Lưu trữ rất lớn', 20, 330], ['#FF7F11', 'Dễ tìm kiếm', 360, 330]].map(([c, t, x, y]) => pillS(x, y, 220, 50, c, t, 22)).join('')}
    ${star(560, 200, 12, '#FFD60A')}${star(40, 200, 12, '#FFD60A')}`),
  t3: () => svg(`${winbox(30, 30, 540, 150, 'moet.gov.vn', `${shieldI(110, 112, .55, '#2DA44E')}${txt(190, 100, 'Nguồn chính thống', 26, O, 'start')}${txt(190, 140, 'Có tác giả, ngày đăng', 22, '#1982C4', 'start')}`, '#2DA44E')}
    ${winbox(30, 220, 540, 150, 'tin-hot-123.xyz', `${warn(110, 300, 1.2)}${txt(190, 290, 'Không rõ nguồn', 26, O, 'start')}${txt(190, 330, 'Giật tít, câu view', 22, '#E5383B', 'start')}`, '#E5383B')}`),
  t4: () => svg(`${mag(150, 150, 1.1)}${doc(330, 150, .9)}${doc(430, 170, .9)}${doc(530, 150, .9)}
    ${pillS(60, 320, 480, 56, '#1982C4', 'Đối chiếu nhiều nguồn', 28)}${star(560, 50, 12, '#FFD60A')}`),
  t5: () => svg(`${tlist([[1, '#8338EC', 'Thông tin số: dễ chia sẻ, lưu lâu'], [1, '#1982C4', 'Độ tin cậy rất khác nhau'], [1, '#2DA44E', 'Ưu tiên nguồn chính thống'], [0, '#E5383B', 'Tin ngay khi chưa kiểm chứng']], 60, 96, 22)}`),
};

const TOPICS = [
  { id: 't1', name: 'Thông tin số quanh em', tip: 'Tin tức, ảnh, video trên điện thoại đều là thông tin số đó!',
    html: S4('Kể tên những <b>thông tin</b> em xem trên điện thoại, máy tính hằng ngày.',
      'Tin tức, ảnh, video, bài học trực tuyến… được lưu dưới dạng <b>số</b>.',
      'Em thường lấy thông tin số từ đâu? Có phải tin nào cũng đúng?',
      'Thông tin được lưu và truyền bằng thiết bị số gọi là <span class="k">thông tin số</span>.'),
    quiz: [
      { q: 'Đâu là thông tin số?', o: ['Bức thư viết tay', 'Bài báo in trên giấy', 'Video bài giảng trên mạng', 'Tấm bảng đen'], a: 2, why: 'Video trên mạng được lưu và truyền bằng thiết bị số.' },
      { q: 'Thông tin số được lưu trữ và truyền đi nhờ:', o: ['Thiết bị số', 'Bút và giấy', 'Loa phát thanh', 'Bảng tin của lớp'], a: 0, why: 'Máy tính, điện thoại… là thiết bị số lưu và truyền thông tin số.' } ] },
  { id: 't2', name: 'Đặc điểm của thông tin số', tip: 'Thông tin số bay khắp nơi nhanh như tên lửa!',
    html: S4('Tìm điểm khác nhau giữa <b>sách giấy</b> và <b>sách điện tử</b>.',
      'Thông tin số: <b>nhiều người</b> truy cập cùng lúc, <b>dễ sao chép</b>, chia sẻ.',
      'Được lưu trữ <b>rất lớn</b>, có công cụ tìm kiếm; có thể tồn tại rất lâu.',
      'Thông tin số có <span class="k">bản quyền</span> và độ tin cậy <b>rất khác nhau</b>.'),
    quiz: [
      { q: 'Đặc điểm nào là của thông tin số?', o: ['Chỉ một người xem được', 'Không thể sao chép', 'Không tìm kiếm được', 'Dễ sao chép, chia sẻ'], a: 3, why: 'Thông tin số dễ dàng nhân bản và chia sẻ qua mạng.' },
      { q: 'Vì sao cần chú ý bản quyền thông tin số?', o: ['Vì nó luôn miễn phí', 'Vì có tác giả, chủ sở hữu', 'Vì nó không có thật', 'Vì nó tự mất đi'], a: 1, why: 'Thông tin số có tác giả nên phải tôn trọng bản quyền.' } ] },
  { id: 't3', name: 'Thông tin nào đáng tin?', tip: 'Xem kĩ “địa chỉ phóng” – trang web của cơ quan chính thống nhé!',
    html: S4('So sánh 2 trang web cùng nói về <b>lịch thi</b>: em tin trang nào?',
      'Đáng tin: rõ <b>nguồn gốc</b>, <b>tác giả</b>, ngày đăng; trang của cơ quan, tổ chức uy tín.',
      'Tin giật tít, không rõ nguồn có nên chia sẻ ngay không? Vì sao?',
      'Ưu tiên <span class="k">nguồn chính thống</span> như trang .gov.vn, .edu.vn.'),
    quiz: [
      { q: 'Nguồn thông tin nào đáng tin cậy nhất?', o: ['Trang web của Bộ Giáo dục', 'Bài đăng ẩn danh', 'Tin nhắn lạ', 'Trang có tiêu đề giật gân'], a: 0, why: 'Trang của cơ quan nhà nước là nguồn chính thống.' },
      { q: 'Dấu hiệu của thông tin đáng tin là:', o: ['Có nhiều lượt thích', 'Có chữ in hoa nổi bật', 'Rõ tác giả và nguồn gốc', 'Được bạn bè gửi'], a: 2, why: 'Thông tin rõ tác giả, nguồn gốc, thời gian thì đáng tin hơn.' } ] },
  { id: 't4', name: 'Kiểm chứng tin đồn', tip: 'Gặp tin lạ? Đừng vội “bấm chia sẻ”, hãy kiểm tra trước!',
    html: S4('Em nhận tin “<b>Mai được nghỉ học</b>” trên mạng. Em sẽ làm gì?',
      'Kiểm tra trên <b>trang web của trường</b>, hỏi thầy cô; <b>đối chiếu</b> nhiều nguồn.',
      'Chia sẻ tin chưa kiểm chứng có thể gây hại thế nào?',
      'Chỉ tin và chia sẻ khi đã <span class="k">kiểm chứng</span> từ nguồn tin cậy.'),
    quiz: [
      { q: 'Thấy tin “sắp có bão rất lớn” trên mạng, em nên:', o: ['Chia sẻ ngay cho mọi người', 'Xem trang dự báo chính thức', 'Tin ngay', 'Bình luận lan truyền'], a: 1, why: 'Cần kiểm chứng ở nguồn chính thức trước khi tin.' },
      { q: 'Cách tốt để kiểm chứng một thông tin là:', o: ['Xem có nhiều người thích', 'Hỏi người lạ', 'Đọc tiêu đề là đủ', 'Đối chiếu với nhiều nguồn'], a: 3, why: 'So sánh nhiều nguồn tin cậy giúp biết tin đúng hay sai.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn lại: đặc điểm thông tin số và cách chọn tin đáng tin!',
    html: S4('Nêu 3 ý chính em học được hôm nay.',
      'Thông tin số: dễ <b>truy cập, sao chép, chia sẻ</b>, lưu trữ lớn và lâu.',
      'Độ tin cậy khác nhau → xem <b>nguồn gốc, tác giả, thời gian</b>.',
      'Luôn <span class="k">kiểm chứng</span> trước khi tin và chia sẻ.'),
    quiz: [
      { q: 'Câu nào SAI về thông tin số?', o: ['Dễ chia sẻ', 'Có thể lưu rất lâu', 'Luôn chính xác 100%', 'Có bản quyền'], a: 2, why: 'Thông tin số có độ tin cậy khác nhau, không phải lúc nào cũng đúng.' },
      { q: 'Trước khi chia sẻ một tin trên mạng, em cần:', o: ['Kiểm chứng nguồn tin', 'Thêm biểu tượng cảm xúc', 'Đổi tiêu đề cho hấp dẫn', 'Gửi cho thật nhiều người'], a: 0, why: 'Kiểm chứng giúp tránh lan truyền tin sai.' } ] },
];

const KEY = [
  'Thông tin lưu bằng<br>thiết bị số là<br><b>thông tin số</b>.',
  'Dễ <b>truy cập</b>,<br><b>sao chép</b>, chia sẻ.',
  'Ưu tiên<br><b>nguồn chính thống</b>.',
  '<b>Đối chiếu</b><br>nhiều nguồn tin.',
  'Kiểm chứng rồi<br>mới <b>chia sẻ</b>.',
];
