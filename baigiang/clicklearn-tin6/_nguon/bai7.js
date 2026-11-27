/* ===== BÀI 7: TÌM KIẾM THÔNG TIN TRÊN INTERNET ===== */
const META = { key: 'bai7', theme: 'samac', num: 7, title: 'Bài 7. Tìm kiếm thông tin trên Internet', big: 'Tìm kiếm<br>thông tin',
  st2: 'Chủ đề 3 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng làm thám tử tìm thông tin trên Internet nhé!',
  cert: 'Tin học 6 – Bài 7. Tìm kiếm thông tin trên Internet', file: 'Tin6_Bai7', pass: 8 };

const sbox = (y, t) => `<rect x="40" y="${y}" width="520" height="62" rx="31" fill="#fff" stroke="${O}" stroke-width="5"/><text x="72" y="${y + 41}" font-size="26" fill="${O}" ${F}>${t}</text><circle cx="520" cy="${y + 31}" r="22" fill="#1982C4" stroke="${O}" stroke-width="4"/>`;
const ILL_T = {
  t1: () => svg(`${mag(250, 160, 1.4)}${G(250, 160, 1, `<text x="0" y="12" text-anchor="middle" font-size="40" fill="${O}" ${F}>?</text>`)}
    ${pillS(330, 90, 240, 50, '#FF7F11', 'Muốn biết…', 24)}${pillS(330, 170, 240, 50, '#2DA44E', 'Tìm ở đâu?', 24)}${star(560, 380, 14, '#FFD60A')}`),
  t2: () => svg(`${sbox(50, 'Máy tìm kiếm')}${pillS(30, 160, 170, 48, '#1982C4', 'Google', 24)}${pillS(215, 160, 170, 48, '#2DA44E', 'Bing', 24)}${pillS(400, 160, 170, 48, '#FF7F11', 'Cốc Cốc', 24)}
    ${paper(140, 250, 320, 140)}${txt(300, 300, 'Danh sách kết quả', 24, '#1982C4')}`),
  t3: () => svg(`${sbox(40, 'vịnh Hạ Long')}${tick(80, 150)}${pillS(130, 124, 430, 52, '#2DA44E', 'Từ khoá ngắn, đúng trọng tâm', 22)}
    ${cross(80, 240)}${pillS(130, 214, 430, 52, '#E5383B', 'Câu quá dài, lan man', 22)}${pillS(80, 320, 440, 54, '#8338EC', 'Từ khoá quyết định kết quả', 24)}`),
  t4: () => svg(`${sbox(50, '"Hồ Hoàn Kiếm"')}${pillS(60, 150, 480, 52, '#FF7F11', 'Ngoặc kép: tìm đúng cụm từ', 24)}
    ${pillS(30, 240, 170, 48, '#1982C4', 'Tất cả', 24)}${pillS(215, 240, 170, 48, '#2DA44E', 'Hình ảnh', 24)}${pillS(400, 240, 170, 48, '#8338EC', 'Video', 24)}
    ${pillS(120, 330, 360, 50, '#FF006E', 'Chọn mục phù hợp', 24)}`),
  t5: () => svg(`${vflow([['#1982C4', '1. Mở máy tìm kiếm'], ['#FF7F11', '2. Gõ từ khoá'], ['#2DA44E', '3. Nhấn Enter'], ['#8338EC', '4. Chọn kết quả']], 140, 26, 320, 98, 26)}${mag(520, 330, .5)}`),
};

