"""Sinh config.json cho bộ phiếu Scratch lớp 3 (Tiết 1–15). Chạy: python3 tools/nguon/gen_scratch3.py"""
import json, os, sys
sys.path.insert(0, os.path.dirname(__file__))
from scratch_svg import *

ROOT = os.path.join(os.path.dirname(__file__), '..', '..')
NGAY = '2026-11-11'
LOP = ['3A1', '3A2', '3A3', '3A4', '3A5', '3A6', 'ĐT Tin - K2', 'ĐT Tin - K3']
GUI = 'https://script.google.com/macros/s/AKfycbypoQt_uqRBGqN9N-EfLDGdsMPrirkGAQLlFwRTlot7tpruG2jivFKT6U3pbA2LuQV00Q/exec'


def phieu(thu_muc, tiet, ten, bai):
    cfg = {
        'web': {'khoi': ['khoi-3', 'doi-tuyen'], 'mon': 'Tin học – Scratch lớp 3', 'ten': f'Tiết {tiet}: {ten}',
                'ngay': NGAY, 'chuaGiao': True},
        'ma': f'Scratch 3 - Tiết {tiet}',
        'mon': 'TIN HỌC – SCRATCH LỚP 3',
        'tieuDe': f'Phiếu bài tập – Tiết {tiet}: {ten}',
        'lop': LOP, 'guiB': GUI, 'guiA': None, 'bai': bai}
    d = os.path.join(ROOT, 'phieu', thu_muc)
    os.makedirs(d, exist_ok=True)
    json.dump(cfg, open(os.path.join(d, 'config.json'), 'w'), ensure_ascii=False, indent=1)
    print('ok', thu_muc)


def ab(text, lc, da, cot=None, **kw):
    c = {'text': text, 'lc': lc, 'da': da}
    if cot:
        c['cot'] = cot
    c.update(kw)
    return c


# ---------- khối dùng nhiều lần ----------
FLAG = hat('events', 'when', I('flag'), 'clicked')
def KEY(k): return hat('events', 'when', F(k), 'key pressed')
def CX(n): return stack('motion', 'change x by', N(n))
def CY(n): return stack('motion', 'change y by', N(n))
GOXY = stack('motion', 'go to x:', N(0), 'y:', N(0))
GOXY_E = stack('motion', 'go to x:', N(''), 'y:', N(''))
PICK_E = rep('operators', 'pick random', N(''), 'to', N(''))
WAIT1 = stack('control', 'wait', N(1), 'seconds')
STOP = cap('control', 'stop', D('all'))


# ======================= TIẾT 1 =======================
def badge(x, y, n, col):
    return (f'<circle cx="{x}" cy="{y}" r="15" fill="#fff" stroke="{col}" stroke-width="3"/>'
            f'<text x="{x}" y="{y+6}" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="18" fill="{col}">{n}</text>')

SO_MAU = {1: '#E53935', 2: '#F2B600', 3: '#1E6FD9', 4: '#2E9E44', 5: '#F28C28'}
blocks_pal = ''.join(f'<rect x="78" y="{y}" width="{w}" height="16" rx="3" fill="#4C97FF"/>'
                     for y, w in [(64, 70), (86, 60), (108, 60), (130, 78), (152, 66), (174, 84), (196, 70)])
dots = ''.join(f'<circle cx="34" cy="{y}" r="7" fill="{c}"/>' for y, c in
               [(66, '#4C97FF'), (92, '#9966FF'), (118, '#CF63CF'), (144, '#FFBF00'), (170, '#FFAB19'), (196, '#5CB1D6'), (222, '#59C059'), (248, '#FF8C1A')])
