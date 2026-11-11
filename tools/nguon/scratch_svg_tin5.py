# Vẽ khối lệnh Scratch 3 đơn giản thành SVG inline (dùng trong config.json của phiếu).
# Tên lệnh giữ tiếng Anh như Scratch; màu theo nhóm lệnh của Scratch 3.
from html import escape

MAU = {  # (màu nền, màu viền)
    'motion': ('#4C97FF', '#3373CC'), 'looks': ('#9966FF', '#774DCB'), 'sound': ('#CF63CF', '#BD42BD'),
    'events': ('#FFBF00', '#CC9900'), 'control': ('#FFAB19', '#CF8B17'), 'sensing': ('#5CB1D6', '#2E8EB8'),
    'operators': ('#59C059', '#389438'), 'variables': ('#FF8C1A', '#DB6E00'), 'pen': ('#0FBD8C', '#0B8E69'),
}
FONT = 'font-family="Arial,Helvetica,sans-serif" font-size="12"'
CW = 6.7  # bề rộng ước tính 1 ký tự


def tw(s):
    return len(s) * CW


# ---- phần tử bên trong một khối ----
# chuỗi: chữ trắng; N(x): ô số/chữ trắng; R(text, nhom): báo cáo (biến...); B(parts, nhom): lục giác;
# DD(text, nhom): ô thả xuống; FLAG: lá cờ xanh
class N:
    def __init__(s, v): s.v = str(v)
class R:
    def __init__(s, parts, nhom='variables'): s.parts = parts if isinstance(parts, list) else [parts]; s.nhom = nhom
class B:
    def __init__(s, parts, nhom='operators'): s.parts = parts if isinstance(parts, list) else [parts]; s.nhom = nhom
class DD:
    def __init__(s, v, nhom): s.v = v; s.nhom = nhom
FLAG = object()


def kich_thuoc(p):
    """trả (rộng, cao) của một phần tử."""
    if isinstance(p, str):
        return tw(p), 14
    if p is FLAG:
        return 18, 16
    if isinstance(p, N):
        return max(24, tw(p.v) + 14), 22
    if isinstance(p, DD):
        return tw(p.v) + 26, 22
    if isinstance(p, (R, B)):
        w, h = dong(p.parts)
        pad = 10 if isinstance(p, R) else 14
        return w + 2 * pad, max(22, h + 6)
    raise ValueError(p)


def dong(parts):
    ws = [kich_thuoc(p) for p in parts]
    return sum(w for w, _ in ws) + 5 * (len(parts) - 1), max([h for _, h in ws] + [14])


def ve_parts(parts, x, ymid, nhom):
    out = []
    for p in parts:
        w, h = kich_thuoc(p)
        if isinstance(p, str):
            out.append(f'<text x="{x:.1f}" y="{ymid + 4:.1f}" fill="#fff" {FONT}>{escape(p)}</text>')
        elif p is FLAG:
            out.append(f'<path d="M{x+3:.1f},{ymid+7:.1f} L{x+3:.1f},{ymid-7:.1f} Q{x+8:.1f},{ymid-10:.1f} {x+12:.1f},{ymid-6:.1f} Q{x+15:.1f},{ymid-3:.1f} {x+17:.1f},{ymid-6:.1f} L{x+17:.1f},{ymid+1:.1f} Q{x+14:.1f},{ymid+4:.1f} {x+11:.1f},{ymid+1:.1f} Q{x+7:.1f},{ymid-2:.1f} {x+3:.1f},{ymid+1:.1f}" fill="#4CBF56" stroke="#45993D" stroke-width="1"/>')
        elif isinstance(p, N):
            out.append(f'<rect x="{x:.1f}" y="{ymid - h/2:.1f}" width="{w:.1f}" height="{h}" rx="{h/2}" fill="#fff" stroke="{MAU[nhom][1]}" stroke-width="0.8"/>'
                       f'<text x="{x + w/2:.1f}" y="{ymid + 4:.1f}" text-anchor="middle" fill="#575E75" {FONT}>{escape(p.v)}</text>')
        elif isinstance(p, DD):
            f, s = MAU[p.nhom]
            out.append(f'<rect x="{x:.1f}" y="{ymid - h/2:.1f}" width="{w:.1f}" height="{h}" rx="4" fill="{s}" stroke="{s}"/>'
                       f'<text x="{x + 7:.1f}" y="{ymid + 4:.1f}" fill="#fff" {FONT}>{escape(p.v)} ▾</text>')
        elif isinstance(p, R):
            f, s = MAU[p.nhom]
            out.append(f'<rect x="{x:.1f}" y="{ymid - h/2:.1f}" width="{w:.1f}" height="{h}" rx="{h/2}" fill="{f}" stroke="{s}"/>')
            out.extend(ve_parts(p.parts, x + 10, ymid, p.nhom))
        elif isinstance(p, B):
            f, s = MAU[p.nhom]
            if p.parts == ['']:  # ô điều kiện còn trống: lục giác sẫm theo màu khối chứa nó
                f = s = MAU[nhom][1]
            hh = h / 2
            out.append(f'<path d="M{x:.1f},{ymid:.1f} L{x+hh:.1f},{ymid-hh:.1f} L{x+w-hh:.1f},{ymid-hh:.1f} L{x+w:.1f},{ymid:.1f} L{x+w-hh:.1f},{ymid+hh:.1f} L{x+hh:.1f},{ymid+hh:.1f} Z" fill="{f}" stroke="{s}"/>')
            out.extend(ve_parts(p.parts, x + 14, ymid, p.nhom))
        x += w + 5
    return out


