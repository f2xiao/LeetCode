/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     // create a copy of nums
//     const copyNums = [...nums];
//     const pair = [];
//     copyNums.sort().filter(num => num <= target );
//     copyNums.forEach((num1, index1, arr)=>{
//         const subArray = copyNums.slice(index1+1);
//         subArray.forEach(num2=> {
//             if(num1 + num2 === target){
//                 pair.push(num1);
//                 pair.push(num2);
//             }
//         });
//     })
//     // edge case the two numbers in the array is the same number
//     if(pair[0]===pair[1]){
//         const index1 = nums.indexOf(pair[0]);
//         const index2 = nums.slice(index1+1).indexOf(pair[1]) + index1 + 1

//         return [index1, index2]
//     }

//     return pair.map(num=>nums.indexOf(num));
// };

// use hash table
// var twoSum = function (nums, target) {
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         map.set(nums[i], i);
//     }
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (map.has(complement) && map.get(complement) !== i) {
//             return [i, map.get(complement)];
//         }
//     }
//     return null;
// };

const twoSum = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        if(comp[nums[i] ]>=0){
            return [ comp[nums[i] ] , i]
        }
        comp[target-nums[i]] = i
    }
};