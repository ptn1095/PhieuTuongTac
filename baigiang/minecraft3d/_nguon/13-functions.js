/* ===== BÀI 13: FUNCTIONS – HÀM ===== */
const META = { key: 'functions', num: 13, title: 'Nhóm lệnh Functions', big: 'NHÓM LỆNH<br>FUNCTIONS',
  st2: 'Hàm – gói lệnh có tên — 5 nội dung • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Cùng gói nhiều lệnh thành một "phép thuật" có tên với nhóm Functions (màu xanh đậm, mục Advanced) nhé!',
  cert: 'NHÓM LỆNH FUNCTIONS – HÀM', file: 'Functions', pass: 8 };

const card = (x, y, w, h, c, t, fs = 24) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${c}" stroke="${O}" stroke-width="5"/>${txt(x + w/2, y + h/2 + fs*.36, t, fs, '#fff')}`;
const HOUSE = (x0 = 0, z0 = 0) => { const a = []; for (let x = 0; x < 3; x++) for (let z = 0; z < 3; z++) a.push([x0 + x, 0, z0 + z, 'plank']); a.push([x0, 1, z0, 'red', 3, .6, 3]); return a; };
const ILL_T = {
  t1: () => svg(`${['place', 'place', 'place', 'fill with'].map((t, i) => BK(30, 40 + i*58, i < 3 ? 'bl' : 'bl', t, 20)).join('')}
    ${arr(230, 160, 320, 160, '#FF006E', 9)}<rect x="340" y="80" width="230" height="160" rx="24" fill="#235789" stroke="${O}" stroke-width="6"/>${txt(455, 150, 'xayNha', 34, '#fff')}${txt(455, 196, '(1 cái tên)', 22, '#BDE8F5')}
    ${pillS(100, 320, 400, 52, '#235789', 'Make a Function...', 26)}${stars([560, 50], [40, 290, 12])}`),
  t2: () => svg(`${VX([...GR(8, 3), ...HOUSE(0, 0), ...HOUSE(4, 0)], 250, 170, 34)}
    ${pillS(20, 24, 260, 48, '#235789', 'call xayNha', 26)}${pillS(320, 24, 260, 48, '#235789', 'call xayNha', 26)}
    ${pillS(120, 362, 360, 44, '#FF7F11', 'Gọi 2 lần → 2 ngôi nhà', 20)}`),
  t3: () => svg(`${VX([...GR(7, 2), ...[0, 1].map(y => [0, y, 0, 'stone']), ...[0, 1, 2, 3].map(y => [2, y, 0, 'stone']), ...[0, 1, 2, 3, 4, 5].map(y => [4, y, 0, 'stone'])], 250, 300, 34)}
    ${pillS(14, 24, 190, 46, '#235789', 'xayThap 2', 22)}${pillS(208, 24, 190, 46, '#235789', 'xayThap 4', 22)}${pillS(402, 24, 184, 46, '#235789', 'xayThap 6', 22)}
    ${pillS(150, 362, 300, 44, '#EA2B1F', 'tham số: chieuCao', 20)}`),
  t4: () => svg(`${card(40, 60, 150, 90, '#6C6EA0', '3 , 4', 32)}${arr(200, 105, 260, 105, '#FF006E', 8)}
    <rect x="270" y="40" width="160" height="130" rx="20" fill="#235789" stroke="${O}" stroke-width="6"/>${txt(350, 100, 'tinhTong', 26, '#fff')}${txt(350, 140, 'a + b', 24, '#BDE8F5')}
    ${arr(440, 105, 500, 105, '#FF006E', 8)}${ball(540, 105, 42, '#2DA44E', '7', 40)}
    ${pillS(120, 250, 360, 54, '#235789', 'return a + b', 28)}${stars([60, 300], [560, 300, 12])}`),
  t5: () => svg(`${card(40, 40, 520, 70, '#0078D7', 'on chat command "nha"', 26)}${arr(300, 116, 300, 160, '#FF006E', 8)}
    ${card(150, 166, 300, 70, '#235789', 'call xayNha', 28)}
    ${['Ngắn gọn', 'Dễ sửa', 'Dùng lại'].map((t, i) => pillS(30 + i*186, 300, 170, 52, ['#2DA44E', '#FF7F11', '#8338EC'][i], t, 24)).join('')}
    ${stars([560, 180, 12], [40, 180, 12])}`),
};

