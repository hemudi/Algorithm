// LeetCode
// Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/submissions/

var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim, '');
    return checkPalindrome(s);
};

const checkPalindrome = (text) => {
    let lastIndex = text.length - 1;
    const middleIndex = Math.floor(lastIndex + 1);

    for (let index = 0; index < middleIndex; index++) {
        if (text[index] !== text[lastIndex]) return false;
        lastIndex--;
    }
    return true;
}