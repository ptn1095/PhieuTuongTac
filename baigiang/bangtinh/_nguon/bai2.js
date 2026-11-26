const META = { key: 'b2-nhap-du-lieu', num: 2, lop: 'Tin học 7', ic: '⌨️', ten: 'Nhập và chỉnh sửa dữ liệu',
  st1: 'NHẬP VÀ CHỈNH SỬA<br>DỮ LIỆU', big: 'NHẬP VÀ<br>SỬA DỮ LIỆU', cert: 'NHẬP VÀ CHỈNH SỬA DỮ LIỆU',
  hello: 'Xin chào! Mình là Bít 🤖 Cùng tập nhập và sửa dữ liệu trong bảng tính nhé!' };
const TOPICS = [
  { title: 'Nhập dữ liệu vào ô', tip: 'Enter đi xuống, Tab đi sang phải. Nhập cả bảng nhanh như gió!',
    key: 'Chọn ô → gõ → <b>Enter</b><br><b>Tab</b>: sang phải • <b>Esc</b>: huỷ',
    ill: () => svg(`${grid(40, 40, [['Họ tên', 'Lớp'], ['Lan', '7A'], ['Minh|', '']], { cw: 160, rh: 56, sel: [2, 0], fs: 26 })}
      ${key3d(400, 50, 170, 90, '#2DA44E', '#1B7A35', 'Enter ↵', 32)}${key3d(400, 180, 170, 90, '#1982C4', '#0F5A8A', 'Tab ⇥', 34)}
      ${key3d(400, 300, 170, 80, '#E5383B', '#A4161A', 'Esc', 34)}
      ${arrow(200, 290, 200, 360, '#2DA44E', 8)}${T(130, 400, 'xuống ô dưới', 22, '#2DA44E')}
      ${stars3([24, 30], [585, 160], [360, 400])}`),
    html: `<ul>
      <li>Nháy chuột <b>chọn ô</b> rồi gõ dữ liệu.</li>
      <li>Nhấn <code>Enter</code> → xong, chuyển xuống <b>ô bên dưới</b>.</li>
      <li>Nhấn <code>Tab</code> → xong, sang <b>ô bên phải</b>.</li>
      <li>Nhấn <code>Esc</code> → <span class="k">huỷ</span> nội dung đang gõ.</li>
      <li>Dùng phím mũi tên ← ↑ → ↓ để di chuyển giữa các ô.</li></ul>`,
    quiz: [
      { q: 'Đang nhập dữ liệu, nhấn phím nào để huỷ những gì vừa gõ?', o: ['Enter', 'Esc', 'Tab', 'Delete'], a: 1, why: 'Esc huỷ nội dung đang gõ, ô giữ nguyên như cũ.' },
      { q: 'Nhập xong một ô, nhấn Tab thì ô được chọn tiếp theo là ô nào?', o: ['Ô bên dưới', 'Ô bên trái', 'Ô bên phải', 'Ô A1'], a: 2, why: 'Tab chuyển sang ô bên phải, Enter chuyển xuống dưới.' } ] },
  { title: 'Các kiểu dữ liệu', tip: 'Nhìn lề là đoán được: số đứng bên phải, chữ đứng bên trái!',
    key: '<b>Số</b>: căn phải<br><b>Văn bản</b>: căn trái<br>Ngày tháng',
    ill: () => svg(`${grid(40, 40, [['Tên', 'Điểm'], ['An', '8.5'], ['Bình', '9'], ['Ngày', '26/11/2026']], { cw: 170, rh: 56, fs: 26, cws: [170, 220] })}
      ${pillS(60, 330, 190, 58, '#FF006E', '← Chữ', 30)}${pillS(330, 330, 200, 58, '#1982C4', 'Số →', 30)}
      ${stars3([520, 40], [20, 330], [580, 300])}`),
    html: `<ul>
      <li><span class="k">Dữ liệu số</span>: 15, 8.5, 2026… mặc định <b>căn phải</b>.</li>
      <li><span class="k">Dữ liệu văn bản</span>: chữ, kí tự… mặc định <b>căn trái</b>.</li>
      <li><b>Ngày, giờ</b> cũng là kiểu số đặc biệt: 26/11/2026.</li>
      <li>Muốn số được hiểu là chữ (số điện thoại 0912…), gõ dấu <code>'</code> trước.</li>
      <li>Chỉ dữ liệu số mới dùng để tính toán.</li></ul>`,
    quiz: [
      { q: 'Khi mới nhập, dữ liệu số trong ô được căn lề như thế nào?', o: ['Căn trái', 'Căn giữa', 'Căn đều hai bên', 'Căn phải'], a: 3, why: 'Số mặc định căn phải, văn bản căn trái.' },
      { q: 'Muốn ô giữ nguyên số 0 ở đầu số điện thoại 0912345678, em gõ thế nào?', o: [`'0912345678`, '=0912345678', '(0912345678)', '#0912345678'], a: 0, why: 'Dấu nháy đơn phía trước giúp số được lưu như văn bản.' } ] },
  { title: 'Sửa và xoá dữ liệu', tip: 'Muốn sửa một chữ trong ô thì nháy đúp, đừng gõ đè kẻo mất hết nha!',
    key: 'Sửa: <b>nháy đúp</b> / <b>F2</b><br>Xoá: phím <b>Delete</b>',
    ill: () => svg(`${grid(40, 40, [['Toán', 'Ngữ văn'], ['Tiếng Anh', 'Tin hoc|']], { cw: 220, rh: 64, sel: [1, 1], fs: 28 })}
      ${key3d(50, 230, 150, 96, '#FFC300', '#C79100', 'F2', 48, O)}${key3d(230, 230, 190, 96, '#E5383B', '#A4161A', 'Delete', 34)}
      ${cursor(470, 150, 1.3)}${T(500, 250, 'nháy', 26, '#8338EC')}${T(500, 280, 'đúp', 26, '#8338EC')}
      ${pillS(40, 350, 240, 50, '#2DA44E', 'Sửa trong ô', 24)}${pillS(300, 350, 260, 50, '#FF006E', 'Xoá nội dung', 24)}
      ${stars3([575, 40], [580, 330], [20, 220])}`),
    html: `<ul>
      <li><b>Sửa một phần</b>: <span class="k">nháy đúp</span> vào ô hoặc nhấn <code>F2</code>.</li>
      <li>Có thể sửa trực tiếp trên <b>thanh công thức</b>.</li>
      <li><b>Gõ đè</b>: chọn ô rồi gõ → thay toàn bộ nội dung cũ.</li>
      <li><b>Xoá</b>: chọn ô / khối ô rồi nhấn <code>Delete</code>.</li>
      <li>Làm sai? Nhấn <code>Ctrl + Z</code> để quay lại.</li></ul>`,
    quiz: [
      { q: 'Muốn sửa một phần nội dung trong ô mà không gõ lại, em làm gì?', o: ['Nhấn Esc', 'Nhấn Delete', 'Nháy đúp vào ô', 'Nhấn Tab'], a: 2, why: 'Nháy đúp (hoặc F2) để sửa ngay trong ô.' },
      { q: 'Tổ hợp phím nào để huỷ thao tác vừa làm?', o: ['Ctrl + Z', 'Ctrl + S', 'Ctrl + C', 'Ctrl + A'], a: 0, why: 'Ctrl + Z = Undo, quay lại bước trước.' } ] },
  { title: 'Chọn ô, hàng, cột, khối', tip: 'Giữ Ctrl để chọn nhiều khối ô rời nhau, giống nhặt kẹo nhiều chỗ!',
    key: 'Kéo thả: <b>khối ô</b><br>Nháy tên cột / hàng<br><b>Ctrl</b>: chọn rời',
    ill: () => svg(`${grid(40, 30, [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], { cw: 110, rh: 52, fill: { '0-3': '#FFE066', '1-3': '#FFE066', '2-3': '#FFE066', '3-3': '#FFE066', '4-3': '#FFE066' }, box: [1, 0, 2, 1] })}
      <rect x="194" y="30" width="0" height="0"/>
      <rect x="40" y="272" width="44" height="52" fill="#B2F2BB"/>${T(62, 305, '5', 20, '#2B8A3E')}
      <rect x="84" y="272" width="440" height="52" fill="#B2F2BB" opacity=".6"/>
      ${key3d(400, 346, 120, 60, '#8338EC', '#5A189A', 'Ctrl', 28)}
      ${stars3([580, 40], [575, 250], [24, 370])}`),
    html: `<ul>
      <li><b>Một ô</b>: nháy chuột vào ô.</li>
      <li><span class="k">Khối ô</span>: kéo thả chuột từ ô đầu đến ô cuối.</li>
      <li><b>Cả cột / cả hàng</b>: nháy vào tên cột / số hàng.</li>
      <li><b>Nhiều khối rời nhau</b>: giữ <code>Ctrl</code> khi chọn.</li>
      <li><b>Cả trang tính</b>: nhấn <code>Ctrl + A</code></li></ul>`,
    quiz: [
      { q: 'Muốn chọn cả cột C, em nháy chuột vào đâu?', o: ['Ô C1', 'Tên cột C', 'Hộp tên', 'Số hàng 3'], a: 1, why: 'Nháy vào tên cột để chọn cả cột.' },
      { q: 'Giữ phím nào khi chọn để chọn được nhiều khối ô rời nhau?', o: ['Shift', 'Alt', 'Tab', 'Ctrl'], a: 3, why: 'Giữ Ctrl để chọn thêm các khối không liền nhau.' } ] },
  { title: 'Độ rộng cột, cao hàng', tip: 'Thấy ##### đừng hoảng: cột chật quá thôi, nới rộng ra là hiện số!',
    key: 'Kéo <b>biên</b> tên cột<br>Nháy đúp: tự vừa<br><b>#####</b>: cột hẹp',
    ill: () => svg(`${grid(40, 40, [['#####', ''], ['#####', '']], { cw: 130, rh: 60, fs: 28 })}
      ${arrow(220, 110, 300, 110, '#FF006E', 7)}
      ${grid(40, 220, [['1500000', '']], { cw: 170, rh: 60, fs: 28 })}
      <line x1="254" y1="214" x2="254" y2="320" stroke="#FF006E" stroke-width="6" stroke-dasharray="10 6"/>
      ${pillS(330, 70, 240, 56, '#E5383B', 'Cột hẹp!', 28)}${pillS(400, 250, 170, 56, '#2DA44E', 'Vừa!', 30)}
      ${cursor(244, 300, 1.1)}
      ${stars3([580, 30], [24, 380], [560, 380])}`),
    html: `<ul>
      <li>Đưa chuột vào <b>biên phải</b> tên cột → con trỏ ↔ → <span class="k">kéo thả</span>.</li>
      <li>Chiều cao hàng: kéo <b>biên dưới</b> số hàng.</li>
      <li><span class="k">Nháy đúp</span> vào biên → cột tự vừa dữ liệu.</li>
      <li>Ô hiện <code>#####</code> nghĩa là <b>cột quá hẹp</b>, chưa hiện hết số.</li>
      <li>Chọn nhiều cột rồi kéo → các cột rộng bằng nhau.</li></ul>`,
    quiz: [
      { q: 'Ô chứa số nhưng lại hiện #####. Nguyên nhân là gì?', o: ['Số bị sai', 'Cột quá hẹp', 'Ô bị khoá', 'Máy tính bị lỗi'], a: 1, why: 'Cột hẹp không đủ chỗ hiện số → nới rộng cột ra.' },
      { q: 'Cách nhanh để độ rộng cột vừa khít dữ liệu là gì?', o: ['Nhấn Delete', 'Nhấn Ctrl + S', 'Nháy đúp vào biên phải tên cột', 'Xoá cột đi'], a: 2, why: 'Nháy đúp biên phải tên cột → cột tự vừa dữ liệu.' } ] },
  { title: 'Chèn và xoá hàng, cột', tip: 'Quên một bạn trong danh sách? Chèn thêm một hàng là xong!',
    key: 'Chuột phải → <b>Insert</b><br>Chuột phải → <b>Delete</b>',
    ill: () => svg(`${grid(40, 40, [['An'], [''], ['Chi'], ['Dũng']], { cw: 170, rh: 56, fill: { '1-0': '#B2F2BB' }, fs: 26 })}
      ${T(170, 168, '+ hàng mới', 22, '#2B8A3E')}
      <rect x="300" y="60" width="250" height="200" rx="18" fill="#fff" stroke="${O}" stroke-width="6"/>
      <rect x="312" y="74" width="226" height="48" rx="10" fill="#D3F9D8"/>${T(330, 108, '➕ Insert', 26, '#2B8A3E', 'start')}
      <rect x="312" y="134" width="226" height="48" rx="10" fill="#FFE3E3"/>${T(330, 168, '➖ Delete', 26, '#C92A2A', 'start')}
      ${T(330, 228, '✂ Cut   📋 Copy', 20, '#868E96', 'start')}
      ${cursor(470, 130, 1)}
      ${pillS(80, 330, 200, 56, '#2DA44E', 'Chèn', 30)}${pillS(320, 330, 200, 56, '#E5383B', 'Xoá', 30)}
      ${stars3([580, 40], [24, 300], [570, 300])}`),
    html: `<ul>
      <li>Chọn hàng (hoặc cột) → nháy <b>chuột phải</b>.</li>
      <li><span class="k">Insert</span>: chèn thêm hàng <b>phía trên</b> / cột <b>bên trái</b>.</li>
      <li><span class="k">Delete</span>: xoá cả hàng / cột, các ô khác dồn lại.</li>
      <li>Phím <code>Delete</code> chỉ xoá <b>nội dung</b>, hàng vẫn còn.</li>
      <li>Hoặc dùng <b>Home → Insert / Delete</b>.</li></ul>`,
    quiz: [
      { q: 'Chọn hàng 3 rồi chọn Insert, hàng mới được chèn ở đâu?', o: ['Phía trên hàng 3', 'Phía dưới hàng 3', 'Cuối trang tính', 'Đầu trang tính'], a: 0, why: 'Hàng mới được chèn phía trên hàng đang chọn.' },
      { q: 'Nhấn phím Delete khi đang chọn cả hàng 5 thì sao?', o: ['Hàng 5 biến mất', 'Chèn thêm hàng', 'Chỉ xoá dữ liệu, hàng vẫn còn', 'Xoá cả trang tính'], a: 2, why: 'Phím Delete xoá nội dung; muốn xoá hàng dùng lệnh Delete ở chuột phải.' } ] },
];
