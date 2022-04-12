// 利用正则表达式
let url = "http://www.baidu.com?name=elephant&age=25&sex=male&num=100"
// // 返回参数对象
function queryURLParams(url) {
    let pattern = /(\w+)=(\w+)/ig; //定义正则表达式
    let parames = {}; // 定义参数对象
    url.replace(pattern, ($, $1, $2) => {
        parames[$1] = $2;
    });
    return parames;
}
console.log(queryURLParams(url))


//split
function queryURL(url) {
    // console.log(queryURL(url))  浏览器中可直接调用bomAPI  location.search获取当前url地址（即location）？后的参数
    let query = url.split('?')[1].split('&').map((i) => {
        return i.split('=')
    })
    let parames = {}
    for (let i = 0; i < query.length; i++) {
        parames[query[i][0]] = query[i][1]
    }
    return parames
}
const ans = queryURL(url)
console.log(ans);
for (const ele in ans) {
    console.log(ele);
}

const map = new Map([[1, 2], [2, 3], [4, 5]])
for (const ele of map) {
    console.log(ele);
}

let str = '123445'
for (let iterator of str) {
    iterator = 'a'
}

console.log(str);