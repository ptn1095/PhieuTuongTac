/* ===== BÀI 5: SỬ DỤNG ĐỊA CHỈ TƯƠNG ĐỐI, TUYỆT ĐỐI TRONG CÔNG THỨC ===== */
const META = { key: 'bai5', num: 5, theme: 'samac', title: 'Bài 5. Sử dụng địa chỉ tương đối, tuyệt đối trong công thức', big: 'Địa chỉ tương đối,<br>tuyệt đối',
  st2: 'Chủ đề 4 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Lên lạc đà, băng qua sa mạc bảng tính thôi!',
  cert: 'Tin học 8 – Bài 5. Địa chỉ tương đối, tuyệt đối', file: 'Tin8_Bai5', pass: 8 };

const Y = '#FFF3BF', OR = '#FFD8A8';
const ILL_T = {
  t1: () => svg(`${grid(30, 40, [['', 'B', 'C', 'D'], ['2', '3', '5000', '=B2*C2'], ['3', '2', '8000', '=B3*C3'], ['4', '5', '3000', '=B4*C4']], [60, 130, 150, 200], 62, 26, { '1,3': Y, '2,3': OR, '3,3': OR })}
    ${arr(560, 140, 560, 270, '#FF7F11', 8)}${pillS(60, 320, 480, 54, '#2DA44E', 'Kéo thả để sao chép', 26)}`),
  t2: () => svg(`${grid(30, 50, [['', 'A', 'B', 'C', 'D'], ['1', '2', '3', '=A1+B1', ''], ['2', '4', '5', '', '=B2+C2']], [60, 100, 100, 150, 130], 66, 24, { '1,3': Y, '2,4': OR })}
    ${arr(380, 155, 470, 205, '#FF7F11', 7)}${pillS(60, 300, 480, 54, '#1982C4', 'Tương đối: tự thay đổi', 26)}${star(570, 380, 12, '#FFD60A')}`),
  t3: () => svg(`${grid(30, 40, [['', 'B', 'C', 'E'], ['1', '', '', '3000'], ['2', '50', '=B2*$E$1', ''], ['3', '80', '=B3*$E$1', '']], [60, 110, 220, 150], 62, 24, { '1,3': '#FFC9C9', '2,2': Y, '3,2': OR })}
    ${pillS(80, 320, 440, 54, '#E5383B', '$E$1 đứng yên mãi', 28)}`),
  t4: () => svg(`${grid(40, 30, [['', '1', '2', '3'], ['1', '1', '2', '3'], ['2', '2', '4', '6'], ['3', '3', '6', '9']], 80, 56, 24, { '1,1': Y, '2,2': Y, '3,3': Y })}${key3d(390, 50, 120, 100, '#FF7F11', '#C2410C', 'F4', 48)}
    ${pillS(360, 200, 210, 50, '#8338EC', '=$A2*B$1', 24)}${pillS(40, 330, 520, 54, '#1982C4', 'A1 → $A$1 → A$1 → $A1', 26)}`),
  t5: () => svg(`${[['#1982C4', 'B5', 'Tương đối'], ['#E5383B', '$C$2', 'Tuyệt đối'], ['#FF7F11', '$D7', 'Hỗn hợp'], ['#8338EC', 'H$3', 'Hỗn hợp']].map(([c, a, t], i) => pillS(40, 30 + i*92, 180, 56, '#fff', a, 28, 0, O) + arr(230, 58 + i*92, 290, 58 + i*92, O, 6) + pillS(300, 30 + i*92, 260, 56, c, t, 26)).join('')}`),
};

