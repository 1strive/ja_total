// src/app2.js
const express = require("express");
const app = express();

// 定义一个接口，index.html页面请求这个接口就是跨域（因为端口不同）
app.get("/anotherService", (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const user = req.headers.cookie.split("=")[1];
    res.json({ code: 0, user });
});
// 在所有路由前增加，可以拦截所有请求
// app.all("*", (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:8000");
//     res.header("Access-Control-Allow-Credentials", "true"); // ++ 新增
//     next();
//   });



app.listen("8003", () => {
    console.log("app2 running at port 8003");
});
