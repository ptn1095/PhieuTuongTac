/* ===== BÀI 11: ĐỊNH DẠNG VĂN BẢN ===== */
const META = { key: 'bai11', theme: 'chibi', num: 11, title: 'Bài 11. Định dạng văn bản', big: 'Định dạng<br>văn bản',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng làm cho văn bản đẹp và dễ đọc hơn nhé!',
  cert: 'Tin học 6 – Bài 11. Định dạng văn bản', file: 'Tin6_Bai11', pass: 8 };

const lines = (x, y, al) => [0, 1, 2, 3].map(i => { const w = [200, 160, 190, 120][i], X = al === 'c' ? x + (200 - w)/2 : al === 'r' ? x + 200 - w : x; return `<rect x="${X}" y="${y + i*22}" width="${al === 'j' ? 200 : w}" height="10" rx="5" fill="#1982C4"/>`; }).join('');
const ILL_T = {
  t1: () => svg(`${paper(40, 60, 230, 280)}${txt(155, 120, 'bài văn', 22, '#ADB5BD')}${paper(330, 60, 230, 280)}${txt(445, 120, 'Bài văn', 34, '#E5383B')}
    ${G(445, 210, 1, lines(-100, -20, 'c'))}${txt(155, 380, 'Chưa định dạng', 22)}${txt(445, 380, 'Đã định dạng', 22, '#2DA44E')}`),
  t2: () => svg(`${key3d(40, 60, 110, 90, '#1982C4', '#145A8C', 'B', 56)}${key3d(175, 60, 110, 90, '#2DA44E', '#1E7B38', '<tspan font-style="italic">I</tspan>', 56)}${key3d(310, 60, 110, 90, '#FF7F11', '#C25E00', '<tspan text-decoration="underline">U</tspan>', 56)}${key3d(445, 60, 110, 90, '#E5383B', '#A4161A', 'A', 56)}
    ${txt(95, 200, 'Đậm', 24)}${txt(230, 200, 'Nghiêng', 24)}${txt(365, 200, 'Gạch chân', 24)}${txt(500, 200, 'Màu', 24)}
    ${pillS(40, 260, 250, 50, '#8338EC', 'Phông chữ', 24)}${pillS(310, 260, 250, 50, '#FF006E', 'Cỡ chữ', 24)}${pillS(100, 340, 400, 50, '#2DA44E', 'Định dạng kí tự', 26)}`),
  t3: () => svg(`${paper(30, 40, 250, 150)}${G(55, 70, 1, lines(0, 0, 'l'))}${txt(155, 220, 'Căn trái', 22)}
    ${paper(320, 40, 250, 150)}${G(345, 70, 1, lines(0, 0, 'c'))}${txt(445, 220, 'Căn giữa', 22)}
    ${paper(30, 250, 250, 140)}${G(55, 280, 1, lines(0, 0, 'r'))}${txt(155, 412, 'Căn phải', 22)}
    ${paper(320, 250, 250, 140)}${G(345, 280, 1, lines(0, 0, 'j'))}${txt(445, 412, 'Căn đều', 22)}`),
  t4: () => svg(`${paper(60, 70, 150, 210)}${txt(135, 310, 'Hướng đứng', 22)}${paper(270, 110, 210, 150)}${txt(375, 310, 'Hướng ngang', 22)}
    ${pillS(60, 345, 220, 50, '#1982C4', 'Lề trang', 24)}${pillS(320, 345, 220, 50, '#FF7F11', 'Khổ giấy A4', 22)}${star(540, 60, 14, '#FFD60A')}`),
  t5: () => svg(`${vflow([['#1982C4', 'Định dạng kí tự'], ['#2DA44E', 'Định dạng đoạn văn'], ['#FF7F11', 'Định dạng trang'], ['#8338EC', 'In: Ctrl + P']], 140, 26, 320, 98, 26)}`),
};

