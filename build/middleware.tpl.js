// room403.kr serves the designed site that lives at ORIGIN, with three changes
// applied on the way through:
//   1. the placeholder Work data (stock photos, invented titles and clients) is
//      replaced with the real filmography from the studio's own About page;
//   2. the "video goes here" placeholder on the first screen shows the tagline;
//   3. direct visits to /about and /work load the app instead of a 404.
// The data swap only runs while the origin bundle still contains placeholder
// images (picsum.photos). Once the origin ships real data, it passes through
// untouched. Edit build/data.py and rerun build/gen.py to change the lists.

const ORIGIN = 'https://room-403.vercel.app';

export const config = { matcher: ['/', '/about', '/work', '/assets/:path*'] };

const WORKS = __WORKS__;
const HOME_PD = __HOME_PD__;
const HOME_DI = __HOME_DI__;

const HEAD = `
    <meta name="description" content="Room.403 is a production design and digital intermediate studio in Seoul, working on independent film and broadcast.">
    <meta property="og:title" content="Room.403 | Production Design and DI Studio, Seoul">
    <meta property="og:description" content="A production design and digital intermediate studio in Seoul, working on independent film and broadcast.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://room403.kr/">
    <style>
      main.flex-row > section:first-child{font-family:"Roboto Condensed","Min Sans",sans-serif;font-weight:700;font-size:clamp(34px,7.2vw,112px);line-height:1.12;letter-spacing:-.01em;color:#F8F0EE;text-align:center;white-space:pre-line;padding:0 24px}
    </style>
  `;

// Index of the "]" that closes the array opening at s[start], skipping strings.
function arrayEnd(s, start) {
  let depth = 0, quote = null;
  for (let i = start; i < s.length; i++) {
    const c = s[i];
    if (quote) {
      if (c === '\\') i++;
      else if (c === quote) quote = null;
      continue;
    }
    if (c === '`' || c === '"' || c === "'") quote = c;
    else if (c === '[') depth++;
    else if (c === ']' && --depth === 0) return i;
  }
  return -1;
}

// Replace every array literal that starts at a match of `opener` and still
// holds placeholder images. `pick` gets the old literal and returns new data.
function swapArrays(src, opener, pick) {
  let out = '', pos = 0, m;
  opener.lastIndex = 0;
  while ((m = opener.exec(src))) {
    const end = arrayEnd(src, m.index);
    if (end < 0) break;
    const old = src.slice(m.index, end + 1);
    const next = old.includes('picsum.photos') ? pick(old) : null;
    out += src.slice(pos, m.index) + (next ? JSON.stringify(next) : old);
    pos = end + 1;
    opener.lastIndex = pos;
  }
  return out + src.slice(pos);
}

function patch(src) {
  if (src.includes('picsum.photos')) {
    src = swapArrays(src, /\[\{id:`[0-9a-f-]{36}`,category:`/g, () => WORKS);
    src = swapArrays(src, /\[\{id:0,titleKo:`/g, (old) => (old.includes('/1080/1920') ? HOME_PD : HOME_DI));
  }
  return src
    .replace('children:`영상이 들어갈 예정입니다`', 'children:`Building One World,\\n하나의 세계를 만들다.`')
    .replace('title:`Flim`', 'title:`Film`')
    .replaceAll('Short FIlm', 'Short Film');
}

export default async function middleware(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path.startsWith('/assets/')) {
    const res = await fetch(ORIGIN + path, { headers: { accept: request.headers.get('accept') || '*/*' } });
    const type = res.headers.get('content-type') || 'application/octet-stream';
    if (!res.ok || !path.endsWith('.js')) {
      return new Response(res.body, {
        status: res.status,
        headers: { 'content-type': type, 'cache-control': res.headers.get('cache-control') || 'public, max-age=0, must-revalidate' },
      });
    }
    return new Response(patch(await res.text()), {
      headers: { 'content-type': 'application/javascript; charset=utf-8', 'cache-control': 'public, max-age=0, must-revalidate' },
    });
  }

  // "/", "/about", "/work": always the app shell from the origin's home page.
  const res = await fetch(ORIGIN + '/');
  const html = (await res.text()).replace('</head>', HEAD + '</head>');
  return new Response(html, {
    status: res.ok ? 200 : res.status,
    headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=0, must-revalidate' },
  });
}
