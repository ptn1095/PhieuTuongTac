# Sinh config.json cho 11 phiếu Tin học 5 – Kết nối tri thức (Bài 4–7, 10–16).
# Chạy: python3 tools/nguon/gen_tin5.py   (từ thư mục gốc của kho)
import json, os, sys
sys.path.insert(0, os.path.dirname(__file__))
from scratch_svg_tin5 import *

GOC = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
GUI_B = 'https://script.google.com/macros/s/AKfycbypoQt_uqRBGqN9N-EfLDGdsMPrirkGAQLlFwRTlot7tpruG2jivFKT6U3pbA2LuQV00Q/exec'
LOP = ['5A1', '5A2', '5A3', '5A4', '5A5', '5A6']
NGAY = '2026-11-11'


def phieu(slug, so, ten, ma_ngan, bai):
    cfg = {
        'web': {'khoi': 'khoi-5', 'mon': 'Tin học 5', 'ten': f'Bài {so}: {ten}', 'ngay': NGAY, 'chuaGiao': True},
        'ma': f'Tin 5 - Bài {so} {ma_ngan}',
        'mon': 'TIN HỌC 5 – KẾT NỐI TRI THỨC',
        'tieuDe': f'Phiếu bài tập – Bài {so}: {ten}',
        'lop': LOP, 'tron': True, 'guiB': GUI_B, 'guiA': None, 'bai': bai,
    }
    d = os.path.join(GOC, 'phieu', slug)
    os.makedirs(d, exist_ok=True)
    with open(os.path.join(d, 'config.json'), 'w', encoding='utf-8') as f:
        json.dump(cfg, f, ensure_ascii=False, indent=1)
    print('ghi', slug)


def ds(*cap):
    return [{'text': t, 'da': d} for t, d in cap]


def nut(t, style=''):
    return (f'<span style="display:inline-block;min-width:22px;padding:1px 6px;border:1px solid #999;border-radius:4px;'
            f'background:#f4f4f4;text-align:center;font-family:Times New Roman,serif;font-size:17px;{style}">{t}</span>')


def phim(t):
    return f'<kbd style="display:inline-block;padding:1px 7px;border:1px solid #aaa;border-bottom-width:3px;border-radius:5px;background:#fafafa;font-family:Arial">{t}</kbd>'


# ============ BÀI 4. CÂY THƯ MỤC ============
def cay_thu_muc():
    nut_ = [  # (cấp, tên)
        (0, 'An'), (1, 'HOC_TAP'), (2, 'Toan'), (2, 'Tieng_Viet'), (2, 'Tin_hoc'),
        (1, 'GIAI_TRI'), (2, 'Am_nhac'), (2, 'Tranh_ve')]
    o, y, cha = [], 18, {}
    for i, (c, t) in enumerate(nut_):
        x = 12 + c * 34
        cha[c] = (x, y)
        if c > 0:
            px, py = cha[c - 1]
            o.append(f'<path d="M{px+9},{py+8} L{px+9},{y} L{x},{y}" fill="none" stroke="#888" stroke-width="1.2"/>')
        o.append(f'<path d="M{x},{y-7} l7,0 l2,3 l11,0 l0,12 l-20,0 z" fill="#F8C94A" stroke="#C9971C"/>')
        o.append(f'<text x="{x+26}" y="{y+5}" font-family="Arial" font-size="14" fill="#222">{t}</text>')
        y += 28
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="190" height="{y-6}" viewBox="0 0 190 {y-6}">' + ''.join(o) + '</svg>'


def bai4():
    hinh = '<div style="text-align:center"><b>Cây thư mục của bạn An</b><br>' + cay_thu_muc() + '</div>'
    bai = [
        {'loai': 'abcd', 'yc': 'Quan sát cây thư mục của bạn An và chọn đáp án đúng.', 'hinh': hinh, 'khungHinh': True, 'cot': 2, 'cau': [
            {'text': 'Thư mục <b>Toan</b> nằm trong thư mục nào?', 'lc': ['HOC_TAP', 'GIAI_TRI', 'Tin_hoc', 'Tranh_ve'], 'da': 'HOC_TAP'},
            {'text': 'Thư mục <b>GIAI_TRI</b> có mấy thư mục con?', 'lc': ['1', '2', '3', '5'], 'da': '2', 'cot': 4},
            {'text': 'Thư mục <b>An</b> chứa trực tiếp những thư mục nào?', 'lc': ['HOC_TAP và GIAI_TRI', 'Toan và Am_nhac', 'Tin_hoc và Tranh_ve', 'Chỉ có HOC_TAP'], 'da': 'HOC_TAP và GIAI_TRI'},
            {'text': 'Đường dẫn đúng tới thư mục <b>Tranh_ve</b> là:', 'cot': 1, 'lc': ['An\\GIAI_TRI\\Tranh_ve', 'An\\HOC_TAP\\Tranh_ve', 'An\\Tranh_ve\\GIAI_TRI', 'GIAI_TRI\\An\\Tranh_ve'], 'da': 'An\\GIAI_TRI\\Tranh_ve'},
        ]},
        {'loai': 'noidot', 'yc': 'Bạn An muốn lưu các tệp dưới đây cho gọn gàng. Nối mỗi <b>tệp</b> với <b>thư mục</b> phù hợp nhất để lưu.',
         'lc': ['Tieng_Viet', 'Toan', 'Tin_hoc', 'Am_nhac', 'Tranh_ve'], 'cau': [
            {'text': '📄 BaiVan_TaCanhBien.docx', 'da': 'Tieng_Viet'},
            {'text': '📊 OnTap_PhanSo.pptx', 'da': 'Toan'},
            {'text': '🐱 MeoDiDao.sb3 (chương trình Scratch)', 'da': 'Tin_hoc'},
            {'text': '🎵 BaiHat_QueHuong.mp3', 'da': 'Am_nhac'},
            {'text': '🖼️ ConMeoCuaEm.png', 'da': 'Tranh_ve'},
        ]},
        {'loai': 'ds', 'yc': 'Đúng hay sai?', 'cau': ds(
            ('Cây thư mục giúp em tìm kiếm tệp nhanh và dễ dàng hơn.', 'Đ'),
            ('Một thư mục có thể chứa cả tệp và các thư mục con.', 'Đ'),
            ('Để nhanh, em nên lưu tất cả các tệp vào chung một thư mục.', 'S'),
            ('Nên đặt tên thư mục, tên tệp ngắn gọn, gợi nhớ đến nội dung bên trong.', 'Đ'),
            ('Có thể phân loại tệp theo nội dung, theo thời gian hoặc theo người sở hữu để tạo cây thư mục hợp lí.', 'Đ'),
            ('Trong cùng một thư mục, hai thư mục con được phép đặt trùng tên.', 'S'),
        )},
        {'loai': 'sapxep', 'yc': 'Sắp xếp các bước <b>tạo thư mục mới</b> theo đúng thứ tự (kéo ☰ hoặc bấm ▲▼).', 'cau': [
            {'text': 'Mở thư mục mà em muốn tạo thư mục con bên trong.'},
            {'text': 'Nháy nút phải chuột vào vùng trống trong cửa sổ.'},
            {'text': 'Chọn <b>New</b> → <b>Folder</b>.'},
            {'text': 'Gõ tên cho thư mục mới rồi nhấn phím <b>Enter</b>.'},
        ]},
        {'loai': 'abcd', 'yc': 'Chọn đáp án đúng.', 'cot': 2, 'cau': [
            {'text': 'Lệnh dùng để tạo thư mục mới trong máy tính là:', 'lc': ['New folder', 'New file', 'Delete', 'Rename'], 'da': 'New folder', 'cot': 4},
            {'text': 'Tên thư mục nào sau đây <b>gợi nhớ</b> nội dung tốt nhất để lưu ảnh chuyến tham quan Hạ Long của lớp?', 'lc': ['Anh_ThamQuan_HaLong', 'Thu muc moi', 'ABC123', 'New folder (2)'], 'da': 'Anh_ThamQuan_HaLong'},
        ]},
    ]
    phieu('tin5-bai4-cay-thu-muc', 4, 'Cây thư mục', 'Cây thư mục', bai)


