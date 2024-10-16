/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // add the newInterval then sort it
    let newIntervals = [...intervals, newInterval].sort((a,b)=>a[0] - b[0]);
    let mergedIntervals = [];
    // merge the newIntervals
    for(let i = 0; i < newIntervals.length; i++){
        let last = mergedIntervals[mergedIntervals.length - 1];
        let current = newIntervals[i];
        if(mergedIntervals.length === 0 || current[0] > last[1]){
            mergedIntervals.push(current);
        }else{
            // merge
           
            last[1] = Math.max(last[1], current[1])
        }
    }

    return mergedIntervals

};