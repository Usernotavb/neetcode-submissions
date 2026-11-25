class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0;
        let consec = 0;
        for(let i = 0; i < nums.length; i++){
            if (nums[i] === 1){
                 consec += 1;
                 max = Math.max(max, consec)
            }
            else{
                consec = 0;
            }
        }
        return max;
    }
}