# ============ BÀI 5. BẢN QUYỀN NỘI DUNG THÔNG TIN ============
def bai5():
    bai = [
        {'loai': 'ds', 'yc': 'Đúng hay sai?', 'cau': ds(
            ('Tác giả là người sở hữu nội dung thông tin do mình tạo ra.', 'Đ'),
            ('Tác giả có quyền cho phép hoặc không cho phép người khác sử dụng nội dung của mình.', 'Đ'),
            ('Nội dung thông tin chỉ có thể ở dạng chữ (văn bản).', 'S'),
            ('Một nội dung thông tin bắt buộc phải có đủ cả chữ, hình ảnh và âm thanh.', 'S'),
            ('Bài viết, bức ảnh, bài hát, đoạn video… đều là những nội dung thông tin có bản quyền.', 'Đ'),
            ('Thông tin đăng trên Internet thì ai cũng được tự do lấy dùng mà không cần ghi nguồn.', 'S'),
        )},
        {'loai': 'noidot', 'yc': 'Nối mỗi <b>tình huống</b> với <b>cách ghi nguồn</b> phù hợp.',
         'lc': ['Ảnh: Nguyễn Văn A', 'Thơ: Xuân Quỳnh', 'Phỏng theo truyện Cây khế', 'Nguồn: địa chỉ trang web'], 'cau': [
            {'text': 'Em dùng bức ảnh do chú Nguyễn Văn A chụp trên báo tường của lớp.', 'da': 'Ảnh: Nguyễn Văn A'},
            {'text': 'Em chép một bài thơ của nhà thơ Xuân Quỳnh lên báo tường.', 'da': 'Thơ: Xuân Quỳnh'},
            {'text': 'Em kể lại câu chuyện Cây khế theo lời văn của mình.', 'da': 'Phỏng theo truyện Cây khế'},
            {'text': 'Em lấy thông tin về loài voi từ một trang web.', 'da': 'Nguồn: địa chỉ trang web'},
        ]},
        {'loai': 'nhieu', 'yc': 'Chọn tất cả các việc làm <b>tôn trọng bản quyền</b>.', 'cau': [
            {'text': 'Việc làm nào thể hiện em tôn trọng bản quyền nội dung thông tin?', 'cot': 1,
             'lc': ['Ghi tên tác giả bên dưới bức ảnh em sử dụng.',
                    'Xin phép bạn trước khi dùng bức tranh bạn vẽ cho bài thuyết trình của nhóm.',
                    'Ghi rõ nguồn trang web khi dùng thông tin tìm được trên Internet.',
                    'Chép bài văn của bạn rồi ghi tên mình vào để nộp.',
                    'Cắt bỏ tên tác giả trên bức ảnh rồi đăng lên mạng.'],
             'da': ['Ghi tên tác giả bên dưới bức ảnh em sử dụng.',
                    'Xin phép bạn trước khi dùng bức tranh bạn vẽ cho bài thuyết trình của nhóm.',
                    'Ghi rõ nguồn trang web khi dùng thông tin tìm được trên Internet.']},
        ]},
        {'loai': 'abcd', 'yc': 'Chọn đáp án đúng.', 'cot': 1, 'cau': [
            {'text': 'Vì sao khi đăng bài trên báo tường cần ghi tên tác giả?', 'lc': [
                'Để cho biết ai là người sở hữu nội dung đó.', 'Để bài báo dài hơn.', 'Để trang trí cho đẹp.', 'Vì cô giáo thích tên đẹp.'], 'da': 'Để cho biết ai là người sở hữu nội dung đó.'},
            {'text': 'Nội dung thông tin có thể ở những dạng nào?', 'lc': [
                'Chữ, hình ảnh, âm thanh hoặc đa phương tiện.', 'Chỉ ở dạng chữ.', 'Chỉ ở dạng hình ảnh.', 'Chỉ ở dạng âm thanh.'], 'da': 'Chữ, hình ảnh, âm thanh hoặc đa phương tiện.'},
            {'text': 'Bạn Minh muốn dùng một bài hát của nhạc sĩ cho video của lớp. Bạn Minh nên làm gì?', 'lc': [
                'Ghi rõ tên bài hát, tên tác giả; xin phép nếu cần.', 'Dùng luôn, không cần ghi gì.', 'Nói đó là bài hát do Minh sáng tác.', 'Sửa vài câu rồi ghi tên Minh.'], 'da': 'Ghi rõ tên bài hát, tên tác giả; xin phép nếu cần.'},
        ]},
    ]
    phieu('tin5-bai5-ban-quyen-noi-dung', 5, 'Bản quyền nội dung thông tin', 'Bản quyền', bai)


