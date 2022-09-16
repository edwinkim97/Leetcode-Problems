/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const l = nums.length;
    if (l === 0) {
        return 0;
    }
    
    let insertIdx = 1;
    for (let i = 1; i < l; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[insertIdx] = nums[i];
            insertIdx++;
        }  
    }
    return insertIdx;
};