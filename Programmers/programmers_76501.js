// 프로그래머스
// 음양 더하기
// https://programmers.co.kr/learn/courses/30/lessons/76501

/*
    * input
        - absolutes : 절대값 배열
        - signs : boolean 값으로 표현된 부호
        - absolutes[i] 와 signs[i] 는 짝
        
    * output
        - 실제 정수들의 합
*/

function solution(absolutes, signs) {
    var answer = 0;
    
    for(let index = 0; index < signs.length; index++){
        answer += (signs[index] ? absolutes[index] : -absolutes[index]);
    }
    
    return answer;
}

console.log(solution([4,7,12],[true,false,true]));
console.log(solution([1,2,3],[false,false,true]));
