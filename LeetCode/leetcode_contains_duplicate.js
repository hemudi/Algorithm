// LeetCode
// Contains duplicate
// https://leetcode.com/problems/contains-duplicate/submissions/

/* 1 */
var containsDuplicate = function (nums) {
    const filteredSet = new Set(nums);
    return nums.length !== filteredSet.size;
};

/* 2 */
var containsDuplicate = function (nums) {
    return nums.length !== new Set(nums).size;
};

/* 3 */
const containsDuplicate = nums => nums.length !== new Set(nums).size;