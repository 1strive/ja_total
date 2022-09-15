/*
 * @Description: 
 * @Author: JA
 * @Date: 2021-11-28 16:58:02
 * @LastEditTime: 2022-09-08 20:12:43
 * @LastEditors: JA
 * @Reference: 
 */
const e = require('express');
const express = require('express');

const app = express();

app.all('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');
    response.header('Access-Control-Allow-Credentials', "true");
    response.cookie("user", "jay", { maxAge: 2000000 });
    // response.setHeader('Access-Control-Allow-Methods', 'POST');
    // response.setHeader('Access-Control-Max-Age', '171800000000');
    //可接受的请求头
    response.header('Access-Control-Allow-Headers', '*');
    //设置响应体
    const data = {
        name: '焦傲大帅比'
    };
    let str = JSON.stringify(data);
    if (request.method === 'POST') {
        setTimeout(() => {
            response.send(str);
        }, 1000)
    } else {
        response.send('焦傲大帅比');
    }
});
app.get('/track', (request, response) => {
    const track = request.url.split('?')[1]
    console.log(track, 'track');
    response.send(null);
})
// app.all("/login", (request, response) => {
//     response.setHeader('Access-Control-Allow-Origin', '*');
//     response.setHeader('Access-Control-Allow-Headers', '*');
//     // response.cookie("user", "jay", { maxAge: 2000000, httpOnly: true });
//     response.json({ code: 0, message: "登录成功" });
// });



//jsonp服务
app.all('/jsonp-server', (request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        name: '诺克萨斯'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.send(`handle(${str})`);
});
//用户名检测是否存在
app.all('/check-username', (request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    let m = request.url.split('?')[1]
    console.log(m);
    //返回结果
    response.send(`handle(${str},${m})`);
});


//fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = { name: 'JAAAAA' };
    response.send(JSON.stringify(data));
});


app.listen(8000, () => {
    console.log("服务已经启动, 8000 端口监听中....");
});


