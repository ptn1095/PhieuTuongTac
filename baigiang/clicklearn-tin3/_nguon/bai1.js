/* ===== BÀI 1: THÔNG TIN VÀ QUYẾT ĐỊNH ===== */
const META = { key: 'bai1', num: 1, theme: 'go', ic: '🚦', cd: 1, en: 'Thông tin và quyết định',
  title: 'Bài 1. Thông tin và quyết định', big: 'Thông tin<br>và quyết định',
  st2: 'Chủ đề 1 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Vào khu rừng gỗ tre, cùng tìm hiểu thông tin giúp em quyết định thế nào nhé!',
  cert: 'Tin học 3 – Bài 1. Thông tin và quyết định', file: 'Tin3_Bai1', pass: 8 };

const COVER = () => svgC(`${traffic(110, 170, .9, 0)}${arr(190, 170, 260, 170, O, 8)}${kid(330, 150, 1)}${hand(440, 100, .6, -20)}
  ${pillS(180, 290, 300, 54, '#E5383B', 'Đèn đỏ → Dừng lại', 26)}${star(560, 40, 14, '#FFD60A')}${star(40, 40, 12, '#FF006E')}`);
const ILL_T = {
  t1: () => svg(`${traffic(120, 190, .9, 0)}${arr(200, 170, 270, 170, O, 8)}${kid(360, 160, 1.1)}
    ${pillS(40, 340, 220, 50, '#E5383B', 'Thông tin', 24)}${pillS(330, 340, 230, 50, '#2DA44E', 'Quyết định', 24)}${star(560, 40, 14, '#FFD60A')}`),
  t2: () => svg(`${cloud(150, 110, 1, '#ADB5BD')}${rain(100, 160, 5)}${arr(260, 140, 330, 140, O, 8)}${umbrella(450, 150, 1)}
    ${pillS(30, 330, 260, 50, '#1982C4', 'Trời sắp mưa', 24)}${pillS(320, 330, 250, 50, '#FF006E', 'Mang ô', 24)}${star(560, 380, 12, '#FFD60A')}`),
  t3: () => svg(`${eye(130, 120, 1)}${ear(130, 270, .9)}${arr(220, 120, 300, 180, O, 7)}${arr(220, 270, 300, 210, O, 7)}
    ${pillS(320, 165, 250, 56, '#8338EC', 'Bộ não', 26)}${pillS(320, 300, 250, 50, '#2DA44E', 'Quyết định', 24)}${arr(445, 228, 445, 292, O, 7)}${star(40, 40, 12, '#FF006E')}`),
  t4: () => svg(`${clock(140, 140, 1.4)}${arr(240, 140, 310, 140, O, 8)}${kid(410, 150, 1, '#1982C4')}${book(500, 260, .5)}
    ${pillS(30, 330, 540, 54, '#FF7F11', 'Trống trường vang → vào lớp', 26)}${star(560, 40, 14, '#FFD60A')}`),
  t5: () => svg(`${vflow([['#E5383B', 'Nhận thông tin'], ['#8338EC', 'Suy nghĩ'], ['#2DA44E', 'Quyết định, hành động']], 150, 40, 300, 110, 26)}
    ${star(60, 60, 14, '#FFD60A')}${star(550, 360, 12, '#FF006E')}`),
};

