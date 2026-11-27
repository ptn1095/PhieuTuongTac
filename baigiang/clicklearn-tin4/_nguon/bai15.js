/* ===== BÀI 15: TẠO CHƯƠNG TRÌNH MÁY TÍNH ĐỂ DIỄN TẢ Ý TƯỞNG ===== */
const META = { key: 'bai15', num: 15, theme: 'tuyet', ic: '💡', cd: 6, en: 'Chương trình diễn tả ý tưởng',
  title: 'Bài 15. Tạo chương trình máy tính để diễn tả ý tưởng', big: 'Chương trình<br>diễn tả<br>ý tưởng',
  st2: 'Chủ đề 6 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Giữa trời tuyết, ta biến ý tưởng thành chương trình Scratch nhé!',
  cert: 'Tin học 4 – Bài 15. Chương trình diễn tả ý tưởng', file: 'Tin4_Bai15', pass: 8 };

const COVER = () => svgC(`${bulb(110, 160, 1)}${arr(190, 160, 250, 160, O, 7)}${sblock(270, 80, 270, '#FFAB19', 'khi bấm cờ xanh', 20)}${sblock(270, 136, 270, '#4C97FF', 'lướt tới vị trí…', 20)}${sblock(270, 192, 270, '#9966FF', 'nói Chúc mừng!', 20)}${star(560, 320, 14, '#FFD60A')}`);
const ILL_T = {
  t1: () => svg(`${bulb(120, 140, 1)}${bubble(220, 50, 340, 80, '#FFD60A', 'Mèo đi chơi, gặp bạn…', 22)}${sprite(330, 230, .7)}${sprite(470, 230, .7)}
    ${pillS(40, 330, 520, 54, '#FF7F11', 'Ý tưởng → kịch bản', 26)}`),
  t2: () => svg(`${stageB(40, 30, 300, 230, `${tree(120, 170, .5)}${sun(280, 80, 26)}${sprite(220, 200, .5)}`)}${pillS(360, 60, 210, 50, '#1982C4', 'Chọn phông nền', 20)}${pillS(360, 140, 210, 50, '#2DA44E', 'Chọn nhân vật', 20)}
    ${pillS(40, 320, 520, 54, '#8338EC', 'Chuẩn bị sân khấu', 26)}`),
  t3: () => svg(`${sblock(60, 40, 300, '#FFAB19', 'khi bấm vào cờ xanh', 22)}${sblock(60, 100, 300, '#4C97FF', 'đi 50 bước', 22)}${sblock(60, 160, 300, '#9966FF', 'nói Xin chào! 2 giây', 20)}${sblock(60, 220, 300, '#CF63CF', 'phát âm thanh Meo', 20)}
    ${sprite(470, 170, .6)}${pillS(40, 320, 520, 54, '#FFAB19', 'Ghép lệnh theo kịch bản', 26, 0, O)}`),
  t4: () => svg(`${flag(120, 140, 1.4)}${arr(200, 140, 260, 140, O, 7)}${stageB(280, 40, 280, 220, `${sprite(420, 180, .6)}`)}
    ${pillS(20, 320, 270, 50, '#2DA44E', 'Chạy thử', 24)}${pillS(310, 320, 270, 50, '#1982C4', 'Lưu về máy', 24)}`),
  t5: () => svg(`${vflow([['#FF7F11', 'Ý tưởng, kịch bản'], ['#8338EC', 'Phông nền, nhân vật'], ['#2DA44E', 'Ghép lệnh, chạy, lưu']], 140, 40, 320, 110, 24)}${star(60, 60, 14, '#FFD60A')}`),
};
function flag(x, y, s = 1) { return G(x, y, s, `<line x1="0" y1="-30" x2="0" y2="34" stroke="${O}" stroke-width="7" stroke-linecap="round"/><path d="M0 -30 Q20 -40 40 -30 Q60 -20 76 -28 V10 Q60 18 40 8 Q20 -2 0 8Z" fill="#2DA44E" ${ST}/>`); }

