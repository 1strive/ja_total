const cacheName = 'JA'; // 缓存的名字

self.addEventListener('install', function (event) {
    console.log('安装成功！！');
})


const cacheFirst = async (request) => {
    //TODO:为什么没有html的请求
    //TODO: 对比三种缓存效果
    const responseFromCache = await caches.match(request)
    if (responseFromCache) {
        console.log(responseFromCache, 'ja缓存命中');
        return responseFromCache
    }
    const responseFromServer = await fetch(request);
    const cache = await caches.open(cacheName)
    cache.put(request, responseFromServer.clone())
    return responseFromServer
}

self.addEventListener('fetch', (event) => {
    // console.log(event, 'jafetch拦截');
    event.respondWith(cacheFirst(event.request))
})


const deleteOldCaches = async () => {
    const keyList = await caches.keys();
    //清除对应老缓存
    const cacheDel = keyList.filter(i => [cacheName].includes(i))
    await Promise.all(cacheDel.map(async (key) => {
        await caches.delete(key)
    }));
}

//更新时重新激活
self.addEventListener('activate', function (event) {
    console.log('sw已激活');
})