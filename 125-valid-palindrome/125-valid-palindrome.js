/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 0) return true;
    
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const cleanedS = s.replace(regex, "").split(" ").join("").toLowerCase();
    let left = 0;
    let right = cleanedS.length - 1;
    
    while (left < right) {
        if (cleanedS[left] !== cleanedS[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};