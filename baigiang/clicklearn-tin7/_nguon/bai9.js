/* ===== BÀI 9: TRÌNH BÀY BẢNG TÍNH ===== */
const META = { key: 'bai9', num: 9, theme: 'samac', title: 'Bài 9. Trình bày bảng tính', big: 'Trình bày<br>bảng tính',
  st2: 'Chủ đề 4 • 5 phần kiến thức cần nhớ • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng trang trí bảng tính thật đẹp giữa sa mạc nhé!',
  cert: 'Tin học 7 – Bài 9. Trình bày bảng tính', file: 'Tin7_Bai9', pass: 8 };

const HD = '#FFD8A8';
const ILL_T = {
  t1: () => svg(`${grid(30, 40, [['', 'A', 'B', 'C'], ['1', 'Rất dài…', '', ''], ['2', '', '', '']], [50, 140, 140, 140], 60, 24)}${G(545, 100, 1, `<line x1="0" y1="-30" x2="0" y2="30" stroke="${O}" stroke-width="6"/><path d="M-30 0 H30 M-20 -10 L-30 0 L-20 10 M20 -10 L30 0 L20 10" stroke="#E5383B" stroke-width="6" fill="none" stroke-linecap="round"/>`)}
    ${pillS(30, 250, 260, 54, '#1982C4', 'Insert: chèn', 26)}${pillS(310, 250, 260, 54, '#E5383B', 'Delete: xoá', 26)}${pillS(80, 340, 440, 50, '#2DA44E', 'Kéo biên để đổi độ rộng', 24)}`),
  t2: () => svg(`${grid(30, 30, [['', 'A', 'B', 'C'], ['1', '', '', ''], ['2', 'Họ tên', 'Toán', 'Văn']], [50, 200, 150, 150], 62, 24)}
    ${G(0, 0, 1, `<rect x="80" y="92" width="500" height="62" fill="${HD}" stroke="${O}" stroke-width="4"/><text x="330" y="132" text-anchor="middle" font-size="26" fill="${O}" ${F}>BẢNG ĐIỂM LỚP 7A</text>`)}
    ${pillS(80, 300, 440, 60, '#FF7F11', 'Merge &amp; Center', 30)}`),
  t3: () => svg(`${['Trái', 'Giữa', 'Phải'].map((t, i) => `${G(110 + i*190, 110, 1, `<rect x="-70" y="-50" width="140" height="100" rx="12" fill="#fff" ${ST}/>${[-24, 0, 24].map((d, k) => `<rect x="${i === 0 ? -54 : i === 1 ? -(k === 1 ? 30 : 46) : 54 - (k === 1 ? 60 : 92)}" y="${d - 5}" width="${k === 1 ? 60 : 92}" height="10" rx="5" fill="${O}"/>`).join('')}`)}${txt(110 + i*190, 200, t, 26)}`).join('')}
    ${pillS(20, 260, 270, 54, '#8338EC', 'Font, cỡ, màu chữ', 24)}${pillS(310, 260, 270, 54, '#1982C4', 'B  I  U', 28)}${pillS(80, 345, 440, 50, '#2DA44E', 'Thẻ Home', 26)}`),
  t4: () => svg(`${grid(40, 30, [['', 'A', 'B'], ['1', '7,25', '7,3'], ['2', '8,666', '8,7']], [50, 200, 200], 62, 28, { '1,2': '#D3F9D8', '2,2': '#D3F9D8' })}
    ${key3d(70, 250, 200, 80, '#2DA44E', '#1D3557', '.0 → .00', 30)}${key3d(330, 250, 200, 80, '#E5383B', '#1D3557', '.00 → .0', 30)}`),
  t5: () => svg(`${G(0, 0, 1, `${[0, 1, 2].map(r => [0, 1, 2].map(c => `<rect x="${60 + c*160}" y="${40 + r*70}" width="160" height="70" fill="${r === 0 ? '#1982C4' : r % 2 ? '#fff' : '#E7F5FF'}" stroke="${O}" stroke-width="${r === 0 ? 6 : 4}"/>`).join('')).join('')}`)}
    ${['Họ tên', 'Toán', 'Văn'].map((t, i) => txt(140 + i*160, 84, t, 26, '#fff')).join('')}${pillS(30, 290, 260, 54, '#FF7F11', 'Borders: kẻ viền', 24)}${pillS(310, 290, 260, 54, '#1982C4', 'Fill: tô nền', 26)}`),
};

