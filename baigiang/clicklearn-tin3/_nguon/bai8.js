/* ===== BÀI 8: SƠ ĐỒ HÌNH CÂY. TỔ CHỨC THÔNG TIN TRONG MÁY TÍNH ===== */
const META = { key: 'bai8', num: 8, theme: 'go', ic: '🌳', cd: 3, en: 'Sơ đồ hình cây',
  title: 'Bài 8. Sơ đồ hình cây. Tổ chức thông tin trong máy tính', big: 'Sơ đồ<br>hình cây',
  st2: 'Chủ đề 3 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Trong rừng tre có rất nhiều cây – hôm nay ta học sơ đồ hình cây nhé!',
  cert: 'Tin học 3 – Bài 8. Sơ đồ hình cây', file: 'Tin3_Bai8', pass: 8 };

const COVER = () => svgC(`${tree(110, 170, 1)}${treeD(370, 40, ['#8338EC', 'Lớp 3A'], [['#FF006E', 'Tổ 1'], ['#1982C4', 'Tổ 2'], ['#2DA44E', 'Tổ 3']], 170, 22, 140)}${star(560, 330, 14, '#FFD60A')}`);
const ILL_T = {
  t1: () => svg(`${treeD(300, 30, ['#8338EC', 'Gia đình em'], [['#FF006E', 'Bố'], ['#FF7F11', 'Mẹ'], ['#1982C4', 'Anh'], ['#2DA44E', 'Em']], 220, 24, 150)}
    ${pillS(110, 330, 380, 50, '#8338EC', 'Sơ đồ hình cây', 26)}`),
  t2: () => svg(`${treeD(300, 20, ['#8338EC', 'Trường'], [['#FF006E', 'Lớp 3A'], ['#1982C4', 'Lớp 3B']], 180, 24, 110)}${treeD(205, 130, ['#FF006E', 'Lớp 3A'], [['#FF7F11', 'Tổ 1'], ['#FFC300', 'Tổ 2']], 176, 22, 120)}
    ${pillS(40, 345, 520, 46, '#2DA44E', 'Gốc ở trên, các nhánh toả xuống', 22)}`),
  t3: () => svg(`${folder(300, 80, 1.1, '#FFC300', 'Học tập')}${[[120, '#FF7F11', 'Toán'], [300, '#1982C4', 'Tin học'], [480, '#2DA44E', 'Vẽ']].map(([x, c, t]) => `<path d="M300 140 V180 H${x} V215" fill="none" stroke="${O}" stroke-width="5"/>${folder(x, 260, .8, c, t)}`).join('')}
    ${pillS(110, 340, 380, 50, '#8338EC', 'Thư mục trong thư mục', 22)}`),
  t4: () => svg(`${folder(160, 140, 1.4, '#FFC300', 'Tranh vẽ')}${arr(270, 150, 330, 150, O, 7)}${fileI(400, 140, .9, '#FF006E', 'hoa')}${fileI(510, 140, .9, '#1982C4', 'cá')}
    ${pillS(30, 300, 260, 50, '#FF7F11', 'Thư mục', 24)}${pillS(330, 300, 240, 50, '#1982C4', 'Tệp', 24)}`),
  t5: () => svg(`${treeD(300, 30, ['#FFC300', 'Ổ đĩa D'], [['#FF006E', 'Học tập'], ['#1982C4', 'Giải trí'], ['#2DA44E', 'Ảnh']], 200, 24, 140)}
    ${pillS(70, 330, 460, 50, '#8338EC', 'Cây thư mục trong máy tính', 22)}`),
};

