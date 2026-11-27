/* ===== BÀI 8a: LÀM VIỆC VỚI DANH SÁCH DẠNG LIỆT KÊ VÀ HÌNH ẢNH TRONG VĂN BẢN ===== */
const META = { key: 'bai8a', num: '8a', theme: 'go', title: 'Bài 8a. Làm việc với danh sách dạng liệt kê và hình ảnh trong văn bản', big: 'Danh sách liệt kê<br>và hình ảnh',
  st2: 'Chủ đề 4 • Soạn thảo văn bản • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng trang trí văn bản thật gọn gàng, sinh động nhé!',
  cert: 'Tin học 8 – Bài 8a. Danh sách liệt kê và hình ảnh', file: 'Tin8_Bai8a', pass: 8 };

const pic = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="#8ECAE6" stroke="${O}" stroke-width="5"/><path d="M${x + 8} ${y + h - 8} L${x + w*.35} ${y + h*.45} L${x + w*.6} ${y + h*.75} L${x + w*.75} ${y + h*.6} L${x + w - 8} ${y + h - 8}Z" fill="#2DA44E" stroke="${O}" stroke-width="4" stroke-linejoin="round"/><circle cx="${x + w*.75}" cy="${y + h*.3}" r="${Math.min(w, h)*.12}" fill="#FFD60A" stroke="${O}" stroke-width="4"/>`;
const lines = (x, y, w, n, gap = 24) => [...Array(n)].map((_, i) => `<rect x="${x}" y="${y + i*gap}" width="${i === n - 1 ? w*.6 : w}" height="9" rx="4" fill="#ADB5BD"/>`).join('');
const ILL_T = {
  t1: () => svg(`${paper(30, 40, 250, 300, lines(50, 70, 210, 10, 26))}${paper(320, 40, 250, 300, `${[0, 1, 2, 3].map(i => `<circle cx="350" cy="${90 + i*50}" r="9" fill="#FF7F11"/>${lines(370, 85 + i*50, 180, 1)}`).join('')}${pic(350, 280, 120, 50)}`)}
    ${cross(150, 370, .8)}${tick(445, 370, .8)}`),
  t2: () => svg(`${paper(30, 30, 260, 260, `${txt(50, 70, 'Đồ dã ngoại', 22, O, 'start')}${['Lều', 'Nước uống', 'Mũ'].map((t, i) => `<circle cx="58" cy="${106 + i*44}" r="8" fill="#FF006E"/>${txt(78, 114 + i*44, t, 22, O, 'start')}`).join('')}`)}
    ${paper(310, 30, 260, 260, `${txt(330, 70, 'Nấu cơm', 22, O, 'start')}${['Vo gạo', 'Đong nước', 'Bật nồi'].map((t, i) => txt(332, 114 + i*44, `${i + 1}. ${t}`, 22, O, 'start')).join('')}`)}
    ${pillS(40, 320, 240, 50, '#FF006E', 'Bullets', 26)}${pillS(320, 320, 240, 50, '#1982C4', 'Numbering', 26)}`),
  t3: () => svg(`${winbox(30, 30, 330, 120, 'Insert', `${pillS(50, 85, 140, 46, '#FF7F11', 'Pictures', 22)}${pillS(205, 85, 140, 46, '#ADB5BD', 'Shapes', 22)}`, '#1982C4')}
    <rect x="380" y="170" width="190" height="150" fill="none" stroke="#1982C4" stroke-width="4" stroke-dasharray="8 6"/>${pic(392, 182, 166, 126)}${[[380, 170], [570, 170], [380, 320], [570, 320]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="10" fill="#fff" stroke="#1982C4" stroke-width="5"/>`).join('')}
    ${arr(540, 290, 585, 345, '#FF006E', 6)}${pillS(30, 200, 320, 54, '#2DA44E', 'Kéo nút góc', 26)}${pillS(30, 280, 320, 54, '#8338EC', 'Giữ đúng tỉ lệ', 26)}`),
  t4: () => svg(`${paper(30, 30, 260, 280, `${pic(50, 60, 100, 90)}${lines(160, 64, 110, 4)}${lines(50, 170, 220, 5)}`)}${paper(310, 30, 260, 280, `${lines(330, 60, 220, 9, 26)}${pic(380, 110, 120, 110).replace(/fill="#8ECAE6"/, 'fill="#8ECAE6" opacity=".55"')}`)}
    ${pillS(50, 330, 220, 50, '#FF7F11', 'Square', 26)}${pillS(330, 330, 220, 50, '#8338EC', 'Behind Text', 24)}`),
  t5: () => svg(`${paper(80, 20, 440, 330, `${txt(300, 64, 'Cá hề', 30, '#FF7F11')}${pic(360, 90, 140, 100)}${['Sống ở rạn san hô', 'Có sọc trắng', 'Bơi rất nhanh'].map((t, i) => `<circle cx="112" cy="${110 + i*44}" r="8" fill="#1982C4"/>${txt(130, 118 + i*44, t, 21, O, 'start')}`).join('')}${lines(110, 260, 390, 3, 24)}`)}
    ${star(560, 60, 14, '#FFD60A')}${star(40, 360, 12, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Văn bản dễ đọc hơn', tip: 'Văn bản gọn gàng, ý nào ra ý nấy!',
    html: S4Q(['So sánh hướng dẫn viết <b>liền một đoạn</b> và viết <b>thành danh sách</b>.', ''],
      ['Danh sách, hình ảnh giúp gì cho văn bản?', 'Danh sách: rõ ràng, mạch lạc; hình ảnh: sinh động.'],
      ['Bản nào đọc nhanh, nhớ lâu hơn?', 'Bản viết thành danh sách.'],
      ['Danh sách giúp <b>rõ ràng</b>.', 'Hình ảnh giúp <b>sinh động</b>.', 'Văn bản <span class="k">dễ đọc</span> hơn.']),
    quiz: [
      { q: 'Trình bày nội dung thành danh sách giúp văn bản:', o: ['Dài dòng hơn', 'Rõ ràng, dễ đọc', 'Khó hiểu hơn', 'Mất định dạng'], a: 1, why: 'Danh sách tách ý rõ ràng nên dễ đọc, dễ nhớ.' },
      { q: 'Chèn hình ảnh phù hợp giúp văn bản:', o: ['Sinh động, hấp dẫn', 'Bị lỗi chính tả', 'Mất chữ', 'Không in được'], a: 0, why: 'Hình ảnh minh hoạ làm văn bản sinh động hơn.' } ] },
  { id: 't2', name: 'Danh sách liệt kê', tip: 'Bước có thứ tự thì đánh số, ý ngang hàng thì dùng kí hiệu!',
    html: S4Q(['Lập danh sách <b>đồ dùng</b> mang đi dã ngoại.', ''],
      ['Có mấy dạng danh sách? Tạo bằng nút nào?', 'Kí hiệu (<code>Bullets</code>) và số thứ tự (<code>Numbering</code>).'],
      ['Các bước nấu cơm nên dùng dạng nào?', 'Số thứ tự – vì các bước có thứ tự.'],
      ['<b>Bullets</b>: kí hiệu đầu dòng.', '<b>Numbering</b>: số thứ tự.', 'Có thứ tự → <span class="k">đánh số</span>.']),
    quiz: [
      { q: 'Liệt kê các bước làm theo thứ tự, nên dùng:', o: ['Bullets', 'Bảng', 'Numbering', 'Hình ảnh'], a: 2, why: 'Numbering đánh số 1, 2, 3… thể hiện thứ tự các bước.' },
      { q: 'Nút Bullets dùng để tạo danh sách dạng:', o: ['Số thứ tự', 'Bảng biểu', 'Chữ nghệ thuật', 'Kí hiệu đầu dòng'], a: 3, why: 'Bullets đặt kí hiệu (chấm, vuông…) ở đầu mỗi dòng.' } ] },
  { id: 't3', name: 'Chèn hình ảnh', tip: 'Kéo nút ở góc để ảnh to nhỏ mà không bị méo nhé!',
    html: S4Q(['Chèn ảnh <b>chiếc lều</b> vào văn bản dã ngoại.', ''],
      ['Các bước chèn ảnh là gì?', 'Insert → <code>Pictures</code> → chọn tệp ảnh → Insert.'],
      ['Kéo nút tròn ở góc ảnh để làm gì?', 'Đổi kích thước, giữ đúng tỉ lệ.'],
      ['Chèn ảnh: <b>Insert → Pictures</b>.', 'Kéo <b>nút góc</b> đổi kích thước.', 'Giữ <span class="k">đúng tỉ lệ</span> ảnh.']),
    quiz: [
      { q: 'Lệnh chèn ảnh từ máy tính nằm ở:', o: ['Insert → Pictures', 'Home → Bullets', 'File → Save', 'Layout → Margins'], a: 0, why: 'Thẻ Insert, nút Pictures dùng để chèn ảnh.' },
      { q: 'Để phóng to ảnh mà không bị méo, em kéo:', o: ['Nút ở giữa cạnh', 'Nút ở góc ảnh', 'Thanh cuộn', 'Chuột ra ngoài trang'], a: 1, why: 'Kéo nút góc giữ đúng tỉ lệ chiều rộng – chiều cao.' } ] },
  { id: 't4', name: 'Bố trí ảnh với chữ', tip: 'Wrap Text giúp ảnh và chữ nằm cạnh nhau thật khéo!',
    html: S4Q(['Đặt ảnh cạnh đoạn văn, chữ <b>bao quanh</b> ảnh.', ''],
      ['Wrap Text có những kiểu nào?', 'In Line with Text, Square, Tight, Behind Text, In Front…'],
      ['Muốn ảnh làm nền sau chữ, chọn kiểu nào?', '<b>Behind Text</b>.'],
      ['<b>Square</b>: chữ bao quanh ảnh.', '<b>Behind Text</b>: ảnh sau chữ.', '<span class="k">Wrap Text</span>: vị trí ảnh với chữ.']),
    quiz: [
      { q: 'Muốn chữ bao quanh ảnh theo khung vuông, chọn:', o: ['In Line with Text', 'Behind Text', 'Square', 'In Front of Text'], a: 2, why: 'Square: chữ bao quanh theo khung hình vuông của ảnh.' },
      { q: 'Muốn ảnh nằm phía sau chữ, chọn:', o: ['Square', 'Tight', 'In Front of Text', 'Behind Text'], a: 3, why: 'Behind Text đặt ảnh phía sau văn bản.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Thử làm một trang giới thiệu loài cá em thích nào!',
    html: S4Q(['Làm trang giới thiệu một <b>loài cá</b> em yêu thích.', ''],
      ['Trình bày đặc điểm của loài cá thế nào?', 'Dùng danh sách liệt kê; chèn ảnh minh hoạ.'],
      ['Bố trí ảnh thế nào cho đẹp?', 'Chọn Wrap Text phù hợp, trang cân đối.'],
      ['Dùng <b>danh sách</b> liệt kê ý.', 'Chèn <b>ảnh</b>, chọn Wrap Text.', 'Văn bản <span class="k">rõ ràng, sinh động</span>.']),
    quiz: [
      { q: 'Numbering tạo danh sách dạng:', o: ['Kí hiệu đầu dòng', 'Số thứ tự', 'Ô màu', 'Đường viền'], a: 1, why: 'Numbering đánh số thứ tự cho các mục.' },
      { q: 'Wrap Text dùng để:', o: ['Bố trí ảnh với văn bản', 'Đổi phông chữ', 'Lưu tệp', 'Kiểm tra chính tả'], a: 0, why: 'Wrap Text chọn cách ảnh nằm cùng chữ.' } ] },
];

const KEY = [
  'Danh sách, ảnh:<br>văn bản <b>dễ đọc</b>.',
  '<b>Bullets</b> kí hiệu,<br><b>Numbering</b> số.',
  '<b>Insert → Pictures</b>;<br>kéo nút góc.',
  '<b>Wrap Text</b>:<br>Square, Behind…',
  'Rõ ràng,<br><b>sinh động</b>.',
];