GIAO_DIEN = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" width="520" height="279" style="display:block;margin:10px auto 0;max-width:100%;height:auto" role="img" aria-label="Giao diện Scratch có đánh số 1 đến 5">'
    '<rect x="0" y="0" width="560" height="300" fill="#E9F1FC" rx="6"/>'
    # 5 thanh công cụ
    '<rect x="4" y="4" width="552" height="30" rx="4" fill="#4C97FF"/>'
    '<text x="16" y="24" font-family="Arial" font-weight="bold" font-size="13" fill="#fff">SCRATCH</text>'
    '<text x="100" y="24" font-family="Arial" font-size="12" fill="#fff">Tập tin    Chỉnh sửa    Hướng dẫn</text>'
    + badge(340, 19, 5, SO_MAU[5]) +
    # 4 khu vực các lệnh
    '<rect x="4" y="40" width="170" height="256" rx="4" fill="#fff" stroke="#2E9E44" stroke-width="2"/>'
    '<rect x="4" y="40" width="20" height="0" fill="none"/>' + dots + blocks_pal
    + '<line x1="58" y1="40" x2="58" y2="296" stroke="#ddd"/>' + badge(130, 260, 4, SO_MAU[4]) +
    # 3 khu vực lập trình
    '<rect x="180" y="40" width="176" height="256" rx="4" fill="#F9F9F9" stroke="#1E6FD9" stroke-width="2"/>'
    + badge(268, 168, 3, SO_MAU[3]) +
    # 1 sân khấu
    '<rect x="362" y="40" width="194" height="150" rx="4" fill="#fff" stroke="#E53935" stroke-width="2"/>'
    '<path d="M372,47 v14 M373,48 c4,-2 7,2 12,0 v7 c-5,2 -8,-2 -12,0z" stroke="#45993D" fill="#4CBF56"/>'
    '<polygon points="394,47 400,47 404,51 404,57 400,61 394,61 390,57 390,51" fill="#EC5959"/>'
    '<line x1="362" y1="66" x2="556" y2="66" stroke="#ddd"/>'
    + badge(459, 128, 1, SO_MAU[1]) +
    # 2 nhân vật và phông nền
    '<rect x="362" y="196" width="194" height="100" rx="4" fill="#fff" stroke="#F2B600" stroke-width="2"/>'
    '<rect x="370" y="204" width="130" height="34" rx="3" fill="#F2F4F8"/>'
    '<rect x="372" y="246" width="40" height="40" rx="5" fill="#fff" stroke="#4C97FF" stroke-width="2"/>'
    '<line x1="508" y1="196" x2="508" y2="296" stroke="#ddd"/>'
    '<circle cx="486" cy="276" r="12" fill="#4C97FF"/><circle cx="532" cy="276" r="12" fill="#4C97FF"/>'
    + badge(450, 262, 2, SO_MAU[2]) + '</svg>')


def nut(inner, bg='#4C97FF'):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="54" height="54" style="vertical-align:middle" role="img">'
            f'<circle cx="30" cy="30" r="27" fill="{bg}"/>{inner}</svg>')

ICON_CO = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="54" height="54" style="vertical-align:middle" role="img">'
           '<path d="M14,8 V54" stroke="#45993D" stroke-width="4" stroke-linecap="round"/>'
           '<path d="M16,10 C24,4 32,16 48,10 V34 C32,40 24,28 16,34 Z" fill="#4CBF56" stroke="#45993D" stroke-width="2" stroke-linejoin="round"/></svg>')
ICON_STOP = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="54" height="54" style="vertical-align:middle" role="img">'
             '<polygon points="20,4 40,4 56,20 56,40 40,56 20,56 4,40 4,20" fill="#EC5959" stroke="#B84848" stroke-width="2"/></svg>')
PLUS = '<circle cx="45" cy="15" r="8" fill="#fff" stroke="#4C97FF" stroke-width="2"/><path d="M45,10 v10 M40,15 h10" stroke="#4C97FF" stroke-width="2.5"/>'
ICON_MEO = nut('<path d="M18,24 L20,12 L27,19 H33 L40,12 L42,24 C46,38 38,44 30,44 C22,44 14,38 18,24 Z" fill="#fff"/>'
               '<circle cx="25" cy="30" r="2" fill="#4C97FF"/><circle cx="35" cy="30" r="2" fill="#4C97FF"/>' + PLUS)
ICON_NEN = nut('<rect x="15" y="19" width="30" height="24" rx="3" fill="#fff"/>'
               '<path d="M17,41 L26,30 L32,36 L36,32 L43,41 Z" fill="#4C97FF"/><circle cx="37" cy="25" r="3" fill="#4C97FF"/>' + PLUS)
ICON_CO_VE = nut('<path d="M38,14 L46,22 L30,38 L22,30 Z" fill="#fff"/><path d="M21,32 L28,39 C24,46 16,46 14,46 C16,42 15,36 21,32 Z" fill="#fff"/>')


def vung(n):
    c = SO_MAU[n]
    return (f'<span style="display:inline-flex;align-items:center;gap:8px"><span style="display:inline-block;width:30px;height:30px;line-height:26px;'
            f'border:3px solid {c};border-radius:50%;text-align:center;font-weight:bold;color:{c};box-sizing:border-box">{n}</span>Vùng số {n}</span>')

phieu('scratch3-tiet01-giao-dien', 1, 'Ôn tập giao diện Scratch 3.0', [
    {'loai': 'noidot', 'yc': 'Nối số ở cột bên trái với tên khu vực tương ứng ở bên phải.' + GIAO_DIEN,
     'lc': ['Khu vực lập trình', 'Thanh công cụ', 'Sân khấu', 'Khu vực các lệnh', 'Khu vực nhân vật và phông nền'],
     'cau': [{'text': vung(1), 'da': 'Sân khấu'}, {'text': vung(2), 'da': 'Khu vực nhân vật và phông nền'},
             {'text': vung(3), 'da': 'Khu vực lập trình'}, {'text': vung(4), 'da': 'Khu vực các lệnh'},
             {'text': vung(5), 'da': 'Thanh công cụ'}]},
    {'loai': 'abcd', 'yc': 'Khoanh tròn vào chữ cái đặt trước ý đúng.', 'cot': 3, 'cau': [
        ab('Để chạy chương trình, em nháy vào nút nào?', [ICON_CO, ICON_STOP, ICON_MEO], ICON_CO),
        ab('Để thêm nhân vật mới, em nháy vào nút nào?', [ICON_MEO, ICON_NEN, ICON_CO_VE], ICON_MEO)]},
])

