/* ===== BÀI 3: THÔNG TIN TRONG MÁY TÍNH ===== */
const META = { key: 'bai3', theme: 'chibi', num: 3, title: 'Bài 3. Thông tin trong máy tính', big: 'Thông tin<br>trong máy tính',
  st2: 'Chủ đề 1 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Máy tính chỉ "nói" bằng 0 và 1 – cùng tìm hiểu nhé!',
  cert: 'Tin học 6 – Bài 3. Thông tin trong máy tính', file: 'Tin6_Bai3', pass: 8 };

const ILL_T = {
  t1: () => svg(`${bulb(170, 170, 1, false)}${bulb(430, 170, 1, true)}${txt(170, 340, '0', 70)}${txt(430, 340, '1', 70, '#E8890C')}
    ${pillS(150, 360, 300, 46, '#8338EC', 'Tắt – Sáng', 24)}${star(560, 40, 14, '#FFD60A')}`),
  t2: () => svg(`${txt(300, 70, 'Chữ A', 40)}${bits(84, 100, '01000001', 50)}${arr(300, 180, 300, 230, '#FF7F11')}
    ${pillS(110, 250, 380, 54, '#1982C4', 'Dãy bit', 30)}${pillS(40, 330, 520, 50, '#2DA44E', 'Chữ, số, hình, âm thanh → dãy bit', 22)}`),
  t3: () => svg(`${vflow([['#1982C4', '1 byte = 8 bit'], ['#2DA44E', '1 KB = 1024 byte'], ['#FF7F11', '1 MB = 1024 KB'], ['#8338EC', '1 GB = 1024 MB']], 130, 26, 340, 98, 26)}${star(540, 380, 12, '#FFD60A')}`),
  t4: () => svg(`${G(170, 200, 1.2, `<rect x="-60" y="-90" width="120" height="150" rx="18" fill="#1982C4" ${ST}/><rect x="-36" y="-130" width="72" height="44" rx="8" fill="#ADB5BD" ${ST}/><text x="0" y="0" text-anchor="middle" font-size="36" fill="#fff" ${F}>32 GB</text>`)}
    ${pillS(330, 90, 240, 54, '#FF7F11', 'Ảnh ≈ 3 MB', 26)}${pillS(330, 180, 240, 54, '#2DA44E', 'Bài hát ≈ 5 MB', 24)}${pillS(330, 270, 240, 54, '#8338EC', 'Phim ≈ 1 GB', 26)}
    ${star(560, 40, 14, '#FFD60A')}`),
  t5: () => svg(`${tlist([[1, '#1982C4', 'Máy tính dùng 0 và 1 (bit)'], [1, '#2DA44E', 'Byte = 8 bit'], [1, '#FF7F11', 'KB, MB, GB, TB gấp 1024 lần'], [0, '#E5383B', '1 KB = 1000 byte']], 60, 96, 22)}`),
};

