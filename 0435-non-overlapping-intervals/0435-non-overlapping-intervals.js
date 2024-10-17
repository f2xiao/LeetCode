/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // sort the intervals twice
    // 1st time based on the start of each interval
    // 2nd time based on the end of each interval
    intervals.sort((a, b) => a[0] - b[0]);
    intervals.sort((a,b)=>a[1]-b[1]);
    // loop through the array `intervals`
    // find the ones that are non-overlapping 
    // when the start of an interval is not bigger than the end of the last interval in `results`
    // results store all the non-overlapping intervals
    // removed store the overlapping intervals
    let results = [];
    let removed = [];
    for(let interval of intervals){
        let last = results[results.length - 1];
        if(!last || interval[0]>=last[1]) {
            results.push(interval)
        }else{
            removed.push(interval)
        }
    }

    return removed.length
    
};