# ======================= TIẾT 4 =======================
T3 = [
    (stack('motion', 'move', N(10), 'steps'), 'Di chuyển 10 bước', 'Motion (Chuyển động)'),
    (stack('motion', 'turn', I('cw'), N(15), 'degrees'), 'Xoay phải 15 độ', 'Motion (Chuyển động)'),
    (stack('motion', 'go to', D('random position')), 'Đi tới vị trí ngẫu nhiên', 'Motion (Chuyển động)'),
    (stack('looks', 'say', T('Hello!'), 'for', N(2), 'seconds'), 'Nói “Hello!” trong 2 giây', 'Looks (Hiển thị)'),
    (stack('looks', 'think', T('Hmm...'), 'for', N(2), 'seconds'), 'Nghĩ “Hmm...” trong 2 giây', 'Looks (Hiển thị)'),
    (GOXY, 'Đi tới vị trí (x:0, y:0)', 'Motion (Chuyển động)'),
    (stack('motion', 'glide', N(1), 'secs to', D('random position')), 'Lướt tới vị trí ngẫu nhiên trong 1 giây', 'Motion (Chuyển động)'),
    (stack('motion', 'glide', N(1), 'secs to x:', N(0), 'y:', N(0)), 'Lướt tới vị trí (x:0, y:0) trong 1 giây', 'Motion (Chuyển động)'),
]
y_nghia = [t[1] for t in T3]
lc_yn = [y_nghia[i] for i in (3, 6, 0, 5, 2, 7, 4, 1)]
NHOM = ['Motion (Chuyển động)', 'Looks (Hiển thị)', 'Events (Sự kiện)']
COSTUME = [
    (stack('looks', 'switch costume to', D('abby-d')), 'Đổi trang phục của nhân vật sang trang phục abby-d'),
    (stack('looks', 'next costume'), 'Chuyển nhân vật sang trang phục tiếp theo'),
    (stack('looks', 'switch backdrop to', D('Blue Sky')), 'Đổi hình nền sân khấu sang hình nền Blue Sky'),
    (stack('looks', 'next backdrop'), 'Chuyển sân khấu sang hình nền tiếp theo'),
]
phieu('scratch3-tiet04-on-tap-khoi-lenh', 4, 'Ôn tập khối lệnh – Thay đổi trang phục và hình nền', [
    {'loai': 'noidot', 'yc': 'Nhớ lại các khối lệnh đã học ở Tiết 3: nối mỗi khối lệnh với ý nghĩa đúng.',
     'lc': lc_yn, 'cau': [{'text': svg(b), 'da': yn} for b, yn, _ in T3]},
    {'loai': 'abcd', 'yc': 'Mỗi khối lệnh sau thuộc nhóm lệnh nào? Khoanh tròn đáp án đúng.', 'cot': 3,
     'cau': [ab(svg(b), NHOM, nh) for b, _, nh in T3]},
    {'loai': 'noidot', 'yc': 'Quan sát và nối khối lệnh với chức năng của khối lệnh đó.',
     'lc': [COSTUME[i][1] for i in (2, 0, 3, 1)], 'cau': [{'text': svg(b), 'da': cn} for b, cn in COSTUME]},
    {'loai': 'abcd', 'yc': 'Khoanh tròn đáp án đúng.', 'cau': [
        ab('Các khối lệnh thay đổi trang phục và hình nền nằm trong nhóm lệnh nào?',
           ['Motion', 'Looks', 'Events', 'Sound'], 'Looks', cot=4),
        ab('Muốn quan sát các trang phục của nhân vật, em chọn thẻ nào?', ['Code', 'Costumes', 'Sounds'], 'Costumes', cot=3),
        ab('Muốn quan sát các hình nền của sân khấu, em chọn sân khấu rồi chọn thẻ nào?', ['Code', 'Sounds', 'Backdrops'], 'Backdrops', cot=3),
        ab('Sân khấu có 4 hình nền theo thứ tự: 1. Blue Sky → 2. Room 1 → 3. City → 4. Space. Sân khấu đang ở hình nền Blue Sky. '
           'Khi chạy khối lệnh ' + svg(stack('looks', 'next backdrop')) + ' một lần, hình nền sẽ là:',
           ['Blue Sky', 'Room 1', 'City', 'Space'], 'Room 1', cot=4),
        ab('Nhân vật có 5 trang phục và đang ở trang phục 2. Khi chạy khối lệnh ' + svg(stack('looks', 'next costume'))
           + ' một lần, nhân vật sẽ ở trang phục số mấy?', ['Trang phục 1', 'Trang phục 2', 'Trang phục 3', 'Trang phục 5'], 'Trang phục 3', cot=4),
    ]},
])

