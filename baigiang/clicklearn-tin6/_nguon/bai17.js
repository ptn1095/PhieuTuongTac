/* ===== BÀI 17: CHƯƠNG TRÌNH MÁY TÍNH ===== */
const META = { key: 'bai17', theme: 'daiduong', num: 17, title: 'Bài 17. Chương trình máy tính', big: 'Chương trình<br>máy tính',
  st2: 'Chủ đề 6 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng ra lệnh cho máy tính bằng chương trình nhé!',
  cert: 'Tin học 6 – Bài 17. Chương trình máy tính', file: 'Tin6_Bai17', pass: 8 };

const blk = (x, y, w, c, t, hat = false) => `<path d="M${x} ${y + (hat ? 14 : 0)} ${hat ? `Q${x + 40} ${y - 18} ${x + 80} ${y + 14}` : `H${x + 16} l8 8 h20 l8 -8`} H${x + w} V${y + 54} H${x + 52} l-8 8 h-20 l-8 -8 H${x}Z" fill="${c}" stroke="${O}" stroke-width="4" stroke-linejoin="round"/><text x="${x + 16}" y="${y + 38}" font-size="22" fill="#fff" ${F}>${t}</text>`;
const ILL_T = {
  t1: () => svg(`<g transform="translate(40 40) scale(1.4)">${robot()}</g>${pillS(360, 80, 220, 50, '#1982C4', 'Tiến 3 bước', 24)}${pillS(360, 170, 220, 50, '#FF7F11', 'Rẽ phải', 24)}${pillS(360, 260, 220, 50, '#2DA44E', 'Tiến 2 bước', 24)}${star(560, 380, 14, '#FFD60A')}`),
  t2: () => svg(`${pillS(20, 70, 170, 56, '#1982C4', 'Thuật toán', 24)}${arr(195, 98, 240, 98, O)}${pillS(245, 70, 150, 56, '#FF7F11', 'Viết lệnh', 24)}${arr(400, 98, 440, 98, O)}${pillS(445, 70, 135, 56, '#2DA44E', 'Máy chạy', 22)}
    ${laptop(180, 190, .9, `<text x="20" y="40" font-size="22" fill="${O}" ${F}>lệnh 1</text><text x="20" y="80" font-size="22" fill="${O}" ${F}>lệnh 2</text><text x="20" y="120" font-size="22" fill="${O}" ${F}>lệnh 3</text>`)}`),
  t3: () => svg(`${blk(40, 40, 300, '#FFBF00', 'khi bấm vào lá cờ', true)}${blk(40, 100, 240, '#4C97FF', 'di chuyển 10 bước')}${blk(40, 156, 240, '#9966FF', 'nói Xin chào!')}${blk(40, 212, 240, '#4C97FF', 'xoay 15 độ')}
    ${cat(470, 230, 1)}${pillS(330, 340, 250, 50, '#FF7F11', 'Scratch', 28)}`),
  t4: () => svg(`${vflow([['#1982C4', '1. Hiểu bài toán'], ['#FF7F11', '2. Thiết kế thuật toán'], ['#2DA44E', '3. Viết chương trình'], ['#8338EC', '4. Chạy thử, sửa lỗi']], 130, 26, 340, 98, 24)}`),
  t5: () => svg(`${tlist([[1, '#1982C4', 'Chương trình: dãy lệnh'], [1, '#2DA44E', 'Máy tính hiểu và làm theo'], [1, '#FF7F11', 'Viết bằng ngôn ngữ lập trình'], [1, '#8338EC', 'Scratch: kéo thả khối lệnh']], 60, 96, 22)}`),
};

