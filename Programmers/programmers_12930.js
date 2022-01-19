// 프로그래머스
// 이상한 문자 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
    let answer = '';
    let index = 0;

    for(let char of s){
        if(char === ' '){
            index = 0;
            answer += char;
            continue;
        }

        if(index++ % 2 === 0){
            answer += char.toUpperCase();
        } else {
            answer += char.toLowerCase();
        }
    }
    
    return answer;
}