# ============ BÀI 6. ĐỊNH DẠNG KÍ TỰ VÀ BỐ TRÍ HÌNH ẢNH ============
def bai6():
    bai = [
        {'loai': 'noidot', 'yc': 'Nối mỗi <b>nút lệnh</b> (trong dải lệnh Home) với <b>tác dụng</b> của nó.',
         'lc': ['Chữ đậm', 'Chữ nghiêng', 'Chữ gạch chân', 'Đổi màu chữ', 'Chọn cỡ chữ', 'Chọn phông chữ'], 'cau': [
            {'text': nut('<b>B</b>'), 'da': 'Chữ đậm'},
            {'text': nut('<i>I</i>'), 'da': 'Chữ nghiêng'},
            {'text': nut('<u>U</u>'), 'da': 'Chữ gạch chân'},
            {'text': nut('<span style="border-bottom:4px solid #e00">A</span>') + ' ▾', 'da': 'Đổi màu chữ'},
            {'text': nut('11', 'font-family:Arial;font-size:13px;min-width:34px') + ' ▾', 'da': 'Chọn cỡ chữ'},
            {'text': nut('Times New Roman', 'font-size:13px') + ' ▾', 'da': 'Chọn phông chữ'},
        ]},
        {'loai': 'dien', 'yc': 'Chọn tổ hợp phím phù hợp điền vào chỗ trống.', 'bank': ['Ctrl + B', 'Ctrl + I', 'Ctrl + U'],
         'lc': ['Ctrl + B', 'Ctrl + I', 'Ctrl + U'], 'cau': [
            {'text': 'a) Muốn chữ <b>đậm</b>, em nhấn {}.', 'da': ['Ctrl + B']},
            {'text': 'b) Muốn chữ <i>nghiêng</i>, em nhấn {}.', 'da': ['Ctrl + I']},
            {'text': 'c) Muốn chữ <u>gạch chân</u>, em nhấn {}.', 'da': ['Ctrl + U']},
        ]},
        {'loai': 'abcd', 'yc': 'Chọn đáp án đúng.', 'cot': 2, 'cau': [
            {'text': 'Trước khi định dạng một đoạn chữ, em cần làm gì đầu tiên?', 'cot': 1, 'lc': [
                'Chọn (bôi đen) phần chữ cần định dạng.', 'Lưu văn bản.', 'Tắt máy tính.', 'Chèn hình ảnh.'], 'da': 'Chọn (bôi đen) phần chữ cần định dạng.'},
            {'text': 'Kiểu bố trí để chữ <b>bao quanh hình theo khung vuông</b> là:', 'lc': ['Square', 'Behind Text', 'In Line with Text', 'In Front of Text'], 'da': 'Square'},
            {'text': 'Kiểu bố trí để hình ảnh <b>nằm trên một dòng như một kí tự</b> là:', 'lc': ['In Line with Text', 'Square', 'Tight', 'Behind Text'], 'da': 'In Line with Text'},
            {'text': 'Kiểu bố trí để hình ảnh <b>nằm phía sau chữ</b> (làm nền) là:', 'lc': ['Behind Text', 'In Front of Text', 'Square', 'Tight'], 'da': 'Behind Text'},
            {'text': 'Để mở bảng chọn các kiểu bố trí hình ảnh, em chọn hình ảnh rồi nháy vào nút:', 'lc': ['Layout Options', 'Save', 'Paste', 'Font Color'], 'da': 'Layout Options'},
        ]},
        {'loai': 'ds', 'yc': 'Đúng hay sai?', 'cau': ds(
            ('Tiêu đề nên được định dạng chữ to, đậm để nổi bật.', 'Đ'),
            ('Một văn bản nên dùng thật nhiều phông chữ và màu chữ khác nhau cho đẹp.', 'S'),
            ('Các nút lệnh định dạng kí tự nằm trong dải lệnh Home.', 'Đ'),
            ('Bố trí hình ảnh hợp lí giúp văn bản dễ đọc và đẹp hơn.', 'Đ'),
        )},
    ]
    phieu('tin5-bai6-dinh-dang-ki-tu-hinh-anh', 6, 'Định dạng kí tự và bố trí hình ảnh trong văn bản', 'Định dạng kí tự', bai)


