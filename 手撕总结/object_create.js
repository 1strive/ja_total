// 实现Object.create函数
function myCreate(proto) {
    // function F() { }
    // F.prototype = proto
    // const o = new F()
    // return o

    //等效
    let o = {}
    o.__proto__ = proto
    return o
}
