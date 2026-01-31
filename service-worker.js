self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("stone-app").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/styles.css",
        "/app.js"
      ]);
    })
  );
});
