/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numbSet = new Set(nums);
    return nums.length !== numbSet.size;
};