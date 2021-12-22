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
    let left = 4;
    let right = 4;
    let centerIdx = 0;
    let isCenter = { left : false, right : false }
    let leftTemp = 0;
    let rightTemp = 0;

    for(const num of numbers){
        if(num !== 0 && Number.isInteger((num / 3))) {
            answer += 'R';
            right = num / 3;
            isCenter['right'] = false;
            continue;
        }

        if(num !== 0 && Number.isInteger((num + 2) / 3)){
            answer += 'L';
            left = ( num + 2 ) / 3;
            isCenter['left'] = false;
            continue;
        }

        centerIdx = num === 0 ? 4 : ( num + 1 ) / 3;
        leftTemp = Math.abs(left - centerIdx);
        rightTemp = Math.abs(right - centerIdx);
        leftTemp += isCenter['left'] ? 0 : 1;
        rightTemp += isCenter['right'] ? 0 : 1;

        if(leftTemp > rightTemp){
            answer += 'R';
            right = centerIdx;
            isCenter['right'] = true;
            continue;
        }

        if(leftTemp < rightTemp){
            answer += 'L';
            left = centerIdx;
            isCenter['left'] = true;
            continue;
        }

        if(hand === 'left'){
            answer += 'L';
            left = centerIdx;
            isCenter['left'] = true;
        } else {
            answer += 'R';
            right = centerIdx;
            isCenter['right'] = true;
        }
    }

    return answer;
}

console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));