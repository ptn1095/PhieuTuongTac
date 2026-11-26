const META = { key: 'tin9-bai9-xac-thuc-du-lieu', num: 10, so: 9, lop: 'Tin học 9', ic: '🛡️', ten: 'Sử dụng công cụ xác thực dữ liệu',
  st1: 'CÔNG CỤ XÁC THỰC<br>DỮ LIỆU', big: 'XÁC THỰC<br>DỮ LIỆU', cert: 'SỬ DỤNG CÔNG CỤ XÁC THỰC DỮ LIỆU',
  hello: 'Xin chào! Mình là Bít 🤖 Cùng dựng “lá chắn” xác thực dữ liệu, chặn dữ liệu nhập sai nhé!' };
const shield = (x, y, s, c = '#2EC4B6') => `<path transform="translate(${x} ${y}) scale(${s})" d="M100 0 L190 34 V110 Q190 190 100 230 Q10 190 10 110 V34Z" fill="${c}" stroke="${O}" stroke-width="${8/s}" stroke-linejoin="round"/><path transform="translate(${x} ${y}) scale(${s})" d="M60 112 L90 142 L144 82" stroke="#fff" stroke-width="${20}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
const dlg = (title) => `<rect x="30" y="30" width="540" height="300" rx="20" fill="#fff" stroke="${O}" stroke-width="6"/><rect x="30" y="30" width="540" height="56" rx="20" fill="#1982C4" stroke="${O}" stroke-width="6"/>${T(300, 68, title, 26, '#fff')}`;
const TOPICS = [
  { title: 'Vì sao cần kiểm tra?', tip: 'Gõ nhầm 85 thay vì 8.5 là điểm trung bình sai bét. Kiểm tra dữ liệu sẽ chặn lại!',
    key: 'Chặn dữ liệu <b>sai</b><br>ngay khi nhập',
    ill: () => svg(`${shield(190, 40, 1.1)}
      ${pillS(20, 70, 150, 56, '#E5383B', '85 ✗', 30, -8)}${pillS(20, 190, 150, 56, '#E5383B', '-3 ✗', 30, 6)}
      ${pillS(430, 70, 150, 56, '#2DA44E', '8.5 ✓', 28, 8)}${pillS(430, 190, 150, 56, '#2DA44E', '7 ✓', 30, -6)}
      ${pillS(110, 330, 380, 60, '#8338EC', 'Điểm: 0 → 10', 32)}`),
    html: `<ul>
      <li>Nhập tay dễ <b>nhầm</b>: điểm 85, tuổi âm, sai chính tả "Nam/nam/Nan"…</li>
      <li>Dữ liệu sai → kết quả tính toán, thống kê <b>sai</b>.</li>
      <li><span class="k">Xác thực dữ liệu</span> (Data Validation) chỉ cho nhập dữ liệu <b>hợp lệ</b>.</li>
      <li>Nhập sai → bảng tính <b>báo lỗi</b> và không nhận.</li></ul>`,
    quiz: [
      { q: 'Công cụ xác thực dữ liệu trong Excel có tên là:', o: ['Data Validation', 'Conditional Formatting', 'Sort & Filter', 'AutoSum'], a: 0, why: 'Data Validation = xác thực (kiểm tra tính hợp lệ) của dữ liệu.' },
      { q: 'Lợi ích chính của xác thực dữ liệu là gì?', o: ['Tính toán nhanh hơn', 'Làm bảng đẹp hơn', 'Hạn chế nhập sai dữ liệu', 'Tự vẽ biểu đồ'], a: 2, why: 'Chỉ cho nhập giá trị hợp lệ → hạn chế sai sót.' } ] },
  { title: 'Đặt điều kiện số', tip: 'Điểm từ 0 đến 10 thì chọn Decimal và Between nha!',
    key: 'Data → <b>Data Validation</b><br><b>Whole number</b> / <b>Decimal</b><br><b>Between</b> min – max',
    ill: () => svg(`${dlg('Data Validation')}
      ${T(60, 130, 'Allow:', 24, O, 'start', 800)}<rect x="210" y="104" width="300" height="40" rx="8" fill="#E7F5FF" stroke="${O}" stroke-width="3"/>${T(226, 132, 'Decimal ▾', 22, '#1864AB', 'start')}
      ${T(60, 190, 'Data:', 24, O, 'start', 800)}<rect x="210" y="164" width="300" height="40" rx="8" fill="#E7F5FF" stroke="${O}" stroke-width="3"/>${T(226, 192, 'between ▾', 22, '#1864AB', 'start')}
      ${T(60, 250, 'Minimum:', 24, O, 'start', 800)}<rect x="210" y="224" width="120" height="40" rx="8" fill="#D3F9D8" stroke="${O}" stroke-width="3"/>${T(270, 252, '0', 24, '#2B8A3E')}
      ${T(60, 306, 'Maximum:', 24, O, 'start', 800)}<rect x="210" y="280" width="120" height="40" rx="8" fill="#D3F9D8" stroke="${O}" stroke-width="3"/>${T(270, 308, '10', 24, '#2B8A3E')}
      ${shield(420, 220, 0.5)}
      ${pillS(140, 352, 320, 52, '#2DA44E', 'Chỉ nhận 0 → 10', 26)}`),
    html: `<ul>
      <li>Chọn vùng ô → <b>Data</b> → <span class="k">Data Validation</span>.</li>
      <li>Thẻ <b>Settings</b> → <b>Allow</b>:</li>
      <li><code>Whole number</code>: số nguyên • <code>Decimal</code>: số thập phân.</li>
      <li><b>Data</b>: <code>between</code> (trong khoảng), <code>greater than</code>…</li>
      <li>Nhập <b>Minimum</b>, <b>Maximum</b> → OK.</li></ul>`,
    quiz: [
      { q: 'Cột điểm cho phép nhập số lẻ như 8.5, trong Allow nên chọn:', o: ['Whole number', 'List', 'Decimal', 'Text length'], a: 2, why: 'Decimal cho phép số thập phân.' },
      { q: 'Chỉ cho nhập số nguyên từ 1 đến 45 (số thứ tự), chọn Whole number và:', o: ['greater than', 'equal to', 'not between', 'between, Min 1, Max 45'], a: 3, why: 'between với Minimum 1, Maximum 45.' } ] },
  { title: 'Danh sách thả xuống', tip: 'Danh sách thả xuống giúp chọn thay vì gõ, không lo sai chính tả!',
    key: 'Allow: <b>List</b><br>Source: <b>Nam,Nữ</b><br>→ nút ▾ để chọn',
    ill: () => svg(`${grid(40, 40, [['Tên', 'Giới tính'], ['An', 'Nam']], { cw: 170, rh: 60, fs: 26, bold: [0], sel: [1, 1] })}
      <rect x="390" y="166" width="40" height="40" rx="6" fill="#E9ECEF" stroke="${O}" stroke-width="3"/>${T(410, 194, '▾', 24)}
      <rect x="254" y="212" width="176" height="110" rx="10" fill="#fff" stroke="${O}" stroke-width="4"/><rect x="260" y="218" width="164" height="46" rx="8" fill="#D0EBFF"/>${T(276, 250, 'Nam', 24, '#1864AB', 'start')}${T(276, 300, 'Nữ', 24, O, 'start', 700)}
      ${pillS(40, 340, 320, 58, '#FF006E', 'Source: Nam,Nữ', 26)}
      ${stars3([560, 60], [560, 300], [40, 280])}`),
    html: `<ul>
      <li>Data Validation → Allow: <span class="k">List</span>.</li>
      <li><b>Source</b>: gõ các lựa chọn, cách nhau dấu phẩy: <code>Nam,Nữ</code></li>
      <li>Hoặc chọn vùng ô chứa danh sách: <code>=$E$1:$E$4</code></li>
      <li>Ô có nút <b>▾</b> → nháy để chọn, không cần gõ.</li>
      <li>Rất hợp cho: giới tính, lớp, xếp loại, loại thu / chi.</li></ul>`,
    quiz: [
      { q: 'Muốn ô có danh sách thả xuống để chọn "Thu" hoặc "Chi", Allow chọn:', o: ['List', 'Decimal', 'Date', 'Custom'], a: 0, why: 'List tạo danh sách thả xuống.' },
      { q: 'Trong ô Source, các lựa chọn của danh sách được ngăn cách bằng:', o: ['Dấu chấm', 'Dấu phẩy', 'Dấu cách', 'Dấu gạch ngang'], a: 1, why: 'Ví dụ: Nam,Nữ (ngăn cách bằng dấu phẩy).' } ] },
  { title: 'Lời nhắc khi nhập', tip: 'Lời nhắc giống tờ giấy nhớ nhỏ, hiện ra mỗi khi chọn ô!',
    key: 'Thẻ <b>Input Message</b>:<br>hiện lời nhắc<br>khi chọn ô',
    ill: () => svg(`${grid(40, 40, [['Điểm'], ['']], { cw: 170, rh: 64, fs: 26, bold: [0], sel: [1, 0] })}
      <path d="M280 150 L320 130 L320 110 Q320 90 340 90 H550 Q570 90 570 110 V230 Q570 250 550 250 H340 Q320 250 320 230 V170Z" fill="#FFF3BF" stroke="${O}" stroke-width="5"/>
      ${T(345, 135, 'Nhập điểm', 26, '#E5383B', 'start')}${T(345, 180, 'Số từ 0 đến 10', 24, O, 'start', 700)}${T(345, 220, 'VD: 8.5', 24, O, 'start', 700)}
      ${pillS(110, 320, 380, 60, '#FF7F11', 'Input Message', 30)}
      ${stars3([40, 280], [570, 300], [570, 40])}`),
    html: `<ul>
      <li>Trong Data Validation → thẻ <span class="k">Input Message</span>.</li>
      <li>Nhập <b>Title</b> (tiêu đề) và <b>Input message</b> (nội dung nhắc).</li>
      <li>Khi <b>chọn ô</b>, lời nhắc hiện ra như tờ giấy nhớ.</li>
      <li>Giúp người nhập biết <b>cần nhập gì</b> trước khi gõ.</li></ul>`,
    quiz: [
      { q: 'Muốn hiện lời hướng dẫn mỗi khi chọn ô, em dùng thẻ nào?', o: ['Settings', 'Error Alert', 'Input Message', 'Format'], a: 2, why: 'Input Message hiện lời nhắc khi chọn ô.' },
      { q: 'Lời nhắc của Input Message hiện ra lúc nào?', o: ['Khi lưu tệp', 'Khi in', 'Khi nhập sai', 'Khi chọn ô'], a: 3, why: 'Hiện khi chọn ô, trước khi nhập.' } ] },
  { title: 'Thông báo lỗi', tip: 'Stop là chặn hẳn, Warning là hỏi lại, Information chỉ nhắc nhẹ!',
    key: 'Thẻ <b>Error Alert</b><br><b>Stop</b> • <b>Warning</b><br>• <b>Information</b>',
    ill: () => svg(`<circle cx="110" cy="120" r="70" fill="#E5383B" stroke="${O}" stroke-width="7"/><path d="M80 90 L140 150 M140 90 L80 150" stroke="#fff" stroke-width="16" stroke-linecap="round"/>
      <path d="M300 50 L380 190 H220Z" fill="#FFD60A" stroke="${O}" stroke-width="7" stroke-linejoin="round"/>${T(300, 175, '!', 80)}
      <circle cx="490" cy="120" r="70" fill="#1982C4" stroke="${O}" stroke-width="7"/>${T(490, 150, 'i', 90, '#fff')}
      ${pillS(30, 230, 160, 54, '#E5383B', 'Stop', 28)}${pillS(220, 230, 160, 54, '#FF7F11', 'Warning', 26)}${pillS(410, 230, 160, 54, '#1982C4', 'Info', 28)}
      <rect x="30" y="300" width="160" height="46" rx="12" fill="#fff" stroke="${O}" stroke-width="4"/>${T(110, 332, 'Chặn hẳn', 22, '#C92A2A')}
      <rect x="220" y="300" width="160" height="46" rx="12" fill="#fff" stroke="${O}" stroke-width="4"/>${T(300, 332, 'Hỏi lại', 22, '#D9480F')}
      <rect x="410" y="300" width="160" height="46" rx="12" fill="#fff" stroke="${O}" stroke-width="4"/>${T(490, 332, 'Nhắc nhẹ', 22, '#1864AB')}`),
    html: `<ul>
      <li>Thẻ <span class="k">Error Alert</span>: thông báo khi <b>nhập sai</b>.</li>
      <li><b>Stop</b> ⛔: không cho nhập, buộc nhập lại.</li>
      <li><b>Warning</b> ⚠: cảnh báo, hỏi có muốn tiếp tục không.</li>
      <li><b>Information</b> ℹ: chỉ thông báo, vẫn nhận dữ liệu.</li>
      <li>Tự viết <b>Title</b> và <b>Error message</b> dễ hiểu.</li></ul>`,
    quiz: [
      { q: 'Kiểu thông báo lỗi nào KHÔNG cho phép nhập dữ liệu sai?', o: ['Stop', 'Warning', 'Information', 'Input Message'], a: 0, why: 'Stop chặn hẳn, bắt nhập lại.' },
      { q: 'Kiểu Information khi nhập sai sẽ:', o: ['Xoá cả cột', 'Chỉ thông báo, vẫn nhận dữ liệu', 'Khoá tệp', 'Không cho nhập'], a: 1, why: 'Information chỉ thông báo, dữ liệu vẫn được nhận.' } ] },
  { title: 'Khoanh dữ liệu sai, xoá', tip: 'Dữ liệu cũ nhập trước khi đặt kiểm tra? Khoanh tròn để tìm ra ngay!',
    key: '<b>Circle Invalid Data</b><br>khoanh ô sai<br><b>Clear All</b>: bỏ kiểm tra',
    ill: () => svg(`${grid(40, 30, [['8'], ['12'], ['7.5'], ['-2'], ['9']], { cw: 150, rh: 54, fs: 26 })}
      <ellipse cx="159" cy="145" rx="80" ry="30" fill="none" stroke="#E5383B" stroke-width="6"/><ellipse cx="159" cy="253" rx="80" ry="30" fill="none" stroke="#E5383B" stroke-width="6"/>
      ${pillS(290, 70, 280, 64, '#E5383B', '⭕ Circle Invalid', 26)}${pillS(290, 190, 280, 64, '#868E96', 'Clear All', 30)}
      ${pillS(40, 340, 530, 56, '#2DA44E', 'Sửa ô sai → vòng đỏ biến mất', 24)}
      ${stars3([570, 160], [570, 290], [270, 300])}`),
    html: `<ul>
      <li>Kiểm tra chỉ áp dụng cho dữ liệu nhập <b>sau</b> khi đặt.</li>
      <li>Data → Data Validation ▾ → <span class="k">Circle Invalid Data</span>: khoanh đỏ các ô sai có sẵn.</li>
      <li>Sửa xong, vòng đỏ tự biến mất.</li>
      <li>Bỏ kiểm tra: Data Validation → <span class="k">Clear All</span> → OK.</li></ul>`,
    quiz: [
      { q: 'Muốn tìm các ô sai đã nhập từ trước khi đặt kiểm tra, dùng lệnh:', o: ['Clear All', 'Sort A→Z', 'Filter', 'Circle Invalid Data'], a: 3, why: 'Circle Invalid Data khoanh tròn đỏ các ô không hợp lệ.' },
      { q: 'Muốn bỏ kiểm tra dữ liệu khỏi các ô, chọn nút nào trong hộp thoại?', o: ['OK', 'Ignore blank', 'Clear All', 'Cancel'], a: 2, why: 'Clear All xoá mọi thiết lập kiểm tra dữ liệu.' } ] },
];