# ======================= TIẾT 5 =======================
B5 = [(WAIT1, 'Giúp chương trình tạm dừng trong một khoảng thời gian.'),
      (repeat(10), 'Lặp lại các lệnh bên trong theo một số lần nhất định.'),
      (forever(), 'Làm cho các lệnh bên trong lặp lại mãi mãi không dừng.')]
MEO = svg(stack('looks', 'say', T('Chào bạn Gấu!'), 'for', N(2), 'seconds'))
GAU = svg(script(stack('control', 'wait', N('…'), 'seconds'), stack('looks', 'say', T('Chào bạn Mèo!'), 'for', N(2), 'seconds')))
phieu('scratch3-tiet05-hello-friend-lap', 5, 'Dự án 1 Hello Friend – Vòng lặp và chờ đợi', [
    {'loai': 'noidot', 'yc': 'Thử thách kết nối: nối các khối lệnh Scratch ở cột bên trái với chức năng đúng ở cột bên phải.',
     'lc': [B5[2][1], B5[0][1], B5[1][1]], 'cau': [{'text': svg(b), 'da': cn} for b, cn in B5]},
    {'loai': 'go', 'yc': 'Thử thách tính toán: giúp bạn Mèo và bạn Gấu nói chuyện khớp với nhau bằng cách điền số vào ô trống.',
     'cau': [{'text': '<div style="display:flex;flex-wrap:wrap;gap:24px;align-items:flex-start;margin-bottom:6px">'
                      '<div><b>Nhân vật Mèo:</b><br>' + MEO + '</div>'
                      '<div><b>Nhân vật Gấu:</b> để không nói đè lên lời bạn Mèo, Gấu cần phải:<br>' + GAU + '</div></div>'
                      'Số thích hợp điền vào ô <b>wait (…) seconds</b> là: {} giây', 'da': '2'}]},
])

# ======================= TIẾT 7 =======================
EV_SE = ['Events', 'Sensing']
B7 = [(KEY('space'), 'Events'), (boo('sensing', 'key', D('up arrow'), 'pressed?'), 'Sensing'),
      (boo('sensing', 'touching', D('mouse-pointer'), '?'), 'Sensing'), (KEY('down arrow'), 'Events'),
      (boo('sensing', 'touching color', C('#3DDC57'), '?'), 'Sensing')]
B72 = [(KEY('space'), 'Bắt đầu chương trình khi nhấn phím'),
       (boo('sensing', 'key', D('space'), 'pressed?'), 'Kiểm tra xem phím có đang được bấm không'),
       (boo('sensing', 'touching', D('mouse-pointer'), '?'), 'Kiểm tra xem nhân vật có chạm vào đối tượng không')]
phieu('scratch3-tiet07-events-sensing', 7, 'Events & Sensing – Cảm biến và điều khiển bằng bàn phím', [
    {'loai': 'abcd', 'yc': 'Thử thách nhận diện khối lệnh: mỗi khối lệnh sau thuộc nhóm lệnh nào (Events hay Sensing)?', 'cot': 2,
     'cau': [ab(svg(b), EV_SE, d) for b, d in B7]},
    {'loai': 'noidot', 'yc': 'Ai là “bắt đầu” – ai là “kiểm tra”? Nối khối lệnh với chức năng phù hợp.',
     'lc': [B72[1][1], B72[0][1], B72[2][1]], 'cau': [{'text': svg(b), 'da': cn} for b, cn in B72]},
    {'loai': 'nhieu', 'yc': 'Nhà phân tích Scratch: mỗi nội dung sau đúng với nhóm lệnh nào? Chọn tất cả nhóm lệnh đúng.', 'cot': 2, 'cau': [
        ab('Có màu vàng', ['Events (Sự kiện)', 'Sensing (Cảm biến)'], ['Events (Sự kiện)']),
        ab('Có màu xanh nhạt', ['Events (Sự kiện)', 'Sensing (Cảm biến)'], ['Sensing (Cảm biến)']),
        ab('Dùng để bắt đầu hành động', ['Events (Sự kiện)', 'Sensing (Cảm biến)'], ['Events (Sự kiện)']),
        ab('Dùng để kiểm tra điều kiện', ['Events (Sự kiện)', 'Sensing (Cảm biến)'], ['Sensing (Cảm biến)']),
        ab('Có thể dùng với bàn phím', ['Events (Sự kiện)', 'Sensing (Cảm biến)'], ['Events (Sự kiện)', 'Sensing (Cảm biến)']),
        ab('Có dạng khối lục giác', ['Events (Sự kiện)', 'Sensing (Cảm biến)'], ['Sensing (Cảm biến)']),
    ]},
])

