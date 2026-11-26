/* ===== BÀI 16: THUẬT TOÁN SẮP XẾP ===== */
const META = { key: 'bai16', num: 16, theme: 'chibi', title: 'Bài 16. Thuật toán sắp xếp', big: 'Thuật toán<br>sắp xếp',
  st2: 'Chủ đề 5 • 5 phần kiến thức cần nhớ • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng các bạn thú cưng xếp hàng từ thấp đến cao nhé!',
  cert: 'Tin học 7 – Bài 16. Thuật toán sắp xếp', file: 'Tin7_Bai16', pass: 8 };

const bx = (vals, y, st = {}, x0 = 60, w = 90) => vals.map((v, i) => { const s = st[i] || ''; return `<rect x="${x0 + i*(w + 8)}" y="${y}" width="${w}" height="70" rx="14" fill="${s === 'c' ? '#FFD60A' : s === 's' ? '#FF8FB1' : s === 'd' ? '#2DA44E' : '#fff'}" stroke="${O}" stroke-width="5"/><text x="${x0 + i*(w + 8) + w/2}" y="${y + 47}" text-anchor="middle" font-size="34" fill="${s === 'd' ? '#fff' : O}" ${F}>${v}</text>`; }).join('');
const swp = (x1, x2, y) => `<path d="M${x1} ${y} Q${(x1 + x2)/2} ${y - 50} ${x2} ${y}" fill="none" stroke="#FF006E" stroke-width="6"/>${arrowHead(x2, y + 4, 60, '#FF006E')}`;
const ILL_T = {
  t1: () => svg(`${bx([7, 2, 9, 4, 5], 50)}${arr(300, 140, 300, 200, O, 7)}${bx([2, 4, 5, 7, 9], 220, { 0: 'd', 1: 'd', 2: 'd', 3: 'd', 4: 'd' })}
    ${pillS(80, 330, 440, 54, '#8338EC', 'Sắp xếp tăng dần', 28)}`),
  t2: () => svg(`${bx([7, 2, 9, 4, 5], 90, { 0: 'c', 1: 'c' })}${swp(105, 203, 80)}${txt(300, 210, '7 > 2: đổi chỗ', 30)}
    ${pillS(40, 260, 520, 54, '#FF006E', 'So sánh 2 phần tử liền kề', 26)}${pillS(100, 340, 400, 50, '#1982C4', 'Sai thứ tự thì đổi chỗ', 24)}`),
  t3: () => svg(`${bx([2, 7, 4, 5, 9], 40, { 4: 'd' })}${txt(300, 150, 'Hết lượt 1: số lớn nhất về cuối', 26)}${bx([2, 4, 5, 7, 9], 190, { 3: 'd', 4: 'd' })}${txt(300, 300, 'Lặp lại đến khi không còn đổi chỗ', 24)}
    ${pillS(110, 330, 380, 54, '#FF7F11', 'Sắp xếp nổi bọt', 28)}`),
  t4: () => svg(`${bx([7, 2, 9, 4, 5], 70, { 1: 's', 0: 'c' })}${swp(105, 203, 60)}${txt(300, 190, 'Chọn số nhỏ nhất (2)', 28)}${txt(300, 230, 'đưa lên đầu dãy', 28)}
    ${pillS(110, 300, 380, 54, '#8338EC', 'Sắp xếp chọn', 30)}`),
  t5: () => svg(`${pillS(170, 30, 260, 60, '#8338EC', 'Bài toán lớn', 28)}${dline(300, 95, 140, 160)}${dline(300, 95, 300, 160)}${dline(300, 95, 460, 160)}
    ${pillS(50, 165, 180, 52, '#1982C4', 'Việc nhỏ 1', 24)}${pillS(240, 165, 120, 52, '#FF7F11', '…', 24)}${pillS(370, 165, 180, 52, '#2DA44E', 'Việc nhỏ n', 24)}
    ${pillS(60, 300, 480, 54, '#FF006E', 'Chia nhỏ: dễ giải quyết', 28)}`),
};

