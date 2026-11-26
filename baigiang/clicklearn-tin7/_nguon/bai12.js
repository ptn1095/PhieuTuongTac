/* ===== BÀI 12: ĐỊNH DẠNG ĐỐI TƯỢNG TRÊN TRANG CHIẾU ===== */
const META = { key: 'bai12', num: 12, theme: 'tuyet', title: 'Bài 12. Định dạng đối tượng trên trang chiếu', big: 'Định dạng đối tượng<br>trên trang chiếu',
  st2: 'Chủ đề 4 • 5 phần kiến thức cần nhớ • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng trang trí trang chiếu lung linh như tuyết nhé!',
  cert: 'Tin học 7 – Bài 12. Định dạng đối tượng trên trang chiếu', file: 'Tin7_Bai12', pass: 8 };

const pic = (x, y, s = 1) => G(x, y, s, `<rect x="-80" y="-60" width="160" height="120" rx="8" fill="#D0EBFF" ${ST}/>${mountain(0, 50, .45)}${sun(45, -30, 16)}`);
const hnd = (x, y) => `<rect x="${x - 9}" y="${y - 9}" width="18" height="18" fill="#fff" stroke="#1982C4" stroke-width="4"/>`;
const ILL_T = {
  t1: () => svg(`${pic(170, 150, 1.1)}${[[82, 84], [258, 84], [82, 216], [258, 216], [170, 84], [170, 216]].map(([x, y]) => hnd(x, y)).join('')}
    ${G(170, 60, 1, `<path d="M-14 -6 A16 16 0 1 1 14 -6" fill="none" stroke="#1982C4" stroke-width="5"/>`)}${pillS(340, 70, 230, 54, '#1982C4', 'Kéo góc: cỡ', 24)}${pillS(340, 150, 230, 54, '#FF7F11', 'Mũi xoay', 24)}
    ${pillS(60, 300, 480, 54, '#2DA44E', 'Thay đổi kích thước, xoay', 26)}`),
  t2: () => svg(`${pic(150, 140, 1.1)}${G(150, 140, 1.1, `<rect x="-80" y="-60" width="160" height="120" fill="none" stroke="${O}" stroke-width="6" stroke-dasharray="14 10"/>`)}
    ${arr(260, 140, 330, 140, O, 6)}${G(440, 140, 1, `<rect x="-60" y="-46" width="120" height="92" rx="8" fill="#D0EBFF" ${ST}/>${sun(20, -10, 18)}`)}${pillS(60, 300, 480, 54, '#8338EC', 'Crop: cắt bớt phần ảnh', 26)}`),
  t3: () => svg(`${['#fff', '#fff', '#fff'].map((_, i) => G(110 + i*190, 130, .75, `<rect x="-80" y="-60" width="160" height="120" ${i === 0 ? 'rx="8"' : i === 1 ? 'rx="60"' : 'rx="30"'} fill="#D0EBFF" stroke="${['#FF7F11', '#8338EC', '#2DA44E'][i]}" stroke-width="${i === 0 ? 16 : 10}"/>${sun(30, -20, 14)}`)).join('')}
    ${pillS(60, 260, 480, 54, '#1982C4', 'Picture Styles: khung ảnh', 26)}${pillS(60, 340, 480, 50, '#FF7F11', 'Picture Border, Effects', 24)}`),
  t4: () => svg(`${G(220, 150, 1, `<rect x="-120" y="-80" width="180" height="130" rx="12" fill="#FFD6E7" ${ST}/><rect x="-60" y="-30" width="180" height="130" rx="12" fill="#D0EBFF" ${ST}/>`)}
    ${pillS(370, 60, 210, 54, '#1982C4', 'Bring Forward', 22)}${pillS(370, 140, 210, 54, '#FF7F11', 'Send Backward', 22)}${pillS(60, 320, 480, 54, '#2DA44E', 'Đưa lên trên / xuống dưới', 26)}`),
  t5: () => svg(`${slide(40, 30, 520, 250, '#fff', `${txt(300, 90, 'Tiêu đề rõ ràng', 34, '#1982C4')}${pic(180, 190, .7)}${txt(400, 180, '≤ 6 dòng', 26)}${txt(400, 220, 'chữ dễ đọc', 26)}`)}
    ${pillS(60, 320, 480, 54, '#2DA44E', 'Hài hoà, cân đối, ít chữ', 26)}`),
};

