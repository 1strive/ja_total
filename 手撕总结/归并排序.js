/*
 * @Author: JA
<<<<<<< HEAD
 * @Date: 2022-06-09 20:43:59
 * @LastEditTime: 2022-08-31 02:16:39
 * @LastEditors: JA
 */
// “归并”的含义是将两个或两个以上的有序序列组合成一个新的有序表。假设初始序列含有n个记录，则可以看成是n个有序的子序列，每个子序列的长度为1，然后两两归并，
// 得到（表示不小于x的最小整数）个长度为2(或者是1)的有序子序列，再两两归并。如此重复，直到得到一个长度为n的有序序列为止。这种排序方法称为2-路归并排序。
=======
 * @Date: 2022-09-18 16:40:03
 * @LastEditTime: 2022-09-23 15:58:23
 * @LastEditors: JA
 */
>>>>>>> 8ee23c2f2793a8093e7a3e2c0eaec7a2af069675

const arr = [4, 3, 8, 2, 5, 1]

var a = mergeSort(arr)
console.log(a);


<<<<<<< HEAD
// function mergeSort(array) {

// }


function mergeSort(array) {
    var len = array.length;
    if (len < 2) {
        return array;
    }
    var middle = Math.floor(len / 2),
        left = array.slice(0, middle),
        right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
//归并过程
function merge(left, right) {
    var result = [];
=======
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
>>>>>>> 8ee23c2f2793a8093e7a3e2c0eaec7a2af069675
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