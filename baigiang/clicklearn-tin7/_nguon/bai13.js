/* ===== BÀI 13: THỰC HÀNH TỔNG HỢP – HOÀN THIỆN BÀI TRÌNH CHIẾU ===== */
const META = { key: 'bai13', num: 13, theme: 'vutru', title: 'Bài 13. Thực hành tổng hợp: Hoàn thiện bài trình chiếu', big: 'Hoàn thiện<br>bài trình chiếu',
  st2: 'Chủ đề 4 • 5 phần kiến thức cần nhớ • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng phóng tên lửa hiệu ứng cho bài trình chiếu nhé!',
  cert: 'Tin học 7 – Bài 13. Hoàn thiện bài trình chiếu', file: 'Tin7_Bai13', pass: 8 };

const mini = (x, y, c, t) => slide(x, y, 150, 100, c, txt(x + 75, y + 60, t, 26, '#fff'));
const ILL_T = {
  t1: () => svg(`${mini(40, 60, '#1982C4', '1')}${arr(200, 110, 240, 110, O, 7)}${mini(250, 60, '#FF7F11', '2')}${G(400, 60, 1, `<rect x="0" y="0" width="150" height="100" rx="12" fill="#8338EC" ${ST} opacity=".55"/>`)}${txt(475, 120, '3', 26, '#fff')}
    ${pillS(40, 230, 520, 56, '#1982C4', 'Transitions: chuyển trang', 28)}${pillS(80, 320, 440, 50, '#2DA44E', 'Fade, Push, Wipe…', 24)}`),
  t2: () => svg(`${slide(40, 30, 330, 230, '#fff', `${txt(205, 90, 'Tiêu đề', 30, '#1982C4')}${star(150, 170, 34, '#FFD60A')}${arr(190, 170, 280, 170, '#FF006E', 6)}`)}
    ${['Entrance', 'Emphasis', 'Exit'].map((t, i) => pillS(390, 40 + i*76, 190, 52, ['#2DA44E', '#FF7F11', '#E5383B'][i], t, 22)).join('')}${pillS(60, 300, 480, 54, '#8338EC', 'Animations: hiệu ứng đối tượng', 24)}`),
  t3: () => svg(`${[['#8338EC', 'Effect Options', 'Hướng, kiểu'], ['#1982C4', 'Start', 'Khi nào chạy'], ['#FF7F11', 'Duration', 'Thời gian'], ['#2DA44E', 'Animation Pane', 'Thứ tự']].map(([c, a, t], i) => pillS(30, 30 + i*92, 290, 58, c, a, 24) + txt(450, 68 + i*92, t, 26)).join('')}`),
  t4: () => svg(`${winbox(30, 30, 540, 200, 'Nguồn tham khảo', `${txt(60, 120, '• Sách giáo khoa Tin học 7', 24, O, 'start')}${txt(60, 165, '• Trang web chính thống', 24, O, 'start')}${txt(60, 210, '• Ảnh: ghi rõ tác giả', 24, O, 'start')}`, '#8338EC')}
    ${pillS(60, 280, 480, 54, '#E5383B', 'Tôn trọng bản quyền', 28)}${star(560, 380, 12, '#FFD60A')}`),
  t5: () => svg(`${vflow([['#8338EC', 'Chuẩn bị nội dung'], ['#1982C4', 'Tạo trang, chèn ảnh'], ['#FF7F11', 'Thêm hiệu ứng vừa phải'], ['#2DA44E', 'Trình chiếu, thuyết trình']], 150, 22, 300, 96, 24)}`),
};

