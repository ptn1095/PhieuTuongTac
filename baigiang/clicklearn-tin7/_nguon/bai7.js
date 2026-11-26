/* ===== BÀI 7: TÍNH TOÁN TỰ ĐỘNG TRÊN BẢNG TÍNH ===== */
const META = { key: 'bai7', num: 7, theme: 'go', title: 'Bài 7. Tính toán tự động trên bảng tính', big: 'Tính toán tự động<br>trên bảng tính',
  st2: 'Chủ đề 4 • 5 phần kiến thức cần nhớ • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng để bảng tính tính toán siêu nhanh nào!',
  cert: 'Tin học 7 – Bài 7. Tính toán tự động trên bảng tính', file: 'Tin7_Bai7', pass: 8 };

const Y = '#FFE38A', OR = '#FFD8A8';
const ILL_T = {
  t1: () => svg(`${grid(20, 30, [['', 'B', 'C', 'D'], ['2', 'Số lượng', 'Đơn giá', 'Thành tiền'], ['3', '4', '5000', '=B3*C3']], [50, 150, 150, 190], 62, 24, { '2,3': Y })}
    ${pillS(60, 260, 480, 54, '#1982C4', 'Thành tiền = Số lượng × Đơn giá', 24)}${pillS(140, 340, 320, 52, '#2DA44E', 'Kết quả: 20000', 26)}`),
  t2: () => svg(`${pillS(40, 40, 520, 64, '#fff', '= B3 * C3', 38, 0, O)}${txt(300, 170, 'Nháy chuột vào ô B3,', 26)}${txt(300, 210, 'gõ *, nháy vào ô C3', 26)}
    ${mouse(90, 300, .6)}${key3d(220, 260, 160, 80, '#2DA44E', '#1D3557', 'Enter', 34)}${star(520, 300, 24, '#FFD60A')}`),
  t3: () => svg(`${grid(30, 30, [['', 'B', 'C', 'D'], ['3', '4', '5000', '=B3*C3'], ['4', '2', '8000', '=B4*C4'], ['5', '6', '3000', '=B5*C5']], [50, 110, 150, 200], 62, 24, { '1,3': Y, '2,3': OR, '3,3': OR })}
    ${G(520, 90, 1, `<rect x="-14" y="-14" width="28" height="28" fill="#2DA44E" ${ST}/><path d="M-6 0 H6 M0 -6 V6" stroke="#fff" stroke-width="5"/>`)}${arr(520, 120, 520, 260, '#FF7F11', 8)}
    ${pillS(60, 320, 480, 54, '#2DA44E', 'Kéo thả nút điền', 28)}`),
  t4: () => svg(`${pillS(30, 50, 250, 60, '#fff', '=B3*C3', 32, 0, O)}${arr(290, 80, 330, 80, O, 6)}${pillS(340, 50, 230, 60, '#FFD8A8', '=B4*C4', 32, 0, O)}
    ${txt(300, 190, 'Sao chép xuống 1 hàng:', 28)}${txt(300, 235, 'số hàng tự tăng thêm 1', 28)}${pillS(80, 300, 440, 56, '#1982C4', 'Địa chỉ tương đối', 30)}`),
  t5: () => svg(`${vflow([['#1982C4', 'Nhập dữ liệu'], ['#FF7F11', 'Viết 1 công thức'], ['#2DA44E', 'Sao chép cho cả cột'], ['#8338EC', 'Kiểm tra kết quả']], 150, 22, 300, 96, 26)}`),
};

