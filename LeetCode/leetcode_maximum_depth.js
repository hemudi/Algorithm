// LeetCode
// Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

var maxDepth = function (root) {
    const depth = [];
    const search = (node, count) => {
        if (!node) {
            depth.push(count);
            return;
        }

        search(node.left, count + 1);
        search(node.right, count + 1);
    }
    search(root, 0);
    return Math.max(...depth);
}