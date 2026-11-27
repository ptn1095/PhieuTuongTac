/* ===== BÀI 6: SỬ DỤNG PHẦN MỀM KHI ĐƯỢC PHÉP ===== */
const META = { key: 'bai6', num: 6, theme: 'lauda', ic: '⚖️', cd: 4, en: 'Sử dụng phần mềm khi được phép',
  title: 'Bài 6. Sử dụng phần mềm khi được phép', big: 'Sử dụng<br>phần mềm<br>khi được phép',
  st2: 'Chủ đề 4 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Ở lâu đài, ai cũng tuân theo luật lệ – dùng phần mềm cũng vậy nhé!',
  cert: 'Tin học 4 – Bài 6. Sử dụng phần mềm khi được phép', file: 'Tin4_Bai6', pass: 8 };

const cr = (x, y, s = 1) => G(x, y, s, `<circle r="40" fill="#fff" ${ST}/><text x="0" y="17" text-anchor="middle" font-size="50" fill="${O}" ${F}>©</text>`);
const COVER = () => svgC(`${scales(150, 170, .9)}${cr(330, 150, 1.3)}${shieldI(480, 160, .9)}${star(560, 40, 14, '#FFD60A')}${pillS(180, 290, 260, 50, '#8338EC', 'Bản quyền', 24)}`);
const ILL_T = {
  t1: () => svg(`${person(130, 190, 1.1, '#1982C4')}${laptop(260, 80, .8, `${cr(120, 75, .9)}`)}
    ${pillS(40, 330, 520, 54, '#8338EC', 'Phần mềm có tác giả, bản quyền', 22)}`),
  t2: () => svg(`${pillS(40, 60, 240, 60, '#2DA44E', 'Miễn phí', 28)}${pillS(320, 60, 240, 60, '#FF7F11', 'Có phí', 28)}${tick(160, 200, 1.2)}${G(440, 200, 1, `<circle r="40" fill="#FFC300" ${ST}/>${txt(0, 14, '$', 40)}`)}
    ${pillS(40, 320, 520, 54, '#1982C4', 'Có phí: phải mua mới dùng', 24)}`),
  t3: () => svg(`${laptop(60, 70, .8, `${pillS(30, 50, 180, 40, '#E5383B', 'Bản lậu', 20)}`)}${cross(320, 120, 1.4)}${bug(480, 140, 1)}
    ${pillS(40, 320, 520, 54, '#E5383B', 'Không dùng phần mềm lậu', 26)}`),
  t4: () => svg(`${kid(120, 160, 1)}${bubble(200, 40, 260, 60, '#FFD60A', 'Con cài được không ạ?', 18)}${person(470, 200, 1.1, '#2DA44E')}
    ${pillS(40, 330, 520, 54, '#2DA44E', 'Xin phép trước khi cài', 26)}`),
  t5: () => svg(`${vflow([['#8338EC', 'Tôn trọng bản quyền'], ['#E5383B', 'Không dùng bản lậu'], ['#2DA44E', 'Xin phép người lớn']], 140, 40, 320, 110, 24)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Phần mềm có bản quyền', tip: 'Phần mềm do người viết ra, như cuốn sách có tác giả!',
    html: S4Q(['Ai làm ra các <b>phần mềm</b> em đang dùng?', ''],
      ['Phần mềm do ai tạo ra?', 'Do <b>người lập trình</b>, các công ty làm ra – họ là <b>tác giả</b>.'],
      ['Bản quyền phần mềm là gì?', 'Là <b>quyền của tác giả</b> với phần mềm của họ.'],
      ['Phần mềm có <span class="k">tác giả</span>.', 'Tác giả có <b>bản quyền</b>.', 'Cần <b>tôn trọng</b> bản quyền.']),
    quiz: [
      { q: 'Phần mềm máy tính do ai tạo ra?', o: ['Tự mọc ra', 'Người lập trình', 'Máy in', 'Con chuột'], a: 1, why: 'Người lập trình viết ra phần mềm.' },
      { q: 'Bản quyền phần mềm là quyền của:', o: ['Bất kì ai', 'Người dùng lậu', 'Tác giả phần mềm', 'Người bán máy tính'], a: 2, why: 'Bản quyền thuộc về tác giả.' } ] },
  { id: 't2', name: 'Miễn phí và có phí', tip: 'Có phần mềm cho dùng miễn phí, có phần mềm phải mua!',
    html: S4Q(['Phân biệt phần mềm <b>miễn phí</b> và phần mềm <b>có phí</b>.', ''],
      ['Phần mềm miễn phí là gì?', 'Là phần mềm tác giả cho phép <b>dùng không mất tiền</b>.'],
      ['Phần mềm có phí thì sao?', 'Phải <b>mua bản quyền</b> mới được dùng.'],
      ['Phần mềm <b>miễn phí</b>: dùng không mất tiền.', 'Phần mềm <span class="k">có phí</span>: phải mua.', 'Dùng đúng <b>điều kiện</b> của tác giả.']),
    quiz: [
      { q: 'Phần mềm có phí là phần mềm:', o: ['Phải mua mới được dùng', 'Ai cũng dùng miễn phí', 'Không có tác giả', 'Không dùng được'], a: 0, why: 'Phần mềm có phí cần mua bản quyền.' },
      { q: 'Phần mềm miễn phí là phần mềm:', o: ['Bị cấm dùng', 'Phần mềm lậu', 'Phải trả tiền', 'Tác giả cho phép dùng không mất tiền'], a: 3, why: 'Tác giả cho phép dùng miễn phí.' } ] },
  { id: 't3', name: 'Không dùng phần mềm lậu', tip: 'Phần mềm lậu có thể chứa virus làm hỏng máy!',
    html: S4Q(['Một bạn rủ em dùng <b>phần mềm bẻ khoá</b> (lậu). Em nghĩ sao?', ''],
      ['Phần mềm lậu là gì?', 'Là phần mềm có phí bị <b>sao chép trái phép</b>, không trả tiền tác giả.'],
      ['Dùng phần mềm lậu có hại gì?', '<b>Vi phạm</b> bản quyền, dễ nhiễm <b>virus</b>, hỏng máy, mất dữ liệu.'],
      ['Phần mềm lậu là <span class="k">vi phạm</span>.', 'Dễ có <b>virus</b>.', 'Em <b>không dùng</b> phần mềm lậu.']),
    quiz: [
      { q: 'Dùng phần mềm lậu có thể làm:', o: ['Máy chạy tốt hơn', 'Máy nhiễm virus, hỏng hóc', 'Tác giả vui hơn', 'Không sao cả'], a: 1, why: 'Phần mềm lậu dễ chứa virus.' },
      { q: 'Bạn rủ em cài trò chơi lậu. Em nên:', o: ['Cài ngay', 'Rủ thêm bạn', 'Mua giúp bạn', 'Từ chối, khuyên bạn không dùng'], a: 3, why: 'Không dùng phần mềm lậu vì vi phạm và nguy hiểm.' } ] },
  { id: 't4', name: 'Xin phép khi cài đặt', tip: 'Muốn cài phần mềm? Hỏi bố mẹ, thầy cô trước!',
    html: S4Q(['Em muốn cài một <b>trò chơi mới</b> vào máy tính ở nhà. Em làm gì?', ''],
      ['Em có nên tự cài đặt không?', '<b>Không</b>. Phải <b>xin phép</b> bố mẹ trước.'],
      ['Vì sao cần xin phép?', 'Người lớn giúp chọn phần mềm <b>an toàn</b>, <b>hợp pháp</b>, phù hợp.'],
      ['<span class="k">Xin phép</span> trước khi cài.', 'Chỉ dùng phần mềm <b>hợp pháp</b>.', 'Ở trường: <b>hỏi thầy cô</b>.']),
    quiz: [
      { q: 'Trước khi cài phần mềm lên máy tính ở trường, em cần:', o: ['Xin phép thầy cô', 'Tự cài nhanh', 'Xoá phần mềm cũ', 'Tắt máy'], a: 0, why: 'Cần thầy cô đồng ý mới được cài.' },
      { q: 'Người lớn giúp em chọn phần mềm:', o: ['Lậu, miễn phí', 'Có virus', 'An toàn, hợp pháp', 'Bất kì loại nào'], a: 2, why: 'Người lớn giúp chọn phần mềm an toàn, hợp pháp.' } ] },
  { id: 't5', name: 'Người dùng văn minh', tip: 'Ôn lại: bản quyền – không lậu – xin phép!',
    html: S4Q(['Nêu <b>3 điều</b> em làm để dùng phần mềm đúng luật.', ''],
      ['Em tôn trọng tác giả phần mềm thế nào?', 'Dùng phần mềm <b>miễn phí</b> hoặc <b>đã mua</b>, không dùng lậu.'],
      ['Khi cần phần mềm mới, em làm gì?', '<b>Hỏi</b> người lớn và chỉ cài khi <b>được phép</b>.'],
      ['Tôn trọng <b>bản quyền</b>.', '<span class="k">Không</span> dùng phần mềm lậu.', 'Chỉ cài khi <b>được phép</b>.']),
    quiz: [
      { q: 'Việc làm nào ĐÚNG?', o: ['Sao chép phần mềm có phí cho bạn', 'Dùng phần mềm miễn phí hoặc đã mua', 'Tải bản bẻ khoá', 'Tự ý cài ở trường'], a: 1, why: 'Dùng phần mềm hợp pháp là tôn trọng tác giả.' },
      { q: 'Tôn trọng bản quyền phần mềm là:', o: ['Không dùng phần mềm lậu', 'Dùng bản lậu cho rẻ', 'Phát tán phần mềm có phí', 'Xoá tên tác giả'], a: 0, why: 'Không dùng phần mềm lậu là tôn trọng bản quyền.' } ] },
];

const KEY = [
  'Phần mềm có<br><b>tác giả, bản quyền</b>.',
  'Miễn phí và<br><b>có phí</b>.',
  '<b>Không</b> dùng<br>phần mềm lậu.',
  '<b>Xin phép</b><br>trước khi cài.',
  'Dùng phần mềm<br><b>hợp pháp</b>.',
];
