/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const copyNumbers = [...numbers];
    const pair =[];
    numbers.forEach((num1, index1)=>{
        // edge case, the two numbers are not the same
        for(let j = copyNumbers.length - 1; j > index1; j--){
            if(num1 === copyNumbers[j] && num1 + copyNumbers[j]!==target){
                break;
            }
            if(num1 + copyNumbers[j]===target){
                pair.push(index1+1, j+1);
            }
        }
    })
    
    return pair;
};