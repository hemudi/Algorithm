// LeetCode
// Happy Number
// https://leetcode.com/problems/happy-number/

var isHappy = function(n) {
    const sumSet = new Set();
    
    while(true){
        n = n.toString().split('').reduce((acc, cur) => acc + (cur * cur), 0);
        
        if(sumSet.has(n)) break;
        
        sumSet.add(n);
    }
    
    return n === 1;
};