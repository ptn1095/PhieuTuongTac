/* ===== BÀI 11: CHỈNH SỬA VĂN BẢN ===== */
const META = { key: 'bai11', num: 11, theme: 'chibi', ic: '✏️', cd: 5, en: 'Chỉnh sửa văn bản',
  title: 'Bài 11. Chỉnh sửa văn bản', big: 'Chỉnh sửa<br>văn bản',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Các bạn thú cưng viết sai chính tả rồi! Em giúp các bạn sửa nhé!',
  cert: 'Tin học 4 – Bài 11. Chỉnh sửa văn bản', file: 'Tin4_Bai11', pass: 8 };

const COVER = () => svgC(`${doc(130, 170, 1.8)}${pencil(260, 230, 1, -40)}${pillS(330, 80, 230, 50, '#E5383B', 'Mèo con ❌', 22)}${pillS(330, 160, 230, 50, '#2DA44E', 'Mèo con ✔', 22)}${star(560, 320, 14, '#FFD60A')}`);
const ILL_T = {
  t1: () => svg(`<rect x="60" y="70" width="480" height="70" rx="10" fill="#fff" ${ST}/><rect x="170" y="82" width="200" height="46" fill="#8ECAE6"/>${txt(300, 118, 'Em là học sinh lớp 4', 30)}${cursor(370, 120, .8)}
    ${pillS(40, 190, 250, 50, '#1982C4', 'Kéo thả chuột', 22)}${pillS(310, 190, 250, 50, '#FF7F11', 'Nháy đúp: 1 từ', 22)}${pillS(60, 320, 480, 54, '#8338EC', 'Chọn văn bản', 26)}`),
  t2: () => svg(`${key3d(60, 80, 220, 100, '#E5383B', '#981A12', '⟵ Backspace', 28)}${key3d(330, 80, 200, 100, '#FF7F11', '#B4520A', 'Delete', 34)}
    ${pillS(40, 240, 250, 50, '#E5383B', 'Xoá bên trái', 22)}${pillS(310, 240, 250, 50, '#FF7F11', 'Xoá bên phải', 22)}`),
  t3: () => svg(`${pillS(50, 60, 230, 56, '#2DA44E', 'Ctrl + C', 28)}${pillS(320, 60, 230, 56, '#FF7F11', 'Ctrl + X', 28)}${pillS(185, 160, 230, 56, '#1982C4', 'Ctrl + V', 28)}
    ${arr(165, 125, 240, 160, O, 6)}${arr(435, 125, 360, 160, O, 6)}${pillS(40, 320, 520, 54, '#8338EC', 'Sao chép, di chuyển chữ', 26)}`),
  t4: () => svg(`${key3d(100, 70, 200, 110, '#8338EC', '#5A189A', 'Ctrl + Z', 40)}${arc(450, 140, 70, 320, 180, 0, '#FF006E')}
    ${pillS(40, 320, 520, 54, '#FF006E', 'Ctrl + Z: lấy lại thao tác vừa làm', 22)}`),
  t5: () => svg(`${vflow([['#1982C4', 'Chọn chữ'], ['#E5383B', 'Xoá, sửa'], ['#2DA44E', 'Sao chép, di chuyển']], 150, 40, 300, 110, 26)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Chọn văn bản', tip: 'Nháy đúp chọn 1 từ, kéo thả chọn cả đoạn!',
    html: S4Q(['Chọn cụm từ <b>học sinh lớp 4</b> trong câu.', ''],
      ['Chọn một đoạn chữ bằng cách nào?', '<b>Kéo thả chuột</b> từ đầu đến cuối đoạn cần chọn.'],
      ['Chọn nhanh một từ thì sao?', '<b>Nháy đúp</b> chuột vào từ đó.'],
      ['<b>Kéo thả</b>: chọn đoạn chữ.', '<span class="k">Nháy đúp</span>: chọn một từ.', 'Chữ được chọn có <b>nền xanh</b>.']),
    quiz: [
      { q: 'Để chọn nhanh một từ, em:', o: ['Nháy đúp vào từ đó', 'Nhấn Enter', 'Nhấn F5', 'Nháy nút đóng'], a: 0, why: 'Nháy đúp vào một từ sẽ chọn từ đó.' },
      { q: 'Để chọn một đoạn chữ dài, em:', o: ['Nhấn phím cách', 'Nháy chuột phải', 'Kéo thả chuột qua đoạn chữ', 'Lăn chuột'], a: 2, why: 'Kéo thả chuột để chọn đoạn chữ.' } ] },
  { id: 't2', name: 'Xoá kí tự', tip: 'Backspace xoá bên trái, Delete xoá bên phải con trỏ!',
    html: S4Q(['Sửa chữ “<b>Mèoo</b>” thành “<b>Mèo</b>”.', ''],
      ['Phím Backspace xoá chữ ở đâu?', 'Xoá kí tự bên <b>trái</b> con trỏ soạn thảo.'],
      ['Phím Delete xoá chữ ở đâu?', 'Xoá kí tự bên <b>phải</b> con trỏ soạn thảo.'],
      ['<span class="k">Backspace</span>: xoá bên trái.', '<b>Delete</b>: xoá bên phải.', 'Chọn đoạn rồi nhấn để <b>xoá cả đoạn</b>.']),
    quiz: [
      { q: 'Phím Backspace xoá kí tự ở:', o: ['Bên phải con trỏ', 'Đầu trang', 'Cuối trang', 'Bên trái con trỏ'], a: 3, why: 'Backspace xoá kí tự bên trái con trỏ.' },
      { q: 'Phím Delete xoá kí tự ở:', o: ['Bên trái con trỏ', 'Bên phải con trỏ', 'Dòng trên', 'Tiêu đề'], a: 1, why: 'Delete xoá kí tự bên phải con trỏ.' } ] },
  { id: 't3', name: 'Sao chép và di chuyển', tip: 'Copy giữ bản cũ, Cut chuyển đi – nhớ nhé!',
    html: S4Q(['Sao chép câu “<b>Chúc mừng năm mới</b>” xuống cuối thiệp.', ''],
      ['Sao chép văn bản thế nào?', 'Chọn chữ → <b>Ctrl + C</b> → đặt con trỏ chỗ mới → <b>Ctrl + V</b>.'],
      ['Di chuyển văn bản thế nào?', 'Chọn chữ → <b>Ctrl + X</b> → đặt con trỏ chỗ mới → <b>Ctrl + V</b>.'],
      ['<b>Ctrl + C</b>: sao chép.', '<span class="k">Ctrl + X</span>: cắt (di chuyển).', '<b>Ctrl + V</b>: dán.']),
    quiz: [
      { q: 'Muốn chuyển một câu sang chỗ khác, em dùng:', o: ['Ctrl + C, Ctrl + V', 'Ctrl + S', 'Ctrl + X, Ctrl + V', 'Ctrl + Z'], a: 2, why: 'Cắt (Ctrl + X) rồi dán (Ctrl + V) để di chuyển.' },
      { q: 'Sau khi sao chép và dán, câu ở chỗ cũ:', o: ['Vẫn còn', 'Bị xoá', 'Đổi màu', 'Bị in đậm'], a: 0, why: 'Sao chép giữ nguyên chữ ở chỗ cũ.' } ] },
  { id: 't4', name: 'Lấy lại thao tác', tip: 'Lỡ tay xoá nhầm? Ctrl + Z cứu ngay!',
    html: S4Q(['Em lỡ <b>xoá nhầm</b> cả đoạn văn. Làm sao lấy lại?', ''],
      ['Dùng phím tắt nào để lấy lại?', 'Nhấn <b>Ctrl + Z</b> (Undo) để huỷ thao tác vừa làm.'],
      ['Nhấn Ctrl + Z nhiều lần thì sao?', 'Lần lượt <b>huỷ các thao tác</b> trước đó.'],
      ['<span class="k">Ctrl + Z</span>: huỷ thao tác.', 'Nhấn nhiều lần: <b>lùi nhiều bước</b>.', 'Sửa sai <b>nhanh chóng</b>.']),
    quiz: [
      { q: 'Phím tắt để lấy lại thao tác vừa làm là:', o: ['Ctrl + C', 'Ctrl + S', 'Ctrl + V', 'Ctrl + Z'], a: 3, why: 'Ctrl + Z (Undo) huỷ thao tác vừa làm.' },
      { q: 'Xoá nhầm một đoạn chữ, em nên:', o: ['Nhấn Ctrl + Z', 'Tắt máy', 'Gõ lại từ đầu cả bài', 'Nhấn F5'], a: 0, why: 'Ctrl + Z lấy lại đoạn chữ vừa xoá.' } ] },
  { id: 't5', name: 'Biên tập viên nhí', tip: 'Ôn lại: chọn – xoá – sao chép – di chuyển – Ctrl + Z!',
    html: S4Q(['Sửa lỗi trong đoạn văn: <b>“Mèoo con rất ngoan ngoan.”</b>', ''],
      ['Em sửa “Mèoo” thế nào?', 'Đặt con trỏ, dùng <b>Backspace</b> hoặc <b>Delete</b> xoá chữ o thừa.'],
      ['Từ “ngoan” bị lặp, em làm gì?', '<b>Nháy đúp</b> chọn một từ “ngoan” rồi nhấn <b>Delete</b>.'],
      ['<b>Chọn</b> đúng phần cần sửa.', 'Xoá bằng <span class="k">Backspace / Delete</span>.', 'Sai thì <b>Ctrl + Z</b>.']),
    quiz: [
      { q: 'Phím tắt để dán văn bản là:', o: ['Ctrl + C', 'Ctrl + V', 'Ctrl + X', 'Ctrl + Z'], a: 1, why: 'Ctrl + V dùng để dán.' },
      { q: 'Muốn xoá một từ bị lặp, cách nhanh là:', o: ['Gõ lại cả bài', 'Tắt Word', 'Nháy đúp chọn từ rồi nhấn Delete', 'Nhấn Enter'], a: 2, why: 'Chọn từ rồi xoá là nhanh nhất.' } ] },
];

const KEY = [
  'Kéo thả,<br><b>nháy đúp</b>.',
  'Backspace trái,<br><b>Delete</b> phải.',
  'C chép, X cắt,<br><b>V dán</b>.',
  '<b>Ctrl + Z</b><br>lấy lại.',
  'Sửa văn bản<br><b>khéo léo</b>.',
];
