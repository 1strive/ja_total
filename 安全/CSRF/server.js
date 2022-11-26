/*
 * @Author: JA
 * @Date: 2022-11-22 15:29:45
 * @LastEditTime: 2022-11-25 14:30:04
 * @LastEditors: JA
 */
const { request } = require('express')
const express = require('express')
const app = express()

app.use(express.static(__dirname + '/csrfTest'))

app.all('/ja', (request, response) => {
    console.log(request.headers.cookie);
    //设置响应头  设置允许跨域
    // response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');
    // // //响应头
    // response.setHeader('Access-Control-Allow-Headers', '*');
    // response.setHeader('Access-Control-Allow-Credentials', 'true');
    const data = { name: '骄傲' };
    response.cookie('ja', 'guozi', {
        domain: '127.0.0.1',
        path: '/',
        maxAge: 24 * 3600 * 1000,
        httpOnly: true
    })
    response.cookie('xiaoxixi', 'asd', {
        domain: '127.0.0.1',
        path: '/',
        maxAge: 24 * 3600 * 1000,
        httpOnly: true
    })
    response.send(JSON.stringify(data));
})

app.listen(5000, () => {
    console.log("服务已经启动, 5000 端口监听中....");
});

