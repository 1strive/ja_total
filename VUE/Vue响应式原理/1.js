/*
 * @Author: JA
 * @Date: 2022-03-26 21:26:26
 * @LastEditTime: 2022-03-27 10:58:10
 * @LastEditors: JA
 * 
 */


// 观察者模式：当一个对象的状态发生改变时，所有关联的对象会得到通知并自动更新。解决的是一个对象状态改变给其他对象通知的问题

// 观察者模式中有两种角色：
// 目标对象(Subject)：拥有一个观察者列表，并提供注册、删除观察者的方法，以及在状态发生改变时，通知所有已注册的观察者对象。
// 观察者(Object)：提供一个更新自身状态的方法，以便给目标对象(Subject)状态发生改变时可以调用。

//  根据观察者模式，分别找出响应式系统中的目标对象(Subject)和观察者(Object)：这里的S
// ubject负责在property变化时通知Observer，而Observer在接收到变更通知时触发组件更新。
// 代码如下：
class Subject {
	observers = []

	subscribe(observer) {
		this.observers.push(observer)
	}

	notify() {
		const observers = this.observers
		observers.forEach(observer => {
			observer.update();
		});
	}
}

class Observer {
	constructor(vm, exp, cb) {
		this.vm = vm
		this.cb = cb
		this.getter = parsePath(exp)
	}

	//通过此方法获取value
	get(){
		let value
		const vm = this.vm
		value = this.getter.call(vm, vm)
		return value
	}

	updated(){
		const value = this.get()
		if (value !== this.value) {
			const oldValue = this.value
			this.value = value
			this.cb.call(this.vm, value, oldValue)
		}
	}
}


// const obs = new Observer()

//  基于观察者模式，我们抽象出Subject和Object两个类，并解决了状态通知问题。还剩下两个问题：

// 如何监听property变化？
// Observer对象如何订阅依赖的Subject对象？

//  对于第一个问题，我们知道：当且仅当程序对一个变量进行“写”操作时，变量的值可能会改变。所以可通过拦截property的”写“操作或代理的方式来监听变化。
//  第二个问题，只有当组件被渲染时才知道依赖了哪些property，此时对property进行”读“操作，并把Observer对象传给Subject对象，这样就可以通过拦截property的”读“操作或代理的方式来订阅Subject。
//  实现方案有两种，Vue2用的是Object.defineProperty()来拦截读写操作，而Vue3是用ES6的Proxy代理方式。
//  在创建Vue实例时，遍历构造函数的data选项的所有property，并用Object.defineProperty() 给 property设置set()和get()，这样property在被访问/修改时会触发get()和set()，即可以在get()中订阅Subject，在set()中通知变更。


//  在创建Vue实例时，遍历构造函数的data选项的所有property，并用Object.defineProperty() 给 property设置set()和get()，
// 这样property在被访问/修改时会触发get()和set()，即可以在get()中订阅Subject，在set()中通知变更。
