/* ===== BÀI 6: LÀM QUEN VỚI PHẦN MỀM BẢNG TÍNH ===== */
const META = { key: 'bai6', num: 6, theme: 'tuyet', title: 'Bài 6. Làm quen với phần mềm bảng tính', big: 'Làm quen với<br>phần mềm bảng tính',
  st2: 'Chủ đề 4 • 5 phần kiến thức cần nhớ • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng khám phá bảng tính giữa mùa đông tuyết trắng nhé!',
  cert: 'Tin học 7 – Bài 6. Làm quen với phần mềm bảng tính', file: 'Tin7_Bai6', pass: 8 };

const Y = '#FFE38A', BL = '#D0EBFF';
const ILL_T = {
  t1: () => svg(`${winbox(20, 20, 560, 300, 'Excel', grid(40, 80, [['', 'A', 'B', 'C', 'D'], ['1', '', '', '', ''], ['2', '', '', '', ''], ['3', '', '', '', '']], [50, 120, 120, 120, 100], 50, 24, { '2,2': Y }), '#2DA44E')}
    ${lab(250, 205, 360, 340, 210, '#FF7F11', 'Ô B2', 24)}${pillS(30, 340, 300, 50, '#1982C4', 'Cột chữ, hàng số', 24)}`),
  t2: () => svg(`${grid(40, 40, [['', 'A', 'B', 'C'], ['1', '', '', ''], ['2', '', '', ''], ['3', '', '', ''], ['4', '', '', '']], [50, 130, 130, 130], 54, 24, { '1,1': BL, '1,2': BL, '2,1': BL, '2,2': BL, '3,1': BL, '3,2': BL })}
    ${pillS(110, 330, 380, 56, '#8338EC', 'Khối A1:B3', 30)}${arr(300, 320, 220, 220, '#8338EC', 6)}`),
  t3: () => svg(`${pillS(30, 30, 540, 56, '#fff', 'fx  Lớp 7A', 26, 0, O)}${grid(40, 120, [['', 'A', 'B'], ['1', 'Lớp 7A', '35'], ['2', 'Ngày', '15/9']], [50, 220, 180], 60, 26)}
    ${txt(150, 360, 'Chữ: căn trái', 26)}${txt(440, 360, 'Số: căn phải', 26)}`),
  t4: () => svg(`${pillS(60, 40, 480, 70, '#fff', '= (5 + 3) * 2', 40, 0, O)}${arr(300, 120, 300, 180, O, 7)}${ball(300, 230, 46, '#2DA44E', '16', 40)}
    ${['+', '-', '*', '/', '^'].map((t, i) => key3d(70 + i*96, 310, 76, 66, ['#FF006E', '#1982C4', '#2DA44E', '#FF7F11', '#8338EC'][i], '#1D3557', t, 40)).join('')}`),
  t5: () => svg(`${grid(30, 30, [['', 'A', 'B', 'C'], ['1', '5', '7', '=A1+B1'], ['2', '9', '7', '16']], [50, 110, 110, 220], 62, 26, { '1,3': Y })}
    ${pillS(60, 240, 480, 54, '#1982C4', 'A1 đổi 5 → 9: C1 tự đổi 12 → 16', 22)}${pillS(100, 320, 400, 56, '#2DA44E', 'Tự động cập nhật', 28)}`),
};

