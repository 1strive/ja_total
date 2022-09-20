/*
 * @Author: JA
 * @Date: 2022-09-04 11:50:58
 * @LastEditTime: 2022-09-04 12:24:20
 * @LastEditors: JA
 */
let v1 = '1.01', v2 = '1.001.1'
function compareVersion(version1, version2) {

    const arr1 = version1.split('.')
    const arr2 = version2.split('.')

    let len = arr1.length > arr2.length ? arr1.length : arr2.length

    let i = 0
    while (i < len) {
        let a1, a2
        if (arr1[i]) {
            let temp1 = [...arr1[i]]
            while (temp1[0] === '0') {
                temp1.shift()
            }
            if (!temp1.length) {
                a1 = 0
            } else {
                a1 = Number(temp1.join(''))
            }
        } else {
            a1 = 0
        }
        if (arr2[i]) {
            let temp2 = [...arr2[i]]
            while (temp2[0] === '0') {
                temp2.shift()
            }
            if (!temp2.length) {
                a2 = 0
            } else {
                a2 = Number(temp2.join(''))
            }
        } else {
            a2 = 0
        }

        if (a1 > a2) {
            return 1
        }
        if (a1 < a2) {
            return -1
        }
        i++
    }
    return 0
};


console.log(compareVersion(v1, v2), 'ans');
console.log('2' > '3');