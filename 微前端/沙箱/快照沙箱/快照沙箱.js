// 在某些不支持 proxy 的低版本浏览器中，会有一种快照沙箱的实现思路，主要实现原理基于 diff 方式
// ，存有两个对象 windowSnapshot 保存 window 上面的快照信息，modifyPropsMap 保存沙箱环境与
// 外部环境不同的快照信息。
// 当沙箱激活后(对应激活生命周期)，将 window 的全部属性存储到 windowSnapshot，同时将 modifyPropsMap 存储的
// 沙箱环境加载到 window 上；
// 退出沙箱后（对应失活生命周期），利用 windowSnapshot 恢复 window 环境，
// 将发生变化的属性存储到 modifyPropsMap。

// 缺点：每次微应用 unmount 时都要对每个属性值做一次 Diff


class snapshotSandbox {
    constructor(name) {
        this.name = name;
        this.modifyPropsMap = {}; // 存放修改的属性
        this.windowSnapshot = {};
    }

    active() {
        // 缓存active状态的沙箱
        this.windowSnapshot = {};
        // 将 window 信息快照至 windowSnapshot
        for (const item in window) {
            this.windowSnapshot[item] = window[item];
        }
        // 恢复 modifyPropsMap 中的信息
        Object.keys(this.modifyPropsMap).forEach((p) => {
            window[p] = this.modifyPropsMap[p];
        });
    }



    inactive() {
        for (const item in window) {
            // diff
            if (this.windowSnapshot[item] !== window[item]) {
                // 记录变更 下次激活时重新应用变更
                this.modifyPropsMap[item] = window[item];
                console.log(this.modifyPropsMap, 'ja');
                // 还原window
                window[item] = this.windowSnapshot[item];
            }
        }
    }
}


const snadbox = new snapshotSandbox("沙箱");
snadbox.active(); // 激活沙箱
window.a = "1";
console.log("启动沙箱", window.a); // 1
snadbox.inactive(); //失活沙箱
console.log("关闭沙箱", window.a); // undefined
snadbox.active(); // 重新激活
console.log("激活沙箱", window.a); // 1

// 沙箱启用过程有可能会存有部分新增属性，例如案例中的 window.a 属性，当沙箱关闭后，
// 经过还原后 window.a 值变为 undefined，但该属性依旧存在，污染了全局环境。