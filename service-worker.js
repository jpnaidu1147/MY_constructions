self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Simple pass-through to ensure PWA installability criteria are met
  // without risking stale cache issues in development.
  event.respondWith(fetch(event.request));
});