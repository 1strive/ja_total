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

