const cacheName = 'JA'; // 缓存的名字


self.addEventListener('install', function (event) {
    self.skipWaiting();
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('内存更新JA');
            cache.addAll([
                './index.html',
                './images/avatar.png'
            ])
        })

    )
})

self.addEventListener('activate', function (event) {
    console.log('sw已激活！！！！！');
})

const cacheFirst = async (request) => {
    const keyList = await caches.keys();
    console.log(keyList, 'jaresk');
    // TODO:如何实现缓存更新？
    //TODO:为什么没有html的请求
    const responseFromCache = await caches.match(request)
    if (responseFromCache) {
        console.log(responseFromCache, 'jaresponseFromCache');
        return responseFromCache
    }
    const responseFromServer = await fetch(request);
    console.log(responseFromServer, 'jares');
    return responseFromServer
}

self.addEventListener('fetch', (event) => {
    console.log(event, 'jafetch拦截');
    event.respondWith(cacheFirst(event.request))
})