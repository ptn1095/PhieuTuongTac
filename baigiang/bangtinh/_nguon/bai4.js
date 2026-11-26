const META = { key: 'b4-ham', num: 4, lop: 'Tin học 7', ic: '🧮', ten: 'Sử dụng hàm để tính toán',
  st1: 'SỬ DỤNG HÀM<br>ĐỂ TÍNH TOÁN', big: 'SỬ DỤNG<br>HÀM', cert: 'SỬ DỤNG HÀM ĐỂ TÍNH TOÁN',
  hello: 'Xin chào! Mình là Bít 🤖 Hôm nay mình khám phá 5 hàm siêu tiện: SUM, AVERAGE, MAX, MIN, COUNT!' };
const fx = (name, c) => `<rect x="150" y="120" width="300" height="190" rx="36" fill="${c}" stroke="${O}" stroke-width="7"/>
  <rect x="190" y="150" width="220" height="80" rx="40" fill="#fff" stroke="${O}" stroke-width="5"/>${T(300, 206, name, name.length > 5 ? 38 : 48, c)}
  <circle cx="220" cy="270" r="12" fill="#FFD60A" stroke="${O}" stroke-width="4"/><circle cx="260" cy="270" r="12" fill="#8AC926" stroke="${O}" stroke-width="4"/><circle cx="300" cy="270" r="12" fill="#FF595E" stroke="${O}" stroke-width="4"/>`;
