/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// input: number[]
// 
// var topKFrequent = function(nums, k) {
//     // create a map called count which counts the occurences of each number
//     // if better than nlogn
//     const count = {}; // num : count
//     for(let i = 0; i < nums.length; i++){
//         const key = nums[i]
//         if(!count[key]){
//             count[key] = 1;
//         }else{
//             count[key] ++;
//         }
//     }

//     // loop through the count map and sort the keys based on occureances
//     const sortedCount = Object.keys(count).sort((a, b) => count[b] - count[a]);
//     // console.log(sortedCount)

//     return sortedCount.slice(0, k).map(val=>Number(val))
// };

var topKFrequent = function(nums, k) {
    // create a map called count which counts the occurences of each number
    // occurences : list of numbers
    const count = {};
    // NOTE: 
    // - Array.from() ensures each element is a distinct empty array.
    // - new Array().fill([]) fills all elements with a reference to the same array. If you modify one, they all reflect the change.
    // const freq = new Array(nums.length + 1).fill([]);
    const freq = Array.from({ length: nums.length + 1 }, () => []);

    for(const n of nums){
        count[n] = (count[n] || 0) + 1;
    }

    for(const n in count){
        freq[count[n]].push(parseInt(n))
    }

    const res = [];
    for(let i = freq.length - 1; i > 0; i--){
        for(const n of freq[i]){
            res.push(n);
            if(res.length === k){
                return res;
            }
        }
    }
};