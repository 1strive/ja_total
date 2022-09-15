/*
 * @Author: JA
 * @Date: 2022-08-23 16:10:59
 * @LastEditTime: 2022-09-14 14:39:15
 * @LastEditors: JA
 */


let str = 'welcome'
str = [...str].reduce((a, b, c) => {
    console.log(c);
    if (c === 0) {
        return b + '6'
    }
    return a + b + '6'
})
console.log(str);