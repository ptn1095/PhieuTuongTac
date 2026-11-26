/* ===== BÀI 2: PHẦN MỀM MÁY TÍNH ===== */
const META = { key: 'bai2', num: 2, theme: 'daiduong', title: 'Bài 2. Phần mềm máy tính', big: 'Phần mềm<br>máy tính',
  st2: 'Chủ đề 1 • 5 phần kiến thức cần nhớ • 10 câu đố • giấy chứng nhận',
  hello: 'Lặn xuống đại dương phần mềm cùng mình nào!',
  cert: 'Tin học 7 – Bài 2. Phần mềm máy tính', file: 'Tin7_Bai2', pass: 8 };

const OSW = (x, y, c, t) => card(x, y, 170, 64, c, t, 26);
const ILL_T = {
  t1: () => svg(`${monitor(300, 130, 1, '#3A8DFF', `${[0, 1].map(r => [0, 1].map(c => `<rect x="${-30 + c*34}" y="${-40 + r*34}" width="28" height="28" fill="#fff" opacity=".9"/>`).join('')).join('')}`)}
    ${OSW(20, 40, '#1982C4', 'Windows')}${OSW(410, 40, '#3D405B', 'macOS')}${OSW(20, 150, '#FF7F11', 'Linux')}${OSW(410, 150, '#2DA44E', 'Android')}
    ${pillS(60, 330, 480, 54, '#8338EC', 'Hệ điều hành', 30)}`),
  t2: () => svg(`${vflow([['#1982C4', 'Người dùng'], ['#2DA44E', 'Phần mềm ứng dụng'], ['#8338EC', 'Hệ điều hành'], ['#FF7F11', 'Phần cứng máy tính']], 150, 22, 300, 96, 26)}`),
  t3: () => svg(`${[['#1982C4', 'W', 'Soạn thảo'], ['#2DA44E', 'X', 'Bảng tính'], ['#E5383B', 'P', 'Trình chiếu'], ['#FF7F11', '🌐', 'Duyệt web'], ['#8338EC', '🎨', 'Vẽ hình'], ['#FF006E', '▶', 'Xem video']].map(([c, a, t], i) => {
      const x = 40 + (i % 3)*186, y = 30 + Math.floor(i/3)*170; return `${key3d(x + 33, y, 110, 96, c, '#1D3557', a, 48)}${txt(x + 88, y + 150, t, 24)}`; }).join('')}
    ${pillS(70, 350, 460, 50, '#1982C4', 'Phục vụ công việc cụ thể', 24)}`),
  t4: () => svg(`${fileI(110, 110, 1, 'exe', '#E5383B')}${txt(110, 215, 'Tệp chương trình', 24)}${fileI(330, 110, 1, 'docx', '#1982C4')}${fileI(480, 110, 1, 'jpg', '#2DA44E')}${txt(405, 215, 'Tệp dữ liệu', 24)}
    ${pillS(60, 270, 480, 50, '#E5383B', 'Chương trình: chứa lệnh', 24)}${pillS(60, 340, 480, 50, '#1982C4', 'Dữ liệu: văn bản, ảnh, âm thanh…', 24)}`),
  t5: () => svg(`${pillS(130, 40, 340, 64, '#fff', 'baitap.docx', 34, 0, O)}${arr(240, 120, 180, 190, '#1982C4', 7)}${arr(380, 120, 440, 190, '#FF7F11', 7)}
    ${pillS(60, 200, 230, 56, '#1982C4', 'Tên tệp', 28)}${pillS(320, 200, 230, 56, '#FF7F11', 'Phần mở rộng', 26)}
    ${pillS(40, 300, 520, 54, '#2DA44E', '.mp3 âm thanh • .mp4 video', 26)}`),
};

