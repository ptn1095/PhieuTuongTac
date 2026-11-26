/* ===== BÀI 14: ARRAYS – MẢNG ===== */
const META = { key: 'arrays', num: 14, title: 'Nhóm lệnh Arrays', big: 'NHÓM LỆNH<br>ARRAYS',
  st2: 'Mảng – danh sách có thứ tự — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng xếp đồ vào những ngăn kéo đánh số với nhóm Arrays (màu nâu cam, mục Advanced) nhé!',
  cert: 'NHÓM LỆNH ARRAYS – MẢNG', file: 'Arrays', pass: 8 };

// dãy ngăn có số thứ tự bắt đầu từ 0
const SLOTS = (x, y, items, hi = -1, w = 96) => items.map((v, i) => `<rect x="${x + i*w}" y="${y}" width="${w - 10}" height="86" rx="12" fill="${i === hi ? '#FFE066' : '#FFF3E6'}" stroke="${O}" stroke-width="5"/>${typeof v === 'string' && MAT[v] ? VX([[0, 0, 0, v]], x + i*w + 43, y + 20, 26, { sw: 2 }) : txt(x + i*w + 43, y + 56, v, 30)}${txt(x + i*w + 43, y + 118, i, 24, '#A94400')}`).join('');
const ILL_T = {
  t1: () => svg(`${pillS(60, 30, 480, 54, '#A94400', 'list = array of …', 28)}${SLOTS(60, 130, [5, 8, 2, 9, 4])}
    ${txt(300, 290, '↑ số thứ tự (index) bắt đầu từ 0', 24, '#A94400')}${stars([560, 330, 12], [40, 330, 12])}`),
  t2: () => svg(`${SLOTS(60, 60, [5, 8, 2, 9, 4], 2)}${arr(300, 230, 300, 280, '#FF006E', 8)}
    ${pillS(110, 290, 380, 54, '#A94400', 'get value at 2 → 2', 26)}${pillS(130, 360, 340, 46, '#A94400', 'length of array → 5', 22)}`),
  t3: () => svg(`${SLOTS(40, 60, [5, 8, 2])}${arr(330, 103, 390, 103, '#2DA44E', 8)}${SLOTS(400, 60, [7], 0)}
    ${pillS(40, 270, 520, 52, '#A94400', 'add value 7 to end', 26)}${pillS(80, 340, 440, 46, '#A94400', 'remove last value from', 22)}`),
  t4: () => svg(`${SLOTS(60, 50, [5, 8, 2, 9, 4])}${SLOTS(60, 210, [4, 9, 2, 8, 5])}${txt(300, 200, '↓ reverse', 26, '#FF006E')}
    ${pillS(120, 360, 360, 44, '#A94400', 'đảo ngược thứ tự', 22)}`),
  t5: () => svg(`${SLOTS(60, 40, ['gold', 'diamond', 'tnt', 'glass', 'brick'], 1)}
    ${VX([...GR(4, 3), [1, 0, 1, 'diamond']], 300, 230, 36)}${pillS(40, 360, 520, 46, '#A94400', 'get random value from khoi', 22)}`),
};

