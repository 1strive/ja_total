package src.lc98;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * @author JA
 * @create 2021-11-16 16:05
 */

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution {

    public static void main(String[] args) {
        TreeNode t1 = new TreeNode(1);
        TreeNode t0 = new TreeNode(8);
        TreeNode t2 = new TreeNode(6);
        TreeNode t3 = new TreeNode(5, t1, t2);
        TreeNode treeNode = new TreeNode(7, t3, t1);

        Solution solution = new Solution();
        boolean validBST = solution.isValidBST(treeNode);
        System.out.println(validBST);
//        List<Integer> res = solution.inorderTraversal(treeNode);
//        boolean ans = true;
//        for (int i = 0; i < res.size() - 1; i++) {
//            if (res.get(i) > res.get(i + 1)) {
//                ans = false;
//            }
//            System.out.println(res.get(i));
//        }
//        System.out.println(ans);

    }
//
//    public boolean isValidBST(TreeNode root) {
//        Boolean ans = true;
//        ArrayList<Integer> res = new ArrayList<>();
//        inorder(root, res);
//        for (int i = 0; i < res.size() - 1; i++) {
//            if (res.get(i) > res.get(i + 1)) {
//                return ans = false;
//            }
//        }
//        return ans;
//    }

    public List<Integer> inorderTraversal(TreeNode root) {
        ArrayList<Integer> ans = new ArrayList<>();
        inorder(root, ans);
        return ans;
    }


    public void inorder(TreeNode root, List<Integer> res) {
        if (root == null) {
            return;
        }

        inorder(root.left, res);
        res.add(root.val);
        inorder(root.right, res);
    }

    public boolean isValidBST(TreeNode root) {
        return isValidBST(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    public boolean isValidBST(TreeNode node, long lower, long upper) {
        if (node == null) {
            return true;
        }
        if (node.val <= lower || node.val >= upper) {
            return false;
        }
        return isValidBST(node.left, lower, node.val) && isValidBST(node.right, node.val, upper);
    }

}

