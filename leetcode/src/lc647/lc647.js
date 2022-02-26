/**
 * @param {string} s
 * @return {number}
 */


function countSubstrings(s) {
    let arr = new Array(s.length)
    let ans = 0


    for (let i = 0; i < s.length; i++) {
        arr[i] = new Array(s.length)
    }

    for (let i = 0; i < s.length; i++) {
        arr[i][i] = 1
        ans++
    }

    for (let i = 0; i < s.length - 1; i++) {
        if (s.charAt(i) == s.charAt(i + 1)) {
            arr[i][i + 1] = 1
            ans++
        }
    }
    for (let i = 2; i < s.length; i++) {
        for (let j = 0; j < s.length - i; j++) {
            if ((s.charAt(j) == s.charAt(j + i)) && arr[j + 1][j + i - 1] == 1) {
                arr[j][j + i] = 1
                ans++
            }
        }
    }
    return ans



};

var ans = countSubstrings('aaaaa')
console.log(ans);

//中心扩展
var countSubstrings1 = function (s) {
    const n = s.length;
    let ans = 0;
    for (let i = 0; i < 2 * n - 1; ++i) {
        let l = i / 2, r = i / 2 + i % 2;
        // console.log(l,r);
        while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
            --l;
            ++r;
            ++ans;
        }
    }
    return ans;
};

var ans = countSubstrings1('aaa')
console.log(ans);
