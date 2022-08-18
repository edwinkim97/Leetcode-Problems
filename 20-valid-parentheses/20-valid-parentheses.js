/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false;

    const stack = [];
    const openToClose = {"(" : ")", "{" : "}", "[" : "]"};
    
    for (let c of s) {
        if (c in openToClose) {
            stack.push(openToClose[c]);
        }
        else if (c !== stack.pop()) {
            return false         
        }
        
    }
    return stack.length === 0;
};