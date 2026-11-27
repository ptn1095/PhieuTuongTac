/* ===== BÀI 16: CHƯƠNG TRÌNH CỦA EM ===== */
const META = { key: 'bai16', num: 16, theme: 'lauda', ic: '🏆', cd: 6, en: 'Chương trình của em',
  title: 'Bài 16. Chương trình của em', big: 'Chương trình<br>của em',
  st2: 'Chủ đề 6 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Chào mừng nhà lập trình nhí đến lâu đài! Hôm nay em tạo chương trình của riêng mình!',
  cert: 'Tin học 4 – Bài 16. Chương trình của em', file: 'Tin4_Bai16', pass: 8 };

const COVER = () => svgC(`${stageB(50, 40, 300, 220, `${sprite(150, 200, .5)}${sprite(270, 200, .5)}${star(200, 90, 26, '#FFD60A')}`)}${sblock(370, 70, 200, '#FFBF00', 'lặp lại 10', 20)}${sblock(370, 130, 200, '#9966FF', 'đổi trang phục', 18)}${star(560, 320, 14, '#FFD60A')}`);
const ILL_T = {
  t1: () => svg(`${mindmap(300, 150, 1, 'Dự án')}${pillS(80, 320, 440, 54, '#8338EC', 'Lên ý tưởng dự án', 26)}`),
  t2: () => svg(`${scwrap(60, 40, 300, 170, '#FFBF00', 'lặp lại 10 lần', 22)}${sblock(90, 92, 250, '#4C97FF', 'đi 10 bước', 20)}${sprite(470, 140, .7)}${arc(470, 140, 100, 200, 330, 1, '#FF006E')}
    ${pillS(40, 320, 520, 54, '#FFBF00', 'Lặp lại: làm nhiều lần', 26, 0, O)}`),
  t3: () => svg(`${sprite(130, 160, .8)}${arr(210, 160, 280, 160, O, 7)}<g transform="translate(360 160) scale(-1 1)">${sprite(0, 0, .8)}</g>${sblock(380, 60, 200, '#9966FF', 'trang phục kế tiếp', 16)}${note(520, 230, '#CF63CF', .9)}
    ${pillS(40, 320, 520, 54, '#9966FF', 'Đổi trang phục, thêm âm thanh', 22)}`),
  t4: () => svg(`${kid(110, 160, 1)}${stageB(200, 40, 260, 200, `${sprite(330, 180, .5)}`)}${person(520, 170, .8, '#2DA44E')}${bubble(380, 250, 200, 50, '#FFD60A', 'Hay quá!', 22)}
    ${pillS(40, 330, 520, 50, '#2DA44E', 'Giới thiệu sản phẩm cho bạn', 24)}`),
  t5: () => svg(`${vflow([['#8338EC', 'Lên ý tưởng'], ['#FFBF00', 'Lập trình, lặp lại'], ['#2DA44E', 'Chia sẻ sản phẩm']], 150, 40, 300, 110, 26)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Lên ý tưởng dự án', tip: 'Em là nhà lập trình – nghĩ thật sáng tạo nhé!',
    html: S4Q(['Chọn một <b>chủ đề</b> cho chương trình của em.', 'Gợi ý: chú cá bơi, con mèo nhảy múa, quả bóng nảy…'],
      ['Ý tưởng của em gồm những gì?', '<b>Nhân vật</b> nào, <b>phông nền</b> gì, nhân vật <b>làm gì</b>.'],
      ['Vì sao cần lên kế hoạch?', 'Để biết <b>các bước</b> và <b>các lệnh</b> cần dùng.'],
      ['Chọn <span class="k">chủ đề</span> em thích.', 'Xác định <b>nhân vật, phông nền</b>.', 'Lên <b>kế hoạch</b> các bước.']),
    quiz: [
      { q: 'Lên ý tưởng chương trình, em cần xác định:', o: ['Nhân vật, phông nền, hoạt động', 'Giá máy tính', 'Tên bạn bè', 'Màu bàn phím'], a: 0, why: 'Ý tưởng gồm nhân vật, phông nền và hoạt động.' },
      { q: 'Lập kế hoạch trước giúp em:', o: ['Rối hơn', 'Biết cần các bước, lệnh nào', 'Tốn thời gian vô ích', 'Không cần lập trình'], a: 1, why: 'Kế hoạch giúp lập trình mạch lạc.' } ] },
  { id: 't2', name: 'Lệnh lặp lại', tip: 'Muốn làm nhiều lần? Dùng khối lặp cho gọn!',
    html: S4Q(['Cho nhân vật <b>đi 10 bước, 10 lần</b> mà không ghép 10 lệnh.', ''],
      ['Dùng lệnh nào để làm nhiều lần?', 'Khối “<b>lặp lại 10</b>” hoặc “<b>liên tục</b>” (nhóm Điều khiển).'],
      ['Đặt lệnh cần lặp ở đâu?', 'Đặt <b>bên trong</b> khối lặp.'],
      ['<span class="k">Lặp lại</span>: làm nhiều lần.', 'Lệnh lặp đặt <b>bên trong</b> khối.', 'Chương trình <b>ngắn gọn</b> hơn.']),
    quiz: [
      { q: 'Khối “lặp lại 10” thuộc nhóm lệnh:', o: ['Chuyển động', 'Âm thanh', 'Điều khiển', 'Hiển thị'], a: 2, why: 'Khối lặp thuộc nhóm Điều khiển.' },
      { q: 'Dùng khối lặp giúp chương trình:', o: ['Dài hơn', 'Chạy sai', 'Không chạy', 'Ngắn gọn hơn'], a: 3, why: 'Lặp lại giúp không phải ghép lệnh nhiều lần.' } ] },
  { id: 't3', name: 'Làm nhân vật sinh động', tip: 'Đổi trang phục liên tục – nhân vật như đang đi thật!',
    html: S4Q(['Làm cho nhân vật trông như <b>đang bước đi</b> và phát ra <b>âm thanh</b>.', ''],
      ['Lệnh nào giúp nhân vật chuyển động như thật?', '“<b>trang phục kế tiếp</b>” (nhóm Hiển thị) đặt trong khối lặp.'],
      ['Thêm âm thanh bằng lệnh nào?', '“<b>phát âm thanh</b>” (nhóm Âm thanh).'],
      ['<span class="k">Trang phục kế tiếp</span>: cử động.', '<b>Phát âm thanh</b>: thêm tiếng.', 'Kết hợp <b>lặp lại</b> cho sinh động.']),
    quiz: [
      { q: 'Lệnh “trang phục kế tiếp” thuộc nhóm:', o: ['Hiển thị', 'Chuyển động', 'Sự kiện', 'Âm thanh'], a: 0, why: 'Thay trang phục thuộc nhóm Hiển thị.' },
      { q: 'Để nhân vật kêu “Meo”, em dùng lệnh nhóm:', o: ['Chuyển động', 'Âm thanh', 'Điều khiển', 'Sự kiện'], a: 1, why: 'Phát âm thanh thuộc nhóm Âm thanh.' } ] },
  { id: 't4', name: 'Chia sẻ sản phẩm', tip: 'Giới thiệu tự tin – lắng nghe góp ý của bạn!',
    html: S4Q(['Giới thiệu <b>chương trình của em</b> cho cả lớp.', ''],
      ['Khi giới thiệu, em nói gì?', 'Tên chương trình, <b>ý tưởng</b>, nhân vật làm gì, điều em <b>thích nhất</b>.'],
      ['Bạn góp ý, em làm gì?', '<b>Lắng nghe</b>, cảm ơn và <b>sửa</b> cho chương trình hay hơn.'],
      ['Giới thiệu <span class="k">tự tin</span>.', 'Nêu <b>ý tưởng</b> của em.', 'Lắng nghe, <b>hoàn thiện</b>.']),
    quiz: [
      { q: 'Khi bạn góp ý cho chương trình của em, em nên:', o: ['Cáu giận', 'Xoá chương trình', 'Lắng nghe và sửa cho hay hơn', 'Không trả lời'], a: 2, why: 'Lắng nghe góp ý giúp sản phẩm tốt hơn.' },
      { q: 'Khi giới thiệu chương trình, em nên nói:', o: ['Giá tiền máy tính', 'Không cần nói gì', 'Chuyện không liên quan', 'Ý tưởng và hoạt động của nhân vật'], a: 3, why: 'Nêu ý tưởng giúp các bạn hiểu chương trình.' } ] },
  { id: 't5', name: 'Nhà lập trình nhí', tip: 'Ôn lại: ý tưởng – lặp lại – sinh động – chia sẻ!',
    html: S4Q(['Tự đánh giá <b>chương trình của em</b>.', ''],
      ['Chương trình tốt cần có gì?', 'Đúng <b>ý tưởng</b>, chạy <b>không lỗi</b>, nhân vật sinh động.'],
      ['Em học được gì từ chủ đề này?', 'Biết <b>lập trình</b> Scratch để <b>diễn tả ý tưởng</b> của mình.'],
      ['Đúng <b>ý tưởng</b>, không lỗi.', 'Dùng <span class="k">lặp lại</span> hợp lí.', 'Sáng tạo, <b>chia sẻ</b>.']),
    quiz: [
      { q: 'Muốn nhân vật bơi liên tục không dừng, em dùng khối:', o: ['liên tục', 'đi 10 bước', 'nói Xin chào', 'phát âm thanh'], a: 0, why: 'Khối “liên tục” lặp lại mãi mãi.' },
      { q: 'Một chương trình tốt là chương trình:', o: ['Có nhiều lỗi', 'Đúng ý tưởng, chạy không lỗi', 'Không có nhân vật', 'Không chạy được'], a: 1, why: 'Chương trình tốt thể hiện đúng ý tưởng và chạy đúng.' } ] },
];

const KEY = [
  'Ý tưởng,<br><b>kế hoạch</b>.',
  'Khối<br><b>lặp lại</b>.',
  'Trang phục,<br><b>âm thanh</b>.',
  'Giới thiệu<br><b>tự tin</b>.',
  'Nhà lập trình<br><b>sáng tạo</b>.',
];
