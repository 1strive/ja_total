/*
 * @Author: JA
 * @Date: 2022-06-09 20:43:59
 * @LastEditTime: 2022-11-01 17:23:50
 * @LastEditors: JA
 */
function resolveLru(str) {
    let arr1 = str.split("?")[1]
    let arr2 = arr1.split("&")
    let obj = arr2.reduce((begin,item)=>{
      //name=dzp
      let arr3 = item.split("=")
      begin[arr3[0]] = arr3[1]
      return begin
    },{})
    return obj
  }
  
  let obj = resolveLru("http://www.baidu.com?name=dzp&age=22")
  console.log(obj)