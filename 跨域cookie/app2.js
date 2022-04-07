/*
     * BOM
     * 	- 浏览器对象模型
     * 	- BOM可以使我们通过JS来操作浏览器
     * 	- 在BOM中为我们提供了一组对象，用来完成对浏览器的操作
     * 	- BOM对象
     * 		Window
     * 			- 代表的是整个浏览器的窗口，同时window也是网页中的全局对象
     * 		Navigator
     * 			- 代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器
     * 		Location
     * 			- 代表当前浏览器的地址栏信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面
     * 		History
     * 			- 代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录
     * 				由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页
     * 				而且该操作只在当次访问时有效
     * 		Screen
     * 			- 代表用户的屏幕的信息，通过该对象可以获取到用户的显示器的相关的信息
     * 
     * 
     * 		这些BOM对象在浏览器中都是作为window对象的属性保存的，
     * 			可以通过window对象来使用，也可以直接使用
     */


// src/app2.js
const express = require('express');

const app = express();

// 在所有路由前增加，可以拦截所有请求
app.get( '/anotherService',(req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");//携带cookie必须写成具体url
  res.header("Access-Control-Allow-Credentials", "true"); // ++ 新增cookie配置
  // next();
  const user = req.headers.cookie.split("=")[1];
  res.json({ code: 0, user });
});

app.listen(8001, () => {
  console.log("服务已经启动, 8001 端口监听中....");
});