const TOPICS = [
  { id: 't1', name: 'Thay đổi kích thước, vị trí, xoay', tip: 'Các nút tròn nhỏ quanh ảnh là “tay cầm” để chỉnh ảnh!',
    html: KT([
      'Nháy chọn đối tượng (ảnh, hình) → xuất hiện các <b>nút điều khiển</b> xung quanh.',
      '<b>Đổi kích thước</b>: kéo nút ở <b>góc</b> để giữ đúng tỉ lệ ảnh.',
      '<b>Di chuyển</b>: kéo thả đối tượng đến vị trí mới.',
      '<b>Xoay</b>: kéo <b>mũi tên xoay</b> phía trên đối tượng.',
    ], 'Kéo nút <span class="k">ở góc</span> để ảnh không bị méo.'),
    quiz: [
      { q: 'Muốn phóng to ảnh mà không bị méo, em kéo nút điều khiển ở:', o: ['Cạnh trái', 'Góc ảnh', 'Cạnh trên', 'Giữa ảnh'], a: 1, why: 'Kéo nút ở góc giữ đúng tỉ lệ ảnh.' },
      { q: 'Để xoay ảnh, em kéo:', o: ['Mũi tên xoay phía trên ảnh', 'Thanh cuộn', 'Nút điền', 'Thẻ trang tính'], a: 0, why: 'Mũi tên xoay ở phía trên đối tượng.' } ] },
  { id: 't2', name: 'Cắt ảnh (Crop)', tip: 'Cắt bớt phần thừa, giữ lại phần đẹp nhất!',
    html: KT([
      '<b>Cắt ảnh</b> giúp bỏ bớt phần không cần thiết của ảnh.',
      'Chọn ảnh → thẻ <b>Picture Format</b> → <b>Crop</b>.',
      'Kéo các <b>thanh đen</b> ở cạnh, góc ảnh vào trong để cắt.',
      'Nháy ra ngoài ảnh (hoặc nháy lại Crop) để <b>hoàn tất</b>.',
    ], 'Lệnh <span class="k">Crop</span> ở thẻ Picture Format dùng để cắt ảnh.'),
    quiz: [
      { q: 'Lệnh cắt bớt một phần ảnh là:', o: ['Rotate', 'Crop', 'Copy', 'Layout'], a: 1, why: 'Crop là cắt ảnh.' },
      { q: 'Lệnh Crop nằm ở thẻ:', o: ['Picture Format', 'File', 'Slide Show', 'Review'], a: 0, why: 'Chọn ảnh, thẻ Picture Format → Crop.' } ] },
  { id: 't3', name: 'Khung và hiệu ứng cho ảnh', tip: 'Đóng khung cho ảnh như treo tranh trong lâu đài băng!',
    html: KT([
      '<b>Picture Styles</b>: chọn nhanh kiểu khung ảnh có sẵn (viền, bóng, bo góc…).',
      '<b>Picture Border</b>: chọn màu, độ dày, kiểu đường viền ảnh.',
      '<b>Picture Effects</b>: thêm hiệu ứng bóng đổ, phát sáng, 3D…',
      'Các lệnh nằm trên thẻ <b>Picture Format</b>.',
    ], 'Định dạng ảnh vừa phải để trang chiếu <span class="k">hài hoà</span>.'),
    quiz: [
      { q: 'Muốn chọn nhanh một kiểu khung có sẵn cho ảnh, em dùng:', o: ['Picture Styles', 'New Slide', 'Crop', 'Print'], a: 0, why: 'Picture Styles chứa các kiểu khung ảnh có sẵn.' },
      { q: 'Picture Border dùng để:', o: ['Cắt ảnh', 'Xoá ảnh', 'Định dạng đường viền ảnh', 'Chèn ảnh'], a: 2, why: 'Picture Border chỉnh đường viền ảnh.' } ] },
  { id: 't4', name: 'Sắp xếp các đối tượng', tip: 'Đối tượng nào nằm trên, đối tượng nào nằm dưới – em quyết định!',
    html: KT([
      'Các đối tượng trên trang chiếu có thể <b>chồng lên nhau</b> theo lớp.',
      '<b>Bring Forward</b>: đưa lên một lớp; <b>Bring to Front</b>: đưa lên trên cùng.',
      '<b>Send Backward</b>: đưa xuống một lớp; <b>Send to Back</b>: đưa xuống dưới cùng.',
      'Có thể nháy chuột phải vào đối tượng để chọn các lệnh này.',
    ], '<span class="k">Bring</span> đưa lên, <span class="k">Send</span> đưa xuống.'),
    quiz: [
      { q: 'Muốn đưa ảnh lên trên cùng, em chọn:', o: ['Send to Back', 'Bring to Front', 'Crop', 'Delete'], a: 1, why: 'Bring to Front đưa đối tượng lên trên cùng.' },
      { q: 'Lệnh đưa đối tượng xuống dưới một lớp là:', o: ['Send Backward', 'Bring Forward', 'New Slide', 'Layout'], a: 0, why: 'Send Backward đưa xuống một lớp.' } ] },
  { id: 't5', name: 'Trình bày trang chiếu hài hoà', tip: 'Đẹp nhất là khi gọn gàng, dễ đọc!',
    html: KT([
      'Nội dung <b>ngắn gọn</b>: mỗi trang khoảng <b>không quá 6 dòng</b> chữ.',
      'Chữ <b>đủ to</b>, màu chữ <b>tương phản</b> với màu nền, dùng ít phông chữ.',
      'Ảnh, hình <b>phù hợp</b>, đặt <b>cân đối</b>, không che chữ.',
      'Không dùng quá nhiều màu sắc, hiệu ứng làm <b>rối mắt</b>.',
    ], 'Trang chiếu đẹp là <span class="k">rõ ràng, cân đối, dễ đọc</span>.'),
    quiz: [
      { q: 'Điều nào giúp trang chiếu dễ đọc?', o: ['Chữ nhỏ, nhiều dòng', 'Chữ vàng trên nền trắng', 'Chữ đủ to, tương phản với nền', 'Dùng 6 phông chữ'], a: 2, why: 'Chữ đủ to, tương phản với nền thì dễ đọc.' },
      { q: 'Mỗi trang chiếu nên có khoảng:', o: ['Không quá 6 dòng chữ', 'Trên 20 dòng', 'Cả một bài văn', 'Không có chữ nào'], a: 0, why: 'Nội dung ngắn gọn, khoảng không quá 6 dòng.' } ] },
];

const KEY = [
  'Kéo <b>góc</b> đổi cỡ, kéo <b>mũi xoay</b> để xoay.',
  '<b>Crop</b> cắt ảnh (Picture Format).',
  '<b>Picture Styles</b>, Border, Effects.',
  '<b>Bring</b> lên trên, <b>Send</b> xuống dưới.',
  'Ngắn gọn, <b>chữ to</b>, tương phản, cân đối.',
];
