package lc17;

import java.util.*;

/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * <p>
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * <p>
 * <p>
 * <p>
 *  
 * <p>
 * 示例 1：
 * <p>
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 示例 2：
 * <p>
 * 输入：digits = ""
 * 输出：[]
 * 示例 3：
 * <p>
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 *
 * @author JA
 * @create 2021-09-17 17:45
 */
public class Solution {

    public static void main(String[] args) {
        Solution solution = new Solution();
        List<String> strings = solution.letterCombinations("234");
        System.out.println(strings);


    }

    public List<String> letterCombinations(String digits) {

        List<String> ans = new ArrayList<>();

        if (digits == null || digits.length() == 0) return ans;

        HashMap<Character, String[]> map = new HashMap<>();
        map.put('2', new String[]{"a", "b", "c"});
        map.put('3', new String[]{"d", "e", "f"});
        map.put('4', new String[]{"g", "h", "i"});
        map.put('5', new String[]{"j", "k", "l"});
        map.put('6', new String[]{"m", "n", "o"});
        map.put('7', new String[]{"p", "q", "r", "s"});
        map.put('8', new String[]{"t", "u", "v"});
        map.put('9', new String[]{"w", "x", "y", "z"});

        Queue<String> queue = new LinkedList<>();

        for (int i = 0; i < digits.length(); i++) {
            stringQueue(queue, map.get(digits.charAt(i)));
        }

        for (String s : queue) {
            ans.add(s);
        }
        return ans;
    }

    private Queue<String> stringQueue(Queue<String> queue, String[] letters) {

        if (queue.size() == 0) {
            for (String letter : letters) {
                queue.add(letter);
            }
        } else {
            int queueLength = queue.size();
            for (int i = 0; i < queueLength; i++) {
                String poll = queue.poll();
                for (String letter : letters) {
                    queue.add(poll + letter);
                }

            }
        }

        return queue;

    }
}
