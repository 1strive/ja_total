//1.实现一个add 函数，同时支持下面这几种的用法
// add(1, 2, 3);
// add(1, 2)(3);
// add(1)(2, 3);

// const curry = (fn, ...args) => {
//     // 函数的参数个数可以直接通过函数数的.length属性来访问
//     return args.length >= fn.length // 这个判断很关键！！！
//         // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
//         ? fn(...args)
//         /**
//          * 传入的参数小于原始函数fn的参数个数时
//          * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
//         */
//         : (..._args) => curry(fn, ...args, ..._args);
// }


// function add1(x, y, z) {
//     return x + y + z;
// }
// const add = curry(add1);
// console.log(add(1, 2, 3));
// console.log(add(1)(2)(3));
// console.log(add(1, 2)(3));
// console.log(add(1)(2, 3));


// 2. 实现一个无限累加函数
// 问题：用 JS 实现一个无限累加的函数 add，示例如下：
// add(1); // 1
// add(1)(2);  // 3
// add(1)(2)(3)； // 6
// add(1)(2)(3)(4)； // 10 

// // 以此类推

// 我们要了解一个知识点： 当我们直接对函数使用 alert() 或 console.log() 时，
// 函数的 toString() 方法会被调用。
// function add(a) {
//     function sum(b) { // 使用闭包
//         a = b ? a + b : a; // 累加
//         return sum;
//     }
//     sum.toString = function () { // 只在最后一次调用
//         return a;
//     }
//     return sum; // 返回一个函数
// }

// console.log(add(1));			// 1
// console.log(add(1)(2)(3)(4));	// 10 


// 3. 柯里化实现多参累加
// 这里是上面累加的升级版，实现多参数传递累加。
// add(1)(3,4)(3,5)	// 16
// add(2)(2)(3,5)		// 12

function add(...args) {
    let fn = function (...args) {
        return add.apply(null, args.concat(args))
    }
    fn.toString = () => args.reduce((a, b) => a + b)
    return fn
}

console.log(add(1)(2)(3)) //f 6
