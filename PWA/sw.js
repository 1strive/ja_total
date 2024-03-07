//写Service Worker的相关逻辑的js文件 (且叫sw.js)

// self等同于 this
self.addEventListener('install', function (event) {
    console.log('install');
    // ... 安装完成 可以开始拦截请求加入缓存 cache 中
});

self.addEventListener('activate', function (event) {
    console.log('activate');
    // ... 激活完成 可以开始拦截请求加入缓存 cache 中
});
const k = new Promise((resolve) => {
   
})
const m = Promise.resolve(k).then((res) => {
   
    return res.then((o)=>{
        console.log(o);
    })
})
console.log(m);