"""Sinh 6 phiếu Phần mềm bảng tính (Tin học 9). Chạy: python3 gen_bangtinh.py <thư mục repo>"""
import json, os, sys, html

R = sys.argv[1]
GUI = "https://script.google.com/macros/s/AKfycbypoQt_uqRBGqN9N-EfLDGdsMPrirkGAQLlFwRTlot7tpruG2jivFKT6U3pbA2LuQV00Q/exec"
LOP = [f"9A{i}" for i in range(1, 11)]
NGAY = "2026-11-11"
h = html.escape  # cho văn bản hiện thẳng (abcd, noidot, text)


def bang(cot, hang, rong, chon=None, to=None, namebox=None, hdr=True, w=None):
    """Vẽ trang tính SVG. cot: tên cột hiển thị ở dòng 1 (tiêu đề); hang: list các dòng dữ liệu.
    rong: độ rộng từng cột (px). chon: (c, r) ô đang chọn (0-index cột, số dòng Excel). to: (c1, r1, c2, r2) khối tô."""
    X0, RH, HH, NB = 34, 26, 22, (30 if namebox else 0)
    W = X0 + sum(rong) + 2
    so_dong = len(hang) + (1 if hdr else 0)
    H = NB + HH + so_dong * RH + 2
    xs = [X0]
    for r in rong: xs.append(xs[-1] + r)
    o = [f'<svg viewBox="0 0 {W} {H}" width="{w or W}" xmlns="http://www.w3.org/2000/svg" font-family="Arial" font-size="13" role="img" aria-label="Hình trang tính">',
         f'<rect width="{W}" height="{H}" fill="#fff"/>']
    if namebox:
        o.append(f'<rect x="1" y="2" width="64" height="22" fill="#fff" stroke="#888"/><text x="33" y="18" text-anchor="middle" font-weight="bold">{h(namebox)}</text>'
                 f'<rect x="70" y="2" width="{W-72}" height="22" fill="#fff" stroke="#bbb"/><text x="78" y="18" fill="#666" font-style="italic">fx</text>')
    y0 = NB
    o.append(f'<rect x="1" y="{y0}" width="{X0-1}" height="{HH}" fill="#E6E6E6" stroke="#bbb"/>')
    for i, r in enumerate(rong):
        L = chr(65 + i)
        sel = chon and chon[0] == i
        o.append(f'<rect x="{xs[i]}" y="{y0}" width="{r}" height="{HH}" fill="{"#D3F0E0" if sel else "#E6E6E6"}" stroke="#bbb"/>'
                 f'<text x="{xs[i]+r/2}" y="{y0+15}" text-anchor="middle" font-weight="bold" fill="#444">{L}</text>')
    dong = ([cot] if hdr else []) + hang
    for j, row in enumerate(dong):
        rn = j + 1
        y = y0 + HH + j * RH
        sel = chon and chon[1] == rn
        o.append(f'<rect x="1" y="{y}" width="{X0-1}" height="{RH}" fill="{"#D3F0E0" if sel else "#E6E6E6"}" stroke="#bbb"/>'
                 f'<text x="{X0/2}" y="{y+17}" text-anchor="middle" font-weight="bold" fill="#444">{rn}</text>')
        for i, r in enumerate(rong):
            v = row[i] if i < len(row) else ""
            fill = "#fff"
            if to and to[0] <= i <= to[2] and to[1] <= rn <= to[3]: fill = "#DDEEFB"
            if hdr and j == 0: fill = "#FFF3E6"
            o.append(f'<rect x="{xs[i]}" y="{y}" width="{r}" height="{RH}" fill="{fill}" stroke="#d6d6d6"/>')
            if v != "":
                so = isinstance(v, (int, float))
                tx, anc = (xs[i] + r - 6, "end") if so else (xs[i] + 6, "start")
                fw = ' font-weight="bold"' if hdr and j == 0 else ""
                o.append(f'<text x="{tx}" y="{y+17}" text-anchor="{anc}"{fw}>{h(str(v))}</text>')
    if chon:
        c, r = chon
        o.append(f'<rect x="{xs[c]}" y="{y0+HH+(r-1)*RH}" width="{rong[c]}" height="{RH}" fill="none" stroke="#217346" stroke-width="3"/>')
    o.append('</svg>')
    return "".join(o)


def khoi(svg):  # đặt hình bảng ngay dưới yêu cầu bài
    return f'<div style="margin-top:8px;font-weight:normal;overflow-x:auto">{svg}</div>'


