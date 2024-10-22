/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 const twoSum = function(numbers){

 }
var threeSum = function(nums) {
    // sort 
    // nums.sort();
    // const res = []
    // for(let i = 0; i < nums.length; i ++){
    //     if(i > 0 && nums[i] === nums[i -1]){
    //         continue;
    //     }
    //     let l = i + 1;
    //     let r = nums.length - 1;
    //     while(l < r){
    //         const sum = nums[i] + nums[l] + nums[r]
    //         if(sum > 0){
    //             r--;
    //         }else if(sum < 0){
    //             l ++;
    //         }else{
    //             res.push([nums[i], nums[l], nums[r]]);
    //             while(nums[l] == nums[l+1] && l < r) l++;
    //             while(l < r && nums[r] === nums[r-1]) r--;
    //             l ++;
    //             r --;
    //         }
    //     }
    // }

    // return res;
    let sorted = nums.sort((a,b) => a- b);
    let out = [];

    for (let i = 0; i < sorted.length; i++) {
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;
        let left = i + 1;
        let right = sorted.length - 1;
        while (left < right) {
            let res = sorted[i] + sorted[left] + sorted[right];
            if (res === 0) {
                out.push([sorted[i], sorted[left], sorted[right]])
                while (left < right && sorted[left] === sorted[left + 1]) left++
                while (left < right && sorted[right] === sorted[right - 1]) right--
                left++;
                right--;
            }
            else if (res > 0) {
                right--
            } else {
                left++
            }
        }
    }
    return out
    
    
};