# ============ BÀI 7. THỰC HÀNH SOẠN THẢO VĂN BẢN ============
def bai7():
    bai = [
        {'loai': 'sapxep', 'yc': 'Sắp xếp các bước <b>chèn hình ảnh</b> vào văn bản theo đúng thứ tự.', 'cau': [
            {'text': 'Đặt con trỏ soạn thảo ở vị trí muốn chèn hình ảnh.'},
            {'text': 'Mở dải lệnh <b>Insert</b>.'},
            {'text': 'Chọn <b>Pictures</b> trong nhóm lệnh Illustrations.'},
            {'text': 'Tìm và chọn tệp hình ảnh trong hộp thoại.'},
            {'text': 'Nháy chuột vào nút <b>Insert</b> trong hộp thoại.'},
        ]},
        {'loai': 'dien', 'yc': 'Chọn phím thích hợp điền vào chỗ trống.', 'bank': ['Backspace', 'Delete', 'Shift', 'Enter'],
         'lc': ['Backspace', 'Delete', 'Shift', 'Enter'], 'cau': [
            {'text': 'a) Phím {} xoá kí tự ở <b>bên trái</b> con trỏ soạn thảo.', 'da': ['Backspace']},
            {'text': 'b) Phím {} xoá kí tự ở <b>bên phải</b> con trỏ soạn thảo.', 'da': ['Delete']},
            {'text': 'c) Nhấn giữ phím {} cùng với phím chữ để gõ chữ in hoa.', 'da': ['Shift']},
            {'text': 'd) Nhấn phím {} để kết thúc một đoạn và xuống dòng.', 'da': ['Enter']},
        ]},
        {'loai': 'noidot', 'yc': 'Nối mỗi <b>tổ hợp phím</b> với <b>tác dụng</b> của nó.',
         'lc': ['Sao chép', 'Cắt', 'Dán', 'Lưu văn bản'], 'cau': [
            {'text': phim('Ctrl') + ' + ' + phim('C'), 'da': 'Sao chép'},
            {'text': phim('Ctrl') + ' + ' + phim('X'), 'da': 'Cắt'},
            {'text': phim('Ctrl') + ' + ' + phim('V'), 'da': 'Dán'},
            {'text': phim('Ctrl') + ' + ' + phim('S'), 'da': 'Lưu văn bản'},
        ]},
        {'loai': 'abcd', 'yc': 'Chọn đáp án đúng.', 'cot': 1, 'cau': [
            {'text': 'Cách nào sau đây <b>KHÔNG</b> dùng để lưu văn bản?', 'lc': [
                'Nháy nút lệnh Paste.', 'Nhấn tổ hợp phím Ctrl + S.', 'Chọn File → Save.', 'Nháy nút lệnh Save (hình đĩa mềm).'], 'da': 'Nháy nút lệnh Paste.'},
            {'text': 'Để phóng to, thu nhỏ hình ảnh mà vẫn giữ đúng tỉ lệ, em làm thế nào?', 'lc': [
                'Chọn hình rồi kéo thả nút tròn ở góc hình.', 'Nhấn phím Delete.', 'Kéo thả nút tròn ở giữa cạnh trên.', 'Nhấn tổ hợp phím Ctrl + B.'], 'da': 'Chọn hình rồi kéo thả nút tròn ở góc hình.'},
            {'text': 'Em dùng một hình ảnh tìm được trên Internet để minh hoạ cho văn bản. Em cần:', 'lc': [
                'Ghi nguồn của hình ảnh ở cuối văn bản.', 'Ghi tên em là tác giả hình ảnh.', 'Không cần ghi gì cả.', 'Xoá tên tác giả trên ảnh.'], 'da': 'Ghi nguồn của hình ảnh ở cuối văn bản.'},
        ]},
        {'loai': 'sapxep', 'yc': 'Sắp xếp các việc cần làm để tạo một văn bản hoàn chỉnh.', 'cau': [
            {'text': 'Gõ nội dung văn bản.'},
            {'text': 'Chèn hình ảnh minh hoạ.'},
            {'text': 'Định dạng chữ và bố trí hình ảnh cho đẹp.'},
            {'text': 'Kiểm tra lại, sửa lỗi chính tả.'},
            {'text': 'Lưu văn bản.'},
        ]},
    ]
    phieu('tin5-bai7-thuc-hanh-soan-thao', 7, 'Thực hành soạn thảo văn bản', 'Thực hành soạn thảo', bai)


# ============ BÀI 10. CẤU TRÚC TUẦN TỰ ============
def bai10():
    ct = svg([co_xanh(), toi(0, 0), noi('Xin chào!', 2), di(100), noi('Tạm biệt!', 2)])
    bai = [
        {'loai': 'nhieu', 'yc': 'Chọn tất cả các công việc được thực hiện theo <b>cấu trúc tuần tự</b>.', 'cau': [
            {'text': 'Công việc nào được thực hiện lần lượt từng bước, mỗi bước một lần?', 'cot': 1, 'lc': [
                'Làm bài tập lần lượt từ bài thứ nhất đến hết.',
                'Thực hiện lần lượt các bước để tạo một thư mục mới.',
                'Thực hiện lần lượt các bước để chèn hình ảnh vào văn bản.',
                'Chải răng nhiều lần cho đến khi răng sạch thì dừng lại.',
                'Nếu trời mưa thì mang áo mưa.'],
             'da': ['Làm bài tập lần lượt từ bài thứ nhất đến hết.',
                    'Thực hiện lần lượt các bước để tạo một thư mục mới.',
                    'Thực hiện lần lượt các bước để chèn hình ảnh vào văn bản.']},
        ]},
        {'loai': 'abcd', 'yc': 'Quan sát chương trình Scratch và chọn đáp án đúng.', 'hinh': ct, 'cot': 1, 'cau': [
            {'text': 'Sau khi bấm lá cờ xanh, lệnh nào được thực hiện <b>đầu tiên</b>?', 'lc': [
                'go to x: 0 y: 0', 'say Xin chào! for 2 seconds', 'move 100 steps', 'say Tạm biệt! for 2 seconds'], 'da': 'go to x: 0 y: 0'},
            {'text': 'Nhân vật nói "Tạm biệt!" vào lúc nào?', 'lc': [
                'Sau khi di chuyển 100 bước.', 'Ngay khi bấm lá cờ xanh.', 'Trước khi nói "Xin chào!".', 'Nhân vật không nói "Tạm biệt!".'], 'da': 'Sau khi di chuyển 100 bước.'},
            {'text': 'Nếu đổi chỗ hai lệnh <b>say</b> cho nhau thì:', 'lc': [
                'Nhân vật nói "Tạm biệt!" trước, "Xin chào!" sau.', 'Chương trình không thay đổi gì.', 'Nhân vật không di chuyển nữa.', 'Nhân vật nói hai câu cùng một lúc.'], 'da': 'Nhân vật nói "Tạm biệt!" trước, "Xin chào!" sau.'},
        ]},
        {'loai': 'sapxep', 'yc': 'Sắp xếp các lệnh để mèo <b>chào</b> rồi <b>giới thiệu</b>: nói "Xin chào!" trong 2 giây, sau đó nói "Rất vui được gặp các bạn." trong 2 giây.', 'cau': [
            {'text': svg(co_xanh())},
            {'text': svg(noi('Xin chào!', 2))},
            {'text': svg(noi('Rất vui được gặp các bạn.', 2))},
        ]},
        {'loai': 'ds', 'yc': 'Đúng hay sai?', 'cau': ds(
            ('Trong cấu trúc tuần tự, các lệnh được thực hiện lần lượt từ trên xuống dưới.', 'Đ'),
            ('Đổi thứ tự các lệnh có thể làm kết quả chương trình thay đổi.', 'Đ'),
            ('Trong cấu trúc tuần tự, mỗi lệnh luôn được thực hiện nhiều lần.', 'S'),
            ('Khối lệnh ' + img(svg(co_xanh())) + ' (khi bấm vào lá cờ xanh) dùng để bắt đầu chạy chương trình.', 'Đ'),
        )},
    ]
    phieu('tin5-bai10-cau-truc-tuan-tu', 10, 'Cấu trúc tuần tự', 'Cấu trúc tuần tự', bai)


