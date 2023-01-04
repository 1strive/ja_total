class ProxySandbox {
    active() {
        //沙箱开启
        this.sandboxRunning = true
    }
    inactive() {
        this.sandboxRunning = false
    }
    constructor() {
        const rawWindow = window
        const fakeWindow = {}
        //代理 fakeWindow

        const proxy = new Proxy(fakeWindow, {
            set: (target, prop, value) => {
                //只有沙箱开启的时候才操作 fakeWindow
                if (this.sandboxRunning) {
                    //对 window 的赋值,操作与 fakewindow
                    target[prop] = value
                    return true
                }
            },
            get(target, prop) {
                // 先查找 fakeWindow，找不到再寻找 rawWindow
                let value = prop in target ? target[prop] : rawWindow[prop]
                return value
            }
        })

        this.proxy = proxy
    }
}

const sandbox1 = new ProxySandbox();
const sandbox2 = new ProxySandbox();
sandbox1.active();
sandbox2.active();

const proxyWin1 = sandbox1.proxy;
const proxyWin2 = sandbox2.proxy;

proxyWin1.a = 1; // 设置沙箱 1 的值
proxyWin2.a = 2; // 设置沙箱 2 的值
window.a = 3; // 设置 window 的值
console.log("沙箱1，沙箱2，外部值：", proxyWin1.a, proxyWin2.a, window.a);

sandbox1.inactive();
sandbox2.inactive();

proxyWin1.a = 11; // 设置沙箱 1 的值
proxyWin2.a = 22; // 设置沙箱 2 的值
window.a = 33; // 设置 window 的值
console.log("沙箱1，沙箱2，外部值：", proxyWin1.a, proxyWin2.a, window.a);

// proxySandbox 即可以支持多个沙箱同时加载，也不会对全局 window 环境产生污染，是一种非常好的沙箱实现方案。