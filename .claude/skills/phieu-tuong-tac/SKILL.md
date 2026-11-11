---
name: "phieu-tuong-tac"
description: "Biến phiếu bài tập Word/PDF thành phiếu tương tác khung Cô Thùy Tin, tự chấm điểm, gửi điểm về Google Sheet; phiếu được đăng lên kho GitHub ptn1095/PhieuTuongTac (https://ptn1095.github.io/PhieuTuongTac/). Dùng khi cô gửi nội dung phiếu, cần tạo/sửa phiếu tương tác hoặc thêm phiếu vào web Cô Thùy Tin."
---

# phieu-tuong-tac — Phiếu bài tập tương tác tự chấm điểm (đăng trên GitHub)

Từ file Word/PDF của giáo viên, tạo một trang phiếu bài tập: học sinh chọn đáp án, bấm **Tính điểm** một lần, thấy ảnh kết quả có khung viền Cô Thùy Tin, điểm tự gửi về Google Sheet của cô.

**Mọi phiếu nằm trong kho GitHub `ptn1095/PhieuTuongTac`**, trang web https://ptn1095.github.io/PhieuTuongTac/.
KHÔNG đăng phiếu lên claude.ai artifact nữa. Khuôn trang phiếu, script dựng và script kiểm tra đều nằm trong kho, không chép mã vào đây.

Trao đổi với cô bằng tiếng Việt, ngắn gọn, không dùng thuật ngữ kỹ thuật.

## 0. Lấy kho về
- Nếu đang ở trong kho (có `tools/build_phieu.py`) thì dùng luôn.
- Nếu không: `add_repo` (owner `ptn1095`, repo `PhieuTuongTac`, access `push`), rồi `git clone --depth 1 https://github.com/ptn1095/PhieuTuongTac`.
- Kho gồm:
  - `phieu/<tên>/config.json`: nội dung và đáp án của từng phiếu. Đây là chỗ duy nhất cần viết.
  - `tools/engine.html`: khuôn giao diện, chấm điểm, gửi điểm.
  - `tools/build_phieu.py`: dựng trang phiếu, `phieu.json`, bảng README.
  - `tools/kiem_tra.js`: làm thử mọi phiếu.
  - `tools/NhanDiem.gs`: Apps Script nhận điểm.
  - `assets/`: ảnh khung dùng chung.
- Không sửa tay `phieu.json`, `phieu/*/index.html` hay bảng trong README, vì các file này tự sinh.

## 1. Đầu vào cần có (hỏi nếu thiếu, gom vào MỘT câu hỏi)
1. **File nội dung phiếu**: .docx hoặc .pdf, có thể có hoặc không có đáp án.
2. **Danh sách lớp** của phiếu (ví dụ 3A4, 3A5). Không có danh sách mặc định, mỗi lần tạo phiếu đều hỏi.
   Lớp đội tuyển viết đầy đủ dạng `ĐT Tin - K2`, `ĐT Tin - K3`… Cô ghi tắt ("ĐT - K2", "K2") thì tự đổi sang dạng này.
3. **Nơi nhận điểm**: mặc định dùng Apps Script của cô (đã cài, đã kiểm tra), không cần hỏi lại:
   `https://script.google.com/macros/s/AKfycbypoQt_uqRBGqN9N-EfLDGdsMPrirkGAQLlFwRTlot7tpruG2jivFKT6U3pbA2LuQV00Q/exec`
   Nếu cô muốn dùng Google Form thì xem mục 7.
4. **Tên phiếu ngắn** (`ma`): dùng làm tên trang tính trong Sheet, ví dụ `CN3 - Bài 4 Máy thu thanh`. Cô không nêu thì tự đặt theo môn và bài.
5. **Khối trên web**: `khoi-3`, `khoi-5`, `khoi-9` hoặc `doi-tuyen`. Tự suy từ tên lớp (3A4 → khoi-3, "ĐT …" → doi-tuyen); chỉ hỏi khi không suy được.
   Phiếu dùng cho nhiều khối thì ghi danh sách, ví dụ `"khoi": ["khoi-5", "doi-tuyen"]`: phiếu hiện ở cả hai mục, chung một link.

## 2. Quy trình
1. **Đọc file**:
   - .docx: dùng `pandoc` hoặc `python-docx`. Giữ ảnh bằng cách giải nén `word/media/`.
   - .pdf: dùng skill `pdf`.
   - Giữ nguyên văn câu hỏi, số, ký hiệu.
