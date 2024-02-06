// 这种沙箱实现方案的思想类似于快照沙箱，具体实现思路是这样的，
// legacySandbox 设置了三个参数来记录全局变量，分别
// 是记录沙箱新增的全局变量 addedPropsMapInSandboxInSandbox、
// 记录沙箱更新的全局变量 modifiedPropsOriginalValueMapInSandbox、
// 持续记录更新的(新增和修改的)全局变量，用于在任意时刻做 snapshot 的 currentUpdatedPropsValueMap。
// 当沙箱启动后，根据 currentUpdatedPropsValueMap 还原沙箱环境；沙箱关闭时，利用 modifiedPropsOriginalValueMapInSandbox 恢复沙箱，addedPropsMapInSandboxInSandbox 删除新增的全局变量，避免污染全局环境。(具体思路见下图，图源)

// ！！！！对于全局变量，是新增还是更新，这里就需要借助 proxy 的拦截进行判断区分。

// 该部分来源于 qiankun 源码
// 修改 window 属性的公共方法

// 快照沙箱因为只记录了变化，不能区分新增还是更新，单例沙箱中通过代理可以区分新增和更新，所以可以在失活时进行删除)
const setWindowProp = (prop, value, isDel) => {
    if (value === undefined || isDel) {
        delete window[prop]
    } else {
        window[prop] = value
    }
}

class legacySandbox {
    active() {
        //将沙箱内的更改恢复
        this.currentUpdatedPropsValueMap.forEach((v, p) => setWindowProp(p, v))
    }

    inactive() {
        // 将沙箱期间修改的属性还原为原先的属性
        this.modifiedPropsOriginalValueMapInSandbox.forEach((v, p) => setWindowProp(p, v))
        // 将沙箱期间新增的全局变量删除
        this.addedPropsMapInSandbox.forEach((_, p) =>
            // (method) Map<any, any>.forEach(callbackfn: (value: any, key: any, map: Map<any, any>) => void, thisArg?: any): void
            setWindowProp(p, undefined, true)
        );
    }

    constructor(name) {
        this.name = name
        this.proxy = null
        //存放新增的全局变量
        this.addedPropsMapInSandbox = new Map()
        // 存放沙箱期间更新的全局变量,记录原始值
        this.modifiedPropsOriginalValueMapInSandbox = new Map();
        // 存在新增和修改的全局变量，在沙箱激活的时候使用
        this.currentUpdatedPropsValueMap = new Map();

        const {
            addedPropsMapInSandbox,
            currentUpdatedPropsValueMap,
            modifiedPropsOriginalValueMapInSandbox,
        } = this

        const rawWindow = window
        const fakewindow = Object.create(null)
        const proxy = new Proxy(fakewindow, {
            set(target, prop, value) {
                // 如果 window 没有该属性，代表发生了新增，则将此属性记录到新增属性里
                if (!window.hasOwnProperty(prop)) {
                    addedPropsMapInSandbox.set(prop, value);
                } else if (!modifiedPropsOriginalValueMapInSandbox.has(prop)) {
                    // 如果window对象有该属性，但未发生过更新，则记录该
                    // 属性在 window 上的原始值，等沙箱卸载后还原全局环境
                    const originalValue = window[prop]
                    modifiedPropsOriginalValueMapInSandbox.set(prop, originalValue)
                }

                //*** 更新到currentUpdatedPropsValueMap和全局window上
                // 不管是新增还是更新，都是当前沙箱环境的变化
                // 记录修改属性以及修改后的值
                currentUpdatedPropsValueMap.set(prop, value)
                // 更新至全局 window 上，还是会对 window 产生一定的污染(只在一个页面中有多个微前端应用时有影响)
                rawWindow[prop] = value;
                // console.log(rawWindow === window);//true
                return true;
            },
            //!!!!!!返回的是window上的值
            get(target, prop) {
                return window[prop]
            }
        })
        console.log(proxy, 'a');
        this.proxy = proxy
    }
}


const sandBox = new legacySandbox("代理沙箱");
const proxyWindow = sandBox.proxy;
//多例同时运行时会影响window，从而影响个proxy的返回(get)值，故不支持多沙箱同时运行
//实际代码中，js运行的上下文将绑定为proxyWindow
proxyWindow.a = "1";
console.log("开启沙箱", proxyWindow.a, window.a); // 开启沙箱 1 1
sandBox.inactive(); //失活沙箱
console.log("关闭沙箱", proxyWindow.a, window.a); // 关闭沙箱 undefined undefined
// sandBox.active(); // 激活沙箱
// console.log("激活沙箱", proxyWindow.a, window.a); // 激活沙箱 1 1
