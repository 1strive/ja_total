const num = new Number(123)
const obj = {
    a: num
}

// const test = {
//     setTimeout: window.setTimeout // 直接引用，没有保留原始上下文
// };
// window.setInterval(() => { console.log(123); }, 1000)
// test.setTimeout(() => console.log('This will cause an error'), 4000);
// const handleBeforeUnload = (event) => {
//     const message = "您有未保存的更改，确定要离开？";
//     event.returnValue = message; // 兼容性写法
//     return message; // 标准写法
// };
// window.addEventListener('beforeunload', handleBeforeUnload);

// console.log(new BigInt64Array(1), 'jaii');

const mp = new window.Event('build')
dispatchEvent(mp)