2. **Chuyển thành câu hỏi tự chấm** (mục 4). Mọi câu đều chấm bằng ô chọn. Câu tự luận thì đổi sang dạng chọn nếu được; không được thì báo cô và bỏ ra.
3. **Đáp án**:
   - Lấy đáp án từ file. Câu nào file không có thì tự giải và **đánh dấu "Claude tự giải"**.
   - Cô có thể gửi riêng **phiếu đáp án** (.docx): đáp án trắc nghiệm thường tô đỏ, đậm, gạch chân. Đọc định dạng trong `word/document.xml` (`<w:color w:val="FF0000"/>`, `<w:u`) để biết phương án được tô, rồi so với đáp án đã soạn.
   - Có câu tự giải hoặc câu phải đổi dạng: gửi cô bảng Bài – câu – đáp án – nguồn, chờ cô duyệt.
   - Mọi đáp án đều có sẵn trong file: làm tiếp luôn.
4. **Hình**:
   - Ảnh trong file: nhúng `<img src="data:...">` ngay trong config (thu nhỏ ≤ 900px, JPEG/PNG).
   - Khối lệnh Scratch: vẽ theo skill `scratch` (đúng màu, đúng hình dạng, tên tiếng Anh).
   - Sơ đồ có nhãn số: vẽ SVG inline, bộ phận dễ nhầm phải có ký hiệu phân biệt.
5. **Viết** `phieu/<tên-thư-mục>/config.json` (mục 3).
   - Tên thư mục: chữ thường không dấu, nối bằng `-`, ví dụ `cn3-bai4-may-thu-thanh`.
   - Tên thư mục chính là link phiếu, nên **không đổi sau khi đã giao cho học sinh**.
6. **Dựng**: `python3 tools/build_phieu.py`. Script tự báo lỗi khi đáp án không có trong lựa chọn, số chỗ trống lệch số đáp án, thiếu lớp, sai khối hoặc sai ngày.
7. **Tự kiểm tra** (bắt buộc): `node tools/kiem_tra.js <thư-mục-ảnh>`.
   - Script kiểm tra: làm đúng hết được 10 điểm, gửi điểm đúng 1 lần với đủ tham số, ảnh kết quả hiện, không lỗi tải ảnh khung.
   - Script chụp màn hình bản máy tính và bản điện thoại. **Mở ảnh chụp ra xem** để chắc bố cục không tràn, không đè viền, tiếng Việt đúng dấu.
   - Yêu cầu tới Google bị chặn trong lúc thử, không có điểm giả vào Sheet thật.
8. **Đăng**:
   - Commit với tác giả `ptn1095` (`git -c user.name=ptn1095 -c user.email=ptn1095@users.noreply.github.com commit ...`).
   - `git fetch origin main`, rebase nếu cần, rồi `git push origin main`.
   - Khoảng 1–2 phút sau phiếu lên mạng tại `https://ptn1095.github.io/PhieuTuongTac/phieu/<tên>/` và hiện ở đúng khối trên trang chủ.
   - Nếu push bị từ chối, xem mục 8.
9. **Báo cô**: link phiếu, khối, số bài và số câu, câu nào tự giải. Nhắc cô làm thử một lần với tên "Thử" và xem điểm đã về Sheet chưa, rồi mới giao cho học sinh.
10. **Sửa phiếu**: sửa `config.json`, chạy lại bước 6–8. Link giữ nguyên.

## 3. `config.json`
```json
{
 "web": {"khoi": "khoi-3", "mon": "Công nghệ 3", "ten": "Bài 4: Sử dụng máy thu thanh", "ngay": "YYYY-MM-DD"},
 "ma": "CN3 - Bài 4 Máy thu thanh",
 "mon": "CÔNG NGHỆ 3 – KẾT NỐI TRI THỨC",
 "tieuDe": "Phiếu bài tập – Bài 4: Sử dụng máy thu thanh",
 "lop": ["3A4", "3A5", "3A6"],
 "guiB": "https://script.google.com/macros/s/.../exec",
 "guiA": null,
 "bai": [ ... ]
}
```
- `web` là phần hiện trên trang chủ: khối, dòng môn, tên ngắn, ngày (ngày tạo phiếu).
- `mon` và `tieuDe` hiện ở đầu tờ phiếu và trong ảnh kết quả.
- Có `guiB` thì gửi về Apps Script. Nếu `guiB` rỗng thì dùng `guiA`:
  `{"url": ".../formResponse", "ten": "entry..", "lop": "entry..", "diem": "entry..", "chiTiet": "entry..", "phieu": "entry.." hoặc null}`.
- Trường văn bản (`yc`, `text`, `hinh`) được chứa HTML ngắn (`<b>`, `<br>`, SVG, `<img>`). `lc`, `da`, `bank` là chữ thường.

