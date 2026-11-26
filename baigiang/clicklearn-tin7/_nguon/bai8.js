/* ===== BÀI 8: CÔNG CỤ HỖ TRỢ TÍNH TOÁN ===== */
const META = { key: 'bai8', num: 8, theme: 'nghinle', title: 'Bài 8. Công cụ hỗ trợ tính toán', big: 'Công cụ hỗ trợ<br>tính toán',
  st2: 'Chủ đề 4 • 5 phần kiến thức cần nhớ • 10 câu đố • giấy chứng nhận',
  hello: 'Mở kho báu thần kì của các hàm bảng tính nhé!',
  cert: 'Tin học 7 – Bài 8. Công cụ hỗ trợ tính toán', file: 'Tin7_Bai8', pass: 8 };

const Y = '#FFE38A';
const FN = (x, y, c, t, d) => card(x, y, 250, 60, c, t, 28) + txt(x + 125, y + 92, d, 22);
const ILL_T = {
  t1: () => svg(`${pillS(30, 40, 540, 70, '#fff', '=SUM(A1:A5)', 42, 0, O)}${arr(150, 120, 150, 180, '#1982C4', 6)}${arr(420, 120, 420, 180, '#FF7F11', 6)}
    ${pillS(40, 190, 220, 54, '#1982C4', 'Tên hàm', 26)}${pillS(320, 190, 240, 54, '#FF7F11', 'Tham số', 26)}${pillS(80, 310, 440, 54, '#2DA44E', 'Hàm: công thức có sẵn', 26)}`),
  t2: () => svg(`${grid(30, 30, [['', 'A'], ['1', '7'], ['2', '9'], ['3', '8'], ['4', '=SUM(A1:A3)']], [50, 230], 56, 26, { '4,1': Y })}${pillS(340, 60, 230, 60, '#2DA44E', 'SUM: tổng', 28)}
    ${pillS(340, 150, 230, 60, '#1982C4', '= 24', 32)}${pillS(330, 270, 250, 60, '#FF7F11', 'Σ AutoSum', 26)}`),
  t3: () => svg(`${FN(30, 30, '#8338EC', 'AVERAGE', 'Trung bình cộng')}${FN(320, 30, '#FF006E', 'MAX', 'Lớn nhất')}${FN(30, 210, '#1982C4', 'MIN', 'Nhỏ nhất')}${FN(320, 210, '#2DA44E', 'COUNT', 'Đếm ô chứa số')}`),
  t4: () => svg(`${grid(30, 30, [['', 'A', 'B'], ['1', '6', '8'], ['2', '10', 'Vắng'], ['3', '=COUNT(A1:B2)', '']], [50, 220, 170], 62, 24, { '3,1': Y })}${ball(520, 110, 46, '#2DA44E', '3', 42)}
    ${pillS(40, 300, 520, 54, '#1982C4', 'COUNT chỉ đếm ô chứa số', 26)}`),
  t5: () => svg(`${tlist([[true, '#2DA44E', '=SUM(A1:A5)'], [true, '#2DA44E', '=MAX(B2, B5, 10)'], [false, '#E5383B', 'SUM(A1:A5)  (thiếu =)'], [false, '#E5383B', '=SUM A1:A5  (thiếu ngoặc)']], 60, 92, 24)}`),
};

