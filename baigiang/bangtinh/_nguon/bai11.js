const META = { key: 'b11-countif-sumif', num: 11, lop: 'Tin học 9', ic: '🔢', ten: 'Hàm COUNTIF và SUMIF',
  st1: 'HÀM COUNTIF<br>VÀ SUMIF', big: 'COUNTIF<br>VÀ SUMIF', cert: 'HÀM COUNTIF VÀ SUMIF',
  hello: 'Xin chào! Mình là Bít 🤖 Cùng đếm và tính tổng có điều kiện thật nhanh nhé!' };
const TOPICS = [
  { title: 'Hàm COUNTIF', tip: 'COUNT + IF = đếm có điều kiện. Đếm bao nhiêu bạn nam chỉ một hàm!',
    key: '<b>=COUNTIF(vùng,</b><br><b>điều kiện)</b>: đếm',
    ill: () => svg(`${grid(30, 30, [['An', 'Nam'], ['Bình', 'Nữ'], ['Cường', 'Nam'], ['Dung', 'Nữ'], ['Huy', 'Nam']], { cw: 120, rh: 50, fs: 24, fill: { '0-1': '#D0EBFF', '2-1': '#D0EBFF', '4-1': '#D0EBFF' } })}
      ${ball(370, 80, 28, '#1982C4', '1', 26)}${ball(440, 120, 28, '#1982C4', '2', 26)}${ball(510, 80, 28, '#1982C4', '3', 26)}
      ${pillS(330, 180, 240, 60, '#FF006E', 'Nam: 3', 30)}
      ${fbar(30, 330, 540, 'E1', '=COUNTIF(B1:B5,"Nam")', 24)}
      ${stars3([570, 280], [320, 280], [570, 30])}`),
    html: `<ul>
      <li><span class="k">COUNTIF</span>: <b>đếm</b> số ô trong vùng <b>thoả điều kiện</b>.</li>
      <li>Cú pháp: <code>=COUNTIF(vùng, điều_kiện)</code></li>
      <li>Đếm số bạn nam: <code>=COUNTIF(B1:B5,"Nam")</code></li>
      <li>Đếm được cả ô chứa <b>chữ</b> lẫn ô chứa <b>số</b>.</li>
      <li>Không phân biệt chữ hoa, chữ thường.</li></ul>`,
    quiz: [
      { q: 'Hàm COUNTIF dùng để làm gì?', o: ['Tính tổng có điều kiện', 'Đếm số ô thoả điều kiện', 'Tìm giá trị lớn nhất', 'Sắp xếp dữ liệu'], a: 1, why: 'COUNTIF đếm các ô thoả điều kiện.' },
      { q: 'Cột C chứa xếp loại. Đếm số bạn "Giỏi" trong C2:C40, viết:', o: ['=COUNT(C2:C40,"Giỏi")', '=COUNTIF("Giỏi",C2:C40)', '=SUMIF(C2:C40,"Giỏi")', '=COUNTIF(C2:C40,"Giỏi")'], a: 3, why: 'Vùng trước, điều kiện sau: =COUNTIF(C2:C40,"Giỏi").' } ] },
  { title: 'Viết điều kiện', tip: 'Điều kiện có dấu so sánh thì gói cả dấu lẫn số vào trong " " nha!',
    key: '<b>"Nam"</b> • <b>"&gt;=8"</b> • <b>"&lt;&gt;0"</b><br>Điều kiện để trong " "',
    ill: () => svg(`${pillS(40, 40, 240, 70, '#1982C4', '"Nam"', 36)}${pillS(320, 40, 240, 70, '#2DA44E', '">=8"', 36)}
      ${pillS(40, 150, 240, 70, '#FF7F11', '"&lt;5"', 36)}${pillS(320, 150, 240, 70, '#8338EC', '"&lt;&gt;0"', 36)}
      ${pillS(40, 260, 240, 70, '#FF006E', '10', 36)}${pillS(320, 260, 240, 70, '#2EC4B6', 'E1', 36)}
      ${T(300, 380, 'Số hoặc ô: không cần " "', 26, '#8338EC')}`),
    html: `<table class="tb"><tr><th>Điều kiện</th><th>Ý nghĩa</th></tr>
      <tr><td><code>"Nam"</code></td><td>bằng chữ Nam</td></tr>
      <tr><td><code>"&gt;=8"</code></td><td>lớn hơn hoặc bằng 8</td></tr>
      <tr><td><code>"&lt;&gt;0"</code></td><td>khác 0</td></tr>
      <tr><td><code>10</code> hoặc <code>E1</code></td><td>bằng 10 / bằng giá trị ô E1</td></tr>
      <tr><td><code>"&gt;="&amp;E1</code></td><td>lớn hơn hoặc bằng giá trị ô E1</td></tr></table>`,
    quiz: [
      { q: 'Đếm số bạn có điểm từ 8 trở lên trong B2:B30, viết:', o: ['=COUNTIF(B2:B30,>=8)', '=COUNTIF(B2:B30,">=8")', '=COUNTIF(B2:B30,"=>8")', '=COUNTIF(>=8,B2:B30)'], a: 1, why: 'Dấu so sánh và số đặt chung trong " ": ">=8".' },
      { q: 'Điều kiện ">="&E1 có nghĩa là gì?', o: ['Lớn hơn hoặc bằng giá trị ô E1', 'Bằng chữ E1', 'Nhỏ hơn E1', 'Lỗi cú pháp'], a: 0, why: 'Dấu & nối ">=" với giá trị trong ô E1.' } ] },
  { title: 'Hàm SUMIF', tip: 'SUM + IF = cộng có chọn lọc. Chỉ cộng những khoản thoả điều kiện!',
    key: '<b>=SUMIF(vùng ĐK, điều kiện,</b><br><b>vùng tính tổng)</b>',
    ill: () => svg(`${grid(30, 30, [['Ăn', '50'], ['Học', '30'], ['Ăn', '40'], ['Chơi', '20']], { cw: 120, rh: 54, fs: 24, fill: { '0-0': '#FFE3E3', '2-0': '#FFE3E3', '0-1': '#D3F9D8', '2-1': '#D3F9D8' } })}
      ${T(440, 90, '50 + 40', 36, '#2B8A3E')}${pillS(330, 120, 240, 64, '#2DA44E', 'Ăn: 90', 32)}
      ${fbar(30, 320, 540, 'E1', '=SUMIF(A1:A4,"Ăn",B1:B4)', 22)}
      ${stars3([570, 240], [330, 260], [570, 30])}`),
    html: `<ul>
      <li><span class="k">SUMIF</span>: <b>tính tổng</b> các ô thoả điều kiện.</li>
      <li><code>=SUMIF(vùng_ĐK, điều_kiện, vùng_tổng)</code></li>
      <li>Tổng tiền ăn: <code>=SUMIF(A1:A4,"Ăn",B1:B4)</code></li>
      <li>Hai vùng phải có <b>cùng số hàng</b>.</li></ul>`,
    quiz: [
      { q: 'Trong =SUMIF(A2:A9,"Ăn",B2:B9), phần B2:B9 là gì?', o: ['Vùng điều kiện', 'Điều kiện', 'Vùng tính tổng', 'Tên hàm'], a: 2, why: 'Đối số thứ 3 là vùng chứa số cần cộng.' },
      { q: 'A1:A4 = Ăn, Học, Ăn, Chơi; B1:B4 = 50, 30, 40, 20. =SUMIF(A1:A4,"Ăn",B1:B4) =', o: ['140', '50', '2', '90'], a: 3, why: 'Cộng các khoản "Ăn": 50 + 40 = 90.' } ] },
  { title: 'SUMIF với điều kiện số', tip: 'Nếu cộng chính các ô dùng làm điều kiện thì bỏ qua đối số thứ ba cũng được!',
    key: 'Vùng tính tổng = vùng ĐK<br>→ bỏ đối số thứ 3',
    ill: () => svg(`${grid(30, 30, [['120'], ['80'], ['200'], ['60']], { cw: 140, rh: 56, fs: 26, fill: { '0-0': '#D3F9D8', '2-0': '#D3F9D8' } })}
      ${pillS(250, 50, 320, 64, '#FF006E', '">=100"', 34)}${arrow(410, 124, 410, 170, O, 6)}${pillS(250, 180, 320, 64, '#2DA44E', '120 + 200 = 320', 26)}
      ${fbar(30, 330, 540, 'B1', '=SUMIF(A1:A4,">=100")', 24)}
      ${stars3([570, 290], [240, 290], [30, 300])}`),
    html: `<ul>
      <li>Điều kiện là số: <code>=SUMIF(B2:B20,"&gt;=100",C2:C20)</code></li>
      <li>Nếu cộng <b>chính vùng điều kiện</b> → được bỏ đối số thứ 3:</li>
      <li><code>=SUMIF(A1:A4,"&gt;=100")</code> cộng các số ≥ 100.</li>
      <li>Kéo công thức xuống nhiều ô → nhớ dùng <span class="k">$</span> cho vùng: <code>$A$1:$A$4</code></li></ul>`,
    quiz: [
      { q: 'A1:A4 = 120, 80, 200, 60. Công thức =SUMIF(A1:A4,">=100") bằng:', o: ['320', '460', '140', '2'], a: 0, why: 'Cộng các số ≥ 100: 120 + 200 = 320.' },
      { q: 'Viết SUMIF ở E2 rồi kéo xuống E3, E4. Vùng dữ liệu nên viết dạng nào?', o: ['A2:A20', 'A$2:A20', '$A$2:$A$20', 'A2:$A20'], a: 2, why: 'Vùng dữ liệu cố định → dùng địa chỉ tuyệt đối.' } ] },
  { title: 'So sánh các hàm đếm, tổng', tip: 'Có chữ IF ở đuôi là có điều kiện, nhớ vậy là không nhầm!',
    key: '<b>COUNT</b> ≠ <b>COUNTIF</b><br><b>SUM</b> ≠ <b>SUMIF</b>',
    ill: () => svg(`${key3d(40, 40, 230, 100, '#1982C4', '#0F5A8A', 'COUNT', 40)}${key3d(330, 40, 230, 100, '#FF006E', '#B0004E', 'COUNTIF', 38)}
      ${key3d(40, 200, 230, 100, '#2DA44E', '#1B7A35', 'SUM', 44)}${key3d(330, 200, 230, 100, '#FF7F11', '#C85A00', 'SUMIF', 40)}
      ${T(300, 102, '→', 40, '#E5383B')}${T(300, 262, '→', 40, '#E5383B')}
      ${T(300, 380, 'IF = có điều kiện', 34, '#8338EC')}`),
    html: `<table class="tb"><tr><th>Hàm</th><th>Công việc</th></tr>
      <tr><td><b>COUNT</b></td><td>Đếm ô chứa <b>số</b></td></tr>
      <tr><td><b>COUNTIF</b></td><td>Đếm ô <b>thoả điều kiện</b></td></tr>
      <tr><td><b>SUM</b></td><td>Cộng tất cả các số</td></tr>
      <tr><td><b>SUMIF</b></td><td>Cộng các số <b>thoả điều kiện</b></td></tr>
      <tr><td><b>IF</b></td><td>Chọn kết quả theo điều kiện</td></tr></table>`,
    quiz: [
      { q: 'Muốn biết lớp có bao nhiêu bạn điểm dưới 5, dùng hàm nào?', o: ['SUM', 'COUNT', 'SUMIF', 'COUNTIF'], a: 3, why: 'Đếm có điều kiện → COUNTIF.' },
      { q: 'Muốn tính tổng tiền đã chi cho mục "Sách vở", dùng hàm nào?', o: ['SUMIF', 'COUNTIF', 'MAX', 'AVERAGE'], a: 0, why: 'Tính tổng có điều kiện → SUMIF.' } ] },
  { title: 'Ứng dụng: sổ thu chi', tip: 'Dùng SUMIF quản lí tiền tiêu vặt, cuối tháng biết ngay mình tiêu vào đâu!',
    key: 'Tổng thu, tổng chi<br>theo từng <b>khoản</b><br>bằng <b>SUMIF</b>',
    ill: () => svg(`${grid(30, 30, [['Khoản', 'Loại', 'Tiền'], ['Mẹ cho', 'Thu', '100'], ['Bút', 'Chi', '15'], ['Truyện', 'Chi', '25']], { cw: 110, rh: 50, fs: 22, cws: [120, 90, 100], bold: [0] })}
      <rect x="400" y="40" width="170" height="210" rx="18" fill="#fff" stroke="${O}" stroke-width="5"/>
      ${T(485, 90, 'Thu: 100', 26, '#2B8A3E')}${T(485, 140, 'Chi: 40', 26, '#C92A2A')}<line x1="420" y1="160" x2="550" y2="160" stroke="${O}" stroke-width="4"/>${T(485, 210, 'Còn: 60', 28, '#1864AB')}
      ${pillS(40, 300, 520, 60, '#8338EC', '=SUMIF(B2:B4,"Chi",C2:C4)', 24)}
      ${stars3([570, 280], [30, 390], [570, 390])}`),
    html: `<ul>
      <li>Ghi mỗi khoản: <b>ngày, nội dung, loại (Thu / Chi), số tiền</b>.</li>
      <li>Tổng chi: <code>=SUMIF(B2:B50,"Chi",C2:C50)</code></li>
      <li>Số lần chi: <code>=COUNTIF(B2:B50,"Chi")</code></li>
      <li>Còn lại = Tổng thu − Tổng chi.</li>
      <li>Vẽ biểu đồ tròn để xem tỉ lệ các khoản chi.</li></ul>`,
    quiz: [
      { q: 'Cột B ghi "Thu"/"Chi", cột C ghi tiền. Tổng thu (hàng 2–50) là:', o: ['=SUM(C2:C50)', '=SUMIF(B2:B50,"Thu",C2:C50)', '=COUNTIF(B2:B50,"Thu")', '=SUMIF(C2:C50,"Thu",B2:B50)'], a: 1, why: 'Vùng điều kiện là cột B, cộng tiền ở cột C.' },
      { q: 'Công thức =COUNTIF(B2:B50,"Chi") cho biết điều gì?', o: ['Tổng số tiền đã chi', 'Số tiền còn lại', 'Số lần đã chi tiêu', 'Khoản chi lớn nhất'], a: 2, why: 'COUNTIF đếm số hàng có loại "Chi".' } ] },
];