const TOPICS = [
  { id: 't1', c: ['#FFA62B', '#FF5DA2'], dk: '#D9480F', title: 'Mảng là gì?',
    tip: 'Mảng giống tủ có nhiều ngăn đánh số – ngăn đầu tiên là số 0!',
    html: `<div class="blocks">${M('va', `set ${VR('list')} to ${MR('ar', `array of ${n(5)} ${n(8)} ${n(2)} ⊖ ⊕`, 'sd')}`)}</div><ul>
      <li>Nhóm <span class="k">Arrays</span> (Mảng) màu <b style="color:#A94400">nâu cam</b>, trong mục <b>Advanced</b>.</li>
      <li><b>Mảng</b>: <span class="k">một biến chứa nhiều giá trị</span>, xếp theo thứ tự.</li>
      <li>Mỗi giá trị có <b>số thứ tự</b> (index) – bắt đầu từ <span class="k">0</span>.</li>
      <li>Bấm ⊕ / ⊖ để thêm / bớt ô.</li></ul>`,
    quiz: [
      { q: 'Phần tử ĐẦU TIÊN của một mảng có số thứ tự (index) là:', o: ['1', '0', '-1', 'Tuỳ mảng'], a: 1, why: 'Trong MakeCode, số thứ tự bắt đầu từ 0.' },
      { q: 'Mảng array of 5, 8, 2 có bao nhiêu phần tử?', o: ['2', '5', '15', '3'], a: 3, why: 'Có 3 giá trị: 5, 8 và 2.' } ] },
  { id: 't2', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Đọc mảng',
    tip: 'Mảng có 5 phần tử thì index cuối là 4 – nhớ trừ 1 nha!',
    html: `<div class="blocks">${MR('ar', `length of array ${VR('list')}`)}${MR('ar', `${VR('list')} get value at ${n(0)}`)}${MR('ar', `get random value from ${VR('list')}`)}</div><ul>
      <li><b>length of array</b>: mảng có <span class="k">bao nhiêu phần tử</span>.</li>
      <li><b>get value at</b>: lấy giá trị ở <span class="k">vị trí số …</span></li>
      <li><b>get random value</b>: lấy <span class="k">ngẫu nhiên</span> một giá trị.</li></ul>`,
    quiz: [
      { q: 'list = [5, 8, 2, 9, 4]. list get value at 1 cho kết quả:', o: ['5', '1', '8', '2'], a: 2, why: 'Index 0 là 5, index 1 là 8.' },
      { q: 'length of array của [5, 8, 2, 9, 4] bằng:', o: ['5', '4', '9', '28'], a: 0, why: 'Mảng có 5 phần tử.' } ] },
  { id: 't3', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Thêm và bớt phần tử',
    tip: 'add value to end như xếp hàng: người mới đứng cuối hàng!',
    html: `<div class="blocks">${M('ar', `${VR('list')} add value ${n(7)} to end`)}${M('ar', `remove last value from ${VR('list')}`)}${M('ar', `${VR('list')} insert at ${n(0)} value ${n(1)}`)}</div><ul>
      <li><b>add value … to end</b>: <span class="k">thêm vào cuối</span>.</li>
      <li><b>remove last value</b>: <span class="k">bỏ phần tử cuối</span>.</li>
      <li><b>insert at</b>: <span class="k">chèn</span> vào vị trí chọn.</li></ul>`,
    quiz: [
      { q: 'list = [5, 8, 2]. Sau lệnh add value 7 to end, list là:', o: ['[7, 5, 8, 2]', '[5, 8, 2, 7]', '[5, 8, 7]', '[7]'], a: 1, why: 'add … to end thêm 7 vào cuối.' },
      { q: 'list = [5, 8, 2]. Sau lệnh remove last value from list, list là:', o: ['[8, 2]', '[5, 8, 2]', '[2]', '[5, 8]'], a: 3, why: 'Bỏ phần tử cuối cùng là 2.' } ] },
  { id: 't4', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Sửa, tìm, đảo ngược',
    tip: 'find index of trả về -1 nghĩa là: không tìm thấy!',
    html: `<div class="blocks">${M('ar', `${VR('list')} set value at ${n(0)} to ${n(9)}`)}${MR('ar', `${VR('list')} find index of ${n(2)}`)}${M('ar', `reverse ${VR('list')}`)}</div><ul>
      <li><b>set value at</b>: <span class="k">thay</span> giá trị ở một vị trí.</li>
      <li><b>find index of</b>: tìm giá trị nằm ở <span class="k">vị trí số mấy</span> (không có → -1).</li>
      <li><b>reverse</b>: <span class="k">đảo ngược</span> thứ tự cả mảng.</li></ul>`,
    quiz: [
      { q: 'list = [5, 8, 2]. list find index of 2 cho kết quả:', o: ['2', '3', '1', '-1'], a: 0, why: 'Số 2 nằm ở vị trí index 2.' },
      { q: 'list = [1, 2, 3]. Sau lệnh reverse list, list là:', o: ['[1, 2, 3]', '[3, 1, 2]', '[3, 2, 1]', '[2, 1, 3]'], a: 2, why: 'reverse đảo ngược thứ tự.' } ] },
  { id: 't5', c: ['#FF595E', '#FFB14E'], dk: '#C92A2A', title: 'Mảng trong Minecraft',
    tip: 'Mảng các loại khối + random = mỗi lần một khối bất ngờ!',
    html: `<div class="blocks">${M('va', `set ${VR('khoi')} to ${MR('ar', `array of ${PK('gold')} ${PK('diamond')} ${PK('glass')}`, 'sd')}`)}${M('bl', `place ${MR('ar', `get random value from ${VR('khoi')}`)} at ${P3('~', 2, 0, 0)}`)}</div><ul>
      <li>Mảng chứa được <b>số</b>, <b>chữ</b>, <b>loại khối</b>, <b>vị trí</b>…</li>
      <li>Lấy ngẫu nhiên → mỗi lần đặt một <span class="k">khối khác nhau</span>.</li>
      <li>Dùng <b>for element … of</b> để làm việc với <span class="k">từng phần tử</span>.</li></ul>`,
    quiz: [
      { q: 'Mảng khoi có 3 loại khối. Lệnh place (get random value from khoi) đặt:', o: ['Cả 3 khối', 'Luôn khối vàng', 'Một khối ngẫu nhiên trong 3 loại', 'Không đặt gì'], a: 2, why: 'get random value lấy ngẫu nhiên một phần tử.' },
      { q: 'Muốn đặt lần lượt TỪNG khối trong mảng khoi, em dùng vòng lặp:', o: ['for element value of khoi', 'forever', 'while false', 'on start'], a: 0, why: 'for element … of lấy lần lượt từng phần tử của mảng.' } ] },
];

const KEY = ['Mảng: <b>nhiều giá trị</b><br>index bắt đầu từ <b>0</b>', '<b>length of array</b><br><b>get value at</b>', '<b>add … to end</b><br><b>remove last</b> • <b>insert at</b>',
  '<b>set value at</b><br><b>find index of</b> • <b>reverse</b>', 'Mảng loại khối<br>+ <b>get random value</b>'];
