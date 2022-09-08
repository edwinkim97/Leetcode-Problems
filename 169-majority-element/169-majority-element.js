/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
     const hash = {};
    
    for(let num of nums) {  // get element of nums array throght loop
        hash[num] = (hash[num] | 0) + 1;  // if num is in hash, get value of nums in hash   if not, get 0
        
        if(hash[num] >nums.length / 2) return num;  // if value of nums in hash is bigger than `nums.length/2`,  return num
    }
};