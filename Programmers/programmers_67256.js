// 프로그래머스
// 키패드 누르기
// https://programmers.co.kr/learn/courses/30/lessons/67256

/*
    * input
      - numbers : [순서대로 누를 번호 배열]
      - hand : [left / right]

    * output
      - result : 사용한 손가락 순서 문자열 'LRLLLRLLRRL'

*/

/*

for(num of numbers)
  - num => [1, 4, 7] => left + 2 / 3 => 1 2 3
  - num => [3, 6, 9] => right / 3 => 1 2 3
  - num => [2, 5, 8, 0] => 가까운 손가락으로 => 이걸 판별하려면 이전 손가락의 위치를 기억해야함
*/

function solution(numbers, hand){
    let answer = '';
    let handIdx = { left : 4, right : 4 }
    let isCenter = { left : false, right : false }
    let distance = { left : 0, right : 0 }
    let centerIdx = -1;

    for(const num of numbers){
        if(num !== 0 && Number.isInteger((num / 3))) {
            answer += 'R';
            handIdx['right'] = num / 3;
            isCenter['right'] = false;
            continue;
        }

        if(num !== 0 && Number.isInteger((num + 2) / 3)){
            answer += 'L';
            handIdx['left'] = ( num + 2 ) / 3;
            isCenter['left'] = false;
            continue;
        }

        centerIdx = num === 0 ? 4 : ( num + 1 ) / 3;
        distance['left'] = Math.abs(handIdx['left'] - centerIdx) + (isCenter['left'] ? 0 : 1);
        distance['right'] = Math.abs(handIdx['right'] - centerIdx) + (isCenter['right'] ? 0 : 1);

        if(distance['left'] > distance['right'] || (distance['left'] === distance['right'] && hand === 'right')){
            answer += 'R';
            handIdx['right'] = centerIdx;
            isCenter['right'] = true;
            continue;
        }

        answer += 'L';
        handIdx['left'] = centerIdx;
        isCenter['left'] = true;
    }

    return answer;
}

console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));