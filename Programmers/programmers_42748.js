// 프로그래머스
// K번째수
// https://programmers.co.kr/learn/courses/30/lessons/42748

// commands [i, j, k] => [startIndex, lastIndex, resultIndex]
/*
   1. 먼저 배열들을 잘라서 저장
   2. 구해야 하는 Index도 동시에 저장
   3. sort 돌려서 저장해논 Index 값 구함

*/
function solution(array, commands){
    const sliceArray = [];
    const result = [];

    for(const command of commands){
        sliceArray.push(array.slice(command[0]-1, command[1]));
        result.push(command[2]-1);
    }

    for(let index = 0; index < result.length; index++){
        result[index] = sliceArray[index].sort(function(a,b) { return a - b; })[result[index]];
    }

    return result;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));

/* 프로그래머스 다른 사람 풀이 */
function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command  // 배열 디스트럭처링 할당
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}

// 와 진짜 const [sPosition, ePosition, position] = command 이 부분 보고 헉 했다...
