/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0];
    let currMax = nums[0];
    let maxSum = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        currMax = Math.max(nums[i], nums[i] + currMax);
        maxSum = Math.max(maxSum,currMax);
    }
    return maxSum;
};