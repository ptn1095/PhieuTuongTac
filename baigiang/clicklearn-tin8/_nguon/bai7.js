/* ===== BÀI 7: TRÌNH BÀY DỮ LIỆU BẰNG BIỂU ĐỒ ===== */
const META = { key: 'bai7', num: 7, theme: 'vutru', title: 'Bài 7. Trình bày dữ liệu bằng biểu đồ', big: 'Trình bày dữ liệu<br>bằng biểu đồ',
  st2: 'Chủ đề 4 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Biểu đồ như bản đồ sao – nhìn là thấy ngay! Cùng khám phá nhé!',
  cert: 'Tin học 8 – Bài 7. Trình bày dữ liệu bằng biểu đồ', file: 'Tin8_Bai7', pass: 8 };

const ILL_T = {
  t1: () => svg(`${grid(20, 60, [['Lớp', 'HSG'], ['8A', '12'], ['8B', '8'], ['8C', '15'], ['8D', '10']], [100, 90], 52, 24)}${arr(235, 190, 285, 190, O, 7)}
    ${bars(320, 330, [144, 96, 180, 120], 46, 20)}${['8A', '8B', '8C', '8D'].map((t, i) => txt(343 + i*66, 365, t, 20)).join('')}${star(570, 40, 12, '#FFD60A')}`),
  t2: () => svg(`${bars(40, 200, [80, 130, 60], 36, 14)}${lineC(240, 200, [40, 90, 70, 130], '#FF006E')}${pie(500, 140, 70)}
    ${pillS(20, 250, 170, 48, '#1982C4', 'Cột: so sánh', 20)}${pillS(215, 250, 175, 48, '#FF006E', 'Đường: xu hướng', 20)}${pillS(410, 250, 170, 48, '#2DA44E', 'Tròn: tỉ lệ', 20)}
    ${pillS(100, 340, 400, 50, '#8338EC', 'Chọn dạng phù hợp', 24)}`),
  t3: () => svg(`${vflow([['#1982C4', '1. Chọn vùng dữ liệu'], ['#FF7F11', '2. Thẻ Insert'], ['#2DA44E', '3. Chọn dạng biểu đồ']], 40, 40, 290, 110, 22)}${bars(390, 330, [120, 180, 90, 150], 34, 12)}${star(560, 40, 12, '#FFD60A')}`),
  t4: () => svg(`<rect x="40" y="30" width="400" height="320" rx="14" fill="#fff" stroke="${O}" stroke-width="6"/>${txt(240, 70, 'Học sinh giỏi', 26, '#8338EC')}${bars(90, 300, [110, 70, 170, 120], 52, 26)}
    ${lab(345, 62, 460, 40, 130, '#8338EC', 'Tiêu đề', 20)}${lab(70, 220, 460, 150, 130, '#FF7F11', 'Trục đứng', 20)}${lab(250, 304, 460, 260, 130, '#1982C4', 'Trục ngang', 20)}
    ${G(560, 340, 1, `<rect x="-24" y="-24" width="48" height="48" rx="10" fill="#2DA44E" stroke="${O}" stroke-width="5"/><path d="M0 -12 V12 M-12 0 H12" stroke="#fff" stroke-width="6" stroke-linecap="round"/>`)}`),
  t5: () => svg(`${[['#1982C4', 'Cột', 'So sánh'], ['#FF006E', 'Đường', 'Thay đổi theo thời gian'], ['#2DA44E', 'Tròn', 'Tỉ lệ phần trăm']].map(([c, a, t], i) => pillS(30, 40 + i*100, 150, 60, c, a, 28) + arr(190, 70 + i*100, 240, 70 + i*100, O, 6) + pillS(250, 40 + i*100, 320, 60, '#fff', t, 22, 0, O)).join('')}
    ${star(560, 380, 12, '#FFD60A')}${star(40, 380, 12, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Bảng số hay hình vẽ?', tip: 'Một biểu đồ đáng giá hơn cả trăm con số!',
    html: S4Q(['So sánh <b>bảng số</b> và <b>biểu đồ</b> học sinh giỏi các lớp.', ''],
      ['Biểu đồ giúp gì hơn bảng số?', 'Dễ so sánh, thấy ngay lớn – nhỏ, tăng – giảm.'],
      ['Cách nào biết nhanh lớp nhiều nhất?', 'Nhìn biểu đồ: cột cao nhất.'],
      ['Biểu đồ trình bày <b>trực quan</b>.', 'Dễ <b>so sánh</b>, thấy xu hướng.', 'Vẽ từ <span class="k">dữ liệu trong bảng</span>.']),
    quiz: [
      { q: 'Ưu điểm của biểu đồ là:', o: ['Trực quan, dễ so sánh', 'Chứa nhiều chữ hơn', 'Khó đọc hơn bảng', 'Không cần dữ liệu'], a: 0, why: 'Biểu đồ giúp nhìn nhanh, so sánh dễ dàng.' },
      { q: 'Biểu đồ trong bảng tính được tạo từ:', o: ['Hình ảnh trên mạng', 'Dữ liệu trong bảng tính', 'Âm thanh', 'Video'], a: 1, why: 'Biểu đồ được vẽ từ dữ liệu trong trang tính.' } ] },
  { id: 't2', name: 'Các dạng biểu đồ', tip: 'Cột – đường – tròn: ba “hành tinh” biểu đồ quen thuộc!',
    html: S4Q(['Gọi tên các dạng biểu đồ <b>cột, đường, tròn</b>.', ''],
      ['Mỗi dạng biểu đồ dùng khi nào?', 'Cột: so sánh; đường: thay đổi theo thời gian; tròn: tỉ lệ.'],
      ['Nhiệt độ 7 ngày trong tuần dùng biểu đồ gì?', 'Biểu đồ <b>đường</b>.'],
      ['<b>Cột</b>: so sánh.', '<b>Đường</b>: thay đổi theo thời gian.', '<b>Tròn</b>: <span class="k">tỉ lệ phần trăm</span>.']),
    quiz: [
      { q: 'Thể hiện tỉ lệ % các loại sách trong thư viện, nên dùng:', o: ['Biểu đồ cột', 'Biểu đồ đường', 'Biểu đồ tròn', 'Không cần biểu đồ'], a: 2, why: 'Biểu đồ tròn thể hiện tỉ lệ của từng phần trong tổng thể.' },
      { q: 'Thể hiện nhiệt độ thay đổi trong tuần, nên dùng:', o: ['Biểu đồ tròn', 'Bảng màu', 'Ảnh chụp', 'Biểu đồ đường'], a: 3, why: 'Biểu đồ đường thể hiện sự thay đổi theo thời gian.' } ] },
  { id: 't3', name: 'Tạo biểu đồ', tip: 'Ba bước là “phóng” xong một biểu đồ!',
    html: S4Q(['Vẽ biểu đồ cột học sinh giỏi của <b>4 lớp</b>.', ''],
      ['Các bước tạo biểu đồ là gì?', 'Chọn vùng dữ liệu (cả tiêu đề) → Insert → Charts.'],
      ['Quên chọn hàng tiêu đề thì sao?', 'Biểu đồ thiếu tên lớp, khó hiểu.'],
      ['Chọn <b>vùng dữ liệu</b> cả tiêu đề.', '<b>Insert → Charts</b>.', '<span class="k">Chọn dạng</span> phù hợp.']),
    quiz: [
      { q: 'Bước đầu tiên để tạo biểu đồ là:', o: ['Chọn vùng dữ liệu', 'Chọn màu', 'In trang tính', 'Lưu tệp'], a: 0, why: 'Phải chọn dữ liệu trước để máy biết vẽ gì.' },
      { q: 'Lệnh tạo biểu đồ nằm trong thẻ:', o: ['Home', 'Insert', 'Data', 'View'], a: 1, why: 'Nhóm Charts nằm trong thẻ Insert.' } ] },
  { id: 't4', name: 'Thành phần và chỉnh sửa', tip: 'Thêm tiêu đề, chú giải – biểu đồ sẽ “sáng” như sao!',
    html: S4Q(['Thêm <b>tiêu đề</b> và <b>chú giải</b> cho biểu đồ.', ''],
      ['Biểu đồ gồm những thành phần nào?', 'Tiêu đề, trục ngang, trục đứng, chú giải, nhãn dữ liệu.'],
      ['Nút <code>+</code> cạnh biểu đồ dùng làm gì?', 'Thêm, bớt các thành phần (Chart Elements).'],
      ['<b>Tiêu đề</b>, trục, <b>chú giải</b>.', 'Nút <b>+</b>: Chart Elements.', '<span class="k">Change Chart Type</span>: đổi dạng.']),
    quiz: [
      { q: 'Chú giải (Legend) của biểu đồ cho biết:', o: ['Tên tệp', 'Ngày tạo', 'Ý nghĩa màu của từng dãy', 'Số trang'], a: 2, why: 'Chú giải giải thích màu sắc ứng với dãy dữ liệu nào.' },
      { q: 'Muốn đổi biểu đồ cột sang biểu đồ tròn, em dùng:', o: ['Delete', 'Sort', 'Filter', 'Change Chart Type'], a: 3, why: 'Change Chart Type đổi sang dạng biểu đồ khác.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Biểu đồ luôn “bám” theo dữ liệu đó nha!',
    html: S4Q(['Nối dạng biểu đồ với <b>mục đích</b> phù hợp.', ''],
      ['Cột, đường, tròn dùng cho mục đích gì?', 'Cột – so sánh; đường – xu hướng; tròn – tỉ lệ.'],
      ['Sửa số liệu thì biểu đồ có đổi theo không?', 'Có, biểu đồ tự cập nhật.'],
      ['Chọn dạng theo <b>mục đích</b>.', 'Tạo bằng <b>Insert → Charts</b>.', 'Biểu đồ <span class="k">tự cập nhật</span>.']),
    quiz: [
      { q: 'Khi sửa số liệu trong bảng, biểu đồ sẽ:', o: ['Bị xoá', 'Tự động cập nhật', 'Không thay đổi', 'Đổi sang dạng khác'], a: 1, why: 'Biểu đồ liên kết với dữ liệu nên tự cập nhật.' },
      { q: 'Tiêu đề biểu đồ (Chart Title) dùng để:', o: ['Nêu nội dung biểu đồ', 'Tô màu cột', 'Xoá dữ liệu', 'Sắp xếp bảng'], a: 0, why: 'Tiêu đề cho biết biểu đồ nói về điều gì.' } ] },
];

const KEY = [
  'Biểu đồ <b>trực<br>quan</b>, dễ so sánh.',
  'Cột, <b>đường</b>,<br>tròn.',
  'Dữ liệu →<br><b>Insert</b> → dạng.',
  'Tiêu đề, trục,<br><b>chú giải</b>.',
  'Biểu đồ <b>tự<br>cập nhật</b>.',
];
