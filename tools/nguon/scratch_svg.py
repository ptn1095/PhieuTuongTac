"""Vẽ khối lệnh Scratch 3.0 thành SVG nội tuyến (dùng trong config.json của phiếu).

Hình học theo scratch-blocks (khối lệnh cao 48, khấc 36x8, góc bo 4, khối C tay 16),
màu theo nhóm lệnh của Scratch 3.0. Chữ đo bằng phông Liberation Sans (cùng số đo Arial).

Cách dùng:
    from scratch_svg import *
    svg(stack('motion', 'move', N(10), 'steps'))
    svg(script(hat('events','when',I('flag'),'clicked'), stack('looks','say',T('Hello!'))))
"""
from PIL import ImageFont

_F = ImageFont.truetype('/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf', 16)
FONT = "font-family:Arial,'Liberation Sans',Helvetica,sans-serif;font-size:16px"

MAU = {  # chính, phụ (ô thả xuống), viền
    'motion': ('#4C97FF', '#4280D7', '#3373CC'),
    'looks': ('#9966FF', '#855CD6', '#774DCB'),
    'sound': ('#CF63CF', '#C94FC9', '#BD42BD'),
    'events': ('#FFBF00', '#E6AC00', '#CC9900'),
    'control': ('#FFAB19', '#EC9C13', '#CF8B17'),
    'sensing': ('#5CB1D6', '#47A8D1', '#2E8EB8'),
    'operators': ('#59C059', '#46B946', '#389438'),
    'variables': ('#FF8C1A', '#FF8000', '#DB6E00'),
    'pen': ('#0FBD8C', '#0DA57A', '#0B8E69'),
}
NOTCH_L = 'c 2,0 3,1 4,2 l 4,4 c 1,1 2,2 4,2 h 12 c 2,0 3,-1 4,-2 l 4,-4 c 1,-1 2,-2 4,-2'
NOTCH_R = 'c -2,0 -3,1 -4,2 l -4,4 c -1,1 -2,2 -4,2 h -12 c -2,0 -3,-1 -4,-2 l -4,-4 c -1,-1 -2,-2 -4,-2'


def tw(s):
    return _F.getlength(str(s)) * 1.03


def xe(s):
    return str(s).replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')


def _text(x, y, s, fill='#FFFFFF'):
    return f'<text x="{x:.1f}" y="{y:.1f}" dominant-baseline="central" fill="{fill}" style="{FONT}">{xe(s)}</text>'


class N:  # ô số / ô chữ trắng bo tròn
    def __init__(self, v=''):
        self.v = '' if v is None else str(v)

    def size(self, cat):
        return max(40, tw(self.v) + 24), 32

    def draw(self, cat, x, cy):
        w, h = self.size(cat)
        s = f'<rect x="{x:.1f}" y="{cy-16:.1f}" width="{w:.1f}" height="32" rx="16" fill="#FFFFFF" stroke="rgba(0,0,0,.15)"/>'
        if self.v:
            s += f'<text x="{x+w/2:.1f}" y="{cy:.1f}" dominant-baseline="central" text-anchor="middle" fill="#575E75" style="{FONT}">{xe(self.v)}</text>'
        return s


T = N  # ô chữ trông như ô số trong Scratch 3


class D:  # ô thả xuống (menu) cùng màu nhóm, đậm hơn
    def __init__(self, v):
        self.v = str(v)

    def size(self, cat):
        return tw(self.v) + 44, 32

    def draw(self, cat, x, cy):
        w, h = self.size(cat)
        p, s2, t = MAU[cat]
        a = x + w - 22
        return (f'<rect x="{x:.1f}" y="{cy-16:.1f}" width="{w:.1f}" height="32" rx="16" fill="{s2}" stroke="{t}"/>'
                + _text(x + 12, cy, self.v)
                + f'<path d="M{a:.1f},{cy-3:.1f} l5,6 l5,-6" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>')


F = D


class BS:  # ô điều kiện (lục giác) còn trống
    def size(self, cat):
        return 48, 32

    def draw(self, cat, x, cy):
        t = MAU[cat][2]
        return f'<path d="M{x+16:.1f},{cy-16:.1f} h16 l16,16 l-16,16 h-16 l-16,-16 z" fill="{t}" opacity=".55"/>'


class C:  # ô màu
    def __init__(self, col):
        self.col = col

    def size(self, cat):
        return 40, 32

    def draw(self, cat, x, cy):
        return f'<rect x="{x:.1f}" y="{cy-16:.1f}" width="40" height="32" rx="16" fill="{self.col}" stroke="#FFFFFF" stroke-width="2"/>'


