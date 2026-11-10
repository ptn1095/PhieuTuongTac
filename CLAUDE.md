# Kho phiếu bài tập tương tác – Cô Thùy Tin

Trang web: https://ptn1095.github.io/PhieuTuongTac/ (GitHub Pages, nhánh `main`).
Người dùng là giáo viên, trao đổi bằng tiếng Việt, ngắn gọn, không dùng thuật ngữ kỹ thuật.

## Quy tắc chính
Mọi phiếu nằm **trong repo này**, KHÔNG đăng phiếu lên claude.ai artifact nữa.
Skill `phieu-tuong-tac` vẫn dùng cho phần nội dung (mục 1–4: đầu vào, đọc file, dạng bài,
đáp án, hình, thiết kế), nhưng các bước dựng và đăng (mục 5, 7, 7b, 8) thay bằng quy trình dưới đây.

## Quy trình tạo phiếu mới
1. Đọc file Word/PDF của cô, soạn câu hỏi theo skill `phieu-tuong-tac` (mục 2–4).
   Câu tự giải hoặc phải đổi dạng → gửi cô bảng đáp án duyệt trước.
2. Tạo `phieu/<ten-khong-dau>/config.json` (đối tượng PHIEU của skill, thêm khóa `web`):
   ```json
   {
    "web": {"khoi": "khoi-3|khoi-5|khoi-9|doi-tuyen", "mon": "Tin học 9", "ten": "Tên ngắn trên trang chủ", "ngay": "YYYY-MM-DD"},
    "ma": "Tên trang tính trong Sheet", "mon": "TIN HỌC 9", "tieuDe": "Phiếu bài tập – ...",
    "lop": ["9A1", "9A2"],
    "guiB": "https://script.google.com/macros/s/AKfycbypoQt_uqRBGqN9N-EfLDGdsMPrirkGAQLlFwRTlot7tpruG2jivFKT6U3pbA2LuQV00Q/exec",
    "guiA": null,
    "bai": [ ... ]
   }
   ```
   Tên thư mục: chữ thường không dấu, nối bằng `-`, ví dụ `cn3-bai4-may-thu-thanh`. Tên này là link phiếu, đừng đổi sau khi đã giao cho học sinh.
   Ảnh trong phiếu: nhúng data URI hoặc SVG inline ngay trong config (như skill hướng dẫn).
3. `python3 tools/build_phieu.py` → sinh `phieu/<tên>/index.html`, `phieu.json`, bảng trong `README.md`.
   Script tự báo lỗi nếu đáp án không nằm trong lựa chọn, thiếu lớp, sai khối…
4. `node tools/kiem_tra.js` → làm thử mọi phiếu (đúng hết = 10 điểm, có gửi điểm, ảnh khung hiện đủ,
   chụp màn hình máy tính + điện thoại). Yêu cầu tới Google bị chặn trong lúc thử, không vào Sheet thật.
   Xem ảnh chụp để chắc bố cục không tràn/đè viền.
5. Commit (tác giả `ptn1095`) và push thẳng lên `main`. Khoảng 1–2 phút sau phiếu lên mạng tại
   `https://ptn1095.github.io/PhieuTuongTac/phieu/<tên>/`.
6. Báo cô: link phiếu, khối, số bài/số câu, câu nào tự giải.

## Sửa phiếu
Sửa `config.json` → chạy lại bước 3–5. Link giữ nguyên (khác với artifact cũ).

## Không sửa tay
`phieu.json`, `phieu/*/index.html`, bảng trong README (giữa `<!-- DS_PHIEU -->`) đều tự sinh.
Giao diện/chấm điểm của mọi phiếu nằm ở `tools/engine.html`; sửa ở đó rồi build lại là áp dụng cho tất cả.

## Gửi điểm
Phiếu gửi điểm ngầm bằng `fetch(..., {mode:'no-cors'})` tới Apps Script (`NhanDiem.gs` trong skill, mục 9),
không mở tab mới. Luôn có link dự phòng "Gửi điểm cho cô". Apps Script chặn nộp trùng theo tên + lớp.
