package src.lc99;

import java.util.*;

/**
 * @author JA
 * @create 2021-11-18 21:37
 */
public class Solution {
    public static void main(String[] args) {
        TreeNode treeNode = new TreeNode(2);
        TreeNode t1 = new TreeNode(1);
        TreeNode t0 = new TreeNode(8);
        TreeNode t2 = new TreeNode(6);
        TreeNode t3 = new TreeNode(5, t0, t2);
        TreeNode treeNode1 = new TreeNode(7, t3, t1);
        TreeNode treeNode2 = new TreeNode(2, null, t1);

        Solution solution = new Solution();
        List<Integer> integers = solution.inorderTraversal(treeNode2);
        System.out.println(integers);
        solution.recoverTree(treeNode2);
        List<Integer> integers1 = solution.inorderTraversal(treeNode2);
        System.out.println(integers1);


    }
    public void recoverTree(TreeNode root) {
        Deque<TreeNode> stack = new ArrayDeque<TreeNode>();
        TreeNode x = null, y = null, pred = null;

        while (!stack.isEmpty() || root != null) {
            while (root != null) {
                stack.push(root);
                root = root.left;
            }
            root = stack.pop();
            if (pred != null && root.val < pred.val) {
                y = root;
                if (x == null) {
                    x = pred;
                } else {
                    break;
                }
            }
            pred = root;
            root = root.right;
        }

        swap(x, y);
    }

    public void swap(TreeNode x, TreeNode y) {
        int tmp = x.val;
        x.val = y.val;
        y.val = tmp;
    }
//    public void recoverTree(TreeNode root) {
//        ArrayList<Integer> res = new ArrayList<>();
//        inorder(root, res);
//        int[] ints = new int[2];
//        for (int i = 0; i < res.size() - 1; i++) {
//            if (res.get(i) > res.get(i + 1)) {
//                ints[0] = res.get(i);
//                break;
//            }
//        }
//        for (int i = res.size() - 1; i > 0; i--) {
//            if (res.get(i) < res.get(i - 1)) {
//                ints[1] = res.get(i);
//                break;
//            }
//        }
//        recover(root, ints[0], ints[1]);
//    }
//
    public void inorder(TreeNode root, List<Integer> res) {
        if (root == null) {
            return;
        }
        inorder(root.left, res);
        res.add(root.val);
        inorder(root.right, res);
    }
//
//    public void recover(TreeNode root, int x, int y) {
//        if (root != null) {
//            if (root.val == x || root.val == y) {
//                root.val = root.val == x ? y : x;
//            }
//            recover(root.right, x, y);
//            recover(root.left, x, y);
//        }
//    }
//
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<Integer>();
        inorder(root, res);
        return res;
    }

}


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
