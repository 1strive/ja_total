/*
 * @Author: JA
 * @Date: 2022-09-11 16:29:56
 * @LastEditTime: 2022-09-11 19:01:23
 * @LastEditors: JA
 */
// lib.js
var counter = 3;
var o = 1
var obj = {
    a: 22,
    j: 'opa'
}
// module.exports = { o, obj }
export { counter as ja, o, obj }

function add() {
    console.log('add');
}

export default add