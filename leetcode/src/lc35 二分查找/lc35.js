/*
 * @Author: JA
 * @Date: 2022-06-09 20:43:58
 * @LastEditTime: 2022-09-05 01:28:49
 * @LastEditors: JA
 */

// function searchInsert(nums, target) {
//   let left = 0
//   let right = nums.length - 1
//   while(left <= right){
//       let mid = (left + right)/2
//       if(nums[mid] == target){
//           //相关逻辑
//       }else if(nums[mid] < target){
//         left = mid + 1
//       }else{
//         right = mid - 1
//       }
//   }
// //返回相关值
//   return 0
// }
// Math.floor() 等价于 >>> 1;
// 优化点：left+(right-left)/2 一般情况下与 (left+right)/2一样，但是当left 与right均为很大的数时候，left+right 
// 可能会超过系统最大值，从而报错，而left + ( right - left) /2 则不会超过。
let arr = [1, 2, 3, 5, 9]
let target = 4
const ans = searchInsert(arr, target)
console.log(ans);
//普适性更强 数组为空也适用  且返回结果left永远和right相同
//左闭右开区间
function searchInsert(nums, target) {
  let left = 0
  let right = nums.length //此处是否-1不影响
  while (left < right) { //right为nums.length时 可以为<号
    let mid = left + right >>> 1
    if (nums[mid] == target) {
      //相关逻辑
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid //为 <号时，right为nums.length时 mid 不能-1 否则会出现重合不判定的情况
      //为<=号时，必须-1
    }
  }
  //返回相关值   
  return left
}
//双闭合区间
// function searchInsert(nums, target) {
//   let left = 0
//   let right = nums.length //此处是否-1不影响
//   while (left <= right) { //right为nums.length时 可以为<号
//     let mid = left + right >>> 1
//     if (nums[mid] == target) {
//       //相关逻辑
//       return mid
//     } else if (nums[mid] < target) {
//       left = mid + 1
//     } else {
//       right = mid - 1 //为 <号时，right为nums.length时 mid 不能-1 否则会出现重合不判定的情况
//       //为<=号时，必须-1
//     }
//   }
//   //返回相关值
//   return left
// }

// 二次比较的时候不要有重复项，即当middle与目标值不等的时候，给left/right 赋值的时候需要格外注意，
// 否则会造成无限循环。如：