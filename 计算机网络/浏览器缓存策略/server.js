// /*
//  * @Author: JA
//  * @Date: 2022-09-17 23:51:03
//  * @LastEditTime: 2022-09-18 00:50:09
//  * @LastEditors: JA
//  */
// const express = require('express');
// const app = express();
// var options = {
//     etag: false, // 禁用协商缓存
//     lastModified: false, // 禁用协商缓存
//     setHeaders: (res, path, stat) => {
//         res.set('Cache-Control', 'max-age=1000'); // 强缓存超时时间为10秒
//     },
// };
// app.use(express.static((__dirname + '/public'), options));// express.static(root, [options]) root参数指定静态文件的根目录。
// app.all('/server', (req, res) => {
//     res.send('123')
// })
// app.listen(3000, () => {
//     console.log(3000);
// });

// server.js
const http = require('http')
const fs = require('fs')

http.createServer(function (request, response) {

  if (request.url === '/') {
    const html = fs.readFileSync('./public/index.html', 'utf8')
    response.writeHead(200, {
      'Content-Type': 'text/html'
    })
    response.end(html)
  }

  if (request.url === '/test.js') {
    response.writeHead(200, {
      'Content-Type': 'text/javascript',
      'Cache-Control': 'max-age=200' // 浏览器缓存时间
    })
    response.end('console.log("script loaded twice")')
  }
}).listen(8888)

console.log('server listening on 8888')