const TOPICS = [
  { id: 't1', name: 'Hai trạng thái 0 và 1', tip: 'Bóng đèn chỉ tắt hoặc sáng – máy tính cũng chỉ có 0 và 1!',
    html: S4Q(['Quan sát bóng đèn: nó có <b>mấy trạng thái</b>?', 'Gợi ý: bật công tắc lên, tắt xuống.'],
      ['Đèn tắt, đèn sáng ứng với kí hiệu nào?', 'Đèn tắt ứng với <b>0</b>, đèn sáng ứng với <b>1</b>.'],
      ['Máy tính dùng mấy kí hiệu để lưu mọi thông tin?', 'Chỉ <b>2 kí hiệu</b>: 0 và 1.'],
      ['Máy tính dùng hai kí hiệu <b>0 và 1</b>.', 'Mỗi kí hiệu 0 hoặc 1 gọi là một <b>bit</b>.', 'Mọi thông tin đều <span class="k">biểu diễn bằng bit</span>.']),
    quiz: [
      { q: 'Máy tính dùng những kí hiệu nào để biểu diễn thông tin?', o: ['A và B', 'Từ 0 đến 9', '0 và 1', 'Chỉ số 1'], a: 2, why: 'Máy tính chỉ dùng hai kí hiệu 0 và 1.' },
      { q: 'Mỗi kí hiệu 0 hoặc 1 được gọi là:', o: ['Một bit', 'Một byte', 'Một KB', 'Một tệp'], a: 0, why: 'Bit là đơn vị nhỏ nhất, nhận giá trị 0 hoặc 1.' } ] },
  { id: 't2', name: 'Dãy bit', tip: 'Chữ A trong máy tính là 01000001 đó!',
    html: S4Q(['Tìm hiểu cách máy tính lưu <b>chữ cái A</b>.', ''],
      ['Chữ A được lưu trong máy tính như thế nào?', 'Bằng dãy bit <b>01000001</b>.'],
      ['Hình ảnh, âm thanh, con số có lưu bằng dãy bit được không?', 'Có. Mọi dữ liệu đều được chuyển thành dãy bit.'],
      ['Chữ, số, hình ảnh, âm thanh đều là <b>dãy bit</b>.', 'Máy tính chỉ "hiểu" được <b>0 và 1</b>.', 'Đổi dữ liệu thành dãy bit gọi là <span class="k">số hoá</span>.']),
    quiz: [
      { q: 'Dữ liệu nào được máy tính lưu dưới dạng dãy bit?', o: ['Chỉ văn bản', 'Chỉ số', 'Chỉ hình ảnh', 'Văn bản, số, hình, âm thanh'], a: 3, why: 'Mọi loại dữ liệu đều được chuyển thành dãy bit.' },
      { q: 'Dãy 01000001 gồm bao nhiêu bit?', o: ['8 bit', '6 bit', '2 bit', '10 bit'], a: 0, why: 'Đếm có 8 kí hiệu 0/1, tức 8 bit.' } ] },
  { id: 't3', name: 'Đơn vị đo dung lượng', tip: 'Mỗi bậc lớn hơn gấp 1024 lần – nhớ nhé!',
    html: S4Q(['Đọc bảng các <b>đơn vị đo</b> dung lượng thông tin.', ''],
      ['1 byte, 1 KB, 1 MB bằng bao nhiêu?', '1 byte = 8 bit; 1 KB = 1024 byte; 1 MB = 1024 KB.'],
      ['GB, TB lớn cỡ nào? Đơn vị nào lớn nhất?', '1 GB = 1024 MB; 1 TB = 1024 GB. TB lớn nhất.'],
      ['<b>Byte</b> là đơn vị cơ bản: 1 byte = 8 bit.', 'Thứ tự: byte → KB → MB → GB → TB.', 'Các bậc gấp nhau <span class="k">1024 lần</span>.']),
    quiz: [
      { q: '1 byte bằng bao nhiêu bit?', o: ['2 bit', '8 bit', '10 bit', '1024 bit'], a: 1, why: '1 byte = 8 bit.' },
      { q: '1 KB bằng bao nhiêu byte?', o: ['1000 byte', '100 byte', '1024 byte', '8 byte'], a: 2, why: '1 KB = 1024 byte.' } ] },
  { id: 't4', name: 'USB chứa được bao nhiêu?', tip: 'Đổi về cùng đơn vị rồi chia là ra ngay!',
    html: S4Q(['Ước tính một <b>USB 32 GB</b> chứa được những gì.', ''],
      ['Một ảnh, bài hát, bộ phim chiếm khoảng bao nhiêu?', 'Ảnh ~3 MB, bài hát ~5 MB, bộ phim ~1 GB.'],
      ['USB 32 GB chứa khoảng bao nhiêu bộ phim 1 GB?', 'Khoảng <b>32 bộ phim</b>.'],
      ['<b>Dung lượng nhớ</b>: lượng dữ liệu lưu được.', 'Phim chiếm nhiều chỗ hơn ảnh, bài hát.', 'Chọn thiết bị nhớ <span class="k">đủ dung lượng</span>.']),
    quiz: [
      { q: 'Đơn vị nào lớn nhất?', o: ['KB', 'MB', 'Byte', 'GB'], a: 3, why: 'Thứ tự tăng dần: byte < KB < MB < GB.' },
      { q: 'USB 32 GB chứa được khoảng bao nhiêu phim 1 GB?', o: ['32 phim', '3 phim', '320 phim', '1 phim'], a: 0, why: '32 GB : 1 GB = 32 phim.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Ôn nhanh: bit, byte và các đơn vị đo!',
    html: S4Q(['Tóm tắt bài học bằng <b>3 ý chính</b>.', ''],
      ['Máy tính lưu thông tin bằng gì?', 'Bằng dãy bit gồm các kí hiệu 0 và 1.'],
      ['Các đơn vị đo thông tin hơn kém nhau bao nhiêu?', '1 byte = 8 bit; KB, MB, GB, TB hơn kém nhau 1024 lần.'],
      ['Thông tin trong máy tính là <b>dãy bit</b>.', 'Đơn vị: bit, byte, KB, MB, GB, TB.', 'Dung lượng cho biết <span class="k">lưu được bao nhiêu</span>.']),
    quiz: [
      { q: 'Câu nào đúng?', o: ['1 MB = 1024 KB', '1 MB = 100 KB', '1 KB = 8 bit', '1 GB = 1000 byte'], a: 0, why: '1 MB = 1024 KB.' },
      { q: 'Thông tin trong máy tính được lưu dưới dạng:', o: ['Chữ viết tay', 'Dãy bit', 'Tranh vẽ', 'Âm thanh tự nhiên'], a: 1, why: 'Máy tính lưu mọi thông tin bằng dãy bit.' } ] },
];

const KEY = [
  'Máy tính dùng<br><b>0 và 1</b>.',
  'Mọi dữ liệu là<br><b>dãy bit</b>.',
  '<b>1 byte = 8 bit</b><br>gấp 1024 lần.',
  '<b>Dung lượng</b><br>lưu được bao nhiêu.',
  'Bit – byte –<br><b>KB, MB, GB, TB</b>.',
];
