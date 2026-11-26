/* ===== BÀI 13: THỰC HÀNH – TÌM KIẾM VÀ THAY THẾ ===== */
const META = { key: 'bai13', num: 13, title: 'Bài 13. Thực hành: Tìm kiếm và thay thế', big: 'Tìm kiếm<br>và thay thế',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng tìm và sửa chữ trong văn bản thật nhanh nhé!',
  cert: 'Tin học 6 – Bài 13. Tìm kiếm và thay thế', file: 'Tin6_Bai13', pass: 8 };

const fld = (x, y, w, lab, val) => `<text x="${x}" y="${y + 30}" font-size="22" fill="${O}" ${F}>${lab}</text><rect x="${x + 170}" y="${y}" width="${w}" height="44" rx="10" fill="#F1F3F5" stroke="${O}" stroke-width="4"/><text x="${x + 186}" y="${y + 31}" font-size="22" fill="#1982C4" ${F}>${val}</text>`;
const ILL_T = {
  t1: () => svg(`${paper(60, 40, 300, 340)}${[90, 130, 170, 210, 250, 290, 330].map((y, i) => `<rect x="90" y="${y}" width="${i % 3 ? 240 : 180}" height="12" rx="6" fill="#ADB5BD"/>${i % 2 ? `<rect x="${130 + i*10}" y="${y - 6}" width="70" height="24" rx="6" fill="#FFD60A" opacity=".8"/>` : ''}`).join('')}
    ${mag(440, 160, 1)}${pillS(380, 300, 200, 50, '#FF7F11', 'Tìm ở đâu?', 24)}`),
  t2: () => svg(`${winbox(40, 50, 520, 150, 'Navigation', fld(64, 120, 280, 'Tìm:', 'Hà Nội'), '#1982C4')}
    ${key3d(150, 250, 130, 80, '#FFD60A', '#E09F00', 'Ctrl', 34, O)}${key3d(320, 250, 130, 80, '#FFD60A', '#E09F00', 'F', 40, O)}${txt(300, 300, '+', 40)}`),
  t3: () => svg(`${winbox(30, 30, 540, 240, 'Replace', `${fld(54, 90, 300, 'Find what:', 'Ha Noi')}${fld(54, 150, 300, 'Replace with:', 'Hà Nội')}
    <rect x="300" y="212" width="120" height="44" rx="22" fill="#1982C4" stroke="${O}" stroke-width="4"/><text x="360" y="242" text-anchor="middle" font-size="20" fill="#fff" ${F}>Replace</text>
    <rect x="430" y="212" width="130" height="44" rx="22" fill="#2DA44E" stroke="${O}" stroke-width="4"/><text x="495" y="242" text-anchor="middle" font-size="18" fill="#fff" ${F}>Replace All</text>`, '#FF7F11')}
    ${key3d(150, 300, 130, 76, '#FFD60A', '#E09F00', 'Ctrl', 32, O)}${txt(300, 350, '+', 40)}${key3d(320, 300, 130, 76, '#FFD60A', '#E09F00', 'H', 38, O)}`),
  t4: () => svg(`${pillS(40, 70, 220, 60, '#E5383B', 'Ha Noi', 32)}${arr(270, 100, 330, 100, '#FF7F11')}${pillS(340, 70, 220, 60, '#2DA44E', 'Hà Nội', 32)}
    ${tlist([[1, '#1982C4', 'Sửa nhiều chỗ sai cùng lúc'], [1, '#8338EC', 'Kiểm tra trước Replace All']], 210, 96, 22)}`),
  t5: () => svg(`${vflow([['#1982C4', 'Tìm: Ctrl + F'], ['#FF7F11', 'Thay thế: Ctrl + H'], ['#2DA44E', 'Replace / Replace All']], 130, 50, 340, 120, 26)}${mag(520, 360, .45)}`),
};

