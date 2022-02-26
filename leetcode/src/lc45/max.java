package src.lc45;

/**
 * @author JA
 * @create 2021-09-09 14:42
 */
public class max {

    public static void main(String[] args) {
        int[] ints = new int[]{1,3,4,2,6};

        max max = new max();
        int max1 = max.Max(ints);
        System.out.println(max1);
    }
    public int Max(int[] nums) {

        int max = nums[0];

        for (int i = 1; i < nums.length; i++) {
            max = Math.max(max,nums[i]);
        }

        return max;

    }
}
