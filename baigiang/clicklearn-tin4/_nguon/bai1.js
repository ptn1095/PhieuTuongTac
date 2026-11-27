/* ===== BÀI 1: PHẦN CỨNG VÀ PHẦN MỀM MÁY TÍNH ===== */
const META = { key: 'bai1', num: 1, theme: 'vutru', ic: '🧩', cd: 1, en: 'Phần cứng và phần mềm máy tính',
  title: 'Bài 1. Phần cứng và phần mềm máy tính', big: 'Phần cứng<br>và phần mềm',
  st2: 'Chủ đề 1 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Phi hành gia nhí ơi, cùng khám phá phần cứng và phần mềm của con tàu máy tính nhé!',
  cert: 'Tin học 4 – Bài 1. Phần cứng và phần mềm máy tính', file: 'Tin4_Bai1', pass: 8 };

const COVER = () => svgC(`${desk(60, 50, .85)}${pillS(370, 70, 200, 50, '#FF7F11', 'Phần cứng', 24)}${pillS(370, 150, 200, 50, '#8338EC', 'Phần mềm', 24)}${star(560, 300, 14, '#FFD60A')}${star(420, 260, 10, '#FF006E')}`);
const ILL_T = {
  t1: () => svg(`${desk(40, 40, .8)}${printer(470, 110, .7)}${speaker(480, 250, .6)}
    ${pillS(40, 335, 520, 54, '#FF7F11', 'Phần cứng: cầm, chạm được', 24)}`),
  t2: () => svg(`${monitor(60, 40, 300, 190, `${pillS(80, 60, 120, 40, '#FF006E', 'Paint', 20)}${pillS(220, 60, 120, 40, '#1982C4', 'Word', 20)}${pillS(80, 120, 260, 40, '#2DA44E', 'Trò chơi', 20)}`)}
    ${pillS(390, 90, 190, 50, '#8338EC', 'Chương trình', 22)}${pillS(40, 335, 520, 54, '#8338EC', 'Phần mềm: chương trình', 24)}`),
  t3: () => svg(`${casePC(80, 60, 1)}${arr(190, 140, 260, 140, O, 7)}${chip(330, 140, .7, '#8338EC', 'PM')}${arr(400, 140, 460, 140, O, 7)}${monitor(470, 100, 90, 60)}
    ${pillS(20, 280, 270, 50, '#FF7F11', 'Phần cứng', 24)}${pillS(310, 280, 270, 50, '#8338EC', 'Phần mềm', 24)}${pillS(80, 350, 440, 46, '#2DA44E', 'Phối hợp cùng làm việc', 22)}`),
  t4: () => svg(`${tlist([[1, '#2DA44E', 'Giữ máy sạch, khô ráo'], [1, '#1982C4', 'Tắt máy đúng cách'], [0, '#E5383B', 'Tự ý cài, xoá phần mềm'], [0, '#FF7F11', 'Ăn uống cạnh máy']], 60, 92, 24)}`),
  t5: () => svg(`${vflow([['#FF7F11', 'Phần cứng'], ['#8338EC', 'Phần mềm'], ['#2DA44E', 'Cùng phối hợp']], 150, 40, 300, 110, 26)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Phần cứng máy tính', tip: 'Thứ gì sờ được, cầm được – đó là phần cứng!',
    html: S4Q(['Kể tên các thiết bị của máy tính mà em <b>chạm vào được</b>.', 'Gợi ý: màn hình, bàn phím…'],
      ['Phần cứng là gì?', 'Là các <b>thiết bị</b> của máy tính, nhìn thấy, <b>chạm vào được</b>.'],
      ['Kể thêm thiết bị phần cứng nối với máy tính?', '<b>Máy in</b>, <b>loa</b>, tai nghe, micro, webcam.'],
      ['<span class="k">Phần cứng</span>: chạm vào được.', 'Màn hình, thân máy, <b>bàn phím, chuột</b>.', 'Máy in, loa… cũng là <b>phần cứng</b>.']),
    quiz: [
      { q: 'Thiết bị nào là phần cứng?', o: ['Phần mềm Paint', 'Trò chơi', 'Bàn phím', 'Chương trình Word'], a: 2, why: 'Bàn phím là thiết bị chạm vào được – phần cứng.' },
      { q: 'Phần cứng máy tính là những thứ:', o: ['Nhìn thấy, chạm vào được', 'Không nhìn thấy', 'Chỉ có trên mạng', 'Chỉ là chữ'], a: 0, why: 'Phần cứng là thiết bị có hình dạng, chạm vào được.' } ] },
  { id: 't2', name: 'Phần mềm máy tính', tip: 'Phần mềm là chương trình – không cầm được nhưng rất quan trọng!',
    html: S4Q(['Kể tên các <b>chương trình</b> em đã dùng trên máy tính.', ''],
      ['Phần mềm là gì?', 'Là các <b>chương trình</b> giúp máy tính làm việc; <b>không chạm</b> vào được.'],
      ['Kể tên vài phần mềm?', '<b>Paint</b> (vẽ), <b>Word</b> (soạn thảo), <b>PowerPoint</b>, trò chơi…'],
      ['<span class="k">Phần mềm</span> là chương trình.', 'Không <b>cầm, chạm</b> được.', 'Mỗi phần mềm làm <b>một việc</b>.']),
    quiz: [
      { q: 'Đâu là phần mềm?', o: ['Con chuột', 'Màn hình', 'Máy in', 'Phần mềm vẽ Paint'], a: 3, why: 'Paint là chương trình – phần mềm.' },
      { q: 'Phần mềm dùng để soạn thảo văn bản là:', o: ['Paint', 'Word', 'Máy in', 'Loa'], a: 1, why: 'Word là phần mềm soạn thảo văn bản.' } ] },
  { id: 't3', name: 'Phần cứng và phần mềm phối hợp', tip: 'Như cơ thể và suy nghĩ – thiếu một là không chạy!',
    html: S4Q(['Máy tính <b>không có phần mềm</b> thì có làm việc được không?', ''],
      ['Phần mềm cần gì để chạy?', 'Cần <b>phần cứng</b>: phần mềm được cài và chạy trên máy.'],
      ['Phần cứng cần phần mềm không?', '<b>Có</b>, phần mềm điều khiển phần cứng làm việc.'],
      ['Phần mềm chạy trên <b>phần cứng</b>.', 'Phần mềm <b>điều khiển</b> phần cứng.', 'Hai phần <span class="k">phối hợp</span> với nhau.']),
    quiz: [
      { q: 'Câu nào ĐÚNG?', o: ['Phần mềm không cần phần cứng', 'Phần cứng và phần mềm phối hợp để máy làm việc', 'Chỉ cần phần cứng', 'Chỉ cần phần mềm'], a: 1, why: 'Máy tính làm việc nhờ cả phần cứng và phần mềm.' },
      { q: 'Phần mềm được cài đặt và chạy trên:', o: ['Phần cứng máy tính', 'Tờ giấy', 'Bảng đen', 'Quyển sách'], a: 0, why: 'Phần mềm được cài vào máy tính – phần cứng.' } ] },
  { id: 't4', name: 'Giữ gìn máy tính', tip: 'Máy sạch, tắt đúng cách – máy bền lâu!',
    html: S4Q(['Nêu những việc làm giúp máy tính <b>bền, chạy tốt</b>.', ''],
      ['Bảo vệ phần cứng thế nào?', 'Giữ máy <b>sạch, khô</b>; không ăn uống cạnh máy; tắt máy đúng cách.'],
      ['Bảo vệ phần mềm thế nào?', '<b>Không tự ý</b> cài đặt, xoá phần mềm khi chưa được phép.'],
      ['Giữ máy <b>sạch, khô ráo</b>.', 'Tắt máy <b>đúng cách</b>.', '<span class="k">Không tự ý</span> cài, xoá phần mềm.']),
    quiz: [
      { q: 'Việc nào giúp bảo vệ phần cứng?', o: ['Ăn bánh trên bàn phím', 'Đổ nước gần máy', 'Rút điện để tắt máy', 'Giữ máy sạch, khô ráo'], a: 3, why: 'Giữ máy sạch, khô giúp phần cứng bền lâu.' },
      { q: 'Em muốn cài một trò chơi mới vào máy ở trường. Em nên:', o: ['Tự cài ngay', 'Xoá phần mềm khác', 'Xin phép thầy cô', 'Cài lúc không ai thấy'], a: 2, why: 'Không tự ý cài đặt phần mềm khi chưa được phép.' } ] },
  { id: 't5', name: 'Máy tính gồm hai phần', tip: 'Ôn lại: phần cứng – phần mềm – phối hợp!',
    html: S4Q(['Phân loại: <b>chuột, Paint, loa, Word</b> vào phần cứng hoặc phần mềm.', ''],
      ['Thiết bị nào là phần cứng?', '<b>Chuột</b>, <b>loa</b>.'],
      ['Chương trình nào là phần mềm?', '<b>Paint</b>, <b>Word</b>.'],
      ['Phần cứng: <b>thiết bị</b>.', 'Phần mềm: <b>chương trình</b>.', 'Cùng nhau giúp máy <span class="k">hoạt động</span>.']),
    quiz: [
      { q: 'Nhóm nào toàn là phần cứng?', o: ['Chuột, loa, máy in', 'Paint, Word', 'Word, chuột', 'Trò chơi, loa'], a: 0, why: 'Chuột, loa, máy in đều là thiết bị.' },
      { q: 'Nhóm nào toàn là phần mềm?', o: ['Màn hình, bàn phím', 'Loa, tai nghe', 'Thân máy, chuột', 'PowerPoint, Paint'], a: 3, why: 'PowerPoint và Paint là chương trình.' } ] },
];

const KEY = [
  'Phần cứng:<br><b>chạm được</b>.',
  'Phần mềm:<br><b>chương trình</b>.',
  'Hai phần<br><b>phối hợp</b>.',
  'Giữ sạch,<br><b>không tự ý cài</b>.',
  'Thiết bị –<br><b>chương trình</b>.',
];
