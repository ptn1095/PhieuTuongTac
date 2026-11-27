/* ===== BÀI 14: KHÁM PHÁ MÔI TRƯỜNG LẬP TRÌNH TRỰC QUAN ===== */
const META = { key: 'bai14', num: 14, theme: 'nghinle', ic: '🧱', cd: 6, en: 'Môi trường lập trình trực quan',
  title: 'Bài 14. Khám phá môi trường lập trình trực quan', big: 'Môi trường<br>lập trình<br>trực quan',
  st2: 'Chủ đề 6 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Như thảm bay thần kì, Scratch đưa em vào thế giới lập trình!',
  cert: 'Tin học 4 – Bài 14. Môi trường lập trình trực quan', file: 'Tin4_Bai14', pass: 8 };

const COVER = () => svgC(`${sblock(60, 60, 220, '#FFAB19', 'khi bấm cờ xanh', 20)}${sblock(60, 116, 220, '#4C97FF', 'đi 10 bước', 20)}${sblock(60, 172, 220, '#9966FF', 'nói Xin chào!', 20)}${stageB(330, 50, 240, 200, `${sprite(450, 170, .55)}`)}${star(560, 320, 14, '#FFD60A')}`);
const ILL_T = {
  t1: () => svg(`<rect x="20" y="20" width="560" height="290" rx="14" fill="#fff" ${ST}/>
    <rect x="34" y="34" width="120" height="262" rx="8" fill="#E7F5FF" stroke="${O}" stroke-width="4"/><rect x="164" y="34" width="190" height="262" rx="8" fill="#F8F9FA" stroke="${O}" stroke-width="4"/>${stageB(364, 34, 202, 150, `${sprite(465, 120, .4)}`)}<rect x="364" y="194" width="202" height="102" rx="8" fill="#FFF3BF" stroke="${O}" stroke-width="4"/>
    ${txt(94, 170, 'Lệnh', 22)}${txt(259, 170, 'Lập trình', 22)}${txt(465, 252, 'Nhân vật', 22)}${pillS(80, 330, 440, 50, '#8338EC', 'Các vùng làm việc', 26)}`),
  t2: () => svg(`${[['Chuyển động', '#4C97FF'], ['Hiển thị', '#9966FF'], ['Âm thanh', '#CF63CF'], ['Sự kiện', '#FFAB19'], ['Điều khiển', '#FFBF00']].map(([t, c], i) => `<circle cx="80" cy="${45 + i*58}" r="20" fill="${c}" ${ST}/>${pillS(115, 22 + i*58, 220, 46, c, t, 20)}`).join('')}
    ${sblock(370, 120, 200, '#4C97FF', 'đi 10 bước', 20)}${pillS(370, 320, 200, 54, '#8338EC', 'Nhóm lệnh', 24)}`),
  t3: () => svg(`${sblock(60, 80, 190, '#4C97FF', 'đi 10 bước', 20)}${arr(260, 105, 340, 160, O, 7)}${sblock(340, 140, 200, '#FFAB19', 'khi bấm cờ', 20)}${sblock(340, 190, 200, '#4C97FF', 'đi 10 bước', 20)}
    ${pillS(40, 320, 520, 54, '#FF7F11', 'Kéo thả lệnh vào vùng lập trình', 22)}`),
  t4: () => svg(`${stageB(40, 30, 340, 260, `${sprite(150, 200, .6)}${dline(190, 200, 300, 200, '#FF006E')}${arrowHead(310, 200, 0, '#FF006E')}`)}
    ${pillS(400, 60, 180, 46, '#1982C4', 'x: 0', 22)}${pillS(400, 120, 180, 46, '#FF7F11', 'y: 0', 22)}${pillS(40, 320, 520, 54, '#2DA44E', 'Sân khấu: nơi nhân vật hoạt động', 22)}`),
  t5: () => svg(`${vflow([['#8338EC', 'Khu vực lệnh'], ['#FF7F11', 'Vùng lập trình'], ['#2DA44E', 'Sân khấu, nhân vật']], 150, 40, 300, 110, 26)}${star(60, 60, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Giao diện Scratch', tip: 'Bên trái là lệnh, giữa là chỗ ghép, bên phải là sân khấu!',
    html: S4Q(['Mở Scratch, chỉ ra các <b>vùng làm việc</b> chính.', ''],
      ['Giao diện Scratch có những vùng nào?', '<b>Khu vực lệnh</b>, <b>vùng lập trình</b>, <b>sân khấu</b>, vùng <b>nhân vật</b>.'],
      ['Vùng lập trình dùng để làm gì?', 'Để <b>kéo thả, ghép</b> các khối lệnh thành chương trình.'],
      ['Trái: <span class="k">khu vực lệnh</span>.', 'Giữa: <b>vùng lập trình</b>.', 'Phải: <b>sân khấu</b> và nhân vật.']),
    quiz: [
      { q: 'Em ghép các khối lệnh ở vùng nào?', o: ['Sân khấu', 'Vùng lập trình', 'Thanh tiêu đề', 'Vùng nhân vật'], a: 1, why: 'Vùng lập trình là nơi ghép khối lệnh.' },
      { q: 'Nhân vật hoạt động ở vùng nào?', o: ['Sân khấu', 'Khu vực lệnh', 'Thanh công cụ', 'Thùng rác'], a: 0, why: 'Sân khấu là nơi nhân vật hoạt động.' } ] },
  { id: 't2', name: 'Các nhóm lệnh', tip: 'Mỗi nhóm lệnh một màu – nhìn màu là biết nhóm!',
    html: S4Q(['Kể tên các <b>nhóm lệnh</b> trong khu vực lệnh.', ''],
      ['Có những nhóm lệnh nào?', '<b>Chuyển động</b>, <b>Hiển thị</b>, <b>Âm thanh</b>, <b>Sự kiện</b>, <b>Điều khiển</b>…'],
      ['Lệnh “đi 10 bước” thuộc nhóm nào?', 'Nhóm <b>Chuyển động</b> (màu xanh dương).'],
      ['Lệnh chia thành <span class="k">các nhóm</span>.', 'Mỗi nhóm có <b>màu riêng</b>.', 'Chuyển động: <b>xanh dương</b>.']),
    quiz: [
      { q: 'Lệnh “đi 10 bước” thuộc nhóm lệnh:', o: ['Âm thanh', 'Sự kiện', 'Hiển thị', 'Chuyển động'], a: 3, why: 'Đi 10 bước làm nhân vật di chuyển – nhóm Chuyển động.' },
      { q: 'Lệnh “nói Xin chào!” thuộc nhóm:', o: ['Chuyển động', 'Âm thanh', 'Hiển thị', 'Điều khiển'], a: 2, why: 'Lệnh nói hiện bóng thoại – nhóm Hiển thị.' } ] },
  { id: 't3', name: 'Kéo thả khối lệnh', tip: 'Kéo lệnh ra, thả vào gần khối kia – chúng tự dính lại!',
    html: S4Q(['Kéo lệnh “<b>đi 10 bước</b>” vào vùng lập trình.', ''],
      ['Đưa lệnh vào vùng lập trình thế nào?', '<b>Kéo thả</b> khối lệnh từ khu vực lệnh sang vùng lập trình.'],
      ['Ghép hai lệnh với nhau thế nào?', 'Thả lệnh <b>sát bên dưới</b> lệnh kia, chúng <b>tự khớp</b> lại.'],
      ['<span class="k">Kéo thả</span> lệnh vào vùng lập trình.', 'Thả sát dưới để <b>ghép lệnh</b>.', 'Kéo lệnh ra ngoài để <b>xoá</b>.']),
    quiz: [
      { q: 'Để đưa khối lệnh vào vùng lập trình, em:', o: ['Gõ tên lệnh', 'Kéo thả khối lệnh', 'Nháy đúp sân khấu', 'Nhấn F5'], a: 1, why: 'Kéo thả khối lệnh vào vùng lập trình.' },
      { q: 'Muốn xoá một khối lệnh khỏi vùng lập trình, em:', o: ['Kéo nó trở lại khu vực lệnh', 'Nhấn cờ xanh', 'Đổi ngôn ngữ', 'Tắt máy'], a: 0, why: 'Kéo khối lệnh ra khu vực lệnh để xoá.' } ] },
  { id: 't4', name: 'Sân khấu và nhân vật', tip: 'Nhân vật đứng trên sân khấu, làm theo lệnh em ghép!',
    html: S4Q(['Nháy vào lệnh “<b>đi 10 bước</b>”. Nhân vật thay đổi thế nào?', ''],
      ['Nhân vật làm gì khi em nháy lệnh?', 'Nhân vật <b>di chuyển 10 bước</b> trên sân khấu.'],
      ['Chọn nhân vật khác ở đâu?', 'Ở <b>vùng nhân vật</b> bên dưới sân khấu.'],
      ['Nhân vật làm theo <span class="k">lệnh</span>.', 'Sân khấu là nơi <b>hoạt động</b>.', 'Chọn nhân vật ở <b>vùng nhân vật</b>.']),
    quiz: [
      { q: 'Nháy vào lệnh “đi 10 bước”, nhân vật sẽ:', o: ['Biến mất', 'Đổi màu', 'Nói chuyện', 'Di chuyển 10 bước'], a: 3, why: 'Nhân vật thực hiện đúng lệnh: đi 10 bước.' },
      { q: 'Vùng để chọn, thêm nhân vật nằm ở:', o: ['Khu vực lệnh', 'Dưới sân khấu', 'Vùng lập trình', 'Thanh tiêu đề'], a: 1, why: 'Vùng nhân vật nằm bên dưới sân khấu.' } ] },
  { id: 't5', name: 'Em khám phá Scratch', tip: 'Ôn lại: lệnh – vùng lập trình – sân khấu!',
    html: S4Q(['Ghép 2 lệnh làm nhân vật <b>đi rồi nói</b> “Xin chào!”.', ''],
      ['Em dùng những lệnh nào?', '“<b>đi 10 bước</b>” (Chuyển động) và “<b>nói Xin chào!</b>” (Hiển thị).'],
      ['Môi trường trực quan là gì?', 'Lập trình bằng <b>khối lệnh</b> nhìn thấy, kéo thả, không cần gõ lệnh.'],
      ['Lập trình <span class="k">trực quan</span>: kéo thả.', 'Lệnh xếp theo <b>nhóm màu</b>.', 'Nhân vật làm theo <b>chương trình</b>.']),
    quiz: [
      { q: 'Lập trình trực quan trong Scratch là:', o: ['Gõ lệnh bằng chữ dài', 'Kéo thả các khối lệnh', 'Vẽ tranh', 'Viết văn'], a: 1, why: 'Scratch lập trình bằng cách kéo thả khối lệnh.' },
      { q: 'Nhân vật trên sân khấu thực hiện:', o: ['Các lệnh em ghép', 'Những gì nó thích', 'Lệnh của máy in', 'Không gì cả'], a: 0, why: 'Nhân vật làm theo chương trình em ghép.' } ] },
];

const KEY = [
  'Lệnh – lập trình<br>– <b>sân khấu</b>.',
  'Nhóm lệnh<br><b>theo màu</b>.',
  '<b>Kéo thả</b>,<br>ghép lệnh.',
  'Nhân vật<br><b>làm theo lệnh</b>.',
  'Lập trình<br><b>trực quan</b>.',
];
