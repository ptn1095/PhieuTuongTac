/* ===== BÀI 11: ĐỊNH DẠNG VĂN BẢN ===== */
const META = { key: 'bai11', num: 11, title: 'Bài 11. Định dạng văn bản', big: 'Định dạng<br>văn bản',
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
    html: S4('So sánh hai bản <b>thông báo</b>: một bản trơn, một bản đã trình bày.',
      'Bản đã trình bày có tiêu đề to, đậm, căn giữa, có màu.',
      'Em thích đọc bản nào hơn? Vì sao?',
      '<span class="k">Định dạng</span> giúp văn bản đẹp, rõ ràng, dễ đọc.'),
    quiz: [
      { q: 'Định dạng văn bản nhằm mục đích:', o: ['Xoá văn bản', 'Văn bản đẹp, dễ đọc hơn', 'Làm văn bản dài ra', 'Đổi nội dung'], a: 1, why: 'Định dạng làm văn bản rõ ràng, đẹp, dễ đọc.' },
      { q: 'Tiêu đề văn bản thường được trình bày:', o: ['Chữ nhỏ, mờ', 'Ở cuối trang', 'To, đậm, căn giữa', 'Giống hệt nội dung'], a: 2, why: 'Tiêu đề to, đậm, căn giữa giúp nổi bật.' } ] },
  { id: 't2', name: 'Định dạng kí tự', tip: 'B – đậm, I – nghiêng, U – gạch chân: nhớ nhé!',
    html: S4('Chọn chữ rồi dùng các nút trong thẻ <b>Home</b>.',
      'Đổi <b>phông chữ</b>, <b>cỡ chữ</b>, <b>màu chữ</b>.',
      'Kiểu chữ: <code>B</code> đậm (Ctrl+B), <code>I</code> nghiêng (Ctrl+I), <code>U</code> gạch chân (Ctrl+U).',
      'Phải <span class="k">chọn chữ</span> trước khi định dạng.'),
    quiz: [
      { q: 'Nút B dùng để định dạng chữ:', o: ['Nghiêng', 'Gạch chân', 'Màu đỏ', 'Đậm'], a: 3, why: 'B (Bold) là chữ đậm, phím tắt Ctrl+B.' },
      { q: 'Muốn chữ nghiêng, em nhấn tổ hợp phím:', o: ['Ctrl + I', 'Ctrl + B', 'Ctrl + U', 'Ctrl + P'], a: 0, why: 'Ctrl+I (Italic) là chữ nghiêng.' } ] },
  { id: 't3', name: 'Định dạng đoạn văn', tip: 'Căn lề giúp đoạn văn thẳng hàng, gọn gàng!',
    html: S4('Thử căn lề cho các đoạn văn trong bài.',
      '4 kiểu <b>căn lề</b>: trái, giữa, phải, đều hai bên.',
      'Có thể chỉnh <b>thụt lề</b> và <b>khoảng cách</b> giữa các dòng, các đoạn.',
      'Tiêu đề thường <span class="k">căn giữa</span>; nội dung thường căn đều.'),
    quiz: [
      { q: 'Có mấy kiểu căn lề đoạn văn?', o: ['2 kiểu', '3 kiểu', '4 kiểu', '5 kiểu'], a: 2, why: 'Căn trái, căn giữa, căn phải và căn đều hai bên.' },
      { q: 'Đâu là định dạng đoạn văn?', o: ['Căn lề, khoảng cách dòng', 'Màu chữ', 'Cỡ chữ', 'Phông chữ'], a: 0, why: 'Căn lề, thụt lề, khoảng cách dòng là định dạng đoạn văn.' } ] },
  { id: 't4', name: 'Định dạng trang và in', tip: 'Chọn hướng trang, lề trang trước khi in nhé!',
    html: S4('Chuẩn bị in thông báo trên khổ giấy <b>A4</b>.',
      'Thẻ <b>Layout</b>: hướng trang (<b>đứng</b>/<b>ngang</b>), lề trang, khổ giấy.',
      'In văn bản: <b>File → Print</b> hoặc <code>Ctrl+P</code>. Nên xem trước khi in không?',
      '<span class="k">Định dạng trang</span> rồi mới in.'),
    quiz: [
      { q: 'Hướng trang gồm:', o: ['Trên và dưới', 'Đứng và ngang', 'Trái và phải', 'Trước và sau'], a: 1, why: 'Trang có hướng đứng hoặc hướng ngang.' },
      { q: 'Tổ hợp phím để in văn bản là:', o: ['Ctrl + S', 'Ctrl + C', 'Ctrl + V', 'Ctrl + P'], a: 3, why: 'Ctrl+P (Print) mở hộp thoại in.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn nhanh: kí tự – đoạn văn – trang!',
    html: S4('Tóm tắt bài bằng 3 ý chính.',
      '<b>Kí tự</b>: phông, cỡ, kiểu, màu chữ.',
      '<b>Đoạn văn</b>: căn lề, thụt lề, khoảng cách. <b>Trang</b>: hướng, lề, khổ giấy.',
      'Định dạng giúp văn bản <span class="k">đẹp và dễ đọc</span>.'),
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
