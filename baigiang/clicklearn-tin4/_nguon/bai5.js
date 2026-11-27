/* ===== BÀI 5: THAO TÁC VỚI TỆP VÀ THƯ MỤC ===== */
const META = { key: 'bai5', num: 5, theme: 'go', ic: '📁', cd: 3, en: 'Thao tác với tệp và thư mục',
  title: 'Bài 5. Thao tác với tệp và thư mục', big: 'Thao tác<br>với tệp<br>và thư mục',
  st2: 'Chủ đề 3 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Trong ngôi nhà gỗ tre, ta sắp xếp tệp và thư mục thật ngăn nắp nhé!',
  cert: 'Tin học 4 – Bài 5. Thao tác với tệp và thư mục', file: 'Tin4_Bai5', pass: 8 };

const COVER = () => svgC(`${folder(130, 150, 1.3, '#FFC300', 'Học tập')}${arr(250, 150, 330, 150, O, 7)}${folder(450, 150, 1.3, '#FF7F11', 'Bản sao')}${pillS(150, 280, 300, 50, '#2DA44E', 'Ctrl + C, Ctrl + V', 24)}${star(560, 40, 14, '#FFD60A')}`);
const ILL_T = {
  t1: () => svg(`${winbox(40, 30, 520, 270, 'File Explorer', `${folder(140, 150, .9, '#FFC300', 'Toán')}${folder(300, 150, .9, '#FF7F11', 'Vẽ')}${fileI(450, 150, .8, '#1982C4', 'bai1')}`, '#1982C4')}
    ${pillS(60, 330, 480, 54, '#1982C4', 'Tệp, thư mục trong máy', 26)}`),
  t2: () => svg(`${fileI(110, 150, 1.1, '#FF006E', 'hoa')}${arr(180, 150, 250, 150, O, 7)}${fileI(320, 150, 1.1, '#FF006E', 'hoa')}${fileI(470, 150, 1.1, '#FF006E', 'hoa')}
    ${pillS(30, 260, 260, 50, '#2DA44E', 'Ctrl + C: chép', 24)}${pillS(310, 260, 260, 50, '#1982C4', 'Ctrl + V: dán', 24)}${pillS(110, 340, 380, 46, '#8338EC', 'Sao chép: thêm bản mới', 22)}`),
  t3: () => svg(`${folder(130, 130, 1.1, '#FFC300', 'Cũ')}${fileI(130, 250, .7, '#FF7F11', 'cá')}${arr(210, 250, 380, 250, '#FF7F11', 7)}${folder(470, 130, 1.1, '#FFC300', 'Mới')}${fileI(470, 250, .7, '#FF7F11', 'cá')}
    ${pillS(30, 335, 540, 50, '#FF7F11', 'Ctrl + X rồi Ctrl + V: di chuyển', 22)}`),
  t4: () => svg(`${fileI(120, 140, 1.1, '#1982C4', 'abc')}${arr(190, 140, 260, 140, O, 7)}${fileI(330, 140, 1.1, '#1982C4', 'bai_ve')}${G(480, 150, .9, `<rect x="-50" y="-60" width="100" height="120" rx="12" fill="#8ECAE6" ${ST}/><rect x="-62" y="-80" width="124" height="22" rx="10" fill="#1982C4" ${ST}/>`)}
    ${pillS(20, 290, 270, 50, '#8338EC', 'Rename: đổi tên', 22)}${pillS(310, 290, 270, 50, '#E5383B', 'Delete: xoá', 22)}`),
  t5: () => svg(`${vflow([['#2DA44E', 'Sao chép'], ['#FF7F11', 'Di chuyển'], ['#8338EC', 'Đổi tên, xoá']], 150, 40, 300, 110, 26)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Ôn tệp và thư mục', tip: 'Thư mục là ngăn kéo, tệp là đồ vật trong ngăn kéo!',
    html: S4Q(['Mở <b>File Explorer</b>, tìm thư mục chứa bài học của em.', ''],
      ['Tệp và thư mục khác nhau thế nào?', '<b>Tệp</b> chứa thông tin; <b>thư mục</b> chứa tệp và thư mục con.'],
      ['Mở File Explorer bằng cách nào?', 'Nháy biểu tượng <b>thư mục vàng</b> trên thanh Taskbar (hoặc Windows + E).'],
      ['<b>Tệp</b> lưu thông tin.', '<b>Thư mục</b> chứa tệp, thư mục con.', 'Xem bằng <span class="k">File Explorer</span>.']),
    quiz: [
      { q: 'Phần mềm dùng để xem và quản lí tệp, thư mục là:', o: ['File Explorer', 'Paint', 'Google', 'PowerPoint'], a: 0, why: 'File Explorer giúp quản lí tệp và thư mục.' },
      { q: 'Thư mục có thể chứa:', o: ['Chỉ một tệp', 'Tệp và thư mục con', 'Bàn phím', 'Không chứa gì'], a: 1, why: 'Thư mục chứa được tệp và thư mục con.' } ] },
  { id: 't2', name: 'Sao chép tệp', tip: 'Sao chép là có thêm một bản giống hệt!',
    html: S4Q(['Sao chép tệp <b>bài vẽ</b> vào thư mục <b>Bản sao</b>.', 'Gợi ý: Copy rồi Paste.'],
      ['Các bước sao chép tệp là gì?', 'Chọn tệp → <b>Ctrl + C</b> (Copy) → mở thư mục đích → <b>Ctrl + V</b> (Paste).'],
      ['Sau khi sao chép, tệp gốc còn không?', '<b>Còn</b>. Có thêm một bản sao ở thư mục mới.'],
      ['<span class="k">Ctrl + C</span>: sao chép.', '<b>Ctrl + V</b>: dán.', 'Tệp gốc <b>vẫn còn</b>.']),
    quiz: [
      { q: 'Tổ hợp phím để sao chép là:', o: ['Ctrl + V', 'Ctrl + X', 'Ctrl + C', 'Ctrl + Z'], a: 2, why: 'Ctrl + C dùng để sao chép (Copy).' },
      { q: 'Sau khi sao chép và dán, tệp gốc:', o: ['Bị xoá', 'Vẫn còn ở chỗ cũ', 'Đổi tên', 'Bị hỏng'], a: 1, why: 'Sao chép tạo bản mới, tệp gốc vẫn còn.' } ] },
  { id: 't3', name: 'Di chuyển tệp', tip: 'Di chuyển là chuyển nhà cho tệp – chỗ cũ không còn!',
    html: S4Q(['Chuyển tệp <b>cá</b> từ thư mục Cũ sang thư mục Mới.', ''],
      ['Các bước di chuyển tệp là gì?', 'Chọn tệp → <b>Ctrl + X</b> (Cut) → mở thư mục đích → <b>Ctrl + V</b>.'],
      ['Di chuyển khác sao chép ở đâu?', 'Di chuyển thì tệp <b>không còn ở chỗ cũ</b>.'],
      ['<span class="k">Ctrl + X</span>: cắt.', '<b>Ctrl + V</b>: dán vào chỗ mới.', 'Chỗ cũ <b>không còn</b> tệp.']),
    quiz: [
      { q: 'Để di chuyển tệp, em dùng:', o: ['Ctrl + C rồi Ctrl + V', 'Ctrl + X rồi Ctrl + V', 'Delete', 'Ctrl + Z'], a: 1, why: 'Cắt (Ctrl + X) rồi dán (Ctrl + V) để di chuyển.' },
      { q: 'Sau khi di chuyển, ở thư mục cũ:', o: ['Có hai tệp', 'Có tệp bị hỏng', 'Có thư mục mới', 'Không còn tệp đó'], a: 3, why: 'Tệp đã chuyển sang chỗ mới.' } ] },
  { id: 't4', name: 'Đổi tên và xoá', tip: 'Tên rõ nghĩa dễ tìm; xoá nhầm thì vào Thùng rác!',
    html: S4Q(['Đổi tên tệp <b>abc</b> thành <b>bai_ve</b>, rồi xoá tệp không cần.', ''],
      ['Đổi tên tệp thế nào?', 'Nháy phải → <b>Rename</b> (hoặc phím <b>F2</b>) → gõ tên → Enter.'],
      ['Xoá nhầm tệp thì làm sao?', 'Mở <b>Thùng rác</b> (Recycle Bin) → chọn tệp → <b>Restore</b>.'],
      ['<span class="k">F2</span> hoặc Rename: đổi tên.', '<b>Delete</b>: xoá vào Thùng rác.', 'Restore: <b>khôi phục</b>.']),
    quiz: [
      { q: 'Phím tắt để đổi tên tệp đang chọn là:', o: ['F2', 'F5', 'Enter', 'Esc'], a: 0, why: 'F2 dùng để đổi tên tệp, thư mục.' },
      { q: 'Lấy lại tệp đã xoá nhầm từ Thùng rác bằng lệnh:', o: ['Delete', 'Copy', 'Restore', 'Rename'], a: 2, why: 'Restore khôi phục tệp về chỗ cũ.' } ] },
  { id: 't5', name: 'Quản lí tệp giỏi', tip: 'Ôn lại: Ctrl + C, Ctrl + X, Ctrl + V!',
    html: S4Q(['Sắp xếp lại các tệp bài làm vào <b>đúng thư mục môn học</b>.', ''],
      ['Em dùng thao tác nào để sắp xếp?', '<b>Di chuyển</b> tệp vào thư mục; <b>đổi tên</b> cho rõ nghĩa.'],
      ['Muốn giữ bản dự phòng, em làm gì?', '<b>Sao chép</b> tệp sang thư mục hoặc USB khác.'],
      ['Sao chép: <b>Ctrl + C, V</b>.', 'Di chuyển: <span class="k">Ctrl + X, V</span>.', 'Đổi tên, xoá <b>cẩn thận</b>.']),
    quiz: [
      { q: 'Muốn có thêm một bản dự phòng của bài làm, em nên:', o: ['Xoá tệp', 'Đổi tên tệp', 'Di chuyển tệp', 'Sao chép tệp'], a: 3, why: 'Sao chép tạo thêm bản dự phòng.' },
      { q: 'Ctrl + V có tác dụng:', o: ['Dán', 'Cắt', 'Sao chép', 'Xoá'], a: 0, why: 'Ctrl + V là dán (Paste).' } ] },
];

const KEY = [
  'Thư mục chứa<br><b>tệp</b>.',
  '<b>Ctrl + C</b><br>→ Ctrl + V.',
  '<b>Ctrl + X</b><br>→ Ctrl + V.',
  '<b>F2</b> đổi tên,<br>Delete xoá.',
  'Sắp xếp tệp<br><b>gọn gàng</b>.',
];
