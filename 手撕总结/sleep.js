/*
 * @Author: JA
 * @Date: 2022-09-18 03:56:59
 * @LastEditTime: 2022-09-18 04:01:34
 * @LastEditors: JA
 */
async function test() {
    console.log(1);
    await sleep(4000)
    console.log(2);
}

function sleep(time) {
    return new Promise((reslove) => {
        console.log('睡');
        setTimeout(() => {
            reslove()
        }, time)
    })

}

test()
console.log('同步');