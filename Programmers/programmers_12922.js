// 프로그래머스
// 수박수박수박수박수박수?
// https://programmers.co.kr/learn/courses/30/lessons/12922

function solution(s) {
    const melon = '수박';
    let answer = '';

    for(let index = 0; index < n; index++){
        answer += melon[index % 2];
    }

    return answer;
}