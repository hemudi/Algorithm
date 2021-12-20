// 프로그래머스
// 두 정수 사이의 합
// https://programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    var answer = a;
    
    while(a !== b){
        answer += a > b ? --a : ++a;
    }
    
    return answer;
}