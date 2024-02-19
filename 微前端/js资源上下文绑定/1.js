window.a = 12
window.mp = () => {
    console.log(12333);
}
const m = 3
console.log(a, 'jaaaa');
console.log(window.a === location, 'jaw');
console.log(m, 'jam');

const test = {
    setTimeout: window.setTimeout // 直接引用，没有保留原始上下文
};

test.setTimeout(() => console.log('This will cause an error'), 4000);
const handleBeforeUnload = (event) => {
    const message = "您有未保存的更改，确定要离开？";
    event.returnValue = message; // 兼容性写法
    return message; // 标准写法
};
window.addEventListener('beforeunload', handleBeforeUnload);
// const num = new BigInt64Array(123)
// const obj = {
//     a: num
// }

// console.log(obj.a, 'jaii');

// console.log(typeof Array);