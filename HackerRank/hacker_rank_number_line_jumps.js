// Hacker Rank
// Kangaroo
// https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
    const result = (x2 - x1) / (v1 - v2);
    if(result < 0 || result % 1 !== 0) return 'NO';
    return 'YES';
}