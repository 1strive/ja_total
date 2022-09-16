function test() {
    const o = { name: 'z', fn: function () { } };
    _objectFreeze(o);
    o.name = 'g'; o.fn = 1; o.o = 1;
    const result = o.name === 'z' && typeof o.fn === 'function' && o.o === undefined;
    return result
}
function _objectFreeze(obj) {
    //若需考虑symbol和不可枚举属性  使用getOwnPropertyDescriptors
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {//防止带上原型上的key
            Object.defineProperty(obj, key, {
                value: obj[key],
                enumerable: false,
                writable: false,
                configurable: false,
            })
        }
    }
    Object.seal(obj)
    // preventExtensions
}
