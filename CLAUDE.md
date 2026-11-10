# Kho phiếu bài tập tương tác – Cô Thùy Tin

Trang web: https://ptn1095.github.io/PhieuTuongTac/ (GitHub Pages, nhánh `main`).
Người dùng là giáo viên, trao đổi bằng tiếng Việt, ngắn gọn, không dùng thuật ngữ kỹ thuật.

Tạo hoặc sửa phiếu: làm theo skill `.claude/skills/phieu-tuong-tac/SKILL.md` trong kho này.
Bản này thay cho mọi bản skill cùng tên cũ hơn (bản cũ đăng phiếu lên claude.ai artifact, không dùng nữa).

Tóm tắt:
1. Viết `phieu/<tên>/config.json`.
2. `python3 tools/build_phieu.py`
3. `node tools/kiem_tra.js <thư-mục-ảnh>` và xem ảnh chụp.
4. Commit (tác giả `ptn1095`), push lên `main`.

Không sửa tay `phieu.json`, `phieu/*/index.html`, bảng trong README; chúng được tự sinh.
Sửa skill thì cũng cập nhật lại bản trong tài khoản claude.ai của cô (gửi cô file .zip của thư mục skill).