const TOPICS = [
  { id: 't1', c: ['#3A8DFF', '#00C2D1'], dk: '#1864AB', title: 'Hàm là gì?',
    tip: 'Đặt tên hàm như một động từ: xayNha, trongCay, goiGa – nhìn là hiểu!',
    html: `<div class="blocks">${MC('fn', `function ${n('xayNha')}`, [M('bl', `fill with ${PK('plank')} …`), M('bl', `place ${PK('red')} …`)], 'fn')}</div><ul>
      <li>Nhóm <span class="k">Functions</span> (Hàm) màu <b style="color:#235789">xanh đậm</b>, trong mục <b>Advanced</b>.</li>
      <li><b>Hàm</b>: <span class="k">gói nhiều lệnh</span> lại và <b>đặt một cái tên</b>.</li>
      <li>Tạo hàm: bấm <code>Make a Function...</code> → đặt tên → <code>Done</code>.</li></ul>`,
    quiz: [
      { q: 'Hàm (function) trong MakeCode dùng để làm gì?', o: ['Đổi màu khối', 'Gói nhiều lệnh lại và đặt tên', 'Đổi thời tiết', 'Xoá chương trình'], a: 1, why: 'Hàm gom nhiều lệnh thành một khối có tên.' },
      { q: 'Muốn tạo một hàm mới, em bấm nút:', o: ['Make a Variable...', 'Extensions', 'Make a Function...', 'on start'], a: 2, why: 'Make a Function... dùng để tạo hàm mới.' } ] },
  { id: 't2', c: ['#FFA62B', '#FF5DA2'], dk: '#D9480F', title: 'Gọi hàm: call',
    tip: 'Hàm chỉ chạy khi được gọi – tạo xong mà không call thì không có gì xảy ra!',
    html: `<div class="blocks">${MC('pl', `on chat command ${s('nha')}`, [M('fn', 'call xayNha'), M('pl', `teleport to ${P3('~', 6, 0, 0)}`), M('fn', 'call xayNha')], true)}</div><ul>
      <li><b>call xayNha</b>: <span class="k">gọi</span> hàm → chạy <b>tất cả</b> lệnh bên trong.</li>
      <li>Gọi bao nhiêu lần cũng được: viết <b>1 lần</b>, dùng <b>nhiều lần</b>.</li>
      <li>Hàm <span class="k">chỉ chạy khi được gọi</span>.</li></ul>`,
    quiz: [
      { q: 'Hàm xayNha đã tạo nhưng chưa có lệnh call. Chạy chương trình thì:', o: ['Nhà được xây 1 lần', 'Nhà được xây mãi', 'Báo lỗi', 'Chưa có ngôi nhà nào'], a: 3, why: 'Hàm chỉ chạy khi được gọi bằng call.' },
      { q: 'Trong chương trình mẫu, gõ "nha" một lần sẽ xây mấy ngôi nhà?', o: ['2', '1', '3', '0'], a: 0, why: 'Có 2 lệnh call xayNha → 2 ngôi nhà.' } ] },
  { id: 't3', c: ['#7AD86F', '#14A0A0'], dk: '#087F5B', title: 'Hàm có tham số',
    tip: 'Tham số giống ô trống để điền: mỗi lần gọi điền một số khác!',
    html: `<div class="blocks">${MC('fn', `function ${n('xayThap')} ${VR('chieuCao')}`, [M('bl', `fill with ${PK('stone')}<br>from ${P3('~', 2, 0, 0)}<br>to ${MR('po', `~ ${n(2)} ~ ${MR('va', 'chieuCao')} ~ ${n(0)}`, 'sd')}`)], 'fn')}${M('fn', `call xayThap ${n(5)}`)}</div><ul>
      <li><b>Tham số</b>: thông tin <span class="k">đưa vào</span> khi gọi hàm.</li>
      <li>Thêm ở cửa sổ <b>Edit Function</b>: Text, Boolean, <b>Number</b>, Array, Position.</li></ul>`,
    quiz: [
      { q: 'call xayThap 5 thì tham số chieuCao nhận giá trị:', o: ['0', 'xayThap', '5', 'Không có'], a: 2, why: 'Số 5 được đưa vào tham số chieuCao.' },
      { q: 'Loại tham số nào KHÔNG có trong cửa sổ Edit Function?', o: ['Number', 'Text', 'Position', 'Weather'], a: 3, why: 'Có Text, Boolean, Number, Array, Position – không có Weather.' } ] },
  { id: 't4', c: ['#4F7CFF', '#B06BFF'], dk: '#5F3DC4', title: 'Hàm trả kết quả: return',
    tip: 'return như máy bán nước: đưa tiền vào, nhận lon nước ra!',
    html: `<div class="blocks">${MC('fn', `function ${n('tinhTong')} ${VR('a')} ${VR('b')}`, [M('fn', `return ${MR('ma', `${MR('va', 'a')} ${dd('+')} ${MR('va', 'b')}`)}`)], 'fn')}${M('pl', `say ${MR('fn', `call tinhTong ${n(3)} ${n(4)}`)}`)}</div><ul>
      <li><b>return</b>: hàm <span class="k">trả về một kết quả</span>.</li>
      <li>Hàm có return thì lệnh <b>call</b> thành <b>khối tròn</b>, lắp vào ô khác.</li></ul>`,
    quiz: [
      { q: 'Khối say (call tinhTong 3 4) sẽ hiện số nào?', o: ['7', '34', '12', '1'], a: 0, why: 'Hàm trả về a + b = 3 + 4 = 7.' },
      { q: 'Lệnh return trong hàm dùng để:', o: ['Thoát khỏi Minecraft', 'Trả kết quả về chỗ gọi hàm', 'Lặp lại hàm', 'Đổi tên hàm'], a: 1, why: 'return gửi kết quả về nơi gọi hàm.' } ] },
  { id: 't5', c: ['#FF595E', '#FFB14E'], dk: '#C92A2A', title: 'Vì sao nên dùng hàm?',
    tip: 'Sửa 1 chỗ trong hàm là mọi ngôi nhà gọi hàm đều đổi theo!',
    html: `<div class="chips"><span class="chip" style="background:#2DA44E">Ngắn gọn</span><span class="chip" style="background:#FF7F11">Dễ đọc</span><span class="chip" style="background:#8338EC">Dễ sửa</span><span class="chip" style="background:#1982C4">Dùng lại</span></div><ul>
      <li>Chương trình <span class="k">ngắn gọn</span>: không phải kéo lại cùng một nhóm lệnh.</li>
      <li><span class="k">Dễ sửa</span>: sửa trong hàm, mọi lần gọi đều đổi theo.</li>
      <li>Tên hàm rõ nghĩa giúp <b>đọc chương trình</b> như đọc truyện.</li>
      <li>Chia việc lớn thành <b>nhiều hàm nhỏ</b>: xayNen, xayTuong, lopMai.</li></ul>`,
    quiz: [
      { q: 'Hàm xayNha được gọi ở 5 chỗ. Muốn đổi màu mái cho cả 5 nhà, em sửa:', o: ['Cả 5 chỗ gọi', 'Lệnh on start', 'Một lần bên trong hàm xayNha', 'Không sửa được'], a: 2, why: 'Sửa trong hàm thì mọi lần gọi đều đổi theo.' },
      { q: 'Điều nào KHÔNG phải lợi ích của hàm?', o: ['Chương trình ngắn gọn', 'Dùng lại nhiều lần', 'Dễ sửa', 'Làm máy tính chạy mãi không dừng'], a: 3, why: 'Hàm giúp gọn, dễ sửa, dùng lại – không làm chương trình chạy mãi.' } ] },
];

const KEY = ['Hàm = <b>gói lệnh có tên</b><br>Make a Function...', '<b>call</b> tên hàm<br>viết 1 lần, gọi nhiều lần', '<b>Tham số</b>: thông tin<br>đưa vào khi gọi',
  '<b>return</b>: trả kết quả<br>call thành khối tròn', 'Gọn • dễ đọc<br>dễ sửa • dùng lại'];
