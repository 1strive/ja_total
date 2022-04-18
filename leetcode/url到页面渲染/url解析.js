// 利用正则表达式
let url = "http://www.baidu.com?name=elephant&age=25&sex=male&num=100"
// // 返回参数对象
function queryURLParams(url) {
    let pattern = /(\w+)=(\w+)/ig; //定义正则表达式  // + 至少一个，相当于{1,}  // \w   任意字母、数字、_  [A-z0-9_]
    //g	全局搜索。
    //i不区分大小写搜索。
    let parames = {}; // 定义参数对象
    url.replace(pattern, ($, $1, $2) => {
        // console.log($, $1, $2);//age=25 age 25
        parames[$1] = $2;
    });
    return parames;
}
// function (replacement)
// 一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果。参考下面的指定一个函数作为参数。
// 假如replace()方法的第一个参数是一个RegExp 对象，则代表第n个括号匹配的字符串。（对应于上述的$1，$2等。）例如，如果是用 /(\a+)(\b+)/ 这个来匹配，p1 就是匹配的 \a+，p2 就是匹配的 \b+。
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