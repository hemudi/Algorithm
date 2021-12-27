// 프로그래머스
// [1차] 다트 게임
// https://programmers.co.kr/learn/courses/30/lessons/17682

/*

    1. 이전 라운드의 점수를 저장해놓을 변수 선언 => preScore
    2. 현재 라운드의 점수를 계산 => 제곱근 배열에 객체를 이용해 인수를 전달
    3. 이전 라운드의 점수에 변동이 있다면 현재 점수에 이전 라운드 점수 빼고 계산한 라운드 점수 더함
    4. 현재 라운드의 점수를 이전 라운드의 점수로 바꾸고 다음 차례로 넘김

*/

function solution(dartResult){
    let scores = {
        result : 0,
        preScore : 0,
        current : 0
    }
    // let answer = 0;
    // let preScore = 0;
    // let currentScore = 0;
    let dartArray = dartResult.split("");

    const bonus = {
        S : 1,
        D : 2,
        T : 3
    }

    while(dartArray.length !== 0){
        if(isNaN(dartArray[1])){
            scores.current = dartArray[0] ** bonus[dartArray[1]];
            dartArray.splice(0, 2);
        } else {
            currentScore = 10 ** bonus[dartArray[2]];
            dartArray.splice(0, 3);
        }

        if(isNaN(dartArray[0]) && dartArray[0] !== undefined){
            ({ ans, cur } = calcOption(answer, preScore, currentScore, dartArray[0]));
            answer = ans;
            currentScore = cur;
            dartArray.splice(0, 1);
        } else {
            answer += currentScore;
        }

        preScore = currentScore;
    }

    return answer;
}

function calcOption(answer, preScore, currentScore, option){
    if(option === '*'){
        currentScore += currentScore;
        answer += preScore + currentScore;
    } else {
        currentScore = -currentScore;
        answer += currentScore;
    }

    return { ans : answer, cur : currentScore };
}

const testCase = [
    '1S2D*3T',
    '1D2S#10S',
    '1D2S0T',
    '1S*2T*3S',
    '1D#2S*3S',
    '1T2D3D#',
    '1D2S3T*'
]

for(let tc of testCase){
    console.log(solution(tc));
}