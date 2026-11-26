/* ===== BÀI 14: THUẬT TOÁN TÌM KIẾM TUẦN TỰ ===== */
const META = { key: 'bai14', num: 14, theme: 'daiduong', title: 'Bài 14. Thuật toán tìm kiếm tuần tự', big: 'Thuật toán<br>tìm kiếm tuần tự',
  st2: 'Chủ đề 5 • 5 phần kiến thức cần nhớ • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng lặn tìm viên ngọc trong từng vỏ sò nhé!',
  cert: 'Tin học 7 – Bài 14. Thuật toán tìm kiếm tuần tự', file: 'Tin7_Bai14', pass: 8 };

const row = (vals, y, hl = -1, ok = -1, x0 = 40, w = 84) => vals.map((v, i) => `<rect x="${x0 + i*(w + 6)}" y="${y}" width="${w}" height="70" rx="12" fill="${i === ok ? '#2DA44E' : i === hl ? '#FFD60A' : i < hl ? '#CED4DA' : '#fff'}" stroke="${O}" stroke-width="5"/><text x="${x0 + i*(w + 6) + w/2}" y="${y + 47}" text-anchor="middle" font-size="32" fill="${i === ok ? '#fff' : O}" ${F}>${v}</text>`).join('');
const ILL_T = {
  t1: () => svg(`${row([7, 3, 9, 5, 1, 8], 70, 3)}${arr(372, 190, 372, 150, '#FF7F11', 7)}${txt(372, 225, 'Tìm số 5', 28)}
    ${pillS(60, 290, 480, 54, '#1982C4', 'Xét lần lượt từ đầu danh sách', 24)}`),
  t2: () => svg(`${row([7, 3, 9, 5, 1, 8], 40, -1, 3)}${['7 ≠ 5', '3 ≠ 5', '9 ≠ 5', '5 = 5 ✓'].map((t, i) => pillS(40 + i*135, 150, 125, 48, i === 3 ? '#2DA44E' : '#E5383B', t, 22)).join('')}
    ${pillS(60, 260, 480, 54, '#2DA44E', 'Tìm thấy ở vị trí thứ 4', 26)}${txt(300, 370, 'So sánh 4 lần', 28)}`),
  t3: () => svg(`${vflow([['#1982C4', 'Xét phần tử đầu tiên'], ['#FF7F11', 'Bằng giá trị cần tìm?'], ['#2DA44E', 'Đúng: thông báo tìm thấy'], ['#8338EC', 'Sai: xét phần tử tiếp theo']], 120, 22, 360, 96, 24)}`),
  t4: () => svg(`${row([7, 3, 9, 5, 1, 8], 50, 6)}${txt(300, 180, 'Tìm số 4: xét hết 6 số', 28)}${cross(300, 240, 1)}
    ${pillS(60, 310, 480, 54, '#E5383B', 'Không tìm thấy', 30)}`),
  t5: () => svg(`${row(['An', 'Bình', 'Chi', 'Dũng', 'Hà'], 40, -1, -1, 30, 100)}${pillS(40, 160, 520, 54, '#1982C4', 'Danh sách KHÔNG cần sắp xếp', 24)}
    ${pillS(40, 240, 520, 54, '#FF7F11', 'Danh sách dài: so sánh nhiều lần', 24)}${pillS(100, 330, 400, 54, '#2DA44E', 'Đơn giản, dễ làm', 26)}`),
};

