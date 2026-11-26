const META = { key: 'tin9-bai12-ham-if', num: 13, so: 12, lop: 'Tin học 9', ic: '🔀', ten: 'Sử dụng hàm IF',
  st1: 'SỬ DỤNG<br>HÀM IF', big: 'HÀM IF', cert: 'SỬ DỤNG HÀM IF',
  hello: 'Xin chào! Mình là Bít 🤖 Hôm nay bảng tính sẽ biết tự quyết định nhờ hàm IF!' };
const fork = (q, yes, no) => `<polygon points="300,30 430,110 300,190 170,110" fill="#FFD60A" stroke="${O}" stroke-width="7" stroke-linejoin="round"/>${T(300, 122, q, 30)}
  ${curve(200, 150, 150, 200, 130, 260, '#2DA44E', 8)}${curve(400, 150, 450, 200, 470, 260, '#E5383B', 8)}
  ${T(120, 196, 'Đúng', 24, '#2B8A3E')}${T(480, 196, 'Sai', 24, '#C92A2A')}
  ${pillS(30, 270, 220, 64, '#2DA44E', yes, 28)}${pillS(350, 270, 220, 64, '#E5383B', no, 28)}`;
const TOPICS = [
  { title: 'Hàm IF là gì?', tip: 'IF nghĩa là "nếu": nếu đúng thì làm thế này, sai thì làm thế kia!',
    key: '<b>=IF(điều kiện,</b><br><b>giá trị đúng, giá trị sai)</b>',
    ill: () => svg(`${fork('Điểm ≥ 5?', 'Đạt', 'Chưa đạt')}
      ${T(300, 390, '=IF(B2>=5,"Đạt","Chưa đạt")', 26, '#8338EC')}`),
    html: `<ul>
      <li><span class="k">IF</span> cho kết quả <b>tuỳ theo điều kiện</b> đúng hay sai.</li>
      <li>Cú pháp: <code>=IF(điều_kiện, giá_trị_đúng, giá_trị_sai)</code></li>
      <li>Điều kiện <b>đúng</b> → trả về giá trị thứ 2.</li>
      <li>Điều kiện <b>sai</b> → trả về giá trị thứ 3.</li>
      <li><code>=IF(B2&gt;=5,"Đạt","Chưa đạt")</code></li></ul>`,
    quiz: [
      { q: 'B2 = 7. Công thức =IF(B2>=5,"Đạt","Chưa đạt") cho kết quả:', o: ['Chưa đạt', '7', 'Đạt', 'TRUE'], a: 2, why: '7 ≥ 5 đúng → trả về "Đạt".' },
      { q: 'Hàm IF có bao nhiêu đối số (tham số)?', o: ['1', '2', '4', '3'], a: 3, why: 'Điều kiện, giá trị khi đúng, giá trị khi sai.' } ] },
  { title: 'Biểu thức điều kiện', tip: 'Dấu "khác" trong bảng tính viết là &lt;&gt; nha, không phải ≠!',
    key: '<b>=  &lt;&gt;  &gt;  &lt;  &gt;=  &lt;=</b><br>Kết quả: TRUE / FALSE',
    ill: () => svg(`${[['=', '#1982C4'], ['<>', '#E5383B'], ['>', '#2DA44E'], ['<', '#FF7F11'], ['>=', '#8338EC'], ['<=', '#FF006E']].map(([t, c], i) => key3d(40 + (i % 3)*180, 30 + Math.floor(i/3)*140, 150, 110, c, '#1D3557', t.replace(/</g, '&lt;').replace(/>/g, '&gt;'), 54)).join('')}
      ${pillS(40, 320, 240, 60, '#2DA44E', 'TRUE', 32)}${pillS(320, 320, 240, 60, '#E5383B', 'FALSE', 32)}`),
    html: `<table class="tb"><tr><th>Kí hiệu</th><th>Ý nghĩa</th><th>Ví dụ</th></tr>
      <tr><td><code>=</code> <code>&lt;&gt;</code></td><td>bằng, khác</td><td><code>C2="Nam"</code></td></tr>
      <tr><td><code>&gt;</code> <code>&lt;</code></td><td>lớn hơn, nhỏ hơn</td><td><code>B2&gt;100</code></td></tr>
      <tr><td><code>&gt;=</code> <code>&lt;=</code></td><td>lớn hơn hoặc bằng…</td><td><code>D2&gt;=8</code></td></tr>
      <tr><td colspan="3">Kết quả so sánh: <b>TRUE</b> (đúng) / <b>FALSE</b> (sai)</td></tr></table>`,
    quiz: [
      { q: 'Trong bảng tính, điều kiện "A1 khác 0" được viết là:', o: ['A1≠0', 'A1<>0', 'A1!=0', 'A1=/0'], a: 1, why: 'Dấu khác trong bảng tính là <>.' },
      { q: 'A1 = 10. Công thức =A1<=10 cho kết quả gì?', o: ['TRUE', 'FALSE', '10', '#VALUE!'], a: 0, why: '10 ≤ 10 là đúng → TRUE.' } ] },
  { title: 'Kết quả là chữ', tip: 'Chữ trong công thức phải mặc áo ngoặc kép " " mới ra ngoài được!',
    key: 'Văn bản để trong<br>dấu <b>" "</b>',
    ill: () => svg(`${pillS(40, 40, 520, 80, '#fff', '=IF(C2="Nam","Anh","Chị")', 32, 0, '#8338EC')}
      ${grid(140, 150, [['Nam', 'Anh'], ['Nữ', 'Chị']], { cw: 150, rh: 60, fs: 28, head: false, fill: { '0-1': '#D0EBFF', '1-1': '#FFE3E3' } })}
      ${pillS(110, 310, 380, 64, '#FF006E', 'Chữ → trong " "', 30)}
      ${stars3([40, 200], [560, 200], [560, 390])}`),
    html: `<ul>
      <li>Giá trị là <b>văn bản</b> phải đặt trong dấu <span class="k">" "</span> (nháy kép).</li>
      <li>Số và địa chỉ ô <b>không</b> cần dấu nháy.</li>
      <li><code>=IF(C2="Nam","Anh","Chị")</code></li>
      <li>Muốn để trống: dùng <code>""</code></li>
      <li>Quên dấu nháy → lỗi <code>#NAME?</code></li></ul>`,
    quiz: [
      { q: 'Viết công thức nào đúng khi kết quả là chữ "Đỗ" hoặc "Trượt"?', o: ['=IF(B2>=5,Đỗ,Trượt)', `=IF(B2>=5,'Đỗ','Trượt')`, '=IF(B2>=5;Đỗ;Trượt)', '=IF(B2>=5,"Đỗ","Trượt")'], a: 3, why: 'Văn bản phải đặt trong dấu nháy kép " ".' },
      { q: 'Quên dấu " " quanh chữ trong hàm IF thường gây lỗi gì?', o: ['#DIV/0!', '#NAME?', '#####', 'Không lỗi'], a: 1, why: 'Bảng tính tưởng chữ đó là tên hàm / tên ô lạ → #NAME?' } ] },
  { title: 'IF lồng nhau', tip: 'Có 3 mức xếp loại thì dùng 2 hàm IF lồng vào nhau!',
    key: '3 mức → <b>2 IF</b> lồng<br><b>=IF(…,"Giỏi",IF(…))</b>',
    ill: () => svg(`<polygon points="150,20 260,80 150,140 40,80" fill="#FFD60A" stroke="${O}" stroke-width="6" stroke-linejoin="round"/>${T(150, 90, '≥ 8?', 28)}
      ${arrow(260, 80, 330, 80, '#2DA44E', 7)}${pillS(340, 52, 200, 56, '#2DA44E', 'Giỏi', 28)}
      ${arrow(150, 142, 150, 190, '#E5383B', 7)}
      <polygon points="150,190 260,250 150,310 40,250" fill="#FFD60A" stroke="${O}" stroke-width="6" stroke-linejoin="round"/>${T(150, 260, '≥ 6.5?', 26)}
      ${arrow(260, 250, 330, 250, '#2DA44E', 7)}${pillS(340, 222, 200, 56, '#1982C4', 'Khá', 28)}
      ${arrow(150, 312, 150, 350, '#E5383B', 7)}${pillS(60, 352, 180, 52, '#FF7F11', 'Đạt', 26)}
      ${T(204, 176, 'Sai', 22, '#C92A2A')}${T(204, 338, 'Sai', 22, '#C92A2A')}
      ${stars3([570, 150], [570, 330], [400, 390])}`),
    html: `<ul>
      <li>Có <b>nhiều hơn 2</b> trường hợp → đặt IF bên trong IF.</li>
      <li><code>=IF(B2&gt;=8,"Giỏi",IF(B2&gt;=6.5,"Khá","Đạt"))</code></li>
      <li><b>n</b> mức kết quả cần <span class="k">n − 1</span> hàm IF.</li>
      <li>Xét điều kiện <b>từ cao xuống thấp</b> (hoặc thấp lên cao).</li>
      <li>Đếm đủ số dấu ngoặc <code>)</code> ở cuối.</li></ul>`,
    quiz: [
      { q: 'B2 = 7. =IF(B2>=8,"Giỏi",IF(B2>=6.5,"Khá","Đạt")) cho kết quả:', o: ['Khá', 'Giỏi', 'Đạt', '#VALUE!'], a: 0, why: '7 không ≥ 8, nhưng ≥ 6.5 → "Khá".' },
      { q: 'Xếp loại có 4 mức thì cần ít nhất bao nhiêu hàm IF lồng nhau?', o: ['4', '2', '3', '1'], a: 2, why: 'n mức cần n − 1 hàm IF → 3.' } ] },
  { title: 'IF kết hợp tính toán', tip: 'Giá trị trả về của IF cũng có thể là một phép tính đó!',
    key: 'Giá trị đúng / sai có thể<br>là <b>công thức</b>',
    ill: () => svg(`${fbar(30, 30, 540, 'C2', '=IF(B2>=100,B2*0.9,B2)', 22)}
      ${grid(30, 110, [['Tiền mua', 'Phải trả'], ['150', '135'], ['80', '80']], { cw: 170, rh: 60, fs: 26, bold: [0], fill: { '1-1': '#D3F9D8' } })}
      ${pillS(430, 130, 140, 70, '#FF006E', '-10%', 34)}
      ${pillS(60, 340, 480, 60, '#FF7F11', 'Mua từ 100 được giảm 10%', 24)}
      ${stars3([570, 270], [440, 260], [30, 320])}`),
    html: `<ul>
      <li>Giá trị đúng / sai của IF có thể là <span class="k">phép tính</span> hoặc hàm khác.</li>
      <li>Giảm 10% khi mua từ 100 nghìn:</li>
      <li><code>=IF(B2&gt;=100,B2*0.9,B2)</code></li>
      <li>Điều kiện cũng có thể là hàm: <code>=IF(AVERAGE(B2:D2)&gt;=5,"Lên lớp","Ở lại")</code></li></ul>`,
    quiz: [
      { q: 'B2 = 200. Công thức =IF(B2>=100,B2*0.9,B2) cho kết quả:', o: ['200', '180', '20', '100'], a: 1, why: '200 ≥ 100 → 200 × 0.9 = 180.' },
      { q: 'B2 = 50. Công thức =IF(B2>=100,B2*0.9,B2) cho kết quả:', o: ['45', '0', '90', '50'], a: 3, why: '50 < 100 nên điều kiện sai → trả về B2 = 50.' } ] },
  { title: 'Lỗi hay gặp với IF', tip: 'Viết xong hàm IF, thử vài số ở ranh giới như đúng 5, đúng 8 để kiểm tra!',
    key: 'Thiếu <b>" "</b> • thiếu <b>)</b><br>Sai thứ tự điều kiện',
    ill: () => svg(`<path d="M300 30 L430 260 H170Z" fill="#FFD60A" stroke="${O}" stroke-width="11" stroke-linejoin="round"/>${T(300, 236, '!', 130)}
      ${pillS(20, 60, 170, 52, '#E5383B', 'Thiếu " "', 24, -6)}${pillS(410, 70, 170, 52, '#8338EC', 'Thiếu )', 26, 6)}
      ${pillS(30, 300, 250, 56, '#1982C4', 'Sai thứ tự', 26, 4)}${pillS(320, 300, 250, 56, '#FF7F11', 'Thử số biên', 26, -4)}
      ${stars3([60, 220], [540, 220], [300, 390])}`),
    html: `<ul>
      <li>Quên <span class="k">" "</span> quanh văn bản → <code>#NAME?</code></li>
      <li>Thiếu dấu <code>)</code> hoặc thiếu dấu <code>,</code> giữa các đối số.</li>
      <li>Xét điều kiện <b>sai thứ tự</b>: <code>IF(B2&gt;=5,"Đạt",IF(B2&gt;=8,"Giỏi",…))</code> → không bao giờ ra "Giỏi".</li>
      <li>Kiểm tra bằng các số <b>ở ranh giới</b>: 5; 6.5; 8.</li></ul>`,
    quiz: [
      { q: 'Công thức =IF(B2>=5,"Đạt",IF(B2>=8,"Giỏi","Yếu")) sai ở đâu?', o: ['Thiếu dấu " "', 'Thừa dấu )', 'Xét ≥5 trước nên không ra "Giỏi"', 'Không sai'], a: 2, why: 'Điểm ≥ 8 cũng ≥ 5 nên luôn dừng ở "Đạt". Phải xét ≥ 8 trước.' },
      { q: 'Để kiểm tra hàm IF xếp loại "≥ 5 là Đạt", nên thử điểm nào?', o: ['Đúng 5 và 4.9', 'Chỉ điểm 10', 'Chỉ điểm 0', 'Không cần thử'], a: 0, why: 'Thử ngay ranh giới để biết dùng >= hay > đã đúng chưa.' } ] },
];
