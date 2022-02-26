function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var t0 = new TreeNode(1)
var t1 = new TreeNode(5)
var t2 = new TreeNode(2, t0, t1)
var t3 = new TreeNode(7, t2,t0)

console.log(t3);
var ans = maxDepth(t3)
console.log(ans);

function maxDepth(root) {
if (root == null) {
    return 0
}else{
    var left = maxDepth(root.left)
    var right = maxDepth(root.right)
    return Math.max(left,right) + 1
}

}