# ============ BÀI 11. CẤU TRÚC LẶP ============
def bai11():
    lap_vuong = svg([co_xanh(), lap(4, [di(100), quay_phai(90)])])
    bai = [
        {'loai': 'noidot', 'yc': 'Nối mỗi <b>khối lệnh lặp</b> với <b>tên gọi</b> của nó.',
         'lc': ['Lặp với số lần biết trước', 'Lặp liên tục (mãi mãi)', 'Lặp cho đến khi điều kiện đúng'], 'cau': [
            {'text': img(svg(lap(10, []))), 'da': 'Lặp với số lần biết trước'},
            {'text': img(svg(mai([]))), 'da': 'Lặp liên tục (mãi mãi)'},
            {'text': img(svg(lap_den(B([''], 'operators'), []))), 'da': 'Lặp cho đến khi điều kiện đúng'},
        ]},
        {'loai': 'chon', 'yc': 'Mỗi hoạt động dưới đây thuộc kiểu lặp nào? Chọn trong ô ▾.',
         'lc': ['Lặp với số lần biết trước', 'Lặp liên tục', 'Lặp có điều kiện'], 'cau': [
            {'text': 'Em chạy đúng 5 vòng quanh sân trường.', 'da': 'Lặp với số lần biết trước'},
            {'text': 'Em chải răng nhiều lần cho đến khi răng sạch thì dừng.', 'da': 'Lặp có điều kiện'},
            {'text': 'Kim giây của đồng hồ cứ quay mãi, không dừng.', 'da': 'Lặp liên tục'},
            {'text': 'Em đọc bài nhiều lần cho đến khi thuộc bài thì dừng.', 'da': 'Lặp có điều kiện'},
            {'text': 'Em nhảy dây đúng 20 cái.', 'da': 'Lặp với số lần biết trước'},
        ]},
        {'loai': 'abcd', 'yc': 'Quan sát chương trình và chọn đáp án đúng.', 'hinh': lap_vuong, 'cot': 2, 'cau': [
            {'text': 'Hai lệnh bên trong khối <b>repeat</b> được thực hiện mấy lần?', 'lc': ['1', '2', '4', '100'], 'da': '4', 'cot': 4},
            {'text': 'Nhân vật di chuyển theo hình gì?', 'lc': ['Hình vuông', 'Hình tam giác', 'Hình tròn', 'Đường thẳng'], 'da': 'Hình vuông', 'cot': 4},
            {'text': 'Tổng cộng nhân vật đi được bao nhiêu bước?', 'lc': ['100', '200', '400', '90'], 'da': '400', 'cot': 4},
        ]},
        {'loai': 'ds', 'yc': 'Đúng hay sai?', 'cau': ds(
            ('Cấu trúc lặp giúp chương trình ngắn gọn hơn khi có công việc lặp đi lặp lại.', 'Đ'),
            ('Khối lệnh <b>forever</b> lặp lại các lệnh bên trong mãi, cho đến khi dừng chương trình.', 'Đ'),
            ('Khối lệnh <b>repeat 10</b> lặp lại các lệnh bên trong đúng 10 lần.', 'Đ'),
            ('Có thể đặt thêm lệnh nối vào phía dưới khối <b>forever</b>.', 'S'),
            ('Để chim bồ câu vỗ cánh liên tục, em dùng khối lệnh <b>forever</b>.', 'Đ'),
        )},
    ]
    phieu('tin5-bai11-cau-truc-lap', 11, 'Cấu trúc lặp', 'Cấu trúc lặp', bai)


# ============ BÀI 12. THỰC HÀNH SỬ DỤNG LỆNH LẶP ============
def bai12():
    tg = svg([co_xanh(), lap(3, [di(100), quay_phai(120)])])
    bai = [
        {'loai': 'abcd', 'yc': 'Khối lệnh nào điều khiển nhân vật di chuyển theo <b>hình vuông</b>?', 'cot': 2, 'cau': [
            {'text': 'Chọn khối lệnh đúng:', 'lc': [
                svg(lap(4, [di(100), quay_phai(90)])), svg(lap(4, [di(100)])),
                svg(lap(3, [di(100), quay_phai(90)])), svg(lap(4, [quay_phai(90)]))],
             'da': svg(lap(4, [di(100), quay_phai(90)]))},
        ]},
        {'loai': 'go', 'yc': 'Gõ số thích hợp vào ô trống để nhân vật vẽ đúng hình.', 'cau': [
            {'text': 'Hình <b>tam giác đều</b>: repeat {} , mỗi lần move 100 steps và turn ↻ {} degrees.', 'da': ['3', '120']},
            {'text': 'Hình <b>vuông</b>: repeat {} , mỗi lần move 100 steps và turn ↻ {} degrees.', 'da': ['4', '90']},
            {'text': 'Hình <b>lục giác đều</b>: repeat {} , mỗi lần move 50 steps và turn ↻ {} degrees.', 'da': ['6', '60']},
        ]},
        {'loai': 'abcd', 'yc': 'Quan sát chương trình và chọn đáp án đúng.', 'hinh': tg, 'cot': 2, 'cau': [
            {'text': 'Nhân vật vẽ hình gì?', 'lc': ['Tam giác', 'Hình vuông', 'Lục giác', 'Hình tròn'], 'da': 'Tam giác'},
            {'text': 'Lệnh <b>move 100 steps</b> được thực hiện mấy lần?', 'lc': ['1', '3', '100', '120'], 'da': '3'},
        ]},
        {'loai': 'abcd', 'yc': 'Chọn khối lệnh phù hợp với yêu cầu.', 'cot': 2, 'cau': [
            {'text': 'Nhân vật <b>đổi trang phục liên tục</b> để trông như đang tập thể dục:', 'lc': [
                svg(mai([Lenh('looks', ['next costume']), doi(0.5)])), svg(Lenh('looks', ['next costume'])),
                svg(lap(2, [Lenh('looks', ['next costume'])])), svg(doi(0.5))],
             'da': svg(mai([Lenh('looks', ['next costume']), doi(0.5)]))},
            {'text': 'Nhân vật đổi trang phục, <b>dừng lại khi em nhấn phím dấu cách</b> (space):', 'lc': [
                svg(lap_den(B(['key', DD('space', 'sensing'), 'pressed?'], 'sensing'), [Lenh('looks', ['next costume']), doi(0.5)])),
                svg(mai([Lenh('looks', ['next costume']), doi(0.5)])),
                svg(lap(10, [Lenh('looks', ['next costume']), doi(0.5)])),
                svg([khi_phim('space'), Lenh('looks', ['next costume'])])],
             'da': svg(lap_den(B(['key', DD('space', 'sensing'), 'pressed?'], 'sensing'), [Lenh('looks', ['next costume']), doi(0.5)]))},
        ]},
        {'loai': 'ds', 'yc': 'Chương trình: <b>forever</b> [ <b>go to random position</b>, <b>wait 1 seconds</b> ]. Đúng hay sai?', 'cau': ds(
            ('Nhân vật liên tục nhảy đến vị trí ngẫu nhiên trên sân khấu.', 'Đ'),
            ('Nhân vật chỉ đổi vị trí đúng 1 lần rồi dừng.', 'S'),
            ('Sau mỗi lần đổi vị trí, nhân vật đứng yên 1 giây.', 'Đ'),
        )},
    ]
    phieu('tin5-bai12-thuc-hanh-lenh-lap', 12, 'Thực hành sử dụng lệnh lặp', 'Thực hành lệnh lặp', bai)


