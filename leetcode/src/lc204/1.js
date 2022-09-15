/*
 * @Author: JA
 * @Date: 2022-09-08 12:46:12
 * @LastEditTime: 2022-09-08 13:46:29
 * @LastEditors: JA
 */
// function countPrimes(n) {
//     let ans = 0
//     for (let i = 0; i < n; i++) {
//         if (isPrime(i)) {
//             ans++
//         }
//     }
//     return ans
// }

// function isPrime(m) {
//     if (m === 0 || m === 1) {
//         return false
//     }
//     let s = Math.sqrt(m)
//     for (let i = 2; i <= s; i++) {
//         if (m % i === 0) {
//             return false
//         }
//     }
//     return true
// }


var countPrimes = function (n) {
    // 定义数组来表示当前下标是否是质数，并将数组都初始化为true
    let isPrime = new Array(n).fill(true);
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    let count = 0;
    console.log(isPrime);
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) count++;
    }
    return count;
};

console.log(countPrimes(10));