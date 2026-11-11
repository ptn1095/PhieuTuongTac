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
  - `tools/NhanDiem.gs`: Apps Script nhận điểm + trả số liệu cho trang tổng hợp (có mật khẩu); `tools/kiem_tra_gs.js` chạy thử nó.
  - `giaovien/index.html`: trang tổng hợp điểm cho cô (đăng nhập bằng `MAT_KHAU`). Chọn thời gian: Tuần này / Tuần trước / Tháng này / Tháng trước / Đến nay / Tùy chọn (lọc theo giờ nộp). Tab "Theo từng phiếu" (phân bố điểm, câu sai nhiều nhất, chưa nộp) và tab "Tổng hợp nhiều phiếu" (lượt nộp, biểu đồ theo ngày/tuần, bảng theo lớp, bảng theo học sinh: đã làm x/y phiếu được giao, điểm TB/cao/thấp, phiếu chưa làm; tải CSV). "Phiếu được giao" trong khoảng = phiếu có `web.ngay` nằm trong khoảng.
  - `assets/`: ảnh khung dùng chung.
- Không sửa tay `phieu.json`, `phieu/*/index.html` hay bảng trong README, vì các file này tự sinh.

## 1. Đầu vào cần có (hỏi nếu thiếu, gom vào MỘT câu hỏi)
1. **File nội dung phiếu**: .docx hoặc .pdf, có thể có hoặc không có đáp án.
2. **Danh sách lớp** của phiếu (ví dụ 3A4, 3A5). Không có danh sách mặc định, mỗi lần tạo phiếu đều hỏi.
   Lớp đội tuyển viết đầy đủ dạng `ĐT Tin - K2`, `ĐT Tin - K3`… Cô ghi tắt ("ĐT - K2", "K2") thì tự đổi sang dạng này.
   **Tên lớp chuẩn nằm trong `lop.json`** (khối → danh sách lớp, năm học 2026-2027): cô nói "lớp 5" / "khối 9" thì lấy đủ lớp của khối đó trong `lop.json`; tên lớp trong phiếu phải viết **đúng y** như trong `lop.json` để trang chủ lọc và trang tổng hợp đếm "chưa nộp" đúng.
   Trang chủ: màn hình đầu chỉ có lời chào + 4 nút khối. Bấm khối → các khối khác **ẩn hẳn, không bấm được** (tránh phân tâm), xổ xuống các lớp của khối (`lop.json`) → chọn lớp mới thấy phiếu. Lựa chọn nhớ trong **phiên** (về từ phiếu vẫn đúng khối; mở trình duyệt mới thì chọn lại – hợp với phòng máy dùng chung). Cuối trang có dòng nhỏ "Chọn nhầm khối?" để chọn lại. **Học sinh không thấy** số phiếu của khối, danh sách lớp được giao trên thẻ phiếu, nút Mã QR (tránh hỏi đáp án giữa các lớp); vào phiếu thì ô Lớp chỉ có đúng lớp em đã chọn ở trang chủ. Máy cô (đã đăng nhập trang tổng hợp) thấy đủ. Đổi năm học / thêm lớp thì sửa `lop.json`.
   **Không bao giờ đưa tên học sinh vào kho** (kho công khai). Danh sách học sinh chỉ nằm trong Google Sheet của cô (trang tính `DanhSach`, 2 cột Lớp | Họ và tên).
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
8. **Đăng** (bộ tự động GitHub Actions cũng tự build lại sau mỗi lần push, nên kể cả quên build thì web vẫn đúng):
   - Commit với tác giả `ptn1095` (`git -c user.name=ptn1095 -c user.email=ptn1095@users.noreply.github.com commit ...`).
   - `git fetch origin main`, rebase nếu cần, rồi `git push origin main`.
   - Khoảng 1–2 phút sau phiếu lên mạng tại `https://ptn1095.github.io/PhieuTuongTac/phieu/<tên>/` và hiện ở đúng khối trên trang chủ.
   - Nếu push bị từ chối, xem mục 8.
