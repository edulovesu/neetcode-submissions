class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const maps = {}
        for(let i=0; i<nums.length; i++){
            const currentNum = nums[i]
            const difference = target - currentNum
            if(difference in maps){
                return [maps[difference], i]
            }
            maps[currentNum] = i
        }
    }
}