## 4. Các dạng bài (`bai[].loai`)
Mỗi ô chọn là 1 câu chấm điểm. Nhãn `B<số bài>.<số/chữ>` hiện trong ảnh kết quả và trong Sheet.

| loai | Dùng cho | Cấu trúc |
|---|---|---|
| `chon` | Gọi tên theo số trên hình, chọn theo danh sách | `lc` chung; `cau:[{nhan?, text?, da, lc?}]`; thêm `hinh` để đặt hình bên trái |
| `noi` | Nối cột trái với cột phải | `lc` = các vế phải; `cau:[{text: vế trái, da}]` |
| `ds` | Đúng/Sai | `cau:[{text, da:"Đ"\|"S"}]` |
| `thutu` | Sắp xếp thứ tự các bước | `cau:[{text, da: số thứ tự}]`, liệt kê theo thứ tự đã xáo |
| `dien` | Điền khuyết (chọn từ) | `bank?` (khung từ), `lc`; `cau:[{text có "{}", da:[...], hinh?}]`; có `hinh` thì hiện dạng thẻ 2 cột |
| `traloi` | Trắc nghiệm a, b, c… (có thể kèm hình chung) | `cau:[{text có "{}" ở chỗ ô chọn, lc, da}]`; `hinh`, `khungHinh:true` |
| `abcd` | Trắc nghiệm **bấm ô A/B/C/D** (giống khoanh tròn trên giấy) | `cau:[{text, lc:[nội dung các phương án], da: nội dung phương án đúng, cot?}]`; `cot` = số cột ô phương án (1, 2 hoặc 4; mặc định 2, có thể đặt chung ở bài). Phương án được chứa ảnh/SVG |
| `noidot` | **Nối chấm tròn**: bấm chấm bên trái rồi bấm chấm bên phải, hiện đường nối | Giống `noi`: `lc` = cột phải (theo thứ tự hiện), `cau:[{text: ô trái, da}]`. Bấm lại ô trái đã nối để nối lại |

- Chọn dạng theo cách làm trên giấy của cô:
  - "Khoanh tròn đáp án A/B/C/D" → `abcd`. Số cột: phương án ngắn (≤ 14 ký tự) thì 4; ≤ 30 ký tự thì 2; dài hơn thì 1.
  - "Nối (dùng bút vẽ đường nối)" → `noidot`.
  - Điền chỗ trống, chọn trong câu → `dien` / `traloi` (ô thả xuống).
- `abcd`: không dùng chữ A/B/C/D làm nội dung phương án; ghi nội dung thật, engine tự gắn nhãn A/B/C/D.
- Cả hai dạng mới vẫn chấm điểm, tô xanh/đỏ, ghi nhãn B…, gửi Sheet như các dạng khác.
- Trộn thứ tự các lựa chọn trong `lc` để đáp án không luôn ở cùng một vị trí.
- Các phương án không được chồng lấn nhau hoặc làm lộ đáp án.

## 5. Hành vi cố định của trang
Đã có sẵn trong `tools/engine.html`, không làm khác đi.
- **Bố cục:** một tờ dài liên tục, rộng thiết kế 794px, tự thu nhỏ trên điện thoại. Đầu tờ có khung và chữ "Cô Thùy Tin", giữa lặp viền, cuối là chồng sách và thước.
- **Thông tin học sinh:** ô **Họ và tên** và ô **Lớp** (theo danh sách lớp) ở đầu tờ. Bắt buộc nhập đủ; ô nào thiếu sẽ tô cam.
- **Nút Tính điểm** chỉ bấm được **một lần**. Sau khi bấm:
  - khóa toàn bộ ô, tô xanh câu đúng, tô đỏ câu sai;
  - **gửi điểm ngầm**, không mở tab mới;
  - hiện ảnh kết quả có khung: tên, lớp, điểm thang 10 làm tròn 0,5, nhận xét, ✓/✗ từng câu, giờ làm;
  - hiện nút **Lưu ảnh** và **Lưu PDF**.
