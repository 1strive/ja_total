/*
 * @Author: JA
 * @Date: 2021-12-24 20:20:20
 * @LastEditTime: 2021-12-27 13:17:35
 * @LastEditors: JA
 */
/**
 * 日期格式化
 * @param {str} date 日期 2021-09-21 12：33：99
 * @param {str} fmt 格式 YY/MM/DD HH:mm:ss
 * @returns str 21/09/21 12：33：99
 */

// function fn(str) {
//     const a1 = str.split('-')
//     a1.unshift()
//     const temp = a1.unshift()
//     a1.shift('/')
//     a1.shift(temp)
//     const a2 = a1.toString().split(':')
//     a2.reverse()
//     a2.unshift()
//     a2.reverse()
    
//     return a2

// }

function fn(date,fmt){
    const d2 = new Date(date,fmt)
    console.log(d2);
}





/**
 * @param {str} date 日期 2021-09-21 12：33：99
 * @param {str} fmt 格式 MM/DD HH:mm
 * @returns str 09/21 12：33
 */