def notch(x, y, inv=False):
    # đầu nối phía trên (lõm xuống) đọc từ trái sang phải
    d = 5
    return f'L{x+10:.1f},{y:.1f} L{x+15:.1f},{y+d:.1f} L{x+27:.1f},{y+d:.1f} L{x+32:.1f},{y:.1f} '


def notch_r(x, y):
    d = 5
    return f'L{x+32:.1f},{y:.1f} L{x+27:.1f},{y+d:.1f} L{x+15:.1f},{y+d:.1f} L{x+10:.1f},{y:.1f} '


# ---- khối ----
class Lenh:
    def __init__(s, nhom, parts, hat=False, cap=False):
        s.nhom = nhom; s.parts = parts; s.hat = hat; s.cap = cap


class C:
    def __init__(s, nhom, parts, con, khac=None, cap=False, nhan_khac='else'):
        s.nhom = nhom; s.parts = parts; s.con = con; s.khac = khac; s.cap = cap; s.nhan_khac = nhan_khac


def cao_dong(parts):
    return max(34, dong(parts)[1] + 14)


def ve_ngan(ds, x, y):
    """vẽ một dãy khối, trả (svg_list, cao, rộng)."""
    out, y0, wmax = [], y, 0
    for k in ds:
        o, h, w = ve_khoi(k, x, y)
        out += o; y += h; wmax = max(wmax, w)
    return out, y - y0, wmax


def ve_khoi(k, x, y):
    f, s = MAU[k.nhom]
    if isinstance(k, Lenh):
        wd, _ = dong(k.parts)
        w = max(wd + 20, 60 if not k.hat else 100)
        h = cao_dong(k.parts)
        if k.hat:
            top = 14
            d = (f'M{x},{y+top} C{x+20},{y-4} {x+60},{y-4} {x+80},{y+top-4} L{x+w-4},{y+top-4} Q{x+w},{y+top-4} {x+w},{y+top} '
                 f'L{x+w},{y+top+h-4} Q{x+w},{y+top+h} {x+w-4},{y+top+h} ' + notch_r(x, y + top + h) + f'L{x},{y+top+h} Z')
            out = [f'<path d="{d}" fill="{f}" stroke="{s}"/>'] + ve_parts(k.parts, x + 10, y + top + h / 2, k.nhom)
            return out, top + h, w
        bot = '' if k.cap else notch_r(x, y + h)
        d = (f'M{x},{y+4} Q{x},{y} {x+4},{y} ' + notch(x, y) + f'L{x+w-4},{y} Q{x+w},{y} {x+w},{y+4} '
             f'L{x+w},{y+h-4} Q{x+w},{y+h} {x+w-4},{y+h} ' + bot + f'L{x+4},{y+h} Q{x},{y+h} {x},{y+h-4} Z')
        return [f'<path d="{d}" fill="{f}" stroke="{s}"/>'] + ve_parts(k.parts, x + 10, y + h / 2, k.nhom), h, w
    # khối chữ C
    I = 16
    a = cao_dong(k.parts)
    o1, h1, w1 = ve_ngan(k.con, x + I, y + a)
    h1 = max(h1, 20)
    wd, _ = dong(k.parts)
    w = max(wd + 20, 100)
    m_out, h2, w2 = [], 0, 0
    mid = 24
    if k.khac is not None:
        o2, h2, w2 = ve_ngan(k.khac, x + I, y + a + h1 + mid)
        h2 = max(h2, 20); m_out = o2
    b = 22
    seg = lambda yt: (f'L{x+I+32},{yt} L{x+I+27},{yt+5} L{x+I+15},{yt+5} L{x+I+10},{yt} L{x+I+4},{yt} Q{x+I},{yt} {x+I},{yt+4} ')
    d = f'M{x},{y+4} Q{x},{y} {x+4},{y} ' + notch(x, y) + f'L{x+w-4},{y} Q{x+w},{y} {x+w},{y+4} L{x+w},{y+a-4} Q{x+w},{y+a} {x+w-4},{y+a} ' + seg(y + a)
    yb = y + a + h1
    d += f'L{x+I},{yb-4} Q{x+I},{yb} {x+I+4},{yb} '
    if k.khac is not None:
        d += f'L{x+w-4},{yb} Q{x+w},{yb} {x+w},{yb+4} L{x+w},{yb+mid-4} Q{x+w},{yb+mid} {x+w-4},{yb+mid} ' + seg(yb + mid)
        yb = yb + mid + h2
        d += f'L{x+I},{yb-4} Q{x+I},{yb} {x+I+4},{yb} '
    d += f'L{x+w-4},{yb} Q{x+w},{yb} {x+w},{yb+4} L{x+w},{yb+b-4} Q{x+w},{yb+b} {x+w-4},{yb+b} '
    d += ('' if k.cap else notch_r(x, yb + b)) + f'L{x+4},{yb+b} Q{x},{yb+b} {x},{yb+b-4} Z'
    out = [f'<path d="{d}" fill="{f}" stroke="{s}"/>'] + ve_parts(k.parts, x + 10, y + a / 2, k.nhom) + o1 + m_out
    if k.khac is not None:
        ym = y + a + h1 + mid / 2
        out.append(f'<text x="{x+10}" y="{ym+4}" fill="#fff" {FONT}>{escape(k.nhan_khac)}</text>')
    tong = yb + b - y
    return out, tong, max(w, I + w1, I + w2)