const TOPICS = [
  { id: 't1', name: 'Công thức trong bảng tính', tip: 'Viết công thức một lần, bảng tính làm phần còn lại!',
    html: KT([
      'Bảng tính giúp <b>tính toán tự động</b> nhờ <b>công thức</b>.',
      'Công thức bắt đầu bằng <b>=</b>, gồm <b>địa chỉ ô, số, phép toán</b> (+ - * / ^) và dấu ngoặc.',
      'VD: Thành tiền = Số lượng × Đơn giá → ô D3: <b>=B3*C3</b>.',
      'Kết quả hiện trong <b>ô</b>; công thức hiện trên <b>thanh công thức</b>.',
    ], 'Nên dùng <span class="k">địa chỉ ô</span> trong công thức thay cho số cụ thể.'),
    quiz: [
      { q: 'Số lượng ở ô B3, đơn giá ở ô C3. Công thức tính thành tiền là:', o: ['=B3+C3', 'B3*C3', '=B3*C3', '=B3xC3'], a: 2, why: 'Bắt đầu bằng = và dùng dấu * cho phép nhân.' },
      { q: 'Khi chọn ô chứa công thức, công thức hiện ở:', o: ['Thanh công thức', 'Thanh tiêu đề', 'Thùng rác', 'Tên trang tính'], a: 0, why: 'Thanh công thức hiển thị công thức của ô đang chọn.' } ] },
  { id: 't2', name: 'Cách nhập công thức', tip: 'Nháy chuột vào ô giúp tránh gõ nhầm địa chỉ!',
    html: KT([
      'Bước 1: chọn ô cần đặt kết quả, gõ dấu <b>=</b>.',
      'Bước 2: <b>nháy chuột</b> vào ô cần dùng (hoặc gõ địa chỉ), gõ phép toán.',
      'Bước 3: nhấn <b>Enter</b> để kết thúc và xem kết quả.',
      'Nếu sai, chọn ô, sửa trên thanh công thức hoặc nhấn <b>F2</b>.',
    ], '<span class="k">= → chọn ô → phép toán → chọn ô → Enter</span>'),
    quiz: [
      { q: 'Kết thúc việc nhập công thức, em nhấn phím:', o: ['Delete', 'Enter', 'Shift', 'Esc'], a: 1, why: 'Nhấn Enter để kết thúc nhập công thức.' },
      { q: 'Vì sao nên nháy chuột vào ô khi nhập công thức?', o: ['Để chữ đẹp hơn', 'Để ô đổi màu', 'Tránh gõ nhầm địa chỉ ô', 'Để in nhanh'], a: 2, why: 'Nháy chuột vào ô giúp đưa đúng địa chỉ vào công thức.' } ] },
  { id: 't3', name: 'Sao chép công thức', tip: 'Kéo nút điền một cái là cả cột có công thức!',
    html: KT([
      'Có thể <b>sao chép công thức</b> cho các ô khác cần tính giống nhau.',
      'Cách 1: chọn ô, <b>Ctrl + C</b>, chọn ô đích, <b>Ctrl + V</b>.',
      'Cách 2: kéo thả <b>nút điền</b> (ô vuông nhỏ ở góc dưới phải ô) xuống các ô cần tính.',
      'Giúp <b>tiết kiệm thời gian</b>, không phải gõ lại công thức nhiều lần.',
    ], 'Kéo <span class="k">nút điền</span> để sao chép công thức nhanh.'),
    quiz: [
      { q: 'Nút điền nằm ở vị trí nào của ô?', o: ['Góc trên trái', 'Giữa ô', 'Góc dưới phải', 'Trên thanh công thức'], a: 2, why: 'Nút điền là ô vuông nhỏ ở góc dưới phải của ô.' },
      { q: 'Lợi ích của sao chép công thức là:', o: ['Không cần gõ lại công thức nhiều lần', 'Xoá dữ liệu', 'Đổi màu chữ', 'Tắt máy nhanh'], a: 0, why: 'Sao chép giúp tính nhanh cho nhiều ô.' } ] },
  { id: 't4', name: 'Địa chỉ ô tự điều chỉnh', tip: 'Bảng tính thông minh tự đổi địa chỉ cho đúng hàng!',
    html: KT([
      'Khi sao chép công thức, <b>địa chỉ ô</b> trong công thức <b>tự điều chỉnh</b> theo vị trí mới.',
      'Sao chép <b>xuống 1 hàng</b>: số hàng tăng 1. VD <b>=B3*C3</b> → <b>=B4*C4</b>.',
      'Sao chép <b>sang phải 1 cột</b>: tên cột tăng 1. VD <b>=A1+A2</b> → <b>=B1+B2</b>.',
      'Kiểu địa chỉ này gọi là <b>địa chỉ tương đối</b>.',
    ], 'Sao chép công thức thì <span class="k">địa chỉ tương đối</span> tự thay đổi.'),
    quiz: [
      { q: 'Ô D3 có =B3*C3. Sao chép xuống ô D4, công thức thành:', o: ['=B3*C3', '=B4*C4', '=C3*D3', '=B5*C5'], a: 1, why: 'Xuống 1 hàng thì số hàng tăng 1.' },
      { q: 'Ô C1 có =A1+B1. Sao chép sang ô D1, công thức thành:', o: ['=B1+C1', '=A2+B2', '=A1+B1', '=C1+D1'], a: 0, why: 'Sang phải 1 cột thì tên cột tăng 1: A→B, B→C.' } ] },
  { id: 't5', name: 'Lập bảng tính toán', tip: 'Chỉ cần một công thức đúng là cả cột đều đúng!',
    html: KT([
      'Các bước: <b>nhập dữ liệu</b> → <b>viết công thức</b> cho ô đầu tiên.',
      '<b>Sao chép</b> công thức cho các ô còn lại trong cột.',
      '<b>Kiểm tra</b> kết quả; khi sửa dữ liệu, bảng <b>tự tính lại</b>.',
      'Ứng dụng: bảng tiền mua đồ dùng, bảng điểm, thống kê chi tiêu…',
    ], 'Dữ liệu thay đổi → kết quả <span class="k">tự động cập nhật</span>.'),
    quiz: [
      { q: 'Muốn tính thành tiền cho 20 mặt hàng, cách nhanh nhất là:', o: ['Tính nhẩm từng dòng', 'Gõ 20 công thức', 'Viết 1 công thức rồi sao chép', 'Dùng máy tính bỏ túi'], a: 2, why: 'Viết 1 công thức rồi sao chép cho cả cột.' },
      { q: 'Khi sửa số lượng một mặt hàng, ô thành tiền sẽ:', o: ['Tự động tính lại', 'Không đổi', 'Bị xoá', 'Báo lỗi'], a: 0, why: 'Công thức dùng địa chỉ ô nên tự cập nhật.' } ] },
];

const KEY = [
  'Công thức <b>=B3*C3</b>: dùng địa chỉ ô.',
  '<b>=</b> → chọn ô → phép toán → <b>Enter</b>.',
  'Sao chép bằng <b>Ctrl+C/V</b> hoặc kéo <b>nút điền</b>.',
  'Địa chỉ <b>tương đối</b> tự điều chỉnh khi sao chép.',
  'Dữ liệu đổi → kết quả <b>tự cập nhật</b>.',
];