const TOPICS = [
  { id: 't1', name: 'Bài toán tìm kiếm', tip: 'Tìm kiếm có mặt ở khắp nơi: tìm tên trong danh sách, tìm bài hát, tìm sách…',
    html: KT([
      'Tìm kiếm là <b>bài toán thường gặp</b>: tìm tên bạn trong danh sách lớp, tìm từ trong từ điển…',
      'Bài toán: cho <b>một dãy (danh sách)</b> và <b>một giá trị</b> cần tìm.',
      'Kết quả: <b>tìm thấy</b> (ở vị trí nào) hoặc <b>không tìm thấy</b>.',
      'Máy tính tìm kiếm rất nhanh nhờ có <b>thuật toán</b> phù hợp.',
    ], 'Tìm kiếm: trả lời “<span class="k">có hay không, ở đâu</span>”.'),
    quiz: [
      { q: 'Kết quả của bài toán tìm kiếm là:', o: ['Danh sách được sắp xếp', 'Tìm thấy (ở đâu) hoặc không tìm thấy', 'Tổng các số', 'Số lớn nhất'], a: 1, why: 'Tìm kiếm cho biết có tìm thấy không và ở vị trí nào.' },
      { q: 'Ví dụ nào là bài toán tìm kiếm?', o: ['Tìm tên bạn trong danh sách lớp', 'Tô màu bức tranh', 'Hát một bài hát', 'Gấp quần áo'], a: 0, why: 'Tìm tên trong danh sách là bài toán tìm kiếm.' } ] },
  { id: 't2', name: 'Ý tưởng tìm kiếm tuần tự', tip: 'Tuần tự = lần lượt từng cái một, không bỏ sót!',
    html: KT([
      '<b>Tìm kiếm tuần tự</b>: xét <b>lần lượt</b> từng phần tử, <b>bắt đầu từ phần tử đầu tiên</b>.',
      'So sánh phần tử đang xét với giá trị cần tìm.',
      'Nếu <b>bằng</b> → tìm thấy, <b>dừng lại</b>. Nếu khác → xét phần tử <b>tiếp theo</b>.',
      'VD: tìm 5 trong dãy 7, 3, 9, 5, 1, 8 → so sánh <b>4 lần</b>, thấy ở vị trí thứ 4.',
    ], 'Xét <span class="k">lần lượt từ đầu</span> đến khi tìm thấy hoặc hết dãy.'),
    quiz: [
      { q: 'Tìm kiếm tuần tự bắt đầu xét từ:', o: ['Phần tử ở giữa', 'Phần tử cuối cùng', 'Phần tử đầu tiên', 'Phần tử lớn nhất'], a: 2, why: 'Tìm kiếm tuần tự xét lần lượt từ phần tử đầu tiên.' },
      { q: 'Tìm số 9 trong dãy 4, 9, 2, 6 bằng tìm kiếm tuần tự cần so sánh mấy lần?', o: ['1 lần', '2 lần', '3 lần', '4 lần'], a: 1, why: 'So sánh 4 (khác), rồi 9 (bằng) → 2 lần.' } ] },
  { id: 't3', name: 'Các bước của thuật toán', tip: 'Thuật toán là các bước rõ ràng để máy tính làm theo!',
    html: KT([
      '<b>Bước 1</b>: xét phần tử <b>đầu tiên</b> của dãy.',
      '<b>Bước 2</b>: nếu phần tử đang xét <b>bằng</b> giá trị cần tìm → thông báo <b>tìm thấy</b>, kết thúc.',
      '<b>Bước 3</b>: nếu chưa phải phần tử cuối → xét phần tử <b>tiếp theo</b>, quay lại Bước 2.',
      '<b>Bước 4</b>: đã xét hết dãy mà không thấy → thông báo <b>không tìm thấy</b>.',
    ], 'Thuật toán có thể mô tả bằng <span class="k">các bước</span> hoặc <span class="k">sơ đồ khối</span>.'),
    quiz: [
      { q: 'Khi phần tử đang xét bằng giá trị cần tìm, thuật toán sẽ:', o: ['Xét tiếp phần tử sau', 'Thông báo tìm thấy và kết thúc', 'Quay lại từ đầu', 'Đổi chỗ hai phần tử'], a: 1, why: 'Tìm thấy thì thông báo và dừng.' },
      { q: 'Khi nào thuật toán thông báo “không tìm thấy”?', o: ['Ngay ở phần tử đầu', 'Khi gặp số lớn nhất', 'Khi xét hết dãy mà không thấy', 'Khi dãy đã sắp xếp'], a: 2, why: 'Chỉ khi đã xét hết dãy mà không có giá trị cần tìm.' } ] },
  { id: 't4', name: 'Trường hợp không tìm thấy', tip: 'Không tìm thấy cũng là một kết quả đấy!',
    html: KT([
      'Nếu giá trị cần tìm <b>không có</b> trong dãy, phải xét <b>hết tất cả</b> các phần tử.',
      'VD: tìm số 4 trong dãy 7, 3, 9, 5, 1, 8 → so sánh <b>6 lần</b>, không tìm thấy.',
      'Dãy có <b>n</b> phần tử thì cần <b>nhiều nhất n lần</b> so sánh.',
      'Tìm thấy ở <b>đầu dãy</b> thì nhanh; ở <b>cuối dãy</b> hoặc không có thì lâu nhất.',
    ], 'Dãy n phần tử: tối đa <span class="k">n lần so sánh</span>.'),
    quiz: [
      { q: 'Dãy có 10 phần tử, tìm kiếm tuần tự cần nhiều nhất bao nhiêu lần so sánh?', o: ['5 lần', '1 lần', '20 lần', '10 lần'], a: 3, why: 'Nhiều nhất bằng số phần tử: 10 lần.' },
      { q: 'Tìm số 2 trong dãy 5, 8, 1, 7 thì kết quả là:', o: ['Tìm thấy ở vị trí 1', 'Không tìm thấy, so sánh 4 lần', 'Tìm thấy ở vị trí 3', 'Không cần so sánh'], a: 1, why: 'Không có số 2, đã so sánh cả 4 phần tử.' } ] },
  { id: 't5', name: 'Đặc điểm tìm kiếm tuần tự', tip: 'Đơn giản, dùng được cho mọi danh sách!',
    html: KT([
      '<b>Ưu điểm</b>: đơn giản, dễ hiểu, dễ thực hiện.',
      'Dùng được cho danh sách <b>chưa sắp xếp</b> (bất kì thứ tự nào).',
      '<b>Nhược điểm</b>: danh sách <b>dài</b> thì phải so sánh <b>rất nhiều lần</b>, mất thời gian.',
      'Có thể dùng để tìm số, tìm tên, tìm đồ vật… trong mọi danh sách.',
    ], 'Tìm kiếm tuần tự dùng được cho <span class="k">mọi danh sách</span>.'),
    quiz: [
      { q: 'Tìm kiếm tuần tự có dùng được cho danh sách chưa sắp xếp không?', o: ['Có', 'Không', 'Chỉ khi có 2 phần tử', 'Chỉ với chữ cái'], a: 0, why: 'Tìm kiếm tuần tự không cần danh sách sắp xếp.' },
      { q: 'Nhược điểm của tìm kiếm tuần tự là:', o: ['Khó hiểu', 'Chỉ dùng cho danh sách đã sắp xếp', 'Danh sách dài thì so sánh nhiều lần', 'Không bao giờ tìm thấy'], a: 2, why: 'Danh sách dài cần nhiều lần so sánh.' } ] },
];

const KEY = [
  'Tìm kiếm: <b>thấy ở đâu</b> hay <b>không thấy</b>.',
  'Xét <b>lần lượt từ đầu</b> dãy.',
  'Bằng → <b>dừng</b>; khác → xét tiếp.',
  'Dãy n phần tử: tối đa <b>n lần</b> so sánh.',
  'Dùng cho cả danh sách <b>chưa sắp xếp</b>.',
];
