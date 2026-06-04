/* 懿起成长 · Service Worker：离线缓存 */
const VERSION = "20260604a";
const CACHE = "yqcz-" + VERSION;
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./LOGO.jpg",
  "./apple-touch-icon.png",
  "./icon-192.png",
  "./icon-512.png",
  "./styles.css?v=" + VERSION,
  "./js/data.js?v=" + VERSION,
  "./js/math.js?v=" + VERSION,
  "./js/english.js?v=" + VERSION,
  "./js/chinese.js?v=" + VERSION,
  "./js/plan.js?v=" + VERSION,
  "./js/app.js?v=" + VERSION
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (!res || res.status !== 200 || res.type === "opaque") return res;
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      }).catch(() => {
        if (req.mode === "navigate") return caches.match("./index.html");
      });
    })
  );
});
