if ([]) console.log(1);//1
if ({}) console.log(2);//2
if ([] == false) console.log(3);//3
if ({} == false) console.log(4);
if ([] == ![]) console.log(5);//5
if ({} == !{}) console.log(6);
if ('' == false) console.log(7);//7
if (false == 0) console.log(8);//8
if (1 == true) console.log(9);//9
if ('' == 0) console.log(10);//10
if (NaN == NaN) console.log(11);//NaN不等于其他任何类型
if ([] == !true) console.log(12);//12
if ([] == false) console.log(13);//13
if ([] == 0) console.log(14);//14
if (+0 == -0) console.log(15);//15
if (NaN == false) console.log(16);


console.log({} == '[object Object]');//true
console.log([] == '');//true

console.log({} + 1,//[object Object]1
    1 + {},//1[object Object]
    [] + 1,//'1'
    1 + [],//'1
    [1, 2, 3] + 0,//'1,2,30'
    [1, 2, 3] + '0',//'1,2,30'
    1 + '0',//'10'
    1 + 0,//1
    1 + true,//2
    1 + false,//1
    '1' + true,//1true
    '1' + false,//1false
    ![] + [],//'false'
    1 - true,//0
    '0' - 0,//0
    0 - '1',//-1
    false - true,//-1
    {} - [],//NaN
    [] - {},//NaN
    false - [] //0       ,
);