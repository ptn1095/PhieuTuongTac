/* ===== BÀI 15: GỠ LỖI ===== */
const META = { key: 'bai15', num: 15, theme: 'chibi', title: 'Bài 15. Gỡ lỗi', big: 'Gỡ lỗi',
  st2: 'Chủ đề 5 • 5 hoạt động × 4 bước • 10 câu đố • giấy chứng nhận',
  hello: 'Cùng mèo con đi bắt “con bọ” lỗi trong chương trình nào!',
  cert: 'Tin học 8 – Bài 15. Gỡ lỗi', file: 'Tin8_Bai15', pass: 8 };

const SC = { ev: '#FFBF00', mo: '#4C97FF', lo: '#9966FF', ct: '#FFAB19', va: '#FF8C1A' };
const ILL_T = {
  t1: () => svg(`${laptop(60, 60, 1, `${bug(120, 75, .7)}`)}${chibi(450, 150, 1.1, 'cat')}${mag(420, 230, .7)}${pillS(60, 330, 480, 54, '#E5383B', 'Bug → Debug', 30)}`),
  t2: () => svg(`${[['#FF7F11', 'Lỗi cú pháp', 'Viết sai quy tắc'], ['#1982C4', 'Lỗi khi chạy', 'Ví dụ: chia cho 0'], ['#E5383B', 'Lỗi logic', 'Chạy được, kết quả sai']].map(([c, a, t], i) => pillS(30, 40 + i*110, 220, 62, c, a, 24) + pillS(270, 40 + i*110, 300, 62, '#fff', t, 22, 0, O)).join('')}${bug(540, 360, .5)}`),
  t3: () => svg(`${sblock(40, 30, 260, SC.va, 'đặt tong thành 0', 20)}${scwrap(40, 88, 300, 150, SC.ct, 'lặp lại 4', 22)}${sblock(70, 146, 260, SC.va, 'tăng tong …', 20)}
    ${G(195, 113, 1, `<circle r="26" fill="none" stroke="#E5383B" stroke-width="6"/>`)}${pillS(370, 60, 200, 56, '#E5383B', 'Ra: 10', 26)}${pillS(370, 140, 200, 56, '#2DA44E', 'Mong đợi: 15', 24)}
    ${pillS(40, 300, 520, 54, '#8338EC', 'Sửa: lặp lại 5', 28)}`),
  t4: () => svg(`${vflow([['#1982C4', 'Chạy thử'], ['#FF7F11', 'Quan sát kết quả'], ['#E5383B', 'Khoanh vùng lỗi'], ['#2DA44E', 'Sửa và chạy lại']], 130, 16, 340, 100, 24)}`),
  t5: () => svg(`${bug(140, 170, 1.3)}<line x1="70" y1="100" x2="210" y2="240" stroke="#E5383B" stroke-width="14" stroke-linecap="round"/>
    ${chibi(420, 170, 1.2, 'cat')}${heartP(520, 80, 1.3, '#FF6F9F')}${pillS(60, 320, 480, 56, '#2DA44E', 'Lỗi là cơ hội học hỏi!', 28)}`),
};

