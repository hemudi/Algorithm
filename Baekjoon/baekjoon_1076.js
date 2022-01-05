// 백준 1076번
// 저항
// https://www.acmicpc.net/problem/1076

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const resistor = {
    black : '0',
    brown : '1',
    red : '2',
    orange : '3',
    yellow : '4',
    green : '5',
    blue : '6',
    violet : '7',
    grey : '8',
    white : '9'
}

let result = resistor[input[0]] + resistor[input[1]];
result *= 10 ** resistor[input[2]];

console.log(result);