class I:  # biểu tượng: flag, cw, ccw
    def __init__(self, k):
        self.k = k

    def size(self, cat):
        return 24, 24

    def draw(self, cat, x, cy):
        if self.k == 'flag':
            return (f'<g transform="translate({x:.1f},{cy-12:.1f})">'
                    '<path d="M4,2 V23" stroke="#45993D" stroke-width="2.4" stroke-linecap="round"/>'
                    '<path d="M5,3 C9,0 13,6 21,3 V14 C13,17 9,11 5,14 Z" fill="#4CBF56" stroke="#45993D" stroke-width="1.2" stroke-linejoin="round"/></g>')
        ch = '↻' if self.k == 'cw' else '↺'
        return f'<text x="{x+12:.1f}" y="{cy+1:.1f}" dominant-baseline="central" text-anchor="middle" fill="#FFFFFF" style="font-family:Arial,sans-serif;font-size:22px;font-weight:bold">{ch}</text>'


def _row(cat, items, x0):
    """Đo và vẽ một hàng nội dung. Trả về (rộng tới hết item cuối, cao lớn nhất, hàm vẽ(cy))."""
    parts, x, hmax = [], x0, 0
    for i, it in enumerate(items):
        if i:
            x += 8
        if isinstance(it, str):
            w, h = tw(it), 16
        else:
            w, h = it.size(cat)
        parts.append((x, it, w, h))
        x += w
        hmax = max(hmax, h)

    def draw(cy):
        out = []
        for (px, it, w, h) in parts:
            out.append(_text(px, cy, it) if isinstance(it, str) else it.draw(cat, px, cy))
        return ''.join(out)
    return x, hmax, draw


class Rep:  # khối báo cáo (bo tròn) hoặc điều kiện (lục giác), lồng được vào ô
    def __init__(self, cat, *items, boolean=False):
        self.cat, self.items, self.boo = cat, items, boolean

    def _lay(self):
        first_text = isinstance(self.items[0], str)
        x, hmax, draw = _row(self.cat, self.items, 0)
        h = max(40, hmax + 8)
        pad = (h / 2 if first_text else 12) if self.boo else (12 if first_text else 4)
        _, _, draw = _row(self.cat, self.items, pad)
        return x + 2 * pad, h, draw

    def size(self, cat=None):
        w, h, _ = self._lay()
        return w, h

    def draw(self, cat, x, cy):
        w, h, draw = self._lay()
        p, s2, t = MAU[self.cat]
        if self.boo:
            r = h / 2
            shape = f'<path d="M{r},0 H{w-r} L{w},{r} L{w-r},{h} H{r} L0,{r} Z" fill="{p}" stroke="{t}"/>'
        else:
            shape = f'<rect x="0" y="0" width="{w:.1f}" height="{h}" rx="{h/2}" fill="{p}" stroke="{t}"/>'
        return f'<g transform="translate({x:.1f},{cy-h/2:.1f})">{shape}{draw(h/2)}</g>'


def rep(cat, *items):
    return Rep(cat, *items)


def boo(cat, *items):
    return Rep(cat, *items, boolean=True)


