/* ===== BÀI 5: ỨNG XỬ TRÊN MẠNG ===== */
const META = { key: 'bai5', num: 5, theme: 'lauda', title: 'Bài 5. Ứng xử trên mạng', big: 'Ứng xử<br>trên mạng',
  st2: 'Chủ đề 3 • 5 phần kiến thức cần nhớ • 10 câu đố • giấy chứng nhận',
  hello: 'Làm hiệp sĩ văn minh trên mạng cùng mình nhé!',
  cert: 'Tin học 7 – Bài 5. Ứng xử trên mạng', file: 'Tin7_Bai5', pass: 8 };

const ILL_T = {
  t1: () => svg(`${person(120, 160, 1, '#1982C4')}${person(480, 160, 1, '#FF006E', '#8D5524')}${bubble(170, 40, 200, 64, '#D0EBFF', 'Chào bạn!', 26)}${bubble(260, 150, 200, 64, '#FFD6E7', 'Cảm ơn nhé', 24)}
    ${pillS(60, 320, 480, 54, '#2DA44E', 'Lịch sự, tôn trọng', 28)}`),
  t2: () => svg(`${smart(140, 170, 1, '')}${clock(380, 140, .9)}${warn(520, 70, .9)}
    ${pillS(40, 300, 520, 54, '#E5383B', 'Dùng quá nhiều, bỏ bê việc học', 24)}${pillS(100, 365, 400, 46, '#2DA44E', 'Hẹn giờ, chơi ngoài trời', 22)}`),
  t3: () => svg(`${[['#E5383B', 'Bắt nạt, xúc phạm'], ['#FF7F11', 'Tin giả, tin đồn'], ['#8338EC', 'Lừa đảo, link lạ'], ['#3D405B', 'Nội dung xấu, độc hại']].map(([c, t], i) => cross(70, 60 + i*92, .8) + pillS(120, 34 + i*92, 440, 54, c, t, 26)).join('')}`),
  t4: () => svg(`${vflow([['#3D405B', 'Không đáp trả'], ['#1982C4', 'Lưu bằng chứng'], ['#8338EC', 'Chặn, báo cáo'], ['#2DA44E', 'Nhờ người lớn giúp']], 150, 22, 300, 96, 26)}`),
  t5: () => svg(`${shieldI(110, 180, 1)}${['Tôn trọng', 'Trung thực', 'Kiểm chứng tin', 'Bảo vệ thông tin'].map((t, i) => pillS(220, 40 + i*86, 340, 56, ['#1982C4', '#2DA44E', '#FF7F11', '#8338EC'][i], t, 26)).join('')}`),
};

