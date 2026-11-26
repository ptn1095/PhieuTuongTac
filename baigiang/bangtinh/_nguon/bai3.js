const META = { key: 'b3-cong-thuc', num: 3, lop: 'Tin học 7', ic: '➗', ten: 'Tính toán với công thức',
  st1: 'TÍNH TOÁN VỚI<br>CÔNG THỨC', big: 'TÍNH TOÁN<br>CÔNG THỨC', cert: 'TÍNH TOÁN VỚI CÔNG THỨC',
  hello: 'Xin chào! Mình là Bít 🤖 Cùng biến bảng tính thành máy tính siêu tốc nhé!' };
const TOPICS = [
  { title: 'Công thức là gì?', tip: 'Quên dấu = là bảng tính tưởng em gõ chữ thường đó!',
    key: 'Luôn bắt đầu bằng<br>dấu <b>=</b>',
    ill: () => svg(`${fbar(40, 40, 520, 'C1', '=5+3*2', 30)}
      ${key3d(70, 140, 180, 180, '#FF9F1C', '#C85A00', '=', 140)}
      ${grid(300, 150, [['=5+3*2'], ['11']], { cw: 230, rh: 64, fs: 30, sel: [1, 0], head: false, tc: { '1-0': '#2B8A3E' } })}
      ${pillS(300, 330, 260, 56, '#2DA44E', 'Kết quả: 11', 28)}
      ${stars3([30, 130], [580, 140], [40, 390])}`),
    html: `<ul>
      <li><span class="k">Công thức</span> giúp bảng tính tự tính toán.</li>
      <li>Luôn bắt đầu bằng dấu <span class="k">=</span> rồi mới đến phép tính.</li>
      <li>Gõ xong nhấn <code>Enter</code> → ô hiện <b>kết quả</b>.</li>
      <li>Chọn lại ô → <b>thanh công thức</b> hiện công thức.</li>
      <li>Ví dụ: <code>=5+3*2</code> cho kết quả <b>11</b>.</li></ul>`,
    quiz: [
      { q: 'Công thức trong bảng tính phải bắt đầu bằng kí tự nào?', o: ['Dấu +', 'Dấu =', 'Dấu #', 'Dấu :'], a: 1, why: 'Mọi công thức đều bắt đầu bằng dấu =.' },
      { q: 'Gõ 5+3 (không có dấu =) vào ô rồi Enter, ô sẽ hiện gì?', o: ['8', '#VALUE!', '5+3', '0'], a: 2, why: 'Thiếu dấu = nên bảng tính coi đó là chữ: 5+3.' } ] },
  { title: 'Các phép toán', tip: 'Dấu nhân là * và dấu chia là / nha, không phải × và : đâu!',
    key: '<b>+  −  *  /  ^</b><br>Nhân: <b>*</b> • Chia: <b>/</b>',
    ill: () => svg(`${key3d(40, 40, 120, 110, '#FF006E', '#B0004E', '+', 70)}${key3d(180, 40, 120, 110, '#1982C4', '#0F5A8A', '−', 70)}${key3d(320, 40, 120, 110, '#2DA44E', '#1B7A35', '*', 70)}${key3d(460, 40, 110, 110, '#8338EC', '#5A189A', '/', 64)}
      ${key3d(110, 200, 120, 110, '#FF7F11', '#C85A00', '^', 64)}${key3d(260, 200, 120, 110, '#FFC300', '#C79100', '%', 56, O)}${key3d(410, 200, 140, 110, '#2EC4B6', '#13827A', '( )', 54)}
      ${T(300, 380, '2^3 = 2×2×2 = 8', 34, '#8338EC')}
      ${stars3([30, 190], [580, 190], [560, 380])}`),
    html: `<table class="tb"><tr><th>Phép toán</th><th>Kí hiệu</th><th>Ví dụ</th></tr>
      <tr><td>Cộng, trừ</td><td><code>+</code> <code>-</code></td><td><code>=7+2-1</code></td></tr>
      <tr><td>Nhân</td><td><code>*</code></td><td><code>=4*5</code></td></tr>
      <tr><td>Chia</td><td><code>/</code></td><td><code>=20/4</code></td></tr>
      <tr><td>Lũy thừa</td><td><code>^</code></td><td><code>=2^3</code></td></tr>
      <tr><td>Phần trăm</td><td><code>%</code></td><td><code>=50*10%</code></td></tr></table>`,
    quiz: [
      { q: 'Trong bảng tính, phép nhân 6 × 7 được viết là:', o: ['=6x7', '=6.7', '=6:7', '=6*7'], a: 3, why: 'Dấu nhân trong bảng tính là *.' },
      { q: 'Công thức =2^4 cho kết quả bằng bao nhiêu?', o: ['16', '8', '6', '24'], a: 0, why: '2^4 = 2×2×2×2 = 16.' } ] },
  { title: 'Thứ tự thực hiện', tip: 'Ngoặc là vua, được tính trước tiên!',
    key: '<b>( )</b> → <b>^</b> → <b>* /</b> → <b>+ −</b>',
    ill: () => svg(`${pillS(30, 40, 120, 64, '#FF006E', '( )', 34)}${arrow(156, 72, 196, 72, O, 6)}${pillS(200, 40, 100, 64, '#FF7F11', '^', 38)}${arrow(306, 72, 346, 72, O, 6)}${pillS(350, 40, 110, 64, '#2DA44E', '* /', 34)}${arrow(466, 72, 496, 72, O, 6)}${pillS(500, 40, 90, 64, '#1982C4', '+ −', 28)}
      <rect x="40" y="150" width="520" height="90" rx="20" fill="#fff" stroke="${O}" stroke-width="6"/>${T(300, 210, '=(2+3)*4', 46, '#8338EC')}
      ${T(300, 300, '= 5 * 4', 40, '#FF7F11')}${T(300, 370, '= 20', 50, '#2B8A3E')}
      ${stars3([30, 300], [570, 300], [560, 400])}`),
    html: `<ul>
      <li>Thứ tự giống toán học:</li>
      <li>① Trong <span class="k">ngoặc ( )</span> trước.</li>
      <li>② Lũy thừa <code>^</code></li>
      <li>③ Nhân <code>*</code>, chia <code>/</code> (từ trái sang phải).</li>
      <li>④ Cộng <code>+</code>, trừ <code>-</code> (từ trái sang phải).</li>
      <li><code>=2+3*4</code> = 14 • <code>=(2+3)*4</code> = 20</li></ul>`,
    quiz: [
      { q: 'Công thức =10-2*3 cho kết quả bằng bao nhiêu?', o: ['24', '4', '16', '6'], a: 1, why: 'Nhân trước: 2*3 = 6, rồi 10 − 6 = 4.' },
      { q: 'Muốn tính trung bình của 8 và 6, công thức nào đúng?', o: ['=8+6/2', '=8+(6/2)', '=(8+6)/2', '=8/2+6'], a: 2, why: 'Cần cộng trước nên đặt trong ngoặc: (8+6)/2 = 7.' } ] },
  { title: 'Dùng địa chỉ ô', tip: 'Dùng địa chỉ ô thì đổi số liệu, kết quả tự đổi theo. Phép màu đó!',
    key: '<b>=B2*C2</b><br>Dữ liệu đổi → kết quả<br><b>tự cập nhật</b>',
    ill: () => svg(`${fbar(30, 30, 540, 'D2', '=B2*C2', 28)}
      ${grid(30, 100, [['Món', 'SL', 'Giá', 'Tiền'], ['Bút', '3', '5', '15']], { cw: 120, rh: 56, fs: 26, cws: [120, 90, 100, 120], sel: [1, 3], fill: { '1-1': '#D0EBFF', '1-2': '#FFE3E3' } })}
      ${curve(210, 250, 330, 340, 470, 260, '#FF006E', 7)}
      ${pillS(40, 330, 200, 56, '#1982C4', 'SL: 3 → 4', 26)}${pillS(370, 330, 210, 56, '#2DA44E', 'Tiền: 20', 26)}
      ${stars3([575, 120], [24, 270], [300, 400])}`),
    html: `<ul>
      <li>Thay vì gõ số, nên dùng <span class="k">địa chỉ ô</span> trong công thức.</li>
      <li>Ví dụ: <code>=B2*C2</code> thay cho <code>=3*5</code></li>
      <li>Sửa dữ liệu ở B2 hoặc C2 → kết quả <b>tự động cập nhật</b>.</li>
      <li>Nháy chuột vào ô khi gõ công thức để chèn địa chỉ nhanh.</li></ul>`,
    quiz: [
      { q: 'Ô D2 có công thức =B2*C2, B2 = 4, C2 = 5. Sửa B2 thành 6 thì D2 bằng?', o: ['20', '11', '6', '30'], a: 3, why: 'Kết quả tự cập nhật: 6 × 5 = 30.' },
      { q: 'Vì sao nên dùng địa chỉ ô thay cho số trong công thức?', o: ['Kết quả tự cập nhật khi dữ liệu đổi', 'Để công thức dài hơn', 'Để chữ đẹp hơn', 'Vì bảng tính không tính được số'], a: 0, why: 'Dùng địa chỉ ô → dữ liệu thay đổi, kết quả tự tính lại.' } ] },
  { title: 'Sao chép bằng nút điền', tip: 'Kéo nút điền ■ xuống là cả cột tự có công thức, đỡ phải gõ lại!',
    key: 'Kéo <b>nút điền ■</b><br>ở góc dưới phải ô',
    ill: () => svg(`${grid(40, 40, [['SL', 'Giá', 'Tiền'], ['3', '5', '=A2*B2'], ['2', '7', '=A3*B3'], ['4', '6', '=A4*B4']], { cw: 110, rh: 56, fs: 24, cws: [90, 90, 160], sel: [1, 2], handle: true, fill: { '2-2': '#F3F0FF', '3-2': '#F3F0FF' } })}
      ${arrow(440, 160, 440, 290, '#FF006E', 8)}${cursor(452, 280, 1)}
      ${pillS(60, 340, 300, 58, '#FF006E', 'Nút điền ■', 30)}
      ${stars3([570, 60], [520, 380], [24, 300])}`),
    html: `<ul>
      <li>Chọn ô có công thức → đưa chuột vào <span class="k">nút điền ■</span> (góc dưới phải).</li>
      <li>Con trỏ thành dấu <b>+</b> → <b>kéo thả</b> xuống các ô cần tính.</li>
      <li>Hoặc <b>nháy đúp</b> nút điền để điền nhanh cả cột.</li>
      <li>Công thức tự đổi theo hàng: <code>=A2*B2</code> → <code>=A3*B3</code></li></ul>`,
    quiz: [
      { q: 'Ô C2 có =A2*B2. Kéo nút điền xuống ô C3, ô C3 có công thức gì?', o: ['=A2*B2', '=A3*B3', '=B2*C2', '=A3*B2'], a: 1, why: 'Kéo xuống 1 hàng → số hàng tăng 1: =A3*B3.' },
      { q: 'Nút điền nằm ở vị trí nào của ô đang chọn?', o: ['Góc trên trái', 'Giữa ô', 'Góc dưới phải', 'Trên thanh công thức'], a: 2, why: 'Nút điền ■ ở góc dưới bên phải của ô.' } ] },
  { title: 'Lỗi thường gặp', tip: 'Thấy lỗi bắt đầu bằng dấu # là bảng tính đang nhờ em kiểm tra lại đó!',
    key: '<b>#DIV/0!</b> <b>#NAME?</b><br><b>#VALUE!</b> <b>#####</b>',
    ill: () => svg(`<path d="M300 40 L440 290 H160Z" fill="#FFD60A" stroke="${O}" stroke-width="12" stroke-linejoin="round"/>${T(300, 262, '!', 150)}
      ${pillS(20, 80, 190, 56, '#E5383B', '#DIV/0!', 28, -6)}${pillS(400, 90, 180, 56, '#8338EC', '#NAME?', 28, 6)}
      ${pillS(20, 320, 190, 56, '#1982C4', '#VALUE!', 28, 5)}${pillS(400, 320, 180, 56, '#FF7F11', '#####', 30, -5)}
      ${stars3([120, 220], [500, 230], [300, 390])}`),
    html: `<table class="tb"><tr><th>Lỗi</th><th>Nguyên nhân</th></tr>
      <tr><td><code>#DIV/0!</code></td><td>Chia cho 0 (hoặc ô trống)</td></tr>
      <tr><td><code>#NAME?</code></td><td>Gõ sai tên hàm, tên ô</td></tr>
      <tr><td><code>#VALUE!</code></td><td>Tính toán với dữ liệu chữ</td></tr>
      <tr><td><code>#####</code></td><td>Cột quá hẹp</td></tr>
      <tr><td><code>#REF!</code></td><td>Ô được dùng đã bị xoá</td></tr></table>`,
    quiz: [
      { q: 'Ô B1 đang trống. Công thức =A1/B1 báo lỗi gì?', o: ['#NAME?', '#####', '#VALUE!', '#DIV/0!'], a: 3, why: 'Ô trống được coi là 0 → chia cho 0 → #DIV/0!' },
      { q: 'A1 chứa chữ "Lan". Công thức =A1+5 báo lỗi gì?', o: ['#VALUE!', '#DIV/0!', '#REF!', '#####'], a: 0, why: 'Không cộng được chữ với số → #VALUE!' } ] },
];
