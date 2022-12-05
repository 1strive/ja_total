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
    return function (next) {
        return dispatch(0)
        function dispatch(i) {
            let fn = middleware[i]
            if (!fn) return
            try {
                return fn(dispatch.bind(null, i + 1))//promis是同步 对Promise的处理是异步
            } catch (e) {
                return Promise.reject(e)
            }
        }

    }
}