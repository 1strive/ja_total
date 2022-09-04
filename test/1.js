/*
 * @Author: JA
 * @Date: 2022-06-09 20:43:59
 * @LastEditTime: 2022-09-03 20:51:48
 * @LastEditors: JA
 */




const len = 9, arr = [[1, 5], [3, 6], [7, 7], [6, 9]]
function minAnt(len, arr) {
    let arrL = arr.length
    arr.sort((a, b) => {
        return a[0] - b[0]
    })
   
    let i = 0
    while (i < arr.length) {
       const tep =  arr.shift()[1]
       arr.filter((i)=>{
        
       })
    }
    console.log(arr);
}

minAnt(len, arr)