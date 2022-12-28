import compiler from "./手写编译器/compliser.js";

const input = '(add 2 (subtract 4 2))'
console.log(compiler(input));