# ======================= TIẾT 8 =======================
phieu('scratch3-tiet08-hung-trai-cay-quan-sat', 8, 'Dự án 2 Hứng trái cây – Quan sát trò chơi', [
    {'loai': 'abcd', 'yc': 'Quan sát trò chơi: khoanh tròn vào đáp án đúng.', 'cot': 2, 'cau': [
        ab('Người chơi điều khiển nhân vật nào?', ['Quả táo', 'Giỏ hứng trái cây', 'Hình nền', 'Mặt trời'], 'Giỏ hứng trái cây'),
        ab('Vật gì sẽ rơi từ trên xuống?', ['Trái cây', 'Xe hơi', 'Ngôi nhà', 'Robot'], 'Trái cây'),
        ab('Khi chạm vào trái cây tươi, nhân vật sẽ:', ['Biến mất', 'Nói “Ngon quá!”', 'Bay lên trời', 'Đổi màu sân khấu'], 'Nói “Ngon quá!”'),
        ab('Khi chạm vào trái cây thối, nhân vật sẽ:', ['Nói “Ối ối!”', 'Nhảy múa', 'Biến thành quả táo', 'Không làm gì'], 'Nói “Ối ối!”'),
    ]},
    {'loai': 'abcd', 'yc': 'Ai là nhân vật chính? Khoanh tròn vào đáp án đúng.', 'cot': 2, 'cau': [
        ab('Trong trò chơi “Hứng trái cây”, đâu là nhân vật chính?', ['Quả táo', 'Quả chuối', 'Giỏ hứng trái cây', 'Hình nền'], 'Giỏ hứng trái cây'),
        ab('Đâu là vật thể rơi từ trên xuống?', ['Trái cây', 'Mèo Scratch', 'Sân khấu', 'Đám mây'], 'Trái cây'),
        ab('Đâu là vật cản trong trò chơi?', ['Trái cây tươi', 'Trái cây thối', 'Hình nền', 'Con mèo'], 'Trái cây thối'),
        ab('Sân khấu trong Scratch dùng để:', ['Điều khiển nhân vật', 'Làm hình nền cho trò chơi', 'Xóa nhân vật', 'Tạo âm thanh'], 'Làm hình nền cho trò chơi'),
    ]},
    {'loai': 'abcd', 'yc': 'Chọn sân khấu phù hợp: khoanh tròn vào đáp án đúng.', 'cot': 2, 'cau': [
        ab('Hình nền nào phù hợp nhất cho trò chơi “Hứng trái cây”?', ['Khu vườn trái cây', 'Không gian vũ trụ', 'Đại dương', 'Thành phố ban đêm'], 'Khu vườn trái cây'),
        ab('Vì sao nên chọn hình nền khu vườn?', ['Vì có nhiều cây và trái cây', 'Vì có tàu vũ trụ', 'Vì có cá heo', 'Vì có ô tô'], 'Vì có nhiều cây và trái cây'),
        ab('Hình nền giúp trò chơi:', ['Sinh động hơn', 'Chạy nhanh hơn', 'Xóa nhân vật', 'Tắt âm thanh'], 'Sinh động hơn'),
    ]},
])

# ======================= TIẾT 9 =======================
B9 = [(KEY('right arrow'), 'Nhận biết bàn phím'), (KEY('left arrow'), 'Nhận biết bàn phím'),
      (CX(10), 'Làm nhân vật di chuyển'), (CX(-10), 'Làm nhân vật di chuyển')]
OPT9 = [svg(script(KEY('left arrow'), CX(-10))), svg(script(KEY('right arrow'), CX(10))), svg(CY(10)), svg(WAIT1)]
phieu('scratch3-tiet09-hung-trai-cay-dieu-khien', 9, 'Dự án 2 Hứng trái cây – Điều khiển nhân vật', [
    {'loai': 'abcd', 'yc': 'Khối lệnh nào làm gì? Chọn cột phù hợp với mỗi khối lệnh.', 'cot': 2,
     'cau': [ab(svg(b), ['Nhận biết bàn phím', 'Làm nhân vật di chuyển'], d) for b, d in B9]},
    {'loai': 'noidot', 'yc': 'Sang trái hay sang phải? Nối khối lệnh với hướng di chuyển đúng.',
     'lc': ['Sang phải →', '← Sang trái'], 'cau': [{'text': svg(CX(10)), 'da': 'Sang phải →'}, {'text': svg(CX(-10)), 'da': '← Sang trái'}]},
    {'loai': 'abcd', 'yc': 'Thử thách nhà lập trình.', 'cot': 2, 'cau': [
        ab('Muốn nhân vật đi sang trái khi nhấn phím ←, em cần dùng:', OPT9, OPT9[0])]},
])