const TOPICS = [
  { id: 't1', name: 'Từ ý tưởng đến kịch bản', tip: 'Nghĩ câu chuyện trước, lập trình sau!',
    html: S4Q(['Nghĩ một <b>câu chuyện ngắn</b> em muốn kể bằng Scratch.', 'Gợi ý: chú mèo đi dạo gặp bạn.'],
      ['Kịch bản là gì?', 'Là bản mô tả <b>nhân vật</b> làm gì, nói gì, <b>theo thứ tự</b>.'],
      ['Vì sao cần viết kịch bản trước?', 'Để biết cần <b>nhân vật, phông nền, lệnh</b> nào, không bị rối.'],
      ['Có <span class="k">ý tưởng</span> trước.', 'Viết <b>kịch bản</b>: ai, làm gì.', 'Rồi mới <b>lập trình</b>.']),
    quiz: [
      { q: 'Trước khi lập trình, em nên:', o: ['Ghép lệnh ngẫu nhiên', 'Nghĩ ý tưởng và kịch bản', 'Xoá nhân vật', 'Tắt Scratch'], a: 1, why: 'Có kịch bản giúp lập trình rõ ràng.' },
      { q: 'Kịch bản mô tả:', o: ['Nhân vật làm gì, nói gì theo thứ tự', 'Màu của máy tính', 'Tên phần mềm', 'Giá tiền'], a: 0, why: 'Kịch bản cho biết diễn biến câu chuyện.' } ] },
  { id: 't2', name: 'Phông nền và nhân vật', tip: 'Chọn khung cảnh đẹp và bạn diễn phù hợp!',
    html: S4Q(['Chọn <b>phông nền</b> công viên và thêm một <b>nhân vật</b> mới.', ''],
      ['Thêm phông nền ở đâu?', 'Nút <b>Chọn phông nền</b> ở góc dưới bên phải.'],
      ['Thêm nhân vật ở đâu?', 'Nút <b>Chọn một nhân vật</b> trong vùng nhân vật.'],
      ['Nút <span class="k">Chọn phông nền</span>.', 'Nút <b>Chọn một nhân vật</b>.', 'Chọn hợp với <b>kịch bản</b>.']),
    quiz: [
      { q: 'Để thay khung cảnh sân khấu, em chọn:', o: ['Nhân vật mới', 'Âm thanh', 'Phông nền', 'Lá cờ xanh'], a: 2, why: 'Phông nền là khung cảnh sân khấu.' },
      { q: 'Nút thêm nhân vật nằm ở:', o: ['Khu vực lệnh', 'Thanh tiêu đề', 'Vùng lập trình', 'Vùng nhân vật'], a: 3, why: 'Thêm nhân vật trong vùng nhân vật.' } ] },
  { id: 't3', name: 'Ghép lệnh theo kịch bản', tip: 'Mỗi câu trong kịch bản là một vài khối lệnh!',
    html: S4Q(['Ghép lệnh cho mèo: <b>đi tới</b>, <b>nói Xin chào</b>, <b>kêu Meo</b>.', ''],
      ['Lệnh đầu tiên thường là gì?', '“<b>khi bấm vào cờ xanh</b>” (nhóm Sự kiện).'],
      ['Các lệnh tiếp theo xếp thế nào?', 'Theo <b>đúng thứ tự</b> trong kịch bản, từ trên xuống dưới.'],
      ['Bắt đầu bằng <span class="k">khi bấm cờ xanh</span>.', 'Lệnh chạy <b>từ trên xuống</b>.', 'Đúng <b>thứ tự</b> kịch bản.']),
    quiz: [
      { q: 'Khối lệnh thường đặt đầu tiên của chương trình là:', o: ['đi 10 bước', 'khi bấm vào cờ xanh', 'nói Xin chào!', 'phát âm thanh'], a: 1, why: 'Lệnh sự kiện “khi bấm cờ xanh” khởi động chương trình.' },
      { q: 'Các lệnh trong chương trình được thực hiện:', o: ['Từ trên xuống dưới', 'Từ dưới lên', 'Ngẫu nhiên', 'Cùng một lúc'], a: 0, why: 'Lệnh chạy lần lượt từ trên xuống.' } ] },
  { id: 't4', name: 'Chạy thử và lưu', tip: 'Chạy thử, sửa lỗi, rồi lưu lại nhé!',
    html: S4Q(['Chạy chương trình và <b>lưu</b> lại với tên <b>Meo_di_choi</b>.', ''],
      ['Chạy thử thấy chưa đúng ý thì làm gì?', '<b>Sửa</b> lệnh (đổi số bước, câu nói) rồi chạy lại.'],
      ['Lưu chương trình thế nào?', '<b>Tệp</b> → <b>Lưu về máy tính của bạn</b>, đặt tên → Save.'],
      ['Nháy <b>cờ xanh</b> chạy thử.', 'Chưa đúng thì <span class="k">sửa lệnh</span>.', 'Tệp → <b>Lưu về máy tính</b>.']),
    quiz: [
      { q: 'Chạy thử thấy nhân vật đi quá xa, em nên:', o: ['Xoá cả chương trình', 'Tắt máy', 'Giảm số bước trong lệnh đi', 'Đổi phông nền'], a: 2, why: 'Sửa số bước cho phù hợp ý tưởng.' },
      { q: 'Để lưu chương trình Scratch, em chọn:', o: ['Tệp → Mở từ máy tính', 'Chỉnh sửa', 'Hướng dẫn', 'Tệp → Lưu về máy tính của bạn'], a: 3, why: 'Lưu về máy tính để giữ chương trình.' } ] },
  { id: 't5', name: 'Ý tưởng thành chương trình', tip: 'Ôn lại: ý tưởng – kịch bản – lập trình – chạy – lưu!',
    html: S4Q(['Nêu các bước tạo chương trình <b>diễn tả ý tưởng</b>.', ''],
      ['Các bước là gì?', 'Ý tưởng → <b>kịch bản</b> → phông nền, nhân vật → <b>ghép lệnh</b> → chạy thử → lưu.'],
      ['Chương trình giúp gì cho ý tưởng của em?', 'Biến ý tưởng thành <b>câu chuyện, hoạt hình</b> sinh động.'],
      ['Ý tưởng → <span class="k">kịch bản</span>.', 'Ghép lệnh, <b>chạy thử, sửa</b>.', '<b>Lưu</b> sản phẩm.']),
    quiz: [
      { q: 'Bước cuối cùng sau khi chương trình chạy đúng là:', o: ['Lưu chương trình', 'Viết kịch bản', 'Chọn nhân vật', 'Nghĩ ý tưởng'], a: 0, why: 'Chạy đúng rồi thì lưu lại sản phẩm.' },
      { q: 'Lập trình Scratch giúp em:', o: ['Không cần suy nghĩ', 'Biến ý tưởng thành câu chuyện sinh động', 'Gõ chữ nhanh', 'Tìm kiếm Internet'], a: 1, why: 'Scratch giúp diễn tả ý tưởng sinh động.' } ] },
];

const KEY = [
  'Ý tưởng →<br><b>kịch bản</b>.',
  '<b>Phông nền</b>,<br>nhân vật.',
  'Ghép lệnh<br><b>đúng thứ tự</b>.',
  'Chạy thử, sửa,<br><b>lưu</b>.',
  'Ý tưởng thành<br><b>chương trình</b>.',
];
