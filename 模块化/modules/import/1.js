
const ooo = () => import('./2.js')
const ans = ooo()
console.log(ans.then((val) => {
    console.log(val);
}));