const TOPICS = [
  { id: 't1', name: 'Giao tiếp có văn hoá', tip: 'Lời chào cao hơn mâm cỗ – trên mạng cũng vậy!',
    html: KT([
      'Giao tiếp trên mạng cũng cần <b>lịch sự, tôn trọng</b> như khi gặp mặt.',
      'Dùng <b>ngôn từ văn hoá</b>; không nói tục, chửi bậy, chế giễu người khác.',
      'Không viết <b>TOÀN CHỮ HOA</b> (giống như đang quát to).',
      '<b>Không đăng, chia sẻ</b> thông tin, hình ảnh của người khác khi chưa được đồng ý.',
    ], 'Ứng xử trên mạng phải <span class="k">văn minh, lịch sự</span>.'),
    quiz: [
      { q: 'Viết tin nhắn toàn chữ in hoa thường bị hiểu là:', o: ['Rất lịch sự', 'Đang quát, la hét', 'Đang khen ngợi', 'Đang chào hỏi'], a: 1, why: 'Viết toàn chữ hoa giống như đang nói to, quát tháo.' },
      { q: 'Muốn đăng ảnh chụp chung với bạn lên mạng, em nên:', o: ['Đăng luôn không cần hỏi', 'Sửa ảnh cho xấu rồi đăng', 'Hỏi ý kiến bạn trước', 'Đăng kèm số điện thoại bạn'], a: 2, why: 'Cần được người trong ảnh đồng ý trước khi đăng.' } ] },
  { id: 't2', name: 'Nghiện Internet', tip: 'Internet hay nhưng đừng để nó “giữ chân” em quá lâu!',
    html: KT([
      '<b>Nghiện Internet</b>: dùng mạng quá nhiều, không tự kiểm soát được.',
      'Biểu hiện: thức khuya, bỏ bê học hành, ít giao tiếp, <b>cáu gắt</b> khi không được dùng.',
      'Tác hại: ảnh hưởng <b>sức khoẻ</b> (mắt, giấc ngủ), kết quả học tập, các mối quan hệ.',
      'Phòng tránh: <b>đặt giới hạn thời gian</b>, tham gia thể thao, hoạt động ngoài trời.',
    ], 'Dùng Internet <span class="k">có kế hoạch</span>, vừa phải.'),
    quiz: [
      { q: 'Biểu hiện nào cho thấy có thể đang nghiện Internet?', o: ['Dùng mạng để tra bài 30 phút', 'Thức khuya chơi mạng, bỏ bê học', 'Đọc sách thư viện', 'Đá bóng với bạn'], a: 1, why: 'Thức khuya, bỏ bê việc học vì mạng là dấu hiệu nghiện Internet.' },
      { q: 'Cách phòng tránh nghiện Internet là:', o: ['Đặt giới hạn thời gian dùng mạng', 'Dùng mạng cả đêm', 'Bỏ bữa để chơi game', 'Không ra khỏi nhà'], a: 0, why: 'Đặt giới hạn thời gian, tham gia hoạt động khác giúp phòng nghiện.' } ] },
  { id: 't3', name: 'Hành vi xấu trên mạng', tip: 'Nhận diện được cái xấu là bước đầu để tránh xa nó!',
    html: KT([
      '<b>Bắt nạt qua mạng</b>: đe doạ, xúc phạm, bêu xấu, tung tin sai về người khác.',
      '<b>Tin giả</b>, tin đồn thất thiệt; <b>lừa đảo</b> trúng thưởng, mượn tiền, link lạ.',
      'Nội dung <b>xấu, độc hại</b>: bạo lực, không phù hợp lứa tuổi.',
      'Lấy <b>tài khoản, thông tin</b> của người khác; vi phạm <b>bản quyền</b>.',
    ], 'Tuyệt đối <span class="k">không tham gia</span> các hành vi xấu trên mạng.'),
    quiz: [
      { q: 'Hành vi nào là bắt nạt qua mạng?', o: ['Chúc mừng sinh nhật bạn', 'Gửi bài tập cho bạn', 'Đăng ảnh chế giễu, xúc phạm bạn', 'Hỏi bài thầy cô'], a: 2, why: 'Chế giễu, xúc phạm người khác trên mạng là bắt nạt qua mạng.' },
      { q: 'Tin nhắn “Bạn trúng thưởng iPhone, bấm link để nhận” thường là:', o: ['Quà thật', 'Lừa đảo', 'Thông báo nhà trường', 'Tin tức chính thống'], a: 1, why: 'Đây là kiểu lừa đảo phổ biến, không bấm link lạ.' } ] },
  { id: 't4', name: 'Khi gặp chuyện trên mạng', tip: 'Em không bao giờ phải đối mặt một mình!',
    html: KT([
      '<b>Không đáp trả</b>, không làm theo yêu cầu của kẻ xấu.',
      '<b>Lưu lại bằng chứng</b>: chụp màn hình tin nhắn, bài đăng.',
      '<b>Chặn</b> và <b>báo cáo</b> tài khoản xấu với mạng xã hội.',
      '<b>Kể ngay</b> với bố mẹ, thầy cô, người lớn tin cậy để được giúp đỡ.',
    ], 'Không đáp trả – <span class="k">lưu bằng chứng</span> – chặn – báo người lớn.'),
    quiz: [
      { q: 'Khi bị bắt nạt qua mạng, việc đầu tiên KHÔNG nên làm là:', o: ['Đáp trả bằng lời lẽ xúc phạm', 'Chụp màn hình làm bằng chứng', 'Chặn tài khoản đó', 'Báo bố mẹ, thầy cô'], a: 0, why: 'Đáp trả chỉ làm sự việc tệ hơn.' },
      { q: 'Vì sao nên chụp màn hình tin nhắn xấu?', o: ['Để khoe với bạn', 'Để làm bằng chứng báo người lớn', 'Để đăng lại', 'Để xoá đi'], a: 1, why: 'Ảnh chụp là bằng chứng giúp người lớn xử lí.' } ] },
  { id: 't5', name: 'Quy tắc ứng xử văn minh', tip: 'Mỗi bạn là một “công dân số” văn minh!',
    html: KT([
      '<b>Tôn trọng</b> người khác, tuân thủ pháp luật khi dùng mạng.',
      '<b>Trung thực</b>: không mạo danh, không nói dối, không lấy bài của người khác làm của mình.',
      '<b>Kiểm chứng</b> thông tin từ nguồn tin cậy trước khi tin và chia sẻ.',
      '<b>Bảo vệ</b> thông tin cá nhân của mình và của người khác.',
    ], 'Hãy là <span class="k">công dân số</span> văn minh, an toàn, có trách nhiệm.'),
    quiz: [
      { q: 'Trước khi chia sẻ một tin “giật gân”, em nên:', o: ['Chia sẻ ngay cho nhanh', 'Kiểm chứng ở nguồn tin cậy', 'Thêm bớt cho hấp dẫn', 'Gửi cho thật nhiều người'], a: 1, why: 'Cần kiểm chứng thông tin trước khi chia sẻ.' },
      { q: 'Hành động nào thể hiện ứng xử văn minh trên mạng?', o: ['Mạo danh bạn để trêu', 'Bình luận tôn trọng, lịch sự', 'Lan truyền tin đồn', 'Chia sẻ mật khẩu bạn'], a: 1, why: 'Bình luận tôn trọng, lịch sự là ứng xử văn minh.' } ] },
];

const KEY = [
  'Giao tiếp <b>lịch sự, tôn trọng</b>, không viết toàn chữ hoa.',
  'Phòng <b>nghiện Internet</b>: giới hạn thời gian.',
  'Tránh xa <b>bắt nạt</b>, tin giả, lừa đảo, nội dung xấu.',
  'Không đáp trả, <b>lưu bằng chứng</b>, báo người lớn.',
  '<b>Tôn trọng, trung thực</b>, kiểm chứng tin.',
];
