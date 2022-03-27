/*
 * @Author: JA
 * @Date: 2022-03-26 21:12:11
 * @LastEditTime: 2022-03-27 10:50:21
 * @LastEditors: JA
 */
/**
 * A subject is an observable that can have multiple
 * observers subscribing to it.
 */
class Subject {
	// the target observer which want to subscribe
	static target;
	constructor() {
		this.observers = [];
	}
	subscribe() {
		let observer = Subject.target;
		if (!this.observers.includes(observer)) {
			this.observers.push(Subject.target);
		}
	}
	notify() {
		this.observers.forEach(observer => {
			observer.update();
		});
	}
}

// The current target watcher being evaluated.
// This is globally unique because only one observer
// can be evaluated at a time.
Subject.target = null;
const targetStack = [];

function pushTarget(target) {
	targetStack.push(target);
	Subject.target = target;
}

function popTarget() {
	targetStack.pop();
	Subject.target = targetStack[targetStack.length - 1];
}


/**
* A observer parses an expression
* and fires callback when the expression value changes.
* This is used for both the $watch() api and directives.
*/
class Observer {
	constructor(vm, exp, cb) {
		this.vm = vm;
		this.cb = cb;
		// parse expression for getter
		this.getter = parsePath(exp);
		// read the property to subscribe the Subject
		pushTarget(this);
		this.value = this.get();
		popTarget();
	}
	/**
	 * get the property value
	 */
	get() {
		const vm = this.vm;
		return this.getter.call(vm, vm);
	}
	/**
	 * Observer interface.
	 * Will be called when a subject changes.
	 */
	update() {
		const oldValue = this.value;
		this.value = this.get();
		this.cb.call(this.vm, this.value, oldValue);
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
	let subject = new Subject();
	Object.defineProperty(data, pro, {
		enumerable: true,
		configurable: true,
		set(data) {
			// do someting when write(监听变化)
			if (data === val) {
				return;
			}
			val = data;
			subject.notify();
		},
		get() {
			// do someting when read(订阅Subject)
			// 在创建Observer实例时，会对property执行一次读操作，并把Observer实例通过全局变量传参。
			subject.subscribe();
			return val;
		}
	});
}

let data = { pro1: "0" };
defineReactive(data, "pro1", "0");
let observer = new Observer(data, "pro1", (newVal, oldVal) => {
	console.log(`数据变化，刷新视图。newVal=${newVal}，oldVal=${oldVal}`);
});

// > data.pro1='666';
// > 数据变化，刷新视图。newVal=666，oldVal=0

