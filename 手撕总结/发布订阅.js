/*
 * @Author: JA
 * @Date: 2022-09-17 03:40:51
 * @LastEditTime: 2022-09-17 03:53:11
 * @LastEditors: JA
 */


class EventEmitter {
    constructor() {
        this.map = new Map()
    }

    on(target, cb) {
        const queue = this.map.get(target) ? this.map.get(target) : []
        queue.push(cb)
        this.map.set(target, queue)
    }

    emit(target) {
        if (this.map.get(target)) {
            const queue = this.map.get(target)
            queue.forEach((cb) => {
                cb()
            })
        } else {
            return '请先订阅谢谢!'
        }
    }

}

function test() {
    let sign1 = 0; let sign2 = 0;
    const emitter = new EventEmitter();
    emitter.on('add', function () { sign1++ });
    emitter.emit('add');
    emitter.on('add', function () { sign2++ });
    emitter.emit('add'); const judge = sign1 === 2 && sign2 === 1; return judge
}

console.log(test());