# ======================= TIẾT 10 =======================
B10 = [(GOXY_E, 'Đưa nhân vật tới vị trí xác định'), (PICK_E, 'Tạo số/vị trí ngẫu nhiên'), (CY(-10), 'Làm trái cây rơi xuống')]
o1 = [svg(CY(-10)), svg(rep('operators', 'pick random', N(1), 'to', N(240))), svg(WAIT1), svg(stack('looks', 'say', T('Hello!')))]
o2 = [svg(CY(-10)), svg(CX(10)), svg(stack('motion', 'go to x:', N(0), 'y:', N(180))), svg(FLAG)]
phieu('scratch3-tiet10-trai-cay-roi-ngau-nhien', 10, 'Dự án 2 Hứng trái cây – Tạo trái cây rơi ngẫu nhiên', [
    {'loai': 'noidot', 'yc': 'Khối lệnh nào làm gì? Nối khối lệnh với chức năng phù hợp.',
     'lc': [B10[2][1], B10[1][1], B10[0][1]], 'cau': [{'text': svg(b), 'da': cn} for b, cn in B10]},
    {'loai': 'abcd', 'yc': 'Trái cây rơi như thế nào? Khoanh tròn đáp án đúng.', 'cot': 2, 'cau': [
        ab('Khối lệnh nào giúp trái cây xuất hiện ở nhiều vị trí khác nhau?', o1, o1[1]),
        ab('Khối lệnh nào làm trái cây rơi từ trên xuống?', o2, o2[0]),
        ab('Khi trái cây chạm đáy sân khấu, cần làm gì để trò chơi tiếp tục?',
           ['Xóa trái cây', 'Đưa trái cây quay lại phía trên', 'Dừng chương trình', 'Đổi hình nền'], 'Đưa trái cây quay lại phía trên'),
    ]},
    {'loai': 'abcd', 'yc': 'Nhà lập trình nhí: chọn đáp án đúng để hoàn thành ý tưởng sau.', 'cot': 2, 'cau': [
        ab('Muốn trái cây quay lại phía trên sân khấu ở vị trí khác sau khi rơi xuống, em cần dùng lệnh:',
           [svg(PICK_E), svg(GOXY_E), svg(CY(-10)), 'Kết hợp cả A và B'], 'Kết hợp cả A và B', giuThuTu=True)]},
])

# ======================= TIẾT 11 =======================
B11 = [(stack('sound', 'start sound', D('Pop')), 'Phát âm thanh'),
       (stack('looks', 'switch costume to', D('Star')), 'Đổi trang phục nhân vật'),
       (STOP, 'Dừng toàn bộ trò chơi'),
       (if_(boo('sensing', 'touching', D('Apple'), '?')), 'Kiểm tra va chạm')]
o3 = [svg(stack('sound', 'start sound', D('Pop'))), svg(stack('looks', 'switch costume to', D('Star'))), svg(STOP), svg(WAIT1)]
CHUOI = svg(if_(boo('sensing', 'touching', D('Bananas'), '?'), stack('sound', 'start sound', D('Pop')),
                stack('looks', 'say', T('Ngon quá!'), 'for', N(0.1), 'seconds')))
THOI = svg(if_(boo('sensing', 'touching', D('No no'), '?'), stack('sound', 'start sound', D('Drum Boing')),
               stack('looks', 'say', T('Ối thôi!...'), 'for', N(0.5), 'seconds'), STOP))
