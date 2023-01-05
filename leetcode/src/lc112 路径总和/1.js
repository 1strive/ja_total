/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let t0 = new TreeNode(1)
let t1 = new TreeNode(2)
let t3 = new TreeNode(8)
let t4 = new TreeNode(5, t1, t0)
let t5 = new TreeNode(6, t4, t3)
let t6 = new TreeNode(6, t4, t5)


var hasPathSum = function (root, targetSum) {
    let flag = false
    recursion(root)
    function recursion(node, ans = []) {
        if (node === null) {
            return
        }
        ans.push(node.val)
        if (node.left === null && node.right === null) {
            const sum = ans.reduce((a, b) => a + b)
            if (sum === targetSum) flag = true
        }
        const temp = [...ans]
        recursion(node.left, ans)
        recursion(node.right, temp)
    }
    return flag

};
const ans = hasPathSum(t5, 13)
console.log(ans);