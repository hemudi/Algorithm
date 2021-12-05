// 프로그래머스
// 부족한 금액 계산하기
// https://programmers.co.kr/learn/courses/30/lessons/82612

/* 1. for 문 풀이 */
function solution(price, money, count){
    if(!checkRange(price, money, count)) return 0;
    
    var answer = -1;
    const totalAmount = price;

    for(let index = 2; index <= count; index++){
        totalAmount += price * index;
    }

    answer = money - totalAmount;
    return answer > 0 ? 0 : Math.abs(answer);
}

/* 재귀함수 풀이 */
function solution_re(price, money, count){
    if(!checkRange(price, money, count)) return 0;
    
    var answer = -1;
    const totalAmount = getTotalAmount(price, count);

    answer = money - totalAmount;

    return answer > 0 ? 0 : Math.abs(answer);
}

function getTotalAmount(price, count){
    if(count == 1) return price;
    return (price * count) + getTotalAmount(price, count - 1);
}

/* 입력값 범위 체크용 */
function checkRange(price, money, count){
    if(price < 1 || price > 2500){
        return false;
    }

    if(money < 1 || money > 1000000000){
        return false;
    }

    if(count < 1 || count > 2500){
        return false;
    }

    return true;
}