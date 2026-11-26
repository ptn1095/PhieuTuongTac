const META = { key: 'b5-dinh-dang', num: 5, lop: 'Tin học 7', ic: '🎨', ten: 'Định dạng và trình bày trang tính',
  st1: 'ĐỊNH DẠNG VÀ<br>TRÌNH BÀY TRANG TÍNH', big: 'TRÌNH BÀY<br>TRANG TÍNH', cert: 'ĐỊNH DẠNG, TRÌNH BÀY TRANG TÍNH',
  hello: 'Xin chào! Mình là Bít 🤖 Cùng trang trí bảng tính thật đẹp và dễ đọc nhé!' };
const TOPICS = [
  { title: 'Định dạng chữ', tip: 'B là in đậm, I là in nghiêng, U là gạch chân. Dễ nhớ ghê!',
    key: 'Phông, cỡ, màu chữ<br><b>B</b> đậm • <b>I</b> nghiêng<br><b>U</b> gạch chân',
    ill: () => svg(`${key3d(40, 40, 110, 110, '#1982C4', '#0F5A8A', 'B', 70)}${key3d(170, 40, 110, 110, '#FF006E', '#B0004E', '<tspan font-style="italic">I</tspan>', 70)}${key3d(300, 40, 110, 110, '#2DA44E', '#1B7A35', '<tspan text-decoration="underline">U</tspan>', 66)}
      <rect x="440" y="40" width="130" height="110" rx="20" fill="#fff" stroke="${O}" stroke-width="6"/>${T(505, 116, 'A', 66, '#E5383B')}<rect x="462" y="124" width="86" height="14" fill="#E5383B"/>
      <rect x="40" y="200" width="530" height="180" rx="20" fill="#fff" stroke="${O}" stroke-width="6"/>
      ${T(305, 262, 'BẢNG ĐIỂM LỚP 7A', 40, '#1864AB')}${T(305, 320, 'Học kì I', 32, '#FF006E', 'middle', 700).replace('font-weight="700"', 'font-weight="700" font-style="italic"')}${T(305, 360, 'Năm học 2026–2027', 24, '#495057', 'middle', 700)}
      ${stars3([30, 180], [580, 180], [580, 400])}`),
    html: `<ul>
      <li>Chọn ô / khối ô → dùng nhóm <b>Font</b> trong <b>Home</b>.</li>
      <li>Đổi <span class="k">phông chữ</span>, <span class="k">cỡ chữ</span>, <b>màu chữ</b> A.</li>
      <li><code>B</code> in đậm (<code>Ctrl+B</code>), <code>I</code> in nghiêng (<code>Ctrl+I</code>), <code>U</code> gạch chân (<code>Ctrl+U</code>).</li>
      <li>Tiêu đề nên chữ to, đậm, màu nổi bật.</li></ul>`,
    quiz: [
      { q: 'Nút lệnh B trong nhóm Font dùng để làm gì?', o: ['In nghiêng', 'Gạch chân', 'In đậm', 'Đổi màu chữ'], a: 2, why: 'B (Bold) = in đậm.' },
      { q: 'Tổ hợp phím nào làm chữ trong ô in nghiêng?', o: ['Ctrl + I', 'Ctrl + B', 'Ctrl + U', 'Ctrl + N'], a: 0, why: 'I (Italic) = nghiêng → Ctrl + I.' } ] },
  { title: 'Căn lề trong ô', tip: 'Muốn chữ dài tự xuống dòng trong ô thì bật Wrap Text nha!',
    key: 'Căn <b>trái • giữa • phải</b><br>Căn trên • giữa • dưới<br><b>Wrap Text</b>',
    ill: () => svg(`${grid(40, 40, [['Trái', 'Giữa', 'Phải']], { cw: 170, rh: 70, fs: 28, head: false }).replace('>Giữa<', ' dx="35">Giữa<')}
      ${T(200, 135, '', 10)}
      ${['M0 0 H50 M0 14 H34 M0 28 H50 M0 42 H34', 'M0 0 H50 M8 14 H42 M0 28 H50 M8 42 H42', 'M0 0 H50 M16 14 H50 M0 28 H50 M16 42 H50'].map((d, i) => `<rect x="${70 + i*170}" y="150" width="110" height="100" rx="18" fill="${['#FF006E', '#1982C4', '#2DA44E'][i]}" stroke="${O}" stroke-width="5"/><path d="${d}" transform="translate(${100 + i*170} 178)" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`).join('')}
      <rect x="40" y="290" width="250" height="100" fill="#fff" stroke="${O}" stroke-width="5"/>${T(60, 330, 'Câu lạc bộ', 26, O, 'start', 700)}${T(60, 370, 'Tin học vui', 26, O, 'start', 700)}
      ${pillS(320, 312, 250, 58, '#8338EC', 'Wrap Text', 30)}
      ${stars3([580, 40], [580, 260], [24, 270])}`),
    html: `<ul>
      <li>Nhóm <b>Alignment</b> (Home): căn <span class="k">trái, giữa, phải</span>.</li>
      <li>Căn theo chiều dọc: <b>trên, giữa, dưới</b> ô.</li>
      <li><span class="k">Wrap Text</span>: chữ dài tự <b>xuống dòng</b> trong ô.</li>
      <li>Tiêu đề cột thường được căn giữa cho đẹp.</li></ul>`,
    quiz: [
      { q: 'Chữ trong ô quá dài, muốn tự xuống dòng trong ô, em dùng lệnh nào?', o: ['Merge & Center', 'Wrap Text', 'Sort', 'Bold'], a: 1, why: 'Wrap Text cho chữ tự xuống dòng trong ô.' },
      { q: 'Các lệnh căn lề nằm trong nhóm lệnh nào của Home?', o: ['Font', 'Number', 'Editing', 'Alignment'], a: 3, why: 'Nhóm Alignment chứa các lệnh căn lề.' } ] },
  { title: 'Gộp ô – Merge & Center', tip: 'Tiêu đề bảng nằm chính giữa trên đầu bảng nhờ Merge & Center đó!',
    key: '<b>Merge &amp; Center</b>:<br>gộp ô + căn giữa',
    ill: () => svg(`${grid(40, 40, [['DANH SÁCH', '', ''], ['Tên', 'Toán', 'Văn']], { cw: 140, rh: 60, fs: 26, fill: { '0-0': '#FFE3E3' } })}
      ${arrow(300, 200, 300, 236, '#FF006E', 8)}
      <rect x="40" y="250" width="464" height="64" fill="#D3F9D8" stroke="${O}" stroke-width="5"/>${T(272, 294, 'DANH SÁCH', 30, '#2B8A3E')}
      ${pillS(110, 336, 320, 60, '#FF006E', '⇔ Merge & Center', 26)}
      ${stars3([560, 60], [560, 280], [24, 380])}`),
    html: `<ul>
      <li>Chọn khối ô cần gộp (ví dụ <code>A1:D1</code>).</li>
      <li>Home → <span class="k">Merge &amp; Center</span>.</li>
      <li>Các ô được <b>gộp thành 1 ô</b> và nội dung <b>căn giữa</b>.</li>
      <li>Chỉ giữ dữ liệu của <b>ô trên cùng bên trái</b>.</li>
      <li>Thường dùng cho <b>tiêu đề bảng</b>.</li></ul>`,
    quiz: [
      { q: 'Muốn tiêu đề nằm giữa phía trên bảng (gộp A1:E1), em dùng lệnh nào?', o: ['Merge & Center', 'Wrap Text', 'Insert', 'AutoSum'], a: 0, why: 'Merge & Center gộp các ô và căn giữa.' },
      { q: 'Gộp các ô có dữ liệu thì dữ liệu của ô nào được giữ lại?', o: ['Ô cuối cùng', 'Tất cả các ô', 'Ô trên cùng bên trái', 'Không ô nào'], a: 2, why: 'Chỉ dữ liệu ô trên trái được giữ lại.' } ] },
  { title: 'Định dạng số', tip: 'Cùng một số 0.25 mà định dạng % sẽ hiện thành 25% đó!',
    key: 'Số thập phân <b>.0 .00</b><br><b>%</b> • tiền tệ • ngày',
    ill: () => svg(`${grid(40, 40, [['0.25', '→', '25%'], ['15000', '→', '15.000 ₫'], ['8.666', '→', '8.67']], { cw: 150, rh: 64, fs: 26, cws: [140, 60, 200], head: false, tc: { '0-2': '#E5383B', '1-2': '#2B8A3E', '2-2': '#1982C4' } })}
      ${key3d(40, 270, 110, 100, '#E5383B', '#A4161A', '%', 54)}${key3d(170, 270, 110, 100, '#2DA44E', '#1B7A35', '₫', 54)}${key3d(300, 270, 130, 100, '#1982C4', '#0F5A8A', '.00', 44)}${key3d(450, 270, 120, 100, '#FF7F11', '#C85A00', '.0←', 34)}
      ${stars3([520, 50], [560, 230], [24, 250])}`),
    html: `<ul>
      <li>Nhóm <b>Number</b> (Home) đổi <span class="k">cách hiển thị số</span>.</li>
      <li><code>.00→.0</code> giảm / <code>.0→.00</code> tăng số chữ số thập phân.</li>
      <li><code>%</code>: 0.25 → <b>25%</b>; tiền tệ: 15000 → 15.000 ₫.</li>
      <li>Ngày tháng: dd/mm/yyyy.</li>
      <li>Chỉ đổi <b>cách hiển thị</b>, giá trị thật trong ô không đổi.</li></ul>`,
    quiz: [
      { q: 'Ô chứa 0.8, định dạng kiểu phần trăm (%) sẽ hiện là:', o: ['0.8%', '8%', '800%', '80%'], a: 3, why: '0.8 = 80%.' },
      { q: 'Ô chứa 7.456, giảm còn 1 chữ số thập phân thì hiện là:', o: ['7.4', '7.5', '7', '7.46'], a: 1, why: 'Làm tròn 7.456 → 7.5 (giá trị thật vẫn là 7.456).' } ] },
  { title: 'Kẻ viền và tô màu', tip: 'Kẻ viền All Borders để khi in bảng có đủ đường kẻ nha!',
    key: '<b>Borders</b>: kẻ viền<br><b>Fill Color</b>: tô nền',
    ill: () => svg(`<g>${grid(40, 40, [['Tên', 'Toán', 'Tin'], ['An', '8', '9'], ['Bình', '7', '10']], { cw: 130, rh: 60, fs: 26, head: false, fill: { '0-0': '#FFD60A', '0-1': '#FFD60A', '0-2': '#FFD60A', '1-0': '#E7F5FF', '2-0': '#E7F5FF' }, bold: [0] }).replace(/stroke="#CED4DA" stroke-width="2"/g, `stroke="${O}" stroke-width="4"`)}</g>
      ${key3d(40, 280, 200, 100, '#1982C4', '#0F5A8A', '⊞ Borders', 30)}
      <rect x="290" y="280" width="140" height="100" rx="22" fill="#fff" stroke="${O}" stroke-width="6"/><path d="M330 300 L380 300 L395 340 Q395 356 380 356 L330 356 Z" fill="#FF7F11" stroke="${O}" stroke-width="4"/><rect x="314" y="360" width="92" height="12" fill="#FFD60A"/>
      ${pillS(450, 300, 130, 56, '#FF7F11', 'Fill', 28)}
      ${stars3([560, 60], [560, 200], [24, 250])}`),
    html: `<ul>
      <li>Đường lưới mờ mặc định <b>không được in</b> ra.</li>
      <li><span class="k">Borders</span> ⊞: kẻ đường viền cho ô (All Borders, Outside…).</li>
      <li><span class="k">Fill Color</span> 🪣: tô <b>màu nền</b> cho ô.</li>
      <li>Nên tô màu hàng tiêu đề để bảng dễ đọc.</li></ul>`,
    quiz: [
      { q: 'Lệnh nào dùng để kẻ đường viền cho các ô?', o: ['Fill Color', 'Font Color', 'Borders', 'Merge'], a: 2, why: 'Borders dùng để kẻ viền ô.' },
      { q: 'Lệnh Fill Color (thùng sơn) dùng để làm gì?', o: ['Tô màu nền cho ô', 'Đổi màu chữ', 'Xoá ô', 'Kẻ viền'], a: 0, why: 'Fill Color tô màu nền của ô.' } ] },
  { title: 'Sao chép định dạng', tip: 'Chổi quét Format Painter: quét tới đâu, đẹp tới đó!',
    key: '<b>Format Painter</b> 🖌<br>Nháy đúp: dùng nhiều lần',
    ill: () => svg(`<rect x="60" y="60" width="160" height="70" rx="10" fill="#FF006E" stroke="${O}" stroke-width="5"/>${T(140, 106, 'Tiêu đề', 28, '#fff')}
      <rect x="380" y="60" width="160" height="70" rx="10" fill="#fff" stroke="${O}" stroke-width="5" stroke-dasharray="10 6"/>${T(460, 106, 'Ghi chú', 28, '#868E96', 'middle', 700)}
      ${curve(220, 90, 300, 20, 376, 86, '#8338EC', 7)}
      <g transform="rotate(-30 300 260)"><rect x="270" y="150" width="60" height="70" rx="10" fill="#FFC300" stroke="${O}" stroke-width="5"/><rect x="290" y="220" width="20" height="120" rx="8" fill="#8D5524" stroke="${O}" stroke-width="5"/><rect x="262" y="140" width="76" height="24" rx="8" fill="#FF006E" stroke="${O}" stroke-width="5"/></g>
      <rect x="380" y="300" width="160" height="70" rx="10" fill="#FF006E" stroke="${O}" stroke-width="5"/>${T(460, 346, 'Ghi chú', 28, '#fff')}
      ${pillS(40, 330, 240, 56, '#8338EC', 'Format Painter', 24)}
      ${stars3([40, 220], [570, 220], [570, 40])}`),
    html: `<ul>
      <li>Chọn ô đã định dạng đẹp → nháy <span class="k">Format Painter</span> 🖌</li>
      <li>Kéo chuột qua ô cần sao chép định dạng.</li>
      <li>Chỉ sao chép <b>định dạng</b> (màu, phông, viền…), không chép nội dung.</li>
      <li><b>Nháy đúp</b> chổi để dùng nhiều lần, nhấn <code>Esc</code> để tắt.</li></ul>`,
    quiz: [
      { q: 'Format Painter sao chép gì từ ô này sang ô khác?', o: ['Nội dung ô', 'Công thức', 'Cả trang tính', 'Định dạng của ô'], a: 3, why: 'Format Painter chỉ chép định dạng, không chép nội dung.' },
      { q: 'Muốn dùng Format Painter cho nhiều chỗ liên tiếp, em làm gì?', o: ['Nháy một lần', 'Nháy đúp vào nút chổi', 'Nhấn Delete', 'Nhấn Ctrl + S'], a: 1, why: 'Nháy đúp để chổi dùng được nhiều lần, Esc để tắt.' } ] },
];
