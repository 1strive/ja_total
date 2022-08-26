<<<<<<< HEAD
function a() {
    setTimeout(() => {
        console.log('a');
    }, 0);
}
function b() {
    // setTimeout(() => {
    Promise.resolve().then(() => {
        console.log('b');
    })
    // }, 0);
}
function test() {
    a()
    b()
}
test()
=======
/*
 * @Author: JA
 * @Date: 2022-06-09 20:43:59
 * @LastEditTime: 2022-07-26 22:36:20
 * @LastEditors: JA
 */
class Emitter {
    constructor(max) {
        this.max = max
        this.asyncIdx = 0
    }

    async *[Symbol.asyncIterator]() {
        while (this.asyncIdx < this.max) {
            yield new Promise((resolve) => resolve(this.asyncIdx++))
        }
    }
}

>>>>>>> 63c743e4333a14dbf2c6c8667ce432a1374c963a
