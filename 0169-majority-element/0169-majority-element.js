/**
 * @param {number[]} nums
 * @return {number}
 */

//  Given: nums, all integers
//  Return: the actual number
var majorityElement = function(nums) {
    // track the number of appearances of each elements, map
    //  key: element
    //  value: count of the element
    // step 1: loop through the array
    //  ---> check if the element key exists in the map
    //  ---> if yes, we increment the count
    //  ---> check if the count > n / 2 
    //  ---> if no, we add the element to the map, then assign value 1 to it
    // step 2: find the key and value of the one with the value > n/2
    
    if(nums.length === 1) return nums[0]
    const map = {};
    for(let i = 0; i < nums.length; i++){
        const key = nums[i];
        if(map[key]){
            map[key] ++;
            if(map[key] > nums.length / 2){
                return key;
            }
        }else{
            map[key] = 1;
        }
    }
    

    
    // time: O(n)
    // space: O(n)
};