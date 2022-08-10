/*
 * @Author: JA
 * @Date: 2022-07-02 18:42:39
 * @LastEditTime: 2022-07-27 22:28:11
 * @LastEditors: JA
 */
var multiply = function (num1, num2) {
    if (num1 === "0" || num2 === "0") return "0"
    str1 = num1.split('').reverse();
    str2 = num2.split('').reverse();
    let result = [];
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            result[i + j] = result[i + j] || 0;
            //如果result[i+j]是undefined则将其变为0
            result[i + j] += parseInt(str1[i]) * parseInt(str2[j]);
        }
    }
    console.log(result);
    let temp;
    for (let k = 0; k < result.length; k++) {
        if (result[k] > 9) {
            temp = Math.floor(result[k] / 10);
            result[k] = result[k] % 10;
            result[k + 1] = result[k + 1] || 0;
            result[k + 1] += temp;
        }
    }
    return result.reverse().join('');

};

let str1 = '123'
let str2 = '456'
console.log(multiply(str1, str2));