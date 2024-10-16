/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // add `newInterval` to `intervals` then sort the results based on the start of each interval
    let newIntervals = [...intervals, newInterval].sort((a,b)=>a[0] - b[0]);
    let mergedIntervals = [];
    // loop through `newIntervals`
    // compare each interval in `newIntervals` with the last interval in `mergedIntervals`
    // two comparsions:
    //      if no onverlap ---> push the current interval `newIntervals[i]` into `mergedIntervals`
    //      if overlap ---> merge the current interval `newIntervals[i]` with the last interval in `mergedIntervals`
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