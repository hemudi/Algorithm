// LeetCode
// Single Number
// https://leetcode.com/problems/single-number/

var singleNumber = function(nums) {
    if(nums.length === 1) return nums[0];
    
    const counter = {};
    
    nums.forEach((num) => {
        counter[num] = (counter[num] || 0) + 1;
    });
    
    for(let key in counter){
        if(counter[key] === 1)
            return key;
    }
};

console.log(singleNumber([4,1,2,1,2]));