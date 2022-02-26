// 프로그래머스
// 신규 아이디 추천
// https://programmers.co.kr/learn/courses/30/lessons/72410
// https://curryyou.tistory.com/234 -> 정규식 사용법 참고
function solution(new_id) {
    new_id = new_id.toLowerCase(); // 1단계
    new_id = new_id.replace(/[^0-9a-z-_.]/g, '');
    new_id = new_id.replace(/\.{2,}/g, '.');
    new_id = new_id.replace(/^\.|\.$/g, '');
    new_id = new_id.length === 0 ? 'a' : new_id;
    new_id = new_id.length >= 16 ? new_id.slice(0,15) : new_id;
    new_id = new_id.replace(/^\.|\.$/g, '');
    new_id += new_id.length > 2 ? '' : Array(3 - new_id.length).fill(new_id[new_id.length - 1]).join(''); // repeat 쓰고싶었는데 왜 안될까
    return new_id;
}