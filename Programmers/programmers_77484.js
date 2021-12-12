// 프로그래머스
// 로또의 최고 순위와 최저 순위
// https://programmers.co.kr/learn/courses/30/lessons/77484

/*
    [ input ]
    lottos : 민우가 구매한 로또 번호를 담은 배열 => 길이가 6인 정수 배열
    wind_nums : 당첨 번호를 담은 배열
    
    [ output ]
    [ 최고 순위, 최저 순위 ]

    1. 당첨된 개수와 0의 개수를 구함 => 여기서만 for 문 한번
    2. 당첨된 개수로 최저 순위를 구함
    2. 0의 개수로 최고 순위를 구함
*/

function solution(lottos, win_nums){
    const winNumber = {}
    let winCount = 0;
    let blankCount = 0;
    let lowest = 0;
    let highest = 0;
    
    for(const num of win_nums){
        winNumber[num] = 0;
    }

    for(const num of lottos){
        if(num === 0){
            blankCount++;
            continue;
        }

        if(num in winNumber){
            winCount++;
            continue;
        }
    }

    lowest = (winCount === 0) ? 6 : 7 - winCount;
    highest = (winCount === 0) ? lowest - blankCount + 1 : lowest - blankCount;
    highest = (highest === 7) ? highest - 1 : highest;
    return [highest, lowest];
}

console.log(solution([1, 2, 3, 4, 5, 6],	[38, 19, 20, 40, 15, 25]));
console.log(solution([0, 0, 0, 0, 0, 0],	[38, 19, 20, 40, 15, 25]));