
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
let arr = [1, 2, 3, 5, 9]
let target = 4
const ans = searchInsert(arr,target)
console.log(ans);
function searchInsert(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] == target) {
      //相关逻辑
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  //返回相关值
  return left
}