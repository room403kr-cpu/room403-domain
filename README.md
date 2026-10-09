# room403.kr

This repository is what room403.kr serves.

## Current setup

`index.html` is a single static page for ART ROOM.403. `vercel.json` only
redirects the old `/work` and `/about` addresses to sections of that page.

## Going back to the full site

The designed site lives in another Vercel project at
https://room-403.vercel.app. To show it on room403.kr again:

1. Replace `vercel.json` with `proxy/vercel.json`.
2. Delete `index.html` (a file here takes priority over the proxy rules).
3. Push to `main`.

`proxy/vercel.json` also sends `/work` and `/about` to the site's entry page,
so those addresses open when visited directly. That part has not been tested
on the live domain yet.
