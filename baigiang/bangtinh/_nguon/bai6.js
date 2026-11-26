const META = { key: 'b6-hoan-thien-in', num: 6, lop: 'Tin học 7', ic: '🖨️', ten: 'Hoàn thiện và in bảng tính',
  st1: 'HOÀN THIỆN VÀ<br>IN BẢNG TÍNH', big: 'HOÀN THIỆN<br>VÀ IN', cert: 'HOÀN THIỆN VÀ IN BẢNG TÍNH',
  hello: 'Xin chào! Mình là Bít 🤖 Cùng hoàn thiện bảng tính rồi in ra thật đẹp nhé!' };
const TOPICS = [
  { title: 'Quản lí trang tính', tip: 'Đặt tên trang tính rõ ràng như "Lop7A", "HocKi1" để dễ tìm nha!',
    key: 'Thêm <b>⊕</b> • Đổi tên<br>Xoá • Kéo để sắp xếp',
    ill: () => svg(`<rect x="30" y="60" width="540" height="200" rx="20" fill="#fff" stroke="${O}" stroke-width="6"/>
      ${grid(56, 84, [['', '', '', ''], ['', '', '', '']], { cw: 110, rh: 50 })}
      ${pillS(40, 290, 150, 54, '#2DA44E', 'Lop7A', 26)}${pillS(200, 290, 150, 54, '#ADB5BD', 'Sheet2', 26)}
      ${ball(400, 317, 30, '#FF006E', '+', 40)}
      <rect x="430" y="140" width="150" height="120" rx="14" fill="#fff" stroke="${O}" stroke-width="5"/>${T(445, 176, 'Insert', 22, '#2B8A3E', 'start')}${T(445, 210, 'Rename', 22, '#1864AB', 'start')}${T(445, 244, 'Delete', 22, '#C92A2A', 'start')}
      ${cursor(250, 300, 0.9)}
      ${stars3([40, 40], [570, 40], [560, 390])}`),
    html: `<ul>
      <li><b>Thêm</b> trang tính: nháy nút <span class="k">⊕</span> cạnh tên trang.</li>
      <li><b>Đổi tên</b>: nháy đúp tên trang (hoặc chuột phải → Rename).</li>
      <li><b>Xoá</b>: chuột phải tên trang → Delete.</li>
      <li><b>Sắp xếp</b>: kéo thả tên trang sang trái / phải.</li>
      <li>Chuột phải → <b>Tab Color</b>: tô màu tên trang.</li></ul>`,
    quiz: [
      { q: 'Cách nhanh nhất để đổi tên trang tính Sheet1 là gì?', o: ['Nháy đúp vào tên Sheet1', 'Nhấn Delete', 'Nhấn Ctrl + S', 'Nháy nút ⊕'], a: 0, why: 'Nháy đúp tên trang rồi gõ tên mới.' },
      { q: 'Nút ⊕ ở thanh trang tính dùng để làm gì?', o: ['Xoá trang tính', 'In trang tính', 'Thêm trang tính mới', 'Lưu tệp'], a: 2, why: 'Nút ⊕ thêm một trang tính mới.' } ] },
  { title: 'Sao chép, di chuyển', tip: 'Ctrl+C là chép, Ctrl+X là cắt, Ctrl+V là dán. Ba anh em nhà Ctrl!',
    key: '<b>Ctrl+C</b> chép • <b>Ctrl+X</b> cắt<br><b>Ctrl+V</b> dán',
    ill: () => svg(`${key3d(30, 40, 170, 100, '#1982C4', '#0F5A8A', 'Ctrl+C', 34)}${key3d(215, 40, 170, 100, '#E5383B', '#A4161A', 'Ctrl+X', 34)}${key3d(400, 40, 170, 100, '#2DA44E', '#1B7A35', 'Ctrl+V', 34)}
      ${T(115, 186, 'Sao chép', 24, '#1864AB')}${T(300, 186, 'Cắt', 24, '#C92A2A')}${T(485, 186, 'Dán', 24, '#2B8A3E')}
      ${grid(40, 220, [['Táo'], ['']], { cw: 140, rh: 56, fs: 26, head: false, box: [0, 0, 0, 0] })}<rect x="40" y="220" width="140" height="56" fill="none" stroke="#1982C4" stroke-width="5" stroke-dasharray="10 6"/>
      ${curve(184, 248, 300, 200, 390, 300, '#FF7F11', 7)}
      ${grid(400, 280, [['Táo']], { cw: 140, rh: 56, fs: 26, head: false })}
      ${stars3([30, 380], [300, 390], [580, 210])}`),
    html: `<ul>
      <li>Chọn ô / khối ô → <span class="k">Sao chép</span> <code>Ctrl + C</code> hoặc <span class="k">Cắt</span> <code>Ctrl + X</code>.</li>
      <li>Chọn ô đích → <b>Dán</b> <code>Ctrl + V</code>.</li>
      <li>Sao chép: ô gốc <b>vẫn còn</b>; cắt (di chuyển): ô gốc <b>mất</b>.</li>
      <li>Có thể kéo thả <b>viền khối ô</b> để di chuyển nhanh.</li></ul>`,
    quiz: [
      { q: 'Muốn di chuyển dữ liệu sang chỗ khác (ô cũ không còn), em dùng:', o: ['Ctrl + C rồi Ctrl + V', 'Ctrl + Z', 'Ctrl + X rồi Ctrl + V', 'Ctrl + A'], a: 2, why: 'Cắt (Ctrl + X) rồi dán (Ctrl + V) để di chuyển.' },
      { q: 'Sau khi sao chép (Ctrl + C) và dán, dữ liệu ở ô gốc thế nào?', o: ['Bị xoá', 'Vẫn còn nguyên', 'Thành 0', 'Báo lỗi'], a: 1, why: 'Sao chép thì ô gốc vẫn giữ nguyên dữ liệu.' } ] },
  { title: 'Xem trước khi in', tip: 'Xem trước khi in để không phí giấy nha, bảo vệ môi trường luôn!',
    key: '<b>File → Print</b><br><b>Ctrl+P</b>: xem trước',
    ill: () => svg(`<rect x="60" y="30" width="230" height="320" rx="14" fill="#fff" stroke="${O}" stroke-width="6"/>
      ${grid(80, 70, [['', ''], ['', ''], ['', ''], ['', '']], { cw: 90, rh: 40, head: false })}
      ${T(175, 290, 'Trang 1/2', 24, '#868E96', 'middle', 700)}
      <circle cx="400" cy="170" r="90" fill="#D0EBFF" stroke="${O}" stroke-width="10"/><line x1="464" y1="234" x2="540" y2="310" stroke="${O}" stroke-width="22" stroke-linecap="round"/>
      ${T(400, 190, '👀', 60)}
      ${pillS(320, 340, 240, 58, '#FF006E', 'Ctrl + P', 32)}
      ${stars3([30, 380], [570, 40], [300, 20])}`),
    html: `<ul>
      <li>Vào <b>File → Print</b> hoặc nhấn <code>Ctrl + P</code>.</li>
      <li>Bên phải là <span class="k">bản xem trước</span>: trang in trông thế nào.</li>
      <li>Kiểm tra: bảng có <b>bị tách</b> sang trang khác không?</li>
      <li>Nút ◀ ▶ dưới bản xem trước để xem từng trang.</li></ul>`,
    quiz: [
      { q: 'Tổ hợp phím nào mở màn hình in và xem trước khi in?', o: ['Ctrl + S', 'Ctrl + O', 'Ctrl + N', 'Ctrl + P'], a: 3, why: 'Ctrl + P = Print.' },
      { q: 'Vì sao nên xem trước khi in?', o: ['Kiểm tra bố cục, tránh phí giấy', 'Để máy in nhanh hơn', 'Để tự lưu tệp', 'Để đổi màu chữ'], a: 0, why: 'Xem trước giúp phát hiện bảng bị tách trang, tránh in hỏng.' } ] },
  { title: 'Thiết lập trang in', tip: 'Bảng nhiều cột quá thì xoay giấy nằm ngang (Landscape) là vừa!',
    key: 'Giấy <b>dọc / ngang</b><br>Khổ <b>A4</b> • Lề<br><b>Fit to page</b>',
    ill: () => svg(`<rect x="60" y="40" width="160" height="220" rx="12" fill="#fff" stroke="${O}" stroke-width="6"/>${T(140, 160, 'Dọc', 32, '#1982C4')}
      <rect x="280" y="80" width="260" height="180" rx="12" fill="#fff" stroke="${O}" stroke-width="6"/>${T(410, 180, 'Ngang', 32, '#FF006E')}
      ${pillS(60, 290, 160, 50, '#1982C4', 'Portrait', 24)}${pillS(300, 290, 220, 50, '#FF006E', 'Landscape', 24)}
      ${pillS(140, 352, 320, 52, '#2DA44E', 'A4 • Fit to page', 24)}
      ${stars3([30, 40], [570, 40], [570, 380])}`),
    html: `<ul>
      <li>Trong <b>File → Print</b> hoặc thẻ <b>Page Layout</b>:</li>
      <li><span class="k">Hướng giấy</span>: dọc (Portrait) / ngang (Landscape).</li>
      <li><b>Khổ giấy</b>: thường chọn A4.</li>
      <li><b>Lề</b> (Margins): khoảng trống quanh trang.</li>
      <li><span class="k">Fit Sheet on One Page</span>: thu nhỏ vừa 1 trang.</li></ul>`,
    quiz: [
      { q: 'Bảng tính có nhiều cột, in bị tràn sang trang 2. Nên chọn hướng giấy nào?', o: ['Dọc (Portrait)', 'Ngang (Landscape)', 'Khổ A5', 'Không in'], a: 1, why: 'Giấy ngang rộng hơn nên chứa được nhiều cột.' },
      { q: 'Muốn thu nhỏ để toàn bộ trang tính in vừa 1 trang giấy, em chọn:', o: ['Margins', 'Portrait', 'Print Selection', 'Fit Sheet on One Page'], a: 3, why: 'Fit Sheet on One Page tự thu nhỏ vừa một trang.' } ] },
  { title: 'In bảng tính', tip: 'Chỉ cần in một phần bảng? Chọn khối ô rồi in Print Selection!',
    key: 'Chọn máy in, số bản<br>Nút <b>Print</b><br><b>Print Selection</b>',
    ill: () => svg(`<rect x="160" y="40" width="280" height="110" rx="10" fill="#fff" stroke="${O}" stroke-width="6"/>${grid(190, 60, [['', '', '']], { cw: 70, rh: 40, head: false })}
      <rect x="90" y="140" width="420" height="160" rx="30" fill="#8338EC" stroke="${O}" stroke-width="7"/>
      <rect x="150" y="270" width="300" height="110" rx="8" fill="#fff" stroke="${O}" stroke-width="6"/>${grid(180, 290, [['', '', ''], ['', '', '']], { cw: 80, rh: 34, head: false })}
      <circle cx="460" cy="190" r="14" fill="#8AC926" stroke="${O}" stroke-width="4"/>${T(220, 220, '🖨️ Print', 36, '#fff', 'start')}
      ${stars3([60, 60], [550, 60], [540, 380])}`),
    html: `<ul>
      <li>Nhấn <code>Ctrl + P</code> → chọn <b>máy in</b> (Printer).</li>
      <li>Nhập <b>số bản in</b> (Copies).</li>
      <li>Chọn phạm vi: cả trang tính, cả bảng tính, hoặc <span class="k">Print Selection</span> (vùng đang chọn).</li>
      <li>Nháy nút <span class="k">Print</span> để in.</li></ul>`,
    quiz: [
      { q: 'Chỉ muốn in khối ô đang chọn, em chọn mục nào?', o: ['Print Active Sheets', 'Print Entire Workbook', 'Print Selection', 'Landscape'], a: 2, why: 'Print Selection chỉ in vùng đang được chọn.' },
      { q: 'Muốn in 3 bản giống nhau, em sửa ô nào?', o: ['Copies (số bản)', 'Margins (lề)', 'Orientation (hướng)', 'Printer (máy in)'], a: 0, why: 'Copies là số bản cần in.' } ] },
  { title: 'Kiểm tra trước khi nộp', tip: 'Kiểm tra lại một lượt như thám tử, bảng tính sẽ hoàn hảo!',
    key: 'Tiêu đề • Viền • Số<br>Công thức đúng<br><b>Lưu</b> trước khi in',
    ill: () => svg(`<rect x="60" y="30" width="300" height="360" rx="22" fill="#fff" stroke="${O}" stroke-width="7"/><rect x="150" y="16" width="120" height="40" rx="12" fill="#FFC300" stroke="${O}" stroke-width="5"/>
      ${['Tiêu đề', 'Kẻ viền', 'Định dạng số', 'Công thức', 'Đã lưu'].map((t, i) => `<rect x="90" y="${84 + i*58}" width="36" height="36" rx="8" fill="#D3F9D8" stroke="${O}" stroke-width="4"/><path d="M96 ${102 + i*58} l9 9 l16 -18" stroke="#2B8A3E" stroke-width="6" fill="none" stroke-linecap="round"/>${T(142, 112 + i*58, t, 26, O, 'start', 800)}`).join('')}
      <circle cx="470" cy="190" r="80" fill="#D0EBFF" stroke="${O}" stroke-width="9"/><line x1="527" y1="247" x2="580" y2="300" stroke="${O}" stroke-width="20" stroke-linecap="round"/>${T(470, 214, '✔', 70, '#2DA44E')}
      ${stars3([30, 60], [570, 60], [430, 380])}`),
    html: `<ul>
      <li>Có <b>tiêu đề</b> rõ ràng, gộp ô căn giữa.</li>
      <li>Tiêu đề cột đậm, bảng <b>kẻ viền</b> đủ.</li>
      <li>Số liệu đúng <b>định dạng</b> (%, số thập phân…).</li>
      <li>Thử sửa số liệu để kiểm tra <span class="k">công thức</span> đúng.</li>
      <li><span class="k">Lưu tệp</span> trước khi in hoặc nộp bài.</li></ul>`,
    quiz: [
      { q: 'Đường lưới mờ của trang tính khi in ra sẽ thế nào nếu chưa kẻ viền?', o: ['In đậm hơn', 'In màu đỏ', 'Tự kẻ đôi', 'Không được in ra'], a: 3, why: 'Đường lưới mặc định không được in, cần kẻ viền bằng Borders.' },
      { q: 'Việc nên làm trước khi in hoặc nộp bài là gì?', o: ['Xoá các công thức', 'Lưu tệp', 'Xoá trang tính', 'Tắt máy'], a: 1, why: 'Lưu tệp để không mất bài.' } ] },
];
