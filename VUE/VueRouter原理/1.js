let a = 3
let b = 4
console.log(a, b);
a ^= b
b ^= a
a ^= b
console.log(a, b)