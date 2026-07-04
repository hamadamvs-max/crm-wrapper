const CACHE_NAME = 'crm-pro-v1';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// ===== تثبيت =====
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// ===== تفعيل =====
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// ===== جلب البيانات =====
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // تجاهل طلبات POST وغيرها
  if (request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request)
        .then((networkResponse) => {
          // تخزين الاستجابات الناجحة
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // لو Offline وفي صفحة HTML
          if (request.headers.get('accept').includes('text/html')) {
            return caches.match('/');
          }
        });
    })
  );
});

// ===== Push Notifications (مستقبلاً) =====
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'CRM Pro';
  const options = {
    body: data.body || 'إشعار جديد',
    icon: '/icon-192.png',
    badge: '/icon-72.png',
    dir: 'rtl',
    lang: 'ar',
    vibrate: [200, 100, 200],
    tag: data.tag || 'default',
    renotify: true
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// ===== فتح التطبيق عند الضغط على الإشعار =====
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});