# ============ BÀI 13. CẤU TRÚC RẼ NHÁNH ============
def bai13():
    ct = svg([co_xanh(), hoi('5 + 5 = ?'), neu_khac(ss(TRA_LOI, '=', 10), [noi('Đúng rồi!', 2)], [noi('Sai rồi!', 2)])])
    bai = [
        {'loai': 'chon', 'yc': 'Mỗi câu dưới đây là rẽ nhánh <b>dạng thiếu</b> (Nếu… thì…) hay <b>dạng đủ</b> (Nếu… thì…, nếu không thì…)?',
         'lc': ['Dạng thiếu', 'Dạng đủ'], 'cau': [
            {'text': 'Nếu trời mưa thì em mang áo mưa.', 'da': 'Dạng thiếu'},
            {'text': 'Nếu trời mưa thì em mang ô, nếu không thì em đội mũ.', 'da': 'Dạng đủ'},
            {'text': 'Nếu em làm xong bài tập thì em được xem hoạt hình.', 'da': 'Dạng thiếu'},
            {'text': 'Nếu đèn xanh thì em đi tiếp, nếu không thì em dừng lại.', 'da': 'Dạng đủ'},
        ]},
        {'loai': 'abcd', 'yc': 'Quan sát chương trình và chọn đáp án đúng.', 'hinh': ct, 'cot': 2, 'cau': [
            {'text': 'Em nhập <b>10</b>. Nhân vật nói gì?', 'lc': ['Đúng rồi!', 'Sai rồi!', '5 + 5 = ?', 'Không nói gì'], 'da': 'Đúng rồi!'},
            {'text': 'Em nhập <b>9</b>. Nhân vật nói gì?', 'lc': ['Sai rồi!', 'Đúng rồi!', '9', 'Không nói gì'], 'da': 'Sai rồi!'},
            {'text': 'Khối lệnh <b>if … then … else</b> trong chương trình là cấu trúc:', 'lc': ['Rẽ nhánh dạng đủ', 'Rẽ nhánh dạng thiếu', 'Lặp', 'Tuần tự'], 'da': 'Rẽ nhánh dạng đủ'},
        ]},
        {'loai': 'noidot', 'yc': 'Nối mỗi <b>khối lệnh</b> với <b>ý nghĩa</b> đúng.',
         'lc': ['Rẽ nhánh dạng thiếu', 'Rẽ nhánh dạng đủ', 'Điều kiện: chạm vào cạnh sân khấu', 'Điều kiện: phím dấu cách được nhấn'], 'cau': [
            {'text': img(svg(neu(B([''], 'operators'), []))), 'da': 'Rẽ nhánh dạng thiếu'},
            {'text': img(svg(neu_khac(B([''], 'operators'), [], []))), 'da': 'Rẽ nhánh dạng đủ'},
            {'text': img(svg_bao_cao(B(['touching', DD('edge', 'sensing'), '?'], 'sensing'))), 'da': 'Điều kiện: chạm vào cạnh sân khấu'},
            {'text': img(svg_bao_cao(B(['key', DD('space', 'sensing'), 'pressed?'], 'sensing'))), 'da': 'Điều kiện: phím dấu cách được nhấn'},
        ]},
        {'loai': 'ds', 'yc': 'Đúng hay sai?', 'cau': ds(
            ('Cấu trúc rẽ nhánh dùng để chọn việc cần làm tuỳ theo điều kiện đúng hay sai.', 'Đ'),
            ('Ở rẽ nhánh dạng thiếu, nếu điều kiện sai thì không làm gì cả.', 'Đ'),
            ('Ở rẽ nhánh dạng đủ, khi điều kiện sai thì thực hiện các lệnh sau <b>else</b> (nếu không thì).', 'Đ'),
            ('Ô điều kiện trong khối <b>if</b> có hình chữ nhật bo tròn.', 'S'),
            ('Điểm thi là 7, chương trình kiểm tra “điểm &gt; 8” thì điều kiện này đúng.', 'S'),
        )},
    ]
    phieu('tin5-bai13-cau-truc-re-nhanh', 13, 'Cấu trúc rẽ nhánh', 'Cấu trúc rẽ nhánh', bai)


