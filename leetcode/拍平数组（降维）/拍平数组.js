/*
 * @Author: JA
 * @Date: 2021-12-23 14:12:37
 * @LastEditTime: 2021-12-23 16:06:18
 * @LastEditors: JA
 */

//test

const arr = [1, 3, 4, 5, [23, 4, 5, 6], [2, 3, 4, [2]]]
var ans = flatten4(arr)
console.log(ans);
//零：调用Array实例对象方法，
// console.log(arr.flat());只能降一维
// console.log(arr.flatMap((a)=>{
//    return a 
// }));//使用映射函数映射每个元素，然后将结果压缩成一个新数组

//一、递归

function flatten(arr) {
    var result = [];
    // console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))//concat 会返回新数组且不会改变原数组  //降至一维
            // result = result.concat(arr[i])//只降一维
        }
        else {
            result.push(arr[i])
        }
    }
    return result
}

//二、toString
function flatten1(arr) {
    return arr.toString().split(',').map((i) => {
        // return +i  //两种都可以实现String变Number
        return parseInt(i)
    })

}

//三、reduce
function flatten3(arr) {
    return arr.reduce((prev, next) => {
        return prev.concat(Array.isArray(next) ? flatten(next) : next)
    }, [])//reducer后的参数作为初始值（此处为[]）
}

//四、rest运算符
//some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
// const array = [1, 2, 3, 4, 5];

// // checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));
// // expected output: true
function flatten4(arr) {
    while (arr.some(item => Array.isArray(item))) {
        // console.log(...arr);
        arr = [].concat(...arr);//『...』 扩展运算符能将『数组』转换为逗号分隔的『参数序列』 // concat会连接所有的参数
        // console.log(arr);
    }
    return arr
}