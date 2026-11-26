const META = { key: 'tin9-bai11-ham-sumif', num: 12, so: 11, lop: 'Tin học 9', ic: '➕', ten: 'Sử dụng hàm SUMIF',
  st1: 'SỬ DỤNG<br>HÀM SUMIF', big: 'HÀM<br>SUMIF', cert: 'SỬ DỤNG HÀM SUMIF',
  hello: 'Xin chào! Mình là Bít 🤖 Cùng học cách tính tổng có điều kiện bằng hàm SUMIF nhé!' };
const TOPICS = [
  { title: 'Hàm SUMIF là gì?', tip: 'SUM + IF = cộng có chọn lọc. Chỉ cộng những khoản thoả điều kiện!',
    key: '<b>=SUMIF(range, criteria,</b><br><b>sum_range)</b>',
    ill: () => svg(`${grid(30, 30, [['Ăn', '50'], ['Học', '30'], ['Ăn', '40'], ['Chơi', '20']], { cw: 120, rh: 54, fs: 24, fill: { '0-0': '#FFE3E3', '2-0': '#FFE3E3', '0-1': '#D3F9D8', '2-1': '#D3F9D8' } })}
      ${T(440, 90, '50 + 40', 36, '#2B8A3E')}${pillS(330, 120, 240, 64, '#2DA44E', 'Ăn: 90', 32)}
      ${fbar(30, 320, 540, 'E1', '=SUMIF(A1:A4,"Ăn",B1:B4)', 22)}
      ${stars3([570, 240], [330, 260], [570, 30])}`),
    html: `<ul>
      <li><span class="k">SUMIF</span>: <b>tính tổng</b> các ô thoả mãn điều kiện.</li>
      <li><code>=SUMIF(range, criteria, sum_range)</code></li>
      <li><b>range</b>: vùng xét điều kiện • <b>criteria</b>: điều kiện.</li>
      <li><b>sum_range</b>: vùng chứa các số cần cộng.</li>
      <li>Tổng tiền ăn: <code>=SUMIF(A1:A4,"Ăn",B1:B4)</code></li></ul>`,
    quiz: [
      { q: 'Hàm SUMIF dùng để làm gì?', o: ['Đếm ô thoả điều kiện', 'Tìm giá trị nhỏ nhất', 'Tính tổng các ô thoả điều kiện', 'Tính trung bình'], a: 2, why: 'SUMIF cộng các giá trị thoả mãn điều kiện.' },
      { q: 'A1:A4 = Ăn, Học, Ăn, Chơi; B1:B4 = 50, 30, 40, 20. =SUMIF(A1:A4,"Ăn",B1:B4) =', o: ['140', '50', '2', '90'], a: 3, why: 'Cộng các khoản "Ăn": 50 + 40 = 90.' } ] },
  { title: 'Vùng điều kiện, vùng tổng', tip: 'Xét điều kiện ở cột này, cộng số ở cột kia. Hai cột phải dài bằng nhau!',
    key: 'Xét ở <b>range</b><br>Cộng ở <b>sum_range</b><br>Hai vùng cùng số hàng',
    ill: () => svg(`${grid(60, 30, [['Loại', 'Tiền'], ['Thu', '100'], ['Chi', '15'], ['Chi', '25']], { cw: 150, rh: 54, fs: 26, bold: [0] })}
      <rect x="104" y="118" width="150" height="162" fill="#FF006E" opacity=".12" stroke="#FF006E" stroke-width="5"/>
      <rect x="254" y="118" width="150" height="162" fill="#2DA44E" opacity=".12" stroke="#2DA44E" stroke-width="5"/>
      ${pillS(40, 310, 250, 56, '#FF006E', 'range: xét', 26)}${pillS(310, 310, 260, 56, '#2DA44E', 'sum_range: cộng', 24)}
      ${pillS(430, 140, 140, 60, '#1982C4', '= 40', 30)}
      ${stars3([570, 40], [30, 400], [570, 400])}`),
    html: `<ul>
      <li><span class="k">range</span>: vùng chứa giá trị để <b>so với điều kiện</b> (thường là cột chữ).</li>
      <li><span class="k">sum_range</span>: vùng chứa <b>số cần cộng</b>.</li>
      <li>Hai vùng phải <b>cùng số hàng</b> và bắt đầu cùng hàng.</li>
      <li>Hàng nào thoả điều kiện thì cộng số ở <b>cùng hàng</b> đó.</li></ul>`,
    quiz: [
      { q: 'Trong =SUMIF(A2:A9,"Ăn",B2:B9), phần B2:B9 là gì?', o: ['Vùng điều kiện', 'Điều kiện', 'Vùng tính tổng', 'Tên hàm'], a: 2, why: 'Đối số thứ 3 (sum_range) là vùng chứa số cần cộng.' },
      { q: 'Cột A ghi "Thu"/"Chi", cột B ghi tiền (hàng 2–20). Tổng chi là:', o: ['=SUMIF(A2:A20,"Chi",B2:B20)', '=SUMIF(B2:B20,"Chi",A2:A20)', '=SUM(A2:A20,"Chi")', '=COUNTIF(A2:A20,"Chi")'], a: 0, why: 'Xét điều kiện ở cột A, cộng tiền ở cột B.' } ] },
  { title: 'Điều kiện so sánh số', tip: 'Nếu cộng chính các ô dùng làm điều kiện thì bỏ qua đối số thứ ba cũng được!',
    key: '<b>"&gt;=100"</b> • <b>"&lt;50"</b><br>Không có sum_range →<br>cộng chính <b>range</b>',
    ill: () => svg(`${grid(30, 30, [['120'], ['80'], ['200'], ['60']], { cw: 140, rh: 56, fs: 26, fill: { '0-0': '#D3F9D8', '2-0': '#D3F9D8' } })}
      ${pillS(250, 50, 320, 64, '#FF006E', '">=100"', 34)}${arrow(410, 124, 410, 170, O, 6)}${pillS(250, 180, 320, 64, '#2DA44E', '120 + 200 = 320', 26)}
      ${fbar(30, 330, 540, 'B1', '=SUMIF(A1:A4,">=100")', 24)}
      ${stars3([570, 290], [240, 290], [30, 300])}`),
    html: `<ul>
      <li>Điều kiện so sánh đặt trong " ": <code>"&gt;=100"</code>, <code>"&lt;50"</code>, <code>"&lt;&gt;0"</code></li>
      <li>Nếu cộng <b>chính vùng điều kiện</b> → được bỏ đối số thứ 3:</li>
      <li><code>=SUMIF(A1:A4,"&gt;=100")</code> cộng các số ≥ 100.</li>
      <li>Tổng tiền các đơn từ 100 nghìn: <code>=SUMIF(C2:C30,"&gt;=100")</code></li></ul>`,
    quiz: [
      { q: 'A1:A4 = 120, 80, 200, 60. Công thức =SUMIF(A1:A4,">=100") bằng:', o: ['320', '460', '140', '2'], a: 0, why: 'Cộng các số ≥ 100: 120 + 200 = 320.' },
      { q: 'Khi nào được bỏ đối số thứ ba (sum_range) của SUMIF?', o: ['Không bao giờ', 'Khi điều kiện là chữ', 'Khi cộng chính các ô của vùng điều kiện', 'Khi vùng có ô trống'], a: 2, why: 'Thiếu sum_range thì SUMIF cộng chính các ô trong range.' } ] },
  { title: 'Điều kiện lấy từ ô', tip: 'Đổi tên khoản ở ô E2 là tổng tự tính lại. Tiện ghê!',
    key: 'Điều kiện là ô: <b>E2</b><br>So sánh: <b>"&gt;"&amp;E1</b>',
    ill: () => svg(`${grid(30, 30, [['Ăn', '50', '', 'Ăn'], ['Học', '30', '', ''], ['Ăn', '40', '', '']], { cw: 100, rh: 56, fs: 24, cws: [100, 90, 30, 100], fill: { '0-3': '#FFE066', '0-0': '#FFE3E3', '2-0': '#FFE3E3' } })}
      ${pillS(420, 60, 150, 60, '#2DA44E', '= 90', 30)}
      ${fbar(30, 250, 540, 'E2', '=SUMIF(A1:A3,D1,B1:B3)', 22)}
      ${fbar(30, 320, 540, 'E3', '=SUMIF(B1:B3,">"&F1)', 24)}
      ${stars3([570, 200], [30, 400], [570, 400])}`),
    html: `<ul>
      <li>Điều kiện là <span class="k">địa chỉ ô</span>, không cần " ": <code>=SUMIF(A2:A30,E2,B2:B30)</code></li>
      <li>So sánh với giá trị trong ô: nối bằng <span class="k">&amp;</span></li>
      <li><code>=SUMIF(B2:B30,"&gt;"&amp;F1)</code></li>
      <li>Sửa ô điều kiện → tổng <b>tự cập nhật</b>.</li></ul>`,
    quiz: [
      { q: 'Ô F1 chứa 50. Cộng các số trong B2:B30 lớn hơn F1, viết:', o: ['=SUMIF(B2:B30,">F1")', '=SUMIF(B2:B30,">"&F1)', '=SUMIF(F1,B2:B30)', '=SUM(B2:B30>F1)'], a: 1, why: 'Dùng & nối dấu ">" với giá trị ô F1.' },
      { q: 'Điều kiện là ô D1 chứa chữ "Ăn", công thức nào đúng?', o: ['=SUMIF(A2:A9,"D1",B2:B9)', '=SUMIF(D1,A2:A9,B2:B9)', '=SUMIF(A2:A9,&D1,B2:B9)', '=SUMIF(A2:A9,D1,B2:B9)'], a: 3, why: 'Dùng thẳng địa chỉ ô D1, không đặt trong " ".' } ] },
  { title: 'Bảng tổng hợp theo khoản', tip: 'Viết SUMIF một lần rồi kéo xuống, nhớ ghim hai vùng bằng $!',
    key: 'Hai vùng dùng <b>$</b><br>Điều kiện <b>E2</b> tương đối',
    ill: () => svg(`${grid(30, 30, [['Khoản', 'Tổng'], ['Ăn', '90'], ['Học', '30'], ['Chơi', '20']], { cw: 150, rh: 54, fs: 24, bold: [0], fill: { '1-1': '#D3F9D8', '2-1': '#D3F9D8', '3-1': '#D3F9D8' }, sel: [1, 1], handle: true })}
      ${arrow(372, 150, 372, 270, '#FF006E', 7)}
      ${pillS(400, 60, 170, 60, '#E5383B', '$ $ $', 30)}
      ${fbar(30, 320, 540, 'F2', '=SUMIF($A$2:$A$30,E2,$B$2:$B$30)', 18)}
      ${stars3([570, 200], [460, 260], [30, 290])}`),
    html: `<ul>
      <li>Cột E ghi các khoản, cột F tính tổng từng khoản.</li>
      <li>F2: <code>=SUMIF($A$2:$A$30,E2,$B$2:$B$30)</code> rồi <b>kéo xuống</b>.</li>
      <li><span class="k">range</span> và <span class="k">sum_range</span> dùng địa chỉ <b>tuyệt đối</b>.</li>
      <li>Điều kiện <code>E2</code> tương đối → tự thành E3, E4…</li></ul>`,
    quiz: [
      { q: 'F2 có =SUMIF($A$2:$A$30,E2,$B$2:$B$30). Kéo xuống F3 được:', o: ['=SUMIF($A$2:$A$30,E3,$B$2:$B$30)', '=SUMIF($A$3:$A$31,E3,$B$3:$B$31)', '=SUMIF($A$2:$A$30,E2,$B$2:$B$30)', '=SUMIF(A3:A31,E3,B3:B31)'], a: 0, why: 'Hai vùng tuyệt đối giữ nguyên, E2 tương đối → E3.' },
      { q: 'Quên dấu $ ở vùng dữ liệu rồi kéo xuống, lỗi gì xảy ra?', o: ['Báo #NAME?', 'Không có lỗi gì', 'Vùng bị trượt xuống, tổng bị sai', 'Bảng tính tự thêm $'], a: 2, why: 'Vùng tương đối trượt theo hàng → bỏ sót dữ liệu, tổng sai.' } ] },
  { title: 'Ứng dụng: quản lí thu chi', tip: 'Dùng SUMIF quản lí tiền tiêu vặt, cuối tháng biết ngay mình tiêu vào đâu!',
    key: 'Tổng thu, tổng chi<br>theo từng <b>khoản</b><br>bằng <b>SUMIF</b>',
    ill: () => svg(`${grid(30, 30, [['Khoản', 'Loại', 'Tiền'], ['Mẹ cho', 'Thu', '100'], ['Bút', 'Chi', '15'], ['Truyện', 'Chi', '25']], { cw: 110, rh: 50, fs: 22, cws: [120, 90, 100], bold: [0] })}
      <rect x="400" y="40" width="170" height="210" rx="18" fill="#fff" stroke="${O}" stroke-width="5"/>
      ${T(485, 90, 'Thu: 100', 26, '#2B8A3E')}${T(485, 140, 'Chi: 40', 26, '#C92A2A')}<line x1="420" y1="160" x2="550" y2="160" stroke="${O}" stroke-width="4"/>${T(485, 210, 'Còn: 60', 28, '#1864AB')}
      ${pillS(40, 300, 520, 60, '#8338EC', '=SUMIF(B2:B4,"Chi",C2:C4)', 24)}
      ${stars3([570, 280], [30, 390], [570, 390])}`),
    html: `<ul>
      <li>Ghi mỗi khoản: <b>ngày, nội dung, loại (Thu / Chi), số tiền</b>.</li>
      <li>Tổng thu: <code>=SUMIF(B2:B50,"Thu",C2:C50)</code></li>
      <li>Tổng chi: <code>=SUMIF(B2:B50,"Chi",C2:C50)</code></li>
      <li>Còn lại = Tổng thu − Tổng chi.</li>
      <li>Vẽ biểu đồ tròn để xem tỉ lệ các khoản chi.</li></ul>`,
    quiz: [
      { q: 'Cột B ghi "Thu"/"Chi", cột C ghi tiền (hàng 2–50). Tổng thu là:', o: ['=SUM(C2:C50)', '=SUMIF(C2:C50,"Thu",B2:B50)', '=COUNTIF(B2:B50,"Thu")', '=SUMIF(B2:B50,"Thu",C2:C50)'], a: 3, why: 'Vùng điều kiện là cột B, cộng tiền ở cột C.' },
      { q: 'Tổng thu ở F1, tổng chi ở F2. Số tiền còn lại được tính bằng:', o: ['=F1-F2', '=F1+F2', '=SUMIF(F1,F2)', '=COUNTIF(F1:F2)'], a: 0, why: 'Còn lại = tổng thu − tổng chi.' } ] },
];
