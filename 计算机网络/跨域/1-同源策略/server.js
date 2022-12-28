/*
 * @Description: 
 * @Author: JA
 * @Date: 2020-07-21 14:31:53
 * @LastEditTime: 2021-12-03 16:25:10
 * @LastEditors: JA
 * @Reference: 
 */
const express = require('express');

const app = express();

app.get('/home', (request, response)=>{
    //响应一个页面
    response.sendFile(__dirname + '/index.html');
});

app.get('/data', (request, response)=>{
    response.send('用户数据');
});

app.listen(9000, ()=>{
    console.log("9000服务已经启动...");
});