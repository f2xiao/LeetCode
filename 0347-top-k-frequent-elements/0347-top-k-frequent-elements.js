/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// input: number[]
// 
var topKFrequent = function(nums, k) {
    // create a map called count which counts the occurences of each number
    // if better than nlogn
    const count = {}; // num : count
    for(let i = 0; i < nums.length; i++){
        const key = nums[i]
        if(!count[key]){
            count[key] = 1;
        }else{
            count[key] ++;
        }
    }

    // loop through the count map
    const sortedCount = Object.keys(count).sort((a, b) => count[b] - count[a]);
    console.log(sortedCount)

    return sortedCount.slice(0, k).map(val=>Number(val))
};