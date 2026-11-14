'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f9fe067949113b8e28402dfb93cbac35",
"version.json": "c46ce7c3fd6677eefefa4f2e29a0d507",
"index.html": "415af166cf5b202deaac419f09f4679f",
"/": "415af166cf5b202deaac419f09f4679f",
"main.dart.js": "3e18e8f95b8ecd75292a9c7063989e68",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "547cea9fb48099bb2b96fc6e914dae1c",
"assets/AssetManifest.json": "b1d50b429198d53eb00a1b7111746202",
"assets/NOTICES": "86339d031b56061f690bf5ec9201adbd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "796c127dca3af93175b55ebe69507939",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6684375e9997585dd73e51288b597c21",
"assets/fonts/MaterialIcons-Regular.otf": "d1f101d1201d5fce36a56a5d4b32f760",
"assets/assets/logos/zen_breathing.png": "b54ac4968e1d3f00bceab0caceecf666",
"assets/assets/logos/kalimba_zen.png": "ae4168bab5cfe8e479cff415e1730f32",
"assets/assets/logos/connect_4.png": "cf8a9991c89e6f19edaa7a87fb1d1d65",
"assets/assets/logos/ripple_pond.png": "8ff85d795268ed979265b1fd4d5cc46f",
"assets/assets/logos/brick_breaker.png": "4788df5dab0115951a161881ef593818",
"assets/assets/logos/quick_draw_2p.png": "64b669a38c791e3bb9e13dc38c9e0123",
"assets/assets/logos/tic_tac_toe.png": "700bb3b1125a52dd13d818c0af923403",
"assets/assets/logos/air_hockey_2p.png": "6d913b2f52f5756aa3540da811d15e8a",
"assets/assets/logos/snake_classic.png": "6f5c00e82d075df236d15764cbf7dca8",
"assets/assets/logos/fidget_spinner.png": "a853893b14e9430ac97889c6a0b4936b",
"assets/assets/logos/tap_war_2p.png": "4690466592114641b874fc118720bf04",
"assets/assets/logos/stack_tower.png": "1630221f365fb59b3cd425c5d61b92fd",
"assets/assets/logos/color_tap.png": "f61782b8c4b1a7066bf2cfd8fdd58830",
"assets/assets/logos/fidget_spinner_v2.png": "7ced8cdc3feff708f56753a52b2502c6",
"assets/assets/logos/balloon_pop.png": "dcba0e049e08d9458d84e93900d0da07",
"assets/assets/logos/piano_tiles.png": "2b5ca9ecbbe123207b23104d5f8ccebc",
"assets/assets/logos/zen_sand_v2.png": "482ee684791b2652436bfaa52a26709e",
"assets/assets/logos/sliding_15.png": "8cae280f52223bfdd2549ad633744458",
"assets/assets/logos/chill_2048.png": "90f2b2f9c1f4da76babbecb0f97e574a",
"assets/assets/logos/memory_match.png": "3f1823682c40252e75d4789c1c4f2fb9",
"assets/assets/logos/number_order.png": "ea0ade6341e7901c3f59f26e6cc80d16",
"assets/assets/logos/quick_math.png": "b7321d34df78a8fd56a884ff6332b996",
"assets/assets/logos/simon_says.png": "c5b57aae3113e6282d3cd6e49504846c",
"assets/assets/logos/flappy_birdie.png": "fc8cb54134c90d91d3f1480cd6c3f57a",
"assets/assets/logos/cozy_pop_it.png": "65e0d12389cfc816b3270d631dac3c44",
"assets/assets/logos/minesweeper_mini.png": "bdd2d307f620c7af8114385ce8464b04",
"assets/assets/logos/water_sort.png": "b9c3ae3144ff132fae8b9daeaa245958",
"assets/assets/logos/whack_a_mole.png": "52edb442d5e604cb3ea39bb0151aea58",
"assets/assets/logos/lights_out.png": "325bc8997f03ab96e5957658226f7613",
"assets/assets/logos/reaction_test.png": "893210c9d123e3434f5eb9c8433c6d19",
"assets/assets/logos/dodge_rain.png": "28cc53a1ac5106fb583252546941ac95",
"assets/assets/sounds/complete.wav": "036f2b8bb5ce70a6994f8a57961b8414",
"assets/assets/sounds/pop.wav": "2881a33fc678fbcfccfd5d98104a6ab5",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
