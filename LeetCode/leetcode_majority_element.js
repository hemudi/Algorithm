// https://leetcode.com/problems/majority-element/submissions/

var majorityElement = function (nums) {
  const majorityCount = Math.floor(nums.length / 2);
  const numCounter = nums.reduce((counter, cur) => {
    counter[cur] = (counter[cur] || 0) + 1;
    return counter;
  }, {});

  for (const num of Object.keys(numCounter)) {
    if (numCounter[num] > majorityCount) {
      return num;
    }
  }
};
