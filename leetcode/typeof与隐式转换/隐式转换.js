//转换为Boolean 

// 常用两种
// !!value 取反两次
// Boolean(value) 用Boolean包裹

//转换为假（false）
// undefined, null,NaN,'',0 -->false

//转换为真（true）
// 除上述值外的其它值类型与对象都转为 --> true

//转换为数字Number

// +value：以+开头
// Number(value)：用Number包裹

//数组转数字
// Array => Number
// 空数组转为0: [] --> 0
// 含有一个元素且为数字或数字字符串则转换为数字：[1]或['1'] --> 1
// 其余情况转为NaN
// console.log(+[]);//0
// console.log(+'a');//NaN

//值类型转数字
// null --> 0
// '123' --> 123: 纯数字构成的字符串直接转换为应的数字
// true --> 1
// false --> 0
// '124a' --> NaN
// undefined --> NaN
// Symbol --> 抛出错误
// 引用类型转数字
// 除了上述的数组,日期(Date)之外的引用类型(Object)都转为NaN



// 字符串String

// 转字符串的方式
// 加空字符串:’’ + value
// String(value)：用String包裹

// console.log(1 + []);[] --> '' ：空数组转为空串

// 值类型转字符串
// 数字直接转
// 666 --> '666':
// 布尔值直接转换
// true --> 'true'
// false --> 'false'
// console.log(''+true); // 'true'
// console.log(''+false); // 'false'
// console.log(String(666)); // '666'

// 引用类型转字符串
// 数组
// [] --> '' ：空数组转为空串
// [2,'3'] --> '2,3' ：非空数组的每一项转为字符串再用,分割
// 对象:
// {} --> [object Object]
// {a:1} --> [object Object]
// console.log(String([])); // ''
// console.log(String([1,2,'3'])); // '1,2,3'
// console.log(String({})); // '[object Object]'
// console.log(String({a:1})); // '[object Object]'




// 对象转基础类型规则
// 对象在转换类型的时候，会调用内置的 [[ToPrimitive]] 函数(Symbol内置属性)，对于该函数来说，逻辑一般来说如下：

// 如果已经是基础类型了，那就不需要转换了
// 目标类型为字符串就先调用 toString

// 转换为基础类型的话就返回转换的值


// 目标类型不为字符串就先调用 valueOf

// 结果为基础类型，就返回转换的值
// 结果不是基础类型的话再调用 toString

// 如果都没有返回基础类型，就会报错

// Symbol.toPrimitive 是一个内置的 Symbol 值，它是作为对象的函数值属性存在的
// ，当一个对象转换为对应的原始值时，会调用此函数。
//例：
 const object1 = {
    [Symbol.toPrimitive](hint) {
      if (hint === 'number') {
        return 42;
      }
      return null;
    }
  };
  
//   console.log(+object1);
//   // expected output: 42
  
const obj = {a:2,b:34}
const arr = [2,3,4]
console.log(arr.valueOf().toString());


console.log(1 + [2,3,4]);//相当于 1 + [2,3,4].toString()
console.log([2,3,4].toString());

const demo2 = {
    toString() {  //重写 toString() 看其何时执行
        return 'demo2'
    },
    valueOf() {    //重写 valueOf()
        return 20
    }
}

console.log(String(demo2)) // demo2  目标类型为字符串就先调用 toString  转换为基础类型的话就返回转换的值
console.log(demo2 + 2);//22  目标类型不为字符串就先调用 valueOf  结果为基础类型，就返回转换的值 结果不是基础类型的话再调用 toString

const demoObj = {
    toString(){
        return 'obj'
    },
    valueOf(){
        console.log('val被调用');
        return [2,3,4,5]
    }

}
console.log(String(demoObj));//obj
// console.log(demoObj + '1');//obj1 val被调用
// console.log(demoObj + 2);//obj2 val被调用

const a = new Number(2)//调用valueOf() 返回Number，是基本类型,返回转换的值
console.log(a + 5);//7


// 四则运算规则中的类型转换
// 加法
// 有一方为String，那么另一方也会被转为String
// 一方为Number,另一方为原始值类型，则将原始值类型转换为Number
// (加法涉及对象就是将对象均转换为原始值)


// '123' + 4 // '1234'

// 123 + true // 124  true-->1
// 123 + undefined // NaN  undefined -->NaN
// 123 + null // 123 null-->0

// 123 + [] //  '123'
// 123 + {} // '123[object Object]'
// 其它
// 除了加法的运算符来说（-，*，/），会将非Number类型转换为Number类型
console.log('11' - 1);//10

// == 中的类型转换

// NaN不等于任何其它类型
// Boolean 与其它类型进行比较,Boolean转换为Number
// String 与 Number进行比较,String 转化为Number
// null 与 undefined进行比较结果为true
// null,undefined与其它任何类型进行比较结果都为false
// 引用类型与值类型进行比较,引用类型先转换为值类型(调用[ToPrimitive])
// 引用类型与引用类型，直接判断是否指向同一对象
