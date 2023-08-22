
// Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root, max = root.val) {
    let countGoodNodes = 0;

    if (root.val >= max) {
        countGoodNodes++;
    }

    max = Math.max(Math.max(root.val, max));

    if (root.left) {
        countGoodNodes += goodNodes(root.left, max)
    }

    if (root.right) {
        countGoodNodes += goodNodes(root.right, max)
    }

    return countGoodNodes;

};