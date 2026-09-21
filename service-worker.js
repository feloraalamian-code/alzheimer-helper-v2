// Name of the current cache version
const CACHE_NAME = 'alzheimer-helper-v1';

// List of core assets to pre-cache for offline access
const ASSETS = [
  './',
  './index.html',
  './caregiver.html',
  './css/style.css',
  './js/app.js',
  './js/reminders.js',
  './js/storage.js',
  './js/caregiver.js',
  './manifest.json'
];

// Install event: Caches all essential application assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// Activate event: Cleans up outdated cache versions to free up space
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  // Take control of all clients immediately
  self.clients.claim();
});

// Fetch event: Implements Cache First strategy with network fallback
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached asset if available; otherwise fetch from network
      return cachedResponse || fetch(event.request);
    })
  );
});