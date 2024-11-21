/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    nums.sort((a, b)=> a - b);
    for(let i = 0; i < nums.length; i++){
        let l = i + 1;
        let r = nums.length - 1;
        if( i > 0 && nums[i] === nums[i - 1]) continue;

        while(l < r){
            const curSum = nums[i] + nums[l] +nums[r];
            if(curSum < 0) l++;
            if(curSum > 0) r--;
            if(curSum === 0){
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;

                while(l < r && nums[l] == nums[l-1]){
                    l++;
                }
            }
        }

    }

    return res;
    
};