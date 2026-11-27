/* ===== BÀI 7: TRÌNH BÀY THÔNG TIN TRONG TRAO ĐỔI VÀ HỢP TÁC ===== */
const META = { key: 'bai7', num: 7, title: 'Bài 7. Trình bày thông tin trong trao đổi và hợp tác', big: 'TRÌNH BÀY<br>THÔNG TIN',
  st2: 'Tin học 9 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Biểu đồ, sơ đồ tư duy giúp người khác hiểu ý em thật nhanh. Bắt đầu nào!',
  cert: 'TIN HỌC 9 – BÀI 7: TRÌNH BÀY THÔNG TIN', file: 'Tin9_Bai7', pass: 8 };

const ILL_T = {
  t1: () => svg(`${doc(130, 160, 1.3)}${arr(230, 160, 300, 160, '#FF006E')}${bars(340, 250, [80, 140, 110, 170], 40, 16)}
    ${pillS(30, 310, 200, 50, '#868E96', 'Chữ dài', 24)}${pillS(320, 310, 250, 50, '#2DA44E', 'Biểu đồ: dễ hiểu', 22)}
    ${star(560, 50, 14, '#FFD60A')}${star(40, 40, 12, '#FF006E')}${star(300, 395, 12, '#8338EC')}`),
  t2: () => svg(`${mindmap(300, 170, 1, 'Bài học')}${pillS(110, 320, 380, 54, '#8338EC', 'Sơ đồ tư duy', 28)}${star(40, 380, 12, '#FFD60A')}${star(560, 380, 12, '#FF006E')}`),
  t3: () => svg(`${bars(40, 260, [60, 120, 90], 36, 12)}${pie(300, 190, 72)}${lineC(410, 260, [40, 100, 70, 130])}
    ${pillS(10, 300, 184, 50, '#FF006E', 'Cột: so sánh', 21)}${pillS(208, 300, 184, 50, '#1982C4', 'Tròn: tỉ lệ %', 21)}${pillS(406, 300, 184, 50, '#2DA44E', 'Đường: thời gian', 19)}
    ${star(300, 60, 14, '#FFD60A')}${star(570, 395, 12, '#8338EC')}`),
  t4: () => svg(`${dline(80, 320, 300, 200)}${dline(300, 340, 300, 200)}${dline(520, 320, 300, 200)}
    ${laptop(180, 50, 1, `<rect x="20" y="16" width="200" height="118" rx="6" fill="#fff"/>${[30, 52, 74, 96].map((y, i) => `<rect x="34" y="${y}" width="${[150, 120, 160, 90][i]}" height="10" rx="5" fill="${['#FF006E', '#1982C4', '#2DA44E', '#ADB5BD'][i]}"/>`).join('')}`)}
    ${ball(80, 320, 40, '#FF006E', 'A')}${ball(300, 350, 40, '#1982C4', 'B')}${ball(520, 320, 40, '#2DA44E', 'C')}
    ${star(40, 50, 14, '#FFD60A')}${star(560, 50, 12, '#FF006E')}`),
  t5: () => svg(`${tlist([[1, '#2DA44E', 'Chính xác'], [1, '#1982C4', 'Ngắn gọn, rõ ràng'], [1, '#FF7F11', 'Phù hợp người xem'], [1, '#8338EC', 'Ghi rõ nguồn']], 60, 96, 24)}
    ${star(570, 400, 12, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Trình bày sao cho dễ hiểu?', tip: 'Một hình vẽ đẹp nói được nhiều hơn cả trang chữ!',
    html: S4Q(['So sánh <b>đoạn văn dài</b> và <b>biểu đồ</b> cùng một số liệu.', ''],
      ['Có những hình thức trình bày thông tin nào?', 'Văn bản, bảng, biểu đồ, sơ đồ, hình ảnh, video, infographic.'],
      ['Cách nào giúp người xem hiểu nhanh hơn?', 'Biểu đồ, sơ đồ – vì trực quan.'],
      ['Nhiều <b>hình thức</b> trình bày.', 'Trực quan giúp <b>hiểu nhanh</b>.', 'Trao đổi <span class="k">hiệu quả</span> hơn.']),
    quiz: [
      { q: 'Đâu KHÔNG phải là một hình thức trình bày thông tin?', o: ['Biểu đồ', 'Sơ đồ tư duy', 'Bảng', 'Mật khẩu'], a: 3, why: 'Mật khẩu dùng để bảo vệ tài khoản, không để trình bày.' },
      { q: 'Muốn so sánh số học sinh của các lớp, nên dùng:', o: ['Biểu đồ cột', 'Một đoạn văn dài', 'Một bài thơ', 'Một bản nhạc'], a: 0, why: 'Biểu đồ cột giúp so sánh các số liệu rất rõ.' } ] },
  { id: 't2', name: 'Sơ đồ và biểu đồ', tip: 'Sơ đồ tư duy: ý chính ở giữa, ý nhỏ toả ra như cành cây!',
    html: S4Q(['Tìm hiểu các công cụ <b>trình bày trực quan</b>.', ''],
      ['Sơ đồ tư duy dùng khi nào?', 'Tóm tắt, ghi nhớ: ý chính ở giữa, nhánh toả ra.'],
      ['Sơ đồ khối, biểu đồ dùng khi nào?', 'Sơ đồ khối: các bước; biểu đồ: số liệu, xu hướng.'],
      ['<b>Sơ đồ tư duy</b>: tóm tắt ý.', '<b>Sơ đồ khối</b>: các bước.', '<b>Biểu đồ</b>: <span class="k">số liệu</span>.']),
    quiz: [
      { q: 'Muốn tóm tắt các ý chính của một bài học, nên dùng:', o: ['Bảng số liệu', 'Sơ đồ tư duy', 'Ảnh chân dung', 'Video ca nhạc'], a: 1, why: 'Sơ đồ tư duy thể hiện ý chính và các ý nhánh rất rõ.' },
      { q: 'Muốn mô tả các bước của một quy trình, nên dùng:', o: ['Biểu đồ tròn', 'Ảnh phong cảnh', 'Sơ đồ khối', 'Bài hát'], a: 2, why: 'Sơ đồ khối thể hiện các bước nối tiếp nhau bằng mũi tên.' } ] },
  { id: 't3', name: 'Chọn biểu đồ phù hợp', tip: 'Cột để so sánh, tròn để xem tỉ lệ, đường để xem thay đổi!',
    html: S4Q(['Chọn <b>biểu đồ</b> cho từng loại số liệu.', ''],
      ['So sánh và tỉ lệ dùng biểu đồ gì?', 'So sánh: biểu đồ cột; tỉ lệ %: biểu đồ tròn.'],
      ['Nhiệt độ cả tuần dùng loại nào?', 'Biểu đồ <b>đường</b> (thay đổi theo thời gian).'],
      ['<b>Cột</b>: so sánh.', '<b>Tròn</b>: tỉ lệ phần trăm.', '<b>Đường</b>: <span class="k">theo thời gian</span>.']),
    quiz: [
      { q: 'Thể hiện tỉ lệ % học sinh thích từng môn thể thao, nên dùng:', o: ['Biểu đồ cột', 'Biểu đồ đường', 'Biểu đồ tròn', 'Sơ đồ khối'], a: 2, why: 'Biểu đồ tròn thể hiện các phần của một tổng thể.' },
      { q: 'Theo dõi nhiệt độ thay đổi qua các ngày trong tuần, nên dùng:', o: ['Biểu đồ tròn', 'Sơ đồ tư duy', 'Bảng chữ cái', 'Biểu đồ đường'], a: 3, why: 'Biểu đồ đường cho thấy sự tăng giảm theo thời gian.' } ] },
  { id: 't4', name: 'Hợp tác trực tuyến', tip: 'Cả nhóm cùng sửa một tệp, ở đâu cũng làm được!',
    html: S4Q(['Nhóm em cần làm chung <b>một bài trình chiếu</b>.', ''],
      ['Công cụ trực tuyến giúp nhóm thế nào?', 'Nhiều người cùng sửa, bình luận, xem lịch sử chỉnh sửa.'],
      ['Làm việc nhóm trực tuyến cần chú ý gì?', 'Phân công rõ; góp ý lịch sự; chia sẻ đúng quyền.'],
      ['Cùng sửa, <b>bình luận</b> trực tuyến.', '<b>Phân công</b> rõ ràng.', 'Quyền: <span class="k">xem / nhận xét / sửa</span>.']),
    quiz: [
      { q: 'Ưu điểm của soạn thảo trực tuyến khi làm việc nhóm là:', o: ['Nhiều người cùng sửa một tệp', 'Không cần Internet', 'Không ai thấy bài', 'Chỉ một người được sửa'], a: 0, why: 'Các thành viên cùng làm trên một tệp, cập nhật ngay.' },
      { q: 'Muốn người khác chỉ xem, không sửa được tài liệu, em cấp quyền:', o: ['Người chỉnh sửa', 'Người xem', 'Chủ sở hữu', 'Xoá tệp'], a: 1, why: 'Quyền Người xem chỉ cho đọc, không cho sửa.' } ] },
  { id: 't5', name: 'Trình bày chuyên nghiệp', tip: 'Ôn nhanh: chính xác – ngắn gọn – phù hợp – ghi nguồn!',
    html: S4Q(['Kiểm tra lại <b>sản phẩm trình bày</b> của nhóm.', ''],
      ['Sản phẩm trình bày tốt cần đạt gì?', 'Chính xác, ngắn gọn, rõ ràng; màu sắc hài hoà.'],
      ['Khi dùng số liệu, hình ảnh của người khác cần gì?', 'Ghi rõ nguồn thông tin.'],
      ['Thông tin <b>chính xác, ngắn gọn</b>.', 'Phù hợp <b>người xem</b>.', 'Luôn <span class="k">ghi rõ nguồn</span>.']),
    quiz: [
      { q: 'Khi trình bày thông tin, điều quan trọng nhất là:', o: ['Càng nhiều chữ càng tốt', 'Chính xác, rõ ràng, phù hợp', 'Dùng thật nhiều màu', 'Chữ thật nhỏ'], a: 1, why: 'Thông tin đúng, rõ, hợp người xem thì trao đổi mới hiệu quả.' },
      { q: 'Dùng số liệu từ trang web khác cho bài trình bày, em cần:', o: ['Sửa số cho đẹp', 'Giấu nguồn đi', 'Ghi rõ nguồn', 'Bịa thêm số liệu'], a: 2, why: 'Ghi nguồn giúp thông tin đáng tin và tôn trọng bản quyền.' } ] },
];

const KEY = [
  'Trình bày <b>trực quan</b><br>dễ hiểu hơn.',
  '<b>Sơ đồ tư duy</b>, sơ đồ khối,<br>biểu đồ.',
  'Cột: so sánh • Tròn: tỉ lệ<br>• <b>Đường</b>: thời gian.',
  'Cùng sửa <b>trực tuyến</b>,<br>chia sẻ đúng quyền.',
  'Chính xác, ngắn gọn,<br><b>ghi rõ nguồn</b>.',
];