const TOPICS = [
  { id: 't1', name: 'Chèn, xoá hàng và cột', tip: 'Thiếu một bạn trong danh sách? Chèn thêm hàng thôi!',
    html: KT([
      '<b>Chèn hàng/cột</b>: chọn hàng/cột, nháy chuột phải → <b>Insert</b>.',
      '<b>Xoá hàng/cột</b>: chọn hàng/cột, nháy chuột phải → <b>Delete</b>.',
      'Hàng mới chèn ở <b>phía trên</b> hàng được chọn; cột mới chèn ở <b>bên trái</b> cột được chọn.',
      '<b>Thay đổi độ rộng cột, chiều cao hàng</b>: kéo thả đường biên ở tên cột, tên hàng.',
    ], 'Nháy chuột phải → <span class="k">Insert</span> (chèn) hoặc <span class="k">Delete</span> (xoá).'),
    quiz: [
      { q: 'Chọn hàng 3 rồi Insert, hàng mới được chèn ở:', o: ['Phía dưới hàng 3', 'Phía trên hàng 3', 'Cuối trang tính', 'Đầu trang tính'], a: 1, why: 'Hàng mới được chèn phía trên hàng đang chọn.' },
      { q: 'Muốn cột rộng hơn để hiện đủ chữ, em:', o: ['Kéo thả đường biên bên phải tên cột', 'Xoá cột', 'Gõ thêm dấu cách', 'Nhấn Delete'], a: 0, why: 'Kéo thả đường biên ở tên cột để đổi độ rộng.' } ] },
  { id: 't2', name: 'Gộp ô (Merge & Center)', tip: 'Tiêu đề bảng nằm giữa trông chuyên nghiệp hẳn!',
    html: KT([
      '<b>Gộp ô</b>: nhiều ô liền nhau thành <b>một ô</b>, thường dùng cho <b>tiêu đề bảng</b>.',
      'Cách làm: chọn khối ô → thẻ <b>Home</b> → <b>Merge &amp; Center</b>.',
      'Nội dung được đặt <b>giữa</b> ô đã gộp.',
      'Muốn tách lại: chọn ô đã gộp, nháy lại nút <b>Merge &amp; Center</b>.',
    ], '<span class="k">Merge &amp; Center</span>: gộp ô và căn giữa.'),
    quiz: [
      { q: 'Lệnh gộp các ô và căn giữa nội dung là:', o: ['Wrap Text', 'Merge & Center', 'AutoSum', 'Sort'], a: 1, why: 'Merge & Center gộp ô và căn giữa.' },
      { q: 'Gộp ô thường dùng để trình bày:', o: ['Tiêu đề bảng', 'Từng điểm số', 'Công thức', 'Tên trang tính'], a: 0, why: 'Gộp ô thường dùng cho tiêu đề bảng.' } ] },
  { id: 't3', name: 'Định dạng chữ và căn lề', tip: 'Tô điểm cho chữ giống như trong phần mềm soạn thảo!',
    html: KT([
      'Định dạng chữ: <b>phông chữ, cỡ chữ, màu chữ</b>; <b>đậm (B), nghiêng (I), gạch chân (U)</b>.',
      '<b>Căn lề</b> trong ô: trái, giữa, phải; căn trên, giữa, dưới theo chiều dọc.',
      '<b>Wrap Text</b>: xuống dòng trong ô khi nội dung dài.',
      'Các lệnh nằm trên thẻ <b>Home</b>, nhóm <b>Font</b> và <b>Alignment</b>.',
    ], 'Chọn ô trước, rồi mới <span class="k">định dạng</span>.'),
    quiz: [
      { q: 'Nút B trên thẻ Home dùng để:', o: ['Gạch chân', 'In nghiêng', 'In đậm', 'Đổi màu nền'], a: 2, why: 'B (Bold) là in đậm.' },
      { q: 'Muốn chữ tự xuống dòng trong ô, em dùng lệnh:', o: ['Wrap Text', 'Merge & Center', 'Delete', 'Insert'], a: 0, why: 'Wrap Text cho chữ xuống dòng trong ô.' } ] },
  { id: 't4', name: 'Định dạng số', tip: 'Số thập phân gọn gàng giúp bảng dễ đọc!',
    html: KT([
      'Có thể quy định <b>số chữ số thập phân</b> hiển thị.',
      '<b>Increase Decimal</b>: tăng số chữ số thập phân. <b>Decrease Decimal</b>: giảm (làm tròn khi hiển thị).',
      'VD: 8,666 giảm còn 1 chữ số thập phân hiển thị <b>8,7</b>.',
      'Định dạng chỉ thay đổi <b>cách hiển thị</b>, giá trị thật trong ô <b>không đổi</b>.',
    ], 'Định dạng số không làm <span class="k">thay đổi giá trị</span> dùng để tính.'),
    quiz: [
      { q: 'Ô chứa 8,666; giảm còn 1 chữ số thập phân thì hiển thị:', o: ['8,6', '8,666', '8,7', '9'], a: 2, why: 'Làm tròn khi hiển thị: 8,666 → 8,7.' },
      { q: 'Sau khi giảm chữ số thập phân, giá trị dùng để tính:', o: ['Bị làm tròn luôn', 'Không thay đổi', 'Bằng 0', 'Bị xoá'], a: 1, why: 'Chỉ đổi cách hiển thị, giá trị thật không đổi.' } ] },
  { id: 't5', name: 'Kẻ viền và tô màu nền', tip: 'Kẻ viền giúp bảng rõ ràng khi in ra giấy!',
    html: KT([
      'Trang tính có đường lưới mờ nhưng <b>khi in không hiện</b> → cần <b>kẻ đường viền</b>.',
      'Kẻ viền: chọn khối ô → <b>Home</b> → <b>Borders</b> (VD All Borders).',
      'Tô màu nền: chọn ô → <b>Fill Color</b> (thùng sơn) → chọn màu.',
      'Nên tô màu khác cho <b>hàng tiêu đề</b> để bảng dễ đọc, đẹp mắt.',
    ], '<span class="k">Borders</span> kẻ viền, <span class="k">Fill Color</span> tô nền.'),
    quiz: [
      { q: 'Vì sao cần kẻ đường viền cho bảng?', o: ['Vì đường lưới mờ không hiện khi in', 'Để tính nhanh hơn', 'Để xoá dữ liệu', 'Để lưu tệp'], a: 0, why: 'Đường lưới mặc định không in ra, cần kẻ viền.' },
      { q: 'Lệnh tô màu nền cho ô là:', o: ['Font Color', 'Borders', 'Fill Color', 'Wrap Text'], a: 2, why: 'Fill Color (thùng sơn) tô màu nền ô.' } ] },
];

const KEY = [
  'Chuột phải → <b>Insert</b> / <b>Delete</b> hàng, cột.',
  '<b>Merge &amp; Center</b> gộp ô cho tiêu đề.',
  'Phông, cỡ, <b>B I U</b>, căn lề, <b>Wrap Text</b>.',
  'Tăng/giảm <b>chữ số thập phân</b>.',
  '<b>Borders</b> kẻ viền, <b>Fill Color</b> tô nền.',
];
