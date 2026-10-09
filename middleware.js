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

const WORKS = [{"id":"25afb29a-32e6-5ea1-b70f-ee9becf85e55","category":"art room.403","titleKo":"우리는 외계인을 기억하고 있었다","titleEn":"","client":"","description":"Task: Production Design\nCategory: Short Film\nPeriod: 2026\nSelections: 30th Bucheon International Fantastic Film Festival","thumbnailUrl":"/t/a01.png","playbackId":""},{"id":"eeb5438a-9573-5bd1-9dfe-e0fe52ae3d30","category":"art room.403","titleKo":"위브리드","titleEn":"","client":"","description":"Task: Production Design\nCategory: Short Film\nPeriod: 2026\nSelections: Special Jury Prize – 3rd Jeolla Nouvelle Vague Film Festival","thumbnailUrl":"/t/a02.png","playbackId":""},{"id":"d199cd2c-a17d-567f-a8f1-7e9ae6071fff","category":"art room.403","titleKo":"첫 번째 임무","titleEn":"","client":"","description":"Task: Production Design, Digital Intermediate\nCategory: Short Film\nPeriod: 2026\nSelections: Kia Creator Award","thumbnailUrl":"/t/a03.png","playbackId":""},{"id":"e81e3367-026e-59b3-a482-70292a0777b3","category":"art room.403","titleKo":"아무도 없는 곳","titleEn":"","client":"","description":"Task: Production Design\nCategory: Short Film\nPeriod: 2025\nSupport: Changwon City","thumbnailUrl":"/t/a04.png","playbackId":""},{"id":"16ed2d2d-097b-59ae-83fa-68d4392f7c42","category":"art room.403","titleKo":"동물농장","titleEn":"","client":"","description":"Task: Production Design\nCategory: Short Film\nPeriod: 2025\nSupport: Korean Film Council (KOFIC)","thumbnailUrl":"/t/a05.png","playbackId":""},{"id":"958c0348-dca2-58d0-9039-bda193cebeb6","category":"art room.403","titleKo":"제24계급 리치라이브","titleEn":"","client":"","description":"Task: Production Design\nCategory: Short Drama\nPeriod: 2024\nSupport: Levit (Alwayz)","thumbnailUrl":"/t/a06.png","playbackId":""},{"id":"d3b33e3c-7949-5266-ac79-bb4187be9e48","category":"art room.403","titleKo":"므두셀라로 돌아가라","titleEn":"","client":"","description":"Task: Production Design, Digital Intermediate\nCategory: Short Film\nPeriod: 2024\nSupport: KT&G SangSang Univ","thumbnailUrl":"/t/a07.png","playbackId":""},{"id":"03cd5adb-db5b-5f69-ace6-a8631f6bab1e","category":"art room.403","titleKo":"역사스페셜 시간여행자","titleEn":"","client":"KBS1","description":"Task: Production Design\nCategory: Documentary\nPeriod: 2025 – 2026\nEpisodes: 11, 15, 17, 18, 30, 43, 44","thumbnailUrl":"/t/a08.png","playbackId":""},{"id":"3d18208e-8b07-5f21-806c-8c590ce0298d","category":"art room.403","titleKo":"가자! 마다가스카르로","titleEn":"Let's go to the Madagascar","client":"Room.403","description":"Task: Production Design, Digital Intermediate\nCategory: Short Film\nPeriod: 2026\nRoom.403 Original Project","thumbnailUrl":"/t/a09.png","playbackId":""},{"id":"710df392-e482-592e-8202-301cbc41d410","category":"art room.403","titleKo":"멋지게 인사하는 방법","titleEn":"","client":"","description":"Task: Production Design\nCategory: Short Film\nPeriod: 2026","thumbnailUrl":"/t/a10.png","playbackId":""},{"id":"a7c8f308-558c-55b8-b4e7-d590ba293716","category":"art room.403","titleKo":"오배송","titleEn":"","client":"","description":"Task: Production Design\nCategory: Short Film\nPeriod: 2026","thumbnailUrl":"/t/a11.png","playbackId":""},{"id":"21cf4856-6d76-5112-8a0a-a7439d248dfb","category":"art room.403","titleKo":"서울의 하루","titleEn":"","client":"","description":"Task: Production Design\nCategory: Short Film\nPeriod: 2026\nWith: Korea National University of Arts","thumbnailUrl":"/t/a12.png","playbackId":""},{"id":"c0f5c2bd-1007-5225-8763-a13f85f073f8","category":"art room.403","titleKo":"피딩","titleEn":"","client":"","description":"Task: Production Design\nCategory: Short Film\nPeriod: 2025\nWith: Hankyoreh EN Publishing Academy","thumbnailUrl":"/t/a13.png","playbackId":""},{"id":"2163de7e-548a-5e2c-9518-bdb14aaaffd5","category":"art room.403","titleKo":"정리","titleEn":"","client":"","description":"Task: Production Design\nCategory: Short Film\nPeriod: 2025","thumbnailUrl":"/t/a14.png","playbackId":""},{"id":"e1f9b807-8871-5097-a2ab-02d560511a85","category":"art room.403","titleKo":"일요일에 아름다운 여자","titleEn":"","client":"","description":"Task: Production Design\nCategory: Independent Film\nPeriod: 2025","thumbnailUrl":"/t/a15.png","playbackId":""},{"id":"cc471395-ac6d-5540-a495-db2baaf285c2","category":"art room.403","titleKo":"동물로 태어났지만 인간으로 죽어라","titleEn":"","client":"","description":"Task: Production Design\nCategory: Short Film\nPeriod: 2025","thumbnailUrl":"/t/a16.png","playbackId":""},{"id":"ffbd17db-4c30-53cb-91de-1f7116957fe6","category":"art room.403","titleKo":"보늬","titleEn":"","client":"","description":"Task: Production Design, Digital Intermediate\nCategory: Short Film\nPeriod: 2025\nWith: Konkuk University, Department of Media Acting graduation project","thumbnailUrl":"/t/a17.png","playbackId":""},{"id":"9a8653d0-5c3f-511e-957a-208fd88600c4","category":"color room.403","titleKo":"완벽한 하루","titleEn":"","client":"","description":"Task: Digital Intermediate\nCategory: Short Film\nPeriod: 2026\nSelections: FHFP Film Festival","thumbnailUrl":"/t/c01.png","playbackId":""},{"id":"3ceec828-d1ff-5130-ac16-ab8f685eb29a","category":"color room.403","titleKo":"첫 번째 임무","titleEn":"","client":"","description":"Task: Production Design, Digital Intermediate\nCategory: Short Film\nPeriod: 2026\nSelections: Kia Creator Award","thumbnailUrl":"/t/c02.png","playbackId":""},{"id":"78f26e4a-afab-5e82-86d1-8d02f8361c06","category":"color room.403","titleKo":"므두셀라로 돌아가라","titleEn":"","client":"","description":"Task: Production Design, Digital Intermediate\nCategory: Short Film\nPeriod: 2024\nSupport: KT&G SangSang Univ","thumbnailUrl":"/t/c03.png","playbackId":""},{"id":"04b65c4c-fcfe-5f1a-819c-54ce7e74d855","category":"color room.403","titleKo":"틈","titleEn":"","client":"","description":"Task: Digital Intermediate\nCategory: Short Film\nPeriod: 2026","thumbnailUrl":"/t/c04.png","playbackId":""},{"id":"40ff20d7-e600-5342-870f-608cd6d5be44","category":"color room.403","titleKo":"가자! 마다가스카르로","titleEn":"Let's go to the Madagascar","client":"Room.403","description":"Task: Production Design, Digital Intermediate\nCategory: Short Film\nPeriod: 2026\nRoom.403 Original Project","thumbnailUrl":"/t/c05.png","playbackId":""},{"id":"e6572e98-7a8a-5cb4-8d79-f47503e5a2fc","category":"color room.403","titleKo":"노벤져스","titleEn":"","client":"","description":"Task: Digital Intermediate\nCategory: Short Film\nPeriod: 2026\nWith: Sungkyunkwan University","thumbnailUrl":"/t/c06.png","playbackId":""},{"id":"1c934902-c253-5420-b9bc-96d9e2513e60","category":"color room.403","titleKo":"March12","titleEn":"","client":"NewWave","description":"Task: Digital Intermediate\nCategory: Music Video\nPeriod: 2026","thumbnailUrl":"/t/c07.png","playbackId":""},{"id":"b4c9e73c-d589-5951-8ac1-51155834926b","category":"color room.403","titleKo":"NAI","titleEn":"","client":"","description":"Task: Digital Intermediate\nCategory: Short Film\nPeriod: 2026","thumbnailUrl":"/t/c08.png","playbackId":""},{"id":"4c5d1862-5c62-5bbe-ab82-559ed162d13f","category":"color room.403","titleKo":"초겨울","titleEn":"","client":"","description":"Task: Digital Intermediate\nCategory: Short Film\nPeriod: 2025","thumbnailUrl":"/t/c09.png","playbackId":""},{"id":"a4fd4cff-1358-5526-93ed-cfaee8349a3b","category":"color room.403","titleKo":"외계인","titleEn":"","client":"","description":"Task: Digital Intermediate\nCategory: Short Film\nPeriod: 2025","thumbnailUrl":"/t/c10.png","playbackId":""},{"id":"b6bfdc31-8036-5fa8-b2fd-499042628884","category":"color room.403","titleKo":"PDS","titleEn":"","client":"","description":"Task: Digital Intermediate\nCategory: Short Film\nPeriod: 2025","thumbnailUrl":"/t/c11.png","playbackId":""},{"id":"19c2c59d-284d-53a8-9fbc-6277ed21663b","category":"color room.403","titleKo":"보늬","titleEn":"","client":"","description":"Task: Production Design, Digital Intermediate\nCategory: Short Film\nPeriod: 2025\nWith: Konkuk University, Department of Media Acting graduation project","thumbnailUrl":"/t/c12.png","playbackId":""},{"id":"56abd067-27e5-5189-949e-dbb86c919158","category":"color room.403","titleKo":"메이킹 필름","titleEn":"","client":"","description":"Task: Digital Intermediate\nCategory: Short Film\nPeriod: 2025","thumbnailUrl":"/t/c13.png","playbackId":""},{"id":"a1372a4b-175b-5b6b-a4d1-650776d824aa","category":"color room.403","titleKo":"선풍기가 고장난 여름","titleEn":"","client":"","description":"Task: Digital Intermediate\nCategory: Short Film\nPeriod: 2025","thumbnailUrl":"/t/c14.png","playbackId":""},{"id":"3072bf19-8c30-5466-a4ea-8e0dc871f360","category":"color room.403","titleKo":"굴","titleEn":"","client":"","description":"Task: Digital Intermediate\nCategory: Short Film\nPeriod: 2025\nWith: Hankyoreh EN Publishing Academy","thumbnailUrl":"/t/c15.png","playbackId":""},{"id":"28c594f1-35cc-5a6a-8957-a38bcf3b4f2a","category":"color room.403","titleKo":"생각의 지평","titleEn":"","client":"","description":"Task: Digital Intermediate\nCategory: Short Film\nPeriod: 2025","thumbnailUrl":"/t/c16.png","playbackId":""},{"id":"ba763078-c0d9-548a-99ac-ba2cfffab237","category":"color room.403","titleKo":"그래도 돼","titleEn":"","client":"","description":"Task: Digital Intermediate\nCategory: Short Film\nPeriod: 2025","thumbnailUrl":"/t/c17.png","playbackId":""}];
const HOME_PD = [{"id":0,"titleKo":"우리는 외계인을 기억하고 있었다","titleEn":"30th Bucheon International Fantastic Film Festival","type":"Short Film","thumbnailUrl":"/t/p1.png"},{"id":1,"titleKo":"위브리드","titleEn":"Special Jury Prize, 3rd Jeolla Nouvelle Vague Film Festival","type":"Short Film","thumbnailUrl":"/t/p2.png"},{"id":2,"titleKo":"첫 번째 임무","titleEn":"Kia Creator Award","type":"Short Film","thumbnailUrl":"/t/p3.png"},{"id":3,"titleKo":"역사스페셜 시간여행자","titleEn":"KBS1","type":"Documentary","thumbnailUrl":"/t/p4.png"},{"id":4,"titleKo":"아무도 없는 곳","titleEn":"Supported by Changwon City","type":"Short Film","thumbnailUrl":"/t/p5.png"},{"id":5,"titleKo":"동물농장","titleEn":"Supported by the Korean Film Council (KOFIC)","type":"Short Film","thumbnailUrl":"/t/p6.png"}];
const HOME_DI = [{"id":0,"titleKo":"완벽한 하루","titleEn":"FHFP Film Festival","type":"Short Film","thumbnailUrl":"/t/l1.png"},{"id":1,"titleKo":"첫 번째 임무","titleEn":"Kia Creator Award","type":"Short Film","thumbnailUrl":"/t/l2.png"},{"id":2,"titleKo":"가자! 마다가스카르로","titleEn":"Let's go to the Madagascar","type":"Short Film","thumbnailUrl":"/t/l3.png"},{"id":3,"titleKo":"므두셀라로 돌아가라","titleEn":"Supported by KT&G SangSang Univ","type":"Short Film","thumbnailUrl":"/t/l4.png"}];

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
