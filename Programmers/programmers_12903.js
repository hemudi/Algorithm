// 프로그래머스
// 가운데 글자 가져오기
// https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
    const textLength = s.length;
    let answer = '';
    
    if(textLength % 2 === 0){
        answer += s[(textLength / 2) - 1];
    }

    answer += s[parseInt(textLength / 2)];
    
    return answer;
}

console.log(solution("abcde"));