// 프로그래머스
// 행렬의 곱셈
// https://programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1, arr2) {
    let answer = [];
    let result = [];

    for(const valueSet of arr1){
        valueSet.map((valueX, index) => {
            arr2[index].map((multiplied, order) => {
                result[order] = (result[order] || 0) + valueX * multiplied;
            })
        })
        
        answer.push(result);
        result = [];
    }
    return answer;
}

console.log(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]));
console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]]));