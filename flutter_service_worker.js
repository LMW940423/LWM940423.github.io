'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "83000efab1f4ad9d2cb6083b19ba2dcd",
"index.html": "b041a94e1484955a7d28975a43c06143",
"/": "98833a9011cc5b7d24e399248a10c285",
"main.dart.js": "45720d521f976944df55ada65b226295",
"flutter.js": "0b19a3d1d54c58174c41cd35acdd9388",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "474b003f9ff40d51a0bbafd325b47847",
"build/web/version.json": "83000efab1f4ad9d2cb6083b19ba2dcd",
"build/web/index.html": "98833a9011cc5b7d24e399248a10c285",
"build/web/main.dart.js": "0fa6a0e21e8f677a005c373b09b979f2",
"build/web/flutter.js": "0b19a3d1d54c58174c41cd35acdd9388",
"build/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"build/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"build/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"build/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"build/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"build/web/manifest.json": "474b003f9ff40d51a0bbafd325b47847",
"build/web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"build/web/assets/NOTICES": "e9f2bf7972205fb62911c44a1f898a92",
"build/web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"build/web/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"build/web/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"build/web/assets/fonts/MaterialIcons-Regular.otf": "65e21b5db78a7c132bbb04776ec9c399",
"build/web/canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"build/web/canvaskit/skwasm.wasm": "6a8b7cf1077e1f29a99b19488ca91fc6",
"build/web/canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"build/web/canvaskit/chromium/canvaskit.wasm": "56d7cde1f73822f6360f2c7a2758daf4",
"build/web/canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"build/web/canvaskit/canvaskit.wasm": "baf2ea051461c98246693ccefa5305a7",
"build/web/canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"assets/AssetManifest.json": "ff4b8d62a5c72e67f563d0e9d2b144f7",
"assets/NOTICES": "45b101a8a6c7e269e1d8e596fd4d4511",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "7f85dab049685fa8c0eb32534e60dc30",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/download.svg": "af37e5376f1dd9efa63def359cc95164",
"assets/assets/images/previous.svg": "d38e9dc3c023931a5e22151e6fe8999c",
"assets/assets/images/edit.svg": "182e891a99c48a6ab9b86b961e9c7c51",
"assets/assets/images/next.svg": "5bc6721650f9a012e68c7aef9fef0495",
"assets/assets/images/delete.svg": "849d90484d31ae729370e73e70b865ad",
"assets/assets/images/bordered_xmark.svg": "3121df19acb65fc46656e4412df9a1b2",
"assets/assets/images/manage.svg": "db667cf5cf4d129c34bc4917c44754a0",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "6a8b7cf1077e1f29a99b19488ca91fc6",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "56d7cde1f73822f6360f2c7a2758daf4",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "baf2ea051461c98246693ccefa5305a7",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
