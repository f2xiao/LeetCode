/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     const map = {};
//     nums.forEach((ele, index, arr) => {
//         // check if map contains the key
//         if(!map[ele]){
//             map[ele] = 1;
//         }else{
//             map[ele] ++;
//         }
//     })
//     // check the values in map all are 1
//     return !Object.values(map).every(ele=>ele < 2)
// };

var containsDuplicate = function(nums) {
    // sort the nums
   nums.sort();

   for(let i=0; i < nums.length ; i++){
    //  compare the neighbour element
    if(nums[i] == nums[i+1]){
        return true
    }
   }
   
   return false
};