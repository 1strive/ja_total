const obj = { a: 2 }
const m = JSON.parse(JSON.stringify(obj))
console.log(m);
console.log(m === obj);