const TOPICS = [
  { id: 't1', name: 'Sơ đồ hình cây là gì?', tip: 'Sơ đồ có gốc và các nhánh giống như cái cây!',
    html: S4Q(['Vẽ sơ đồ các thành viên trong <b>gia đình em</b>.', 'Gợi ý: “Gia đình em” ở trên cùng.'],
      ['Sơ đồ hình cây gồm những phần nào?', 'Một <b>gốc</b> ở trên và các <b>nhánh</b> toả xuống.'],
      ['Sơ đồ hình cây giúp gì?', 'Giúp thông tin được trình bày <b>rõ ràng, dễ nhìn</b>.'],
      ['Sơ đồ có <span class="k">gốc</span> và các nhánh.', 'Giúp tổ chức thông tin <b>rõ ràng</b>.', 'Nhìn sơ đồ là <b>hiểu ngay</b>.']),
    quiz: [
      { q: 'Sơ đồ hình cây gồm:', o: ['Gốc và các nhánh', 'Chỉ có chữ', 'Các con số', 'Bảng màu'], a: 0, why: 'Sơ đồ hình cây có một gốc và nhiều nhánh.' },
      { q: 'Sơ đồ hình cây giúp:', o: ['Trồng cây nhanh lớn', 'Thông tin rõ ràng, dễ hiểu', 'Vẽ tranh đẹp', 'Gõ phím nhanh'], a: 1, why: 'Sơ đồ hình cây giúp tổ chức thông tin rõ ràng.' } ] },
  { id: 't2', name: 'Đọc sơ đồ hình cây', tip: 'Đi từ gốc xuống nhánh là tìm được thông tin!',
    html: S4Q(['Vẽ sơ đồ: <b>Trường</b> có các lớp, mỗi lớp có các tổ.', ''],
      ['Trong sơ đồ, “Trường” nằm ở đâu?', 'Nằm ở <b>gốc</b> – trên cùng của sơ đồ.'],
      ['Muốn tìm Tổ 1 lớp 3A, em đi thế nào?', 'Từ <b>Trường</b> → <b>Lớp 3A</b> → <b>Tổ 1</b>.'],
      ['Gốc ở <b>trên cùng</b>.', 'Nhánh có thể có <span class="k">nhánh con</span>.', 'Đi <b>từ gốc xuống</b> để tìm.']),
    quiz: [
      { q: 'Trong sơ đồ “Trường → Lớp → Tổ”, gốc của sơ đồ là:', o: ['Tổ', 'Lớp', 'Học sinh', 'Trường'], a: 3, why: 'Trường nằm trên cùng, là gốc của sơ đồ.' },
      { q: 'Muốn tìm thông tin trên sơ đồ hình cây, em đi:', o: ['Từ gốc xuống các nhánh', 'Ngẫu nhiên', 'Từ dưới lên trời', 'Không đi được'], a: 0, why: 'Đi từ gốc qua các nhánh sẽ tìm thấy thông tin.' } ] },
  { id: 't3', name: 'Thư mục trong máy tính', tip: 'Thư mục như chiếc hộp, trong hộp còn có hộp nhỏ!',
    html: S4Q(['Máy tính có thư mục <b>Học tập</b>. Trong đó có gì?', ''],
      ['Thư mục dùng để làm gì?', 'Để <b>chứa</b> tệp và các thư mục khác.'],
      ['Thư mục nằm trong thư mục khác gọi là gì?', 'Gọi là <b>thư mục con</b>.'],
      ['<span class="k">Thư mục</span> chứa tệp, thư mục con.', 'Biểu tượng hình <b>túi hồ sơ</b> màu vàng.', 'Đặt tên thư mục <b>rõ nghĩa</b>.']),
    quiz: [
      { q: 'Thư mục “Toán” nằm trong thư mục “Học tập”. “Toán” là:', o: ['Tệp', 'Thư mục con', 'Ổ đĩa', 'Phần mềm'], a: 1, why: 'Thư mục nằm trong thư mục khác là thư mục con.' },
      { q: 'Biểu tượng thư mục trong máy tính thường có hình:', o: ['Con chuột', 'Bông hoa', 'Túi hồ sơ màu vàng', 'Ngôi sao'], a: 2, why: 'Thư mục có biểu tượng túi hồ sơ màu vàng.' } ] },
  { id: 't4', name: 'Tệp và thư mục', tip: 'Bài vẽ, bài viết của em được lưu thành tệp đó!',
    html: S4Q(['Bài vẽ bông hoa của em được <b>lưu</b> trong máy tính dưới dạng gì?', ''],
      ['Tệp là gì?', 'Là nơi <b>lưu thông tin</b>: bài vẽ, bài văn, bài hát…'],
      ['Tệp và thư mục khác nhau thế nào?', 'Tệp <b>chứa thông tin</b>; thư mục <b>chứa tệp</b> và thư mục con.'],
      ['<span class="k">Tệp</span> lưu bài vẽ, bài viết…', '<b>Thư mục</b> chứa các tệp.', 'Mỗi tệp, thư mục có <b>tên</b> riêng.']),
    quiz: [
      { q: 'Bài vẽ em làm trên máy tính được lưu thành:', o: ['Một tệp', 'Bàn phím', 'Một con chuột', 'Màn hình'], a: 0, why: 'Thông tin như bài vẽ được lưu thành tệp.' },
      { q: 'Thứ chứa được nhiều tệp là:', o: ['Phím cách', 'Con chuột', 'Loa', 'Thư mục'], a: 3, why: 'Thư mục chứa được nhiều tệp và thư mục con.' } ] },
  { id: 't5', name: 'Cây thư mục', tip: 'Ôn lại: gốc – nhánh – thư mục – tệp!',
    html: S4Q(['Vẽ <b>cây thư mục</b> cho các bài học của em.', ''],
      ['Thư mục trong máy tính được tổ chức thế nào?', 'Theo <b>sơ đồ hình cây</b> gọi là <b>cây thư mục</b>.'],
      ['Tổ chức như vậy có lợi gì?', 'Thông tin <b>gọn gàng</b>, <b>dễ tìm</b>.'],
      ['Thư mục xếp thành <span class="k">cây thư mục</span>.', 'Tệp nằm trong <b>thư mục</b>.', 'Giúp tìm thông tin <b>nhanh</b>.']),
    quiz: [
      { q: 'Cách tổ chức thư mục trong máy tính giống:', o: ['Sơ đồ hình cây', 'Một đường thẳng', 'Hình tròn', 'Bảng cửu chương'], a: 0, why: 'Thư mục được tổ chức theo dạng hình cây.' },
      { q: 'Câu nào ĐÚNG?', o: ['Tệp chứa thư mục', 'Thư mục chứa tệp và thư mục con', 'Tệp không có tên', 'Thư mục chỉ chứa 1 tệp'], a: 1, why: 'Thư mục có thể chứa nhiều tệp và thư mục con.' } ] },
];

const KEY = [
  'Có <b>gốc</b> và<br>các nhánh.',
  'Đi <b>từ gốc</b><br>xuống nhánh.',
  'Thư mục chứa<br><b>thư mục con</b>.',
  '<b>Tệp</b> lưu thông tin.',
  'Máy tính có<br><b>cây thư mục</b>.',
];
