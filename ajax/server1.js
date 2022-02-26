/*
 * @Description: 
 * @Author: JA
 * @Date: 2021-11-28 16:58:02
 * @LastEditTime: 2021-12-02 16:52:00
 * @LastEditors: JA
 * @Reference: 
 */
const express = require('express');

const app = express();

app.all('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    response.send('HELLO AJAX POST');
});

app.listen(8000, () => {
    console.log("服务已经启动, 8000 端口监听中....");
});
