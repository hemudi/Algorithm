// 백준 2438번
// 별 찍기 - 2
// https://www.acmicpc.net/problem/2438

// 첫째 줄에 N(1 <= N <= 100) 이 주어짐
// 첫째 줄부터 N번째 줄까지 차례대로 별을 출력

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let max = parseInt(input);
let result = '';

for(let index = 1; index <= max; index++){
    for(let black = 0; black < max - index; black++){
        result += ' ';
    }

    for(let star = 0; star < index; star++){
        result += '*';
    }
    
    console.log(result);
    result = '';
}
