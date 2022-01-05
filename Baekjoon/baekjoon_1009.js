// 백준 1009번
// 분산처리 
// https://www.acmicpc.net/problem/1009

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const result = [];
input.shift();

for (const value of input) {
    let [a, b] = value.split(' ');
    let temp = 1;

    while (b-- > 0) {
        temp = (temp * a) % 10;
    }

    result.push(temp || 10);
}

console.log(result.join('\n'));