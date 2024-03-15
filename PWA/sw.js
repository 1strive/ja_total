const cacheName = 'JA'; // 缓存的名字

self.addEventListener('install', function (event) {
    event.waitUntil(
        // 创建了叫做 v1 的新缓存
        caches.open('v1').then(function (cache) {
            cache.addAll([
                './index.html', // 相对于 sw.js 的路径 缓存 index.html
            ]);
        })
    );
    self.skipWaiting();
})
const cacheFirst = async (request) => {
    const responseFromCache = await caches.match(request)
    if (responseFromCache) {
        return responseFromCache
    }
    const responseFromServer = await fetch(request);
    const cache = await caches.open(cacheName)
    cache.put(request, responseFromServer.clone())
    return responseFromServer
}

self.addEventListener('fetch', (event) => {
    console.log(event.request, 'jae');
    event.respondWith(cacheFirst(event.request))
})


const deleteOldCaches = async () => {
    const keyList = await caches.keys();
    console.log(keyList,'jakey');
    //清除对应老缓存
    const cacheDel = keyList.filter(i => [cacheName].includes(i))
    await Promise.all(cacheDel.map(async (key) => {
        await caches.delete(key)
    }));
}

//更新时重新激活
self.addEventListener('activate', function (event) {
    console.log('sw已激活！！！！！');
    clients.claim()
    event.waitUntil(
        Promise.all(
            [
                deleteOldCaches(),
                clients.matchAll({ type: 'window' }).then((clients) => {
                    clients.forEach((client) => {
                        client.postMessage('swUpdated')
                    })
                })
            ]
        )
    );
})