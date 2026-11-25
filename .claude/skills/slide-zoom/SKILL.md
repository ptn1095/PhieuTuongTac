---
name: slide-zoom
description: Tạo bài giảng / bài ôn tập dạng slide zoom kiểu Prezi (bản đồ tổng quan, bay và phóng to vào từng chủ đề, câu đố trắc nghiệm lồng trong khung, robot Bít, âm thanh hiệu ứng, khung Tổng kết, giấy chứng nhận), đăng trên web Cô Thùy Tin. Dùng khi cô muốn làm slide zoom, bài kiểu Prezi, bài tổng kết / ôn tập tương tác có câu đố và chứng nhận.
---

# slide-zoom — Bài giảng zoom kiểu Prezi (Cô Thùy Tin)

Một trang web duy nhất: mở ra là **bản đồ toàn bài**, bấm ▶ thì màn hình **bay ra rồi phóng to** vào từng chủ đề; trong mỗi chủ đề có 1–2 **câu đố lồng sẵn**, bấm vào là zoom sâu hơn; cuối bài có **Tổng kết kiến thức**, trang **Về đích** và **giấy chứng nhận** cho học sinh đạt đủ sao.

Trao đổi với cô bằng tiếng Việt, ngắn gọn, không dùng thuật ngữ kỹ thuật.

## 0. Lấy kho và khuôn mẫu
- Bài nằm trong kho GitHub `ptn1095/PhieuTuongTac`, thư mục `baigiang/<tên-bài>/index.html`.
  Link: `https://ptn1095.github.io/PhieuTuongTac/baigiang/<tên-bài>/`
- Nếu chưa có kho: `add_repo` (owner `ptn1095`, repo `PhieuTuongTac`, access `push`) rồi `git clone --depth 1 https://github.com/ptn1095/PhieuTuongTac`.
- **Khuôn mẫu chuẩn**: `baigiang/bang-tinh-thcs/index.html` (bài "Tổng kết Bảng tính THCS"). Không viết lại từ đầu:
  `cp -r baigiang/bang-tinh-thcs baigiang/<tên-bài>` rồi chỉ thay phần NỘI DUNG (mục 2).
- Tên thư mục: chữ thường không dấu, nối bằng gạch ngang, ví dụ `tin8-lap-trinh-python`, `cn5-on-tap-hk1`.
- Thư mục `baigiang/` không đụng tới `phieu/`, `phieu.json`, README; không cần chạy `build_phieu.py`.

## 1. Tính năng phải giữ (đã có sẵn trong khuôn)
- **Màn bắt đầu**: tiêu đề + robot Bít + nút ▶ BẮT ĐẦU (bật âm thanh sau cú bấm đầu tiên).
- **Bản đồ tổng quan**: khung tiêu đề ở giữa, các chủ đề xếp vòng elip (tự giãn theo số chủ đề), nghiêng nhẹ xen kẽ, nối bằng con đường chấm có chấm vàng chạy dọc.
- **Bay zoom kiểu Prezi**: thu nhỏ ra giữa chừng rồi phóng vào khung đích, xoay thẳng khung nghiêng; nền đổi màu theo chủ đề.
- **Khung lồng nhau**: câu đố nằm trong khung chủ đề; khung Tổng kết và Về đích nằm trong khung tiêu đề.
- **Đường đi**: tổng quan → tiêu đề → chủ đề 1 → đố vui 1, 2 → chủ đề 2 … → Tổng kết → Về đích.
- **Điều khiển**: thanh dưới (🗺️ tổng quan, ◀, số bước, ▶, ⭐ điểm, 🔊 bật/tắt âm, ⛶ toàn màn hình); phím → ← Space Enter Esc, phím A–D / 1–4 để trả lời; bấm vào khung bất kỳ để bay tới; kéo chuột để di chuyển, lăn chuột để phóng to/thu nhỏ; vuốt trái/phải trên điện thoại.
- **Đố vui**: 4 lựa chọn A/B/C/D, trả lời một lần. Đúng: viền xanh, chuông + pháo giấy, Bít nhảy mừng. Sai: lắc đỏ, tiếng rè, hiện đáp án đúng + lời giải màu vàng, Bít lắc đầu.
- **Robot Bít**: góc trái dưới, nhún và chớp mắt, bong bóng lời nhắc (mẹo của từng chủ đề, tự ẩn sau vài giây).
- **Âm thanh**: CHỈ hiệu ứng, tự tạo bằng WebAudio, KHÔNG có nhạc nền: click (bấm), pop (nút), whoosh (bay/phóng to/thu nhỏ), correct (đúng), buzz (sai), tada (về đích, nhận chứng nhận).
- **Tổng kết kiến thức**: lưới thẻ màu, mỗi chủ đề 1 thẻ tóm tắt ý chính; bấm thẻ để bay lại chủ đề.
- **Về đích**: cúp, 0–3 sao, số ⭐ đạt được, lời nhắn; nút Nhận chứng nhận / Làm lại / Xem câu sai / Tổng quan.
- **Giấy chứng nhận**: chỉ mở khi đạt `PASS` sao trở lên (mặc định 15/20 = 75%). Học sinh điền Họ tên + Lớp (tên tự viết hoa chữ đầu, nhớ lại lần sau), tạo ảnh PNG khổ A4 ngang (Tải ảnh / In / Sửa tên). Xếp loại: đủ điểm tuyệt đối = Xuất sắc tuyệt đối, ≥ 90% = Xuất sắc, còn lại = Hoàn thành tốt. Có ngày và "Giáo viên – Cô Thùy Tin".

