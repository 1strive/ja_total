/*
 * @Author: JA
 * @Date: 2022-03-12 13:48:16
 * @LastEditTime: 2022-03-12 15:32:52
 * @LastEditors: JA
 */


// const total = readline()
// while (line = readline()) {
//     var str = line
// }
let str = 'helllllllloo'
const temp = zijie1(str)
console.log(temp);
// const ans = zijie2(temp)
// console.log(ans);
function zijie1(str) {
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1] && arr[i + 1] == arr[i + 2]) {
            arr.splice(i, 1,'')
        }
    }
    arr = arr.filter((i)=>{
        if(i != ''){
            return i
        }
    })
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1] && arr[i + 2] == arr[i + 3]) {
            arr.splice(i  + 2, 1, '')
        }
    }
    str = arr.join('')
    return str
}

// function zijie2(str) {
//     let arr = str.split('')
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[i + 1] && arr[i + 2] == arr[i + 3]) {
//             arr.splice(i, 1, '')
//         }
//     }
//     str = arr.join('')
//     return str
// }

// yybettxjpddsrxkyowwkyxplwivssnrvcclyddhaayiic
// yybeetxjjpddsrxxkyyowwkyyxpplwwivvsnrvvclyydhaayiic

// yybeettxjjppddsrxxkkyyoowwkyyxxppllwwiivvssnrvvcclyyddhaayiic
// yybettxjpddsrxkyowwkyxplwivssnrvcclyddhaayiic
// yybettxjjpddsrxxkkyyowwkyxxppllwivssnrvvcclyyddhaayiic