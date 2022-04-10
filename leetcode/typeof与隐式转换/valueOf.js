// 不同类型对象的valueOf()方法的返回值
// valueOf() 方法返回指定对象的原始值。
// 对象	返回值
// Array	返回数组对象本身。
// Boolean	布尔值。
// Date	存储的时间是从 1970 年 1 月 1 日午夜开始计的毫秒数 UTC。
// Function	函数本身。
// Number	数字值。
// Object	对象本身。这是默认情况。(valueOf() 方法返回指定对象的原始值,即调用ToPrimitive。)
// String	字符串值。
//  	Math 和 Error 对象没有 valueOf 方法。

// new一个字符串对象
var str2 = new String("http://www.xyz.com");
// 两者的值相等，但不全等，因为类型不同，前者为string类型，后者为object类型
console.log( str2.valueOf() === str2 );   // false
console.log(str2.valueOf());


// console.log(null.valueOf()); 报错
// console.log(undefined.valueOf()); 报错
// console.log(null.toString());报错
// console.log(undefined.toString());报错
