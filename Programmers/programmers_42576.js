// 프로그래머스
// 완주하지 못한 선수
// https://programmers.co.kr/learn/courses/30/lessons/42576

/*
    [input]
    - participant : 마라톤에 참여한 선수들의 이름
    - completion : 완주한 선수들의 이름

    [output]
    - unCompletion : 완주하지 못한 선수의 이름

    [solution]
    1. 두 배열을 객체로 변환
    2. participant 객체를 순회하며 completion 에 존재하는 값인지 체크
    3. 같은 빈도수인지 체크
    3. 존재하지 않거나 빈도수가 맞지 않으면 순회 종료하며 그 그 값을 반환 => 한명 뿐이니까

*/

function solution(participant, completion) {
    const completionObj = {};
    const participantObj = {};

    for(const name of completion){
        completionObj[name] = ( completionObj[name] || 0 ) + 1;
    }

    for(const name of participant){
        participantObj[name] = ( participantObj[name] || 0 ) + 1;
    }

    for(const name in participantObj){
        if(!(name in completionObj)){
            return name;
        }

        if(participantObj[name] !== completionObj[name]){
            return name;
        }
    }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"],["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));