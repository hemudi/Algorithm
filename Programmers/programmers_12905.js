// 프로그래머스
// 가장 큰 정사각형 찾기
// https://programmers.co.kr/learn/courses/30/lessons/12905
// 동적 프로그래밍(DP)
function solution(board) {
    const height = board.length;
    const width = board[0].length;
    let answer = -1;

    if (height < 2 || width < 2) return 1;
    for (let yPos = 1; yPos < height; yPos++) {
        for (let xPos = 1; xPos < width; xPos++) {
            if (board[yPos][xPos] === 1) {

                let min = Math.min(
                    board[yPos - 1][xPos - 1],
                    board[yPos - 1][j],
                    board[yPos][j - 1]
                );

                board[yPos][xPos] = min + 1;
            }
        }

        if (answer < board[yPos][xPos]) answer = board[yPos][xPos];
    }

    return answer * answer;
}