def phieu(slug, ten_web, ma, tieu_de, bai):
    P = {"web": {"khoi": "khoi-9", "mon": "Tin học 9", "ten": ten_web, "ngay": NGAY, "chuaGiao": True},
         "ma": ma, "mon": "TIN HỌC 9 – PHẦN MỀM BẢNG TÍNH", "tieuDe": tieu_de, "lop": LOP,
         "tron": True, "xemDapAn": False, "guiB": GUI, "guiA": None, "bai": bai}
    d = os.path.join(R, "phieu", slug); os.makedirs(d, exist_ok=True)
    json.dump(P, open(os.path.join(d, "config.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("OK", slug)


def noidot(yc, cap):  # cap: [(trái, phải)]; cột phải xáo cố định để không trùng thứ tự
    import random
    phai = [p for _, p in cap]
    rd = random.Random(len(phai) * 7 + len(yc))
    xao = phai[:]
    while any(x == y for x, y in zip(xao, phai)):  # không mục nào nằm đúng hàng với ô trái của nó
        rd.shuffle(xao)
    return {"loai": "noidot", "yc": yc, "lc": [h(x) for x in xao], "cau": [{"text": h(t), "da": h(p)} for t, p in cap]}


def abcd(yc, cau, **kw):  # cau: [(câu hỏi html, [phương án], đáp án)]
    return {"loai": "abcd", "yc": yc, "cau": [{"text": q, "lc": [h(x) for x in lc], "da": h(da)} for q, lc, da in cau], **kw}


def ds(yc, cau):
    return {"loai": "ds", "yc": yc, "cau": [{"text": t, "da": d} for t, d in cau]}


def go(yc, cau, **kw):
    return {"loai": "go", "yc": yc, "cau": [{"text": t, "da": d} for t, d in cau], **kw}


def sapxep(yc, buoc):
    return {"loai": "sapxep", "yc": yc, "cau": [{"text": t} for t in buoc]}


# ====================== PHIẾU 1 ======================
p1_luoi = bang(["", "", "", "", ""], [["", "", "", "", ""] for _ in range(5)], [64, 64, 64, 64, 64],
               chon=(2, 4), to=(1, 2, 3, 5), namebox="C4", hdr=False)
phieu("tin9-bang-tinh-1-lam-quen", "Bảng tính 1: Làm quen với Excel", "Tin 9 - BT1 Làm quen Excel",
      "Phiếu bài tập 1 – Làm quen với bảng tính Excel", [
    noidot("Nối mỗi thuật ngữ với ý nghĩa đúng: bấm chấm tròn bên trái rồi bấm chấm tròn bên phải.", [
        ("Workbook (bảng tính)", "Tệp Excel, gồm nhiều trang tính"),
        ("Worksheet (trang tính)", "Một trang gồm các cột, dòng và ô"),
        ("Ô tính", "Giao của một cột và một dòng"),
        ("Cột", "Được đặt tên bằng chữ cái A, B, C…"),
        ("Dòng", "Được đánh số 1, 2, 3…"),
        ("Hộp tên (Name Box)", "Hiện địa chỉ của ô đang chọn")]),
    abcd("Quan sát hình trang tính (ô viền xanh đậm là ô đang chọn, các ô tô xanh nhạt là một khối ô) và chọn đáp án đúng." + khoi(p1_luoi), [
        ("Địa chỉ của ô đang chọn là:", ["C4", "4C", "C:4", "D3"], "C4"),
        ("Khối ô tô xanh nhạt được viết là:", ["B2:D5", "B2-D5", "B2;D5", "D5:B2"], "B2:D5"),
        ("Khối ô B2:D5 gồm bao nhiêu ô?", ["8", "9", "12", "20"], "12"),
        ("Ô nằm ngay bên phải ô C4 là:", ["C5", "D4", "B4", "C3"], "D4")], cot=4),
    ds("Địa chỉ tương đối, địa chỉ tuyệt đối: đúng hay sai?", [
        ("Ô C2 có công thức <b>=A2+B2</b>. Sao chép công thức xuống ô C3, công thức trở thành <b>=A3+B3</b>.", "Đ"),
        ("<b>$A$1</b> là địa chỉ tuyệt đối.", "Đ"),
        ("Địa chỉ tương đối không thay đổi khi sao chép công thức.", "S"),
        ("Khi đang sửa công thức, nhấn phím <b>F4</b> để chuyển nhanh địa chỉ sang địa chỉ tuyệt đối.", "Đ"),
        ("Ô D2 có công thức <b>=B2*$E$1</b>. Sao chép xuống ô D5, công thức trở thành <b>=B5*$E$4</b>.", "S")]),
    go("Gõ công thức nhận được sau khi sao chép (gõ cả dấu = hoặc không đều được).", [
        ("Ô C1 có công thức <b>=A1*B1</b>. Sao chép xuống ô C5, công thức là: {}", ["=A5*B5"]),
        ("Ô D2 có công thức <b>=B2*$F$1</b>. Sao chép xuống ô D6, công thức là: {}", ["=B6*$F$1"]),
        ("Ô E3 có công thức <b>=C3+D3</b>. Sao chép sang ô F3 (bên phải), công thức là: {}", ["=D3+E3"])], congThuc=True),
    sapxep("Kéo thả (hoặc bấm ▲▼) để sắp xếp các bước thay đổi độ rộng cột bằng chuột.", [
        "Đưa con trỏ chuột vào đường biên bên phải tên cột",
        "Khi con trỏ chuột có dạng mũi tên hai chiều ↔",
        "Nhấn giữ và kéo chuột sang trái hoặc sang phải",
        "Thả chuột khi cột đạt độ rộng mong muốn"]),
    abcd("Căn lề và kích thước ô: chọn đáp án đúng.", [
        ("Nháy đúp chuột vào đường biên bên phải tên cột thì:", ["Độ rộng cột tự vừa với dữ liệu dài nhất", "Cột bị xóa", "Cột bị ẩn đi", "Chèn thêm một cột mới"], "Độ rộng cột tự vừa với dữ liệu dài nhất"),
        ("Lệnh căn giữa dữ liệu theo chiều ngang trong ô là:", ["Align Left", "Center", "Align Right", "Middle Align"], "Center"),
        ("Mặc định, dữ liệu <b>số</b> trong ô được căn:", ["Lề trái", "Lề phải", "Giữa", "Đều hai bên"], "Lề phải"),
        ("Mặc định, dữ liệu <b>văn bản</b> trong ô được căn:", ["Lề trái", "Lề phải", "Giữa", "Đều hai bên"], "Lề trái"),
        ("Ô hiện <b>########</b> nghĩa là:", ["Cột quá hẹp, không hiện đủ số", "Công thức bị sai", "Ô bị khóa", "Dữ liệu đã bị xóa"], "Cột quá hẹp, không hiện đủ số"),
        ("Lệnh <b>Merge &amp; Center</b> dùng để:", ["Gộp các ô đã chọn thành một ô và căn giữa", "Căn giữa nhưng không gộp ô", "Xóa nội dung các ô", "Tách một ô thành nhiều ô"], "Gộp các ô đã chọn thành một ô và căn giữa")]),
    {"loai": "nhieu", "yc": "Chọn tất cả cách đúng.", "cau": [{"text": "Những cách nào thay đổi được độ rộng cột?",
        "lc": ["Kéo thả đường biên bên phải tên cột", "Nháy đúp đường biên bên phải tên cột", "Home → Format → Column Width", "Nhấn phím F4"],
        "da": ["Kéo thả đường biên bên phải tên cột", "Nháy đúp đường biên bên phải tên cột", "Home → Format → Column Width"], "cot": 2}]},
])

# ====================== PHIẾU 2 ======================
TU2 = ["Whole number", "Decimal", "between", "not between", "1", "100", "dấu phẩy", "dấu chấm"]
phieu("tin9-bang-tinh-2-xac-thuc-du-lieu", "Bảng tính 2: Xác thực dữ liệu (luyện thêm)", "Tin 9 - BT2 Xác thực dữ liệu",
      "Phiếu bài tập 2 – Công cụ xác thực dữ liệu (Data Validation)", [
    noidot("Nối mỗi kiểu dữ liệu ở mục <b>Allow</b> với ý nghĩa của nó.", [
        ("Any value", "Bất kì giá trị nào"), ("Whole number", "Chỉ nhận số nguyên"), ("Decimal", "Nhận số thập phân"),
        ("List", "Chọn từ danh sách thả xuống"), ("Date", "Chỉ nhận ngày tháng"), ("Time", "Chỉ nhận thời gian"),
        ("Text length", "Giới hạn số kí tự"), ("Custom", "Dùng công thức tùy chỉnh")]),
    abcd("Bảng quản lí thư viện: chọn kiểu <b>Allow</b> phù hợp cho mỗi cột.", [
        ("Cột <b>Điểm đánh giá</b> từ 0 đến 10, có điểm lẻ như 8,5", ["Whole number", "Decimal", "Text length", "List"], "Decimal"),
        ("Cột <b>Số sách mượn</b>: số nguyên từ 0 đến 5", ["Decimal", "Whole number", "Date", "Any value"], "Whole number"),
        ("Cột <b>Lớp</b>: chọn từ danh sách 9A1 … 9A10", ["List", "Text length", "Custom", "Any value"], "List"),
        ("Cột <b>Ngày mượn sách</b>", ["Time", "Date", "Decimal", "Text length"], "Date"),
        ("Cột <b>Mã thẻ thư viện</b>: đúng 8 kí tự", ["Whole number", "List", "Text length", "Decimal"], "Text length"),
        ("Cột <b>Giờ vào thư viện</b>", ["Date", "Time", "Whole number", "List"], "Time")], cot=4),
    {"loai": "dien", "yc": "Chọn từ thích hợp điền vào chỗ trống.", "bank": TU2, "lc": TU2, "cau": [
        {"text": "1. Chỉ cho nhập số nguyên từ 1 đến 100: ô Allow chọn {} , ô Data chọn {} , ô Minimum nhập {} , ô Maximum nhập {} .",
         "da": ["Whole number", "between", "1", "100"]},
        {"text": "2. Ở ô Source của kiểu List, các giá trị được ngăn cách nhau bởi {} .", "da": ["dấu phẩy"]}]},
    noidot("Nối mỗi thẻ / kiểu cảnh báo trong hộp thoại Data Validation với tác dụng của nó.", [
        ("Settings", "Chọn kiểu và điều kiện của dữ liệu"), ("Input Message", "Hiện lời nhắc khi chọn ô"),
        ("Error Alert", "Đặt thông báo khi nhập sai"), ("Stop", "Không cho nhập dữ liệu sai"),
        ("Warning", "Cảnh báo, hỏi có muốn tiếp tục nhập không"), ("Information", "Chỉ thông báo, vẫn cho nhập")]),
    sapxep("Sắp xếp các bước tạo danh sách chọn lớp <b>9A1, 9A2, 9A3</b> cho vùng ô B2:B40.", [
        "Chọn vùng ô B2:B40", "Chọn dải lệnh Data", "Trong nhóm Data Tools, chọn Data Validation",
        "Ở thẻ Settings, ô Allow chọn List", "Ở ô Source, nhập: 9A1,9A2,9A3", "Bấm OK"]),
    ds("Đúng hay sai?", [
        ("Lệnh Data Validation nằm trong nhóm <b>Data Tools</b> của dải lệnh <b>Data</b>.", "Đ"),
        ("Dữ liệu sai đã nhập <b>trước khi</b> đặt xác thực sẽ tự động bị xóa.", "S"),
        ("Lệnh <b>Circle Invalid Data</b> khoanh tròn đỏ các ô có dữ liệu không hợp lệ.", "Đ"),
        ("Kiểu <b>Text length</b> dùng để giới hạn số kí tự nhập vào ô.", "Đ"),
        ("Kiểu cảnh báo <b>Stop</b> vẫn cho nhập dữ liệu sai nếu bấm Yes.", "S"),
        ("Muốn bỏ xác thực dữ liệu, chọn ô rồi bấm <b>Clear All</b> trong hộp thoại Data Validation.", "Đ")]),
])

# ====================== PHIẾU 3 – COUNTIF ======================
D3 = [["An", "Nam", 8], ["Bình", "Nam", 6], ["Chi", "Nữ", 9], ["Dũng", "Nam", 4], ["Hà", "Nữ", 7], ["Long", "Nam", 5], ["Minh", "Nam", 10], ["Ngọc", "Nữ", 7]]
B3 = khoi(bang(["Họ tên", "Giới tính", "Điểm Tin"], D3, [110, 100, 100], w=380))
TU3 = ["B2:B9", "C2:C9", '"Nam"', "Nam", '">6"', '"<6"']
phieu("tin9-bang-tinh-3-countif", "Bảng tính 3: Hàm COUNTIF", "Tin 9 - BT3 COUNTIF", "Phiếu bài tập 3 – Hàm COUNTIF", [
    abcd("Kiến thức về hàm COUNTIF: chọn đáp án đúng.", [
        ("Cú pháp đúng của hàm COUNTIF là:", ["=COUNTIF(range, criteria)", "=COUNTIF(criteria, range)", "=COUNT(range, criteria)", "=COUNTIF(range)"], "=COUNTIF(range, criteria)"),
        ("Hàm COUNTIF dùng để:", ["Đếm số ô trong vùng thỏa mãn điều kiện", "Tính tổng các ô thỏa mãn điều kiện", "Đếm tất cả các ô có dữ liệu", "Tìm giá trị lớn nhất"], "Đếm số ô trong vùng thỏa mãn điều kiện"),
        ("Điều kiện là phép so sánh hoặc văn bản phải đặt trong:", ['Dấu ngoặc kép " "', "Dấu ngoặc đơn ( )", "Dấu ngoặc vuông [ ]", "Không cần dấu gì"], 'Dấu ngoặc kép " "'),
        ('Công thức <b>=COUNTIF(C2:C9,"&gt;=8")</b> đếm:', ["Số học sinh có điểm từ 8 trở lên", "Số học sinh có điểm dưới 8", "Tổng điểm từ 8 trở lên", "Số học sinh được đúng 8 điểm"], "Số học sinh có điểm từ 8 trở lên")], cot=1),
    go("Quan sát bảng điểm và gõ kết quả của mỗi công thức." + B3, [
        ('<b>=COUNTIF(B2:B9,"Nam")</b> cho kết quả: {}', "5"), ('<b>=COUNTIF(B2:B9,"Nữ")</b> cho kết quả: {}', "3"),
        ('<b>=COUNTIF(C2:C9,"&gt;=8")</b> cho kết quả: {}', "3"), ('<b>=COUNTIF(C2:C9,"&lt;5")</b> cho kết quả: {}', "1"),
        ("<b>=COUNTIF(C2:C9,7)</b> cho kết quả: {}", "2"), ('<b>=COUNTIF(C2:C9,"&lt;&gt;7")</b> cho kết quả: {}', "6")]),
    abcd("Chọn công thức đúng (dựa vào bảng điểm ở Bài 2).", [
        ("Đếm số học sinh <b>nữ</b>:", ['=COUNTIF(B2:B9,"Nữ")', '=COUNTIF("Nữ",B2:B9)', '=COUNT(B2:B9,"Nữ")', "=COUNTIF(B2:B9,Nữ)"], '=COUNTIF(B2:B9,"Nữ")'),
        ("Đếm số học sinh có điểm <b>dưới 6</b>:", ['=COUNTIF(C2:C9,"<6")', '=COUNTIF(C2:C9,"<=6")', '=COUNTIF(B2:B9,"<6")', '=SUMIF(C2:C9,"<6")'], '=COUNTIF(C2:C9,"<6")'),
        ("Đếm số học sinh có điểm <b>từ 5 trở lên</b>:", ['=COUNTIF(C2:C9,">5")', '=COUNTIF(C2:C9,">=5")', '=COUNTIF(C2:C9,"=>5")', "=COUNTIF(C2:C9,5)"], '=COUNTIF(C2:C9,">=5")')], cot=2),
    ds("Đúng hay sai?", [
        ("Hàm COUNTIF có 2 đối số.", "Đ"),
        ('<b>=COUNTIF(B2:B9,"nam")</b> cho kết quả khác <b>=COUNTIF(B2:B9,"Nam")</b>.', "S"),
        ("Hàm COUNT đếm các ô chứa số, còn hàm COUNTIF đếm các ô thỏa mãn điều kiện.", "Đ"),
        ('Với bảng điểm ở Bài 2, <b>=COUNTIF(C2:C9,"&gt;=8")</b> và <b>=COUNTIF(C2:C9,"&gt;8")</b> cho cùng kết quả.', "S"),
        ("Kết quả của hàm COUNTIF luôn là một số đếm.", "Đ")]),
    {"loai": "dien", "yc": "Chọn từ thích hợp để hoàn thành công thức (dựa vào bảng điểm ở Bài 2).", "bank": TU3, "lc": TU3, "cau": [
        {"text": "1. Đếm số học sinh nam: =COUNTIF( {} , {} )", "da": ["B2:B9", '"Nam"']},
        {"text": "2. Đếm số học sinh có điểm lớn hơn 6: =COUNTIF( {} , {} )", "da": ["C2:C9", '">6"']}]},
])

# ====================== PHIẾU 4 – SUMIF ======================
D4 = [["Mua gạo", "Ăn uống", 150], ["Mua vở", "Học tập", 80], ["Đổ xăng", "Đi lại", 100], ["Mua rau", "Ăn uống", 45],
      ["Mua sách", "Học tập", 120], ["Vé xe buýt", "Đi lại", 30], ["Mua thịt", "Ăn uống", 200], ["Mua bút", "Học tập", 25]]
B4 = khoi(bang(["Khoản chi", "Loại", "Số tiền"], D4, [120, 100, 90], w=380)) + '<div style="font-weight:normal;font-size:14px">(Số tiền tính bằng nghìn đồng)</div>'
phieu("tin9-bang-tinh-4-sumif", "Bảng tính 4: Hàm SUMIF", "Tin 9 - BT4 SUMIF", "Phiếu bài tập 4 – Hàm SUMIF", [
    noidot('Bảng chi tiêu gia đình như hình. Nối mỗi phần của công thức <b>=SUMIF(B2:B9,"Ăn uống",C2:C9)</b> với ý nghĩa của nó.' + B4, [
        ("B2:B9", "Vùng chứa điều kiện (range)"), ('"Ăn uống"', "Điều kiện (criteria)"),
        ("C2:C9", "Vùng cần tính tổng (sum_range)"), ("SUMIF", "Tính tổng các ô thỏa mãn điều kiện")]),
    go("Gõ kết quả của mỗi công thức (dựa vào bảng chi tiêu ở Bài 1).", [
        ('<b>=SUMIF(B2:B9,"Ăn uống",C2:C9)</b> = {}', "395"), ('<b>=SUMIF(B2:B9,"Học tập",C2:C9)</b> = {}', "225"),
        ('<b>=SUMIF(B2:B9,"Đi lại",C2:C9)</b> = {}', "130"), ('<b>=SUMIF(C2:C9,"&gt;=100")</b> = {}', "570"),
        ('<b>=SUMIF(C2:C9,"&lt;50")</b> = {}', "100")]),
    abcd("Chọn đáp án đúng.", [
        ("Công thức tính tổng tiền chi cho <b>Học tập</b>:", ['=SUMIF(B2:B9,"Học tập",C2:C9)', '=SUMIF(C2:C9,"Học tập",B2:B9)', '=SUM(B2:B9,"Học tập")', '=COUNTIF(B2:B9,"Học tập")'], '=SUMIF(B2:B9,"Học tập",C2:C9)'),
        ("Công thức tính tổng các khoản chi <b>lớn hơn 100</b>:", ['=SUMIF(C2:C9,">100")', '=COUNTIF(C2:C9,">100")', '=SUMIF(B2:B9,">100")', '=SUM(C2:C9,">100")'], '=SUMIF(C2:C9,">100")'),
        ("Được bỏ đối số <b>sum_range</b> khi:", ["Vùng điều kiện cũng chính là vùng cần tính tổng", "Điều kiện là văn bản", "Vùng có nhiều hơn 10 ô", "Không bao giờ được bỏ"], "Vùng điều kiện cũng chính là vùng cần tính tổng")], cot=1),
    ds("Đúng hay sai?", [
        ("Nếu bỏ đối số sum_range, hàm SUMIF tính tổng chính các ô trong range thỏa mãn điều kiện.", "Đ"),
        ('<b>=COUNTIF(B2:B9,"Ăn uống")</b> cho kết quả 395.', "S"),
        ("Vùng range và vùng sum_range nên có cùng số ô.", "Đ"),
        ("Cộng ba hàm SUMIF của Ăn uống, Học tập, Đi lại thì bằng <b>=SUM(C2:C9)</b>.", "Đ"),
        ('<b>=SUMIF(B2:B9,"ăn uống",C2:C9)</b> cho kết quả khác 395.', "S")]),
    sapxep("Sắp xếp các bước tính tổng tiền <b>Ăn uống</b> vào ô F2.", [
        "Chọn ô F2", "Gõ =SUMIF(", "Chọn vùng B2:B9 rồi gõ dấu phẩy", 'Gõ "Ăn uống" rồi gõ dấu phẩy', "Chọn vùng C2:C9, gõ dấu ) rồi nhấn Enter"]),
])

# ====================== PHIẾU 5 – IF ======================
D5 = [["An", 8], ["Bình", 4], ["Chi", 7], ["Dũng", 5], ["Hà", 9], ["Khoa", 3]]
B5 = khoi(bang(["Họ tên", "Điểm TB"], D5, [120, 90], w=290))
TU5 = ["B2>=5", "B2>5", "B2<5", '"Đạt"', '"Chưa đạt"', '"Thưởng"', '""']
phieu("tin9-bang-tinh-5-if", "Bảng tính 5: Hàm IF", "Tin 9 - BT5 IF", "Phiếu bài tập 5 – Hàm IF", [
    abcd("Kiến thức về hàm IF: chọn đáp án đúng.", [
        ("Cú pháp của hàm IF là:", ["=IF(logical_test, value_if_true, value_if_false)", "=IF(value_if_true, logical_test, value_if_false)", "=IF(logical_test, value_if_false, value_if_true)", "=IF(range, criteria)"], "=IF(logical_test, value_if_true, value_if_false)"),
        ("Hàm IF trả về:", ["value_if_true khi điều kiện đúng, value_if_false khi điều kiện sai", "Luôn trả về value_if_true", "Số ô thỏa mãn điều kiện", "Tổng các ô thỏa mãn điều kiện"], "value_if_true khi điều kiện đúng, value_if_false khi điều kiện sai"),
        ("Kết quả dạng văn bản trong hàm IF phải đặt trong:", ['Dấu ngoặc kép " "', "Dấu ngoặc đơn ( )", "Dấu nháy đơn ' '", "Không cần dấu gì"], 'Dấu ngoặc kép " "'),
        ("Phép so sánh <b>khác</b> trong Excel được viết là:", ["<>", "!=", "><", "≠"], "<>")], cot=1),
    {"loai": "traloi", "yc": 'Ô C2 có công thức <b>=IF(B2&gt;=5,"Đạt","Chưa đạt")</b>, được sao chép xuống C7. Chọn kết quả ở mỗi ô.' + B5,
     "lc": ["Đạt", "Chưa đạt"], "cau": [
        {"text": "C2 (An, 8 điểm): {}", "da": "Đạt"}, {"text": "C3 (Bình, 4 điểm): {}", "da": "Chưa đạt"},
        {"text": "C4 (Chi, 7 điểm): {}", "da": "Đạt"}, {"text": "C5 (Dũng, 5 điểm): {}", "da": "Đạt"},
        {"text": "C6 (Hà, 9 điểm): {}", "da": "Đạt"}, {"text": "C7 (Khoa, 3 điểm): {}", "da": "Chưa đạt"}]},
    go("Gõ kết quả của mỗi công thức (dựa vào bảng ở Bài 2).", [
        ("<b>=IF(10&gt;5,1,0)</b> cho kết quả: {}", "1"), ("<b>=IF(B3&gt;=5,B3*2,0)</b> cho kết quả: {}", "0"),
        ('<b>=IF(B2&gt;8,"Giỏi","Khá")</b> cho kết quả: {}', "Khá"), ("<b>=IF(B6&gt;=9,100,50)</b> cho kết quả: {}", "100")]),
    {"loai": "dien", "yc": "Chọn từ thích hợp để hoàn thành công thức.", "bank": TU5, "lc": TU5, "cau": [
        {"text": '1. Ghi "Đạt" nếu điểm ở B2 từ 5 trở lên, ngược lại ghi "Chưa đạt": =IF( {} , {} , {} )', "da": ["B2>=5", '"Đạt"', '"Chưa đạt"']},
        {"text": '2. Ghi "Thưởng" nếu điểm ở B2 lớn hơn 8, ngược lại để trống: =IF(B2&gt;8, {} , {} )', "da": ['"Thưởng"', '""']}]},
    ds("Đúng hay sai?", [
        ("Điều kiện của hàm IF là một phép so sánh cho kết quả đúng hoặc sai.", "Đ"),
        ('Với B2 = 5, công thức <b>=IF(B2&gt;=5,"Đạt","Chưa đạt")</b> cho kết quả "Chưa đạt".', "S"),
        ("Có thể dùng hàm IF lồng nhau để xếp loại nhiều mức.", "Đ"),
        ("Kết quả của hàm IF chỉ có thể là văn bản.", "S"),
        ('<b>=IF(B2&gt;=5,"Đạt","Chưa đạt")</b> và <b>=IF(B2&lt;5,"Chưa đạt","Đạt")</b> luôn cho cùng kết quả.', "Đ")]),
    abcd('IF lồng nhau: ô D2 có công thức <b>=IF(B2&gt;=8,"Giỏi",IF(B2&gt;=7,"Khá","Trung bình"))</b>, sao chép xuống D7. Chọn kết quả (dựa vào bảng ở Bài 2).', [
        ("Kết quả của An (8 điểm):", ["Giỏi", "Khá", "Trung bình"], "Giỏi"),
        ("Kết quả của Chi (7 điểm):", ["Giỏi", "Khá", "Trung bình"], "Khá"),
        ("Kết quả của Dũng (5 điểm):", ["Giỏi", "Khá", "Trung bình"], "Trung bình")], cot=4),
])

# ====================== PHIẾU 6 – ÔN TẬP ======================
D6 = [["Bút bi", "Văn phòng phẩm", 20, 5, 100], ["Vở", "Văn phòng phẩm", 15, 12, 180], ["Sữa", "Đồ uống", 10, 8, 80],
      ["Nước cam", "Đồ uống", 12, 15, 180], ["Bánh mì", "Đồ ăn", 9, 10, 90], ["Thước", "Văn phòng phẩm", 6, 6, 36]]
B6 = khoi(bang(["Mặt hàng", "Loại", "Số lượng", "Đơn giá", "Thành tiền"], D6, [90, 130, 80, 70, 90], w=520)) + \
     '<div style="font-weight:normal;font-size:14px">(Đơn giá và Thành tiền tính bằng nghìn đồng)</div>'
TU6 = ["*", "/", "x", ":", "=", "^", "+"]
phieu("tin9-bang-tinh-6-on-tap", "Bảng tính 6: Ôn tập tổng hợp", "Tin 9 - BT6 Ôn tập tổng hợp",
      "Phiếu bài tập 6 – Ôn tập: hàm, công thức và biểu đồ", [
    noidot("Nối mỗi hàm với công dụng của nó.", [
        ("SUM", "Tính tổng"), ("AVERAGE", "Tính trung bình cộng"), ("COUNT", "Đếm các ô chứa số"),
        ("COUNTIF", "Đếm các ô thỏa mãn điều kiện"), ("SUMIF", "Tính tổng các ô thỏa mãn điều kiện"), ("IF", "Trả về giá trị theo điều kiện đúng / sai")]),
    go("Bảng bán hàng như hình. Gõ công thức hoặc kết quả." + B6, [
        ("Công thức ở ô E2 (Thành tiền = Số lượng × Đơn giá): {}", ["=C2*D2", "=D2*C2"]),
        ("<b>=SUM(C2:C7)</b> = {}", "72"), ("<b>=AVERAGE(C2:C7)</b> = {}", "12"),
        ("<b>=COUNT(D2:D7)</b> = {}", "6"), ("<b>=SUM(E2:E7)</b> = {}", "666")], congThuc=True),
    abcd("Chọn kết quả đúng của mỗi công thức (dựa vào bảng ở Bài 2).", [
        ('<b>=COUNTIF(B2:B7,"Văn phòng phẩm")</b>', ["2", "3", "4", "6"], "3"),
        ('<b>=SUMIF(B2:B7,"Đồ uống",E2:E7)</b>', ["80", "180", "260", "22"], "260"),
        ('<b>=IF(E7&gt;=100,"Cao","Thấp")</b>', ["Cao", "Thấp", "36", "100"], "Thấp"),
        ("<b>=AVERAGE(E2:E7)</b>", ["111", "666", "12", "100"], "111"),
        ("<b>=(C2+C3)*2</b>", ["35", "50", "70", "40"], "70"),
        ("<b>=D4/2</b>", ["4", "16", "5", "40"], "4")], cot=4),
    {"loai": "dien", "yc": "Chọn kí hiệu thích hợp điền vào chỗ trống.", "bank": TU6, "lc": TU6, "cau": [
        {"text": "1. Mọi công thức trong Excel bắt đầu bằng dấu {} .", "da": ["="]},
        {"text": "2. Phép nhân dùng kí hiệu {} , phép chia dùng kí hiệu {} .", "da": ["*", "/"]},
        {"text": "3. Phép lũy thừa (ví dụ 2 mũ 3) dùng kí hiệu {} .", "da": ["^"]}]},
    sapxep("Sắp xếp các bước chèn biểu đồ cột thể hiện <b>Thành tiền</b> theo <b>Mặt hàng</b>.", [
        "Chọn vùng A1:A7, giữ phím Ctrl rồi chọn thêm vùng E1:E7", "Chọn dải lệnh Insert",
        "Trong nhóm Charts, chọn biểu đồ cột (Column)", "Chọn một kiểu biểu đồ cột cụ thể", "Sửa tiêu đề biểu đồ (Chart Title)"]),
    abcd("Chọn dạng biểu đồ phù hợp.", [
        ("So sánh thành tiền giữa các mặt hàng:", ["Biểu đồ cột", "Biểu đồ tròn", "Biểu đồ đường"], "Biểu đồ cột"),
        ("Thể hiện tỉ lệ phần trăm của từng loại hàng trên tổng doanh thu:", ["Biểu đồ cột", "Biểu đồ tròn", "Biểu đồ đường"], "Biểu đồ tròn"),
        ("Thể hiện doanh thu thay đổi qua 12 tháng:", ["Biểu đồ cột", "Biểu đồ tròn", "Biểu đồ đường"], "Biểu đồ đường"),
        ("Lệnh chèn biểu đồ nằm ở dải lệnh:", ["Home", "Insert", "Data", "Formulas"], "Insert")], cot=4),
])
