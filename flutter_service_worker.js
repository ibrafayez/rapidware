'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f8556e36082aeb2e35c137770b6045e6",
"index.html": "cbd507049143e3e0df785e004638d2dd",
"/": "cbd507049143e3e0df785e004638d2dd",
"favicon-1.png": "5dcef449791fa27946b3d35ad8803796",
"styles.css": "ef425e0bc2e165887fadaf08ce1cfdd5",
"main.dart.js": "e9b971363ec54162a3531f5ce9e41bf7",
"img/loading.gif": "35bd40115474783a3e8a4744750c1199",
"favicon.png": "a0414c9e3b33ed11b4d0dda827218ee2",
"icons/Icon-192-1.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192-1.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "7097f5156f108d2aa83b12f460275099",
"icons/Icon-maskable-192.png": "7097f5156f108d2aa83b12f460275099",
"icons/Icon-512-1.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512-1.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-512.png": "67470662747126f4f502402bbf937493",
"icons/Icon-512.png": "67470662747126f4f502402bbf937493",
"manifest.json": "eb56b051eff027dba9f6032ecd6a87db",
"assets/AssetManifest.json": "d8d2ce49368c91a7b7e8629329f34ee7",
"assets/NOTICES": "74457a43bf99aade3105898693d7b1ba",
"assets/FontManifest.json": "c8137c74f7f99d67eb280c36633494f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Codec-Warm-Regular.ttf": "73bbeccd5650462d947342aa9139540b",
"assets/fonts/my-flutter-icon.ttf": "e8e2b999ce912e230857668cd1063aab",
"assets/fonts/Codec-Warm-Bold-Italic.ttf": "eedf786a2898d17489c04946fa7dd58e",
"assets/fonts/Codec-Warm-Bold.ttf": "7ff3501cfea6782086f6b38f3f541312",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Codec-Warm-ExtraBold.ttf": "17fe290341c062f193a9682f836015d3",
"assets/fonts/gilroy-light.otf": "d90fa984926d3745c7e68bc525692c26",
"assets/fonts/Codec-Warm-Regular-Italic.ttf": "deb9896a91e58f680a0bc308859f528e",
"assets/assets/images/bright_ave_banner.png": "702a78190a2c6911bc567a8ce45a03e1",
"assets/assets/images/rapidware_logo_none.png": "c43ff469731e8a56d7afe659c8fa5054",
"assets/assets/images/projects_man.gif": "d537c321ee64677f8031ec21e0fb5e73",
"assets/assets/images/sunduq_banner.png": "58b55dd9357dee93d74e73e05deaa8b1",
"assets/assets/images/loading.gif": "35bd40115474783a3e8a4744750c1199",
"assets/assets/images/our_services_image.jpeg": "f60fff8c3f82303b9abf5fc451ccff37",
"assets/assets/images/souduq.png": "438db72a7bd1973d7fb3fd5e2c836acc",
"assets/assets/images/joud_app_banner.png": "907ca52c6375ee4e8bfa34e8de96c3b5",
"assets/assets/images/twitter.png": "ad068010e28b46d771ef487e04df0a2d",
"assets/assets/images/linkedin.png": "16c9d749edf32b8ad9290299816295fa",
"assets/assets/images/youtube.png": "45200cfbed682f503a3d1db5222d521d",
"assets/assets/images/whatsapp.png": "756edf5465650d41d8a4f2af080f4378",
"assets/assets/projects/work_space.png": "cca4dc82339256f06fba65a26dedf1d8",
"assets/assets/partners/eb_logo_partner.png": "d9aa14236c25b9f7e751b7939796e760",
"assets/assets/partners/joud_logo_partner.png": "1ba8f5915b74e09e01003178a1c8a5fa",
"assets/assets/partners/brightavenue_logo_partner.png": "97b46c35c0cc057a7554f7bc27eed121",
"assets/assets/icons/search.svg": "dfc7db1dfd5bb8b26916d9226bc02bac",
"assets/assets/icons/heart-icon.svg": "3ed69ef95480946fc2aa43a17722ec79",
"assets/assets/icons/back_arrow.svg": "c35b3f97779bff7b669938acb7b7ad93",
"assets/assets/icons/user-icon.svg": "76536891a2f21ae4a44ffe82f1f0f6d0",
"assets/assets/icons/icon_4.svg": "4c78bde50054255c1c981a2c3aaaec04",
"assets/assets/icons/icon_2.svg": "b74115c161dd696370af47f48c1ef148",
"assets/assets/icons/more.svg": "a4a9ee0bf291be1d95f79949ad88b498",
"assets/assets/icons/icon_3.svg": "cddbcb223ffa19a4d1faf8ba0aabef6a",
"assets/assets/icons/sun.svg": "de21a25e2878fb1b62579a0d2cf4444a",
"assets/assets/icons/flower.svg": "46f699fab9e4cc4bd9f942ea53d73de3",
"assets/assets/icons/menu.svg": "0dd3549af7ee5b368ebcb0d8e0deb904",
"assets/assets/lottie/it_consulting_icon3.json": "eaed718d6cd51b33610ed21ce9539800",
"assets/assets/lottie/goal.json": "001ab869df10fb0c5f88318c0b4ac927",
"assets/assets/lottie/vision.json": "c2ce680e512735068934d06bd46b3e8a",
"assets/assets/lottie/youtube.json": "7551f9fe8ce1b567811a658487644668",
"assets/assets/lottie/projects.json": "09c5307969f77702e5d503331bf79fdd",
"assets/assets/lottie/dev_icon.json": "aef27bed39bd367749af34079353f36f",
"assets/assets/lottie/phone_icon.json": "19006529bd3926225ead21310bd8d8f0",
"assets/assets/lottie/identity.json": "cf3361c5ca250529ab5e44eb20eeb825",
"assets/assets/lottie/whatsapp.json": "190b18ddced2d018aca17716c8ee241a",
"assets/assets/lottie/it_consulting_icon.json": "7979a41a5cbeda17485a0c9fa8705b30",
"assets/assets/lottie/twitter.json": "bdc1e29187b883ceb543af1f52a3d710",
"assets/assets/lottie/goal2.json": "991b3b14333ccd949e3bc00a2dba15c0",
"assets/assets/lottie/rocket_icon.json": "dd7c49f3dcaf062688761682091740da",
"assets/assets/lottie/goal3.json": "001ab869df10fb0c5f88318c0b4ac927",
"assets/assets/lottie/linkedin.json": "d5bca1cc1d13713d152dbedb0f09d6b8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
