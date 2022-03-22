// const curUser = {
//     name: 'Peter'
//   }

//   const saySth = str => curUser.name + ': ' + str;   // 引用了全局变量  curUser.name
//   const changeName = (obj, name) => obj.name = name;  // 修改了输入参数'

//   console.log(changeName(curUser, 'Jay'));// { name: 'Jay' }
//   console.log(saySth('hello!'));// Jay: hello!

//不引用不纯的方法

const curUser = {
    name: 'Peter'
}
const saySth = (user, str) => user.name + ': ' + str;   // 不依赖外部变量
const changeName = (user, name) => ({ ...user, name });  // 未修改外部变量

const newUser = changeName(curUser, 'Jay');  // { name: 'Jay' }
console.log(newUser);
console.log(saySth(curUser, 'hello!'));


const exp = { a: 2, b: {a:3} }
const newExp = { ...exp, b: {...exp.b,a:9} }
console.log(newExp);

	//react底层是浅比较，比较是前后返回结果的引用值，所以redux的reducer必须是纯函数