9. **Báo cô**: link phiếu, khối, số bài và số câu, câu nào tự giải. Nhắc cô làm thử một lần với tên "Thử" và xem điểm đã về Sheet chưa, rồi mới giao cho học sinh.
10. **Sửa phiếu**: sửa `config.json`, chạy lại bước 6–8. Link giữ nguyên.

## 2b. Tạo nhiều phiếu một lúc, giao dần theo lịch
Khi cô gửi nhiều file và muốn giao dần (ví dụ "mỗi thứ Hai mở 1 phiếu, hạn hết Chủ nhật", "phiếu 1 mở 18/11, phiếu 2 mở 25/11…"):
1. Hỏi gộp MỘT lần những gì còn thiếu: thứ tự các phiếu, ngày mở phiếu đầu, nhịp (mỗi tuần / mỗi 2 tuần / ngày cụ thể), hạn nộp (bao nhiêu ngày sau khi mở, hoặc không hạn), giờ mở nếu cần (mặc định 00:00 – học sinh thấy từ đầu ngày), lớp.
2. Soạn từng phiếu như mục 2 (duyệt đáp án gộp một bảng cho tất cả phiếu).
3. Ghi lịch vào `web.mo` / `web.dong` của từng config (`"mo": "2026-11-18"` hoặc `"2026-11-18 07:00"`). `web.ngay` = ngày tạo phiếu.
   Ngày lễ / nghỉ cô nêu thì bỏ qua tuần đó.
4. Build + kiểm tra + đẩy lên **một lần** cho cả đợt.
5. Báo cô **bảng lịch**: Phiếu | Mở | Hạn | Lớp | link; nhắc cô xem tab **🗓 Lịch giao phiếu** trên trang tổng hợp và bấm **Xem trước** để làm thử từng phiếu.
**Giao bằng nút bấm (ưu tiên):** trang tổng hợp → tab **📋 Giao phiếu**: bảng "Chưa giao" (tích chọn → **Giao hàng loạt**: ngày mở phiếu đầu, cách nhau n ngày, hạn sau m ngày, đổi thứ tự ▲▼) và bảng "Đã giao" (Sửa / Thu hồi / Xem trước). Giao **cả khối**, chọn được nhiều khối. Lịch lưu ở trang tính `GiaoPhieu` (Apps Script `action=datgiao`, cần mật khẩu); trang học sinh đọc bản *Công bố lên web* CSV của riêng trang tính đó, link ở `cauhinh.json` → `giaoCsv` (`assets/js/giao.js`). Lịch ở Sheet **ưu tiên hơn** `config.json`; không đọc được Sheet thì dùng `config.json`. Học sinh thấy thay đổi sau tối đa ~5 phút.
Vì vậy phiếu mới nên tạo với `"chuaGiao": true` rồi để cô tự bấm Giao (trừ khi cô dặn lịch cụ thể ngay).
**Chưa giao (chưa có ngày):** cô nói "chưa giao" → thêm `"chuaGiao": true` vào `web`. Phiếu ẩn với học sinh (mở link → "Phiếu chưa được giao"), trang tổng hợp ghi "Chưa giao", cô vẫn xem trước được. Khi cô bảo giao: bỏ `chuaGiao`, đặt `mo`/`dong` (hoặc chỉ bỏ `chuaGiao` để mở ngay).
**Không cho xem đáp án** sau khi nộp (tránh nhìn bài nhau): `"xemDapAn": false`. **Trộn phương án:** `"tron": true`.
**Câu gõ công thức** (`go`): thêm `"congThuc": true` để bỏ qua khoảng trắng và dấu = ở đầu (=A5*B5 ≡ a5 * b5).
Hành vi: phiếu chưa tới ngày mở **ẩn với học sinh** (trang chủ không hiện; mở link trực tiếp thì báo "Phiếu chưa mở"). Muốn học sinh thấy trước với nhãn "SẮP MỞ" thì thêm `"hienTruoc": true` vào `web`.
Máy cô (đã đăng nhập trang tổng hợp) thấy cả phiếu sắp mở ("chỉ cô thấy") và làm thử được ("Cô đang xem trước" – không gửi điểm, không lưu tên).
Đổi lịch: sửa `mo`/`dong` → build → push (link giữ nguyên). Thống kê "phiếu được giao" tính theo ngày mở, phiếu chưa mở không tính.

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
- **Hạn làm bài** (tùy chọn, chỉ thêm khi cô nói): `"web": {..., "mo": "YYYY-MM-DD", "dong": "YYYY-MM-DD"}` (có thể thêm giờ: `"2026-11-20 17:00"`).
  Trước ngày mở: trang chủ hiện "SẮP MỞ", phiếu bị khóa. Sau ngày đóng (hết 23:59 nếu không ghi giờ): "ĐÃ ĐÓNG", không nộp được. Còn hạn: hiện "⏳ Hạn nộp".
  Lưu ý: khóa này nằm trên trang web (học sinh rành máy vẫn có thể lách); Sheet vẫn ghi giờ nộp để cô đối chiếu.
