// LeetCode
// Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

// 피보나치다!!!!!!

var climbStairs = function (n) {
    if (n <= 3) return n;

    const steps = [0, 1, 2, 3];

    function fibonacci(n) {
        if (steps[n]) {
            return steps[n];
        }

        steps[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return steps[n];
    }

    return fibonacci(n);
};

for (let index = 1; index < 10; index++) {
    console.log(climbStairs(index));
}