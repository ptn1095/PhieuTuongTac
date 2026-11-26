/* ===== BÀI 11a: SỬ DỤNG BẢN MẪU TẠO BÀI TRÌNH CHIẾU ===== */
const META = { key: 'bai11a', num: '11a', theme: 'tuyet', title: 'Bài 11a. Sử dụng bản mẫu tạo bài trình chiếu', big: 'Bản mẫu tạo<br>bài trình chiếu',
  st2: 'Chủ đề 4 • Trình chiếu • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng dựng bài trình chiếu mùa đông thật nhanh bằng bản mẫu nhé!',
  cert: 'Tin học 8 – Bài 11a. Sử dụng bản mẫu tạo bài trình chiếu', file: 'Tin8_Bai11a', pass: 8 };

const tpl = (x, y, c1, c2, sel) => slide(x, y, 160, 100, c1, `<rect x="${x}" y="${y + 70}" width="160" height="30" fill="${c2}"/><rect x="${x + 20}" y="${y + 24}" width="120" height="14" rx="7" fill="#fff"/><rect x="${x + 36}" y="${y + 46}" width="88" height="10" rx="5" fill="#fff" opacity=".7"/>${sel ? `<rect x="${x - 8}" y="${y - 8}" width="176" height="116" rx="16" fill="none" stroke="#E03131" stroke-width="6"/>` : ''}`);
const ILL_T = {
  t1: () => svg(`${tpl(40, 40, '#3D8BD9', '#1F4E8C')}${tpl(220, 40, '#2E8B57', '#1B5E3A')}${tpl(400, 40, '#E03131', '#A61E1E')}${tpl(130, 170, '#8338EC', '#5A189A')}${tpl(310, 170, '#FF7F11', '#C2410C')}
    ${pillS(60, 320, 480, 54, '#2F7BD8', 'Bản mẫu có sẵn thiết kế', 26)}${flake(40, 300, .5, '#8ECAE6')}${flake(570, 300, .5, '#8ECAE6')}`),
  t2: () => svg(`${winbox(30, 30, 540, 230, 'File → New', `${tpl(50, 90, '#3D8BD9', '#1F4E8C', 1)}${tpl(230, 90, '#2E8B57', '#1B5E3A')}${tpl(410, 90, '#E03131', '#A61E1E')}`, '#2F7BD8')}
    ${pillS(40, 290, 250, 52, '#2DA44E', 'Create', 26)}${pillS(310, 290, 250, 52, '#8338EC', 'Variants', 26)}`),
  t3: () => svg(`${slide(40, 40, 320, 220, '#E3F1FC', `<rect x="62" y="62" width="276" height="56" rx="6" fill="none" stroke="#7FB6E8" stroke-width="4" stroke-dasharray="10 6"/>${txt(200, 98, 'Click to add title', 22, '#4A7FB5')}<rect x="62" y="134" width="276" height="104" rx="6" fill="none" stroke="#7FB6E8" stroke-width="4" stroke-dasharray="10 6"/>${txt(200, 192, 'Click to add text', 20, '#4A7FB5')}`)}
    ${pillS(390, 60, 180, 52, '#2F7BD8', 'New Slide', 24)}${pillS(390, 140, 180, 52, '#FF7F11', 'Layout', 24)}${pillS(60, 310, 480, 52, '#2DA44E', 'Gõ vào khung giữ chỗ', 26)}`),
  t4: () => svg(`${slide(40, 40, 320, 220, '#1F3A5F', `${txt(200, 100, 'Mùa đông', 40, '#fff')}${pine(130, 240, .6)}${snowman(270, 245, .5)}`)}${pillS(390, 70, 180, 52, '#E03131', 'Thay ảnh', 24)}${pillS(390, 150, 180, 52, '#8338EC', 'Sửa chữ', 24)}
    ${pillS(60, 310, 480, 52, '#2DA44E', 'File → Save As', 26)}`),
  t5: () => svg(`${hflow([['#2F7BD8', 'Chọn mẫu'], ['#FF7F11', 'Thêm trang'], ['#2DA44E', 'Nhập, lưu']], 60, 22)}${key3d(230, 190, 140, 100, '#E03131', '#A61E1E', 'F5', 48)}
    ${pillS(60, 340, 480, 50, '#8338EC', 'Trình chiếu thử bằng F5', 24)}${flake(80, 240, .7, '#8ECAE6')}${flake(520, 240, .7, '#8ECAE6')}`),
};

