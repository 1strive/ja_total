/*
 * @Author: ja
 * @Date: 2021-12-29 19:52:49
 * @LastEditors: ja
 * @LastEditTime: 2021-12-29 20:46:51
 */
//引入 fs 模块
const fs = require("fs");
//回调地狱问题：1.易出现变量名重复  2.无限缩进
 

// fs.readFile('./resources/为学.md', (err, data1)=>{
//     fs.readFile('./resources/插秧诗.md', (err, data2)=>{
//         fs.readFile('./resources/观书有感.md', (err, data3)=>{
//             let result = data1 + '\r\n' +data2  +'\r\n'+ data3;
//             console.log(result);
//         });
//     });
// });

//使用 promise 实现
const p = new Promise((resolve, reject) => {
    fs.readFile("./resources/为学.md", (err, data) => {
        resolve(data);
    });
});

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/插秧诗.md", (err, data) => {
            resolve([value, data]);
        });
    });
}).then(value => {  //此时value为上一次的返回值，此处为[value, data]
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/观书有感.md", (err, data) => {
            //压入
            value.push(data);//此时value为上一次的返回值，此处为[value, data]
            resolve(value);
        });
    })
}).then(value => {
    console.log(value.join('\r\n'));
});