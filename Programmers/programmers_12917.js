// 프로그래머스
// 문자열 내림차순으로 배치하기
// https://programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
    var answer = s.split('');

    answer.sort().reverse();
    
    return answer.join('');
}