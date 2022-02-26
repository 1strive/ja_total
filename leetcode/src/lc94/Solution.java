package src.lc94;

import java.util.ArrayList;
import java.util.List;

/**
 * @author JA
 * @create 2021-11-13 17:50
 */

//Definition for a binary tree node.
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
        TreeNode root = new TreeNode(1);
        TreeNode root1 = new TreeNode(1, root, root);
        System.out.println(root1.left.val);
        System.out.println(0 < Integer.MIN_VALUE);
    }

    public List<Integer> inorderTraversal(TreeNode root) {
        ArrayList<Integer> ans = new ArrayList<>();
        inorder(root,ans);
        return ans;
    }

    public void inorder(TreeNode root,List<Integer> res){
        if (root == null){
            return;
        }

        inorder(root.left,res);
        res.add(root.val);
        inorder(root.right,res);
    }
}


