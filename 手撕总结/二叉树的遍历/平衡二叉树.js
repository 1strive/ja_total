// 一棵高度平衡二叉树定义为：

// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。


function maxDeep(root) {
    if (root === null) {
        return 0
    } else {
        let left = maxDeep(root.left)
        let right = maxDeep(root.right)
        return Math.max(left, right) + 1
    }
}

function isBalanced(root) {
    let ans = true
    function inorder(node) {
        if (ans === false) return
        let left = maxDeep(node.left)
        let right = maxDeep(node.right)
        // console.log(left, right);
        if (Math.abs(left - right) > 1) {
            ans = false
            return
        }
        node.left && inorder(node.left)
        node.right && inorder(node.right)

    }
    root && inorder(root)
    return ans
}