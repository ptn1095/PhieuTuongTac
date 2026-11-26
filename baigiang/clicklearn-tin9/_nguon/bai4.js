/* ===== BÀI 4: MỘT SỐ VẤN ĐỀ PHÁP LÍ VỀ SỬ DỤNG DỊCH VỤ INTERNET ===== */
const META = { key: 'bai4', num: 4, title: 'Bài 4. Một số vấn đề pháp lí về sử dụng dịch vụ Internet', big: 'PHÁP LÍ KHI<br>DÙNG INTERNET',
  st2: 'Tin học 9 • 5 hoạt động • 10 câu đố • nhận giấy chứng nhận',
  hello: 'Trên mạng cũng có luật! Cùng học cách dùng Internet đúng pháp luật nhé!',
  cert: 'TIN HỌC 9 – BÀI 4: PHÁP LÍ KHI DÙNG INTERNET', file: 'Tin9_Bai4', pass: 8 };

const ILL_T = {
  t1: () => svg(`${globe(170, 170, 100)}${scales(440, 200, .9)}
    ${pillS(80, 340, 440, 54, '#8338EC', 'Internet cũng có luật', 26)}${star(560, 50, 14, '#FFD60A')}${star(40, 40, 12, '#FF006E')}`),
  t2: () => svg(`${tlist([[0, '#E5383B', 'Tung tin giả, sai sự thật'], [0, '#FF7F11', 'Xúc phạm, bắt nạt người khác'], [0, '#8338EC', 'Đăng đời tư người khác'], [0, '#1982C4', 'Lừa đảo, chiếm tài khoản']], 60, 96, 22)}
    ${star(570, 400, 12, '#FFD60A')}`),
  t3: () => svg(`${scales(140, 210, .85)}
    ${pillS(290, 50, 296, 54, '#E5383B', 'Luật An ninh mạng', 22)}${pillS(290, 135, 296, 54, '#1982C4', 'Luật Công nghệ TT', 22)}${pillS(290, 220, 296, 54, '#2DA44E', 'Luật Sở hữu trí tuệ', 22)}
    ${pillS(60, 340, 480, 54, '#8338EC', 'Vi phạm → bị xử phạt', 26)}${star(40, 50, 12, '#FFD60A')}`),
  t4: () => svg(`${lock(160, 190, 1.3)}${shieldI(430, 170, 1)}
    ${pillS(14, 330, 280, 52, '#E5383B', 'Giữ kín mật khẩu, OTP', 21)}${pillS(306, 330, 280, 52, '#1982C4', 'Báo ngay người lớn', 22)}
    ${star(560, 50, 14, '#FFD60A')}${star(300, 60, 12, '#FF006E')}`),
  t5: () => svg(`${kid(120, 200, 1, '#1982C4')}
    ${pillS(250, 50, 330, 54, '#2DA44E', 'Tôn trọng mọi người', 23)}${pillS(250, 135, 330, 54, '#FF7F11', 'Ghi nguồn tác phẩm', 23)}${pillS(250, 220, 330, 54, '#1982C4', 'Kiểm chứng tin', 24)}
    ${pillS(60, 350, 480, 50, '#8338EC', 'Công dân số có trách nhiệm', 24)}${star(40, 40, 14, '#FFD60A')}`),
};