const TOPICS = [
  { id: 't1', name: 'Ra lệnh cho robot', tip: 'Robot chỉ làm đúng những gì em ra lệnh thôi!',
    html: S4Q(['Ra lệnh cho bạn đóng vai <b>robot</b> đi đến cửa.', ''],
      ['Robot làm theo lệnh như thế nào?', 'Làm đúng từng lệnh: "tiến 3 bước", "rẽ phải"…'],
      ['Ra lệnh sai thứ tự thì robot đi đến đâu?', 'Đi sai chỗ, không đến được cửa.'],
      ['Robot làm <b>đúng từng lệnh</b>.', 'Lệnh phải <b>rõ ràng, đúng thứ tự</b>.', 'Máy tính cũng <span class="k">cần lệnh rõ ràng</span>.']),
    quiz: [
      { q: 'Robot (máy tính) thực hiện công việc nhờ:', o: ['Tự suy nghĩ', 'Các lệnh được đưa vào', 'Đoán ý người dùng', 'May mắn'], a: 1, why: 'Máy tính làm việc theo các lệnh con người đưa vào.' },
      { q: 'Ra lệnh sai thứ tự thì robot sẽ:', o: ['Vẫn đến đúng chỗ', 'Tự sửa lệnh', 'Đi sai đường', 'Dừng lại mãi'], a: 2, why: 'Robot làm đúng từng lệnh, lệnh sai thì đi sai.' } ] },
  { id: 't2', name: 'Chương trình máy tính', tip: 'Chương trình là thuật toán "viết bằng tiếng của máy tính"!',
    html: S4Q(['Tìm hiểu <b>chương trình máy tính</b> là gì.', ''],
      ['Chương trình máy tính là gì?', 'Dãy lệnh mà máy tính hiểu và thực hiện được.'],
      ['Chương trình được viết bằng gì?', 'Bằng <b>ngôn ngữ lập trình</b>: Scratch, Python…'],
      ['<b>Chương trình</b>: dãy lệnh cho máy tính.', 'Viết bằng <b>ngôn ngữ lập trình</b>.', 'Là <span class="k">thuật toán</span> viết cho máy tính.']),
    quiz: [
      { q: 'Chương trình máy tính là:', o: ['Dãy lệnh máy tính hiểu và làm được', 'Một chiếc máy in', 'Bản vẽ tay', 'Một trang sách'], a: 0, why: 'Chương trình là dãy lệnh để máy tính thực hiện.' },
      { q: 'Chương trình máy tính được viết bằng:', o: ['Tiếng hát', 'Hình vẽ tay', 'Bút chì màu', 'Ngôn ngữ lập trình'], a: 3, why: 'Ngôn ngữ lập trình giúp máy tính hiểu được lệnh.' } ] },
  { id: 't3', name: 'Làm quen với Scratch', tip: 'Scratch: kéo thả khối lệnh như ghép hình!',
    html: S4Q(['Quan sát chương trình Scratch cho <b>chú mèo</b> đi và nói.', ''],
      ['Lập trình Scratch thế nào?', 'Kéo thả các khối lệnh nhiều màu, ghép nối với nhau.'],
      ['Bấm lá cờ xanh thì điều gì xảy ra?', 'Chương trình chạy: mèo đi 10 bước, nói "Xin chào!".'],
      ['Scratch: lập trình <b>kéo thả</b>.', 'Khối lệnh <b>ghép nối</b> nhau.', 'Bấm <span class="k">lá cờ xanh</span> để chạy.']),
    quiz: [
      { q: 'Trong Scratch, em tạo chương trình bằng cách:', o: ['Gõ thật nhiều chữ', 'Kéo thả, ghép khối lệnh', 'Vẽ tranh', 'Hát vào micro'], a: 1, why: 'Scratch lập trình bằng cách kéo thả các khối lệnh.' },
      { q: 'Muốn chạy chương trình Scratch, em thường bấm:', o: ['Lá cờ xanh', 'Nút tắt máy', 'Phím Esc', 'Nút đỏ'], a: 0, why: 'Bấm lá cờ xanh để bắt đầu chạy chương trình.' } ] },
  { id: 't4', name: 'Từ thuật toán đến chương trình', tip: 'Nghĩ thuật toán trước, viết chương trình sau!',
    html: S4Q(['Viết chương trình cho mèo <b>vẽ hình vuông</b>.', ''],
      ['Thuật toán vẽ hình vuông là gì?', 'Lặp 4 lần: đi một đoạn, xoay 90 độ.'],
      ['Viết xong chương trình thì làm gì tiếp?', 'Chạy thử → nếu sai thì sửa lỗi.'],
      ['Hiểu bài toán → <b>thuật toán</b>.', 'Viết <b>chương trình</b> → chạy thử.', 'Sai thì <span class="k">sửa lỗi</span>.']),
    quiz: [
      { q: 'Trước khi viết chương trình, cần:', o: ['Tắt máy tính', 'Chạy thử ngay', 'Thiết kế thuật toán', 'Xoá Scratch'], a: 2, why: 'Có thuật toán rồi mới viết thành chương trình.' },
      { q: 'Vẽ hình vuông cần lặp "đi rồi xoay 90 độ" mấy lần?', o: ['2 lần', '3 lần', '5 lần', '4 lần'], a: 3, why: 'Hình vuông có 4 cạnh nên lặp 4 lần.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn nhanh: chương trình – ngôn ngữ lập trình – Scratch!',
    html: S4Q(['Tóm tắt bài học bằng <b>3 ý chính</b>.', ''],
      ['Chương trình máy tính là gì?', 'Dãy lệnh máy tính hiểu và thực hiện được.'],
      ['Scratch là gì?', 'Ngôn ngữ lập trình dùng khối lệnh kéo thả.'],
      ['<b>Chương trình</b>: dãy lệnh.', 'Viết bằng <b>ngôn ngữ lập trình</b>.', 'Scratch: <span class="k">kéo thả khối lệnh</span>.']),
    quiz: [
      { q: 'Câu nào đúng?', o: ['Máy tính tự nghĩ ra chương trình', 'Scratch là trình duyệt web', 'Chương trình mô tả thuật toán cho máy tính', 'Chương trình không cần thuật toán'], a: 2, why: 'Chương trình là thuật toán viết bằng ngôn ngữ lập trình.' },
      { q: 'Scratch là:', o: ['Ngôn ngữ lập trình', 'Máy tìm kiếm', 'Phần mềm thư điện tử', 'Bộ nhớ máy tính'], a: 0, why: 'Scratch là ngôn ngữ lập trình kéo thả.' } ] },
];

const KEY = [
  'Máy tính cần<br><b>lệnh rõ ràng</b>.',
  'Chương trình:<br><b>dãy lệnh</b>.',
  'Scratch:<br><b>kéo thả khối</b>.',
  'Thuật toán →<br><b>chương trình</b>.',
  'Lập trình =<br><b>ra lệnh</b> cho máy.',
];