const TOPICS = [
  { title: 'Hàm là gì?', tip: 'Hàm giống chiếc máy: bỏ dữ liệu vào, kết quả chạy ra!',
    key: '<b>=TÊN_HÀM(đối số)</b><br>Đối số: số, ô, khối ô',
    ill: () => svg(`${fx('HÀM', '#8338EC')}
      ${ball(200, 60, 28, '#FF006E', '3', 26)}${ball(300, 46, 28, '#1982C4', '5', 26)}${ball(400, 60, 28, '#2DA44E', '2', 26)}
      ${arrow(300, 80, 300, 116, O, 6)}${arrow(454, 220, 510, 220, O, 6)}${ball(550, 220, 38, '#FF7F11', '10', 32)}
      ${pillS(110, 340, 380, 60, '#FF006E', '=SUM(A1:A3)', 32)}
      ${stars3([40, 60], [560, 80], [60, 300])}`),
    html: `<ul>
      <li><span class="k">Hàm</span> là công thức đã được <b>định sẵn</b> trong bảng tính.</li>
      <li>Cách viết: <code>=TÊN_HÀM(đối số)</code></li>
      <li><b>Đối số</b> có thể là số, địa chỉ ô hoặc khối ô.</li>
      <li>Nhiều đối số cách nhau dấu <code>,</code> (hoặc <code>;</code>).</li>
      <li>Ví dụ: <code>=SUM(A1:A3)</code> , <code>=MAX(B2,B5,9)</code></li></ul>`,
    quiz: [
      { q: 'Cách viết hàm nào dưới đây là đúng?', o: ['SUM(A1:A5)', '=SUM A1:A5', '=SUM(A1:A5)', '=SUM[A1:A5]'], a: 2, why: 'Có dấu =, tên hàm, đối số trong ngoặc tròn.' },
      { q: 'Trong =SUM(B2:B6), phần B2:B6 được gọi là gì?', o: ['Đối số của hàm', 'Tên hàm', 'Lỗi', 'Trang tính'], a: 0, why: 'Phần trong ngoặc là đối số (dữ liệu đưa vào hàm).' } ] },
  { title: 'Hàm SUM – tính tổng', tip: 'SUM là "tổng" đó! Cộng cả trăm ô chỉ bằng một hàm.',
    key: '<b>SUM</b>: tính tổng<br><b>=SUM(B2:B6)</b>',
    ill: () => svg(`${grid(40, 30, [['Tháng', 'Tiết kiệm'], ['1', '20'], ['2', '35'], ['3', '15'], ['Tổng', '70']], { cw: 140, rh: 52, fs: 26, box: [1, 1, 3, 1], fill: { '4-1': '#B2F2BB' }, bold: [4] })}
      ${pillS(370, 70, 210, 70, '#2DA44E', 'Σ SUM', 36)}
      ${fbar(40, 340, 520, 'B5', '=SUM(B2:B4)', 26)}
      ${stars3([360, 200], [570, 220], [480, 300])}`),
    html: `<ul>
      <li><span class="k">SUM</span>: tính <b>tổng</b> các giá trị số.</li>
      <li><code>=SUM(B2:B6)</code> → cộng các ô từ B2 đến B6.</li>
      <li><code>=SUM(A1,C1,5)</code> → A1 + C1 + 5.</li>
      <li>Nút <b>Σ AutoSum</b> trên dải lệnh tự viết hàm SUM.</li>
      <li>Ô chứa chữ hoặc ô trống được <b>bỏ qua</b>.</li></ul>`,
    quiz: [
      { q: 'A1 = 4, A2 = 6, A3 = 10. Hàm =SUM(A1:A3) cho kết quả?', o: ['10', '20', '6', '3'], a: 1, why: '4 + 6 + 10 = 20.' },
      { q: 'Nút nào trên dải lệnh giúp tự động viết hàm tính tổng?', o: ['Σ AutoSum', 'Merge', 'Sort', 'Filter'], a: 0, why: 'Σ AutoSum tự chèn hàm SUM.' } ] },
  { title: 'Hàm AVERAGE', tip: 'AVERAGE = trung bình cộng. Điểm trung bình môn tính một phát ra luôn!',
    key: '<b>AVERAGE</b>: trung bình<br>cộng',
    ill: () => svg(`${grid(40, 30, [['Bài', 'Điểm'], ['KT1', '8'], ['KT2', '6'], ['KT3', '10'], ['TB', '8']], { cw: 130, rh: 52, fs: 26, box: [1, 1, 3, 1], fill: { '4-1': '#FFE066' }, bold: [4] })}
      <rect x="350" y="70" width="220" height="200" rx="24" fill="#fff" stroke="${O}" stroke-width="6"/>
      ${T(460, 130, '8+6+10', 30, '#1982C4')}<line x1="380" y1="150" x2="540" y2="150" stroke="${O}" stroke-width="5"/>${T(460, 192, '3', 34, '#FF006E')}${T(460, 250, '= 8', 36, '#2B8A3E')}
      ${fbar(40, 340, 520, 'B5', '=AVERAGE(B2:B4)', 24)}
      ${stars3([340, 300], [580, 40], [580, 300])}`),
    html: `<ul>
      <li><span class="k">AVERAGE</span>: tính <b>trung bình cộng</b>.</li>
      <li>= tổng các số : số lượng các số.</li>
      <li><code>=AVERAGE(B2:B4)</code> → (B2+B3+B4) : 3</li>
      <li>Ô trống, ô chữ <b>không được tính</b> vào số lượng.</li>
      <li>Dùng tính điểm trung bình, nhiệt độ trung bình…</li></ul>`,
    quiz: [
      { q: 'Muốn tính điểm trung bình của ba bài kiểm tra, em dùng hàm nào?', o: ['SUM', 'COUNT', 'MAX', 'AVERAGE'], a: 3, why: 'AVERAGE tính trung bình cộng.' },
      { q: 'B1 = 5, B2 = 7, B3 = 9. Hàm =AVERAGE(B1:B3) bằng bao nhiêu?', o: ['21', '9', '7', '3'], a: 2, why: '(5 + 7 + 9) : 3 = 7.' } ] },
  { title: 'Hàm MAX và MIN', tip: 'MAX tìm bạn cao nhất, MIN tìm bạn thấp nhất trong danh sách!',
    key: '<b>MAX</b>: lớn nhất<br><b>MIN</b>: nhỏ nhất',
    ill: () => svg(`<line x1="40" y1="330" x2="560" y2="330" stroke="${O}" stroke-width="6" stroke-linecap="round"/>
      ${[[90, 150, '#1982C4', '150'], [190, 120, '#2EC4B6', '120'], [290, 240, '#FF006E', '160'], [390, 90, '#FFC300', '90'], [490, 180, '#8338EC', '140']].map(([x, h, c, t]) => `<rect x="${x - 36}" y="${330 - h}" width="72" height="${h}" rx="12" fill="${c}" stroke="${O}" stroke-width="5"/>${T(x, 320 - h, t, 22)}`).join('')}
      ${pillS(200, 30, 180, 52, '#FF006E', 'MAX = 160', 26)}${pillS(400, 160, 180, 52, '#FF7F11', 'MIN = 90', 26)}
      ${T(300, 390, '=MAX(B2:B6)   =MIN(B2:B6)', 26, '#8338EC')}
      ${stars3([40, 40], [570, 60], [30, 250])}`),
    html: `<ul>
      <li><span class="k">MAX</span>: tìm giá trị <b>lớn nhất</b>.</li>
      <li><span class="k">MIN</span>: tìm giá trị <b>nhỏ nhất</b>.</li>
      <li><code>=MAX(C2:C30)</code> → điểm cao nhất lớp.</li>
      <li><code>=MIN(C2:C30)</code> → điểm thấp nhất lớp.</li>
      <li>Cũng bỏ qua ô trống và ô chứa chữ.</li></ul>`,
    quiz: [
      { q: 'Hàm =MIN(4, 9, 2, 7) cho kết quả bằng bao nhiêu?', o: ['2', '9', '4', '22'], a: 0, why: 'MIN lấy số nhỏ nhất: 2.' },
      { q: 'Muốn tìm bạn có chiều cao lớn nhất lớp, em dùng hàm nào?', o: ['MIN', 'MAX', 'COUNT', 'SUM'], a: 1, why: 'MAX tìm giá trị lớn nhất.' } ] },
  { title: 'Hàm COUNT – đếm', tip: 'COUNT chỉ đếm ô có SỐ thôi nha, ô chữ thì nó làm ngơ!',
    key: '<b>COUNT</b>: đếm ô<br>chứa <b>số</b>',
    ill: () => svg(`${grid(40, 30, [['An', '8'], ['Bình', 'vắng'], ['Chi', '9'], ['Dũng', ''], ['Em', '7']], { cw: 140, rh: 52, fs: 26, fill: { '0-1': '#B2F2BB', '2-1': '#B2F2BB', '4-1': '#B2F2BB', '1-1': '#FFE3E3' } })}
      ${ball(420, 120, 30, '#2DA44E', '1', 28)}${ball(490, 160, 30, '#2DA44E', '2', 28)}${ball(450, 220, 30, '#2DA44E', '3', 28)}
      ${pillS(340, 280, 240, 60, '#1982C4', 'COUNT = 3', 30)}
      ${fbar(40, 360, 520, 'B7', '=COUNT(B1:B5)', 24)}
      ${stars3([560, 60], [360, 50], [575, 240])}`),
    html: `<ul>
      <li><span class="k">COUNT</span>: <b>đếm</b> số ô chứa <b>dữ liệu số</b>.</li>
      <li><code>=COUNT(B1:B5)</code> → có bao nhiêu ô có số.</li>
      <li>Ô chứa <b>chữ</b> hoặc ô <b>trống</b> không được đếm.</li>
      <li>Dùng đếm số bạn có điểm, số ngày có bán hàng…</li></ul>`,
    quiz: [
      { q: 'Khối A1:A5 chứa: 8, "vắng", 9, (trống), 7. =COUNT(A1:A5) bằng?', o: ['5', '4', '24', '3'], a: 3, why: 'Chỉ có 3 ô chứa số: 8, 9, 7.' },
      { q: 'Hàm COUNT dùng để làm gì?', o: ['Tính tổng', 'Đếm số ô chứa số', 'Tìm số lớn nhất', 'Tính trung bình'], a: 1, why: 'COUNT đếm các ô chứa dữ liệu số.' } ] },
  { title: 'Nhập hàm nhanh', tip: 'Gõ =AV là bảng tính đã gợi ý AVERAGE, nhấn Tab là xong!',
    key: 'Gõ vài chữ → <b>Tab</b><br>Kéo chọn khối ô<br>Nút <b>Σ</b> ▾',
    ill: () => svg(`<rect x="40" y="40" width="300" height="56" rx="14" fill="#fff" stroke="${O}" stroke-width="5"/>${T(60, 80, '=AV|', 30, '#8338EC', 'start')}
      <rect x="40" y="104" width="340" height="150" rx="14" fill="#fff" stroke="${O}" stroke-width="5"/>
      <rect x="48" y="112" width="324" height="44" rx="10" fill="#D0EBFF"/>${T(64, 144, 'ƒ AVERAGE', 26, '#1864AB', 'start')}${T(64, 194, 'ƒ AVERAGEA', 24, '#868E96', 'start')}${T(64, 238, 'ƒ AVERAGEIF', 24, '#868E96', 'start')}
      ${key3d(410, 70, 160, 90, '#2DA44E', '#1B7A35', 'Tab ⇥', 34)}
      <rect x="400" y="200" width="170" height="190" rx="16" fill="#fff" stroke="${O}" stroke-width="5"/>${T(485, 240, 'Σ ▾', 32, '#FF006E')}
      ${['Sum', 'Average', 'Max', 'Min'].map((t, i) => T(420, 276 + i*30, t, 20, O, 'start', 700)).join('')}
      ${pillS(40, 300, 320, 60, '#FF7F11', 'Gợi ý hàm', 30)}
      ${stars3([360, 30], [24, 280], [580, 180])}`),
    html: `<ul>
      <li>Gõ <code>=</code> và vài chữ đầu → bảng tính <span class="k">gợi ý</span> tên hàm.</li>
      <li>Nhấn <code>Tab</code> để chọn hàm, rồi <b>kéo chọn khối ô</b> làm đối số.</li>
      <li>Nút <b>Σ ▾</b> (Home): chọn nhanh Sum, Average, Max, Min, Count.</li>
      <li>Tên hàm gõ chữ thường cũng được: <code>=sum(a1:a3)</code></li></ul>`,
    quiz: [
      { q: 'Gõ =AV rồi thấy danh sách gợi ý, nhấn phím nào để chọn hàm?', o: ['Esc', 'Delete', 'Tab', 'Ctrl'], a: 2, why: 'Nhấn Tab để chọn hàm đang được tô sáng.' },
      { q: 'Gõ =sum(a1:a3) bằng chữ thường thì sao?', o: ['Báo lỗi #NAME?', 'Không tính', 'Ra kết quả 0', 'Vẫn tính đúng'], a: 3, why: 'Tên hàm và địa chỉ ô không phân biệt chữ hoa, chữ thường.' } ] },
];
