// Hacker Rank
// save the prisoner
// https://www.hackerrank.com/challenges/save-the-prisoner/problem

function saveThePrisoner(n, m, s) {
    return  ((m - 1) + (s - 1)) % n + 1;
}