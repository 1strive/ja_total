/*
 * @Description: 
 * @Author: JA
 * @Date: 2021-12-03 17:17:40
 * @LastEditTime: 2021-12-03 20:21:21
 * @LastEditors: JA
 * @Reference: 
 */
//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();


app.all('/check-username',(request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
});


//4. 监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动, 8000 端口监听中....");
});