- **Trang chủ:** mỗi thẻ phiếu có nhãn **MỚI** (7 ngày), số câu, thời gian làm ước tính (tự tính khi build) và nút **▦ Mã QR** (hộp QR to để cô chiếu lên bảng, có nút chép link). Thư viện QR đặt sẵn trong `assets/js/qrcode.js`.
- **Link dự phòng:** luôn có link "Gửi điểm cho cô" phòng khi gửi ngầm lỗi.
- Không có nút "Làm lại".
- **Thanh trên cùng (dính khi cuộn):** nút **← Trở về** + tiến độ "Em đã làm x/y câu" + nút "Câu chưa làm ↓". Cuối phiếu có thêm nút **← Trở về kho phiếu**.
- **Trở về khi chưa nộp:** chưa làm câu nào → về thẳng trang chủ; đã làm dở → hộp hỏi lại "Em chưa nộp bài!", chọn "Xóa bài và về trang chủ" thì bài bị xóa. Mở lại phiếu (kể cả bằng nút Back) luôn là bài trắng. Đã nộp → về thẳng.
- **Nhớ tên + lớp** trên máy (trong ngày) sau khi nộp; phiếu sau tự điền, kèm nhắc "Máy đang nhớ tên… [Không phải em]" cho máy dùng chung ở phòng tin.
- **Sửa giao diện hoặc cách chấm:** sửa `tools/engine.html` rồi build lại; thay đổi áp dụng cho mọi phiếu. Chỉ làm khi cô yêu cầu.

## 6. Thiết kế
- **Màu:** cam `#F28C28`, xanh lá `#65B843`, xanh biển `#168DCE`, chữ `#222`. Font Arial.
- **Huy hiệu "Bài n":** xoay vòng xanh biển → cam → xanh lá.
- **Lề trong:** nội dung không được đè lên họa tiết viền. Ở bề rộng 794px: trên 124px, hai bên 84px, dưới 196px.

## 7. Cài nơi nhận điểm (gửi cô khi cần)
**Cách B: Sheet + Apps Script (đang dùng)**
1. Tạo Google Sheet trống, đặt tên (ví dụ "Điểm phiếu bài tập").
2. Vào **Tiện ích mở rộng → Apps Script**, xóa mã có sẵn, dán toàn bộ `tools/NhanDiem.gs` trong kho, bấm Lưu.
3. Vào **Triển khai → Tùy chọn triển khai mới → Loại: Ứng dụng web**:
   - Thực thi với tư cách: **Tôi**.
   - Người có quyền truy cập: **Bất kỳ ai**.
   - Bấm Triển khai, rồi cấp quyền (Nâng cao → Đi tới … → Cho phép).
4. Sao chép **URL ứng dụng web** (kết thúc bằng `/exec`) gửi cho Claude, rồi đặt vào `guiB` của phiếu.
5. Mỗi phiếu tự tạo một trang tính riêng với các cột: Thời gian nộp | Họ và tên | Lớp | Điểm | Số câu đúng | Nhận xét | Chi tiết.
   - Mỗi em chỉ nộp được 1 lần cho mỗi phiếu. Muốn cho nộp nhiều lần thì đổi `CHAN_NOP_TRUNG = false`.
   - Sửa mã thì phải vào **Quản lý triển khai → Chỉnh sửa → Phiên bản mới** thì mã mới mới chạy.

**Cách A: Google Form chung**
- Form của cô: `https://docs.google.com/forms/d/e/1FAIpQLSd4Z3-qZv_Wug7_11Vq_vxcpmPM9bq9Ff8CNiCQM2ZtomKFHQ/formResponse`.
- Mã các ô: `ten=entry.726439558`, `lop=entry.1742288832`, `diem=entry.2109936569`, `chiTiet=entry.1810630210`, `phieu=null`.
- Form chưa có ô "Tên phiếu", nên tên phiếu được ghi ở đầu ô chi tiết.
- Đọc mã entry của Form khác: mở `.../viewform`, chạy `FB_PUBLIC_LOAD_DATA_[1][1].map(q=>[q[1],q[4][0][0]])`.
- Không gửi thử vào Form của cô khi chưa được cho phép.

## 8. Khi không push được lên GitHub
Ví dụ khi đang ở chat claude.ai không có quyền GitHub:
1. Vẫn soạn `config.json` đầy đủ.
2. Gửi cô file `config.json`, kèm hướng dẫn:
   - Mở https://github.com/ptn1095/PhieuTuongTac, bấm **Add file → Create new file**.
   - Đặt tên `phieu/<tên>/config.json`, dán nội dung, bấm **Commit changes**.
3. Nói cô mở một phiên Claude Code với kho PhieuTuongTac và nhắn "build và đăng phiếu <tên>", để chạy bước 6–8.
4. **Không** đăng phiếu lên artifact thay thế.

## 9. Kiểm tra cuối trước khi bàn giao
- [ ] Mọi câu trong file đã có mặt, hoặc đã báo cô lý do bỏ/đổi dạng.
- [ ] Câu tự giải đã được cô duyệt, hoặc đã nêu rõ.
- [ ] `build_phieu.py` chạy không lỗi; `kiem_tra.js` báo "Tất cả đều ổn".
- [ ] Đã xem ảnh chụp: không tràn, không đè viền, đúng dấu.
- [ ] Đã push lên `main`; đã báo cô link và nhắc làm thử một lần.
