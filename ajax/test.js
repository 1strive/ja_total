/*
 * @Description: 
 * @Author: JA
 * @Date: 2021-11-28 16:58:02
 * @LastEditTime: 2022-09-11 21:54:41
 * @LastEditors: JA
 * @Reference: 
 */
const e = require('express');
const express = require('express');

const app = express();

app.all('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.header('Access-Control-Allow-Origin', '*');
    // response.header('Access-Control-Allow-Credentials', "true");
    // response.cookie("user", "jay", { maxAge: 2000000 });
    // // response.setHeader('Access-Control-Allow-Methods', 'POST');
    // // response.setHeader('Access-Control-Max-Age', '171800000000');
    // //可接受的请求头
    // response.header('Access-Control-Allow-Headers', '*');
    // //设置响应体
    // const data = {
    //     name: '焦傲大帅比'
    // };
    // let str = JSON.stringify(data);
    // if (request.method === 'POST') {
    //     setTimeout(() => {
    //         response.send(str);
    //     }, 1000)
    // } else {
    //     response.send('焦傲大帅比');
    // }
    response.send('焦傲大帅比');
});


app.listen(5501, () => {
    console.log("服务已经启动, 5501 端口监听中....");
});


