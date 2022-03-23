function jd(x, P) {
    return x % P
}


const P = 5


function max(L, R) {
    let ans = 0
    for (let i = L; i <= R; i++) {
        if(jd(i,P) > ans){
            ans = jd(i,P)
        }
    }
    console.log(ans);
    return ans
}

max(3,6);