- **Xem lại bài** sau khi nộp: mặc định câu sai ghi kèm đáp án đúng (nối chấm: đường đúng nét đứt xanh). Muốn giấu đáp án (ví dụ bài kiểm tra, sợ em nộp trước báo đáp án cho bạn) thì thêm `"xemDapAn": false` – khi đó chỉ tô đỏ câu sai.
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
| `ds` | Đúng/Sai – **2 nút bấm Đúng / Sai** | `cau:[{text, da:"Đ"\|"S"}]` |
| `thutu` | Sắp xếp thứ tự các bước | `cau:[{text, da: số thứ tự}]`, liệt kê theo thứ tự đã xáo |
| `dien` | Điền khuyết (chọn từ) | `bank?` (khung từ), `lc`; `cau:[{text có "{}", da:[...], hinh?}]`; có `hinh` thì hiện dạng thẻ 2 cột |
| `traloi` | Trắc nghiệm a, b, c… (có thể kèm hình chung) | `cau:[{text có "{}" ở chỗ ô chọn, lc, da}]`; `hinh`, `khungHinh:true` |
| `abcd` | Trắc nghiệm **bấm ô A/B/C/D** (giống khoanh tròn trên giấy) | `cau:[{text, lc:[nội dung các phương án], da: nội dung phương án đúng, cot?}]`; `cot` = số cột ô phương án (1, 2 hoặc 4; mặc định 2, có thể đặt chung ở bài). Phương án được chứa ảnh/SVG |
| `noidot` | **Nối chấm tròn**: bấm chấm bên trái rồi bấm chấm bên phải, hiện đường nối | Giống `noi`: `lc` = cột phải (theo thứ tự hiện), `cau:[{text: ô trái, da}]`. Bấm lại ô trái đã nối để nối lại |
| `nhieu` | **Chọn nhiều đáp án đúng** (ô vuông bật/tắt) | Giống `abcd` nhưng `da: [các phương án đúng]`. Chấm cả câu: đúng khi chọn đủ và không chọn thừa |
| `go` | **Gõ đáp án** (chữ hoặc số) | `cau:[{text có "{}", da: "7" hoặc ["Hà Nội","Ha Noi"]}]` (nhiều cách viết được chấp nhận). Nhiều chỗ gõ trong 1 câu: `da: ["x", ["y","yy"]]` theo thứ tự. Không phân biệt hoa thường, khoảng trắng thừa; số "3,5" = "3.5". `boDau: true` (ở câu hoặc bài) để chấp nhận gõ không dấu |
| `sapxep` | **Kéo thả sắp xếp** (giữ ☰ để kéo, hoặc bấm ▲▼) | `cau:[{text}]` ghi **theo đúng thứ tự**; trang tự xáo. Mỗi mục là 1 câu chấm (đúng vị trí) |

- Chọn dạng theo cách làm trên giấy của cô:
  - "Khoanh tròn đáp án A/B/C/D" → `abcd`. Số cột: phương án ngắn (≤ 14 ký tự) thì 4; ≤ 30 ký tự thì 2; dài hơn thì 1.
  - "Nối (dùng bút vẽ đường nối)" → `noidot`.
  - Điền chỗ trống, chọn trong câu → `dien` / `traloi` (ô thả xuống).
  - "Khoanh tất cả đáp án đúng" → `nhieu`. "Ghi đáp án / tính kết quả" (số, từ ngắn, rõ một đáp án) → `go`; nếu đáp án dài hoặc nhiều cách diễn đạt thì đổi sang dạng chọn.
  - "Sắp xếp các bước / đánh số thứ tự" → `sapxep` (hoặc `thutu` nếu các bước dài, cần ô số).
