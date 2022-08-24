/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
        
    if (s.length !== t.length) return false
    
    const map = new Map() //map to keep track of our letters and how many of each letter
    
    for (let i = 0; i < s.length; i++) {
        const v = map.get(s[i])
        if(v){
            map.set(s[i], v+1) //if value is not undefined 
        }else{
            map.set(s[i], 1) //if undefined we give letter a value of 1
        }
    }
    
    for (let i = 0; i < t.length; i++) {
        const v = map.get(t[i])
        if(!v) return false //if letter doesnt exist in map
        if(v=== 0) return false  //if letter is 0, means we have extra
        map.set(t[i], v -1) //decrement letter value 
    }
    
    return true //return true if none of those conditions above are met
};