/* ===== BÀI 3: QUẢN LÍ DỮ LIỆU TRONG MÁY TÍNH ===== */
const META = { key: 'bai3', num: 3, theme: 'samac', title: 'Bài 3. Quản lí dữ liệu trong máy tính', big: 'Quản lí dữ liệu<br>trong máy tính',
  st2: 'Chủ đề 1 • 5 phần kiến thức cần nhớ • 10 câu đố • giấy chứng nhận',
  hello: 'Băng qua sa mạc, sắp xếp kho dữ liệu cho gọn gàng nào!',
  cert: 'Tin học 7 – Bài 3. Quản lí dữ liệu trong máy tính', file: 'Tin7_Bai3', pass: 8 };

const ILL_T = {
  t1: () => svg(`${folder(300, 60, .7, '#3D405B')}${txt(300, 80, 'D:', 26, '#fff')}
    ${dline(300, 100, 140, 160)}${dline(300, 100, 460, 160)}${folder(140, 190, .7, '#FFC300')}${txt(140, 260, 'HocTap', 24)}${folder(460, 190, .7, '#FFC300')}${txt(460, 260, 'GiaiTri', 24)}
    ${dline(140, 270, 90, 300)}${dline(140, 270, 230, 300)}${folder(90, 330, .55, '#FF7F11')}${txt(90, 395, 'Tin7', 22)}${fileI(230, 335, .5, 'docx')}${fileI(460, 335, .5, 'mp3', '#8338EC')}`),
  t2: () => svg(`${pillS(30, 50, 540, 64, '#fff', 'D:\\HocTap\\Tin7\\Bai3.docx', 30, 0, O)}${arr(120, 130, 120, 190, '#FF7F11', 6)}${arr(470, 130, 470, 190, '#1982C4', 6)}
    ${pillS(30, 200, 200, 52, '#FF7F11', 'Ổ đĩa D', 24)}${pillS(370, 200, 200, 52, '#1982C4', 'Tên tệp', 24)}${pillS(60, 300, 480, 54, '#2DA44E', 'Đường dẫn: chỉ đường tới tệp', 24)}`),
  t3: () => svg(`${[['#2DA44E', 'New folder', 'Tạo mới'], ['#1982C4', 'Rename / F2', 'Đổi tên'], ['#FF7F11', 'Ctrl + C, Ctrl + V', 'Sao chép'], ['#8338EC', 'Ctrl + X, Ctrl + V', 'Di chuyển']].map(([c, a, t], i) => pillS(30, 30 + i*92, 330, 58, c, a, 24) + pillS(390, 30 + i*92, 180, 58, '#fff', t, 24, 0, O)).join('')}`),
  t4: () => svg(`${fileI(110, 130, 1, 'xlsx', '#2DA44E')}${arr(180, 130, 260, 130, '#E5383B', 7)}${trash(330, 140, 1)}${arr(400, 130, 470, 130, '#2DA44E', 7)}${fileI(520, 130, .8, 'xlsx', '#2DA44E')}
    ${txt(330, 250, 'Thùng rác', 26)}${pillS(30, 300, 250, 54, '#E5383B', 'Delete: xoá', 26)}${pillS(310, 300, 260, 54, '#2DA44E', 'Restore: khôi phục', 24)}`),
  t5: () => svg(`${laptop(40, 60, .7)}${arr(220, 120, 300, 120, O, 6)}${usb(340, 130, .7, '#FF7F11')}${cloud(480, 120, .7, '#D0EBFF')}${txt(480, 130, 'Đám mây', 20)}
    ${shieldI(120, 300, .55)}${pillS(200, 280, 370, 54, '#2DA44E', 'Sao lưu định kì', 28)}${txt(400, 370, 'USB • ổ cứng ngoài • Drive', 22)}`),
};

