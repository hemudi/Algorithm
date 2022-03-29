// 프로그래머스
// 소수 찾기
// https://programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {
    const numArray = numbers.split('');
    let count = 0;
    const set = new Set();

    const helper = (number, nums, length) => {
        if (number.length === length) {
            if (set.has(number)) return;
            set.add(number);
            count = isPrime(number) ? count + 1 : count;
            return;
        }

        nums.forEach((cur, index) => {
            const restNum = nums.slice(); // @0@)!!!! ㅇㅏ!!!!!!
            restNum.splice(index, 1);
            helper(number + cur, restNum, length);
        });
    }

    for (let i = 1; i <= numbers.length; i++) {
        helper('', numArray, i);
    }

    return count;
}

function isPrime(num) {

    console.log('num : ' + num);
    if (num[0] === '0') return false;
    if (+num <= 1) return false;

    for (let value = 2; value <= Math.sqrt(num); value++) {
        if (num % value === 0) return false;
    }

    return true;
}

console.log(solution("3121"));
// console.log(solution("17"));

/* 아..자릿수...아......망했다...아..... */
// function solution(numbers) {
//     const numArray = numbers.split('');
//     let count = 0;
//     const set = new Set();

//     const helper = (number, nums) => {
//         if (nums.length === 0) {
//             if (set.has(number)) return;
//             set.add(number);
//             count = isPrime(number) ? count + 1 : count;
//             return;
//         }

//         nums.forEach((cur, index) => {
//             const restNum = nums.slice();
//             restNum.splice(index, 1);
//             helper(number + cur, restNum);
//         });
//     }

//     helper('', numArray);

//     return count;
// }