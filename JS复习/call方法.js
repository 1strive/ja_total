
// call()方法的作用和 apply() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。

//语法
// function.call(thisArg, arg1, arg2, ...)
// func.apply(thisArg, [argsArray])





// //调用函数
function t1(a, b) {
    return a + b
}

var ans = t1.call(this, 1, 2)//相当于this.t1(1,2)

console.log(ans);

//实现继承
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"


//   在下面的例子中，我们调用了 display 方法，但并没有传递它的第一个参数。如果没有传递第一个参数，this 的值将会被绑定为全局对象。var sData = 'Wisen';

function display() {
    console.log('sData value is %s ', this.sData);
}

display.call();  // sData value is Wisen
// 注意：在严格模式下，this 的值将会是 undefined。见下文。