const TOPICS = [
  { id: 't1', name: 'Vì sao cần bản mẫu?', tip: 'Bản mẫu như ngôi nhà tuyết dựng sẵn – chỉ cần trang trí thêm!',
    html: S4('Cần làm nhanh bài trình chiếu <b>giới thiệu mùa đông</b> cho lớp.',
      '<b>Bản mẫu</b> (template) có sẵn bố cục, màu nền, phông chữ <b>đồng bộ</b>.',
      'Dùng bản mẫu tiết kiệm thời gian thế nào?',
      'Bản mẫu giúp tạo bài <span class="k">nhanh, đẹp, thống nhất</span>.'),
    quiz: [
      { q: 'Bản mẫu (template) là:', o: ['Bài trình chiếu có sẵn thiết kế', 'Một loại máy in', 'Một phông chữ', 'Một hiệu ứng âm thanh'], a: 0, why: 'Bản mẫu có sẵn bố cục, màu sắc, phông chữ.' },
      { q: 'Lợi ích của bản mẫu là:', o: ['Tốn nhiều thời gian', 'Tạo bài nhanh, đồng bộ', 'Không sửa được', 'Chỉ có một màu'], a: 1, why: 'Bản mẫu giúp làm nhanh và các trang thống nhất.' } ] },
  { id: 't2', name: 'Chọn bản mẫu', tip: 'Chọn mẫu hợp chủ đề – mùa đông thì tông xanh trắng nhé!',
    html: S4('Tìm bản mẫu phù hợp với <b>chủ đề</b> bài trình chiếu.',
      '<b>File</b> → <code>New</code> → chọn mẫu → <b>Create</b>; hoặc thẻ <b>Design</b> → <code>Themes</code>.',
      '<code>Variants</code> giúp đổi gì cho mẫu đã chọn?',
      'Chọn mẫu <span class="k">hợp chủ đề</span>, dễ đọc.'),
    quiz: [
      { q: 'Để tạo bài từ bản mẫu, em chọn:', o: ['Home → Copy', 'Insert → Table', 'File → New', 'View → Zoom'], a: 2, why: 'File → New hiện danh sách các bản mẫu.' },
      { q: 'Variants trong thẻ Design dùng để:', o: ['Xoá bài', 'In bài', 'Thêm âm thanh', 'Đổi phối màu, phông của mẫu'], a: 3, why: 'Variants đưa ra các biến thể màu sắc, phông chữ.' } ] },
  { id: 't3', name: 'Thêm trang và nội dung', tip: 'Gõ chữ vào khung có sẵn – nhanh như trượt tuyết!',
    html: S4('Thêm trang chiếu mới có <b>tiêu đề và nội dung</b>.',
      '<b>Home</b> → <code>New Slide</code> → chọn <b>bố cục</b> (Layout) phù hợp.',
      'Gõ chữ vào các <b>khung giữ chỗ</b> (placeholder) có sẵn ra sao?',
      'Nội dung đặt vào <span class="k">khung giữ chỗ</span> của bố cục.'),
    quiz: [
      { q: 'Lệnh thêm trang chiếu mới là:', o: ['New Slide', 'Delete Slide', 'Save As', 'Print'], a: 0, why: 'New Slide thêm một trang chiếu theo bố cục đã chọn.' },
      { q: 'Khung có dòng “Click to add title” gọi là:', o: ['Hình nền', 'Khung giữ chỗ', 'Biểu đồ', 'Hiệu ứng'], a: 1, why: 'Đó là khung giữ chỗ (placeholder) để nhập tiêu đề.' } ] },
  { id: 't4', name: 'Chỉnh sửa và lưu bài', tip: 'Bản mẫu chỉ là khung – nội dung phải là của em!',
    html: S4('Thay ảnh, sửa chữ cho hợp nội dung <b>mùa đông</b>.',
      'Xoá đối tượng thừa, thay <b>ảnh minh hoạ</b>, viết chữ ngắn gọn.',
      'Lưu bằng <code>File</code> → <code>Save As</code>; đặt tên thế nào cho dễ tìm?',
      'Bản mẫu là khung, nội dung là <span class="k">của em</span>.'),
    quiz: [
      { q: 'Sau khi chọn bản mẫu, em cần:', o: ['Giữ nguyên chữ mẫu', 'Xoá hết các trang', 'Thay bằng nội dung của mình', 'Không cần lưu'], a: 2, why: 'Thay chữ, ảnh mẫu bằng nội dung bài của em.' },
      { q: 'Để lưu bài với tên mới, em chọn:', o: ['New Slide', 'Design', 'Themes', 'File → Save As'], a: 3, why: 'Save As lưu tệp với tên, vị trí mới.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Chọn mẫu – thêm trang – nhập nội dung – lưu – trình chiếu!',
    html: S4('Tạo bài 4 trang: <b>tiêu đề, nội dung, hình ảnh, kết thúc</b>.',
      'Chọn mẫu → thêm trang theo bố cục → nhập nội dung → lưu.',
      'Trình chiếu thử bằng phím <code>F5</code> và nhận xét.',
      'Bản mẫu giúp bài <span class="k">chuyên nghiệp</span>.'),
    quiz: [
      { q: 'Phím trình chiếu từ trang đầu tiên là:', o: ['F2', 'F5', 'F7', 'F12'], a: 1, why: 'Nhấn F5 để trình chiếu từ trang đầu.' },
      { q: 'Thứ tự hợp lí khi dùng bản mẫu:', o: ['Chọn mẫu → thêm trang → nhập', 'Lưu → chọn mẫu → xoá', 'Nhập nội dung → xoá mẫu', 'In → chọn mẫu → lưu'], a: 0, why: 'Chọn mẫu, thêm trang rồi nhập nội dung.' } ] },
];

const KEY = [
  'Bản mẫu: <b>nhanh,<br>thống nhất</b>.',
  '<b>File → New</b>;<br>Themes, Variants.',
  '<b>New Slide</b>,<br>khung giữ chỗ.',
  'Thay nội dung,<br><b>Save As</b>.',
  'Trình chiếu<br>thử bằng <b>F5</b>.',
];
