// 프로그래머스
// 폰켓몬
// https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    const n = nums.length / 2;
    const typeCounter = {};
    let typeCount;
    
    nums.forEach(num => typeCounter[num] = (typeCounter[num] || 0) + 1);
    typeCount = Object.keys(typeCounter).length;
    
    if(typeCount >= n){
        return n;
    }
    
    return typeCount;
}