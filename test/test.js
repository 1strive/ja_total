function * gen(arg){
    console.log(arg);
    let one = yield 111;
    console.log(one,'one');
    let two = yield 222;
    console.log(two);
    let three = yield 333;
    console.log(three);
}

//执行获取迭代器对象
let iterator = gen('AAA');
console.log(iterator.next());
//next方法可以传入实参
console.log(iterator.next('BBB'));//第二次掉的next方法传入的实参，将作为第一个yield语句的返回结果
console.log(iterator.next('CCC'));
console.log(iterator.next('DDD'));

       // 当在生成器函数中显式 return 时，会导致生成器立即变为完成状态，
        // 即调用 next() 方法返回的对象的 done 为 true。如果 return 后面跟了一个值，那么这个值会作为当前调用 next() 方法返回的 value 值。
// (就是正常函数的return逻辑)
        //第二次掉的next方法传入的实参，将作为第一个yield语句的返回结果