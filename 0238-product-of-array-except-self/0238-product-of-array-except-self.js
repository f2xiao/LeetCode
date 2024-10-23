/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // n*2
    // loop through the array, calculate the product of all prefix and suffix
    const res = new Array(nums.length).fill(1);
    let prefix = 1;
    let postfix = 1;
    for(let i = 0; i < nums.length; i++){
        res[i] = prefix;
        prefix *= nums[i];
    }

    for(let i = nums.length - 1; i >= 0; i--){
        res[i] *= postfix;
        postfix *= nums[i]
    }

    return res;
    
};