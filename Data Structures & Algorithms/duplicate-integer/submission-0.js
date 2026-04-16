class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Map()
        for (let i = 0; i < nums.length; i++){
            let num = nums[i]
            if (seen.has(num)){
                return true
            }
            seen.set(num, i)
        }
        return false
    }
}
