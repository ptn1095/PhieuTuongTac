const META = { key: 'tin9-bai10-ham-countif', num: 11, so: 10, lop: 'Tin học 9', ic: '🔢', ten: 'Sử dụng hàm COUNTIF',
  st1: 'SỬ DỤNG<br>HÀM COUNTIF', big: 'HÀM<br>COUNTIF', cert: 'SỬ DỤNG HÀM COUNTIF',
  hello: 'Xin chào! Mình là Bít 🤖 Cùng học cách đếm có điều kiện bằng hàm COUNTIF nhé!' };
const TOPICS = [
  { title: 'Hàm COUNTIF là gì?', tip: 'COUNT + IF = đếm có điều kiện. Đếm bao nhiêu bạn nam chỉ một hàm!',
    key: '<b>=COUNTIF(vùng,</b><br><b>điều kiện)</b>: đếm',
    ill: () => svg(`${grid(30, 30, [['An', 'Nam'], ['Bình', 'Nữ'], ['Cường', 'Nam'], ['Dung', 'Nữ'], ['Huy', 'Nam']], { cw: 120, rh: 50, fs: 24, fill: { '0-1': '#D0EBFF', '2-1': '#D0EBFF', '4-1': '#D0EBFF' } })}
      ${ball(370, 80, 28, '#1982C4', '1', 26)}${ball(440, 120, 28, '#1982C4', '2', 26)}${ball(510, 80, 28, '#1982C4', '3', 26)}
      ${pillS(330, 180, 240, 60, '#FF006E', 'Nam: 3', 30)}
      ${fbar(30, 330, 540, 'E1', '=COUNTIF(B1:B5,"Nam")', 24)}
      ${stars3([570, 280], [320, 280], [570, 30])}`),
    html: `<ul>
      <li><span class="k">COUNTIF</span>: <b>đếm</b> số ô trong vùng <b>thoả mãn điều kiện</b>.</li>
      <li>Cú pháp: <code>=COUNTIF(range, criteria)</code></li>
      <li><b>range</b>: vùng ô cần đếm.</li>
      <li><b>criteria</b>: điều kiện để đếm.</li>
      <li>Ví dụ: <code>=COUNTIF(B1:B5,"Nam")</code> → 3</li></ul>`,
    quiz: [
      { q: 'Hàm COUNTIF dùng để làm gì?', o: ['Tính tổng có điều kiện', 'Đếm số ô thoả mãn điều kiện', 'Tìm giá trị lớn nhất', 'Sắp xếp dữ liệu'], a: 1, why: 'COUNTIF đếm các ô thoả mãn điều kiện.' },
      { q: 'Hàm COUNTIF có mấy đối số?', o: ['1', '3', '4', '2'], a: 3, why: 'Hai đối số: vùng (range) và điều kiện (criteria).' } ] },
  { title: 'Điều kiện là chữ', tip: 'Chữ trong điều kiện phải mặc áo ngoặc kép " " nha!',
    key: 'Chữ để trong <b>" "</b><br>Không phân biệt<br>hoa / thường',
    ill: () => svg(`${grid(30, 30, [['Giỏi'], ['Khá'], ['giỏi'], ['Đạt'], ['GIỎI']], { cw: 150, rh: 52, fs: 26, fill: { '0-0': '#D3F9D8', '2-0': '#D3F9D8', '4-0': '#D3F9D8' } })}
      ${pillS(260, 50, 310, 64, '#2DA44E', '"Giỏi" → 3', 32)}
      ${pillS(260, 150, 310, 56, '#1982C4', 'giỏi = GIỎI', 28)}
      ${fbar(30, 336, 540, 'C1', '=COUNTIF(A1:A5,"Giỏi")', 24)}
      ${stars3([570, 260], [300, 270], [570, 30])}`),
    html: `<ul>
      <li>Điều kiện là văn bản → đặt trong <span class="k">" "</span>: <code>"Giỏi"</code></li>
      <li>Không phân biệt chữ <b>hoa</b>, chữ <b>thường</b>: "giỏi" = "GIỎI".</li>
      <li>Phải gõ <b>đúng chính tả</b>, thừa dấu cách cũng không khớp.</li>
      <li>Đếm số bạn xếp loại Giỏi: <code>=COUNTIF(D2:D40,"Giỏi")</code></li></ul>`,
    quiz: [
      { q: 'Đếm số bạn "Giỏi" trong C2:C40, công thức đúng là:', o: ['=COUNT(C2:C40,"Giỏi")', '=COUNTIF("Giỏi",C2:C40)', '=COUNTIF(C2:C40,Giỏi)', '=COUNTIF(C2:C40,"Giỏi")'], a: 3, why: 'Vùng trước, điều kiện sau và chữ đặt trong " ".' },
      { q: 'A1:A3 chứa: Nam, NAM, nam. =COUNTIF(A1:A3,"Nam") bằng:', o: ['3', '1', '0', '2'], a: 0, why: 'COUNTIF không phân biệt chữ hoa, chữ thường.' } ] },
  { title: 'Điều kiện so sánh số', tip: 'Dấu so sánh và con số đi chung một cặp " " nhé!',
    key: '<b>"&gt;=8"</b> • <b>"&lt;5"</b> • <b>"&lt;&gt;0"</b><br>Bằng số: <b>10</b>',
    ill: () => svg(`${pillS(40, 40, 240, 70, '#2DA44E', '">=8"', 36)}${pillS(320, 40, 240, 70, '#FF7F11', '"&lt;5"', 36)}
      ${pillS(40, 150, 240, 70, '#8338EC', '"&lt;&gt;0"', 36)}${pillS(320, 150, 240, 70, '#FF006E', '10', 36)}
      ${grid(120, 270, [['9', '4', '8', '10']], { cw: 90, rh: 56, fs: 28, head: false, fill: { '0-0': '#D3F9D8', '0-2': '#D3F9D8', '0-3': '#D3F9D8' } })}
      ${T(300, 380, '">=8" → 3', 30, '#2B8A3E')}`),
    html: `<table class="tb"><tr><th>Điều kiện</th><th>Ý nghĩa</th></tr>
      <tr><td><code>"&gt;=8"</code></td><td>lớn hơn hoặc bằng 8</td></tr>
      <tr><td><code>"&lt;5"</code></td><td>nhỏ hơn 5</td></tr>
      <tr><td><code>"&lt;&gt;0"</code></td><td>khác 0</td></tr>
      <tr><td><code>10</code> hoặc <code>"10"</code></td><td>bằng 10</td></tr>
      <tr><td colspan="2">Dấu so sánh + số đặt chung trong " "</td></tr></table>`,
    quiz: [
      { q: 'Đếm số bạn có điểm từ 8 trở lên trong B2:B30, viết:', o: ['=COUNTIF(B2:B30,>=8)', '=COUNTIF(B2:B30,">=8")', '=COUNTIF(B2:B30,"=>8")', '=COUNTIF(>=8,B2:B30)'], a: 1, why: 'Dấu so sánh và số đặt chung trong " ": ">=8".' },
      { q: 'B1:B4 = 9, 4, 8, 10. =COUNTIF(B1:B4,"<8") bằng bao nhiêu?', o: ['3', '4', '1', '2'], a: 2, why: 'Chỉ có số 4 nhỏ hơn 8 → 1.' } ] },
  { title: 'Điều kiện lấy từ ô', tip: 'Đổi điều kiện trong ô E1 là kết quả tự đổi, khỏi sửa công thức!',
    key: 'Bằng ô: <b>E1</b><br>So sánh: <b>"&gt;="&amp;E1</b>',
    ill: () => svg(`${grid(30, 30, [['8A', '', '8A'], ['8B', '', ''], ['8A', '', '']], { cw: 110, rh: 56, fs: 26, cws: [110, 40, 120], fill: { '0-0': '#FFE3E3', '2-0': '#FFE3E3', '0-2': '#FFE066' } })}
      ${pillS(380, 50, 190, 60, '#FF006E', 'Kết quả: 2', 26)}
      ${pillS(380, 140, 190, 60, '#1982C4', 'E1 → ô', 28)}
      ${fbar(30, 250, 540, 'F1', '=COUNTIF(A1:A3,D1)', 26)}
      ${fbar(30, 320, 540, 'F2', '=COUNTIF(B:B,">="&E1)', 24)}
      ${stars3([570, 230], [30, 400], [570, 400])}`),
    html: `<ul>
      <li>Điều kiện có thể là <span class="k">địa chỉ ô</span> (không cần " "): <code>=COUNTIF(A2:A40,E1)</code></li>
      <li>So sánh với giá trị trong ô: dùng dấu <span class="k">&amp;</span> để nối:</li>
      <li><code>=COUNTIF(B2:B40,"&gt;="&amp;E1)</code></li>
      <li>Đổi giá trị ô E1 → kết quả <b>tự cập nhật</b>.</li></ul>`,
    quiz: [
      { q: 'Ô E1 chứa 7. Đếm số ô trong B2:B40 lớn hơn E1, viết:', o: ['=COUNTIF(B2:B40,">"&E1)', '=COUNTIF(B2:B40,">E1")', '=COUNTIF(B2:B40,>E1)', '=COUNTIF(E1,B2:B40)'], a: 0, why: 'Dùng & nối dấu ">" với giá trị của ô E1.' },
      { q: 'Ô D1 chứa chữ 8A. =COUNTIF(A2:A40,D1) đếm gì?', o: ['Số ô trống', 'Số ô có chữ D1', 'Số ô có nội dung 8A', 'Báo lỗi'], a: 2, why: 'Điều kiện là ô D1 → đếm các ô bằng giá trị của D1 (8A).' } ] },
  { title: 'Lập bảng thống kê', tip: 'Viết COUNTIF một lần rồi kéo xuống, nhớ ghim vùng dữ liệu bằng $!',
    key: 'Vùng dữ liệu dùng <b>$</b><br><b>=COUNTIF($C$2:$C$40,E2)</b>',
    ill: () => svg(`${grid(30, 30, [['Xếp loại', 'Số HS'], ['Giỏi', '12'], ['Khá', '18'], ['Đạt', '8']], { cw: 150, rh: 54, fs: 24, bold: [0], fill: { '1-1': '#D3F9D8', '2-1': '#D3F9D8', '3-1': '#D3F9D8' }, sel: [1, 1], handle: true })}
      ${arrow(372, 150, 372, 270, '#FF006E', 7)}
      ${pillS(400, 60, 170, 60, '#E5383B', '$C$2:$C$40', 20)}
      ${fbar(30, 320, 540, 'F2', '=COUNTIF($C$2:$C$40,E2)', 22)}
      ${stars3([570, 200], [460, 260], [30, 290])}`),
    html: `<ul>
      <li>Bảng thống kê: cột E ghi các loại, cột F đếm số lượng.</li>
      <li>Viết ở F2: <code>=COUNTIF($C$2:$C$40,E2)</code> rồi <b>kéo xuống</b>.</li>
      <li>Vùng dữ liệu dùng <span class="k">địa chỉ tuyệt đối</span> để không bị trượt.</li>
      <li>Điều kiện <code>E2</code> tương đối → tự đổi thành E3, E4…</li></ul>`,
    quiz: [
      { q: 'Viết COUNTIF ở F2 rồi kéo xuống F4. Vùng dữ liệu nên viết là:', o: ['C2:C40', 'C$2:C40', '$C$2:$C$40', 'C2:$C40'], a: 2, why: 'Vùng dữ liệu cố định → dùng địa chỉ tuyệt đối.' },
      { q: 'F2 có =COUNTIF($C$2:$C$40,E2). Kéo xuống F3 thì được:', o: ['=COUNTIF($C$2:$C$40,E3)', '=COUNTIF($C$3:$C$41,E3)', '=COUNTIF($C$2:$C$40,E2)', '=COUNTIF(C3:C41,E3)'], a: 0, why: 'Vùng tuyệt đối giữ nguyên, E2 tương đối → E3.' } ] },
  { title: 'COUNT hay COUNTIF?', tip: 'Có chữ IF ở đuôi là có điều kiện, nhớ vậy là không nhầm!',
    key: '<b>COUNT</b>: đếm ô có số<br><b>COUNTIF</b>: đếm theo<br>điều kiện',
    ill: () => svg(`${key3d(40, 40, 230, 100, '#1982C4', '#0F5A8A', 'COUNT', 40)}${key3d(330, 40, 230, 100, '#FF006E', '#B0004E', 'COUNTIF', 38)}
      ${T(300, 102, '→', 40, '#E5383B')}
      ${T(155, 200, 'Ô chứa số', 28, '#1864AB')}${T(445, 200, 'Thoả điều kiện', 28, '#C2185B')}
      ${T(155, 236, '(chữ không đếm)', 22, '#868E96', 'middle', 700)}${T(445, 236, '(cả chữ và số)', 22, '#868E96', 'middle', 700)}
      ${pillS(100, 290, 400, 64, '#FFC300', 'IF = có điều kiện', 32, 0, O)}
      ${stars3([30, 300], [570, 300], [300, 400])}`),
    html: `<table class="tb"><tr><th>Hàm</th><th>Đếm gì?</th></tr>
      <tr><td><b>COUNT</b></td><td>Các ô chứa <b>số</b></td></tr>
      <tr><td><b>COUNTIF</b></td><td>Các ô <b>thoả mãn điều kiện</b> (số hoặc chữ)</td></tr>
      <tr><td colspan="2">Đếm bạn vắng: <code>=COUNTIF(C2:C40,"Vắng")</code></td></tr>
      <tr><td colspan="2">Đếm bạn có điểm: <code>=COUNT(D2:D40)</code></td></tr></table>`,
    quiz: [
      { q: 'Muốn biết lớp có bao nhiêu bạn điểm dưới 5, dùng hàm nào?', o: ['SUM', 'COUNT', 'MAX', 'COUNTIF'], a: 3, why: 'Đếm có điều kiện (< 5) → COUNTIF.' },
      { q: 'Cột C ghi "Có mặt"/"Vắng". Đếm số bạn vắng dùng:', o: ['=COUNT(C2:C40)', '=COUNTIF(C2:C40,"Vắng")', '=SUM(C2:C40)', '=COUNTIF("Vắng")'], a: 1, why: 'Đếm ô chứa chữ "Vắng" → COUNTIF.' } ] },
];
