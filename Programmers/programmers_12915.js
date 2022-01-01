// 프로그래머스
// 문자열 내 마음대로 정렬하기
// https://programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
    var answer = [];
    answer = strings.sort((wordA, wordB) => {
        return wordA[n] === wordB[n] ? wordA > wordB ? 1 : -1 : wordA[n] > wordB[n] ? 1 : -1;
    });
    return answer;
}

console.log(solution(["sun", "bed", "car"], 1));