const TOPICS = [
  { id: 't1', name: 'Con bọ trong chương trình', tip: 'Bug nghĩa là “con bọ” – mình là thợ săn bọ đây!',
    html: S4Q(['Chương trình cho mèo con <b>đi sai đường</b>. Lỗi ở đâu?', ''],
      ['Lỗi chương trình gọi là gì?', '<b>Bug</b> (con bọ); tìm và sửa lỗi là <b>debug</b>.'],
      ['Em từng gặp lỗi nào khi lập trình?', 'Nhân vật đi sai, đếm sai, không dừng…'],
      ['Lỗi chương trình: <b>bug</b>.', 'Gỡ lỗi: <b>debug</b>.', 'Tìm và <span class="k">sửa lỗi</span>.']),
    quiz: [
      { q: 'Lỗi trong chương trình thường được gọi là:', o: ['Bug', 'Mouse', 'Byte', 'Click'], a: 0, why: 'Bug (con bọ) là cách gọi lỗi chương trình.' },
      { q: 'Gỡ lỗi (debug) là:', o: ['Xoá chương trình', 'Tìm và sửa lỗi chương trình', 'Viết thêm lỗi', 'Tắt máy tính'], a: 1, why: 'Debug là tìm ra lỗi và sửa cho chương trình chạy đúng.' } ] },
  { id: 't2', name: 'Các loại lỗi', tip: 'Lỗi logic khó thấy nhất – phải tinh mắt như mèo!',
    html: S4Q(['Phân loại lỗi trong <b>ba chương trình mẫu</b>.', ''],
      ['Có mấy loại lỗi?', 'Lỗi cú pháp, lỗi khi chạy (như chia cho 0), lỗi logic.'],
      ['Scratch kéo thả nên ít gặp lỗi nào?', 'Lỗi <b>cú pháp</b>.'],
      ['<b>Cú pháp</b>: viết sai quy tắc.', '<b>Khi chạy</b>: ví dụ chia cho 0.', '<b>Logic</b>: <span class="k">chạy được mà sai</span>.']),
    quiz: [
      { q: 'Chương trình chạy được nhưng kết quả sai là lỗi:', o: ['Cú pháp', 'Khi chạy', 'Logic', 'Bàn phím'], a: 2, why: 'Lỗi logic: thuật toán sai nên kết quả sai.' },
      { q: 'Chương trình dừng vì chia cho 0 khi đang chạy là lỗi:', o: ['Cú pháp', 'Logic', 'Chính tả', 'Khi chạy'], a: 3, why: 'Lỗi xảy ra trong lúc chương trình đang chạy.' } ] },
  { id: 't3', name: 'Tìm lỗi logic', tip: 'So kết quả với điều mong đợi – lệch là có bọ!',
    html: S4Q(['Tính 1 + 2 + … + 5 mà chương trình ra <b>10</b> thay vì 15.', ''],
      ['Tìm lỗi logic bằng cách nào?', 'Kiểm tra từng bước; hiện giá trị biến để theo dõi.'],
      ['Lỗi nằm ở đâu?', 'Dùng <code>lặp lại 4</code> thay vì <code>lặp lại 5</code>.'],
      ['Theo dõi <b>giá trị biến</b>.', 'So với <b>kết quả mong đợi</b>.', 'Lệch là có <span class="k">lỗi logic</span>.']),
    quiz: [
      { q: 'Cách giúp phát hiện lỗi logic là:', o: ['So sánh với kết quả mong đợi', 'Tắt âm thanh', 'Đổi màu nhân vật', 'Đổi tên dự án'], a: 0, why: 'Kết quả khác mong đợi chứng tỏ có lỗi logic.' },
      { q: 'Tổng 1+2+…+5 ra 10 thay vì 15. Có thể do:', o: ['Màn hình nhỏ', 'Lặp thiếu một lần', 'Máy chạy chậm', 'Phông chữ sai'], a: 1, why: 'Lặp 4 lần chỉ cộng 1+2+3+4 = 10.' } ] },
  { id: 't4', name: 'Các bước gỡ lỗi', tip: 'Kiên nhẫn từng bước, con bọ nào cũng bị bắt!',
    html: S4Q(['Gỡ lỗi chương trình <b>bắt sao</b> không cộng điểm.', ''],
      ['Các bước gỡ lỗi là gì?', 'Chạy thử → quan sát → khoanh vùng → sửa → chạy lại.'],
      ['Vì sao nên chạy thử từng phần?', 'Để dễ khoanh vùng chỗ lỗi.'],
      ['<b>Chạy thử</b> với dữ liệu thử.', '<b>Khoanh vùng</b> rồi sửa.', 'Sửa xong phải <span class="k">chạy lại</span>.']),
    quiz: [
      { q: 'Sau khi sửa lỗi, em cần:', o: ['Xoá chương trình', 'Bỏ qua', 'Chạy lại để kiểm tra', 'Đổi máy tính'], a: 2, why: 'Chạy lại để chắc chắn lỗi đã được sửa.' },
      { q: 'Chạy thử từng phần chương trình giúp:', o: ['Chương trình dài hơn', 'Thêm lỗi mới', 'Đổi màu sân khấu', 'Khoanh vùng lỗi dễ hơn'], a: 3, why: 'Thử từng phần giúp biết lỗi nằm ở đâu.' } ] },
  { id: 't5', name: 'Tổng kết bài học', tip: 'Lập trình viên giỏi là người gỡ lỗi giỏi!',
    html: S4Q(['Kể lại một lần em <b>gỡ lỗi</b> thành công.', ''],
      ['Có mấy loại lỗi?', 'Ba loại: cú pháp, khi chạy, logic.'],
      ['Quy trình gỡ lỗi là gì?', 'Chạy thử → quan sát → khoanh vùng → sửa → chạy lại.'],
      ['3 loại lỗi: <b>cú pháp, khi chạy, logic</b>.', 'Gỡ lỗi cần <b>kiên nhẫn</b>.', 'Lỗi là <span class="k">cơ hội học hỏi</span>.']),
    quiz: [
      { q: 'Thứ tự gỡ lỗi hợp lí là:', o: ['Sửa → chạy thử → quan sát', 'Chạy thử → quan sát → sửa → chạy lại', 'Xoá → viết lại → nộp', 'Quan sát → xoá → chạy'], a: 1, why: 'Thử, quan sát, sửa rồi chạy lại để kiểm tra.' },
      { q: 'Nhân vật đi sai hướng nhưng không báo lỗi. Đó là lỗi:', o: ['Logic', 'Cú pháp', 'Mạng', 'Phần cứng'], a: 0, why: 'Chương trình vẫn chạy nhưng làm sai: lỗi logic.' } ] },
];

const KEY = [
  '<b>Debug</b>: tìm và<br>sửa lỗi.',
  'Cú pháp, khi<br>chạy, <b>logic</b>.',
  'So với <b>kết quả<br>mong đợi</b>.',
  'Thử → quan sát →<br><b>khoanh vùng</b> → sửa.',
  'Lỗi là <b>cơ hội<br>học hỏi</b>.',
];