def svg(ds, scale=1.0):
    if not isinstance(ds, list):
        ds = [ds]
    o, h, w = ve_ngan(ds, 2, 4 if not (isinstance(ds[0], Lenh) and ds[0].hat) else 6)
    W, H = w + 6, h + 14
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{W*scale:.0f}" height="{H*scale:.0f}" viewBox="0 0 {W:.0f} {H:.0f}" '
            f'style="vertical-align:middle;max-width:100%">' + ''.join(o) + '</svg>')


def svg_bao_cao(p, scale=1.0):
    """vẽ riêng một khối báo cáo / lục giác."""
    w, h = kich_thuoc(p)
    o = ve_parts([p], 2, h / 2 + 2, getattr(p, 'nhom', 'operators'))
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{(w+4)*scale:.0f}" height="{(h+4)*scale:.0f}" viewBox="0 0 {w+4:.0f} {h+4:.0f}" '
            f'style="vertical-align:middle;max-width:100%">' + ''.join(o) + '</svg>')


# ---- lối tắt hay dùng ----
def co_xanh(): return Lenh('events', ['when', FLAG, 'clicked'], hat=True)
def khi_phim(k): return Lenh('events', ['when', DD(k, 'events'), 'key pressed'], hat=True)
def noi(t, giay=None):
    return Lenh('looks', ['say', N(t) if isinstance(t, (str, int, float)) else t] + (['for', N(giay), 'seconds'] if giay is not None else []))
def di(n): return Lenh('motion', ['move', N(n), 'steps'])
def quay_phai(d): return Lenh('motion', ['turn ↻', N(d), 'degrees'])
def toi(x, y): return Lenh('motion', ['go to x:', N(x), 'y:', N(y)])
def doi(g): return Lenh('control', ['wait', N(g), 'seconds'])
def lap(n, con): return C('control', ['repeat', N(n)], con)
def mai(con): return C('control', ['forever'], con, cap=True)
def lap_den(dk, con): return C('control', ['repeat until', dk], con)
def neu(dk, con): return C('control', ['if', dk, 'then'], con)
def neu_khac(dk, con, khac): return C('control', ['if', dk, 'then'], con, khac)
def bien(t): return R(t, 'variables')
def dat(b, v): return Lenh('variables', ['set', DD(b, 'variables'), 'to', v if not isinstance(v, (str, int, float)) else N(v)])
def tang(b, v): return Lenh('variables', ['change', DD(b, 'variables'), 'by', v if not isinstance(v, (str, int, float)) else N(v)])
def hoi(t): return Lenh('sensing', ['ask', N(t), 'and wait'])
TRA_LOI = R('answer', 'sensing')
def op(a, dau, b):
    a = a if not isinstance(a, (str, int, float)) else N(a)
    b = b if not isinstance(b, (str, int, float)) else N(b)
    return R([a, dau, b], 'operators')
def ss(a, dau, b):
    a = a if not isinstance(a, (str, int, float)) else N(a)
    b = b if not isinstance(b, (str, int, float)) else N(b)
    return B([a, dau, b], 'operators')
def ghep(a, b):
    a = a if not isinstance(a, (str, int, float)) else N(a)
    b = b if not isinstance(b, (str, int, float)) else N(b)
    return R(['join', a, b], 'operators')


def img(svg_str):
    """bọc SVG thành <img> (dùng trong ô nối chấm, nơi CSS của trang chiếm thẻ <svg>)."""
    import base64, re as _re
    m = _re.search(r'width="(\d+)" height="(\d+)"', svg_str)
    w, h = m.groups()
    b64 = base64.b64encode(svg_str.encode('utf-8')).decode()
    return f'<img src="data:image/svg+xml;base64,{b64}" width="{w}" height="{h}" alt="khối lệnh" style="vertical-align:middle;max-width:100%;height:auto">'
