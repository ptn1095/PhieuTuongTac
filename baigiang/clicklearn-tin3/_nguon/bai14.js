/* ===== BÀI 14: EM THỰC HIỆN CÔNG VIỆC NHƯ THẾ NÀO? ===== */
const META = { key: 'bai14', num: 14, theme: 'mausac', ic: '🪜', cd: 6, en: 'Em thực hiện công việc như thế nào?',
  title: 'Bài 14. Em thực hiện công việc như thế nào?', big: 'Em làm việc<br>như thế nào?',
  st2: 'Chủ đề 6 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Mỗi công việc đều có các bước – cùng tô màu từng bước nhé!',
  cert: 'Tin học 3 – Bài 14. Em thực hiện công việc như thế nào?', file: 'Tin3_Bai14', pass: 8 };

const brush = (x, y, s = 1) => G(x, y, s, `<rect x="-10" y="-10" width="150" height="24" rx="12" fill="#3A8DFF" ${ST}/><rect x="96" y="-34" width="44" height="26" rx="6" fill="#fff" ${ST}/>${[104, 116, 128].map(d => `<line x1="${d}" y1="-34" x2="${d}" y2="-12" stroke="${O}" stroke-width="3"/>`).join('')}`);
const COVER = () => svgC(`${[1, 2, 3, 4].map(i => ball(90 + (i - 1)*140, 260 - (i - 1)*50, 40, ['#FF006E', '#FF7F11', '#2DA44E', '#1982C4'][i - 1], i, 36)).join('')}${kid(520, 70, .6)}${star(40, 40, 14, '#FFD60A')}`);
const ILL_T = {
  t1: () => svg(`${brush(100, 160, 1.2)}${G(380, 160, 1, `<rect x="-40" y="-40" width="80" height="110" rx="14" fill="#FF5DA2" ${ST}/><rect x="-30" y="-70" width="60" height="34" rx="10" fill="#fff" ${ST}/>`)}
    ${pillS(40, 320, 520, 54, '#FF006E', 'Đánh răng: làm theo các bước', 24)}${star(560, 40, 14, '#FFD60A')}`),
  t2: () => svg(`${vflow([['#FF006E', '1. Lấy kem đánh răng'], ['#FF7F11', '2. Chải răng'], ['#2DA44E', '3. Súc miệng']], 130, 30, 340, 100, 24)}
    ${pillS(110, 340, 380, 50, '#8338EC', 'Đúng thứ tự', 26)}`),
  t3: () => svg(`${[['#FF006E', 'Bước 1'], ['#FF7F11', 'Bước 2'], ['#2DA44E', 'Bước 3'], ['#1982C4', 'Bước 4']].map(([c, t], i) => `${pillS(30 + i*128, 270 - i*56, 115, 50, c, t, 20)}`).join('')}${kid(565, 50, .42)}
    ${pillS(40, 340, 520, 50, '#8338EC', 'Nhiệm vụ lớn = nhiều bước nhỏ', 22)}`),
  t4: () => svg(`${desk(150, 30, .8)}${pillS(40, 290, 160, 46, '#2DA44E', '1. Bật', 22)}${pillS(220, 290, 160, 46, '#1982C4', '2. Học', 22)}${pillS(400, 290, 160, 46, '#E5383B', '3. Tắt', 22)}
    ${pillS(110, 350, 380, 46, '#8338EC', 'Dùng máy tính cũng vậy', 22)}`),
  t5: () => svg(`${vflow([['#FF006E', 'Chia việc thành bước'], ['#FF7F11', 'Sắp xếp thứ tự'], ['#2DA44E', 'Làm lần lượt']], 140, 40, 320, 110, 24)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Công việc hằng ngày', tip: 'Đánh răng, rửa mặt… việc nào cũng có các bước!',
    html: S4Q(['Kể lại em <b>đánh răng</b> mỗi sáng như thế nào.', ''],
      ['Đánh răng gồm những việc nhỏ nào?', 'Lấy kem, <b>chải răng</b>, súc miệng, rửa bàn chải.'],
      ['Mỗi việc nhỏ gọi là gì?', 'Gọi là một <b>bước</b> của công việc.'],
      ['Mỗi công việc gồm <span class="k">nhiều bước</span>.', 'Mỗi bước là <b>một việc nhỏ</b>.', 'Làm đủ các bước → <b>xong việc</b>.']),
    quiz: [
      { q: 'Công việc “đánh răng” gồm:', o: ['Một bước duy nhất', 'Nhiều bước nhỏ', 'Không có bước nào', 'Chỉ súc miệng'], a: 1, why: 'Đánh răng gồm lấy kem, chải răng, súc miệng…' },
      { q: 'Mỗi việc nhỏ trong một công việc được gọi là:', o: ['Một bước', 'Một tệp', 'Một trang chiếu', 'Một thư mục'], a: 0, why: 'Mỗi việc nhỏ là một bước của công việc.' } ] },
  { id: 't2', name: 'Làm theo thứ tự', tip: 'Súc miệng trước khi chải răng? Ngược quá rồi!',
    html: S4Q(['Sắp xếp các bước đánh răng cho <b>đúng thứ tự</b>.', ''],
      ['Thứ tự đúng là gì?', 'Lấy kem → <b>chải răng</b> → súc miệng.'],
      ['Làm sai thứ tự thì sao?', 'Công việc <b>không hoàn thành</b> hoặc kết quả sai.'],
      ['Các bước có <span class="k">thứ tự</span>.', 'Làm <b>lần lượt</b> từng bước.', 'Sai thứ tự → <b>kết quả sai</b>.']),
    quiz: [
      { q: 'Bước nào làm TRƯỚC khi chải răng?', o: ['Súc miệng', 'Cất bàn chải', 'Lấy kem đánh răng', 'Đi ngủ'], a: 2, why: 'Phải lấy kem lên bàn chải trước rồi mới chải.' },
      { q: 'Nếu làm các bước sai thứ tự thì:', o: ['Xong việc nhanh hơn', 'Kết quả tốt hơn', 'Không ảnh hưởng gì', 'Công việc dễ bị sai'], a: 3, why: 'Làm sai thứ tự dễ làm hỏng công việc.' } ] },
  { id: 't3', name: 'Chia nhỏ công việc', tip: 'Việc lớn chia thành việc nhỏ – dễ làm hơn nhiều!',
    html: S4Q(['Chia việc <b>trang trí lớp học</b> thành các bước nhỏ.', 'Gợi ý: chuẩn bị, làm, dọn dẹp.'],
      ['Có thể chia thành những bước nào?', 'Chuẩn bị đồ, <b>cắt dán</b>, <b>treo lên</b>, dọn dẹp.'],
      ['Chia nhỏ giúp gì?', 'Việc lớn trở nên <b>dễ làm</b>, không bỏ sót.'],
      ['Việc lớn <span class="k">chia nhỏ</span> thành bước.', 'Dễ làm, <b>không bỏ sót</b>.', 'Có thể <b>phân công</b> cho bạn.']),
    quiz: [
      { q: 'Chia một công việc lớn thành các bước nhỏ giúp:', o: ['Dễ làm, không bỏ sót', 'Khó làm hơn', 'Mất nhiều thời gian hơn', 'Không làm được'], a: 0, why: 'Chia nhỏ giúp công việc dễ thực hiện hơn.' },
      { q: 'Bước cuối cùng khi trang trí lớp xong là:', o: ['Chuẩn bị giấy', 'Cắt hoa', 'Dọn dẹp gọn gàng', 'Mua kéo'], a: 2, why: 'Làm xong thì dọn dẹp gọn gàng.' } ] },
  { id: 't4', name: 'Các bước khi dùng máy tính', tip: 'Bật máy – làm bài – tắt máy: đúng trình tự!',
    html: S4Q(['Nêu các bước của <b>một giờ học</b> với máy tính.', ''],
      ['Các bước chính là gì?', '<b>Bật máy</b> → mở phần mềm, học → <b>tắt máy</b>.'],
      ['Có thể tắt máy trước khi lưu bài không?', '<b>Không</b>, phải lưu bài rồi mới tắt máy.'],
      ['Bật máy → <b>làm bài</b> → tắt máy.', 'Nhớ <span class="k">lưu bài</span> trước khi tắt.', 'Làm việc <b>có trình tự</b>.']),
    quiz: [
      { q: 'Thứ tự đúng khi học với máy tính là:', o: ['Tắt – bật – học', 'Học – bật – tắt', 'Bật – tắt – học', 'Bật – học – tắt'], a: 3, why: 'Bật máy, học xong rồi tắt máy.' },
      { q: 'Trước khi tắt máy, em cần:', o: ['Lưu bài đang làm', 'Rút điện', 'Xoá bài', 'Đập bàn phím'], a: 0, why: 'Lưu bài để không bị mất.' } ] },
  { id: 't5', name: 'Em làm việc có kế hoạch', tip: 'Ôn lại: chia bước – xếp thứ tự – làm lần lượt!',
    html: S4Q(['Lập các bước cho việc <b>chuẩn bị cặp sách</b>.', ''],
      ['Em sẽ làm thế nào?', 'Xem <b>thời khoá biểu</b> → lấy sách vở → xếp vào cặp → kiểm tra.'],
      ['Làm theo các bước có lợi gì?', 'Không <b>quên đồ</b>, làm <b>nhanh</b> và gọn.'],
      ['Chia việc thành <b>các bước</b>.', 'Sắp xếp <span class="k">thứ tự</span> hợp lí.', 'Làm <b>lần lượt</b> đến hết.']),
    quiz: [
      { q: 'Bước đầu tiên khi chuẩn bị cặp sách là:', o: ['Đeo cặp đi học', 'Xem thời khoá biểu', 'Kéo khoá cặp', 'Đi ngủ'], a: 1, why: 'Xem thời khoá biểu để biết mang sách gì.' },
      { q: 'Câu nào ĐÚNG?', o: ['Công việc nào cũng chỉ 1 bước', 'Thứ tự các bước không quan trọng', 'Nên làm lần lượt theo các bước', 'Nên bỏ qua vài bước'], a: 2, why: 'Làm lần lượt theo thứ tự giúp hoàn thành tốt.' } ] },
];

const KEY = [
  'Công việc gồm<br><b>nhiều bước</b>.',
  'Làm đúng<br><b>thứ tự</b>.',
  'Việc lớn<br><b>chia nhỏ</b>.',
  'Bật → học →<br><b>tắt máy</b>.',
  'Làm việc<br><b>có kế hoạch</b>.',
];
