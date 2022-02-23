// 프로그래머스
// 가장 큰 수
// https://programmers.co.kr/learn/courses/30/lessons/42746
function solution(numbers) {
    const result = numbers.sort((a, b) => compare(a + '', b + '')).join('');
    if(result[0] === '0') return result[0]; // testCase 11
    return result;
}

// 그냥 하면 testCase 11 실패 => 0 으로만 이루어진 배열의 경우
function compare(a, b){
    return (a+b > b+a) ? -1 : 1;
}

// 실패
function compare_before(a, b){
    if(a === 0 && a === b) return 0;
    if(a === 0) return 1;
    if(b === 0) return -1;

    let aLength = (a + '').length - 1;
    let bLength = (b + '').length - 1; 

    while (aLength >= 0 && bLength >= 0) {
        if( (a / (10 ** aLength)) === (b / (10 ** bLength))){
            a = a % (10 ** aLength);
            b = b % (10 ** aLength);
            aLength--;
            bLength--;
            continue;
        }

        return (a / (10 ** aLength)) > (b / (10 ** bLength)) ? -1 : 1;
    }

    if (aLength === bLength) {
        return 0;
    }

    if(aLength < 0){
        b = b % (10 ** bLength);
    } else {
        a = a % (10 ** aLength);
    }

    return a > b ? -1 : 1;
}

console.log(solution([0,0,0,0,0]));