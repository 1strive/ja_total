/*
 * @Author: JA
 * @Date: 2022-03-27 00:29:02
 * @LastEditTime: 2022-03-27 14:37:26
 * @LastEditors: JA
 */


// 基于观察者模式，我们抽象出Subject和Object两个类，并解决了状态通知问题。还剩下两个问题：

// 1.如何监听property变化？
// 2.Observer对象如何订阅依赖的Subject对象？

//  对于第一个问题，我们知道：当且仅当程序对一个变量进行“写”操作时，变量的值可能会改变。所以可通过拦截property的”写“操作或代理的方式来监听变化。
//  第二个问题，只有当组件被渲染时才知道依赖了哪些property，此时对property进行”读“操作，并把Observer对象传给Subject对象
// ，这样就可以通过拦截property的”读“操作或代理的方式来订阅Subject。
//  实现方案有两种，Vue2用的是Object.defineProperty()来拦截读写操作，而Vue3是用ES6的Proxy代理方式。
//  在创建Vue实例时，遍历构造函数的data选项的所有property，并用Object.defineProperty() 给 property设置set()和get()
// ，这样property在被访问/修改时会触发get()和set()，即可以在get()中订阅Subject，在set()中通知变更。

// 模板
// function defineReactive(data, pro, val) {
//     Object.defineProperty(data, pro, {
//         enumerable: true,
//         configurable: true,
//         set(data) {
//             // do someting when write(监听变化)
//             val = data
//         },
//         get() {
//             // do someting when read(订阅Subject)
//             return val
//         }
//     })
// }

// Object.defineProperty(person,'age',{
//     // value:18, //属性对应的值，可以使用任意数据类型，默认为undefined
//     // enumerable:true, //控制属性是否可以枚举，默认值是false 
//     // writable:true, //控制属性是否可以被修改，默认值是false(控制的是person对象形成之后，不会影响本次value的赋值)(不可与getter和setter同时指定)
//     // configurable:true //控制属性是否可以被删除，默认值是false

//     //Object 自身没有提供方法删除其自身属性（Map 中的 Map.prototype.delete() 可以删除自身属性 ）为了删除对象上的属性，必须使用 delete 操作符
//     //即 delete person.age

//     //当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
//     get(){
//         console.log('有人读取age属性了')
//         return number
//     },

//     //当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
//     set(value){
//         console.log('有人修改了age属性，且值是',value)
//         number = value
//     }

// })
// 总结
//  本文实现了一个简单的响应式系统，来帮助大家理解响应式原理。主要包括监听变化、订阅依赖和状态通知三个部分：

// 状态通知：我们基于观察者模式，抽象出Subject类和Observer类，解决了状态通知的问题。

// 监听变化：在创建Vue实例时，遍历构造函数的data选项的所有property，并用Object.defineProperty() 
// 设置 property的set()和get()。当property被修改时，会触发set()中的Subject对象通知组件更新。

// 订阅依赖：每个组件实例都对应一个Observer对象，它会在组件渲染时收集依赖的property，并通过“读”操作触发get()，
// 完成订阅property对应的Subject对象。当Observer对象接收到变更通知时，会对组件进行更新。

// 总结实现

class Subject {
    //想要订阅的目标观察者
    static target
    observers = []
    // constructor(){
    // this.observers = [];
    // }

    subscribe() {
        let observer = Subject.target
        if (!this.observers.includes(observer)) {
            this.observers.push(Subject.target)//不含时添加
        }
    }

    notify() {
        this.observers.forEach(observer => {
            observer.update() //更新每个依赖组件
        })
    }
}

//正在评估的当前目标观察者。
//这是全局唯一的，因为只有一个观察者
//可以一次性评估。

Subject.target = null
const targetStack = []

function pushTarget(target) {
    targetStack.push(target)
    Subject.target = target
}

function popTarget() {
    targetStack.pop()
    Subject.target = targetStack[targetStack.length - 1]
}





/**
*观察者解析表达式
*并在表达式值更改时触发回调。
*这用于$watch（）api和指令。
 */
class Observer {
    constructor(vm, exp, cb) {
        console.log(vm,'vm');
        console.log(exp,'exp');
        console.log(cb,'cb');
        this.vm = vm
        this.cb = cb
        // parse expression for getter
        this.getter = parsePath(exp)
        //读取属性触发订阅
        pushTarget(this)
        this.value = this.get()
        popTarget()
    }

    /**
 * get the property value
 */

    get() {
        const vm = this.vm
        return this.getter.call(vm, vm)
    }

    /**
  * Observer interface. 观察者接口
  * Will be called when a subject changes.  subject对象改变时调用
  */
    update() {
        const oldValue = this.value
        this.value = this.get()
        this.cb.call(this.vm, this.value, oldValue)
    }


}

function parsePath(path) {
    const segments = path.split('.')
    return function (obj) {
        for (let i = 0; i < segments.length; i++) {
            if (!obj) return
            obj = obj[segments[i]]
        }
        return obj
    }
}

function defineReactive(data, pro, val) {
    let subject = new Subject()
    Object.defineProperty(data, pro, {
        enumerable: true,
        configurable: true, //控制属性是否可以被删除，默认值是false
        set(data) {
            // do someting when write(监听变化)
            if (data === val) {
                return
            }
            val = data
            subject.notify()
        },
        get() {
            // do someting when read(订阅Subject)
            // 在创建Observer实例时，会对property执行一次读操作，并把Observer实例通过全局变量传参。
            subject.subscribe()
            return val
        }
    })
}

let data = { pro1: '0' }
defineReactive(data, 'pro1', '2')
let observer = new Observer(data, 'pro1', (newVal, oldVal) => {
    console.log(`数据变化，刷新视图。newVal=${newVal},oldVal=${oldVal}`);
})

data.pro1 = '666';

//输出
// > data.pro1='666';
// > 数据变化，刷新视图。newVal=666，oldVal=0