const TOPICS = [
  { id: 't1', name: 'Em muốn biết điều gì?', tip: 'Internet như một thư viện khổng lồ – cần biết cách tìm!',
    html: S4Q(['Em cần tìm thông tin về <b>vịnh Hạ Long</b> cho bài thuyết trình.', ''],
      ['Em có thể tìm thông tin ở đâu?', 'Hỏi người lớn, đọc sách hoặc tìm trên Internet.'],
      ['Internet rất nhiều trang web, làm sao tìm nhanh?', 'Dùng <b>máy tìm kiếm</b>.'],
      ['Có nhiều nguồn thông tin: sách, người lớn, Internet.', 'Internet có <b>rất nhiều</b> thông tin.', 'Dùng <span class="k">máy tìm kiếm</span> để tìm nhanh.']),
    quiz: [
      { q: 'Muốn tìm thông tin nhanh trên Internet, em dùng:', o: ['Máy tìm kiếm', 'Phần mềm vẽ', 'Máy tính bỏ túi', 'Máy in'], a: 0, why: 'Máy tìm kiếm giúp tìm thông tin nhanh trên Internet.' },
      { q: 'Thông tin trên Internet có đặc điểm:', o: ['Rất ít', 'Không bao giờ thay đổi', 'Rất nhiều, đa dạng', 'Chỉ có chữ'], a: 2, why: 'Internet chứa lượng thông tin rất lớn và đa dạng.' } ] },
  { id: 't2', name: 'Máy tìm kiếm', tip: 'Google, Bing, Cốc Cốc… đều là máy tìm kiếm đấy!',
    html: S4Q(['Kể tên các <b>máy tìm kiếm</b> em biết.', ''],
      ['Máy tìm kiếm là gì? Kể tên.', 'Website giúp tìm thông tin: Google, Bing, Cốc Cốc…'],
      ['Kết quả tìm kiếm hiện ra dưới dạng gì?', 'Một <b>danh sách liên kết</b> đến các trang web.'],
      ['Máy tìm kiếm là một <b>website</b>.', 'Ví dụ: Google, Bing, Cốc Cốc.', 'Kết quả là <span class="k">danh sách liên kết</span>.']),
    quiz: [
      { q: 'Đâu là máy tìm kiếm?', o: ['Microsoft Word', 'Paint', 'Scratch', 'Google'], a: 3, why: 'Google là máy tìm kiếm phổ biến.' },
      { q: 'Kết quả của máy tìm kiếm là:', o: ['Một bức tranh', 'Danh sách các liên kết', 'Một tệp nhạc', 'Một tin nhắn'], a: 1, why: 'Máy tìm kiếm hiển thị danh sách liên kết đến trang web.' } ] },
  { id: 't3', name: 'Chọn từ khoá', tip: 'Từ khoá ngắn mà trúng – kết quả sẽ chuẩn!',
    html: S4Q(['Chọn <b>từ khoá</b> để tìm về vịnh Hạ Long.', ''],
      ['Từ khoá là gì?', 'Từ hoặc cụm từ liên quan đến nội dung cần tìm.'],
      ['Gõ "vịnh Hạ Long" hay một câu thật dài thì tốt hơn?', '"vịnh Hạ Long" – ngắn gọn, đúng trọng tâm.'],
      ['<b>Từ khoá</b>: từ liên quan đến nội dung tìm.', 'Từ khoá <b>ngắn gọn</b>, đúng trọng tâm.', 'Từ khoá tốt cho <span class="k">kết quả tốt</span>.']),
    quiz: [
      { q: 'Từ khoá là:', o: ['Mật khẩu máy tính', 'Từ liên quan đến nội dung cần tìm', 'Tên trình duyệt', 'Địa chỉ thư'], a: 1, why: 'Từ khoá là từ, cụm từ mô tả nội dung cần tìm.' },
      { q: 'Tìm hiểu về loài voi, từ khoá tốt nhất là:', o: ['con vật', 'động vật trên trái đất', 'voi châu Á', 'xin chào'], a: 2, why: 'Từ khoá ngắn gọn, đúng trọng tâm giúp tìm chính xác.' } ] },
  { id: 't4', name: 'Mẹo tìm kiếm', tip: 'Đặt từ khoá trong ngoặc kép để tìm đúng cụm từ!',
    html: S4Q(['Thử tìm "Hồ Hoàn Kiếm" <b>có và không có</b> ngoặc kép.', ''],
      ['Ngoặc kép, mục Hình ảnh giúp gì khi tìm?', 'Ngoặc kép tìm đúng cụm từ; chọn Hình ảnh, Video khi cần.'],
      ['Kết quả tìm được có luôn đúng không?', 'Không. Cần đọc kĩ, so sánh, chọn nguồn tin cậy.'],
      ['Dùng <b>"…"</b> để tìm chính xác cụm từ.', 'Chọn mục <b>Hình ảnh, Video</b> khi cần.', 'Chọn <span class="k">nguồn đáng tin cậy</span>.']),
    quiz: [
      { q: 'Muốn tìm đúng cụm từ "Hồ Hoàn Kiếm", em đặt từ khoá trong:', o: ['Dấu ngoặc kép', 'Dấu chấm', 'Dấu phẩy', 'Dấu hỏi'], a: 0, why: 'Ngoặc kép giúp tìm chính xác cả cụm từ.' },
      { q: 'Muốn tìm tranh ảnh, sau khi tìm em chọn mục:', o: ['Tin tức', 'Bản đồ', 'Mua sắm', 'Hình ảnh'], a: 3, why: 'Mục Hình ảnh chỉ hiển thị kết quả là hình ảnh.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn nhanh: máy tìm kiếm – từ khoá – chọn kết quả!',
    html: S4Q(['Tóm tắt bài học bằng <b>3 ý chính</b>.', ''],
      ['Tìm thông tin trên Internet bằng công cụ nào?', 'Máy tìm kiếm như Google, Bing, Cốc Cốc.'],
      ['Làm sao để tìm chính xác hơn?', 'Từ khoá ngắn gọn, dùng ngoặc kép, chọn nguồn tin cậy.'],
      ['Dùng <b>máy tìm kiếm</b>.', 'Chọn <b>từ khoá</b> phù hợp, dùng "…".', 'Kiểm tra <span class="k">nguồn tin</span>.']),
    quiz: [
      { q: 'Thứ tự đúng khi tìm kiếm là:', o: ['Gõ từ khoá → mở máy tìm kiếm', 'Mở máy tìm kiếm → gõ từ khoá → Enter', 'Nhấn Enter → mở trình duyệt', 'Tắt máy → gõ từ khoá'], a: 1, why: 'Mở máy tìm kiếm, gõ từ khoá rồi nhấn Enter.' },
      { q: 'Câu nào đúng?', o: ['Mọi kết quả đều đúng', 'Không cần từ khoá', 'Cần chọn nguồn tin tin cậy', 'Chỉ có một máy tìm kiếm'], a: 2, why: 'Thông tin trên mạng có thể sai, cần chọn nguồn tin cậy.' } ] },
];

const KEY = [
  'Internet có<br><b>rất nhiều</b> thông tin.',
  '<b>Máy tìm kiếm</b>:<br>Google, Bing…',
  '<b>Từ khoá</b> ngắn,<br>đúng trọng tâm.',
  '<b>Ngoặc kép</b>:<br>đúng cụm từ.',
  'Chọn nguồn<br><b>tin cậy</b>.',
];