o33 = [svg(script(stack('sound', 'start sound', D('Pop')), stack('looks', 'switch costume to', D('Star')))), svg(STOP), svg(WAIT1), svg(CY(-10))]
phieu('scratch3-tiet11-phan-hoi-khi-cham', 11, 'Dự án 2 Hứng trái cây – Phản hồi khi chạm trái cây', [
    {'loai': 'noidot', 'yc': 'Khối lệnh nào làm gì? Nối khối lệnh với chức năng phù hợp.',
     'lc': [B11[2][1], B11[0][1], B11[1][1], B11[3][1]], 'cau': [{'text': svg(b), 'da': cn} for b, cn in B11]},
    {'loai': 'abcd', 'yc': 'Thêm âm thanh và trang phục: khoanh tròn đáp án đúng.', 'cot': 2, 'cau': [
        ab('Muốn thêm âm thanh mới cho nhân vật, em cần nhấn nút:', ['Choose a Sound', 'Choose a Costume', 'Delete', 'Upload Sprite'], 'Choose a Sound'),
        ab('Muốn thêm trang phục mới cho nhân vật, em cần nhấn nút:', ['Choose a Sound', 'Choose a Costume', 'Paint Backdrop', 'Stop'], 'Choose a Costume'),
        ab('Khối lệnh nào giúp nhân vật phát ra âm thanh?', o3, o3[0]),
    ]},
    {'loai': 'abcd', 'yc': 'Chuyện gì xảy ra khi chạm? Quan sát đoạn code và khoanh tròn đáp án đúng.', 'cot': 2, 'cau': [
        ab('Khi chạm vào quả chuối (Bananas), nhân vật sẽ:<br>' + CHUOI,
           ['Phát âm thanh và nói “Ngon quá!”', 'Dừng trò chơi', 'Đổi hình nền', 'Biến mất'], 'Phát âm thanh và nói “Ngon quá!”'),
        ab('Khi chạm vào quả thối (No no), điều gì xảy ra?<br>' + THOI,
           ['Nhân vật nhảy lên', 'Trò chơi dừng lại', 'Táo rơi nhanh hơn', 'Không có gì xảy ra'], 'Trò chơi dừng lại'),
        ab('Muốn khi chạm vào trái cây tươi, nhân vật vừa phát âm thanh vừa đổi trang phục, em cần dùng:', o33, o33[0]),
        ab('Khối lệnh ' + svg(STOP) + ' có chức năng gì?',
           ['Làm nhân vật nhảy lên', 'Dừng toàn bộ trò chơi', 'Đổi trang phục nhân vật', 'Phát âm thanh mới'], 'Dừng toàn bộ trò chơi'),
    ]},
])

# ======================= TIẾT 13 =======================
phieu('scratch3-tiet13-me-cung-gioi-thieu', 13, 'Dự án 3 Giải mã mê cung – Giới thiệu dự án', [
    {'loai': 'abcd', 'yc': 'Quan sát trò chơi mê cung mẫu và khoanh tròn đáp án đúng.', 'cot': 2, 'cau': [
        ab('Nhân vật trong trò chơi dùng để:', ['Trang trí sân khấu', 'Di chuyển trong mê cung', 'Vẽ hình nền', 'Phát nhạc'], 'Di chuyển trong mê cung'),
        ab('Mê cung trong trò chơi có chức năng:', ['Làm đường đi và vật cản', 'Đổi trang phục nhân vật', 'Tạo âm thanh', 'Xóa nhân vật'], 'Làm đường đi và vật cản'),
        ab('Điểm đích trong mê cung dùng để:', ['Bắt đầu trò chơi', 'Kết thúc trò chơi/chiến thắng', 'Đổi màu nhân vật', 'Tạo âm thanh'], 'Kết thúc trò chơi/chiến thắng'),
    ]},
    {'loai': 'noidot', 'yc': 'Ai là ai? Nối thành phần của trò chơi mê cung với chức năng phù hợp.',
     'lc': ['Nơi bắt đầu trò chơi', 'Điều khiển di chuyển', 'Nơi chiến thắng', 'Vật cản cần tránh'],
     'cau': [{'text': 'Nhân vật', 'da': 'Điều khiển di chuyển'}, {'text': 'Điểm bắt đầu', 'da': 'Nơi bắt đầu trò chơi'},
             {'text': 'Điểm đích', 'da': 'Nơi chiến thắng'}, {'text': 'Tường mê cung', 'da': 'Vật cản cần tránh'}]},
])

# ======================= TIẾT 14 =======================
NV, VC = 'Điều khiển nhân vật', 'Điều khiển vật cản'
B14 = [(KEY('right arrow'), NV), (CX(10), NV), (CY(-10), NV),
       (stack('motion', 'glide', N(1), 'secs to x:', N(0), 'y:', N(0)), VC),
       (stack('motion', 'glide', N(1), 'secs to', D('random position')), VC)]
