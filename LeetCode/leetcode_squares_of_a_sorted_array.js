// LeetCode
// Squares of Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/

var sortedSquares = function(nums) {
    nums.sort(compareAbs);
    return nums.map(value => Math.abs(value) ** 2);
};

function compareAbs(a, b){
    if(Math.abs(a) < Math.abs(b)){ 
        return -1;
    }
    
    if(Math.abs(a) > Math.abs(b)){
        return 1;
    }
    
    return 0;
}

console.log(sortedSquares([-7,-3,2,3,11]));
console.log(sortedSquares([-4,-1,0,3,10]));