- `abcd`: không dùng chữ A/B/C/D làm nội dung phương án; ghi nội dung thật, engine tự gắn nhãn A/B/C/D.
- Cả hai dạng mới vẫn chấm điểm, tô xanh/đỏ, ghi nhãn B…, gửi Sheet như các dạng khác.
- Trộn thứ tự các lựa chọn trong `lc` để đáp án không luôn ở cùng một vị trí.
- **Trộn mỗi lần mở** (chống nhìn bài): thêm `"tron": true` ở đầu config → phương án của `abcd`/`nhieu` và ô thả xuống được xáo lại mỗi lần em mở phiếu. Thứ tự **câu** không đổi (để thống kê "câu sai nhiều nhất" đúng). Câu có phương án kiểu "Cả A và B" thì thêm `"giuThuTu": true` cho câu đó.
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
- **Trang chủ:** ô **"Em học lớp"** (máy nhớ lớp đã chọn) chỉ hiện phiếu của lớp đó, tab khối đếm lại theo lớp, lớp của em tô đậm trên thẻ. Mỗi thẻ phiếu có nhãn **MỚI** (7 ngày), số câu, thời gian làm ước tính (tự tính khi build) và nút **▦ Mã QR** (hộp QR to để cô chiếu lên bảng, có nút chép link). Thư viện QR đặt sẵn trong `assets/js/qrcode.js`.
- **Link dự phòng:** luôn có link "Gửi điểm cho cô" phòng khi gửi ngầm lỗi.
- Không có nút "Làm lại".
- **Thanh trên cùng (dính khi cuộn):** nút **← Trở về** + tiến độ "Em đã làm x/y câu" + nút "Câu chưa làm ↓". Cuối phiếu có thêm nút **← Trở về kho phiếu**.
- **Trở về khi chưa nộp:** chưa làm câu nào → về thẳng trang chủ; đã làm dở → hộp hỏi lại "Em chưa nộp bài!", chọn "Xóa bài và về trang chủ" thì bài bị xóa. Mở lại phiếu (kể cả bằng nút Back) luôn là bài trắng. Đã nộp → về thẳng.
- **Sau khi nộp:** hộp "Em làm sai N câu" + nút "Xem câu sai đầu tiên"; điểm ≥ 8 có pháo giấy (10 điểm: pháo to); máy lưu "đã làm" để trang chủ hiện "✓ Đã làm · tên – điểm".
- **Mạng yếu khi nộp:** bài được lưu trên máy và tự gửi lại khi có mạng (cả khi em đã về trang chủ); trang báo rõ "chưa gửi được – sẽ tự gửi lại".
- **Chế độ chiếu đáp án** `?dapan=1`: điền sẵn mọi đáp án, khóa trang, ẩn nút Tính điểm – chỉ mở khi máy đã đăng nhập trang tổng hợp (mật khẩu kiểm qua Apps Script).
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
   - Sửa mã thì phải vào **Quản lý triển khai → Chỉnh sửa → Phiên bản mới** thì mã mới mới chạy (giữ nguyên link).
6. Dòng `MAT_KHAU` trong mã: cô đặt mật khẩu riêng (≥ 6 ký tự). Dùng để đăng nhập **trang tổng hợp điểm** `…/giaovien/` và mở **chế độ chiếu đáp án** (`phieu/<tên>/?dapan=1`, chỉ chạy trên máy cô đã đăng nhập).
7. Trang tính **`DanhSach`** (tùy chọn): cột A Lớp, cột B Họ và tên → trang tổng hợp hiện "em chưa nộp" và sĩ số.
- Sửa `NhanDiem.gs` xong phải chạy `node tools/kiem_tra_gs.js` (Sheet giả lập) và gửi cô mã mới kèm cách "Phiên bản mới".

