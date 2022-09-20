/*
 * @Author: JA
 * @Date: 2022-09-16 00:08:36
 * @LastEditTime: 2022-09-16 00:49:03
 * @LastEditors: JA
 */
// 补全代码

function Human(name) {
    this.name = name
    this.kingdom = 'animal'
    this.color = ['yellow', 'white', 'brown', 'black']
}

function Chinese(name, age) {
    Human.call(this, name)
    this.age = age
    this.color = 'yellow'
}

Human.prototype.getName = function () {
    return this.name
}

const prototype = Object.create(Human.prototype)
Chinese.prototype = prototype
prototype.constructor = Chinese

Chinese.prototype.getAge = function () {
    return this.age
}

const c = new Chinese('z', 18)
console.log(c.getAge());
console.log(c.getName());
console.log(c.kingdom);
console.log(c.__proto__.constructor === Chinese);
console.log(c);