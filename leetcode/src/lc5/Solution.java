package src.lc5;

/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * <p>
 *  
 * <p>
 * 示例 1：
 * <p>
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 示例 2：
 * <p>
 * 输入：s = "cbbd"
 * 输出："bb"
 * 示例 3：
 * <p>
 * 输入：s = "a"
 * 输出："a"
 * 示例 4：
 * <p>
 * 输入：s = "ac"
 * 输出："a"
 *
 * @author JA
 * @create 2021-09-07 20:59
 */
public class Solution {

    public static void main(String[] args) {
        String s = "a";

        Solution solution = new Solution();

    }

//    public Boolean IsHuiWen(String s) {
//        int i = 0;
//        int j = s.length() - 1;
//        boolean ans = true;
//
//
//        while (i < j) {
//            if (s.charAt(i) == s.charAt(j)) {
//                ans = true;
//                i++;
//                j--;
//                continue;
//            } else {
//                ans = false;
//                break;
//            }
//
//        }
//        return ans;
//    }
//
//
//    public String longestPalindrome(String s) {
//       String ans = "";
//       int max = 0;
//       int len = s.length();
//
//        for (int i = 0; i < len; i++)
//            for (int j = i + 1; j <= len; j++) {
//                String test = s.substring(i, j);
//                if (IsHuiWen(test) && test.length() > max) {
//                    ans = s.substring(i, j);
//                    max = Math.max(max, ans.length());
//                }
//            }
//
//        return ans;
//    }

    public String longestPalindrome(String s) {
            int len = s.length();
            if (len < 2) {
                return s;
            }

            int maxLen = 1;
            int begin = 0;
            // dp[i][j] 表示 s[i..j] 是否是回文串
            boolean[][] dp = new boolean[len][len];
            // 初始化：所有长度为 1 的子串都是回文串
            for (int i = 0; i < len; i++) {
                dp[i][i] = true;
            }

            char[] charArray = s.toCharArray();
            // 递推开始
            // 先枚举子串长度
            for (int L = 2; L <= len; L++) {
                // 枚举左边界，左边界的上限设置可以宽松一些
                for (int i = 0; i < len; i++) {
                    // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
                    int j = L + i - 1;
                    // 如果右边界越界，就可以退出当前循环
                    if (j >= len) {
                        break;
                    }

                    if (charArray[i] != charArray[j]) {
                        dp[i][j] = false;
                    } else {
                        if (j - i < 3) {
                            dp[i][j] = true;
                        } else {
                            dp[i][j] = dp[i + 1][j - 1];
                        }
                    }

                    // 只要 dp[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
                    if (dp[i][j] && j - i + 1 > maxLen) {
                        maxLen = j - i + 1;
                        begin = i;
                    }
                }
            }
            return s.substring(begin, begin + maxLen);
        }


}