const TOPICS = [
  { id: 't1', name: 'Giao diện bảng tính', tip: 'Bảng tính giống một tờ giấy kẻ ô khổng lồ!',
    html: KT([
      'Phần mềm bảng tính (VD <b>Microsoft Excel</b>) giúp <b>ghi dữ liệu dạng bảng, tính toán</b> tự động.',
      'Tệp bảng tính gồm các <b>trang tính</b> (Sheet). Trang tính gồm các <b>hàng</b> và <b>cột</b>.',
      'Cột đặt tên bằng <b>chữ cái</b> A, B, C…; hàng đánh <b>số</b> 1, 2, 3…',
      '<b>Ô tính</b> là giao của hàng và cột; <b>địa chỉ ô</b> = tên cột + tên hàng, VD <b>B2</b>.',
    ], 'Địa chỉ ô viết <span class="k">tên cột trước, tên hàng sau</span>: C5, D10.'),
    quiz: [
      { q: 'Ô nằm ở cột C, hàng 5 có địa chỉ là:', o: ['5C', 'C5', 'CC5', 'Hàng5C'], a: 1, why: 'Địa chỉ ô = tên cột + tên hàng → C5.' },
      { q: 'Trong trang tính, các cột được đặt tên bằng:', o: ['Chữ cái A, B, C…', 'Số 1, 2, 3…', 'Màu sắc', 'Tên học sinh'], a: 0, why: 'Cột đặt tên bằng chữ cái, hàng đánh số.' } ] },
  { id: 't2', name: 'Khối ô, thanh công thức', tip: 'Chọn một khối ô giống như quây một mảnh vườn hình chữ nhật!',
    html: KT([
      '<b>Khối ô</b> là các ô liền nhau tạo thành hình chữ nhật.',
      'Địa chỉ khối = <b>ô trên trái : ô dưới phải</b>, VD <b>A1:B3</b>.',
      '<b>Hộp tên</b> (Name Box) cho biết địa chỉ ô đang chọn.',
      '<b>Thanh công thức</b> hiển thị dữ liệu hoặc công thức của ô đang chọn.',
    ], 'Khối ô: <span class="k">A1:B3</span> gồm 6 ô từ A1 đến B3.'),
    quiz: [
      { q: 'Khối ô A1:B3 gồm bao nhiêu ô?', o: ['3 ô', '4 ô', '6 ô', '9 ô'], a: 2, why: '2 cột (A, B) × 3 hàng (1, 2, 3) = 6 ô.' },
      { q: 'Thanh công thức dùng để:', o: ['Đổi màu ô', 'Xem, sửa nội dung ô đang chọn', 'In bảng tính', 'Đóng phần mềm'], a: 1, why: 'Thanh công thức hiển thị nội dung, công thức của ô đang chọn.' } ] },
  { id: 't3', name: 'Nhập và sửa dữ liệu', tip: 'Nhìn cách căn lề là đoán được kiểu dữ liệu!',
    html: KT([
      '<b>Nhập dữ liệu</b>: chọn ô, gõ nội dung rồi nhấn <b>Enter</b>.',
      '<b>Sửa dữ liệu</b>: nháy đúp vào ô, nhấn <b>F2</b>, hoặc sửa trên thanh công thức.',
      'Dữ liệu <b>số</b> mặc định <b>căn phải</b>; dữ liệu <b>chữ (văn bản)</b> mặc định <b>căn trái</b>.',
      'Xoá dữ liệu: chọn ô rồi nhấn phím <b>Delete</b>.',
    ], 'Số <span class="k">căn phải</span>, chữ <span class="k">căn trái</span>.'),
    quiz: [
      { q: 'Khi nhập số 35 vào ô, mặc định số được:', o: ['Căn trái', 'Căn giữa', 'Căn phải', 'In đậm'], a: 2, why: 'Dữ liệu số mặc định căn phải.' },
      { q: 'Để sửa dữ liệu trong ô, em có thể nhấn phím:', o: ['F2', 'F5', 'Esc', 'Tab'], a: 0, why: 'Nhấn F2 (hoặc nháy đúp) để sửa trong ô.' } ] },
  { id: 't4', name: 'Công thức đơn giản', tip: 'Dấu = là “câu thần chú” để bảng tính bắt đầu tính!',
    html: KT([
      'Công thức <b>luôn bắt đầu bằng dấu =</b>.',
      'Các phép toán: <b>+</b> cộng, <b>-</b> trừ, <b>*</b> nhân, <b>/</b> chia, <b>^</b> luỹ thừa.',
      'Thứ tự tính: <b>ngoặc</b> trước, rồi <b>^</b>, rồi <b>* /</b>, cuối cùng <b>+ -</b>.',
      'VD: <b>=(5+3)*2</b> cho kết quả <b>16</b>; nhấn Enter để xem kết quả.',
    ], 'Công thức bắt đầu bằng dấu <span class="k">=</span>.'),
    quiz: [
      { q: 'Công thức nào viết đúng trong bảng tính?', o: ['(5+3)*2', '=(5+3)*2', '=(5+3)x2', '5+3=*2'], a: 1, why: 'Công thức bắt đầu bằng dấu =, phép nhân dùng dấu *.' },
      { q: 'Kết quả của công thức =2+3*4 là:', o: ['20', '24', '14', '9'], a: 2, why: 'Nhân trước: 3*4 = 12, rồi 2 + 12 = 14.' } ] },
  { id: 't5', name: 'Công thức dùng địa chỉ ô', tip: 'Dùng địa chỉ ô thì bảng tính tự cập nhật – siêu tiện!',
    html: KT([
      'Trong công thức có thể dùng <b>địa chỉ ô</b> thay cho số, VD <b>=A1+B1</b>.',
      'Khi dữ liệu trong ô <b>thay đổi</b>, kết quả công thức <b>tự động cập nhật</b>.',
      'Có thể gõ địa chỉ ô hoặc <b>nháy chuột</b> vào ô để đưa địa chỉ vào công thức.',
      'Lưu tệp bảng tính: <b>Ctrl + S</b>; tệp có phần mở rộng <b>.xlsx</b>.',
    ], 'Dùng địa chỉ ô để bảng tính <span class="k">tự động tính lại</span>.'),
    quiz: [
      { q: 'Ô C1 có công thức =A1+B1. Nếu A1 = 5, B1 = 7 thì C1 bằng:', o: ['57', '12', '2', '35'], a: 1, why: '5 + 7 = 12.' },
      { q: 'Lợi ích khi dùng địa chỉ ô trong công thức là:', o: ['Kết quả tự cập nhật khi dữ liệu đổi', 'Bảng tính đẹp hơn', 'Chữ to hơn', 'Không cần dấu ='], a: 0, why: 'Dữ liệu thay đổi thì kết quả tự động tính lại.' } ] },
];

const KEY = [
  'Hàng (số) × cột (chữ) = <b>ô</b>; địa chỉ ô như <b>B2</b>.',
  'Khối ô <b>A1:B3</b>; thanh công thức, hộp tên.',
  'Số <b>căn phải</b>, chữ <b>căn trái</b>; sửa bằng F2.',
  'Công thức bắt đầu bằng <b>=</b>; + - * / ^.',
  '<b>=A1+B1</b>: dữ liệu đổi, kết quả tự đổi.',
];
