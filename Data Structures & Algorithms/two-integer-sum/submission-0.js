class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map()
        for (let i = 0; i < nums.length;i++){
            let num = nums[i]
            let complementary = target - num

            if (seen.has(complementary)) {
                return [i, seen.get(complementary)]
            }
            seen.set(num, i)

        }
    }
}
