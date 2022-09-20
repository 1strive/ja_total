/*
 * @Author: JA
 * @Date: 2022-09-17 02:23:26
 * @LastEditTime: 2022-09-17 03:38:31
 * @LastEditors: JA
 */

Function.prototype._call = function (thisArg, ...args) {
    // 2.将 thisArg 转成对象类型（防止它传入的是非对象类型，例如123数字）
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
    thisArg[this] = this
    const tmp = thisArg[this](...args)
    delete thisArg[this]
    return tmp //要有返回数据！
}
Function.prototype._apply = function (thisArg, arr) {
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
    thisArg[this] = this
    const tmp = thisArg[this](arr)
    delete thisArg[this]
    return tmp //要有返回数据！
}
// bind需要借助call实现
Function.prototype._bind = function (thisArg, ...args) {
    let fn = this// 需要调用的那个函数的引用
    return function () {
        return fn._call(thisArg, ...args)
    }
}

console.log(global);