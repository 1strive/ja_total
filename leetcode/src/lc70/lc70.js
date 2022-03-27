/*
 * @Author: JA
 * @Date: 2022-03-13 12:15:04
 * @LastEditTime: 2022-03-13 12:17:07
 * @LastEditors: JA
 */

//斐波那契
function climbStairs(n){
    let p = 0 ,q= 0,r = 1
    for(let i = 0;i < n ;i++){
        p = q
        q = r
        r = p + q
    }
    return r

}