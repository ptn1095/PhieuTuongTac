const META = { key: 'b7-dia-chi-o', num: 7, lop: 'Tin học 8', ic: '📌', ten: 'Sao chép công thức – địa chỉ tương đối, tuyệt đối',
  st1: 'ĐỊA CHỈ TƯƠNG ĐỐI<br>VÀ TUYỆT ĐỐI', big: 'ĐỊA CHỈ<br>TƯƠNG ĐỐI,<br>TUYỆT ĐỐI', cert: 'ĐỊA CHỈ TƯƠNG ĐỐI, TUYỆT ĐỐI',
  hello: 'Xin chào! Mình là Bít 🤖 Cùng khám phá bí mật của dấu $ trong công thức nhé!' };
const TOPICS = [
  { title: 'Sao chép công thức', tip: 'Sao chép công thức thì địa chỉ ô tự “dịch chuyển” theo đó!',
    key: 'Chép công thức →<br>địa chỉ ô <b>tự thay đổi</b>',
    ill: () => svg(`${grid(40, 40, [['2', '3', '=A1*B1'], ['4', '5', '=A2*B2'], ['6', '7', '=A3*B3']], { cw: 110, rh: 60, fs: 26, cws: [90, 90, 170], sel: [0, 2], handle: true, fill: { '1-2': '#F3F0FF', '2-2': '#F3F0FF' } })}
      ${arrow(430, 110, 430, 250, '#FF006E', 8)}
      ${pillS(60, 300, 230, 56, '#1982C4', 'Hàng 1 → 2 → 3', 24)}${pillS(320, 300, 250, 56, '#8338EC', 'Tự đổi theo!', 26)}
      ${stars3([560, 60], [560, 240], [30, 380])}`),
    html: `<ul>
      <li>Sao chép công thức bằng <b>Ctrl+C / Ctrl+V</b> hoặc kéo <b>nút điền</b>.</li>
      <li>Địa chỉ ô trong công thức <span class="k">tự điều chỉnh</span> theo vị trí mới.</li>
      <li>Chép xuống 1 hàng → số hàng tăng 1.</li>
      <li>Chép sang phải 1 cột → tên cột tăng 1.</li>
      <li>Nhờ vậy chỉ cần viết công thức <b>một lần</b>!</li></ul>`,
    quiz: [
      { q: 'Ô C1 có =A1+B1. Sao chép C1 sang ô C4 thì công thức thành:', o: ['=A1+B1', '=A3+B3', '=C4+D4', '=A4+B4'], a: 3, why: 'Xuống 3 hàng → số hàng tăng 3: =A4+B4.' },
      { q: 'Ô A3 có =A1+A2. Sao chép A3 sang ô B3 thì công thức thành:', o: ['=B1+B2', '=A1+A2', '=B2+B3', '=A2+A3'], a: 0, why: 'Sang phải 1 cột → tên cột tăng 1: =B1+B2.' } ] },
  { title: 'Địa chỉ tương đối', tip: 'Địa chỉ tương đối giống chỉ đường kiểu “ô bên trái mình” – đi đâu cũng đúng!',
    key: '<b>A1</b>: tương đối<br>Đổi theo vị trí',
    ill: () => svg(`${ball(150, 120, 70, '#1982C4', 'A1', 52)}
      ${curve(230, 120, 320, 40, 420, 110, '#FF006E', 8)}${ball(480, 150, 60, '#2DA44E', 'A2', 44)}
      ${pillS(60, 240, 480, 64, '#FFC300', 'Không có dấu $', 32, 0, O)}
      <rect x="60" y="330" width="480" height="60" rx="20" fill="#8338EC" stroke="${O}" stroke-width="5"/>${T(300, 372, 'Chép → tự thay đổi', 30, '#fff')}
      ${stars3([40, 40], [570, 50], [560, 260])}`),
    html: `<ul>
      <li>Dạng: <span class="k">A1</span>, <code>B5</code> (không có dấu $).</li>
      <li>Khi sao chép, <b>cả cột và hàng</b> đều thay đổi theo vị trí mới.</li>
      <li>Là kiểu địa chỉ <b>mặc định</b> khi gõ công thức.</li>
      <li>Dùng khi mỗi hàng tính với <b>dữ liệu của chính hàng đó</b>.</li></ul>`,
    quiz: [
      { q: 'Địa chỉ nào dưới đây là địa chỉ tương đối?', o: ['$B$3', 'B3', '$B3', 'B$3'], a: 1, why: 'Địa chỉ tương đối không có dấu $.' },
      { q: 'D2 có =B2*C2. Sao chép D2 sang D5 thì được:', o: ['=B2*C2', '=B5*C2', '=B5*C5', '=E5*F5'], a: 2, why: 'Địa chỉ tương đối đổi theo hàng: =B5*C5.' } ] },
  { title: 'Địa chỉ tuyệt đối', tip: 'Dấu $ giống cái ghim: ghim chặt ô lại, chép đi đâu cũng không đổi!',
    key: '<b>$A$1</b>: tuyệt đối<br>Luôn <b>giữ nguyên</b>',
    ill: () => svg(`${ball(180, 160, 90, '#E5383B', '$A$1', 50)}
      <g transform="rotate(25 330 90)"><circle cx="330" cy="70" r="30" fill="#FF006E" stroke="${O}" stroke-width="6"/><rect x="322" y="96" width="16" height="70" rx="6" fill="#ADB5BD" stroke="${O}" stroke-width="5"/></g>
      ${pillS(330, 180, 240, 60, '#2DA44E', 'Không đổi!', 30)}
      <rect x="40" y="300" width="520" height="80" rx="20" fill="#fff" stroke="${O}" stroke-width="6"/>${T(300, 352, '=B2*$E$1 → =B3*$E$1', 32, '#8338EC')}
      ${stars3([40, 40], [570, 60], [570, 270])}`),
    html: `<ul>
      <li>Dạng: <span class="k">$A$1</span> – có dấu <code>$</code> trước tên cột và số hàng.</li>
      <li>Khi sao chép, địa chỉ <b>giữ nguyên</b>, không thay đổi.</li>
      <li>Dùng khi mọi công thức cùng lấy <b>một ô cố định</b>: đơn giá, tỉ lệ, tổng…</li>
      <li>Ví dụ: <code>=B2*$E$1</code></li></ul>`,
    quiz: [
      { q: 'C2 có =B2*$E$1. Sao chép C2 xuống C3 thì được:', o: ['=B3*$E$2', '=B2*$E$1', '=B3*$E$1', '=C3*$F$1'], a: 2, why: 'B2 tương đối → B3; $E$1 tuyệt đối → giữ nguyên.' },
      { q: 'Dấu $ đặt trước tên cột và số hàng có tác dụng gì?', o: ['Đổi số thành tiền', 'Cố định địa chỉ khi sao chép', 'Làm ô in đậm', 'Báo lỗi công thức'], a: 1, why: 'Dấu $ giúp địa chỉ không đổi khi sao chép.' } ] },
  { title: 'Địa chỉ hỗn hợp', tip: '$ đứng trước cái nào thì cái đó bị ghim, cái còn lại vẫn tự do!',
    key: '<b>$A1</b>: giữ cột<br><b>A$1</b>: giữ hàng',
    ill: () => svg(`${pillS(40, 50, 240, 90, '#FF7F11', '$A1', 50)}${pillS(320, 50, 240, 90, '#8338EC', 'A$1', 50)}
      <rect x="40" y="170" width="240" height="90" rx="18" fill="#FF7F11" opacity=".9" stroke="${O}" stroke-width="5"/>${T(160, 207, 'Giữ cột A', 28, '#fff')}${T(160, 245, 'hàng đổi', 26, '#fff', 'middle', 700)}
      <rect x="320" y="170" width="240" height="90" rx="18" fill="#8338EC" opacity=".9" stroke="${O}" stroke-width="5"/>${T(440, 207, 'Giữ hàng 1', 28, '#fff')}${T(440, 245, 'cột đổi', 26, '#fff', 'middle', 700)}
      ${pillS(100, 310, 400, 66, '#2EC4B6', 'Bảng cửu chương', 32)}
      ${stars3([30, 300], [570, 300], [300, 400])}`),
    html: `<ul>
      <li><span class="k">$A1</span>: cố định <b>cột A</b>, hàng thay đổi.</li>
      <li><span class="k">A$1</span>: cố định <b>hàng 1</b>, cột thay đổi.</li>
      <li>Dấu <code>$</code> đứng trước phần nào thì phần đó <b>không đổi</b>.</li>
      <li>Dùng khi sao chép theo <b>cả hai chiều</b>, ví dụ bảng cửu chương: <code>=$A2*B$1</code></li></ul>`,
    quiz: [
      { q: 'Ô C3 có =$A3*B$1. Sao chép sang ô D4 thì được:', o: ['=$A4*C$1', '=$A3*B$1', '=$B4*C$1', '=$A4*C$2'], a: 0, why: '$A giữ cột, hàng 3→4; B→C, $1 giữ hàng.' },
      { q: 'Địa chỉ nào cố định HÀNG nhưng cho phép CỘT thay đổi?', o: ['$B$2', '$B2', 'B2', 'B$2'], a: 3, why: 'Dấu $ trước số hàng → giữ hàng: B$2.' } ] },
  { title: 'Phím F4 thần kì', tip: 'Đang gõ địa chỉ, bấm F4 là dấu $ tự xuất hiện, khỏi gõ tay!',
    key: 'Nhấn <b>F4</b>: A1 → $A$1<br>→ A$1 → $A1 → A1',
    ill: () => svg(`${key3d(220, 30, 160, 120, '#FFC300', '#C79100', 'F4', 64, O)}
      ${pillS(230, 190, 140, 52, '#1982C4', 'A1', 28)}${pillS(420, 250, 150, 52, '#E5383B', '$A$1', 26)}
      ${pillS(230, 330, 140, 52, '#8338EC', 'A$1', 28)}${pillS(30, 250, 150, 52, '#FF7F11', '$A1', 28)}
      ${curve(372, 210, 450, 200, 480, 244, O, 5)}${curve(480, 306, 450, 360, 376, 356, O, 5)}${curve(226, 356, 140, 360, 110, 308, O, 5)}${curve(110, 246, 140, 200, 224, 212, O, 5)}
      ${stars3([60, 60], [540, 60], [560, 390])}`),
    html: `<ul>
      <li>Khi gõ công thức, đặt con trỏ ở địa chỉ ô rồi nhấn <span class="k">F4</span>.</li>
      <li>Mỗi lần nhấn đổi vòng:</li>
      <li><code>A1</code> → <code>$A$1</code> → <code>A$1</code> → <code>$A1</code> → <code>A1</code></li>
      <li>Trên laptop có thể phải nhấn <code>Fn + F4</code>.</li></ul>`,
    quiz: [
      { q: 'Đang gõ =B2*E1, đặt con trỏ ở E1 rồi nhấn F4 một lần, E1 thành:', o: ['E$1', '$E1', '$E$1', 'E1'], a: 2, why: 'Lần nhấn đầu tiên: E1 → $E$1.' },
      { q: 'Nhấn F4 hai lần liên tiếp tại địa chỉ A1 được kết quả:', o: ['A$1', '$A1', '$A$1', 'A1'], a: 0, why: 'A1 → $A$1 → A$1.' } ] },
  { title: 'Bài toán thực tế', tip: 'Ô chung cho mọi hàng (đơn giá, tổng) thì nhớ thêm $ nha!',
    key: 'Thành tiền = SL × <b>$đơn giá</b><br>Tỉ lệ = số / <b>$tổng</b>',
    ill: () => svg(`${fbar(30, 20, 540, 'C3', '=B3*$B$1', 26)}
      ${grid(30, 84, [['Đơn giá', '5000', ''], ['Món', 'SL', 'Tiền'], ['Bút', '3', '15000'], ['Vở', '4', '20000']], { cw: 140, rh: 54, fs: 24, cws: [140, 120, 150], fill: { '0-1': '#FFE3E3' }, bold: [1], sel: [2, 2] })}
      <rect x="214" y="118" width="120" height="54" fill="none" stroke="#E5383B" stroke-width="6"/>
      ${pillS(330, 350, 200, 56, '#E5383B', 'Ghim $B$1', 26)}
      ${stars3([570, 300], [480, 380], [30, 390])}`),
    html: `<ul>
      <li>Thành tiền = số lượng × đơn giá chung ở ô <code>B1</code>:</li>
      <li><code>=B3*$B$1</code> → kéo xuống, <b>$B$1</b> vẫn giữ nguyên.</li>
      <li>Tỉ lệ phần trăm: <code>=B2/$B$10</code> (B10 là ô tổng).</li>
      <li>Quên dấu $ → các hàng dưới lấy <b>sai ô</b>, ra 0 hoặc lỗi.</li></ul>`,
    quiz: [
      { q: 'Ô B10 chứa tổng. Công thức tỉ lệ ở C2 để kéo xuống C9 đúng là:', o: ['=B2/B10', '=B2/$B$10', '=$B$2/B10', '=B$2/B10'], a: 1, why: 'Ô tổng B10 phải cố định: =B2/$B$10.' },
      { q: 'C2 có =B2*B1 (B1 là đơn giá). Kéo xuống C3 sẽ sai vì sao?', o: ['C3 thành =B3*B2, lấy sai ô đơn giá', 'C3 báo #NAME?', 'C3 bằng C2', 'Không sai gì'], a: 0, why: 'B1 tương đối nên thành B2; cần viết $B$1.' } ] },
];