const TOPICS = [
  { id: 't1', name: 'Sao chép công thức', tip: 'Kéo một cái là cả cột tính xong – nhanh như gió sa mạc!',
    html: S4Q(['Tính <b>Thành tiền = Số lượng × Đơn giá</b> cho cả cột.', ''],
      ['Làm sao tính nhanh cho cả cột?', 'Nhập <code>=B2*C2</code> ở D2 rồi kéo nút điền xuống.'],
      ['Ô D3 nhận công thức gì?', '<code>=B3*C3</code> – địa chỉ tự đổi theo hàng.'],
      ['Nhập công thức <b>một lần</b>.', '<b>Kéo nút điền</b> để sao chép.', 'Sao chép giúp <span class="k">tính nhanh</span>.']),
    quiz: [
      { q: 'Ô D2 có =B2*C2. Sao chép xuống D3, công thức là:', o: ['=B2*C2', '=B3*C3', '=B3*C2', '=D3*C3'], a: 1, why: 'Xuống 1 hàng nên số hàng trong địa chỉ tăng 1.' },
      { q: 'Cách nhanh để sao chép công thức xuống các ô dưới:', o: ['Kéo thả nút điền ở góc ô', 'Gõ lại từng ô', 'Xoá bảng tính', 'Đổi phông chữ'], a: 0, why: 'Kéo thả nút điền (góc dưới phải ô) để sao chép.' } ] },
  { id: 't2', name: 'Địa chỉ tương đối', tip: 'Địa chỉ tương đối như dấu chân trên cát – đi đâu đổi theo đó!',
    html: S4Q(['Quan sát công thức khi sao chép <b>sang phải</b>, <b>xuống dưới</b>.', ''],
      ['Địa chỉ tương đối là gì?', 'Dạng <code>A1</code>: tự đổi theo vị trí ô mới khi sao chép.'],
      ['Sao chép <code>=A1+B1</code> từ C1 sang D2 được gì?', '<code>=B2+C2</code> (sang 1 cột, xuống 1 hàng).'],
      ['Địa chỉ tương đối: <b>A1</b>.', '<b>Tự thay đổi</b> khi sao chép.', 'Đổi theo <span class="k">khoảng cách</span> cột, hàng.']),
    quiz: [
      { q: 'Ô C1 có =A1+B1. Sao chép sang ô D2, công thức là:', o: ['=A1+B1', '=A2+B2', '=B2+C2', '=B1+C1'], a: 2, why: 'Sang phải 1 cột, xuống 1 hàng: A1→B2, B1→C2.' },
      { q: 'Địa chỉ nào là địa chỉ tương đối?', o: ['$A$1', '$B2', 'C$3', 'D5'], a: 3, why: 'D5 không có dấu $ nên là địa chỉ tương đối.' } ] },
  { id: 't3', name: 'Địa chỉ tuyệt đối', tip: 'Địa chỉ tuyệt đối như ốc đảo – đứng yên một chỗ giữa sa mạc!',
    html: S4Q(['Tính tiền điện; <b>giá điện</b> nằm ở ô cố định E1.', ''],
      ['Viết địa chỉ tuyệt đối thế nào?', 'Thêm <code>$</code> trước cột và hàng: <code>$E$1</code>.'],
      ['Sao chép <code>=B2*$E$1</code> xuống thì phần nào đổi?', 'B2 đổi thành B3; <code>$E$1</code> giữ nguyên.'],
      ['Địa chỉ tuyệt đối: <b>$E$1</b>.', '<b>Không đổi</b> khi sao chép.', 'Dùng cho <span class="k">ô dùng chung</span>.']),
    quiz: [
      { q: 'Địa chỉ tuyệt đối của ô E1 được viết là:', o: ['E1', '$E$1', 'E$1$', '#E#1'], a: 1, why: 'Dấu $ đặt trước tên cột và trước số hàng.' },
      { q: 'Ô C2 có =B2*$E$1. Sao chép xuống C3, công thức là:', o: ['=B3*$E$1', '=B2*$E$1', '=B3*$E$2', '=C3*$E$1'], a: 0, why: 'B2 đổi thành B3; $E$1 giữ nguyên.' } ] },
  { id: 't4', name: 'Địa chỉ hỗn hợp và phím F4', tip: 'Phím F4 là chiếc la bàn đổi địa chỉ thần tốc!',
    html: S4Q(['Lập <b>bảng cửu chương</b> chỉ bằng một công thức.', ''],
      ['Địa chỉ hỗn hợp là gì?', '<code>$A2</code> giữ cột A; <code>B$1</code> giữ hàng 1.'],
      ['Nhấn phím <code>F4</code> nhiều lần thì sao?', 'A1 → $A$1 → A$1 → $A1 → A1.'],
      ['<b>$A1</b>: giữ cột; <b>A$1</b>: giữ hàng.', 'Bảng cửu chương: <code>=$A2*B$1</code>.', '<span class="k">F4</span> đổi nhanh loại địa chỉ.']),
    quiz: [
      { q: 'Trong địa chỉ $A2, phần nào được giữ cố định?', o: ['Hàng 2', 'Cả cột và hàng', 'Cột A', 'Không phần nào'], a: 2, why: 'Dấu $ đứng trước A nên cột A được giữ cố định.' },
      { q: 'Phím nào chuyển nhanh giữa các loại địa chỉ?', o: ['F1', 'Enter', 'Esc', 'F4'], a: 3, why: 'Nhấn F4 khi đang sửa địa chỉ trong công thức.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Dấu $ là cái neo giữ cột, giữ hàng!',
    html: S4Q(['Phân loại: <code>B5</code>, <code>$C$2</code>, <code>$D7</code>, <code>H$3</code>.', ''],
      ['Mỗi địa chỉ trên thuộc loại nào?', 'B5: tương đối; $C$2: tuyệt đối; $D7, H$3: hỗn hợp.'],
      ['Khi nào cần địa chỉ tuyệt đối?', 'Khi ô được dùng chung cho nhiều công thức.'],
      ['<b>Tương đối</b>: đổi khi sao chép.', '<b>Tuyệt đối</b>: giữ nguyên.', 'Dấu <span class="k">$</span> "neo" cột hoặc hàng.']),
    quiz: [
      { q: '$C$2 là loại địa chỉ gì?', o: ['Tương đối', 'Tuyệt đối', 'Hỗn hợp', 'Không hợp lệ'], a: 1, why: 'Có $ trước cả cột và hàng nên là địa chỉ tuyệt đối.' },
      { q: 'Nên dùng địa chỉ tuyệt đối khi:', o: ['Ô dùng chung cho nhiều công thức', 'Muốn đổi màu ô', 'Muốn xoá dữ liệu', 'Muốn chèn hình'], a: 0, why: 'Ô dùng chung (giá, tỉ lệ…) cần giữ nguyên khi sao chép.' } ] },
];

const KEY = [
  'Kéo thả để<br><b>sao chép</b><br>công thức.',
  '<b>A1</b>: đổi theo<br>vị trí ô mới.',
  '<b>$A$1</b>: giữ<br>nguyên.',
  '<b>$A1, A$1</b>:<br>hỗn hợp; phím F4.',
  'Dấu <b>$</b> neo<br>cột / hàng.',
];