## 2. Những chỗ cần thay khi làm bài mới
Mở `baigiang/<tên-bài>/index.html`, sửa đúng các chỗ sau (tìm theo chữ):

| Chỗ | Sửa gì |
|---|---|
| `<title>` | Tên bài |
| `#start` (`st1`, `st2`) | Tiêu đề màn bắt đầu, dòng giới thiệu |
| `addFrame('title', …)` | Dòng nhãn hồng, `bigtitle` (2 dòng ngắn), câu giới thiệu "N nội dung • M câu đố…" |
| `const ILL = { t1: …, t2: … }` | Hình minh hoạ 2D cho từng chủ đề (xem mục 3). Giữ `trophy` |
| `const TOPICS = [ … ]` | Nội dung chính (xem dưới) |
| `const KEY = [ … ]` | Mỗi chủ đề 1 dòng ý chính cho khung Tổng kết (≤ 3 dòng ngắn, dùng `<b>` và `<br>`) |
| `const PASS = 15;` | Số sao cần để nhận chứng nhận (≈ 75% tổng số câu, làm tròn lên) |
| `drawCert` | Dòng tên bài in đậm tím (`'PHẦN MỀM BẢNG TÍNH – TIN HỌC THCS'`) → tên bài mới, IN HOA, ≤ 36 ký tự |
| `sayFor` | Câu chào của Bít ở khung `title` |

Mỗi phần tử `TOPICS`:
```js
{ id: 't1', c: ['#FFA62B', '#FF5DA2'], dk: '#D9480F', title: 'Tên chủ đề (≤ 30 ký tự)',
  tip: 'Câu mẹo của Bít, 1 câu vui',
  html: `<ul><li>…</li></ul>`,          // hoặc bảng <table class="tb">…</table>
  quiz: [ { q: 'Câu hỏi', o: ['A', 'B', 'C', 'D'], a: 1, why: 'Giải thích ngắn vì sao đúng' }, … ] }
```
- `id` phải là `t1, t2, …` liên tục, khớp với khoá trong `ILL`.
- Số chủ đề nên 6–12. Mỗi chủ đề 1–2 câu đố (mặc định 2). `a` là số thứ tự đáp án đúng, đếm từ 0. Rải đáp án đúng đều A/B/C/D.
- Bảng màu `c` (2 màu gradient) + `dk` (màu đậm cho viền): lấy lần lượt từ
  `#FFA62B→#FF5DA2 / #3A8DFF→#00C2D1 / #7AD86F→#14A0A0 / #FFB14E→#FF5E78 / #4F7CFF→#B06BFF / #22C493→#1E9BD7 / #FF7F11→#FF006E / #B65CFF→#5A189A / #2EC4B6→#1982C4 / #FF595E→#FFB14E`.
