// 프로그래머스
// 문자열 다루기 기본
// https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
    if(s.length !== 4 && s.length !== 6) return false;
    
    for(const char of s){
        if(isNaN(char)) return false;
    }

    return true;
}

console.log(solution('a234'));
console.log(solution('1234'));
console.log(solution('1'));
console.log(solution('a'));