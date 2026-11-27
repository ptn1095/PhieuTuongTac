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
    html: S4Q(['Kể những <b>thông tin</b> em xem trên điện thoại, máy tính.', 'Gợi ý: tin tức, video, bài học…'],
      ['Những thông tin đó được lưu dưới dạng gì?', 'Dạng <b>số</b> trong thiết bị số.'],
      ['Có phải tin nào trên mạng cũng đúng?', 'Không. Cần xem kĩ nguồn tin.'],
      ['<b>Thông tin số</b>: lưu, truyền bằng thiết bị số.', 'Ví dụ: tin tức, ảnh, video trực tuyến.', 'Không phải tin nào cũng <span class="k">đáng tin</span>.']),
    quiz: [
      { q: 'Đâu là thông tin số?', o: ['Bức thư viết tay', 'Bài báo in trên giấy', 'Video bài giảng trên mạng', 'Tấm bảng đen'], a: 2, why: 'Video trên mạng được lưu và truyền bằng thiết bị số.' },
      { q: 'Thông tin số được lưu trữ và truyền đi nhờ:', o: ['Thiết bị số', 'Bút và giấy', 'Loa phát thanh', 'Bảng tin của lớp'], a: 0, why: 'Máy tính, điện thoại… là thiết bị số lưu và truyền thông tin số.' } ] },
  { id: 't2', name: 'Đặc điểm của thông tin số', tip: 'Thông tin số bay khắp nơi nhanh như tên lửa!',
    html: S4Q(['Tìm điểm khác nhau giữa <b>sách giấy</b> và <b>sách điện tử</b>.', ''],
      ['Thông tin số có đặc điểm gì nổi bật?', 'Nhiều người truy cập cùng lúc, dễ sao chép, chia sẻ.'],
      ['Còn đặc điểm nào khác?', 'Lưu trữ rất lớn, dễ tìm kiếm, có thể tồn tại rất lâu.'],
      ['Dễ <b>truy cập, sao chép, chia sẻ</b>.', 'Lưu trữ <b>lớn</b>, dễ tìm kiếm.', 'Có <span class="k">bản quyền</span>, độ tin cậy khác nhau.']),
    quiz: [
      { q: 'Đặc điểm nào là của thông tin số?', o: ['Chỉ một người xem được', 'Không thể sao chép', 'Không tìm kiếm được', 'Dễ sao chép, chia sẻ'], a: 3, why: 'Thông tin số dễ dàng nhân bản và chia sẻ qua mạng.' },
      { q: 'Vì sao cần chú ý bản quyền thông tin số?', o: ['Vì nó luôn miễn phí', 'Vì có tác giả, chủ sở hữu', 'Vì nó không có thật', 'Vì nó tự mất đi'], a: 1, why: 'Thông tin số có tác giả nên phải tôn trọng bản quyền.' } ] },
  { id: 't3', name: 'Thông tin nào đáng tin?', tip: 'Xem kĩ “địa chỉ phóng” – trang web của cơ quan chính thống nhé!',
    html: S4Q(['Hai trang web cùng nói về <b>lịch thi</b>: em tin trang nào?', ''],
      ['Thông tin đáng tin có dấu hiệu gì?', 'Rõ nguồn gốc, tác giả, ngày đăng; của cơ quan uy tín.'],
      ['Tin giật tít, không rõ nguồn có nên chia sẻ?', 'Không. Có thể là tin sai, gây hiểu lầm.'],
      ['Xem <b>nguồn gốc, tác giả, ngày đăng</b>.', 'Tin giật tít thường <b>kém tin cậy</b>.', 'Ưu tiên <span class="k">.gov.vn, .edu.vn</span>.']),
    quiz: [
      { q: 'Nguồn thông tin nào đáng tin cậy nhất?', o: ['Trang web của Bộ Giáo dục', 'Bài đăng ẩn danh', 'Tin nhắn lạ', 'Trang có tiêu đề giật gân'], a: 0, why: 'Trang của cơ quan nhà nước là nguồn chính thống.' },
      { q: 'Dấu hiệu của thông tin đáng tin là:', o: ['Có nhiều lượt thích', 'Có chữ in hoa nổi bật', 'Rõ tác giả và nguồn gốc', 'Được bạn bè gửi'], a: 2, why: 'Thông tin rõ tác giả, nguồn gốc, thời gian thì đáng tin hơn.' } ] },
  { id: 't4', name: 'Kiểm chứng tin đồn', tip: 'Gặp tin lạ? Đừng vội “bấm chia sẻ”, hãy kiểm tra trước!',
    html: S4Q(['Nhận tin <b>"Mai được nghỉ học"</b> trên mạng. Em làm gì?', ''],
      ['Làm sao biết tin này đúng hay sai?', 'Xem trang web trường, hỏi thầy cô, đối chiếu nhiều nguồn.'],
      ['Chia sẻ tin chưa kiểm chứng gây hại gì?', 'Lan truyền tin sai, gây hoang mang.'],
      ['<b>Đối chiếu</b> nhiều nguồn tin.', 'Hỏi người có <b>trách nhiệm</b>.', 'Kiểm chứng rồi <span class="k">mới chia sẻ</span>.']),
    quiz: [
      { q: 'Thấy tin “sắp có bão rất lớn” trên mạng, em nên:', o: ['Chia sẻ ngay cho mọi người', 'Xem trang dự báo chính thức', 'Tin ngay', 'Bình luận lan truyền'], a: 1, why: 'Cần kiểm chứng ở nguồn chính thức trước khi tin.' },
      { q: 'Cách tốt để kiểm chứng một thông tin là:', o: ['Xem có nhiều người thích', 'Hỏi người lạ', 'Đọc tiêu đề là đủ', 'Đối chiếu với nhiều nguồn'], a: 3, why: 'So sánh nhiều nguồn tin cậy giúp biết tin đúng hay sai.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn lại: đặc điểm thông tin số và cách chọn tin đáng tin!',
    html: S4Q(['Nêu <b>3 ý chính</b> em học được hôm nay.', ''],
      ['Thông tin số có đặc điểm gì?', 'Dễ truy cập, sao chép, chia sẻ; lưu trữ lớn và lâu.'],
      ['Làm sao chọn được tin đáng tin?', 'Xem nguồn gốc, tác giả, thời gian; đối chiếu nhiều nguồn.'],
      ['<b>Thông tin số</b>: dễ chia sẻ, lưu lâu.', 'Độ tin cậy <b>khác nhau</b>.', 'Luôn <span class="k">kiểm chứng</span> trước khi tin.']),
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
