/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    // Hash Table
    // use a counter array of length 26 and each item represent the differences of the count of each charac in the both s,t
    const counter = new Array(26).fill(0);
    const utf16CodeOfA = 'a'.charCodeAt(0);
    for(let i=0; i < s.length; i++){
        counter[s.charCodeAt(i) - utf16CodeOfA] ++;
        counter[t.charCodeAt(i) - utf16CodeOfA] --;
    }

    return counter.every(value=>value==0)
    
};