const META = { key: 'b1-lam-quen', num: 1, lop: 'Tin học 7', ic: '📗', ten: 'Làm quen với phần mềm bảng tính',
  st1: 'LÀM QUEN VỚI<br>PHẦN MỀM BẢNG TÍNH', big: 'LÀM QUEN<br>BẢNG TÍNH', cert: 'LÀM QUEN VỚI PHẦN MỀM BẢNG TÍNH',
  hello: 'Xin chào! Mình là Bít 🤖 Hôm nay cùng làm quen với phần mềm bảng tính nhé!' };
const TOPICS = [
  { title: 'Phần mềm bảng tính là gì?', tip: 'Bảng tính giống một cuốn vở kẻ ô siêu thông minh, biết tự tính toán!',
    key: 'Ghi dữ liệu dạng <b>bảng</b><br><b>Tự động tính</b>, vẽ biểu đồ',
    ill: () => svg(`${win(30, 30, 540, 360, '#2DA44E', 'Bảng tính')}
      ${grid(56, 104, [['Tên', 'Toán', 'Tin'], ['An', '8', '9'], ['Bình', '7', '10'], ['Chi', '9', '8']], { cw: 78, rh: 40, fs: 20 })}
      <rect x="370" y="110" width="180" height="176" rx="14" fill="#F8F9FA" stroke="${O}" stroke-width="4"/>
      <rect x="396" y="196" width="30" height="76" fill="#FF006E" stroke="${O}" stroke-width="3"/><rect x="440" y="166" width="30" height="106" fill="#1982C4" stroke="${O}" stroke-width="3"/><rect x="484" y="136" width="30" height="136" fill="#FFC300" stroke="${O}" stroke-width="3"/>
      ${pillS(70, 310, 200, 54, '#8338EC', 'Tự tính', 28)}${pillS(318, 310, 220, 54, '#FF7F11', 'Biểu đồ', 28)}
      ${stars3([575, 30], [24, 380], [580, 400])}`),
    html: `<ul>
      <li>Giúp <span class="k">ghi lại dữ liệu</span> dưới dạng <b>bảng</b> (hàng, cột).</li>
      <li><span class="k">Tính toán tự động</span>: sửa số liệu → kết quả tự cập nhật.</li>
      <li>Sắp xếp, lọc và <b>vẽ biểu đồ</b> từ dữ liệu.</li>
      <li>Ví dụ: <b>Microsoft Excel</b>, <b>Google Sheets</b>, <b>LibreOffice Calc</b>.</li>
      <li>Dùng để làm: bảng điểm, sổ thu chi, theo dõi chiều cao…</li></ul>`,
    quiz: [
      { q: 'Phần mềm nào dưới đây là phần mềm bảng tính?', o: ['Microsoft Word', 'Microsoft Excel', 'Paint', 'Scratch'], a: 1, why: 'Excel là phần mềm bảng tính; Word là soạn thảo văn bản.' },
      { q: 'Ưu điểm nổi bật nhất của phần mềm bảng tính là gì?', o: ['Vẽ tranh đẹp', 'Soạn thư điện tử', 'Chơi nhạc', 'Tính toán tự động'], a: 3, why: 'Bảng tính tự tính toán và tự cập nhật khi dữ liệu thay đổi.' } ] },
  { title: 'Màn hình làm việc', tip: 'Hộp tên cho biết em đang đứng ở ô nào, thanh công thức cho biết trong ô có gì!',
    key: '<b>Hộp tên</b> • <b>Thanh công thức</b><br>Dải lệnh • Trang tính',
    ill: () => svg(`<rect x="30" y="20" width="540" height="380" rx="24" fill="#fff" stroke="${O}" stroke-width="7"/>
      <rect x="30" y="20" width="540" height="60" rx="24" fill="#2DA44E" stroke="${O}" stroke-width="7"/>
      ${['Home', 'Insert', 'Data'].map((t, i) => T(90 + i*110, 60, t, 22, '#fff')).join('')}
      ${fbar(48, 96, 504, 'C2', '=A2+B2', 24)}
      ${grid(48, 160, [['5', '3', '8'], ['', '', ''], ['', '', '']], { cw: 150, rh: 44, sel: [0, 2], fs: 22 })}
      <path d="M48 350 H552" stroke="${O}" stroke-width="3"/>
      <rect x="60" y="356" width="104" height="34" rx="8" fill="#D3F9D8" stroke="${O}" stroke-width="3"/>${T(112, 380, 'Sheet1', 18)}
      <rect x="172" y="356" width="104" height="34" rx="8" fill="#F1F3F5" stroke="${O}" stroke-width="3"/>${T(224, 380, 'Sheet2', 18, '#868E96')}
      ${bubble(330, 300, 220, 44, '#FF006E', 'Hộp tên ↑ ô C2', 20)}
      ${stars3([585, 160], [18, 300], [585, 410])}`),
    html: `<ul>
      <li><span class="k">Dải lệnh</span>: các nhóm lệnh Home, Insert, Data…</li>
      <li><span class="k">Hộp tên</span>: hiện địa chỉ ô đang chọn.</li>
      <li><span class="k">Thanh công thức</span>: hiện nội dung / công thức của ô.</li>
      <li><b>Vùng làm việc</b>: lưới các hàng, cột và ô tính.</li>
      <li><b>Thanh trang tính</b>: tên các trang Sheet1, Sheet2…</li></ul>`,
    quiz: [
      { q: 'Muốn biết ô đang chọn có địa chỉ gì, em nhìn vào đâu?', o: ['Thanh công thức', 'Dải lệnh', 'Hộp tên', 'Thanh trang tính'], a: 2, why: 'Hộp tên (Name Box) hiện địa chỉ ô đang được chọn.' },
      { q: 'Thanh công thức dùng để làm gì?', o: ['Hiện nội dung của ô đang chọn', 'Đổi màu chữ', 'Lưu tệp', 'Thêm trang tính mới'], a: 0, why: 'Thanh công thức hiện dữ liệu hoặc công thức trong ô đang chọn.' } ] },
  { title: 'Hàng, cột và ô tính', tip: 'Cột đứng thẳng như cái cột nhà, hàng nằm ngang như hàng ghế!',
    key: 'Cột: <b>A, B, C…</b><br>Hàng: <b>1, 2, 3…</b><br>Giao nhau = <b>ô</b>',
    ill: () => svg(`${grid(70, 60, [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], { cw: 110, rh: 60, fill: { '0-1': '#D0EBFF', '1-1': '#D0EBFF', '2-1': '#D0EBFF', '3-1': '#D0EBFF', '2-0': '#FFE3E3', '2-2': '#FFE3E3', '2-3': '#FFE3E3' }, sel: [2, 1] })}
      <rect x="224" y="94" width="110" height="240" fill="none" stroke="#1982C4" stroke-width="5" stroke-dasharray="12 8"/>
      <rect x="114" y="214" width="440" height="60" fill="none" stroke="#E5383B" stroke-width="5" stroke-dasharray="12 8"/>
      ${T(279, 254, 'B3', 30, '#FF006E')}
      ${pillS(190, 350, 180, 52, '#1982C4', 'Cột B', 28)}${pillS(400, 350, 180, 52, '#E5383B', 'Hàng 3', 28)}
      ${stars3([40, 40], [585, 60], [30, 390])}`),
    html: `<ul>
      <li><span class="k">Cột</span>: theo chiều dọc, tên là chữ cái A, B, C… Z, AA, AB…</li>
      <li><span class="k">Hàng</span>: theo chiều ngang, tên là số 1, 2, 3…</li>
      <li>Chỗ giao giữa một hàng và một cột là một <span class="k">ô tính</span>.</li>
      <li><b>Ô tính đang chọn</b> có viền đậm bao quanh.</li>
      <li>Mỗi ô chứa <b>một</b> dữ liệu: số, chữ hoặc công thức.</li></ul>`,
    quiz: [
      { q: 'Tên các cột trong trang tính được đặt như thế nào?', o: ['Bằng số 1, 2, 3', 'Bằng ngày tháng', 'Bằng tên học sinh', 'Bằng chữ cái A, B, C'], a: 3, why: 'Cột đặt tên bằng chữ cái, hàng đặt tên bằng số.' },
      { q: 'Chỗ giao nhau giữa một hàng và một cột gọi là gì?', o: ['Ô tính', 'Trang tính', 'Khối ô', 'Thanh công thức'], a: 0, why: 'Giao của hàng và cột là một ô tính.' } ] },
  { title: 'Địa chỉ ô và khối ô', tip: 'Gọi tên ô thì gọi cột trước, hàng sau: B3 chứ không phải 3B nha!',
    key: 'Ô: <b>B3</b> (cột + hàng)<br>Khối: <b>A1:C4</b>',
    ill: () => svg(`${grid(60, 40, [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], { cw: 110, rh: 54, box: [0, 0, 3, 2] })}
      ${T(219, 130, 'A1:C4', 44, '#1982C4')}
      ${pillS(330, 338, 230, 60, '#FF006E', 'A1 : C4', 34)}
      ${ball(90, 384, 28, '#FFC300', 'A1', 20)}${arrow(126, 380, 318, 372, '#FF7F11', 7)}
      ${stars3([580, 40], [30, 330], [585, 300])}`),
    html: `<ul>
      <li><span class="k">Địa chỉ ô</span> = tên cột + tên hàng: <code>B3</code>, <code>D10</code>.</li>
      <li><span class="k">Khối ô</span>: nhóm ô liền nhau hình chữ nhật.</li>
      <li>Địa chỉ khối: ô <b>trên trái</b> <code>:</code> ô <b>dưới phải</b> → <code>A1:C4</code></li>
      <li>Kéo thả chuột để chọn một khối ô.</li>
      <li>Nháy tên cột / tên hàng để chọn cả cột / cả hàng.</li></ul>`,
    quiz: [
      { q: 'Ô nằm ở cột D, hàng 7 có địa chỉ là gì?', o: ['7D', 'D-7', 'D7', 'DD7'], a: 2, why: 'Tên cột viết trước, tên hàng viết sau → D7.' },
      { q: 'Khối ô từ B2 đến D5 được viết đúng là:', o: ['B2-D5', 'B2:D5', 'B2;D5', 'B2..D5'], a: 1, why: 'Dùng dấu hai chấm giữa ô trên trái và ô dưới phải.' } ] },
  { title: 'Bảng tính và trang tính', tip: 'Một tệp bảng tính giống cuốn sổ, mỗi trang tính là một trang của cuốn sổ!',
    key: 'Tệp <b>.xlsx</b> gồm<br>nhiều <b>trang tính</b> (Sheet)',
    ill: () => svg(`<rect x="150" y="40" width="330" height="280" rx="20" fill="#B2F2BB" stroke="${O}" stroke-width="6" transform="rotate(6 315 180)"/>
      <rect x="130" y="50" width="330" height="280" rx="20" fill="#D0EBFF" stroke="${O}" stroke-width="6" transform="rotate(-4 295 190)"/>
      <rect x="120" y="60" width="330" height="280" rx="20" fill="#fff" stroke="${O}" stroke-width="6"/>
      ${grid(146, 90, [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], { cw: 84, rh: 40, head: true })}
      ${pillS(60, 350, 150, 52, '#2DA44E', 'Sheet1', 26)}${pillS(222, 350, 150, 52, '#1982C4', 'Sheet2', 26)}${pillS(384, 350, 150, 52, '#8338EC', 'Sheet3', 26)}
      ${bubble(440, 40, 140, 56, '#FF7F11', '.xlsx', 30)}
      ${stars3([60, 60], [570, 160], [40, 300])}`),
    html: `<ul>
      <li>Mỗi tệp là một <span class="k">bảng tính</span> (Excel: đuôi <code>.xlsx</code>).</li>
      <li>Bảng tính gồm một hoặc nhiều <span class="k">trang tính</span>: Sheet1, Sheet2…</li>
      <li>Nháy vào tên trang ở thanh trang tính để chuyển trang.</li>
      <li>Nháy nút <b>⊕</b> để thêm trang tính mới.</li>
      <li>Nháy đúp tên trang để <b>đổi tên</b>.</li></ul>`,
    quiz: [
      { q: 'Tệp bảng tính Excel thường có phần mở rộng là gì?', o: ['.docx', '.pptx', '.sb3', '.xlsx'], a: 3, why: 'Tệp Excel có đuôi .xlsx.' },
      { q: 'Một tệp bảng tính có thể có bao nhiêu trang tính?', o: ['Một hoặc nhiều trang', 'Chỉ đúng 1 trang', 'Đúng 3 trang', 'Không có trang nào'], a: 0, why: 'Bảng tính có thể gồm nhiều trang tính, thêm bằng nút ⊕.' } ] },
  { title: 'Mở, lưu và đóng tệp', tip: 'Nhớ bấm Ctrl + S thường xuyên để không mất bài nha!',
    key: '<b>Ctrl+N</b> mới • <b>Ctrl+O</b> mở<br><b>Ctrl+S</b> lưu',
    ill: () => svg(`<rect x="200" y="40" width="200" height="200" rx="26" fill="#1982C4" stroke="${O}" stroke-width="7"/>
      <rect x="240" y="40" width="120" height="70" fill="#E9ECEF" stroke="${O}" stroke-width="6"/><rect x="320" y="52" width="24" height="46" fill="${O}"/>
      <rect x="236" y="146" width="128" height="80" rx="10" fill="#fff" stroke="${O}" stroke-width="5"/>
      ${key3d(40, 280, 150, 100, '#FF006E', '#B0004E', 'Ctrl', 40)}${T(225, 345, '+', 56)}${key3d(260, 280, 100, 100, '#FFC300', '#C79100', 'S', 54, O)}
      ${pillS(400, 300, 170, 56, '#2DA44E', 'Lưu!', 30)}
      ${stars3([80, 80], [520, 90], [560, 240])}`),
    html: `<ul>
      <li>Tạo tệp mới: <b>File → New</b> hoặc <code>Ctrl + N</code></li>
      <li>Mở tệp đã có: <b>File → Open</b> hoặc <code>Ctrl + O</code></li>
      <li><span class="k">Lưu tệp</span>: <b>File → Save</b> hoặc <code>Ctrl + S</code></li>
      <li>Lưu với tên khác: <b>File → Save As</b>.</li>
      <li>Đóng tệp: nháy nút <b>✕</b> ở góc trên bên phải.</li></ul>`,
    quiz: [
      { q: 'Tổ hợp phím nào dùng để lưu bảng tính?', o: ['Ctrl + O', 'Ctrl + N', 'Ctrl + S', 'Ctrl + P'], a: 2, why: 'Ctrl + S = Save (lưu).' },
      { q: 'Muốn lưu bảng tính thành một tệp có tên khác, em dùng lệnh nào?', o: ['Open', 'Save As', 'New', 'Close'], a: 1, why: 'Save As = lưu với tên mới hoặc ở chỗ mới.' } ] },
];
