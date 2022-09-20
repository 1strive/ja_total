/*
 * @Author: JA
 * @Date: 2022-09-15 17:41:59
 * @LastEditTime: 2022-09-15 18:46:42
 * @LastEditors: JA
 */
function myNew(fn, ...args) {
    const obj = {}
    obj.__proto__ = fn.prototype
    //若构造函数返回对象类型，则返回构造函数返回的对象
    let result = fn.apply(obj, args)
    return typeof result === 'object' ? result : obj
}

function Car(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
    return {}
}

var test_create = myNew(Car, 'a', 'b', 'c');
const car = new Car('1', '2')
console.log(test_create);