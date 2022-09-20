/*
 * @Author: JA
 * @Date: 2022-09-11 00:47:28
 * @LastEditTime: 2022-09-11 22:36:25
 * @LastEditors: JA
 */
const express = require('express');

const app = express()
//axios 服务
app.all('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Credentials', 'true');
    // response.send('Hello jQuery AJAX');
    const data = { name: '骄傲' };
    response.cookie('num', 1110, {
        domain: '127.0.0.1',
        path: '/',
        maxAge: 24 * 3600 * 1000
    })
    response.send(JSON.stringify(data));
});

app.listen(8000, () => {
    console.log('8000');
})
