/* ===== BÀI 15: THUẬT TOÁN TÌM KIẾM NHỊ PHÂN ===== */
const META = { key: 'bai15', num: 15, theme: 'samac', title: 'Bài 15. Thuật toán tìm kiếm nhị phân', big: 'Thuật toán<br>tìm kiếm nhị phân',
  st2: 'Chủ đề 5 • 5 phần kiến thức cần nhớ • 10 câu đố • giấy chứng nhận',
  hello: 'Chia đôi sa mạc để tìm ốc đảo thật nhanh nào!',
  cert: 'Tin học 7 – Bài 15. Thuật toán tìm kiếm nhị phân', file: 'Tin7_Bai15', pass: 8 };

const cells = (vals, y, st = {}, x0 = 20, w = 62) => vals.map((v, i) => { const s = st[i] || ''; return `<rect x="${x0 + i*(w + 4)}" y="${y}" width="${w}" height="62" rx="10" fill="${s === 'm' ? '#FFD60A' : s === 'g' ? '#CED4DA' : s === 'ok' ? '#2DA44E' : '#fff'}" stroke="${O}" stroke-width="4" ${s === 'g' ? 'opacity=".55"' : ''}/><text x="${x0 + i*(w + 4) + w/2}" y="${y + 42}" text-anchor="middle" font-size="28" fill="${s === 'ok' ? '#fff' : O}" ${F}>${v}</text>`; }).join('');
const D = [2, 5, 8, 12, 16, 23, 38, 56];
const ILL_T = {
  t1: () => svg(`${cells(D, 60)}${arr(80, 160, 520, 160, '#2DA44E', 7)}${txt(300, 210, 'Dãy đã sắp xếp tăng dần', 28)}
    ${pillS(60, 290, 480, 54, '#E5383B', 'Điều kiện bắt buộc!', 28)}`),
  t2: () => svg(`${cells(D, 40, { 3: 'm' })}${arr(240, 200, 240, 115, '#FF7F11', 6)}${txt(240, 235, 'Phần tử giữa', 24)}
    ${pillS(20, 280, 270, 54, '#1982C4', 'Nhỏ hơn: nửa trái', 24)}${pillS(310, 280, 270, 54, '#8338EC', 'Lớn hơn: nửa phải', 24)}`),
  t3: () => svg(`${txt(20, 40, 'Tìm 23', 26, O, 'start')}${cells(D, 55, { 3: 'm' })}${cells(D, 150, { 0: 'g', 1: 'g', 2: 'g', 3: 'g', 5: 'm' })}${cells(D, 245, { 0: 'g', 1: 'g', 2: 'g', 3: 'g', 4: 'g', 5: 'ok', 6: 'g', 7: 'g' })}
    ${pillS(100, 340, 400, 50, '#2DA44E', 'Chỉ 2 lần so sánh!', 26)}`),
  t4: () => svg(`${vflow([['#FF7F11', 'So sánh với phần tử giữa'], ['#2DA44E', 'Bằng: tìm thấy, dừng'], ['#1982C4', 'Khác: bỏ một nửa'], ['#8338EC', 'Lặp lại với nửa còn lại']], 120, 22, 360, 96, 24)}`),
  t5: () => svg(`${txt(150, 60, 'Tuần tự', 30)}${txt(450, 60, 'Nhị phân', 30)}${bars(90, 300, [220], 120, 0, ['#E5383B'])}${bars(390, 300, [50], 120, 0, ['#2DA44E'])}
    ${txt(150, 345, '1000 lần', 26)}${txt(450, 345, '≈ 10 lần', 26)}${txt(300, 400, 'Danh sách 1000 phần tử', 24)}`),
};