const TOPICS = [
  { id: 't1', name: 'Bài toán sắp xếp', tip: 'Xếp hàng từ thấp đến cao – em đã sắp xếp rồi đấy!',
    html: KT([
      '<b>Sắp xếp</b> là đưa các phần tử của danh sách về đúng <b>thứ tự</b>: <b>tăng dần</b> hoặc <b>giảm dần</b>.',
      'VD: xếp điểm từ cao xuống thấp, xếp tên theo bảng chữ cái, xếp bạn theo chiều cao.',
      'Danh sách đã sắp xếp giúp <b>tìm kiếm nhanh</b> hơn (VD tìm kiếm nhị phân).',
      'Có nhiều thuật toán sắp xếp: <b>sắp xếp nổi bọt</b>, <b>sắp xếp chọn</b>…',
    ], 'Sắp xếp: đưa danh sách về thứ tự <span class="k">tăng dần</span> hoặc <span class="k">giảm dần</span>.'),
    quiz: [
      { q: 'Dãy 3, 8, 1, 6 sắp xếp tăng dần là:', o: ['8, 6, 3, 1', '1, 3, 6, 8', '3, 1, 6, 8', '1, 6, 3, 8'], a: 1, why: 'Tăng dần: từ nhỏ đến lớn.' },
      { q: 'Lợi ích của danh sách đã sắp xếp là:', o: ['Tìm kiếm nhanh hơn', 'Có nhiều phần tử hơn', 'Không cần lưu', 'Tự tính tổng'], a: 0, why: 'Danh sách đã sắp xếp giúp tìm kiếm nhanh hơn.' } ] },
  { id: 't2', name: 'Ý tưởng sắp xếp nổi bọt', tip: 'Số lớn nổi dần lên như bong bóng!',
    html: KT([
      '<b>Sắp xếp nổi bọt</b>: so sánh <b>hai phần tử liền kề</b>, từ đầu đến cuối dãy.',
      'Nếu hai phần tử <b>sai thứ tự</b> thì <b>đổi chỗ</b> cho nhau.',
      'VD sắp xếp tăng dần: 7, 2 → 7 > 2 nên đổi chỗ thành 2, 7.',
      'Sau mỗi lượt, phần tử <b>lớn nhất</b> “nổi” về <b>cuối dãy</b>.',
    ], 'Nổi bọt: <span class="k">so sánh liền kề, sai thì đổi chỗ</span>.'),
    quiz: [
      { q: 'Sắp xếp nổi bọt so sánh:', o: ['Phần tử đầu và cuối', 'Hai phần tử liền kề', 'Phần tử giữa', 'Ba phần tử một lúc'], a: 1, why: 'Nổi bọt so sánh hai phần tử liền kề.' },
      { q: 'Sắp xếp tăng dần, gặp cặp 9, 4 thì:', o: ['Giữ nguyên', 'Xoá số 9', 'Đổi chỗ thành 4, 9', 'Dừng thuật toán'], a: 2, why: '9 > 4 sai thứ tự tăng dần nên đổi chỗ.' } ] },
  { id: 't3', name: 'Các lượt sắp xếp nổi bọt', tip: 'Mỗi lượt đưa một số lớn về đúng chỗ!',
    html: KT([
      '<b>Một lượt</b>: đi từ đầu đến cuối, so sánh và đổi chỗ các cặp liền kề sai thứ tự.',
      'Dãy 7, 2, 9, 4, 5 → hết lượt 1: <b>2, 7, 4, 5, 9</b> (số 9 về cuối).',
      'Lặp lại các lượt; mỗi lượt sau xét <b>ít hơn một phần tử</b> ở cuối.',
      'Dừng khi một lượt <b>không còn đổi chỗ</b> nào → dãy đã sắp xếp: <b>2, 4, 5, 7, 9</b>.',
    ], 'Dừng khi một lượt <span class="k">không có đổi chỗ</span>.'),
    quiz: [
      { q: 'Dãy 5, 3, 8, 1 sắp xếp nổi bọt tăng dần, sau lượt 1 là:', o: ['3, 5, 1, 8', '1, 3, 5, 8', '5, 3, 1, 8', '3, 1, 5, 8'], a: 0, why: '5↔3 → 3,5,8,1; 5<8 giữ; 8↔1 → 3,5,1,8.' },
      { q: 'Thuật toán sắp xếp nổi bọt dừng khi:', o: ['Đã đổi chỗ 1 lần', 'Một lượt không còn đổi chỗ nào', 'Gặp số lớn nhất', 'Sau đúng 1 lượt'], a: 1, why: 'Không còn đổi chỗ nghĩa là dãy đã đúng thứ tự.' } ] },
  { id: 't4', name: 'Sắp xếp chọn', tip: 'Mỗi lần chọn ra bạn thấp nhất đứng lên đầu hàng!',
    html: KT([
      '<b>Sắp xếp chọn</b> (tăng dần): tìm phần tử <b>nhỏ nhất</b> trong phần chưa sắp xếp.',
      '<b>Đổi chỗ</b> phần tử nhỏ nhất đó với phần tử <b>đầu</b> của phần chưa sắp xếp.',
      'Phần đã sắp xếp <b>tăng thêm 1</b> phần tử; lặp lại với phần còn lại.',
      'VD 7, 2, 9, 4, 5 → chọn 2 đổi với 7: <b>2</b>, 7, 9, 4, 5 → chọn 4: <b>2, 4</b>, 9, 7, 5…',
    ], 'Sắp xếp chọn: <span class="k">chọn nhỏ nhất, đưa lên đầu</span>.'),
    quiz: [
      { q: 'Sắp xếp chọn tăng dần, mỗi lượt sẽ chọn phần tử:', o: ['Lớn nhất đưa lên đầu', 'Nhỏ nhất trong phần chưa sắp xếp', 'Ở giữa dãy', 'Bất kì'], a: 1, why: 'Chọn phần tử nhỏ nhất, đưa về đầu phần chưa sắp xếp.' },
      { q: 'Dãy 6, 3, 8, 1 sau lượt 1 của sắp xếp chọn (tăng dần) là:', o: ['3, 6, 8, 1', '1, 3, 8, 6', '1, 3, 6, 8', '6, 3, 1, 8'], a: 3, why: 'Nhỏ nhất là 1, đổi chỗ với 6: 1, 3, 8, 6.' } ] },
  { id: 't5', name: 'Chia bài toán thành bài toán nhỏ', tip: 'Việc lớn chia nhỏ thì việc nào cũng dễ!',
    html: KT([
      'Một bài toán lớn có thể <b>chia thành các bài toán nhỏ</b> hơn, dễ giải quyết hơn.',
      'Sắp xếp cả dãy = lặp lại nhiều lần việc nhỏ: <b>so sánh và đổi chỗ</b> hai phần tử.',
      'Mỗi lượt giải quyết một phần: đưa <b>một phần tử</b> về đúng vị trí.',
      'Chia nhỏ giúp dễ <b>hiểu, mô tả, kiểm tra</b> và viết chương trình cho máy tính.',
    ], 'Chia bài toán lớn thành <span class="k">bài toán nhỏ</span> giúp giải quyết dễ dàng.'),
    quiz: [
      { q: 'Việc nhỏ được lặp lại nhiều lần trong sắp xếp nổi bọt là:', o: ['So sánh và đổi chỗ hai phần tử liền kề', 'Tính tổng dãy', 'Xoá phần tử', 'In dãy ra giấy'], a: 0, why: 'Nổi bọt lặp lại việc so sánh và đổi chỗ hai phần tử liền kề.' },
      { q: 'Lợi ích của việc chia bài toán thành bài toán nhỏ là:', o: ['Bài toán khó hơn', 'Không cần thuật toán', 'Dễ hiểu, dễ giải quyết hơn', 'Máy tính chạy chậm hơn'], a: 2, why: 'Chia nhỏ giúp dễ hiểu, dễ giải quyết.' } ] },
];

const KEY = [
  'Sắp xếp <b>tăng dần</b> hoặc <b>giảm dần</b>.',
  'Nổi bọt: so sánh <b>liền kề</b>, sai thì <b>đổi chỗ</b>.',
  'Mỗi lượt số <b>lớn nhất</b> về cuối.',
  'Sắp xếp chọn: <b>chọn nhỏ nhất</b> đưa lên đầu.',
  'Chia bài toán lớn thành <b>bài toán nhỏ</b>.',
];
