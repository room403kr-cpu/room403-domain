# room403.kr

room403.kr shows the designed site that lives at `room-403.vercel.app`, with a
few changes applied on the way through. Nothing in the original project is
modified.

## What is changed on the way through (`middleware.js`)

| Change | Why |
| --- | --- |
| Work page and the two work strips on the home page use the real filmography | The original still has placeholder entries: stock photos, invented titles and clients |
| The first screen shows the tagline | The original says "영상이 들어갈 예정입니다" |
| `/about` and `/work` open directly | The original returns 404 on a direct visit |
| "Flim", "Short FIlm" spelling | Typos |

The work swap only runs while the original bundle still contains placeholder
images (`picsum.photos`). When the original ships real data, it passes through
untouched and this project needs no change.

## Changing the work list

1. Edit `build/data.py` (taken from the studio's About page).
2. Run `python3 build/gen.py` to regenerate `middleware.js`.
3. Tiles in `t/` are title cards, not stills. To use a real still, replace the
   matching file (for example `t/a01.png`) with an image of the same name.
   `python3 build/tiles.py` redraws the title cards.
4. Commit and push to `main`. Vercel deploys in about a minute.

## Going back

- Plain pass-through, no changes: delete `middleware.js` and push.
- The one-page site used on 2026-10-09: copy `backup/onepage/index.html` to
  the root, delete `middleware.js`, replace `vercel.json` with
  `{ "cleanUrls": true }`, and push.
