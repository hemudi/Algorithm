// 프로그래머스
// 같은 숫자는 싫어
// https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr){
    const answer = [];
    
    arr.reduce((acc, cur) => {
        if(acc !== cur){
            answer.push(cur);
            return cur;
        }
        return acc;
    }, -1);

    return answer;
}

const testData = [[1,1,3,3,0,1,1], [4,4,4,3,3]];
for(const data of testData){
    console.log(solution(data));
}