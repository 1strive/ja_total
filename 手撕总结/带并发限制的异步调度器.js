/*
 * @Author: JA
 * @Date: 2022-09-14 19:13:39
 * @LastEditTime: 2022-10-19 23:09:25
 * @LastEditors: JA
 */
//最多有两个在运行

class Scheduler {

    constructor() {
        this.arr = []
        this.wait = []
    }

    // promiseCreator 是一个异步函数,return Promise
    add(promiseCreator) {
        return new Promise((resolve, reject) => {
            promiseCreator.resolve = resolve //截取reslove函数
            if (this.arr.length < 2) {
                this.exc(promiseCreator)
            } else {
                this.wait.push(promiseCreator)
            }
        })
    }

    exc(promiseCreator) {
        this.arr.push(promiseCreator)
        promiseCreator().then(() => {
            promiseCreator.resolve() //完成时改变返回状态
            this.move(promiseCreator)//完成时从执行队列中删除对应异步任务
            if (this.wait.length > 0) {
                this.exc(this.wait.shift())//完成后从等待队列提取下一个任务
            }
        })
    }

    move(promiseCreator) {
        let index = this.arr.findIndex(promiseCreator)
        this.arr.splice(index, 1)
    }

}

const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})

const scheduler = new Scheduler()
const addTask = (time, order) => {
    scheduler.add(() => timeout(time))
        .then(() => console.log(order))
}

addTask(400, 4) 
addTask(200, 2) 
addTask(100, 3) 
addTask(100, 1) 