const TOPICS = [
  { id: 't1', name: 'Văn bản đẹp, dễ đọc', tip: 'Cùng nội dung, trình bày đẹp sẽ dễ đọc hơn nhiều!',
    html: S4Q(['So sánh hai bản thông báo: <b>trơn</b> và <b>đã trình bày</b>.', ''],
      ['Bản đã trình bày có gì khác?', 'Tiêu đề to, đậm, căn giữa, có màu.'],
      ['Em thích đọc bản nào hơn? Vì sao?', 'Bản đã trình bày – đẹp, rõ, dễ đọc.'],
      ['<b>Định dạng</b>: trình bày văn bản.', 'Giúp văn bản <b>đẹp, rõ ràng</b>.', 'Người đọc <span class="k">dễ đọc, dễ hiểu</span>.']),
    quiz: [
      { q: 'Định dạng văn bản nhằm mục đích:', o: ['Xoá văn bản', 'Văn bản đẹp, dễ đọc hơn', 'Làm văn bản dài ra', 'Đổi nội dung'], a: 1, why: 'Định dạng làm văn bản rõ ràng, đẹp, dễ đọc.' },
      { q: 'Tiêu đề văn bản thường được trình bày:', o: ['Chữ nhỏ, mờ', 'Ở cuối trang', 'To, đậm, căn giữa', 'Giống hệt nội dung'], a: 2, why: 'Tiêu đề to, đậm, căn giữa giúp nổi bật.' } ] },
  { id: 't2', name: 'Định dạng kí tự', tip: 'B – đậm, I – nghiêng, U – gạch chân: nhớ nhé!',
    html: S4Q(['Chọn chữ rồi dùng các nút trong <b>thẻ Home</b>.', ''],
      ['Định dạng kí tự gồm những gì?', 'Phông chữ, cỡ chữ, màu chữ, kiểu chữ.'],
      ['Phím tắt chữ đậm, nghiêng, gạch chân là gì?', '<b>Ctrl+B</b> đậm, <b>Ctrl+I</b> nghiêng, <b>Ctrl+U</b> gạch chân.'],
      ['Định dạng <b>phông, cỡ, màu</b> chữ.', 'Kiểu chữ: <b>B, I, U</b>.', 'Phải <span class="k">chọn chữ trước</span>.']),
    quiz: [
      { q: 'Nút B dùng để định dạng chữ:', o: ['Nghiêng', 'Gạch chân', 'Màu đỏ', 'Đậm'], a: 3, why: 'B (Bold) là chữ đậm, phím tắt Ctrl+B.' },
      { q: 'Muốn chữ nghiêng, em nhấn tổ hợp phím:', o: ['Ctrl + I', 'Ctrl + B', 'Ctrl + U', 'Ctrl + P'], a: 0, why: 'Ctrl+I (Italic) là chữ nghiêng.' } ] },
  { id: 't3', name: 'Định dạng đoạn văn', tip: 'Căn lề giúp đoạn văn thẳng hàng, gọn gàng!',
    html: S4Q(['Thử <b>căn lề</b> cho các đoạn văn trong bài.', ''],
      ['Có mấy kiểu căn lề đoạn văn?', '4 kiểu: trái, giữa, phải, đều hai bên.'],
      ['Còn chỉnh được gì cho đoạn văn?', 'Thụt lề, khoảng cách giữa các dòng, các đoạn.'],
      ['4 kiểu <b>căn lề</b>.', 'Chỉnh <b>thụt lề, giãn dòng</b>.', 'Tiêu đề <span class="k">căn giữa</span>, nội dung căn đều.']),
    quiz: [
      { q: 'Có mấy kiểu căn lề đoạn văn?', o: ['2 kiểu', '3 kiểu', '4 kiểu', '5 kiểu'], a: 2, why: 'Căn trái, căn giữa, căn phải và căn đều hai bên.' },
      { q: 'Đâu là định dạng đoạn văn?', o: ['Căn lề, khoảng cách dòng', 'Màu chữ', 'Cỡ chữ', 'Phông chữ'], a: 0, why: 'Căn lề, thụt lề, khoảng cách dòng là định dạng đoạn văn.' } ] },
  { id: 't4', name: 'Định dạng trang và in', tip: 'Chọn hướng trang, lề trang trước khi in nhé!',
    html: S4Q(['Chuẩn bị in thông báo trên <b>khổ giấy A4</b>.', ''],
      ['Định dạng trang gồm những gì?', 'Thẻ Layout: hướng trang, lề trang, khổ giấy.'],
      ['In văn bản thế nào? Có nên xem trước không?', 'File → Print (Ctrl+P); nên xem trước để tránh lỗi.'],
      ['<b>Hướng trang</b>: đứng, ngang.', '<b>Lề</b> và <b>khổ giấy</b> (A4).', 'In: <span class="k">Ctrl + P</span>.']),
    quiz: [
      { q: 'Hướng trang gồm:', o: ['Trên và dưới', 'Đứng và ngang', 'Trái và phải', 'Trước và sau'], a: 1, why: 'Trang có hướng đứng hoặc hướng ngang.' },
      { q: 'Tổ hợp phím để in văn bản là:', o: ['Ctrl + S', 'Ctrl + C', 'Ctrl + V', 'Ctrl + P'], a: 3, why: 'Ctrl+P (Print) mở hộp thoại in.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn nhanh: kí tự – đoạn văn – trang!',
    html: S4Q(['Tóm tắt bài học bằng <b>3 ý chính</b>.', ''],
      ['Có những loại định dạng nào?', 'Định dạng kí tự, đoạn văn, trang.'],
      ['Định dạng có tác dụng gì?', 'Giúp văn bản đẹp, rõ ràng, dễ đọc.'],
      ['<b>Kí tự</b>: phông, cỡ, kiểu, màu.', '<b>Đoạn</b>: căn lề, thụt lề, giãn dòng.', '<b>Trang</b>: <span class="k">hướng, lề, khổ</span>.']),
    quiz: [
      { q: 'Đổi cỡ chữ thuộc loại định dạng nào?', o: ['Định dạng trang', 'Định dạng đoạn văn', 'Định dạng kí tự', 'In văn bản'], a: 2, why: 'Cỡ chữ là thuộc tính của kí tự.' },
      { q: 'Chọn hướng trang ngang thuộc:', o: ['Định dạng trang', 'Định dạng kí tự', 'Định dạng đoạn văn', 'Tìm kiếm'], a: 0, why: 'Hướng trang là định dạng trang.' } ] },
];

const KEY = [
  'Định dạng:<br><b>đẹp, dễ đọc</b>.',
  '<b>Kí tự</b>: phông,<br>cỡ, kiểu, màu.',
  '<b>Đoạn</b>: căn lề,<br>khoảng cách.',
  '<b>Trang</b>: hướng,<br>lề, khổ giấy.',
  'In: <b>Ctrl + P</b>.',
];

// tranh bìa
const COVER = () => svgC(`${key3d(40, 40, 96, 80, '#1982C4', '#145A8C', 'B', 50)}${key3d(150, 40, 96, 80, '#2DA44E', '#1E7B38', '<tspan font-style="italic">I</tspan>', 50)}${key3d(260, 40, 96, 80, '#FF7F11', '#C25E00', '<tspan text-decoration="underline">U</tspan>', 50)}
  ${paper(390, 24, 180, 220)}${txt(480, 76, 'Bài văn', 28, '#E5383B')}${G(400, 110, .8, lines(0, 0, 'c'))}${pencil(300, 200, .55, -30)}
  ${pillS(40, 270, 520, 56, '#8338EC', 'Văn bản đẹp, rõ ràng, dễ đọc', 26)}${star(560, 330, 12, '#FFD60A')}`);
