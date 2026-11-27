/* ===== BÀI 9: THỰC HÀNH VỚI TỆP VÀ THƯ MỤC TRONG MÁY TÍNH ===== */
const META = { key: 'bai9', num: 9, theme: 'tuyet', ic: '📁', cd: 3, en: 'Thực hành với tệp và thư mục',
  title: 'Bài 9. Thực hành với tệp và thư mục trong máy tính', big: 'Thực hành<br>với tệp<br>và thư mục',
  st2: 'Chủ đề 3 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Tuyết rơi trắng xoá! Cùng xếp tệp, thư mục gọn gàng như người tuyết nhé!',
  cert: 'Tin học 3 – Bài 9. Thực hành với tệp và thư mục', file: 'Tin3_Bai9', pass: 8 };

const COVER = () => svgC(`${winbox(40, 30, 520, 280, 'This PC', `${folder(150, 170, 1, '#FFC300', 'Lớp 3A')}${folder(300, 170, 1, '#FF7F11', 'Tranh')}${fileI(450, 170, .9, '#1982C4', 'bài 1')}`, '#1982C4')}${star(570, 330, 14, '#FFD60A')}`);
const ILL_T = {
  t1: () => svg(`${winbox(40, 30, 520, 270, 'File Explorer', `${folder(140, 150, .9, '#FFC300', 'Ổ D')}${cursor(160, 160, .8)}${folder(300, 150, .9)}${folder(450, 150, .9, '#FF7F11')}`, '#1982C4')}
    ${pillS(60, 330, 480, 54, '#1982C4', 'Nháy đúp để mở thư mục', 24)}`),
  t2: () => svg(`${winbox(30, 30, 300, 270, 'Lớp 3A', `${pillS(60, 100, 240, 44, '#fff', 'New ▶', 22, 0, O)}${pillS(60, 160, 240, 44, '#FFC300', 'Folder', 22, 0, O)}${cursor(240, 190, .7)}`, '#2DA44E')}
    ${arr(340, 170, 400, 170, O, 7)}${folder(490, 160, 1, '#FFC300', 'Mới')}${pillS(40, 330, 520, 54, '#2DA44E', 'Nháy phải → New → Folder', 24)}`),
  t3: () => svg(`${folder(150, 140, 1.2, '#FFC300', 'New folder')}${arr(260, 140, 330, 140, O, 7)}${folder(450, 140, 1.2, '#FFC300', 'Tranh vẽ')}
    ${pillS(60, 290, 480, 50, '#FF7F11', 'Rename: đổi tên', 26)}${star(560, 50, 14, '#FFD60A')}`),
  t4: () => svg(`${folder(140, 150, 1.1, '#ADB5BD', 'Cũ')}${arr(250, 150, 330, 150, O, 7)}${G(450, 150, 1, `<rect x="-60" y="-60" width="120" height="140" rx="12" fill="#8ECAE6" ${ST}/><rect x="-76" y="-84" width="152" height="24" rx="10" fill="#1982C4" ${ST}/><path d="M-30 -30 V60 M0 -30 V60 M30 -30 V60" stroke="${O}" stroke-width="5"/>`)}
    ${pillS(30, 320, 540, 54, '#E5383B', 'Delete → vào Thùng rác', 26)}`),
  t5: () => svg(`${vflow([['#1982C4', 'Mở thư mục'], ['#2DA44E', 'Tạo, đổi tên'], ['#E5383B', 'Xoá khi không cần']], 150, 40, 300, 110, 26)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Mở thư mục, xem tệp', tip: 'Nháy đúp vào thư mục là mở ra ngay!',
    html: S4Q(['Mở thư mục <b>Lớp 3A</b> và xem bên trong có gì.', 'Gợi ý: mở This PC hoặc File Explorer.'],
      ['Mở thư mục bằng cách nào?', '<b>Nháy đúp</b> chuột vào biểu tượng thư mục.'],
      ['Làm sao quay lại thư mục trước?', 'Nháy nút <b>mũi tên quay lại</b> ← ở góc trên.'],
      ['Mở <span class="k">File Explorer</span> để xem.', '<b>Nháy đúp</b> để mở thư mục.', 'Nút <b>←</b> để quay lại.']),
    quiz: [
      { q: 'Để mở một thư mục, em:', o: ['Nháy đúp vào thư mục', 'Nhấn phím cách', 'Tắt máy', 'Kéo thư mục ra ngoài'], a: 0, why: 'Nháy đúp chuột vào thư mục để mở.' },
      { q: 'Phần mềm giúp xem các tệp, thư mục trong máy tính là:', o: ['Paint', 'File Explorer', 'Trình duyệt', 'Phần mềm luyện gõ'], a: 1, why: 'File Explorer dùng để xem, quản lí tệp và thư mục.' } ] },
  { id: 't2', name: 'Tạo thư mục mới', tip: 'Nháy phải chuột – chọn New – chọn Folder!',
    html: S4Q(['Tạo một thư mục mới để cất <b>bài vẽ</b> của em.', ''],
      ['Các bước tạo thư mục mới là gì?', '<b>Nháy phải</b> vào chỗ trống → <b>New</b> → <b>Folder</b>.'],
      ['Thư mục mới vừa tạo có tên gì?', 'Tên tạm là <b>New folder</b>, em gõ tên mới rồi nhấn <b>Enter</b>.'],
      ['Nháy <b>phải</b> vào vùng trống.', 'Chọn <span class="k">New → Folder</span>.', 'Gõ tên rồi nhấn <b>Enter</b>.']),
    quiz: [
      { q: 'Để tạo thư mục mới, sau khi nháy phải chuột em chọn:', o: ['Delete', 'Rename', 'Copy', 'New → Folder'], a: 3, why: 'Chọn New → Folder để tạo thư mục mới.' },
      { q: 'Gõ xong tên thư mục, em nhấn phím:', o: ['Phím cách', 'Phím A', 'Enter', 'Phím F'], a: 2, why: 'Nhấn Enter để xác nhận tên thư mục.' } ] },
  { id: 't3', name: 'Đổi tên thư mục', tip: 'Tên rõ ràng giúp em tìm nhanh hơn!',
    html: S4Q(['Đổi tên thư mục <b>New folder</b> thành <b>Tranh vẽ</b>.', ''],
      ['Đổi tên thư mục thế nào?', 'Nháy phải vào thư mục → chọn <b>Rename</b> → gõ tên mới → <b>Enter</b>.'],
      ['Vì sao nên đặt tên rõ nghĩa?', 'Để biết bên trong có gì, <b>dễ tìm</b>.'],
      ['Nháy phải → <span class="k">Rename</span>.', 'Gõ tên mới, nhấn <b>Enter</b>.', 'Tên ngắn gọn, <b>rõ nghĩa</b>.']),
    quiz: [
      { q: 'Lệnh dùng để đổi tên thư mục là:', o: ['Rename', 'Delete', 'New', 'Open'], a: 0, why: 'Rename nghĩa là đổi tên.' },
      { q: 'Tên thư mục nào rõ nghĩa nhất để chứa bài vẽ?', o: ['aaa', 'Tranh vẽ', 'New folder', '1234'], a: 1, why: 'Tên “Tranh vẽ” cho biết bên trong có gì.' } ] },
  { id: 't4', name: 'Xoá thư mục, tệp', tip: 'Xoá nhầm? Vào Thùng rác lấy lại nhé!',
    html: S4Q(['Xoá thư mục <b>không còn dùng</b> đến.', 'Gợi ý: hỏi thầy cô trước khi xoá.'],
      ['Xoá thư mục bằng cách nào?', 'Nháy chọn thư mục rồi nhấn phím <b>Delete</b> (hoặc nháy phải → Delete).'],
      ['Thư mục bị xoá đi đâu?', 'Vào <b>Thùng rác</b> (Recycle Bin), có thể lấy lại.'],
      ['Chọn rồi nhấn <span class="k">Delete</span>.', 'Tệp bị xoá vào <b>Thùng rác</b>.', '<b>Không xoá</b> tệp của người khác.']),
    quiz: [
      { q: 'Để xoá thư mục đã chọn, em nhấn phím:', o: ['Enter', 'Phím cách', 'Delete', 'Phím F'], a: 2, why: 'Phím Delete dùng để xoá đối tượng đã chọn.' },
      { q: 'Thư mục bị xoá sẽ được chuyển vào:', o: ['Màn hình', 'Bàn phím', 'Ổ điện', 'Thùng rác'], a: 3, why: 'Đối tượng bị xoá được đưa vào Thùng rác.' } ] },
  { id: 't5', name: 'Em quản lí thư mục', tip: 'Ôn lại: mở – tạo – đổi tên – xoá!',
    html: S4Q(['Tạo thư mục <b>Tên em</b>, trong đó tạo thư mục <b>Toán</b> và <b>Tin học</b>.', ''],
      ['Em đã biết những thao tác nào?', '<b>Mở</b>, <b>tạo mới</b>, <b>đổi tên</b>, <b>xoá</b> thư mục.'],
      ['Cần chú ý gì khi xoá?', 'Chỉ xoá thứ <b>của mình</b>, khi chắc chắn không cần.'],
      ['Mở, tạo, <b>đổi tên</b>, xoá.', 'Sắp xếp thư mục <span class="k">gọn gàng</span>.', 'Tôn trọng tệp <b>của bạn</b>.']),
    quiz: [
      { q: 'Thao tác nào giúp cất bài theo từng môn học?', o: ['Tạo thư mục theo môn', 'Xoá hết tệp', 'Tắt máy', 'Đổi màu màn hình'], a: 0, why: 'Tạo thư mục cho từng môn giúp bài vở gọn gàng.' },
      { q: 'Trước khi xoá một tệp, em nên:', o: ['Xoá luôn không cần nghĩ', 'Kiểm tra, chắc chắn không cần', 'Xoá cả tệp của bạn', 'Tắt điện'], a: 1, why: 'Cần kiểm tra kĩ để không xoá nhầm.' } ] },
];

const KEY = [
  '<b>Nháy đúp</b><br>để mở thư mục.',
  'Nháy phải →<br><b>New → Folder</b>.',
  'Nháy phải →<br><b>Rename</b>.',
  '<b>Delete</b> →<br>Thùng rác.',
  'Thư mục<br><b>gọn gàng</b>.',
];
