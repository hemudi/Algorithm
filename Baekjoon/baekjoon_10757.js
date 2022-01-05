// 백준 10757번
// 큰 수 A + B
// https://www.acmicpc.net/problem/10757

// const input = ['9223372036854775807', '9223372036854775808'];
// const input = ['12', '100'];
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const A = input[0].split('').reverse();
const B = input[1].split('').reverse();
const maxLength = A.length > B.length ? A.length : B.length;
let carry = 0;
let result = [];

for(let idx = 0; idx < maxLength; idx++){
    if(idx === A.length){ A.push(0); }
    if(idx === B.length){ B.push(0); }
    const [ sum, newCarry ] = adder(+A[idx], +B[idx], carry);
    result.push(sum);
    carry = newCarry;
}

if(carry) result.push(carry);

function adder(num1, num2, carry){
    const addValue = num1 + num2 + carry;
    return [ parseInt(addValue % 10), addValue >= 10 ? 1 : 0 ];
}

console.log(result.reverse().join(''));