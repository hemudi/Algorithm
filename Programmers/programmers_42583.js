function solution(bridge_length, weight, truck_weights) {
    let result = 0;
    let carCount = 0; // 현재 세고 있는 차의 개수
    let setCount = 0; // 세트의 수
    let sumWeight = 0; // 세트의 무게
    
    for(let index = 0; index < truck_weights.length; index++){
        if(carCount === bridge_length){
            if(index - bridge_length < 0 || index + 1 > truck_weights.length){
                // 맨 앞이거나 맨 뒤거나
                setCount++;
                result += bridge_length + carCount;
                sumWeight = truck_weights[index];
                carCount = 1;
                continue;
            }

            if(sumWeight - truck_weights[index - bridge_length] + truck_weights[index] >= weight){
                setCount++;
                result += bridge_length + carCount;
                sumWeight = truck_weights[index];
                carCount = 1;
                continue;
            }

            if(sumWeight - truck_weights[index - bridge_length] + truck_weights[index] < weight){
                sumWeight = sumWeight - truck_weights[index - bridge_length] + truck_weights[index + 1];
                continue;
            }
        }

        if(sumWeight + truck_weights[index] <= weight){
            carCount++;
            sumWeight += truck_weights[index];
            continue;
        }

        if(sumWeight + truck_weights[index] > weight){
            setCount++;
            result += bridge_length + carCount;
            sumWeight = truck_weights[index];
            carCount = 1;
        }
    }

    if(carCount != 0){
        result += bridge_length + carCount;
    }

    result -= setCount;
    return result;
}

// pass
// console.log(solution(2, 10,[7,4,5,6])); // 8
// console.log(solution(3, 10, [7,4,5,6])); // 11
// console.log(solution(2, 10, [4,5,4,6])); // 6
// console.log(solution(2, 10, [7,4,5,4,6])); // 8
// console.log(solution(100, 100, [10])); // 101
// console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10])); // 110
// console.log(solution(1, 1, [1,1,1])); // 4
// console.log(solution(3, 3, [1,1,1])); // 6
// console.log(solution(3, 1, [1,1,1])); // 10
// console.log(solution(3, 1, [1,1,1,1,1])); // 16

// non pass
console.log(solution(1, 2, [1,1,1])); // 4 => 2 ??
console.log(solution(4, 2, [1,1,1,1])); // 10 => 11 ??
console.log(solution(5, 5, [1,1,1,1,1,2,2])); // 14 => 16 ??
console.log(solution(7, 7, [1,1,1,1,1,3,3])); // 18 => 20 ??
console.log(solution(5, 5, [1,1,1,1,1,2,2,2,2])); // 19 => 22 ??
console.log(solution(5, 5, [2,2,2,2,1,1,1,1,1])); // 19 => 22 ??


/*
sum(bridge_length + set.length) - (set개수 - 1)
*/

/*
1. carCount === bridge_length
    - 앞에거 하나 빼고 뒤에거 더해서 그 합을 체크해야함.
    - 그 합이 weight 보다 낮으면 count 그대로, 변한 weight 로 다음 턴으로 넘기기
    - 그 합이 weight 보다 크면
        - setCount + 1
        - sumWeight => 0 => 현재 truck 무게
        - carCount => 1

2. sumWeight + 현재 truck <= weight
    - carCount + 1
    - sumWeight += 현재 truck

3. carCount 도 꽉 안찼는데 그 합이 클때니까 => 한 세트
    - setCount + 1
    - sumWeight => 0 => 현재 truck 무게
    - carCount => 1

*/