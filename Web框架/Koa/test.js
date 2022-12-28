// JS 实现洋葱模型
async function mid1(next) {
    console.log(1);
    await next();
    console.log(4);
}

async function mid2(next) {
    console.log(2);
    await next();
    console.log(5);
}

async function mid3(next) {
    console.log(3);
    await next();
    console.log(6);
}

const middleware = [mid1, mid2, mid3];
compose(middleware)();

function compose(middleware) {
    return function (context, next) {
        let index = -1
        //起始为0 后续递增
        return dispatch(0)
        function dispatch(i) {
            //假如没有递增则说名执行了多次
            if (i <= index) {
                return Promise.reject(new Error('出错啦 执行了多次！！'))
            }
            index = i
            //拿到当前的中间件
            let fn = middleware[i]
            if (i === middleware.length) fn = next
            //当fn为空的时候，就会开始执行next后的代码
            if (!fn) return Promise.resolve()
            try {
                // 执行中间件，留意这两个参数，都是中间件的传参，第一个是上下文，
                // 第二个是 next 函数
                // 也就是说执行 next 的时候也就是调用 dispatch 函数的时候
                return Promise.resolve(fn(context, dispatch.bind(null, i + 1)))
            } catch (e) {
                return Promise.reject(err)
            }
        }

    }
}