const TOPICS = [
  { id: 't1', name: 'Hàm trong bảng tính', tip: 'Hàm là “công thức có sẵn” – gọi tên là dùng được!',
    html: KT([
      '<b>Hàm</b> là công thức được <b>định nghĩa sẵn</b>, giúp tính toán nhanh, chính xác.',
      'Cú pháp: <b>=Tên_hàm(tham số)</b>, VD <b>=SUM(A1:A5)</b>.',
      '<b>Tham số</b> có thể là số, địa chỉ ô, khối ô; các tham số cách nhau bởi dấu <b>phẩy</b> (,).',
      'Có thể gõ hàm trực tiếp hoặc chọn trong thẻ <b>Formulas</b>.',
    ], 'Nhập hàm cũng bắt đầu bằng dấu <span class="k">=</span>.'),
    quiz: [
      { q: 'Cú pháp đúng của một hàm là:', o: ['Tên_hàm=(tham số)', '=Tên_hàm(tham số)', '(tham số)=Tên_hàm', 'Tên_hàm(tham số)='], a: 1, why: 'Hàm viết dạng =Tên_hàm(tham số).' },
      { q: 'Trong =SUM(A1:A5), phần A1:A5 được gọi là:', o: ['Tham số', 'Tên hàm', 'Tên trang tính', 'Thanh công thức'], a: 0, why: 'A1:A5 là tham số của hàm SUM.' } ] },
  { id: 't2', name: 'Hàm SUM tính tổng', tip: 'SUM là hàm được dùng nhiều nhất đấy!',
    html: KT([
      '<b>SUM</b> tính <b>tổng</b> các số trong tham số.',
      'VD: <b>=SUM(A1:A3)</b> = A1 + A2 + A3. Nếu A1 = 7, A2 = 9, A3 = 8 thì kết quả là <b>24</b>.',
      'Có thể kết hợp: <b>=SUM(A1:A3, C5, 10)</b>.',
      'Nút <b>AutoSum (Σ)</b> trên thẻ Home giúp chèn nhanh hàm SUM.',
    ], '<span class="k">SUM</span> = tổng.'),
    quiz: [
      { q: 'A1 = 7, A2 = 9, A3 = 8. Kết quả =SUM(A1:A3) là:', o: ['8', '9', '24', '3'], a: 2, why: '7 + 9 + 8 = 24.' },
      { q: 'Nút AutoSum (Σ) dùng để chèn nhanh hàm:', o: ['MAX', 'SUM', 'COUNT', 'MIN'], a: 1, why: 'AutoSum chèn nhanh hàm SUM tính tổng.' } ] },
  { id: 't3', name: 'AVERAGE, MAX, MIN', tip: 'Ba hàm “anh em” giúp tìm điểm trung bình, cao nhất, thấp nhất!',
    html: KT([
      '<b>AVERAGE</b>: tính <b>trung bình cộng</b>. VD =AVERAGE(6, 8, 10) = <b>8</b>.',
      '<b>MAX</b>: tìm giá trị <b>lớn nhất</b>. VD =MAX(6, 8, 10) = <b>10</b>.',
      '<b>MIN</b>: tìm giá trị <b>nhỏ nhất</b>. VD =MIN(6, 8, 10) = <b>6</b>.',
      'Hay dùng để tính <b>điểm trung bình</b>, tìm điểm cao nhất, thấp nhất của lớp.',
    ], 'AVERAGE <span class="k">trung bình</span>, MAX <span class="k">lớn nhất</span>, MIN <span class="k">nhỏ nhất</span>.'),
    quiz: [
      { q: 'Hàm tính trung bình cộng là:', o: ['SUM', 'MAX', 'AVERAGE', 'COUNT'], a: 2, why: 'AVERAGE tính trung bình cộng.' },
      { q: 'Kết quả của =MIN(4, 9, 2, 7) là:', o: ['2', '9', '22', '4'], a: 0, why: 'MIN cho giá trị nhỏ nhất là 2.' } ] },
  { id: 't4', name: 'Hàm COUNT đếm số', tip: 'COUNT chỉ đếm ô có số, bỏ qua chữ và ô trống!',
    html: KT([
      '<b>COUNT</b> <b>đếm số ô chứa dữ liệu số</b> trong tham số.',
      'Ô chứa <b>chữ</b> hoặc ô <b>trống</b> không được đếm.',
      'VD: A1 = 6, B1 = 8, A2 = 10, B2 = “Vắng” → <b>=COUNT(A1:B2)</b> = <b>3</b>.',
      'Dùng để đếm số bạn có điểm, số ngày có số liệu…',
    ], '<span class="k">COUNT</span> chỉ đếm ô chứa <b>số</b>.'),
    quiz: [
      { q: 'Hàm COUNT dùng để:', o: ['Tính tổng', 'Đếm số ô chứa số', 'Tìm số lớn nhất', 'Tính trung bình'], a: 1, why: 'COUNT đếm các ô chứa dữ liệu số.' },
      { q: 'Khối A1:A4 chứa 5, “An”, 7, ô trống. =COUNT(A1:A4) bằng:', o: ['4', '3', '1', '2'], a: 3, why: 'Chỉ có 2 ô chứa số (5 và 7).' } ] },
  { id: 't5', name: 'Lưu ý khi dùng hàm', tip: 'Viết hàm đúng cú pháp là thành công một nửa!',
    html: KT([
      'Phải có dấu <b>=</b> ở đầu, <b>tên hàm đúng</b>, tham số đặt <b>trong ngoặc ()</b>.',
      'Không gõ khoảng trắng thừa giữa tên hàm và dấu ngoặc.',
      'Khối ô viết bằng dấu <b>hai chấm</b> (A1:A5), các tham số cách nhau bởi dấu <b>phẩy</b>.',
      'Tên hàm <b>không phân biệt</b> chữ hoa, chữ thường (sum hay SUM đều được).',
    ], 'Hàm sai cú pháp sẽ <span class="k">báo lỗi</span> hoặc cho kết quả sai.'),
    quiz: [
      { q: 'Công thức nào viết đúng?', o: ['SUM(A1:A5)', '=SUM A1:A5', '=SUM(A1:A5)', '=SUM[A1:A5]'], a: 2, why: 'Cần dấu =, tên hàm và tham số trong ngoặc tròn.' },
      { q: 'Các tham số của hàm cách nhau bởi dấu:', o: ['Phẩy (,)', 'Cộng (+)', 'Chấm than (!)', 'Bằng (=)'], a: 0, why: 'Các tham số cách nhau bởi dấu phẩy.' } ] },
];

const KEY = [
  'Hàm: <b>=Tên_hàm(tham số)</b>.',
  '<b>SUM</b>: tính tổng; nút <b>AutoSum Σ</b>.',
  '<b>AVERAGE</b> trung bình, <b>MAX</b> lớn nhất, <b>MIN</b> nhỏ nhất.',
  '<b>COUNT</b>: đếm ô chứa số.',
  'Đủ <b>=</b>, tên hàm đúng, tham số trong <b>()</b>.',
];
