import json, os, sys, uuid
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from data import ART, COLOR, HOME_PD, HOME_DI
def work(rows, cat):
    out = []
    for key, title, kind, year, task, extra, client, en in rows:
        d = f"Task: {task}\nCategory: {kind}\nPeriod: {year}" + (f"\n{extra}" if extra else "")
        out.append({"id": str(uuid.uuid5(uuid.NAMESPACE_URL, "room403.kr/work/" + key)), "category": cat,
                    "titleKo": title, "titleEn": en, "client": client, "description": d,
                    "thumbnailUrl": f"/t/{key}.png", "playbackId": ""})
    return out
by = {r[0]: r for r in ART + COLOR}
def home(rows):
    return [{"id": i, "titleKo": by[src][1], "titleEn": sub, "type": by[src][2], "thumbnailUrl": f"/t/{k}.png"}
            for i, (k, src, sub) in enumerate(rows)]
J = lambda o: json.dumps(o, ensure_ascii=False, separators=(",", ":"))
src = open(os.path.dirname(os.path.abspath(__file__)) + "/middleware.tpl.js").read()
src = (src.replace("__WORKS__", J(work(ART, "art room.403") + work(COLOR, "color room.403")))
          .replace("__HOME_PD__", J(home(HOME_PD))).replace("__HOME_DI__", J(home(HOME_DI))))
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "middleware.js"), "w").write(src)
print("middleware.js", len(src))