# ============ BÀI 14. SỬ DỤNG BIẾN TRONG CHƯƠNG TRÌNH ============
def bai14():
    bai = [
        {'loai': 'noidot', 'yc': 'Nối mỗi <b>khối lệnh</b> với <b>tác dụng</b> của nó.',
         'lc': ['Gán (đặt) giá trị cho biến', 'Tăng (hoặc giảm) giá trị của biến', 'Hỏi và chờ người dùng nhập', 'Lưu điều người dùng vừa nhập'], 'cau': [
            {'text': img(svg(dat('điểm', 0))), 'da': 'Gán (đặt) giá trị cho biến'},
            {'text': img(svg(tang('điểm', 1))), 'da': 'Tăng (hoặc giảm) giá trị của biến'},
            {'text': img(svg(hoi('Bạn tên là gì?'))), 'da': 'Hỏi và chờ người dùng nhập'},
            {'text': img(svg_bao_cao(TRA_LOI)), 'da': 'Lưu điều người dùng vừa nhập'},
        ]},
        {'loai': 'abcd', 'yc': 'Tính giá trị của biến sau khi chạy các lệnh.', 'cot': 4, 'cau': [
            {'text': svg([dat('a', 5), tang('a', 2)]) + '<br>Giá trị của biến <b>a</b> là:', 'lc': ['7', '5', '2', '3'], 'da': '7'},
            {'text': svg([dat('điểm', 0), tang('điểm', 1), tang('điểm', 1), tang('điểm', 1)]) + '<br>Giá trị của biến <b>điểm</b> là:', 'lc': ['3', '1', '0', '4'], 'da': '3'},
            {'text': svg([dat('A', 5), lap(3, [tang('A', 5)])]) + '<br>Giá trị của biến <b>A</b> là:', 'lc': ['20', '15', '10', '5'], 'da': '20'},
            {'text': svg([dat('bước đi', 0), di(50), tang('bước đi', 1)]) + '<br>Giá trị của biến <b>bước đi</b> là:', 'lc': ['1', '50', '51', '0'], 'da': '1'},
        ]},
        {'loai': 'abcd', 'yc': 'Quan sát chương trình và chọn đáp án đúng.',
         'hinh': svg([co_xanh(), hoi('Tên của bạn là gì?'), noi(ghep('Bạn đó tên là: ', TRA_LOI))]), 'cot': 1, 'cau': [
            {'text': 'Em gõ <b>Lan</b> rồi nhấn Enter. Nhân vật nói:', 'lc': ['Bạn đó tên là: Lan', 'Bạn đó tên là: answer', 'Tên của bạn là gì?', 'Lan là tên của bạn'], 'da': 'Bạn đó tên là: Lan'},
            {'text': 'Biến <b>answer</b> (trả lời) là biến có sẵn, nằm trong nhóm lệnh:', 'lc': ['Sensing (Cảm biến)', 'Motion (Chuyển động)', 'Sound (Âm thanh)', 'Pen (Bút vẽ)'], 'da': 'Sensing (Cảm biến)', 'cot': 2},
        ]},
        {'loai': 'ds', 'yc': 'Đúng hay sai?', 'cau': ds(
            ('Biến dùng để lưu dữ liệu (ví dụ điểm số) trong khi chương trình chạy.', 'Đ'),
            ('Em tạo biến mới bằng nút <b>Make a Variable</b> trong nhóm lệnh Variables (Các biến số).', 'Đ'),
            ('Lưu số điểm người chơi đạt được là tình huống cần dùng biến.', 'Đ'),
            ('Lệnh <b>change điểm by 1</b> luôn đặt biến điểm về 1.', 'S'),
            ('Giá trị của biến có thể thay đổi khi chương trình đang chạy.', 'Đ'),
        )},
    ]
    phieu('tin5-bai14-su-dung-bien', 14, 'Sử dụng biến trong chương trình', 'Sử dụng biến', bai)


# ============ BÀI 15. SỬ DỤNG BIỂU THỨC TRONG CHƯƠNG TRÌNH ============
def bai15():
    a, b, h, r = bien('a'), bien('b'), bien('h'), bien('r')
    bai = [
        {'loai': 'noidot', 'yc': 'Nối mỗi <b>biểu thức trong Scratch</b> với <b>biểu thức toán học</b> tương ứng.',
         'lc': ['a × b', '(a × h) : 2', 'r × (r × 3,14)', '[(a + b) × h] : 2'], 'cau': [
            {'text': img(svg_bao_cao(op(a, '*', b))), 'da': 'a × b'},
            {'text': img(svg_bao_cao(op(op(a, '*', h), '/', 2))), 'da': '(a × h) : 2'},
            {'text': img(svg_bao_cao(op(r, '*', op(r, '*', 3.14)))), 'da': 'r × (r × 3,14)'},
            {'text': img(svg_bao_cao(op(op(op(a, '+', b), '*', h), '/', 2))), 'da': '[(a + b) × h] : 2'},
        ]},
        {'loai': 'go', 'yc': 'Tính kết quả của các biểu thức Scratch rồi gõ vào ô trống.', 'cau': [
            {'text': svg_bao_cao(op(op(8, '+', 3), '*', op(14, '-', 4))) + ' = {}', 'da': '110'},
            {'text': svg_bao_cao(op(op(2, '+', 5), '*', op(8, '-', 4))) + ' = {}', 'da': '28'},
            {'text': svg_bao_cao(op(op(20, '-', 4), '/', 2)) + ' = {}', 'da': '8'},
            {'text': 'Biến <b>a</b> = 5. ' + svg_bao_cao(op(a, '*', op(a, '*', 6))) + ' = {}', 'da': '150'},
        ]},
        {'loai': 'abcd', 'yc': 'Chọn đáp án đúng.', 'cot': 2, 'cau': [
            {'text': 'Biến <b>cạnh</b> lưu độ dài cạnh hình vuông. Biểu thức tính <b>chu vi</b> hình vuông là:', 'lc': [
                svg_bao_cao(op(bien('cạnh'), '*', 4)), svg_bao_cao(op(bien('cạnh'), '+', 4)),
                svg_bao_cao(op(bien('cạnh'), '*', bien('cạnh'))), svg_bao_cao(op(bien('cạnh'), '/', 4))],
             'da': svg_bao_cao(op(bien('cạnh'), '*', 4))},
            {'text': 'Trong Scratch, phép <b>nhân</b> được viết bằng dấu nào?', 'lc': ['*', 'x', ':', '/'], 'da': '*', 'cot': 4},
            {'text': 'Biến a = 3, b = 12. Biểu thức ' + svg_bao_cao(ss(30, '=', op(a, '+', b))) + ' cho kết quả:', 'lc': ['Sai (false)', 'Đúng (true)', '15', '30'], 'da': 'Sai (false)', 'cot': 4},
            {'text': 'Các khối phép toán (+, −, *, /, &gt;, &lt;, =) nằm trong nhóm lệnh nào?', 'lc': ['Operators (Các phép toán)', 'Motion (Chuyển động)', 'Looks (Hiển thị)', 'Events (Sự kiện)'], 'da': 'Operators (Các phép toán)'},
        ]},
        {'loai': 'ds', 'yc': 'Đúng hay sai?', 'cau': ds(
            ('Trong Scratch, phép chia được viết bằng dấu <b>/</b>.', 'Đ'),
            ('Biểu thức so sánh (&gt;, &lt;, =) cho kết quả là Đúng hoặc Sai.', 'Đ'),
            ('Muốn tính phép tính trong ngoặc trước, em lồng khối phép toán đó vào bên trong khối kia.', 'Đ'),
            ('Scratch không tính được các phép tính có dấu ngoặc.', 'S'),
        )},
    ]
    phieu('tin5-bai15-su-dung-bieu-thuc', 15, 'Sử dụng biểu thức trong chương trình', 'Sử dụng biểu thức', bai)


