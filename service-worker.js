self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("menteleve-cache").then(cache =>
      cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/audio/respiracao.mp3",
        "/audio/descompressao.mp3",
        "/icon-192.png",
        "/icon-512.png"
      ])
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
