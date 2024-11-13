/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res = {};
    for(let s of strs){
        const charCount = new Array(26).fill(0);
        for(let c of s){
            charCount[c.charCodeAt(0)- 'a'.charCodeAt(0)] += 1;
        }

        const key = charCount.join(',');
        if(!res[key]){
            res[key] = []
        }
            
        res[key].push(s);
        
    }

    return Object.values(res)
    
};