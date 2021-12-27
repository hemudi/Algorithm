// 프로그래머스
// [1차] 다트 게임
// https://programmers.co.kr/learn/courses/30/lessons/17682
// splice 땜에 O(N^2)...

function solution(dartResult){
    let dartArray = dartResult.split("");
    let scores = {
        result : 0,
        pre : 0,
        current : 0,
    }

    while(dartArray.length !== 0){
        scores.current = getCurrentScore(dartArray);

        if(dartArray[0] !== undefined && isNaN(dartArray[0])){
            calcOption(scores, dartArray[0]);  
            dartArray.splice(0, 1);            
        }
        
        scores.result += scores.current;
        scores.pre = scores.current;
    }

    return scores.result;
}

function getCurrentScore(dartArray){
    let current;
    const bonus = {
        S : 1,
        D : 2,
        T : 3
    }

    // case 2 : 점수가 10인경우 => [1, 0, S]
    if(dartArray[1] !== '0'){
        current = dartArray[0] ** bonus[dartArray[1]];
        dartArray.splice(0, 2);
    } else {
        current = 10 ** bonus[dartArray[2]];
        dartArray.splice(0, 3);
    }

    return current;
}

function calcOption(scores, option){
    if(option === '*'){
        scores.current += scores.current;
        scores.result += scores.pre;
    } else {
        scores.current = -scores.current;
    }

    return scores;
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