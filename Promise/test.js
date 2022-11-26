/*
 * @Author: JA
 * @Date: 2022-06-09 20:43:56
 * @LastEditTime: 2022-11-25 15:17:09
 * @LastEditors: JA
 */
async function add() {
    console.log(23);
    try {
        var p = await Promise.reject(3)
    } catch (e) {
        console.log(e);
    }
}
add()
console.log(2);