const TOPICS = [
  { id: 't1', name: 'Hệ điều hành', tip: 'Không có hệ điều hành, máy tính chỉ là một cái hộp không biết làm gì!',
    html: KT([
      '<b>Hệ điều hành</b> là phần mềm <b>quản lí và điều khiển</b> toàn bộ hoạt động của máy tính.',
      'Hệ điều hành được cài đặt và chạy <b>đầu tiên</b> khi bật máy.',
      'Máy tính: <b>Windows, macOS, Linux</b>. Điện thoại, máy tính bảng: <b>Android, iOS</b>.',
      'Mỗi máy tính cần có <b>ít nhất một</b> hệ điều hành để hoạt động.',
    ], 'Hệ điều hành <span class="k">điều khiển</span> mọi hoạt động của máy tính.'),
    quiz: [
      { q: 'Phần mềm nào sau đây là hệ điều hành?', o: ['Microsoft Word', 'Windows', 'Paint', 'Google Chrome'], a: 1, why: 'Windows là hệ điều hành; Word, Paint, Chrome là phần mềm ứng dụng.' },
      { q: 'Hệ điều hành thường dùng trên điện thoại thông minh là:', o: ['Excel', 'Scratch', 'Android, iOS', 'PowerPoint'], a: 2, why: 'Android và iOS là hệ điều hành cho điện thoại.' } ] },
  { id: 't2', name: 'Chức năng của hệ điều hành', tip: 'Hệ điều hành như một “người quản gia” chăm lo mọi việc trong máy!',
    html: KT([
      '<b>Quản lí tệp, thư mục</b>: tổ chức, lưu trữ, tìm kiếm dữ liệu.',
      '<b>Quản lí thiết bị</b>: điều khiển bàn phím, chuột, màn hình, máy in…',
      'Tạo <b>giao diện</b> để người dùng giao tiếp với máy tính.',
      '<b>Chạy và quản lí</b> các phần mềm ứng dụng; <b>bảo vệ</b> máy bằng tài khoản, mật khẩu.',
    ], 'Hệ điều hành là <span class="k">cầu nối</span> giữa người dùng, phần mềm và phần cứng.'),
    quiz: [
      { q: 'Việc nào KHÔNG phải chức năng của hệ điều hành?', o: ['Quản lí tệp, thư mục', 'Điều khiển thiết bị', 'Soạn bài văn cho em', 'Tạo giao diện giao tiếp'], a: 2, why: 'Soạn bài văn là việc của em, với sự trợ giúp của phần mềm soạn thảo.' },
      { q: 'Phần mềm ứng dụng muốn chạy được thì cần có:', o: ['Hệ điều hành', 'Máy in', 'Loa', 'Mạng xã hội'], a: 0, why: 'Phần mềm ứng dụng chạy trên nền hệ điều hành.' } ] },
  { id: 't3', name: 'Phần mềm ứng dụng', tip: 'Mỗi phần mềm ứng dụng giỏi một việc riêng!',
    html: KT([
      '<b>Phần mềm ứng dụng</b> giúp người dùng làm <b>một công việc cụ thể</b>.',
      'Soạn thảo văn bản (<b>Word</b>), bảng tính (<b>Excel</b>), trình chiếu (<b>PowerPoint</b>).',
      'Duyệt web (<b>Chrome, Edge</b>), vẽ hình (<b>Paint</b>), nghe nhạc, xem video, học tập, trò chơi…',
      'Phần mềm ứng dụng <b>chạy trên nền hệ điều hành</b>.',
    ], 'Hệ điều hành và phần mềm ứng dụng là <span class="k">hai loại phần mềm</span> chính.'),
    quiz: [
      { q: 'Muốn làm bảng điểm và tính điểm trung bình, em dùng:', o: ['Phần mềm bảng tính', 'Phần mềm vẽ', 'Trình duyệt web', 'Hệ điều hành'], a: 0, why: 'Phần mềm bảng tính (Excel) giúp tính toán, lập bảng.' },
      { q: 'Phần mềm ứng dụng là phần mềm:', o: ['Điều khiển toàn bộ máy tính', 'Chạy đầu tiên khi bật máy', 'Chỉ có ở điện thoại', 'Giúp làm một công việc cụ thể'], a: 3, why: 'Phần mềm ứng dụng phục vụ một nhu cầu, công việc cụ thể.' } ] },
  { id: 't4', name: 'Tệp chương trình và tệp dữ liệu', tip: 'Trong máy tính, mọi thứ đều được lưu thành tệp!',
    html: KT([
      '<b>Tệp chương trình</b>: chứa các <b>lệnh</b> để máy tính thực hiện, VD tệp <b>.exe</b>.',
      '<b>Tệp dữ liệu</b>: chứa <b>dữ liệu</b> như văn bản, hình ảnh, âm thanh, video.',
      'Tệp dữ liệu được tạo ra và mở bằng <b>phần mềm ứng dụng</b> tương ứng.',
      'Nháy đúp tệp chương trình → <b>chạy</b> phần mềm; nháy đúp tệp dữ liệu → <b>mở</b> bằng phần mềm phù hợp.',
    ], 'Có 2 loại tệp: <span class="k">tệp chương trình</span> và <span class="k">tệp dữ liệu</span>.'),
    quiz: [
      { q: 'Tệp nào là tệp chương trình?', o: ['baitap.docx', 'anh.jpg', 'setup.exe', 'nhac.mp3'], a: 2, why: 'Tệp .exe chứa lệnh, là tệp chương trình.' },
      { q: 'Tệp dữ liệu chứa:', o: ['Văn bản, hình ảnh, âm thanh…', 'Chỉ chứa lệnh', 'Hệ điều hành', 'Thiết bị vào'], a: 0, why: 'Tệp dữ liệu chứa dữ liệu như văn bản, ảnh, âm thanh, video.' } ] },
  { id: 't5', name: 'Phần mở rộng của tệp', tip: 'Nhìn đuôi tệp là biết tệp loại gì!',
    html: KT([
      'Tên tệp thường gồm <b>tên</b> và <b>phần mở rộng</b>, ngăn cách bởi dấu chấm: <b>baitap.docx</b>.',
      'Phần mở rộng cho biết <b>loại tệp</b> và phần mềm dùng để mở.',
      '<b>.docx</b> văn bản • <b>.xlsx</b> bảng tính • <b>.pptx</b> trình chiếu.',
      '<b>.jpg, .png</b> hình ảnh • <b>.mp3</b> âm thanh • <b>.mp4</b> video • <b>.exe</b> chương trình.',
    ], 'Phần mở rộng (đuôi tệp) giúp nhận biết <span class="k">loại tệp</span>.'),
    quiz: [
      { q: 'Tệp “hoctap.pptx” là tệp:', o: ['Bảng tính', 'Trình chiếu', 'Âm thanh', 'Chương trình'], a: 1, why: '.pptx là phần mở rộng của tệp trình chiếu PowerPoint.' },
      { q: 'Phần mở rộng của tệp hình ảnh thường là:', o: ['.mp3', '.docx', '.xlsx', '.jpg, .png'], a: 3, why: '.jpg và .png là tệp hình ảnh.' } ] },
];

const KEY = [
  '<b>Hệ điều hành</b>: Windows, macOS, Linux, Android, iOS.',
  'Quản lí <b>tệp, thiết bị</b>, tạo giao diện, chạy ứng dụng.',
  '<b>Phần mềm ứng dụng</b>: làm việc cụ thể (Word, Excel…).',
  'Tệp <b>chương trình</b> (.exe) và tệp <b>dữ liệu</b>.',
  'Đuôi tệp: <b>.docx .xlsx .pptx .jpg .mp3 .mp4</b>.',
];