const TOPICS = [
  { id: 't1', name: 'Hiệu ứng chuyển trang', tip: 'Chuyển trang mượt mà như phi thuyền lướt qua các hành tinh!',
    html: KT([
      '<b>Hiệu ứng chuyển trang</b> là cách trang chiếu xuất hiện khi chuyển sang trang mới.',
      'Chọn trang → thẻ <b>Transitions</b> → chọn hiệu ứng (Fade, Push, Wipe…).',
      '<b>Apply To All</b>: áp dụng hiệu ứng cho <b>tất cả</b> các trang.',
      'Có thể chỉnh <b>thời gian</b> (Duration) và cách chuyển: nháy chuột hoặc tự động sau vài giây.',
    ], 'Hiệu ứng chuyển trang ở thẻ <span class="k">Transitions</span>.'),
    quiz: [
      { q: 'Thẻ chứa các hiệu ứng chuyển trang là:', o: ['Animations', 'Transitions', 'Insert', 'Design'], a: 1, why: 'Transitions là hiệu ứng chuyển trang.' },
      { q: 'Muốn áp dụng một hiệu ứng chuyển trang cho mọi trang, em chọn:', o: ['Apply To All', 'New Slide', 'Crop', 'Delete'], a: 0, why: 'Apply To All áp dụng cho tất cả các trang.' } ] },
  { id: 't2', name: 'Hiệu ứng cho đối tượng', tip: 'Cho chữ, cho ảnh “bay vào” đúng lúc thật ấn tượng!',
    html: KT([
      '<b>Hiệu ứng động</b> làm cho chữ, hình ảnh xuất hiện, nhấn mạnh hoặc biến mất.',
      'Chọn đối tượng → thẻ <b>Animations</b> → chọn hiệu ứng.',
      'Ba nhóm: <b>Entrance</b> (xuất hiện), <b>Emphasis</b> (nhấn mạnh), <b>Exit</b> (biến mất).',
      'Nút <b>Preview</b> để xem thử hiệu ứng.',
    ], 'Hiệu ứng cho đối tượng ở thẻ <span class="k">Animations</span>.'),
    quiz: [
      { q: 'Nhóm hiệu ứng làm đối tượng xuất hiện là:', o: ['Exit', 'Emphasis', 'Entrance', 'Transitions'], a: 2, why: 'Entrance là hiệu ứng xuất hiện.' },
      { q: 'Muốn tạo hiệu ứng cho một bức ảnh trên trang chiếu, em dùng thẻ:', o: ['Animations', 'File', 'Review', 'View'], a: 0, why: 'Animations chứa hiệu ứng cho đối tượng.' } ] },
  { id: 't3', name: 'Tuỳ chỉnh hiệu ứng', tip: 'Chỉnh hiệu ứng đúng nhịp như dàn nhạc giao hưởng!',
    html: KT([
      '<b>Effect Options</b>: chọn hướng, kiểu xuất hiện (từ trái, từ dưới…).',
      '<b>Start</b>: On Click (khi nháy chuột), With Previous (cùng lúc), After Previous (sau hiệu ứng trước).',
      '<b>Duration</b>: thời gian chạy hiệu ứng; <b>Delay</b>: thời gian chờ.',
      '<b>Animation Pane</b>: xem và đổi <b>thứ tự</b> các hiệu ứng.',
    ], 'Sắp xếp hiệu ứng theo <span class="k">thứ tự hợp lí</span> với lời thuyết trình.'),
    quiz: [
      { q: 'Muốn hiệu ứng chạy ngay sau hiệu ứng trước, em chọn Start là:', o: ['On Click', 'With Previous', 'After Previous', 'Duration'], a: 2, why: 'After Previous: chạy sau hiệu ứng trước.' },
      { q: 'Muốn xem và đổi thứ tự các hiệu ứng, em mở:', o: ['Animation Pane', 'Slide Sorter', 'Page Layout', 'File Explorer'], a: 0, why: 'Animation Pane liệt kê và cho đổi thứ tự hiệu ứng.' } ] },
  { id: 't4', name: 'Nguồn tham khảo và bản quyền', tip: 'Dùng tư liệu của người khác thì nhớ ghi nguồn nhé!',
    html: KT([
      'Nội dung, hình ảnh lấy từ Internet, sách báo là <b>sản phẩm của người khác</b>.',
      'Cần <b>ghi rõ nguồn</b> (tên sách, trang web, tác giả) – thường ở trang cuối.',
      'Ưu tiên tư liệu từ <b>nguồn tin cậy</b>, chính thống.',
      'Không sao chép nguyên văn rồi nhận là của mình → <b>vi phạm bản quyền</b>.',
    ], 'Ghi nguồn là <span class="k">tôn trọng bản quyền</span> và người sáng tạo.'),
    quiz: [
      { q: 'Khi dùng ảnh từ Internet trong bài trình chiếu, em cần:', o: ['Ghi rõ nguồn ảnh', 'Xoá tên tác giả', 'Nhận là ảnh mình chụp', 'Không cần làm gì'], a: 0, why: 'Cần ghi nguồn để tôn trọng bản quyền.' },
      { q: 'Trang ghi nguồn tham khảo thường đặt ở:', o: ['Trang tiêu đề', 'Giữa bài', 'Cuối bài trình chiếu', 'Không cần có'], a: 2, why: 'Nguồn tham khảo thường ở trang cuối.' } ] },
  { id: 't5', name: 'Hoàn thiện và thuyết trình', tip: 'Chuẩn bị kĩ thì thuyết trình tự tin!',
    html: KT([
      'Các bước: <b>chuẩn bị nội dung</b> → tạo trang, chèn ảnh → định dạng → thêm hiệu ứng.',
      'Dùng hiệu ứng <b>vừa phải</b>, phù hợp; tránh quá nhiều làm rối mắt, mất tập trung.',
      '<b>Kiểm tra lỗi</b> chính tả, trình chiếu thử (<b>F5</b>) trước khi trình bày.',
      'Thuyết trình: nói <b>rõ ràng, tự tin</b>, nhìn người nghe, không đọc nguyên văn trang chiếu.',
    ], 'Hiệu ứng là để <span class="k">hỗ trợ nội dung</span>, không phải để “làm màu”.'),
    quiz: [
      { q: 'Dùng quá nhiều hiệu ứng trong bài trình chiếu sẽ:', o: ['Làm người xem rối mắt, mất tập trung', 'Bài chắc chắn đạt điểm cao', 'Nội dung rõ ràng hơn', 'Máy chạy nhanh hơn'], a: 0, why: 'Quá nhiều hiệu ứng gây rối mắt, mất tập trung.' },
      { q: 'Khi thuyết trình, em nên:', o: ['Đọc nguyên văn từng chữ trên màn hình', 'Quay lưng về người nghe', 'Nói rõ ràng, tự tin, nhìn người nghe', 'Nói thật nhỏ'], a: 2, why: 'Thuyết trình cần rõ ràng, tự tin, giao lưu với người nghe.' } ] },
];

const KEY = [
  '<b>Transitions</b>: chuyển trang; Apply To All.',
  '<b>Animations</b>: Entrance, Emphasis, Exit.',
  'Effect Options, <b>Start</b>, Duration, Animation Pane.',
  '<b>Ghi nguồn</b>, tôn trọng bản quyền.',
  'Hiệu ứng <b>vừa phải</b>, thuyết trình tự tin.',
];