const TOPICS = [
  { id: 't1', name: 'Điều kiện của tìm kiếm nhị phân', tip: 'Như tra từ điển: các từ đã xếp theo thứ tự A, B, C…',
    html: KT([
      '<b>Tìm kiếm nhị phân</b> chỉ dùng cho danh sách <b>đã được sắp xếp</b> (tăng dần hoặc giảm dần).',
      'VD đời sống: tra <b>từ điển</b>, tìm tên trong danh sách xếp theo vần A, B, C.',
      '“Nhị phân” nghĩa là <b>chia đôi</b>: mỗi lần so sánh lại thu hẹp phạm vi tìm còn <b>một nửa</b>.',
      'Danh sách <b>chưa sắp xếp</b> thì <b>không dùng</b> được tìm kiếm nhị phân.',
    ], 'Điều kiện: danh sách phải <span class="k">đã sắp xếp</span>.'),
    quiz: [
      { q: 'Tìm kiếm nhị phân chỉ dùng được khi danh sách:', o: ['Có ít phần tử', 'Đã được sắp xếp', 'Chưa sắp xếp', 'Chỉ chứa chữ'], a: 1, why: 'Danh sách phải được sắp xếp mới tìm kiếm nhị phân được.' },
      { q: '“Nhị phân” trong tìm kiếm nhị phân có nghĩa là:', o: ['Chia đôi', 'Nhân đôi', 'Đếm hai lần', 'Hai danh sách'], a: 0, why: 'Mỗi bước chia đôi phạm vi tìm kiếm.' } ] },
  { id: 't2', name: 'Ý tưởng: so sánh với phần tử giữa', tip: 'Đoán số giữa trước – mẹo đoán số siêu nhanh!',
    html: KT([
      'So sánh giá trị cần tìm với <b>phần tử ở giữa</b> phạm vi đang xét.',
      'Nếu <b>bằng</b> → tìm thấy, kết thúc.',
      'Nếu <b>nhỏ hơn</b> (dãy tăng dần) → chỉ tìm tiếp ở <b>nửa trước</b> (bên trái).',
      'Nếu <b>lớn hơn</b> → chỉ tìm tiếp ở <b>nửa sau</b> (bên phải).',
    ], 'Mỗi lần so sánh <span class="k">loại bỏ một nửa</span> danh sách.'),
    quiz: [
      { q: 'Dãy tăng dần. Giá trị cần tìm nhỏ hơn phần tử giữa thì tìm tiếp ở:', o: ['Nửa sau', 'Nửa trước', 'Cả dãy', 'Dừng lại'], a: 1, why: 'Nhỏ hơn phần tử giữa thì chỉ có thể ở nửa trước.' },
      { q: 'Tìm kiếm nhị phân bắt đầu so sánh với phần tử:', o: ['Đầu tiên', 'Cuối cùng', 'Ở giữa', 'Lớn nhất'], a: 2, why: 'Luôn so sánh với phần tử ở giữa phạm vi.' } ] },
  { id: 't3', name: 'Ví dụ từng bước', tip: 'Theo dõi từng bước là hiểu ngay!',
    html: KT([
      'Dãy tăng dần: <b>2, 5, 8, 12, 16, 23, 38, 56</b>. Tìm số <b>23</b>.',
      'Lần 1: phần tử giữa là <b>12</b>; 23 > 12 → bỏ nửa trước, tìm trong 16, 23, 38, 56.',
      'Lần 2: phần tử giữa là <b>23</b>; 23 = 23 → <b>tìm thấy</b> ở vị trí thứ 6.',
      'Chỉ <b>2 lần</b> so sánh; tìm kiếm tuần tự phải so sánh <b>6 lần</b>.',
    ], 'Phạm vi tìm kiếm <span class="k">giảm một nửa</span> sau mỗi bước.'),
    quiz: [
      { q: 'Dãy 2, 5, 8, 12, 16, 23, 38, 56; tìm 23. Sau lần so sánh với 12, phạm vi còn lại là:', o: ['2, 5, 8', '16, 23, 38, 56', 'Cả dãy', '12'], a: 1, why: '23 > 12 nên chỉ còn nửa sau: 16, 23, 38, 56.' },
      { q: 'Dãy 1, 3, 5, 7, 9, 11, 13; tìm 7. Số lần so sánh là:', o: ['1 lần', '3 lần', '4 lần', '7 lần'], a: 0, why: 'Phần tử giữa là 7 → tìm thấy ngay lần đầu.' } ] },
  { id: 't4', name: 'Các bước của thuật toán', tip: 'Lặp lại một việc đơn giản cho đến khi xong!',
    html: KT([
      '<b>Bước 1</b>: phạm vi tìm kiếm là <b>toàn bộ dãy</b>.',
      '<b>Bước 2</b>: lấy phần tử <b>giữa</b> phạm vi, so sánh với giá trị cần tìm.',
      '<b>Bước 3</b>: bằng → <b>tìm thấy</b>, kết thúc; khác → thu hẹp phạm vi còn <b>một nửa</b> phù hợp.',
      '<b>Bước 4</b>: nếu phạm vi còn phần tử → quay lại Bước 2; nếu <b>hết</b> → <b>không tìm thấy</b>.',
    ], 'Lặp: <span class="k">so sánh giữa → bỏ một nửa</span>.'),
    quiz: [
      { q: 'Khi nào tìm kiếm nhị phân kết luận “không tìm thấy”?', o: ['Ngay lần đầu so sánh khác', 'Khi phạm vi tìm kiếm không còn phần tử', 'Khi gặp số chẵn', 'Khi dãy tăng dần'], a: 1, why: 'Phạm vi rỗng mà chưa thấy thì không tìm thấy.' },
      { q: 'Sau mỗi lần so sánh mà chưa tìm thấy, phạm vi tìm kiếm:', o: ['Giữ nguyên', 'Tăng gấp đôi', 'Giảm còn khoảng một nửa', 'Quay về đầu dãy'], a: 2, why: 'Mỗi lần loại bỏ khoảng một nửa.' } ] },
  { id: 't5', name: 'So sánh với tìm kiếm tuần tự', tip: 'Danh sách càng dài, nhị phân càng thắng lớn!',
    html: KT([
      'Tìm kiếm nhị phân <b>nhanh hơn nhiều</b> khi danh sách dài.',
      'VD 1000 phần tử: tuần tự có thể cần <b>1000 lần</b>; nhị phân chỉ cần <b>khoảng 10 lần</b>.',
      'Nhưng nhị phân <b>chỉ dùng</b> cho danh sách <b>đã sắp xếp</b>; tuần tự dùng cho mọi danh sách.',
      'Chọn thuật toán phù hợp giúp máy tính <b>giải quyết vấn đề hiệu quả</b>.',
    ], 'Nhị phân <span class="k">nhanh</span> nhưng cần dãy <span class="k">đã sắp xếp</span>.'),
    quiz: [
      { q: 'Với danh sách dài đã sắp xếp, thuật toán nào thường nhanh hơn?', o: ['Tìm kiếm tuần tự', 'Tìm kiếm nhị phân', 'Hai cách bằng nhau', 'Không tìm được'], a: 1, why: 'Nhị phân loại bỏ một nửa mỗi lần nên nhanh hơn.' },
      { q: 'Danh sách 4, 9, 1, 7, 3 (chưa sắp xếp) nên dùng thuật toán:', o: ['Tìm kiếm tuần tự', 'Tìm kiếm nhị phân', 'Không tìm được', 'Sắp xếp nổi bọt'], a: 0, why: 'Chưa sắp xếp thì dùng tìm kiếm tuần tự.' } ] },
];

const KEY = [
  'Chỉ dùng cho dãy <b>đã sắp xếp</b>.',
  'So sánh với <b>phần tử giữa</b>.',
  'Mỗi bước <b>bỏ một nửa</b> phạm vi.',
  'Lặp đến khi <b>tìm thấy</b> hoặc phạm vi rỗng.',
  'Nhanh hơn <b>tuần tự</b> khi dãy dài.',
];