**Cách A: Google Form chung**
- Form của cô: `https://docs.google.com/forms/d/e/1FAIpQLSd4Z3-qZv_Wug7_11Vq_vxcpmPM9bq9Ff8CNiCQM2ZtomKFHQ/formResponse`.
- Mã các ô: `ten=entry.726439558`, `lop=entry.1742288832`, `diem=entry.2109936569`, `chiTiet=entry.1810630210`, `phieu=null`.
- Form chưa có ô "Tên phiếu", nên tên phiếu được ghi ở đầu ô chi tiết.
- Đọc mã entry của Form khác: mở `.../viewform`, chạy `FB_PUBLIC_LOAD_DATA_[1][1].map(q=>[q[1],q[4][0][0]])`.
- Không gửi thử vào Form của cô khi chưa được cho phép.

## 8. Làm ở chat claude.ai (gói Free, không có Claude Code / không push được)
Kho có **bộ tự động GitHub Actions** (`.github/workflows/dang-phieu.yml`): mỗi khi kho thay đổi, GitHub tự chạy `build_phieu.py`, lưu file dựng ra và đăng web (1–2 phút). Vì vậy ở chat chỉ cần tạo **`config.json`**:
1. Soạn phiếu như mục 1–4 (duyệt đáp án với cô như thường).
2. Viết `config.json` theo mục 3 – dùng **code execution** để tạo file, kiểm tra trước khi đưa cô:
   - `json.load` được; mọi `da` có trong `lc` (dạng `nhieu`: mọi phần tử của `da`); `dien`/`go`: số `{}` khớp số đáp án;
   - `web.khoi` ∈ khoi-3/khoi-5/khoi-9/doi-tuyen; `web.ngay` = hôm nay (YYYY-MM-DD); `lop` đúng tên trong danh sách lớp dưới đây;
   - ảnh nhúng base64 (≤ 900px) để file gọn; văn bản có dấu `<` `>` trong `text`/`lc` của `abcd`, `nhieu`, `noidot` phải viết `&lt;` `&gt;`.
   - Đặt `guiB` = link Apps Script mặc định (mục 1).
3. Đưa cô file `config.json` (tải về được) + **tên thư mục** đề xuất (chữ thường không dấu, nối bằng `-`), kèm hướng dẫn tải lên:
   - Mở https://github.com/ptn1095/PhieuTuongTac → **Add file → Create new file**.
   - Ô tên file gõ: `phieu/<tên-thư-mục>/config.json` (gõ dấu `/` thì GitHub tự tạo thư mục).
   - Mở file `config.json` bằng Notepad, chép toàn bộ, dán vào ô nội dung → **Commit changes**.
   - Khoảng 2 phút sau phiếu lên web. Xem tiến trình ở thẻ **Actions** (dấu ✓ xanh = xong; ✗ đỏ = có lỗi, bấm vào để đọc dòng "LỖI…", gửi lại cho Claude sửa).
   - Sửa phiếu: mở `phieu/<tên>/config.json` trên GitHub → biểu tượng bút chì → dán nội dung mới → Commit.
4. Nhắc cô: đăng nhập trang tổng hợp rồi bấm **Cô xem trước** để làm thử (ở chat không có bước tự làm thử bằng trình duyệt).
5. **Không** đăng phiếu lên artifact thay thế.

**Danh sách lớp năm học 2026-2027** (đồng bộ với `lop.json`): khoi-3: 3A1–3A6 · khoi-5: 5A1–5A6 · khoi-9: 9A1–9A10 · doi-tuyen: ĐT Tin - K2, ĐT Tin - K3.

## 9. Kiểm tra cuối trước khi bàn giao
- [ ] Mọi câu trong file đã có mặt, hoặc đã báo cô lý do bỏ/đổi dạng.
- [ ] Câu tự giải đã được cô duyệt, hoặc đã nêu rõ.
- [ ] `build_phieu.py` chạy không lỗi; `kiem_tra.js` báo "Tất cả đều ổn".
- [ ] Đã xem ảnh chụp: không tràn, không đè viền, đúng dấu.
- [ ] Đã push lên `main`; đã báo cô link và nhắc làm thử một lần.
