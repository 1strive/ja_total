/*
 * @Author: JA
 * @Date: 2022-09-04 21:03:56
 * @LastEditTime: 2022-09-05 02:13:04
 * @LastEditors: JA
 */


// function lengthOfLIS(nums) {
//     let ans = []
//     //可能会有多组
//     let max = 0
//     if (nums.length === 1) {
//         return nums.length
//     }
//     ans.push(nums[0])
//     let queue = []
//     queue.push([ans, 1])
//     while (queue.length) {
//         let shift = queue.shift()
//         let ans = shift[0]
//         let len = shift[1]
//         for (let i = len; i < nums.length; i++) {
//             if (nums[i] < ans[0]) {
//                 ans.shift()
//                 ans.unshift(nums[i])
//                 continue
//             }
//             if (nums[i] > ans[ans.length - 1]) {
//                 ans.push(nums[i])
//                 continue
//             }
//             if (nums[i] < ans[ans.length - 1] && !ans.includes(nums[i])) {
//                 let temp = ans.filter((item) => {
//                     return item < nums[i]
//                 })
//                 temp.push(nums[i])
//                 queue.push([temp, i + 1])
//             }
//         }
//         max = Math.max(ans.length, max)
//     }
//     return max
// };
// lengthOfLIS(arr)

// const arr = [10, 9, 2, 5, 3, 7, 101, 18]
// const arr = [1, 2, 0, 4, 3, 4]
// const arr = [0, 1, 0, 3, 2, 3]
// const arr = [1, 3, 6, 7, 9, 4, 10, 5, 6]
function lengthOfLIS(nums) {
    const ans = []
    for (let i = 0; i < nums.length; i++) {
        let left = 0
        let right = nums.length
        while (left < right) {
            let mid = left + right >>> 1
            if (nums[i] > ans[mid]) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        ans[right] = nums[i]
    }
    return ans.length
};






//贪心 + 二分查找
// function lengthOfLIS(nums) {
//     let ans = [];
//     for (let i = 0; i < nums.length; i++) {
//         let left = 0, right = ans.length;
//         while (left < right) { //二分法
//             let mid = left + right >>> 1;
//             if (ans[mid] < nums[i]) left = mid + 1;
//             else right = mid;
//         }
//         //如果找不到 ，right值不会变，在ans最后增加一项nums[i]
//         ans[right] = nums[i];
//         console.log(ans);
//     }
//     return ans.length;
// };
const arr = [1, 2, 0, 4, 3, 4]
lengthOfLIS1(arr)


//动态规划

// function lengthOfLIS(nums) {
//     const dp = [1]
//     for (let i = 1; i < nums.length; i++) {
//         dp[i] = 1
//         for (let j = 0; j < i; j++) {
//             if (nums[j] < nums[i]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1) //所以dp[j] + 1 中最大的数
//             }
//         }
//     }
//     return Math.max(...dp)
// };



