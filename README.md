# Cô Thùy Tin – Kho phiếu bài tập tương tác

Trang web: **https://ptn1095.github.io/PhieuTuongTac/**

Học sinh chọn khối (Khối 3, Khối 5, Khối 9, Đội Tuyển), bấm **Làm bài**, làm xong bấm **Tính điểm** – điểm tự gửi về Google Sheet của cô.

## Cấu trúc
```
index.html            Trang chủ (kho phiếu)
phieu.json            Danh sách phiếu – tự sinh, không sửa tay
lop.json              Tên các lớp theo khối (năm học 2026-2027) – dùng cho ô chọn lớp ở trang chủ
assets/               Ảnh khung viền dùng chung (top, mid, bot, bg)
assets/js/qrcode.js   Thư viện tạo mã QR (MIT, Kazuhiko Arase)
phieu/<tên>/          Mỗi phiếu một thư mục
  config.json         Nội dung + đáp án của phiếu (sửa ở đây)
  index.html          Trang phiếu – tự sinh từ config.json
tools/engine.html     Khuôn trang phiếu (giao diện, chấm điểm, gửi điểm)
tools/build_phieu.py  Dựng lại mọi phiếu, phieu.json và bảng dưới đây
tools/kiem_tra.js     Tự làm thử mọi phiếu trong trình duyệt ẩn
tools/NhanDiem.gs     Apps Script nhận điểm + số liệu cho trang tổng hợp (dán vào Google Sheet)
tools/kiem_tra_gs.js  Chạy thử NhanDiem.gs với Sheet giả lập
giaovien/             Trang tổng hợp điểm cho cô (cần mật khẩu)
.claude/skills/       Skill hướng dẫn Claude tạo phiếu
```

## Thêm hoặc sửa phiếu
1. Tạo/sửa `phieu/<tên>/config.json`.
2. Chạy `python3 tools/build_phieu.py` rồi `node tools/kiem_tra.js`.
3. Commit và push lên `main`. Khoảng 1–2 phút sau trang web cập nhật; link phiếu giữ nguyên.

## Tạo phiếu khi chỉ có chat Claude (gói Free)
1. Ở chat claude.ai (đã bật skill **phieu-tuong-tac** và *Code execution*), gửi file Word/PDF → Claude đưa file `config.json`.
2. Trên GitHub: **Add file → Create new file**, tên file `phieu/<tên-phiếu>/config.json`, dán nội dung → **Commit changes**.
3. Bộ tự động (thẻ **Actions**) tự dựng và đăng phiếu sau khoảng 2 phút. ✓ xanh là xong; ✗ đỏ thì bấm vào đọc dòng "LỖI…" và gửi cho Claude.

## Danh sách phiếu
<!-- DS_PHIEU -->
| Khối | Môn | Tên phiếu | Lớp | Ngày mở | Hạn nộp | Link |
|---|---|---|---|---|---|---|
| Khối 9 | Tin học 9 | Dự án Vibe Coding: Phiếu cá nhân | 9A1, 9A2, 9A3, 9A4, 9A5, 9A6, 9A7, 9A8, 9A9, 9A10 | Chưa giao | – | [Mở phiếu](https://ptn1095.github.io/PhieuTuongTac/phieu/tin9-du-an-vibe-coding/) |
| Khối 9 | Tin học 9 | Bảng tính 6: Ôn tập tổng hợp | 9A1, 9A2, 9A3, 9A4, 9A5, 9A6, 9A7, 9A8, 9A9, 9A10 | Chưa giao | – | [Mở phiếu](https://ptn1095.github.io/PhieuTuongTac/phieu/tin9-bang-tinh-6-on-tap/) |
| Khối 9 | Tin học 9 | Bảng tính 5: Hàm IF | 9A1, 9A2, 9A3, 9A4, 9A5, 9A6, 9A7, 9A8, 9A9, 9A10 | Chưa giao | – | [Mở phiếu](https://ptn1095.github.io/PhieuTuongTac/phieu/tin9-bang-tinh-5-if/) |
| Khối 9 | Tin học 9 | Bảng tính 4: Hàm SUMIF | 9A1, 9A2, 9A3, 9A4, 9A5, 9A6, 9A7, 9A8, 9A9, 9A10 | Chưa giao | – | [Mở phiếu](https://ptn1095.github.io/PhieuTuongTac/phieu/tin9-bang-tinh-4-sumif/) |
| Khối 9 | Tin học 9 | Bảng tính 3: Hàm COUNTIF | 9A1, 9A2, 9A3, 9A4, 9A5, 9A6, 9A7, 9A8, 9A9, 9A10 | Chưa giao | – | [Mở phiếu](https://ptn1095.github.io/PhieuTuongTac/phieu/tin9-bang-tinh-3-countif/) |
| Khối 9 | Tin học 9 | Bảng tính 2: Xác thực dữ liệu (luyện thêm) | 9A1, 9A2, 9A3, 9A4, 9A5, 9A6, 9A7, 9A8, 9A9, 9A10 | Chưa giao | – | [Mở phiếu](https://ptn1095.github.io/PhieuTuongTac/phieu/tin9-bang-tinh-2-xac-thuc-du-lieu/) |
| Khối 9 | Tin học 9 | Bảng tính 1: Làm quen với Excel | 9A1, 9A2, 9A3, 9A4, 9A5, 9A6, 9A7, 9A8, 9A9, 9A10 | Chưa giao | – | [Mở phiếu](https://ptn1095.github.io/PhieuTuongTac/phieu/tin9-bang-tinh-1-lam-quen/) |
| Khối 5, Đội tuyển Tin học | Tin học – Scratch | Variables – Phần 2: Danh sách (List) | 5A1, 5A2, 5A3, 5A4, 5A5, 5A6, ĐT Tin - K2, ĐT Tin - K3 | 10/11/2026 | – | [Mở phiếu](https://ptn1095.github.io/PhieuTuongTac/phieu/scratch-variables-2-danh-sach/) |
| Khối 5, Đội tuyển Tin học | Tin học – Scratch | Variables – Phần 1: Biến nhớ | 5A1, 5A2, 5A3, 5A4, 5A5, 5A6, ĐT Tin - K2, ĐT Tin - K3 | 10/11/2026 | – | [Mở phiếu](https://ptn1095.github.io/PhieuTuongTac/phieu/scratch-variables-1-bien-nho/) |
| Đội tuyển Tin học | Tin học – Scratch | Nhóm lệnh Bút vẽ (Pen) | ĐT Tin - K2, ĐT Tin - K3 | 10/11/2026 | – | [Mở phiếu](https://ptn1095.github.io/PhieuTuongTac/phieu/scratch-but-ve-pen/) |
| Khối 9 | Tin học 9 | Công cụ xác thực dữ liệu (Data Validation) | 9A1, 9A2, 9A3, 9A4, 9A5, 9A6, 9A7, 9A8, 9A9, 9A10 | 10/11/2026 | – | [Mở phiếu](https://ptn1095.github.io/PhieuTuongTac/phieu/tin9-xac-thuc-du-lieu/) |
<!-- /DS_PHIEU -->
