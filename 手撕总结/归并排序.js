/*
 * @Author: JA
 * @Date: 2022-09-18 16:40:03
 * @LastEditTime: 2022-09-23 15:58:23
 * @LastEditors: JA
 */

const arr = [4, 3, 8, 2, 5, 1]

var a = mergeSort(arr)
console.log(a);


function mergeSort(array) {
    let len = array.length
    if (len < 2) {
        return array
    }
    let middle = Math.floor(len / 2),
        left = array.slice(0, middle),
        right = array.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());
    while (right.length)
        result.push(right.shift());
    return result;
}