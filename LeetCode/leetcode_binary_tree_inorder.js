// LeetCode
// Binary Tree Inorder
// https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/

/* 재귀 */
var inorderTraversal = function (root) {
    const result = [];

    function inorder(node) {
        if (node === null) return null;
        inorder(node.left);
        result.push(node.val);
        inorder(node.right);
    }

    inorder(root);
    return result;
};

/* 참고 풀이 */
/* 스택 */
var inorderTraversal = function (root) {
    const traversalStack = [];
    let current = root;
    const result = [];

    while (current !== null || traversalStack.length !== 0) {
        while (current !== null) {
            traversalStack.push(current);
            current = current.left;
        }

        current = traversalStack.pop();
        result.push(current.val);
        current = current.right;
    }

    return result;
};

function inorderTraversal(root) {
    const stack = [];
    const res = [];

    while (root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }

    return res;
}

// Java
// https://leetcode.com/problems/binary-tree-inorder-traversal/discuss/328601/All-DFS-traversals-(preorder-postorder-inorder)-in-Java-in-5-lines