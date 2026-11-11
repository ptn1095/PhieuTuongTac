# Cô Thùy Tin – Kho phiếu bài tập tương tác

Trang web: **https://ptn1095.github.io/PhieuTuongTac/**

Học sinh chọn khối (Khối 3, Khối 5, Khối 9, Đội Tuyển), bấm **Làm bài**, làm xong bấm **Tính điểm** – điểm tự gửi về Google Sheet của cô.

## Cấu trúc
```
index.html            Trang chủ (kho phiếu)
phieu.json            Danh sách phiếu – tự sinh, không sửa tay
assets/               Ảnh khung viền dùng chung (top, mid, bot, bg)
phieu/<tên>/          Mỗi phiếu một thư mục
  config.json         Nội dung + đáp án của phiếu (sửa ở đây)
  index.html          Trang phiếu – tự sinh từ config.json
tools/engine.html     Khuôn trang phiếu (giao diện, chấm điểm, gửi điểm)
tools/build_phieu.py  Dựng lại mọi phiếu, phieu.json và bảng dưới đây
tools/kiem_tra.js     Tự làm thử mọi phiếu trong trình duyệt ẩn
tools/NhanDiem.gs     Apps Script nhận điểm (dán vào Google Sheet)
.claude/skills/       Skill hướng dẫn Claude tạo phiếu
```

## Thêm hoặc sửa phiếu
1. Tạo/sửa `phieu/<tên>/config.json`.
2. Chạy `python3 tools/build_phieu.py` rồi `node tools/kiem_tra.js`.
3. Commit và push lên `main`. Khoảng 1–2 phút sau trang web cập nhật; link phiếu giữ nguyên.

## Danh sách phiếu
<!-- DS_PHIEU -->
| Khối | Môn | Tên phiếu | Lớp | Ngày | Link |
|---|---|---|---|---|---|
| Khối 5, Đội Tuyển | Tin học – Scratch | Variables – Phần 2: Danh sách (List) | 5A1 – ĐT Tin - K3 | 10/11/2026 | [Mở phiếu](https://ptn1095.github.io/PhieuTuongTac/phieu/scratch-variables-2-danh-sach/) |
| Khối 5, Đội Tuyển | Tin học – Scratch | Variables – Phần 1: Biến nhớ | 5A1 – ĐT Tin - K3 | 10/11/2026 | [Mở phiếu](https://ptn1095.github.io/PhieuTuongTac/phieu/scratch-variables-1-bien-nho/) |
| Đội Tuyển | Tin học – Scratch | Nhóm lệnh Bút vẽ (Pen) | ĐT Tin - K2, ĐT Tin - K3 | 10/11/2026 | [Mở phiếu](https://ptn1095.github.io/PhieuTuongTac/phieu/scratch-but-ve-pen/) |
| Khối 9 | Tin học 9 | Công cụ xác thực dữ liệu (Data Validation) | 9A1 – 9A10 | 10/11/2026 | [Mở phiếu](https://ptn1095.github.io/PhieuTuongTac/phieu/tin9-xac-thuc-du-lieu/) |
<!-- /DS_PHIEU -->