const TOPICS = [
  { id: 't1', name: 'Tìm một từ trong bài dài', tip: 'Đọc hết bài để tìm một từ thì lâu lắm – có cách nhanh hơn!',
    html: S4('Tìm tất cả chỗ có từ <b>"Hà Nội"</b> trong bài văn dài 5 trang.',
      'Đọc từng dòng rất <b>mất thời gian</b> và dễ bỏ sót.',
      'Phần mềm soạn thảo có công cụ nào giúp em?',
      'Dùng công cụ <span class="k">tìm kiếm</span> và <span class="k">thay thế</span>.'),
    quiz: [
      { q: 'Tìm một từ trong văn bản dài bằng cách đọc từng dòng sẽ:', o: ['Rất nhanh', 'Không bao giờ sót', 'Mất thời gian, dễ sót', 'Tự động sửa lỗi'], a: 2, why: 'Đọc thủ công lâu và dễ bỏ sót.' },
      { q: 'Phần mềm soạn thảo hỗ trợ tìm từ nhanh bằng công cụ:', o: ['Tìm kiếm (Find)', 'Vẽ hình', 'Chèn bảng', 'In ấn'], a: 0, why: 'Công cụ Find giúp tìm từ nhanh trong văn bản.' } ] },
  { id: 't2', name: 'Tìm kiếm', tip: 'Ctrl + F – từ cần tìm được tô màu ngay!',
    html: S4('Thực hành tìm từ "Hà Nội".',
      'Nhấn <code>Ctrl+F</code> (hoặc Home → Find), gõ từ vào ô của bảng <b>Navigation</b>.',
      'Các chỗ tìm thấy được <b>tô màu</b>. Có bao nhiêu kết quả?',
      'Tìm kiếm: <span class="k">Ctrl + F</span>.'),
    quiz: [
      { q: 'Tổ hợp phím mở công cụ tìm kiếm là:', o: ['Ctrl + H', 'Ctrl + P', 'Ctrl + B', 'Ctrl + F'], a: 3, why: 'Ctrl+F (Find) để tìm kiếm.' },
      { q: 'Kết quả tìm kiếm trong văn bản được:', o: ['Xoá đi', 'Tô màu nổi bật', 'In ra giấy', 'Đổi phông chữ'], a: 1, why: 'Các từ tìm thấy được tô màu để dễ nhận ra.' } ] },
  { id: 't3', name: 'Thay thế', tip: 'Ctrl + H: gõ từ cũ, gõ từ mới, bấm Replace!',
    html: S4('Sửa chữ <b>"Ha Noi"</b> gõ thiếu dấu thành <b>"Hà Nội"</b>.',
      'Nhấn <code>Ctrl+H</code>: gõ từ cũ vào <b>Find what</b>, từ mới vào <b>Replace with</b>.',
      '<b>Replace</b>: thay từng chỗ. <b>Replace All</b>: thay tất cả. Khác nhau thế nào?',
      'Thay thế: <span class="k">Ctrl + H</span>.'),
    quiz: [
      { q: 'Ô "Replace with" dùng để gõ:', o: ['Từ cần tìm', 'Tên tệp', 'Từ mới thay vào', 'Mật khẩu'], a: 2, why: 'Replace with là ô ghi từ mới thay thế.' },
      { q: 'Nút thay thế tất cả các từ tìm được là:', o: ['Replace All', 'Replace', 'Find Next', 'Cancel'], a: 0, why: 'Replace All thay mọi chỗ tìm được cùng lúc.' } ] },
  { id: 't4', name: 'Vận dụng sửa lỗi', tip: 'Kiểm tra kĩ trước khi bấm Replace All nhé!',
    html: S4('Sửa lỗi gõ sai lặp lại nhiều lần trong bài.',
      'Dùng thay thế để sửa <b>nhiều chỗ</b> cùng lúc, nhanh và đều.',
      'Thay "an" bằng "ăn" bằng Replace All có thể gây lỗi gì? (sửa nhầm "bàn", "lan"…)',
      '<span class="k">Kiểm tra</span> trước khi Replace All.'),
    quiz: [
      { q: 'Thay thế giúp sửa lỗi:', o: ['Chậm hơn sửa tay', 'Chỉ một chỗ', 'Không sửa được', 'Nhiều chỗ cùng lúc'], a: 3, why: 'Công cụ thay thế sửa đồng loạt nhiều chỗ.' },
      { q: 'Trước khi bấm Replace All, em nên:', o: ['Tắt máy', 'Kiểm tra từ cần tìm và từ thay', 'Xoá văn bản', 'In văn bản'], a: 1, why: 'Kiểm tra để tránh thay nhầm những chỗ không mong muốn.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn nhanh: Ctrl+F tìm, Ctrl+H thay!',
    html: S4('Tóm tắt bài bằng 3 ý chính.',
      'Tìm kiếm: <code>Ctrl+F</code>, kết quả được tô màu.',
      'Thay thế: <code>Ctrl+H</code>; Replace từng chỗ, Replace All tất cả.',
      'Giúp sửa văn bản <span class="k">nhanh, chính xác</span>.'),
    quiz: [
      { q: 'Ctrl + H dùng để:', o: ['In văn bản', 'Mở công cụ thay thế', 'Chữ đậm', 'Lưu văn bản'], a: 1, why: 'Ctrl+H mở hộp thoại Replace (thay thế).' },
      { q: 'Ô "Find what" dùng để gõ:', o: ['Từ cần tìm', 'Từ mới', 'Tên người', 'Số trang'], a: 0, why: 'Find what là ô ghi từ cần tìm.' } ] },
];

const KEY = [
  'Văn bản dài:<br>dùng <b>công cụ</b>.',
  'Tìm kiếm:<br><b>Ctrl + F</b>.',
  'Thay thế:<br><b>Ctrl + H</b>.',
  'Kiểm tra trước<br><b>Replace All</b>.',
  'Sửa văn bản<br><b>nhanh, đúng</b>.',
];
