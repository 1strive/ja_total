/*
 * @Author: JA
 * @Date: 2022-06-09 20:43:59
 * @LastEditTime: 2022-08-26 16:21:39
 * @LastEditors: JA
 */


const vm = new WeakMap()

class User {
    constructor(id) {
        this.idProperty = Symbol('id')
        this.setId('id')
    }

    setPrivate(property, value) {
        const privateMembers = vm.get(this) || {}
        privateMembers[property] = value
        vm.set(this, privateMembers)
    }

    getPrivate(property) {
        return vm.get(this)[property]
    }

    setId(id) {
        this.setPrivate(this.idProperty, id)
    }

    getId() {
        return this.getPrivate(this.idProperty)
    }
}

const user = new User(123)
alert(user.getId())
user.setId(456)
alert(user.getId())
alert(vm.get(user)[user.idProperty])