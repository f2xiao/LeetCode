/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // sort the intervals based on the start of each intervals
    intervals.sort((a,b)=>a[0]-b[0]);
    let mergedIntervals = [];
    // loop through the array
    // compare each interval in `intervals` with the last interval in `mergedIntervals`
    // two comparsions:
    //      if no onverlap ---> push the current interval into `mergedIntervals`
    //      if overlap ---> merge the current interval with the last interval in `mergedIntervals`
    for(let i = 0; i < intervals.length; i++){
        let last = mergedIntervals[mergedIntervals.length - 1];
        let current = intervals[i];
        if(mergedIntervals.length === 0 || current[0] > last[1]){
            mergedIntervals.push(current);
        }else{
            // merge
            // mergedIntervals[mergedIntervals.length - 1][1] = Math.max(mergedIntervals[mergedIntervals.length - 1][1],intervals[i][1]);
            last[1] = Math.max(last[1], current[1])
        }
    }
    console.log(intervals);

    
   
   return  mergedIntervals
    
};