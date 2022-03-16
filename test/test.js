const skillOne = {
    q: '天音波'
}

const skillTwo = {
    w: '金钟罩'
}

const skillThree = {
    e: '天雷破'
}
const skillFour = {
    r: '猛龙摆尾'
}
const name = 2
const mangseng = {...skillOne, ...skillTwo, ...skillThree, m:name};

console.log(mangseng)