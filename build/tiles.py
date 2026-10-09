import asyncio, html, os, sys
sys.path.insert(0, os.path.dirname(__file__))
from data import ART, COLOR, HOME_PD, HOME_DI
from playwright.async_api import async_playwright
# Folder holding a clone of github.com/poposnail61/min-sans and an npm install of @fontsource/roboto-condensed.
F = os.environ.get("TILE_FONTS", os.path.expanduser("~/tile-fonts"))
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "t")
os.makedirs(OUT, exist_ok=True)
CSS = f"""
@font-face{{font-family:Min;font-weight:700;src:url(file://{F}/min-sans/fonts/static/MinSans-Bold.otf)}}
@font-face{{font-family:Min;font-weight:500;src:url(file://{F}/min-sans/fonts/static/MinSans-Medium.otf)}}
@font-face{{font-family:RC;font-weight:500;src:url(file://{F}/node_modules/@fontsource/roboto-condensed/files/roboto-condensed-latin-500-normal.woff2)}}
@font-face{{font-family:RC;font-weight:700;src:url(file://{F}/node_modules/@fontsource/roboto-condensed/files/roboto-condensed-latin-700-normal.woff2)}}
*{{box-sizing:border-box;margin:0}}
html,body{{height:100%;background:#151413}}
.t{{height:100%;padding:var(--p);display:flex;flex-direction:column;color:#F8F0EE;font-family:RC,Min,sans-serif;background:linear-gradient(160deg,#1b1a18 0%,#121110 70%)}}
.rule{{display:flex;height:var(--r);flex:none}}
.rule::before,.rule::after{{content:"";background:#FF4C23}}
.rule::before{{flex:0 0 30%;clip-path:polygon(0 0,100% 0,calc(100% - var(--r)) 100%,0 100%)}}
.rule::after{{flex:1;margin-left:calc(var(--p)*.9);clip-path:polygon(var(--r) 0,100% 0,100% 100%,0 100%)}}
.meta{{margin-top:calc(var(--p)*.55);font-weight:500;font-size:var(--m);letter-spacing:.09em;text-transform:uppercase;color:#9E9695}}
h1{{margin-top:calc(var(--p)*.35);font-family:RC,Min,sans-serif;font-weight:700;font-size:var(--h);line-height:1.16;letter-spacing:-.015em;word-break:keep-all;text-wrap:balance;max-width:92%}}
.land{{align-items:center;justify-content:center;text-align:center}}
.land>*{{width:50%}}
.land .rule{{position:absolute;top:var(--p);left:25%}}
.land h1{{max-width:none;margin-top:calc(var(--p)*.3)}}
.land .meta{{margin-top:0}}
.t{{position:relative}}
.foot{{margin-top:auto;display:flex;justify-content:space-between;font-weight:500;font-size:calc(var(--m)*.86);letter-spacing:.09em;text-transform:uppercase;color:#6F6867}}
"""
def size(title, big, mid, small):
    n = len(title)
    return big if n <= 6 else mid if n <= 11 else small
def page(title, cat, year, room, w, h, kind):
    if kind == "work":   p, r, m, hh = 44, 6, 21, size(title, 82, 66, 54)
    elif kind == "port": p, r, m, hh = 64, 9, 31, size(title, 124, 100, 82)
    else:                p, r, m, hh = 72, 9, 28, size(title, 112, 92, 78)
    foot = f'<div class="foot"><span>{room}</span></div>' if kind == "work" else ""
    return f"""<!doctype html><meta charset=utf-8><style>{CSS}</style>
<div class="t {kind}" style="--p:{p}px;--r:{r}px;--m:{m}px;--h:{hh}px"><div class=rule></div>
<div class=meta>{html.escape(cat)} · {html.escape(year)}</div><h1>{html.escape(title)}</h1>{foot}</div>"""
async def main():
    by = {r[0]: r for r in ART + COLOR}
    jobs = []
    for r in ART:   jobs.append((r[0], r[1], r[2], r[3], "Art Room.403", 720, 556, "work"))
    for r in COLOR: jobs.append((r[0], r[1], r[2], r[3], "Color Room.403", 720, 556, "work"))
    for k, src, _ in HOME_PD: r = by[src]; jobs.append((k, r[1], r[2], r[3], "", 825, 1116, "port"))
    for k, src, _ in HOME_DI: r = by[src]; jobs.append((k, r[1], r[2], r[3], "", 1280, 720, "land"))
    async with async_playwright() as pw:
        b = await pw.chromium.launch()
        for k, title, cat, year, room, w, h, kind in jobs:
            pg = await b.new_page(viewport={"width": w, "height": h})
            open(os.path.dirname(os.path.abspath(__file__))+"/_t.html","w").write(page(title, cat, year, room, w, h, kind))
            await pg.goto("file://"+os.path.dirname(os.path.abspath(__file__))+"/_t.html")
            await pg.evaluate("document.fonts.ready.then(()=>[...document.fonts].filter(f=>f.status=='loaded').length)")
            await pg.wait_for_timeout(120)
            await pg.screenshot(path=f"{OUT}/{k}.png")
            await pg.close()
        await b.close()
    print(len(jobs), "tiles")
asyncio.run(main())
