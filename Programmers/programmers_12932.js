// 프로그래머스
// 자연수 뒤집어 배열로 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
    const numArray = String(n).split('').map(x => +x);
    return numArray.reverse();
}