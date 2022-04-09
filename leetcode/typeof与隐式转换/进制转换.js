//Number.protoType.toString([radix])  radix为转换的进制数

console.log((10).toString());

console.log((10).toString(2));

console.log(Number.prototype.toString.call(10, 2));


// parseInt(string, radix)
// 将一个字符串 string 转换为 radix 进制的整数， radix 为介于2-36之间的数

// 根据给定radix，parseInt函数产生一个由字符串参数内容解析过来的整数值。字符串中开头的空白会被忽略。如果radix没有指定或者为0，参数会被假定以10为基数来解析，如果数值以字符对0x或0X开头，会假定以16为基数来解析
console.log(parseInt('10', 2));//2   二进制转十进制

// parseInt把任意进制字符串转为10进制，toString1
// 0进制转换成不同的进制，配合使用从而达到任意进制转换


parseInt('1111', 2).toString(8) //'17'  2进制转8进制
parseInt('17', 8).toString(2)   //'1111' 8进制转2进制

parseInt('77', 8).toString(16)  //'3f' 16进制转8进制
parseInt('3f', 16).toString(8)  //'77' 8进制转16进制
