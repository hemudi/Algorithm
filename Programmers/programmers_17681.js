// 프로그래머스
// 비밀지도
// https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
    const trueMap = [];
    const map1 = arr1.map((num) => parsedNum(n, num));
    const map2 = arr2.map((num) => parsedNum(n, num));

    for (let index = 0; index < map1.length; index++) {
        trueMap.push(mergeMap(map1[index], map2[index]));
    }

    return trueMap;
}

function parsedNum(length, num) {
    let result = [];

    while (num > 0) {
        result.push(num % 2);
        num = parseInt(num / 2);
    }

    while (result.length < length) {
        result.push(0);
    }

    return result.reverse();
}

function mergeMap(map1, map2) {
    let result = '';
    map1.forEach((block, index) => {
        result += block + map2[index] >= 1 ? '#' : ' ';
    })
    return result;
}