"""Dựng lại toàn bộ phiếu và danh sách phiếu.

Chạy từ thư mục gốc repo:  python3 tools/build_phieu.py

- Mỗi phiếu là một thư mục phieu/<ten-thu-muc>/ có config.json.
- Script ghép config.json vào tools/engine.html -> phieu/<ten-thu-muc>/index.html
- Cập nhật phieu.json (danh sách phiếu trên trang chủ) và bảng trong README.md.
"""
import glob
import json
import os
import re

GOC = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEN_KHOI = {"khoi-3": "Khối 3", "khoi-5": "Khối 5", "khoi-9": "Khối 9", "doi-tuyen": "Đội Tuyển"}


def doc_json(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def ghi(path, text):
    with open(path, "w", encoding="utf-8") as f:
        f.write(text)


def kiem_tra(slug, P):
    """Bắt các lỗi hay gặp trước khi đăng."""
    w = P.get("web") or {}
    khoi = w.get("khoi") if isinstance(w.get("khoi"), list) else [w.get("khoi")]
    assert khoi and all(k in TEN_KHOI for k in khoi), f"{slug}: web.khoi phải là một (hoặc danh sách) trong {list(TEN_KHOI)}"
    assert re.fullmatch(r"\d{4}-\d{2}-\d{2}", w.get("ngay", "")), f"{slug}: web.ngay phải dạng YYYY-MM-DD"
    assert P.get("lop"), f"{slug}: thiếu danh sách lớp"
    assert P.get("guiB") or P.get("guiA"), f"{slug}: thiếu nơi nhận điểm (guiB hoặc guiA)"
    for i, b in enumerate(P["bai"], 1):
        for j, c in enumerate(b["cau"], 1):
            lc = c.get("lc") or b.get("lc") or []
            if b["loai"] == "ds":
                lc = ["Đ", "S"]
            if b["loai"] == "thutu":
                lc = [str(k + 1) for k in range(len(b["cau"]))]
                das = [str(c["da"])]
            elif b["loai"] == "dien":
                das = c["da"]
                assert c["text"].count("{}") == len(das), f"{slug}: Bài {i} câu {j}: số chỗ trống khác số đáp án"
            else:
                das = [c["da"]]
            for da in das:
                assert da in lc, f"{slug}: Bài {i} câu {j}: đáp án '{da}' không có trong lựa chọn"


def main():
    engine = open(os.path.join(GOC, "tools", "engine.html"), encoding="utf-8").read()
    ds = []
    for cfg in sorted(glob.glob(os.path.join(GOC, "phieu", "*", "config.json"))):
        thu_muc = os.path.dirname(cfg)
        slug = os.path.basename(thu_muc)
        P = doc_json(cfg)
        kiem_tra(slug, P)
        js = "const PHIEU = " + json.dumps(P, ensure_ascii=False).replace("</", "<\\/") + ";"
        ghi(os.path.join(thu_muc, "index.html"), engine.replace("/*__PHIEU__*/", js))
        w = P["web"]
        # Một phiếu có thể hiện ở nhiều khối: mỗi khối một dòng trong phieu.json
        for k in (w["khoi"] if isinstance(w["khoi"], list) else [w["khoi"]]):
            ds.append({"khoi": k, "mon": w.get("mon") or P.get("mon", ""), "ten": w.get("ten") or P["tieuDe"],
                       "lop": P["lop"], "ngay": w["ngay"], "link": f"phieu/{slug}/"})
        so_cau = sum(len(b["cau"]) for b in P["bai"])
        print(f"OK  phieu/{slug}/  ({len(P['bai'])} bài, {so_cau} mục)")

    # Giữ lại các phiếu cũ trỏ ra ngoài (không có thư mục trong phieu/)
    cu = doc_json(os.path.join(GOC, "phieu.json")) if os.path.exists(os.path.join(GOC, "phieu.json")) else []
    ds += [p for p in cu if not str(p.get("link", "")).startswith("phieu/")]
    ds.sort(key=lambda p: (p["ngay"], p["ten"]), reverse=True)
    ghi(os.path.join(GOC, "phieu.json"), json.dumps(ds, ensure_ascii=False, indent=2) + "\n")

    # Bảng trong README
    def lop_txt(lop):
        return ", ".join(lop)
    dong = ["| Khối | Môn | Tên phiếu | Lớp | Ngày | Link |", "|---|---|---|---|---|---|"]
    gop = {}
    for p in ds:
        if p["link"] in gop:
            gop[p["link"]]["khoi_ds"].append(p["khoi"])
        else:
            gop[p["link"]] = {**p, "khoi_ds": [p["khoi"]]}
    for p in gop.values():
        ngay = "/".join(reversed(p["ngay"].split("-")))
        link = p["link"] if p["link"].startswith("http") else "https://ptn1095.github.io/PhieuTuongTac/" + p["link"]
        dong.append(f"| {', '.join(TEN_KHOI[k] for k in p['khoi_ds'])} | {p['mon']} | {p['ten']} | {lop_txt(p['lop'])} | {ngay} | [Mở phiếu]({link}) |")
    readme = os.path.join(GOC, "README.md")
    text = open(readme, encoding="utf-8").read()
    bang = "<!-- DS_PHIEU -->\n" + "\n".join(dong) + "\n<!-- /DS_PHIEU -->"
    text = re.sub(r"<!-- DS_PHIEU -->.*?<!-- /DS_PHIEU -->", lambda m: bang, text, flags=re.S)
    ghi(readme, text)
    print(f"OK  phieu.json + README.md ({len(gop)} phiếu)")


if __name__ == "__main__":
    main()
