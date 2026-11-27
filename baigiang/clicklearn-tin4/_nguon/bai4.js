/* ===== BÀI 4: TÌM KIẾM THÔNG TIN TRÊN INTERNET ===== */
const META = { key: 'bai4', num: 4, theme: 'samac', ic: '🔍', cd: 3, en: 'Tìm kiếm thông tin trên Internet',
  title: 'Bài 4. Tìm kiếm thông tin trên Internet', big: 'Tìm kiếm<br>thông tin<br>trên Internet',
  st2: 'Chủ đề 3 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Nhà thám hiểm sa mạc ơi, cầm kính lúp lên – đi tìm thông tin nào!',
  cert: 'Tin học 4 – Bài 4. Tìm kiếm thông tin trên Internet', file: 'Tin4_Bai4', pass: 8 };

const sbox = (x, y, w, t) => `<rect x="${x}" y="${y}" width="${w}" height="52" rx="26" fill="#fff" ${ST}/><text x="${x + 24}" y="${y + 35}" font-size="22" fill="${O}" ${F}>${t}</text><circle cx="${x + w - 30}" cy="${y + 24}" r="11" fill="none" stroke="#1982C4" stroke-width="5"/><line x1="${x + w - 22}" y1="${y + 32}" x2="${x + w - 14}" y2="${y + 40}" stroke="#1982C4" stroke-width="5" stroke-linecap="round"/>`;
const COVER = () => svgC(`${browser(40, 30, 380, 240, `${sbox(70, 120, 320, 'con voi ăn gì')}`, 'google.com')}${mag(500, 160, 1)}${star(560, 320, 14, '#FFD60A')}`);
const ILL_T = {
  t1: () => svg(`${browser(40, 30, 520, 250, `${txt(300, 140, 'Google', 50, '#1982C4')}${sbox(110, 170, 380, '')}`, 'www.google.com')}
    ${pillS(80, 320, 440, 54, '#1982C4', 'Máy tìm kiếm', 26)}`),
  t2: () => svg(`${sbox(60, 50, 480, 'con voi ăn gì')}${arr(300, 115, 300, 160, O, 7)}${pillS(60, 170, 220, 50, '#FF006E', 'con voi', 24)}${pillS(320, 170, 220, 50, '#FF7F11', 'ăn gì', 24)}${pillS(70, 320, 460, 54, '#8338EC', 'Từ khoá: ngắn, đúng ý', 26)}`),
  t3: () => svg(`${browser(40, 20, 520, 290, `${[0, 1, 2].map(i => `<text x="70" y="${110 + i*62}" font-size="22" fill="#1982C4" ${F} text-decoration="underline">${['Voi ăn cỏ, lá cây…', 'Thế giới động vật', 'Voi châu Á'][i]}</text><rect x="70" y="${120 + i*62}" width="${380 - i*40}" height="8" rx="4" fill="#ADB5BD"/>`).join('')}`, 'Kết quả tìm kiếm')}
    ${pillS(80, 330, 440, 50, '#2DA44E', 'Danh sách kết quả', 26)}`),
  t4: () => svg(`${tlist([[1, '#2DA44E', 'Trang web tin cậy'], [1, '#1982C4', 'Đúng điều cần tìm'], [0, '#E5383B', 'Quảng cáo lạ'], [0, '#FF7F11', 'Không phù hợp lứa tuổi']], 60, 92, 24)}`),
  t5: () => svg(`${vflow([['#1982C4', 'Mở máy tìm kiếm'], ['#FF7F11', 'Gõ từ khoá, Enter'], ['#2DA44E', 'Chọn kết quả phù hợp']], 140, 40, 320, 110, 24)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Máy tìm kiếm', tip: 'Máy tìm kiếm như người thủ thư siêu tốc của Internet!',
    html: S4Q(['Em muốn biết <b>con voi ăn gì</b>. Tìm trên Internet bằng cách nào?', ''],
      ['Máy tìm kiếm là gì?', 'Là trang web giúp <b>tìm thông tin</b> trên Internet, ví dụ <b>Google</b>.'],
      ['Mở máy tìm kiếm thế nào?', 'Mở trình duyệt, gõ địa chỉ <b>google.com</b> rồi nhấn Enter.'],
      ['<span class="k">Máy tìm kiếm</span> giúp tìm thông tin.', 'Ví dụ: <b>Google</b>, Bing.', 'Mở bằng <b>trình duyệt web</b>.']),
    quiz: [
      { q: 'Trang web nào là máy tìm kiếm?', o: ['Paint', 'Google', 'Word', 'PowerPoint'], a: 1, why: 'Google là máy tìm kiếm phổ biến.' },
      { q: 'Máy tìm kiếm giúp em:', o: ['Tìm thông tin trên Internet', 'Vẽ tranh', 'Gõ phím nhanh', 'In tài liệu'], a: 0, why: 'Máy tìm kiếm giúp tìm thông tin trên Internet.' } ] },
  { id: 't2', name: 'Từ khoá tìm kiếm', tip: 'Từ khoá ngắn gọn, đúng ý – tìm trúng ngay!',
    html: S4Q(['Chọn <b>từ khoá</b> để tìm “thức ăn của con voi”.', 'Gợi ý: chọn từ quan trọng nhất.'],
      ['Từ khoá là gì?', 'Là từ, cụm từ em gõ vào ô tìm kiếm, nói lên <b>điều cần tìm</b>.'],
      ['Từ khoá tốt là từ khoá thế nào?', '<b>Ngắn gọn</b>, <b>đúng ý</b>, ví dụ: “con voi ăn gì”.'],
      ['<span class="k">Từ khoá</span>: điều em cần tìm.', 'Ngắn gọn, <b>đúng ý</b>.', 'Gõ xong nhấn <b>Enter</b>.']),
    quiz: [
      { q: 'Từ khoá nào phù hợp nhất để tìm thức ăn của gấu trúc?', o: ['gấu', 'thức ăn của gấu trúc', 'con vật', 'ăn'], a: 1, why: 'Từ khoá đúng ý, đủ rõ giúp tìm chính xác.' },
      { q: 'Gõ xong từ khoá, em nhấn phím:', o: ['Delete', 'Esc', 'Phím cách', 'Enter'], a: 3, why: 'Nhấn Enter để bắt đầu tìm kiếm.' } ] },
  { id: 't3', name: 'Đọc kết quả tìm kiếm', tip: 'Đọc tiêu đề và mô tả trước khi nháy vào!',
    html: S4Q(['Quan sát trang <b>kết quả tìm kiếm</b>, chọn kết quả em muốn đọc.', ''],
      ['Kết quả tìm kiếm hiện ra thế nào?', 'Là <b>danh sách</b> các trang web: tiêu đề màu xanh, mô tả ngắn.'],
      ['Muốn xem một kết quả, em làm gì?', 'Nháy vào <b>tiêu đề</b> (siêu liên kết) của kết quả đó.'],
      ['Kết quả là <b>danh sách</b> trang web.', 'Đọc <span class="k">tiêu đề, mô tả</span> trước.', 'Nháy tiêu đề để <b>mở</b>.']),
    quiz: [
      { q: 'Kết quả tìm kiếm hiện ra dưới dạng:', o: ['Một bức tranh', 'Một bài hát', 'Danh sách các trang web', 'Một trò chơi'], a: 2, why: 'Máy tìm kiếm trả về danh sách trang web.' },
      { q: 'Để mở một kết quả tìm kiếm, em nháy vào:', o: ['Tiêu đề của kết quả', 'Thanh cuộn', 'Nút đóng', 'Nền trắng'], a: 0, why: 'Tiêu đề là siêu liên kết tới trang web.' } ] },
  { id: 't4', name: 'Chọn thông tin phù hợp', tip: 'Không phải kết quả nào cũng đúng – chọn khéo nhé!',
    html: S4Q(['Trong các kết quả, chọn trang nào để <b>tin cậy</b>?', ''],
      ['Kết quả nào nên chọn?', 'Trang <b>đúng điều cần tìm</b>, của trang tin cậy, phù hợp lứa tuổi.'],
      ['Kết quả nào không nên nháy?', '<b>Quảng cáo</b> lạ, trang không phù hợp lứa tuổi.'],
      ['Chọn kết quả <span class="k">đúng, tin cậy</span>.', '<b>Bỏ qua</b> quảng cáo lạ.', 'Hỏi <b>người lớn</b> khi chưa chắc.']),
    quiz: [
      { q: 'Kết quả nào em KHÔNG nên nháy vào?', o: ['Trang của nhà xuất bản sách', 'Trang về động vật', 'Trang thiếu nhi', 'Quảng cáo “Trúng thưởng lớn”'], a: 3, why: 'Quảng cáo lạ dễ là lừa đảo.' },
      { q: 'Khi không chắc thông tin có đúng không, em nên:', o: ['Hỏi thầy cô, bố mẹ', 'Tin ngay', 'Chia sẻ cho mọi người', 'Bỏ học'], a: 0, why: 'Người lớn giúp em kiểm tra thông tin.' } ] },
  { id: 't5', name: 'Nhà thám hiểm thông tin', tip: 'Ôn lại: máy tìm kiếm – từ khoá – chọn kết quả!',
    html: S4Q(['Tìm thông tin “<b>Vịnh Hạ Long ở đâu</b>” theo các bước đã học.', ''],
      ['Các bước tìm kiếm là gì?', 'Mở <b>máy tìm kiếm</b> → gõ <b>từ khoá</b> → Enter → <b>chọn kết quả</b>.'],
      ['Em tìm được câu trả lời gì?', 'Vịnh Hạ Long ở tỉnh <b>Quảng Ninh</b>.'],
      ['Mở <b>máy tìm kiếm</b>.', 'Gõ <span class="k">từ khoá</span>, nhấn Enter.', 'Chọn kết quả <b>phù hợp</b>.']),
    quiz: [
      { q: 'Bước đầu tiên khi tìm kiếm thông tin là:', o: ['Chọn kết quả', 'Mở máy tìm kiếm', 'Nhấn Enter', 'Đọc trang web'], a: 1, why: 'Phải mở máy tìm kiếm trước.' },
      { q: 'Thứ tự đúng:', o: ['Enter – gõ từ khoá – mở Google', 'Chọn kết quả – Enter', 'Mở Google – gõ từ khoá – Enter – chọn kết quả', 'Gõ – tắt máy'], a: 2, why: 'Mở máy tìm kiếm, gõ từ khoá, Enter rồi chọn kết quả.' } ] },
];

const KEY = [
  'Máy tìm kiếm:<br><b>Google</b>.',
  'Từ khoá<br><b>ngắn, đúng ý</b>.',
  'Kết quả là<br><b>danh sách</b>.',
  'Chọn kết quả<br><b>tin cậy</b>.',
  'Mở – gõ – Enter<br>– <b>chọn</b>.',
];
