/*
 * @Author: JA
 * @Date: 2022-09-17 03:40:58
 * @LastEditTime: 2022-09-17 04:12:47
 * @LastEditors: JA
 */

// 1. 被观察者构造函数需要包含"name"属性和"state"属性且"state"初始值为"走路"
// 2. 被观察者创建"setObserver"函数用于保存观察者们
// 3. 被观察者创建"setState"函数用于设置该观察者"state"并且通知所有观察者
// 4. 观察者创建"update"函数用于被观察者进行消息通知，该函数需要打印（console.log）数据，
// 数据格式为：小明正在走路。其中"小明"为被观察者的"name"属性，"走路"为被观察者的"state"属性
function test() {
    let state = ''; global.console.log = function (event) { state = event };
    const obd = new Observerd('g'); const ob = new Observer();
    obd.setObserver(ob); obd.setState('跑步');
    const judge = state === 'g正在跑步';
    return judge
}

class Observerd {
    constructor(name, state = '走路') {
        this.name = name
        this.state = state
        this.ob = []
    }

    setObserver(ob) {
        this.ob.push(ob)
    }

    setState(state) {
        this.state = state
        this.ob.forEach(element => {
            element.updated(this.name, this.state)
        });
    }
}

class Observer {
    updated(...args) {
        const [name, state] = args
        console.log(`${name}正在${state}`);
    }
}
console.log(test());