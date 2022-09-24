/*
 * @Author: JA
 * @Date: 2022-09-18 23:48:29
 * @LastEditTime: 2022-09-24 01:37:39
 * @LastEditors: JA
 */
// var http = require('http');
// const express = require('express');
// const exp = express();
function sleep(time) {
    var _exit = Date.now() + time * 1000;
    while (Date.now() < _exit) {
    }
}

// const app = http.createServer('/ja', function (req, res) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', '*');
//   // sleep(10);
//   res.end('焦傲大帅比');
// })


// app.listen(8080, () => {
//   console.log('8080监听');
// });
const express = require('express');

const app = express();

app.all('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');
    response.header('Access-Control-Allow-Credentials', "true");
    //设置响应体
    // setTimeout(()=>{

    // },2000)
    sleep(2);
    response.send('焦傲大帅比');

    // const p = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve('焦傲大帅比')
    //     }, 2000)
    // })
    // p.then((val) => {
    //     response.send(val);
    // })

});
app.all('/syn', (request, response) => {
    //设置响应头  设置允许跨域
    response.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');
    response.header('Access-Control-Allow-Credentials', "true");
    //设置响应体
    response.send('焦傲牛逼');
});
setImmediate(console.log, 1000, 10) 
setTimeout(() => {
    // const p = new Promise((resolve, reject) => {
    //     // setTimeout(() => {
    //         resolve('焦傲大帅比')
    //     // }, 2000)
    // })
    // p.then((val) => {
    //     console.log(val);
    // })
    console.log(1);
}, 0)


app.listen(8080, () => {
    console.log('8080监听');
});

