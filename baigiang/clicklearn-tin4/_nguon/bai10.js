/* ===== BÀI 10: PHẦN MỀM SOẠN THẢO VĂN BẢN ===== */
const META = { key: 'bai10', num: 10, theme: 'go', ic: '📝', cd: 5, en: 'Phần mềm soạn thảo văn bản',
  title: 'Bài 10. Phần mềm soạn thảo văn bản', big: 'Phần mềm<br>soạn thảo<br>văn bản',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Bên chiếc bàn gỗ, em cùng Bít soạn những trang văn bản đầu tiên nhé!',
  cert: 'Tin học 4 – Bài 10. Phần mềm soạn thảo văn bản', file: 'Tin4_Bai10', pass: 8 };

const caret = (x, y, h = 40) => `<rect x="${x}" y="${y}" width="5" height="${h}" fill="${O}"><animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/></rect>`;
const COVER = () => svgC(`${winbox(40, 30, 520, 270, 'Word', `${txt(300, 140, 'Em yêu trường em', 36, '#1982C4')}${caret(445, 112, 36)}${[0, 1].map(i => `<rect x="90" y="${180 + i*30}" width="${400 - i*120}" height="12" rx="6" fill="#ADB5BD"/>`).join('')}`, '#1982C4')}${star(570, 330, 14, '#FFD60A')}`);
const ILL_T = {
  t1: () => svg(`${winbox(40, 30, 520, 270, 'Word', `<rect x="140" y="85" width="320" height="200" fill="#fff" stroke="#ADB5BD" stroke-width="3"/>${caret(170, 110, 30)}`, '#1982C4')}
    ${pillS(60, 330, 480, 54, '#1982C4', 'Trang soạn thảo trắng', 26)}`),
  t2: () => svg(`${doc(140, 160, 1.6)}${caret(220, 120, 50)}${pillS(300, 80, 270, 54, '#FF7F11', 'Con trỏ soạn thảo', 22)}${arr(300, 107, 240, 135, O, 6)}
    ${pillS(40, 320, 520, 54, '#8338EC', 'Chữ hiện ở vị trí con trỏ', 24)}`),
  t3: () => svg(`${grid(80, 40, [['Gõ', 'Được'], ['aa', 'â'], ['aw', 'ă'], ['dd', 'đ'], ['s f r x j', 'dấu thanh']], [170, 270], 50, 24)}
    ${pillS(80, 330, 440, 54, '#2DA44E', 'Kiểu gõ Telex', 26)}`),
  t4: () => svg(`${key3d(60, 90, 200, 100, '#2DA44E', '#1C7C43', 'Enter', 40)}${doc(400, 150, 1.3)}${arr(280, 140, 330, 140, O, 7)}
    ${pillS(40, 320, 520, 54, '#FF7F11', 'Enter: sang đoạn mới', 26)}`),
  t5: () => svg(`${vflow([['#1982C4', 'Mở Word'], ['#2DA44E', 'Gõ chữ Việt (Telex)'], ['#FF7F11', 'Enter, lưu bài']], 140, 40, 320, 110, 24)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Làm quen với Word', tip: 'Word giúp em viết văn, làm thiệp thật đẹp!',
    html: S4Q(['Mở phần mềm <b>Word</b>, quan sát cửa sổ làm việc.', ''],
      ['Phần mềm soạn thảo văn bản dùng để làm gì?', 'Để <b>gõ, sửa</b>, trình bày văn bản: bài văn, thiệp, thông báo…'],
      ['Vùng trắng lớn ở giữa là gì?', 'Là <b>vùng soạn thảo</b> – nơi em gõ văn bản.'],
      ['<span class="k">Word</span>: soạn thảo văn bản.', 'Vùng trắng: <b>vùng soạn thảo</b>.', 'Phía trên: <b>dải lệnh</b>.']),
    quiz: [
      { q: 'Phần mềm soạn thảo văn bản thường dùng là:', o: ['Paint', 'PowerPoint', 'Word', 'Google'], a: 2, why: 'Word là phần mềm soạn thảo văn bản.' },
      { q: 'Em gõ văn bản vào:', o: ['Vùng soạn thảo', 'Thanh tiêu đề', 'Thùng rác', 'Biểu tượng'], a: 0, why: 'Văn bản được gõ vào vùng soạn thảo.' } ] },
  { id: 't2', name: 'Con trỏ soạn thảo', tip: 'Vạch đứng nhấp nháy chỉ chỗ chữ sẽ hiện ra!',
    html: S4Q(['Tìm <b>vạch đứng nhấp nháy</b> trên trang soạn thảo.', ''],
      ['Vạch đứng nhấp nháy là gì?', 'Là <b>con trỏ soạn thảo</b>; chữ gõ vào sẽ hiện ở đó.'],
      ['Di chuyển con trỏ soạn thảo bằng cách nào?', 'Dùng <b>phím mũi tên</b> hoặc <b>nháy chuột</b> vào vị trí mới.'],
      ['<span class="k">Con trỏ soạn thảo</span> nhấp nháy.', 'Chữ hiện <b>tại con trỏ</b>.', 'Di chuyển: <b>phím mũi tên</b>, chuột.']),
    quiz: [
      { q: 'Khi gõ phím, chữ sẽ xuất hiện ở:', o: ['Góc màn hình', 'Vị trí con trỏ soạn thảo', 'Thanh tiêu đề', 'Cuối trang'], a: 1, why: 'Chữ hiện tại vị trí con trỏ soạn thảo.' },
      { q: 'Để di chuyển con trỏ soạn thảo, em dùng:', o: ['Phím F5', 'Phím Delete', 'Nút nguồn', 'Phím mũi tên'], a: 3, why: 'Phím mũi tên di chuyển con trỏ soạn thảo.' } ] },
  { id: 't3', name: 'Gõ chữ Việt kiểu Telex', tip: 'aa = â, dd = đ, s = dấu sắc – dễ ợt!',
    html: S4Q(['Gõ câu: <b>Em yêu trường em</b> có dấu.', 'Gợi ý: bật Unikey, chọn kiểu Telex.'],
      ['Gõ chữ â, ă, đ thế nào?', '<b>aa</b> → â, <b>aw</b> → ă, <b>dd</b> → đ, <b>oo</b> → ô, <b>w</b> → ư.'],
      ['Gõ dấu thanh thế nào?', '<b>s</b> sắc, <b>f</b> huyền, <b>r</b> hỏi, <b>x</b> ngã, <b>j</b> nặng.'],
      ['Dùng phần mềm gõ <b>Unikey</b>.', 'Kiểu gõ <span class="k">Telex</span>.', 's, f, r, x, j: <b>dấu thanh</b>.']),
    quiz: [
      { q: 'Kiểu gõ Telex, gõ “dd” được chữ:', o: ['đ', 'd', 'ð', 'dđ'], a: 0, why: 'Trong Telex, dd cho chữ đ.' },
      { q: 'Kiểu gõ Telex, để gõ dấu huyền em gõ phím:', o: ['s', 'j', 'f', 'x'], a: 2, why: 'f là dấu huyền trong Telex.' } ] },
  { id: 't4', name: 'Xuống dòng và lưu bài', tip: 'Enter để sang đoạn mới, Ctrl + S để lưu!',
    html: S4Q(['Gõ một bài thơ <b>4 dòng</b>, rồi lưu lại.', ''],
      ['Muốn sang đoạn mới, em nhấn gì?', 'Nhấn phím <b>Enter</b>.'],
      ['Lưu văn bản thế nào?', 'Nhấn <b>Ctrl + S</b>, chọn thư mục, đặt tên → <b>Save</b>.'],
      ['<span class="k">Enter</span>: sang đoạn mới.', 'Gõ hết dòng chữ <b>tự xuống</b>.', '<b>Ctrl + S</b>: lưu văn bản.']),
    quiz: [
      { q: 'Phím dùng để kết thúc đoạn, sang đoạn mới là:', o: ['Phím cách', 'Delete', 'Esc', 'Enter'], a: 3, why: 'Enter kết thúc đoạn và sang đoạn mới.' },
      { q: 'Tệp văn bản Word thường có đuôi:', o: ['.pptx', '.docx', '.png', '.mp4'], a: 1, why: 'Tệp Word có đuôi .docx.' } ] },
  { id: 't5', name: 'Em soạn văn bản', tip: 'Ôn lại: mở Word – con trỏ – Telex – Enter – lưu!',
    html: S4Q(['Soạn một <b>tấm thiệp</b> chúc mừng thầy cô.', ''],
      ['Em gõ chữ có dấu bằng cách nào?', 'Bật <b>Unikey</b>, dùng kiểu gõ <b>Telex</b>.'],
      ['Gõ xong em làm gì?', 'Kiểm tra lỗi chính tả, rồi <b>lưu</b> bài.'],
      ['Gõ tại <b>con trỏ soạn thảo</b>.', 'Chữ Việt kiểu <span class="k">Telex</span>.', '<b>Lưu</b> bài cẩn thận.']),
    quiz: [
      { q: 'Kiểu Telex, gõ “truwowngf” được:', o: ['trường', 'trương', 'truong', 'trưởng'], a: 0, why: 'uw→ư, ow→ơ, f→huyền: trường.' },
      { q: 'Kiểu Telex, gõ “aa” được chữ:', o: ['ă', 'a', 'â', 'á'], a: 2, why: 'aa cho chữ â.' } ] },
];

const KEY = [
  'Word:<br><b>soạn thảo</b>.',
  'Gõ tại<br><b>con trỏ</b>.',
  'aa=â, dd=đ,<br><b>s f r x j</b>.',
  '<b>Enter</b> đoạn mới,<br>Ctrl + S lưu.',
  'Soạn văn bản<br><b>có dấu</b>.',
];