const TOPICS = [
  { id: 't1', name: 'Internet và pháp luật', tip: 'Ngoài đời có luật, trên mạng cũng có luật đấy!',
    html: S4('Kể các dịch vụ Internet em hay dùng.',
      'Thư điện tử, mạng xã hội, học trực tuyến, tìm kiếm, xem video…',
      'Hành vi nào trên mạng có thể <b>vi phạm pháp luật</b>?',
      'Dùng Internet phải <span class="k">tuân thủ pháp luật</span> như ngoài đời thực.'),
    quiz: [
      { q: 'Câu nào ĐÚNG về việc sử dụng Internet?', o: ['Trên mạng làm gì cũng được', 'Không ai biết mình là ai', 'Phải tuân thủ pháp luật', 'Luật chỉ áp dụng cho người lớn'], a: 2, why: 'Hành vi trên mạng cũng chịu sự điều chỉnh của pháp luật.' },
      { q: 'Đâu là một dịch vụ trên Internet?', o: ['Thư điện tử', 'Máy tính bỏ túi', 'Đèn pin', 'Bút bi'], a: 0, why: 'Thư điện tử (email) là dịch vụ gửi nhận thư qua Internet.' } ] },
  { id: 't2', name: 'Hành vi vi phạm thường gặp', tip: 'Tin giả, xúc phạm, lộ đời tư, lừa đảo – tránh xa nhé!',
    html: S4('Nhận diện hành vi vi phạm khi dùng Internet.',
      'Phát tán <b>tin giả</b>; <b>xúc phạm</b>, bắt nạt người khác; <b>lừa đảo</b>, chiếm tài khoản.',
      'Đăng ảnh bạn lên mạng khi bạn <b>chưa đồng ý</b> có được không?',
      'Tôn trọng <span class="k">quyền riêng tư</span> và danh dự của người khác.'),
    quiz: [
      { q: 'Đăng ảnh của bạn lên mạng khi bạn chưa đồng ý là xâm phạm:', o: ['Quyền học tập', 'Quyền đi lại', 'Quyền bầu cử', 'Quyền riêng tư'], a: 3, why: 'Hình ảnh cá nhân thuộc quyền riêng tư của mỗi người.' },
      { q: 'Chia sẻ tin "trường nghỉ học" chưa được xác thực là:', o: ['Hành vi tốt', 'Một tin vui', 'Phát tán thông tin sai sự thật', 'Không sao cả'], a: 2, why: 'Tin chưa xác thực có thể là tin giả, gây hoang mang.' } ] },
  { id: 't3', name: 'Luật nào bảo vệ em?', tip: 'An ninh mạng, Công nghệ thông tin, Sở hữu trí tuệ – ba bộ luật cần nhớ!',
    html: S4('Tìm hiểu một số luật liên quan đến Internet.',
      '<b>Luật An ninh mạng</b> (2018) • <b>Luật Công nghệ thông tin</b> (2006) • <b>Luật Sở hữu trí tuệ</b> (bản quyền).',
      'Vi phạm có thể bị: nhắc nhở, <b>xử phạt hành chính</b>, nặng thì truy cứu hình sự.',
      'Hiểu luật để <span class="k">tự bảo vệ</span> mình và không vi phạm.'),
    quiz: [
      { q: 'Luật nào quy định về bảo vệ an ninh trên không gian mạng?', o: ['Luật Giao thông', 'Luật An ninh mạng', 'Luật Đất đai', 'Luật Hôn nhân'], a: 1, why: 'Luật An ninh mạng (2018) điều chỉnh hoạt động trên không gian mạng.' },
      { q: 'Tự ý sao chép, phát tán phim, phần mềm có bản quyền là vi phạm:', o: ['Luật Giao thông', 'Luật Đất đai', 'Luật Thuế', 'Luật Sở hữu trí tuệ'], a: 3, why: 'Luật Sở hữu trí tuệ bảo vệ quyền tác giả (bản quyền).' } ] },
  { id: 't4', name: 'Tự bảo vệ trên mạng', tip: 'Mật khẩu, mã OTP là bí mật – không đưa cho ai cả!',
    html: S4('Em nhận tin: "Trúng thưởng! Gửi mã OTP để nhận quà". Em làm gì?',
      '<b>Không</b> gửi mật khẩu, mã OTP; không bấm đường link lạ; đặt mật khẩu mạnh.',
      'Bị bắt nạt trên mạng: lưu bằng chứng, chặn, <b>báo thầy cô, cha mẹ</b>.',
      'Bảo vệ <span class="k">thông tin cá nhân</span>; gặp nguy hãy báo người lớn.'),
    quiz: [
      { q: 'Nhận tin "trúng thưởng, gửi mã OTP để nhận quà", em nên:', o: ['Gửi ngay để nhận quà', 'Không gửi, báo người lớn', 'Chia sẻ cho bạn cùng nhận', 'Gửi một nửa mã'], a: 1, why: 'Đây là chiêu lừa đảo chiếm tài khoản; không bao giờ đưa mã OTP.' },
      { q: 'Khi bị bắt nạt trên mạng, việc nên làm là:', o: ['Chửi lại thật to', 'Im lặng chịu đựng', 'Lưu bằng chứng, báo thầy cô, cha mẹ', 'Đăng thông tin của bạn ấy'], a: 2, why: 'Người lớn sẽ giúp em xử lí đúng cách và an toàn.' } ] },
  { id: 't5', name: 'Công dân số có trách nhiệm', tip: 'Ôn nhanh: biết luật – tôn trọng – ghi nguồn – kiểm chứng!',
    html: S4('Cùng lớp xây dựng "quy tắc ứng xử trên mạng".',
      'Lịch sự, <b>tôn trọng</b> mọi người; không dùng tài khoản người khác.',
      'Dùng tác phẩm của người khác thì <b>ghi rõ nguồn</b>; chỉ chia sẻ tin đã kiểm chứng.',
      'Là <span class="k">công dân số</span> văn minh, đúng pháp luật.'),
    quiz: [
      { q: 'Dùng hình ảnh của người khác trong bài thuyết trình, em cần:', o: ['Ghi rõ nguồn, tác giả', 'Xoá tên tác giả', 'Nói là của mình', 'Không cần làm gì'], a: 0, why: 'Ghi nguồn là tôn trọng bản quyền của tác giả.' },
      { q: 'Hành vi nào là ứng xử văn minh trên mạng?', o: ['Bình luận chê bai', 'Tung tin đồn', 'Dùng tài khoản người khác', 'Lịch sự, tôn trọng mọi người'], a: 3, why: 'Ứng xử văn minh: lịch sự, tôn trọng như ngoài đời.' } ] },
];

const KEY = [
  'Trên mạng cũng<br>phải <b>tuân thủ luật</b>.',
  'Không tin giả, xúc phạm,<br><b>xâm phạm đời tư</b>.',
  'An ninh mạng • CNTT<br>• <b>Sở hữu trí tuệ</b>.',
  'Giữ kín <b>mật khẩu, OTP</b>;<br>báo người lớn.',
  'Tôn trọng, <b>ghi nguồn</b>,<br>kiểm chứng tin.',
];
