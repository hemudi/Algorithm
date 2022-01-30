// Hacker Rank
// Diagonal Difference
// https://www.hackerrank.com/challenges/diagonal-difference/problem
function diagonalDifference(arr) {
    let result = arr.reduce((acc, cur, index) => {
        return acc + cur[index] - cur[cur.length - index - 1];
    }, 0);

    return Math.abs(result);
}