const TOPICS = [
  { id: 't1', name: 'Tổ chức dạng cây thư mục', tip: 'Thư mục giống như những ngăn tủ, tệp là đồ vật xếp trong ngăn!',
    html: KT([
      'Dữ liệu trong máy tính được lưu thành <b>tệp</b>; các tệp được xếp vào <b>thư mục</b>.',
      'Thư mục có thể chứa <b>tệp</b> và <b>thư mục con</b> → tạo thành <b>cây thư mục</b>.',
      'Gốc của cây là <b>ổ đĩa</b> như <b>C:</b>, <b>D:</b>.',
      'Trong một thư mục, <b>không có hai</b> tệp (hoặc thư mục con) trùng tên.',
    ], 'Tổ chức dạng <span class="k">cây thư mục</span> giúp tìm dữ liệu nhanh, dễ quản lí.'),
    quiz: [
      { q: 'Thư mục có thể chứa những gì?', o: ['Chỉ chứa tệp', 'Tệp và thư mục con', 'Chỉ chứa ổ đĩa', 'Chỉ chứa phần mềm'], a: 1, why: 'Thư mục chứa được cả tệp và thư mục con.' },
      { q: 'Trong cùng một thư mục, hai tệp có thể:', o: ['Trùng tên hoàn toàn', 'Bắt buộc giống nhau', 'Không được trùng tên', 'Không có tên'], a: 2, why: 'Trong một thư mục, các tệp phải có tên khác nhau.' } ] },
  { id: 't2', name: 'Đường dẫn', tip: 'Đường dẫn giống như địa chỉ nhà của tệp!',
    html: KT([
      '<b>Đường dẫn</b> chỉ ra <b>vị trí</b> của tệp hoặc thư mục trên ổ đĩa.',
      'Đường dẫn gồm tên ổ đĩa, các thư mục, tên tệp, ngăn cách bởi dấu <b>\\</b>.',
      'VD: <b>D:\\HocTap\\Tin7\\Bai3.docx</b> – tệp Bai3.docx trong thư mục Tin7.',
      'Dùng phần mềm <b>File Explorer</b> (phím <b>Windows + E</b>) để xem, quản lí tệp, thư mục.',
    ], 'Đường dẫn = <span class="k">ổ đĩa \\ thư mục \\ … \\ tên tệp</span>.'),
    quiz: [
      { q: 'Với đường dẫn D:\\HocTap\\Tin7\\Bai3.docx, tệp Bai3.docx nằm trong thư mục:', o: ['HocTap', 'D:', 'Tin7', 'docx'], a: 2, why: 'Thư mục chứa trực tiếp tệp là Tin7.' },
      { q: 'Phần mềm giúp quản lí tệp, thư mục trong Windows là:', o: ['File Explorer', 'Paint', 'PowerPoint', 'Excel'], a: 0, why: 'File Explorer giúp xem và quản lí tệp, thư mục.' } ] },
  { id: 't3', name: 'Thao tác với tệp và thư mục', tip: 'Nhớ phím tắt để làm việc nhanh như chớp!',
    html: KT([
      '<b>Tạo thư mục</b>: nháy chuột phải → <b>New → Folder</b>, gõ tên rồi Enter.',
      '<b>Đổi tên</b>: chọn tệp, nhấn <b>F2</b> hoặc nháy chuột phải → <b>Rename</b>.',
      '<b>Sao chép</b>: <b>Ctrl + C</b> rồi <b>Ctrl + V</b> – bản gốc vẫn còn.',
      '<b>Di chuyển</b>: <b>Ctrl + X</b> rồi <b>Ctrl + V</b> – tệp chuyển sang chỗ mới.',
    ], 'Sao chép: <span class="k">Ctrl+C → Ctrl+V</span>; di chuyển: <span class="k">Ctrl+X → Ctrl+V</span>.'),
    quiz: [
      { q: 'Tổ hợp phím để sao chép tệp là:', o: ['Ctrl + X', 'Ctrl + C', 'Ctrl + Z', 'Ctrl + P'], a: 1, why: 'Ctrl + C để sao chép, Ctrl + V để dán.' },
      { q: 'Sau khi di chuyển (Cut – Paste), tệp ở chỗ cũ sẽ:', o: ['Vẫn còn nguyên', 'Nhân đôi', 'Đổi tên', 'Không còn nữa'], a: 3, why: 'Di chuyển là chuyển tệp sang chỗ mới, chỗ cũ không còn.' } ] },
  { id: 't4', name: 'Xoá và khôi phục', tip: 'Lỡ tay xoá nhầm? Thùng rác sẽ cứu em!',
    html: KT([
      '<b>Xoá</b>: chọn tệp/thư mục rồi nhấn phím <b>Delete</b>.',
      'Tệp bị xoá được chuyển vào <b>Thùng rác (Recycle Bin)</b>.',
      'Muốn lấy lại: mở Thùng rác, chọn tệp → <b>Restore</b> (khôi phục).',
      'Xoá trong Thùng rác hoặc nhấn <b>Shift + Delete</b> thì <b>xoá hẳn</b>, khó lấy lại.',
    ], 'Cẩn thận khi xoá; dùng <span class="k">Recycle Bin</span> để khôi phục.'),
    quiz: [
      { q: 'Tệp bị xoá bằng phím Delete sẽ được đưa vào:', o: ['Thùng rác (Recycle Bin)', 'Ổ đĩa USB', 'Màn hình nền', 'Máy in'], a: 0, why: 'Tệp bị xoá được chuyển vào Thùng rác.' },
      { q: 'Lệnh lấy lại tệp từ Thùng rác là:', o: ['Delete', 'Rename', 'Restore', 'Copy'], a: 2, why: 'Restore là khôi phục tệp về vị trí cũ.' } ] },
  { id: 't5', name: 'Bảo vệ dữ liệu', tip: 'Dữ liệu quý như báu vật, hãy cất giữ cẩn thận!',
    html: KT([
      'Dữ liệu có thể <b>bị mất</b> do: xoá nhầm, hỏng thiết bị, virus, mất máy…',
      '<b>Sao lưu</b> dữ liệu định kì ra USB, ổ cứng ngoài hoặc <b>lưu trữ trực tuyến</b> (Google Drive, OneDrive).',
      'Đặt <b>mật khẩu</b> cho máy tính, tài khoản; cài <b>phần mềm diệt virus</b>.',
      'Đặt tên tệp, thư mục <b>gợi nhớ nội dung</b> để dễ tìm.',
    ], 'Hãy <span class="k">sao lưu</span> dữ liệu thường xuyên để phòng mất mát.'),
    quiz: [
      { q: 'Cách tốt nhất phòng tránh mất dữ liệu quan trọng là:', o: ['Không bao giờ lưu', 'Sao lưu định kì ra nơi khác', 'Đặt tên tệp thật dài', 'Xoá hết tệp cũ'], a: 1, why: 'Sao lưu định kì giúp còn bản dự phòng khi dữ liệu bị mất.' },
      { q: 'Lưu trữ trực tuyến (đám mây) là ví dụ như:', o: ['Bàn phím', 'Thùng rác', 'Máy in', 'Google Drive, OneDrive'], a: 3, why: 'Google Drive, OneDrive là dịch vụ lưu trữ trực tuyến.' } ] },
];

const KEY = [
  'Ổ đĩa → <b>thư mục</b> → thư mục con → <b>tệp</b>.',
  'Đường dẫn: <b>D:\\HocTap\\Tin7\\Bai3.docx</b>.',
  'Sao chép <b>Ctrl+C</b>, di chuyển <b>Ctrl+X</b>, dán <b>Ctrl+V</b>.',
  'Xoá vào <b>Thùng rác</b>, lấy lại bằng <b>Restore</b>.',
  '<b>Sao lưu</b> định kì, đặt mật khẩu, diệt virus.',
];