B142 = [(KEY('up arrow'), CY(10)), (KEY('left arrow'), CX(-10)), (KEY('right arrow'), CX(10))]
lc142 = [svg(CX(10)), svg(CY(10)), svg(CX(-10))]
phieu('scratch3-tiet14-me-cung-di-chuyen', 14, 'Dự án 3 Giải mã mê cung – Nhân vật di chuyển trong mê cung', [
    {'loai': 'abcd', 'yc': 'Ai điều khiển ai? Chọn cột phù hợp với mỗi khối lệnh.', 'cot': 2,
     'cau': [ab(svg(b), [NV, VC], d) for b, d in B14]},
    {'loai': 'noidot', 'yc': 'Khối lệnh nào đi cùng nhau? Nối các khối lệnh để tạo điều khiển đúng. <i>(Gợi ý: x – trái/phải; y – lên/xuống)</i>',
     'lc': lc142, 'cau': [{'text': svg(a), 'da': svg(b)} for a, b in B142]},
    {'loai': 'abcd', 'yc': 'Chuyện gì xảy ra? Khoanh tròn đáp án đúng.', 'cot': 2, 'cau': [
        ab('Khối lệnh nào giúp nhân vật đi sang phải?', ['change x by (10)', 'change x by (-10)', 'change y by (10)', 'glide to random position'], 'change x by (10)'),
        ab('Khối lệnh nào thường dùng cho vật cản chuyển động qua lại?', ['glide (1) secs to x: () y: ()', 'say [Hello!]', 'switch costume to', 'stop all'], 'glide (1) secs to x: () y: ()'),
        ab('Muốn vật cản di chuyển liên tục mãi mãi, em cần dùng thêm lệnh:', ['wait (1) seconds', 'forever', 'say [Hi!]', 'hide'], 'forever'),
    ]},
    {'loai': 'abcd', 'yc': 'Nhà lập trình nhí: khoanh tròn đáp án đúng.', 'cot': 1, 'cau': [
        ab('Trong trò chơi mê cung, nhân vật chính thường dùng khối lệnh nào để điều khiển bằng bàn phím?',
           ['when key pressed + change x/y by', 'glide to random position', 'switch backdrop to', 'stop all'], 'when key pressed + change x/y by'),
        ab('Vật cản trong mê cung phù hợp nhất với kiểu chuyển động nào?',
           ['Đứng yên hoàn toàn', 'Di chuyển qua lại giữa hai điểm', 'Di chuyển ngẫu nhiên', 'Chỉ đổi màu'], 'Di chuyển qua lại giữa hai điểm'),
    ]},
])

# ======================= TIẾT 15 =======================
TIM = '#7B4FC9'
B15 = [(boo('sensing', 'touching color', C(TIM), '?'), 'Kiểm tra nhân vật có chạm màu không'),
       (ifelse(None, [], []), 'Nếu đúng thì làm việc này, nếu không thì làm việc khác'),
       (GOXY, 'Đưa nhân vật về vị trí ban đầu'),
       (boo('sensing', 'touching', D('Sprite1'), '?'), 'Kiểm tra nhân vật có chạm vật cản không')]
o151 = ['say [Hello!]', svg(boo('sensing', 'touching color', C(TIM), '?')), svg(WAIT1), svg(stack('looks', 'next costume'))]
o154 = [svg(GOXY), 'hide', 'next backdrop', 'play sound']
phieu('scratch3-tiet15-me-cung-cham-mau', 15, 'Dự án 3 Giải mã mê cung – Cảm biến chạm màu & If – Then – Else', [
    {'loai': 'noidot', 'yc': 'Khối lệnh nào đi cùng nhau? Nối các khối lệnh ở cột bên trái với chức năng phù hợp ở cột bên phải.',
     'lc': [B15[1][1], B15[2][1], B15[0][1], B15[3][1]], 'cau': [{'text': svg(b), 'da': cn} for b, cn in B15]},
    {'loai': 'abcd', 'yc': 'Nếu… thì… còn không thì? Khoanh tròn đáp án đúng.', 'cot': 2, 'cau': [
        ab('Nếu nhân vật chạm màu tường mê cung thì:', ['Tiếp tục đi tiếp', 'Quay về vị trí bắt đầu', 'Biến mất', 'Đổi hình nền'], 'Quay về vị trí bắt đầu'),
        ab('Nếu nhân vật KHÔNG chạm tường thì:', ['Tiếp tục di chuyển', 'Quay về đầu', 'Dừng trò chơi', 'Ẩn nhân vật'], 'Tiếp tục di chuyển'),
        ab('Khối lệnh nào giúp xử lí: nếu chạm → làm việc này; nếu không chạm → làm việc khác?', ['repeat', 'if then else', 'wait', 'say'], 'if then else', cot=4),
    ]},
    {'loai': 'abcd', 'yc': 'Chuyện gì xảy ra? Khoanh tròn đáp án đúng.', 'cot': 2, 'cau': [
        ab('Khối lệnh nào giúp kiểm tra nhân vật có chạm màu không?', o151, o151[1]),
        ab('Trong trò chơi mê cung, khi nhân vật chạm tường thường sẽ:', ['Được cộng điểm', 'Quay về vị trí xuất phát', 'Bay lên trên', 'Đổi màu sân khấu'], 'Quay về vị trí xuất phát'),
    ]},
    {'loai': 'abcd', 'yc': 'Nhà lập trình nhí: khoanh tròn đáp án đúng.', 'cot': 2, 'cau': [
        ab('Để nhân vật quay về điểm bắt đầu khi chạm tường, em nên dùng:', o154, o154[0]),
        ab('Khối lệnh nào phù hợp nhất để xử lí hai trường hợp: chạm tường – không chạm tường?', ['repeat', 'if then else', 'wait', 'say'], 'if then else', cot=4),
    ]},
])
