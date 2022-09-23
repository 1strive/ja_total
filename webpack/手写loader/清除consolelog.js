/*
 * @Author: JA
 * @Date: 2022-09-22 23:39:46
 * @LastEditTime: 2022-09-22 23:59:56
 * @LastEditors: JA
 */

const reg = /(console.log()(.*)())/g
const t = 'console.log(1234)'
function check(source) {
    source = source.replace(y, "")
    return source
}
console.log(check(t));
module.exports = function (source) {
    source = source.replace(reg, "")
    return source
}