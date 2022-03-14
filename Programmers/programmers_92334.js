// 프로그래머스
// 신고 결과 받기
// https://programmers.co.kr/learn/courses/30/lessons/92334

/*
    신고 정보 = {
        신고 당한 유저 : set(신고한 유저)
    }
*/

function solution(id_list, report, k) {
    const userIndex = {};
    const reportInfo = {};
    const result = Array(id_list.length).fill(0);

    // { muzi : 0 } -> 결과 배열을 만들라면 id_list 의 입력된 닉네임들의 index 를 기억 해야 할거 같아..서....
    id_list.forEach((id, index) => userIndex[id] = index);

    // 신고 결과 일괄 처리
    report.forEach((report) => {
        const [userId, reportedId] = report.split(' ');
        reportInfo[reportedId] = reportInfo[reportedId] || new Set();
        reportInfo[reportedId].add(userId);
    });

    // 신고 결과 알림
    Object.keys(reportInfo).forEach(userId => {
        if (reportInfo[userId].size >= k) {
            reportInfo[userId].forEach(id => result[userIndex[id]]++);
        }
    });

    return result;
}