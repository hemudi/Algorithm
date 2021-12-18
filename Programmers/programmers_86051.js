// 프로그래머스
// 없는 숫자 더하기
// https://programmers.co.kr/learn/courses/30/lessons/86051

/*
    [input] : 0~9 숫자 중 일부가 들어가있는 배열
    [output] : input 배열 중 없는 숫자들의 합

*/

function solution(numbers) {
    let answer = 0;
    const temp = new Array(10);
    
    for(const num of numbers){
        temp[num] = num;
    }
    
    for(let index = 0; index < temp.length; index++){
        if(temp[index] === undefined){
            answer+= index;
        }
    }
    
    return answer;
}

// 최종 합이 정해져있을때
function solution2(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}