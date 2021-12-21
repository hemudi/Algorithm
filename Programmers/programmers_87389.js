// 프로그래머스
// 음양 더하기
// https://programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
    var answer = 2;
    
    while(answer !== n){
        if(n % answer === 1) return answer;
        answer++;
    }
    
    return answer;
}