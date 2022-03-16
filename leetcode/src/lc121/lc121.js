/*
 * @Author: JA
 * @Date: 2022-03-13 11:00:14
 * @LastEditTime: 2022-03-13 12:54:19
 * @LastEditors: JA
 */

const e = require("express")

function maxProfit(prices) {
    let minPrince = Number.MAX_VALUE
    let maxAns = 0
    for (let i = 0; i < prices.length; i++) {
      if(prices[i] < minPrince){
          minPrince = prices[i]
      }else if(prices[i] - minPrince > maxAns){
          maxAns = prices[i] - minPrince
      }
    }
    return maxAns
}


const arr = [1]
const ans = maxProfit(arr)
console.log(ans);