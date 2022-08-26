function a() {
    setTimeout(() => {
        console.log('a');
    }, 0);
}
function b() {
    // setTimeout(() => {
    Promise.resolve().then(() => {
        console.log('b');
    })
    // }, 0);
}
function test() {
    a()
    b()
}
test()