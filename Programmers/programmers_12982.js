// 프로그래머스
// 예산
// https://programmers.co.kr/learn/courses/30/lessons/12982?language=javascript#

function solution(d, budget) {
    let count = 0;
    
    d.sort((a,b) => {return a-b;});
    
    for(const money of d){
        if(budget < money) return count;
        
        budget -= money;
        count++;
    }
    
    return count;
}