# ============ BÀI 16. TỪ KỊCH BẢN ĐẾN CHƯƠNG TRÌNH ============
def bai16():
    kb = ('<div style="border:2px dashed #168DCE;border-radius:10px;padding:8px 12px;background:#f3f9fd">'
          '<b>Kịch bản trò chơi “Mèo bắt bóng”</b><br>• Quả bóng di chuyển liên tục trên sân khấu, chạm cạnh thì bật lại.<br>'
          '• Mèo luôn di chuyển theo con trỏ chuột.<br>• Người chơi điều khiển chuột để mèo chạm vào bóng.<br>'
          '• Mỗi lần mèo chạm bóng, người chơi được cộng 1 điểm.</div>')
    bai = [
        {'loai': 'abcd', 'yc': 'Đọc kịch bản trò chơi và chọn đáp án đúng.<br>' + kb, 'cot': 2, 'cau': [
            {'text': 'Trò chơi có mấy nhân vật?', 'lc': ['2 (Mèo và Bóng)', '1 (Mèo)', '1 (Bóng)', '3 (Mèo, Bóng, Chuột)'], 'da': '2 (Mèo và Bóng)'},
            {'text': 'Cần tạo biến nào để lưu kết quả của người chơi?', 'lc': ['Biến điểm', 'Biến tên', 'Biến tuổi', 'Không cần biến'], 'da': 'Biến điểm'},
            {'text': '“Bóng di chuyển liên tục” nên dùng cấu trúc nào?', 'lc': ['Lặp liên tục (forever)', 'Rẽ nhánh dạng đủ', 'Tuần tự, không lặp', 'Lặp 1 lần'], 'da': 'Lặp liên tục (forever)'},
            {'text': '“Mỗi lần mèo chạm bóng thì cộng 1 điểm” cần dùng cấu trúc nào bên trong vòng lặp?', 'lc': ['Rẽ nhánh (if … then)', 'Lặp 10 lần', 'Chỉ dùng tuần tự', 'Không cần lệnh nào'], 'da': 'Rẽ nhánh (if … then)'},
        ]},
        {'loai': 'noidot', 'yc': 'Nối mỗi <b>khối lệnh</b> với <b>hoạt động</b> trong kịch bản mà nó thực hiện.',
         'lc': ['Bóng di chuyển liên tục, chạm cạnh thì bật lại', 'Mèo đi theo con trỏ chuột', 'Mèo chạm bóng thì được cộng 1 điểm', 'Đầu trò chơi, điểm bằng 0'], 'cau': [
            {'text': img(svg(mai([di(10), Lenh('motion', ['if on edge, bounce'])]))), 'da': 'Bóng di chuyển liên tục, chạm cạnh thì bật lại'},
            {'text': img(svg(mai([Lenh('motion', ['go to', DD('mouse-pointer', 'motion')])]))), 'da': 'Mèo đi theo con trỏ chuột'},
            {'text': img(svg(mai([neu(B(['touching', DD('Ball', 'sensing'), '?'], 'sensing'), [tang('điểm', 1), doi(1)])]))), 'da': 'Mèo chạm bóng thì được cộng 1 điểm'},
            {'text': img(svg(dat('điểm', 0))), 'da': 'Đầu trò chơi, điểm bằng 0'},
        ]},
        {'loai': 'sapxep', 'yc': 'Sắp xếp các bước <b>từ kịch bản đến chương trình</b> theo đúng thứ tự.', 'cau': [
            {'text': 'Viết kịch bản: xác định các nhân vật và hoạt động của từng nhân vật.'},
            {'text': 'Xác định cấu trúc (tuần tự, lặp, rẽ nhánh) phù hợp với mỗi hoạt động.'},
            {'text': 'Chọn các lệnh Scratch phù hợp với từng cấu trúc.'},
            {'text': 'Ghép các lệnh thành chương trình cho từng nhân vật.'},
            {'text': 'Chạy thử chương trình, phát hiện lỗi và sửa lỗi.'},
        ]},
        {'loai': 'ds', 'yc': 'Đúng hay sai?', 'cau': ds(
            ('Kịch bản mô tả các nhân vật và hoạt động của nhân vật trong chương trình.', 'Đ'),
            ('Có kịch bản rõ ràng giúp em tạo chương trình dễ dàng hơn.', 'Đ'),
            ('Chương trình đã chạy được thì không cần chạy thử và kiểm tra lại.', 'S'),
            ('Trong trò chơi “Mèo bắt bóng”, mỗi nhân vật có thể có chương trình riêng của mình.', 'Đ'),
        )},
    ]
    phieu('tin5-bai16-tu-kich-ban-den-chuong-trinh', 16, 'Từ kịch bản đến chương trình', 'Từ kịch bản đến CT', bai)


if __name__ == '__main__':
    for f in (bai4, bai5, bai6, bai7, bai10, bai11, bai12, bai13, bai14, bai15, bai16):
        f()
