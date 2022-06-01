// 프로그래머스
// 이전 변환 반복하기
// https://programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let transformCount = 0;
  let zeroCount = 0;

  while (s !== "1") {
    s = s
      .split("")
      .filter((c) => {
        if (c !== "1") {
          zeroCount++;
          return false;
        }
        return true;
      })
      .length.toString(2);
    transformCount++;
  }
  return [transformCount, zeroCount];
}