class Stack:
    """Khối lệnh ghép dọc. kind: stack | hat | cap | c (repeat/if: inner, foot) | ce (if-else)."""

    def __init__(self, cat, items, kind='stack', inner=None, inner2=None, loop=False, end=False):
        self.cat, self.items, self.kind = cat, items, kind
        self.inner, self.inner2, self.loop, self.end = inner or [], inner2 or [], loop, end

    def _top(self):
        x, hmax, draw = _row(self.cat, self.items, 8)
        h = max(48, hmax + 16)
        return x + 8, h, draw

    @staticmethod
    def _inner_h(blocks):
        return max(24, sum(b.height() for b in blocks))

    def width(self):
        w, _, _ = self._top()
        mn = {'hat': 100, 'c': 160, 'ce': 160}.get(self.kind, 64)
        return max(w, mn)

    def height(self):  # chiều cao không tính khấc lồi dưới
        _, h, _ = self._top()
        hat = 20 if self.kind == 'hat' else 0
        if self.kind == 'c':
            return hat + h + self._inner_h(self.inner) + (32 if self.loop else 24)
        if self.kind == 'ce':
            return h + self._inner_h(self.inner) + 48 + self._inner_h(self.inner2) + 24
        return hat + h

    def draw(self, x0, y0):
        p, s2, t = MAU[self.cat]
        W = self.width()
        _, h, drawrow = self._top()
        out = []
        if self.kind == 'hat':
            y = y0 + 20
            d = f'M0,{y} c 25,-22 71,-22 96,0 H{W-4} a4,4 0 0 1 4,4 V{y+h-4} a4,4 0 0 1 -4,4 H{16+36} {NOTCH_R} H4 a4,4 0 0 1 -4,-4 Z'
            out.append(f'<path d="{d}" transform="translate({x0},0)" fill="{p}" stroke="{t}"/>')
            out.append(f'<g transform="translate({x0},{y})">{drawrow(h/2)}</g>')
            return ''.join(out)
        top = f'M0,{y0+4} a4,4 0 0 1 4,-4 H16 {NOTCH_L} H{W-4} a4,4 0 0 1 4,4'
        if self.kind in ('stack', 'cap'):
            bottom = (f'H{16+36} {NOTCH_R} H4' if self.kind == 'stack' else 'H4')
            d = f'{top} V{y0+h-4} a4,4 0 0 1 -4,4 {bottom} a4,4 0 0 1 -4,-4 Z'
            out.append(f'<path d="{d}" transform="translate({x0},0)" fill="{p}" stroke="{t}"/>')
            out.append(f'<g transform="translate({x0},{y0})">{drawrow(h/2)}</g>')
            return ''.join(out)

        def arm(yb, inner):  # cạnh dưới tay trên ở yb, vẽ khoang trong; trả về path + y đáy khoang
            ih = self._inner_h(inner)
            seg = (f'V{yb-4} a4,4 0 0 1 -4,4 H{16+16+36} {NOTCH_R} H20 a4,4 0 0 0 -4,4 '
                   f'V{yb+ih-4} a4,4 0 0 0 4,4 H32 {NOTCH_L} H{W-4} a4,4 0 0 1 4,4 ')
            return seg, yb + ih
        segs, yb = [], y0 + h
        s1, yi = arm(yb, self.inner)
        segs.append(s1)
        inners = [(self.inner, yb)]
        rows = [(drawrow, y0, h)]
        if self.kind == 'ce':
            _, _, dr_else = _row(self.cat, ['else'], 8)
            rows.append((dr_else, yi, 48))
            s2_, yi2 = arm(yi + 48, self.inner2)
            segs.append(s2_)
            inners.append((self.inner2, yi + 48))
            yi = yi2
        foot = 32 if self.loop else 24
        yend = yi + foot
        bottom = 'H4' if self.end else f'H{16+36} {NOTCH_R} H4'
        d = f'{top} ' + ''.join(segs) + f'V{yend-4} a4,4 0 0 1 -4,4 {bottom} a4,4 0 0 1 -4,-4 Z'
        out.append(f'<path d="{d}" transform="translate({x0},0)" fill="{p}" stroke="{t}"/>')
        for dr, yy, hh in rows:
            out.append(f'<g transform="translate({x0},{yy})">{dr(hh/2)}</g>')
        if self.loop:
            out.append(f'<text x="{x0+W-20}" y="{yend-15}" dominant-baseline="central" text-anchor="middle" fill="#FFFFFF" style="font-family:Arial,sans-serif;font-size:20px;font-weight:bold">↻</text>')
        for blocks, yy in inners:
            for b in blocks:
                out.append(b.draw(x0 + 16, yy))
                yy += b.height()
        return ''.join(out)

    def full_width(self):
        w = self.width()
        for b in self.inner + self.inner2:
            w = max(w, 16 + b.full_width())
        return w


def stack(cat, *items):
    return Stack(cat, items)


def hat(cat, *items):
    return Stack(cat, items, 'hat')


def cap(cat, *items):
    return Stack(cat, items, 'cap')


def repeat(n, *inner):
    return Stack('control', ('repeat', N(n)), 'c', list(inner), loop=True)


def forever(*inner):
    return Stack('control', ('forever',), 'c', list(inner), loop=True, end=True)


def if_(cond, *inner):
    return Stack('control', ('if', cond or BS(), 'then'), 'c', list(inner))


def ifelse(cond, inner, inner2):
    return Stack('control', ('if', cond or BS(), 'then'), 'ce', list(inner), list(inner2))


def script(*blocks):
    return list(blocks)


def svg(obj, scale=0.78, style='vertical-align:middle;max-width:none'):
    """SVG một dòng (không xuống dòng, không khoảng trắng đôi) để dùng làm giá trị ô chọn."""
    if isinstance(obj, Rep):
        w, h = obj.size()
        body, W, H, top = obj.draw(None, 1, h / 2 + 1), w + 2, h + 2, 0
    else:
        blocks = obj if isinstance(obj, list) else [obj]
        top = 20 if blocks[0].kind == 'hat' else 0
        body, y, W = '', 1, 0
        for b in blocks:
            body += b.draw(1, y)
            y += b.height()
            W = max(W, b.full_width() + 2)
        last = blocks[-1]
        H = y + (9 if last.kind in ('stack', 'hat') or (last.kind in ('c', 'ce') and not last.end) else 1)
    s = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{W*scale:.0f}" height="{H*scale:.0f}" '
         f'viewBox="0 0 {W:.1f} {H:.1f}" style="{style}" role="img">{body}</svg>')
    return ' '.join(s.split())
