const wait = (time)=>new Promise(resolve=>{
    setTimeout(()=>resolve(),time)
})

let result = 0
async function asyncGetNum(num){
    await wait(100)
    return num
}

async function asyncAdd(num){
    result += await asyncGetNum(num)
}

asyncAdd(3)
asyncAdd(2)
asyncAdd(1)

wait(150).then(()=>{
    console.log(result);
})