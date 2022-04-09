
// JS数据类型：Number Boolean String undefined BigInt Symbol null Object

// js 在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息👉


// 000：对象
// 010：浮点数
// 100：字符串
// 110：布尔
// 1：整数

// but, 对于 undefined 和 null 来说，这两个值的信息存储是有点特殊的。

// null：所有机器码均为0

// undefined：用 −2^30 整数来表示
// 所以，typeof 在判断 null 的时候就出现问题了，由于 null 的所有机器码均为0，因此直接被当做了对象来看待。


console.log(typeof null);

const arr = ['',null]
console.log(arr[1]);

// null与undefined的区别
// null 是 javascript 的关键字，表示一个特殊值，常用来描述"空值"，typeof 运算返回"object"，
// 所以可以将 null 认为是一个特殊的对象值，含义是"非对象"。
// undefined 是预定义的全局变量，他的值就是"未定义"， typeof 运算返回 "undefined"

console.log(Boolean(null));//false
console.log(Boolean(undefined));//false

console.log(Number(null));//0
console.log(Number(undefined));//NaN

console.log(null == undefined);//true
console.log(null === undefined);//false

isNull = function(obj){
    return obj === null
}

isUndefined =function(obj){
    return obj === void 0 //void 运算符 对给定的表达式进行求值，然后返回 undefined。
}

// 用法：
// null 常用来定义一个空值

// undefined 典型用法是：

// 变量被声明了，但没有赋值时，就等于 undefined。
// var test;
// console.log(test); //undefined
// 调用函数时，应该提供的参数没有提供，该参数等于 undefined。
// //类如jQuery最外层IIFE用法
// //这里是为确保undefined的值，因为es3中undefined可以赋值，es5才做了修正,变为只读

// (function( window, undefined) {

// })(window)
// 对象没有赋值的属性，该属性的值为 undefined。
// var test = {}
// console.log(test.a); // undefined
// 函数没有返回值时，默认返回 undefined。
// function test() {}
// test(); //undefined
// 解构赋值时，undefined会使用默认值
// const s = { a: null }
// const { a = 'a', b = 'b' } = s;
// console.log(a, b); // null 'b'


// console.log(Number.MAX_VALUE);//最大可表示数字
// console.log(Number.MAX_SAFE_INTEGER);//最大安全数字 超过此数字表示不准确