- Khung nội dung trái rộng 880×680, chữ 34px: tối đa ~6 gạch đầu dòng, mỗi dòng ≤ 2 hàng. Từ khoá: `<span class="k">…</span>` (nền vàng chữ đỏ); công thức/lệnh: `<code>…</code>`; nhãn màu: `<div class="chips"><span class="chip" style="background:#FF006E">…</span></div>`; bảng: `<table class="tb">` (chữ 31px, ≤ 6 hàng).
- Câu hỏi ≤ 2 dòng (~90 ký tự), mỗi lựa chọn ≤ 40 ký tự, `why` ≤ 1 câu. Có dấu `<` trong câu hỏi cứ gõ bình thường (khuôn tự xử lý); trong `html` thì viết `&lt;` `&gt;`.
- Nội dung bám sát SGK GDPT 2018 của bài cô nêu; không chia theo khối lớp trừ khi cô yêu cầu.

## 3. Hình minh hoạ 2D
- Mỗi hình là hàm trả về `svg(…)`, khung vẽ 600×420, vẽ bằng hình khối: nét viền `#1D3557` dày 5–7, bo tròn, màu tươi (hồng #FF006E, vàng #FFD60A/#FFC300, cam #FF7F11, xanh dương #1982C4, xanh lá #2DA44E/#8AC926, tím #8338EC, ngọc #2EC4B6).
- Dùng sẵn các hàm trợ giúp trong khuôn: `ball(x,y,r,màu,chữ)` bóng tròn có chữ, `pillS(x,y,w,h,màu,chữ,cỡ,góc)` viên thuốc có chữ, `key3d(…)` phím 3D, `arrowHead(x,y,góc,màu)`, `star(x,y,cỡ,màu)` ngôi sao lấp lánh, `robot()` robot Bít.
- Chữ trong SVG dùng `${F}` (Inter đậm). Mỗi hình 1 ý chính + 2–3 ngôi sao trang trí; không dùng ảnh ngoài, logo, nhân vật có bản quyền.

## 4. Kiểm tra
```bash
node tools/kiem_tra_zoom.js baigiang/<tên-bài> /tmp/zoom
```
(Nếu thiếu thư viện thì thêm `NODE_PATH=$(npm root -g)` phía trước.) Script chụp màn bắt đầu, tiêu đề, từng chủ đề, một câu đố trả lời sai, Tổng kết, Về đích, bản đồ tổng quan và một giấy chứng nhận mẫu; báo **chữ tràn khung** và **lỗi trang**.
Xem các ảnh: chữ không chồng lên nhau, không tràn khung, hình minh hoạ không đè chữ. Tràn thì rút gọn câu chữ (không thu nhỏ cỡ chữ dưới 28px).

## 5. Đăng lên web
```bash
git add baigiang/<tên-bài> && git -c user.name=ptn1095 -c user.email=ptn1095@users.noreply.github.com commit -m "Thêm bài giảng zoom: <tên bài>" && git push origin main
```
Khoảng 1–2 phút sau trang tự cập nhật. Gửi cô link `https://ptn1095.github.io/PhieuTuongTac/baigiang/<tên-bài>/` kèm 2–3 ảnh chụp (tổng quan, một chủ đề, giấy chứng nhận mẫu) và tóm tắt ngắn: số chủ đề, số câu đố, số sao cần để nhận chứng nhận.

## 6. Sửa bài đã có
Sửa trực tiếp `baigiang/<tên-bài>/index.html` theo mục 2, chạy lại mục 4, rồi đăng (mục 5). Link giữ nguyên.
Nếu cô muốn đổi tính năng chung (âm thanh, chứng nhận, điều khiển…), sửa ở khuôn `baigiang/bang-tinh-thcs/index.html` và cập nhật skill này.
