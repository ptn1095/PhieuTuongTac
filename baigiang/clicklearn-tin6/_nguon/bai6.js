/* ===== BÀI 6: MẠNG THÔNG TIN TOÀN CẦU ===== */
const META = { key: 'bai6', theme: 'tuyet', num: 6, title: 'Bài 6. Mạng thông tin toàn cầu', big: 'Mạng thông tin<br>toàn cầu',
  st2: 'Chủ đề 3 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng dạo quanh các trang web trên mạng thông tin toàn cầu nhé!',
  cert: 'Tin học 6 – Bài 6. Mạng thông tin toàn cầu', file: 'Tin6_Bai6', pass: 8 };

const ILL_T = {
  t1: () => svg(`${winbox(40, 40, 520, 300, 'Trang web', `<rect x="70" y="100" width="200" height="120" rx="10" fill="#8AC926" stroke="${O}" stroke-width="4"/>${[110, 140, 170, 200].map(y => `<rect x="300" y="${y}" width="${y === 200 ? 140 : 220}" height="12" rx="6" fill="#ADB5BD"/>`).join('')}
    <rect x="70" y="250" width="160" height="40" rx="20" fill="#1982C4"/><text x="150" y="277" text-anchor="middle" font-size="20" fill="#fff" ${F}>Liên kết</text>`)}${note(500, 300, '#FF7F11', .8)}${star(560, 390, 12, '#FFD60A')}`),
  t2: () => svg(`${paper(40, 60, 220, 170)}${paper(340, 60, 220, 170)}${paper(190, 250, 220, 150)}${arr(260, 145, 335, 145, '#FF7F11')}${arr(150, 235, 210, 285, '#FF7F11')}
    ${pillS(80, 120, 140, 44, '#1982C4', 'Trang 1', 22)}${pillS(380, 120, 140, 44, '#2DA44E', 'Trang 2', 22)}${pillS(230, 300, 140, 44, '#8338EC', 'Trang 3', 22)}`),
  t3: () => svg(`${winbox(30, 50, 540, 120, 'Trình duyệt', `<rect x="50" y="108" width="500" height="44" rx="22" fill="#F1F3F5" stroke="${O}" stroke-width="4"/><text x="74" y="138" font-size="22" fill="${O}" ${F}>https://kntt.vn</text>`, '#2DA44E')}
    ${pillS(30, 230, 170, 48, '#FF7F11', 'Chrome', 24)}${pillS(215, 230, 170, 48, '#2DA44E', 'Cốc Cốc', 24)}${pillS(400, 230, 170, 48, '#1982C4', 'Edge', 24)}
    ${pillS(120, 320, 360, 50, '#8338EC', 'Địa chỉ trang web', 26)}`),
  t4: () => svg(`${vflow([['#1982C4', '1. Mở trình duyệt'], ['#FF7F11', '2. Gõ địa chỉ'], ['#2DA44E', '3. Nhấn Enter'], ['#8338EC', '4. Nháy liên kết']], 140, 26, 320, 98, 26)}${star(540, 380, 12, '#FFD60A')}`),
  t5: () => svg(`${tlist([[1, '#1982C4', 'WWW: các trang web liên kết'], [1, '#2DA44E', 'Website: nhiều trang web'], [1, '#FF7F11', 'Trình duyệt để xem web'], [1, '#8338EC', 'Mỗi trang có một địa chỉ']], 60, 96, 22)}`),
};

const TOPICS = [
  { id: 't1', name: 'Trang web quanh em', tip: 'Trang web có chữ, hình, video và cả liên kết nữa!',
    html: S4('Kể tên trang web em hay xem và nó có <b>những gì</b>.',
      'Trang web có văn bản, hình ảnh, âm thanh, video và <b>liên kết</b>.',
      'Nháy vào một liên kết thì điều gì xảy ra?',
      'Trang web là <span class="k">siêu văn bản</span> có chứa liên kết.'),
    quiz: [
      { q: 'Trang web có thể chứa những gì?', o: ['Chỉ có chữ', 'Văn bản, hình ảnh, video, liên kết', 'Chỉ có hình', 'Chỉ có âm thanh'], a: 1, why: 'Trang web là siêu văn bản chứa nhiều dạng thông tin và liên kết.' },
      { q: 'Nháy vào một liên kết trên trang web sẽ:', o: ['Tắt máy tính', 'Xoá trang web', 'Chuyển đến trang được liên kết', 'In trang web'], a: 2, why: 'Liên kết dẫn em sang một trang web hoặc vị trí khác.' } ] },
  { id: 't2', name: 'Mạng thông tin toàn cầu', tip: 'WWW – các trang web nối với nhau như mạng nhện!',
    html: S4('Tìm hiểu <b>WWW</b> là gì.',
      '<b>WWW</b> là mạng các trang web liên kết với nhau trên Internet.',
      'Nhiều trang web liên quan, cùng một địa chỉ gọi là gì? (<b>website</b>)',
      'Trang đầu tiên của website gọi là <span class="k">trang chủ</span>.'),
    quiz: [
      { q: 'WWW là viết tắt của:', o: ['World Wide Web', 'Word Write Web', 'Wide Window Web', 'Web Web Web'], a: 0, why: 'WWW là World Wide Web – mạng thông tin toàn cầu.' },
      { q: 'Nhiều trang web liên quan, chung một địa chỉ gọi là:', o: ['Trình duyệt', 'Máy tìm kiếm', 'Thư điện tử', 'Website'], a: 3, why: 'Website là tập hợp các trang web liên quan.' } ] },
  { id: 't3', name: 'Trình duyệt và địa chỉ', tip: 'Muốn đến nhà bạn cần địa chỉ – trang web cũng vậy!',
    html: S4('Tìm thanh <b>địa chỉ</b> trên trình duyệt.',
      'Trình duyệt: <b>Chrome, Cốc Cốc, Edge, Firefox</b>… dùng để xem trang web.',
      'Mỗi trang web có một địa chỉ, ví dụ <code>https://kntt.vn</code>.',
      '<span class="k">Trình duyệt</span> giúp truy cập và xem trang web.'),
    quiz: [
      { q: 'Phần mềm nào là trình duyệt web?', o: ['Word', 'Paint', 'Google Chrome', 'Scratch'], a: 2, why: 'Google Chrome là trình duyệt web.' },
      { q: 'Địa chỉ trang web được gõ vào:', o: ['Thanh địa chỉ của trình duyệt', 'Ô tên tệp', 'Thanh tác vụ', 'Màn hình nền'], a: 0, why: 'Gõ địa chỉ vào thanh địa chỉ rồi nhấn Enter.' } ] },
  { id: 't4', name: 'Truy cập trang web', tip: 'Mở trình duyệt – gõ địa chỉ – Enter là xong!',
    html: S4('Thực hành mở một trang web học tập.',
      'Mở <b>trình duyệt</b> → gõ <b>địa chỉ</b> vào thanh địa chỉ → nhấn <b>Enter</b>.',
      'Muốn quay lại trang trước, em bấm nút nào? (nút ◀ Back)',
      'Nháy vào <span class="k">liên kết</span> để đi tiếp đến trang khác.'),
    quiz: [
      { q: 'Sau khi gõ địa chỉ trang web, em nhấn phím:', o: ['Esc', 'Shift', 'Ctrl', 'Enter'], a: 3, why: 'Nhấn Enter để trình duyệt mở trang web.' },
      { q: 'Bước đầu tiên để xem một trang web là:', o: ['Tắt máy tính', 'Mở trình duyệt', 'Mở phần mềm vẽ', 'Rút dây mạng'], a: 1, why: 'Cần mở trình duyệt trước, rồi mới gõ địa chỉ.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn nhanh: trang web, website, trình duyệt, địa chỉ!',
    html: S4('Tóm tắt bài bằng 3 ý chính.',
      '<b>WWW</b>: các trang web liên kết với nhau trên Internet.',
      'Website gồm nhiều trang web; trang đầu là <b>trang chủ</b>.',
      'Dùng <span class="k">trình duyệt</span> và địa chỉ để xem trang web.'),
    quiz: [
      { q: 'Trang đầu tiên của một website gọi là:', o: ['Trang cuối', 'Trang chủ', 'Trang bìa', 'Trang phụ'], a: 1, why: 'Trang chủ là trang mở ra đầu tiên của website.' },
      { q: 'Siêu văn bản là văn bản:', o: ['Rất dài', 'Chỉ có chữ', 'Có chứa liên kết', 'Viết tay'], a: 2, why: 'Siêu văn bản có chứa các liên kết đến nội dung khác.' } ] },
];

const KEY = [
  'Trang web là<br><b>siêu văn bản</b>.',
  '<b>WWW</b>, website,<br>trang chủ.',
  '<b>Trình duyệt</b><br>+ địa chỉ.',
  'Gõ địa chỉ<br>→ <b>Enter</b>.',
  'Web liên kết<br><b>toàn cầu</b>.',
];
