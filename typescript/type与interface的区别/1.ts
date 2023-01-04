/*
 * @Author: JA
 * @Date: 2022-08-23 01:15:44
 * @LastEditTime: 2022-08-23 01:42:32
 * @LastEditors: JA
 */
// 首先聊聊type可以做到，但interface不能做到的事情

import { type } from "os"

// type可以定义 基本类型的别名，如 type myString = string
// type可以通过 typeof 操作符来定义，如 type myType = typeof someObj
// type可以申明 联合类型，如 type unionType = myType1 | myType2 (关系为或)
// type可以申明 元组类型，如 type yuanzu = [myType1, myType2]

// 接下来聊聊interface可以做到，但是type不可以做到的事情


// interface可以 声明合并，示例如下
interface test1 {
    name: string
}
interface test1 {
    age: number
}

/*
    test1实际为 {
        name: string
        age: number
    }
*/


//都可以继承 interface 用 extends  type用 &
interface b {
    ma: string,
    mb: number | string,
}
interface b {
    mc: {

    }
}

interface test {
    num: number
}


interface obj extends test {
    a: string,
    b: b,
    add: () => number
}

type mc = {
    name: string,
    age: number
    kk: never
}

type ppp = [b, obj]

const obj: obj = {
    num: 0,
    a: 'asdasd',
    b: {
        ma: 'dddd',
        mb: '2',
        mc: {
        }
    },
    add() {
        return this.num++
    }
}

const arr: ppp = [obj.b, obj]

type ja = {
    a: string,
    b: number
}

type ooo = {
    c: object
}
