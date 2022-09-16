const obj1 = {}
const obj = {
    a: {
        // d: 'asd',
        da: {

        }
    }
}
obj1.a = obj
function maxDeep(obj) {
    let deep = 0
    function deepClone(target, map = new Map(), level = 0) {
        deep = Math.max(deep, level)
        if (typeof target === 'object') {
            let cloneTarget = Array.isArray(target) ? [] : {}
            if (map.get(target)) {
                return map.get(target)
            }
            map.set(target, cloneTarget)
            for (const key in target) {
                cloneTarget[key] = deepClone(target[key], map, level + 1)
            }
            return cloneTarget
        } else return target
    }
    deepClone(obj)
    return deep
}


const ans = maxDeep(obj)
console.log(ans, 'ans');