const TOPICS = [
  { id: 't1', name: 'Thông tin quanh em', tip: 'Đèn đỏ, tiếng trống, mây đen… đều là thông tin đấy!',
    html: S4Q(['Kể những điều em <b>nhìn thấy, nghe thấy</b> trên đường đến trường.', 'Gợi ý: đèn giao thông, tiếng còi xe…'],
      ['Đèn đỏ cho em biết điều gì?', 'Đèn đỏ cho biết người đi đường phải <b>dừng lại</b>.'],
      ['Thông tin giúp ích gì cho em?', 'Giúp em biết việc cần làm và làm cho <b>đúng</b>.'],
      ['Những điều em biết được là <span class="k">thông tin</span>.', 'Em nhận thông tin bằng <b>mắt, tai</b>…', 'Thông tin giúp em <b>hiểu</b> mọi việc.']),
    quiz: [
      { q: 'Điều nào dưới đây là thông tin?', o: ['Đèn giao thông đang đỏ', 'Cái bàn', 'Cây bút', 'Viên phấn'], a: 0, why: 'Đèn đang đỏ cho em biết phải dừng lại – đó là thông tin.' },
      { q: 'Em nghe tiếng trống trường bằng giác quan nào?', o: ['Mắt', 'Mũi', 'Tai', 'Lưỡi'], a: 2, why: 'Âm thanh tiếng trống được em nghe bằng tai.' } ] },
  { id: 't2', name: 'Thông tin giúp em quyết định', tip: 'Thấy mây đen là biết mang ô ngay!',
    html: S4Q(['Trời nhiều <b>mây đen</b>, em sắp đi học. Em sẽ làm gì?', ''],
      ['Thông tin em nhận được là gì?', 'Trời có nhiều mây đen, <b>sắp mưa</b>.'],
      ['Em quyết định làm gì?', 'Em <b>mang ô</b> hoặc áo mưa khi đi học.'],
      ['Thông tin giúp em <span class="k">ra quyết định</span>.', 'Có thông tin → quyết định <b>đúng</b>.', 'Không có thông tin → dễ <b>sai</b>.']),
    quiz: [
      { q: 'Thấy trời nhiều mây đen, em nên quyết định thế nào?', o: ['Phơi quần áo', 'Mang ô khi ra ngoài', 'Đi tắm biển', 'Tưới cây'], a: 1, why: 'Mây đen báo sắp mưa nên cần mang ô.' },
      { q: 'Thông tin giúp em điều gì?', o: ['Ngủ ngon hơn', 'Ăn nhiều hơn', 'Chạy nhanh hơn', 'Ra quyết định đúng'], a: 3, why: 'Có thông tin, em biết nên làm gì cho đúng.' } ] },
  { id: 't3', name: 'Bộ não xử lí thông tin', tip: 'Mắt nhìn, tai nghe, bộ não suy nghĩ rồi quyết định!',
    html: S4Q(['Khi thấy đèn đỏ, bộ phận nào giúp em <b>quyết định</b> dừng lại?', ''],
      ['Mắt và tai làm nhiệm vụ gì?', '<b>Nhận</b> thông tin: nhìn thấy, nghe thấy.'],
      ['Bộ não làm nhiệm vụ gì?', '<b>Suy nghĩ</b> về thông tin rồi đưa ra quyết định.'],
      ['Giác quan <b>nhận</b> thông tin.', '<span class="k">Bộ não</span> suy nghĩ, quyết định.', 'Cơ thể <b>hành động</b> theo quyết định.']),
    quiz: [
      { q: 'Bộ phận nào giúp em suy nghĩ để quyết định?', o: ['Tay', 'Chân', 'Bộ não', 'Tóc'], a: 2, why: 'Bộ não xử lí thông tin và đưa ra quyết định.' },
      { q: 'Em nhìn thấy đèn xanh bằng:', o: ['Mắt', 'Tai', 'Mũi', 'Tay'], a: 0, why: 'Màu đèn là hình ảnh, em nhìn thấy bằng mắt.' } ] },
  { id: 't4', name: 'Quyết định ở trường, ở nhà', tip: 'Tiếng trống vang lên – cả lớp vào học!',
    html: S4Q(['Nghe <b>tiếng trống</b> vào lớp, em sẽ làm gì?', 'Gợi ý: nghĩ về giờ ra chơi.'],
      ['Thông tin ở đây là gì?', 'Tiếng trống báo <b>hết giờ ra chơi</b>.'],
      ['Ở nhà, chuông báo thức kêu thì em làm gì?', 'Em <b>thức dậy</b>, chuẩn bị đi học.'],
      ['Mỗi ngày em nhận <b>nhiều thông tin</b>.', 'Mỗi thông tin giúp em <span class="k">chọn việc làm</span>.', 'Hãy chú ý để quyết định <b>kịp thời</b>.']),
    quiz: [
      { q: 'Tiếng trống trường vang lên báo hết giờ ra chơi. Em sẽ:', o: ['Chạy ra cổng', 'Đi mua quà', 'Vào lớp học', 'Ngồi chơi tiếp'], a: 2, why: 'Hết giờ ra chơi thì em vào lớp.' },
      { q: 'Chuông báo thức reo vào buổi sáng, em nên:', o: ['Thức dậy', 'Tắt chuông ngủ tiếp', 'Bật ti vi', 'Khóc'], a: 0, why: 'Chuông báo thức cho biết đã đến giờ dậy.' } ] },
  { id: 't5', name: 'Nhận – nghĩ – làm', tip: 'Ôn lại: nhận thông tin, suy nghĩ, rồi hành động!',
    html: S4Q(['Nói lại <b>3 bước</b> từ thông tin đến hành động.', ''],
      ['Bước đầu tiên là gì?', 'Em <b>nhận thông tin</b> bằng giác quan.'],
      ['Sau khi suy nghĩ, em làm gì?', 'Em <b>quyết định</b> và hành động theo quyết định đó.'],
      ['<b>Nhận</b> thông tin.', '<b>Suy nghĩ</b> bằng bộ não.', '<span class="k">Quyết định</span> và hành động.']),
    quiz: [
      { q: 'Sắp xếp đúng: (1) quyết định (2) nhận thông tin (3) suy nghĩ', o: ['1 – 2 – 3', '3 – 1 – 2', '1 – 3 – 2', '2 – 3 – 1'], a: 3, why: 'Nhận thông tin → suy nghĩ → quyết định.' },
      { q: 'Câu nào ĐÚNG?', o: ['Thông tin không cần thiết', 'Thông tin giúp em quyết định', 'Chỉ người lớn cần thông tin', 'Thông tin chỉ có ở ti vi'], a: 1, why: 'Ai cũng cần thông tin để quyết định việc làm.' } ] },
];

const KEY = [
  'Điều em biết được<br>là <b>thông tin</b>.',
  'Thông tin giúp em<br><b>ra quyết định</b>.',
  'Giác quan nhận,<br><b>bộ não</b> quyết định.',
  'Tiếng trống → <b>vào lớp</b>.',
  'Nhận → nghĩ<br>→ <b>hành động</b>.',
];
