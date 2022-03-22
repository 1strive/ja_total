
// 基于 PromiseA+ 规范的只含 resolve 方法的 Promise 模型:

class Promise {
    constructor(fn) {
        this.fn = fn
    }

    state = 'pending'
    value = null
    callbacks = []

    then(onFullfilled){
        
    }

}