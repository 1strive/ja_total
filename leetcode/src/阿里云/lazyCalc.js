/*
 * @Author: JA
 * @Date: 2022-03-25 17:55:06
 * @LastEditTime: 2022-03-25 18:04:33
 * @LastEditors: JA
 */
const lazyCalc = {
    n: 2,
    add(num) {  //加法
        this.addAns = this.n + num
    },

    tap(fn) {
        this.fn = fn
    },

    delay(delayTime) {
        this.delayTime = delayTime
    },

    multiply(num) { //乘法
        this.mul = this.addAns * num
    },

    output() {
        this.fn(this.addAns);
        setTimeout(() => {
            this.fn(this.mul)
        }, this.delayTime);
    }
}

lazyCalc.add(2)
lazyCalc.tap(console.log)
lazyCalc.delay(1000)
lazyCalc.multiply(3)

setTimeout(() => {
    lazyCalc.output();
}, 1000);

console.log('start');