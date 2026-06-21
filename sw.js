const CACHE_NAME = "adminguru-v2";
const urlsToCache = ["login.html", "index.html", "style.css", "config.js", "manifest.json"];

self.addEventListener("install", event => event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))));
self.addEventListener("fetch", event => event.respondWith(caches.match(event.request).then(res => res || fetch(event.request))));