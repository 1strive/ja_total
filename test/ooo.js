const f = () => {
    console.log(2);
}

async function ef() {
    console.log(3)
    await f()
    console.log(0);
}
ef()
console.log(1);

'更改'