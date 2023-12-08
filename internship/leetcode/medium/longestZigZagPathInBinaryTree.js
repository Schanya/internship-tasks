var longestZigZag = function (root) {
    if (root == null) {
        return 0;
    }
    if (root.left == null && root.right == null) {
        return 0;
    }
    let leftLength = { val: 0 };
    let rightLength = { val: 0 };
    if (root.left != null) {
        traverse(root.left, 1, true, leftLength);
    }
    if (root.right != null) {
        traverse(root.right, 1, false, rightLength);
    }
    if (leftLength.val > rightLength.val) {
        return leftLength.val;
    }
    return rightLength.val;
};

function traverse(node, length, left, maxLength) {
    if (length > maxLength.val) {
        maxLength.val = length;
    }
    if (node.left != null) {
        if (left) {
            traverse(node.left, 1, true, maxLength);
        } else {
            traverse(node.left, length + 1, true, maxLength);
        }
    }
    if (node.right != null) {
        if (left) {
            traverse(node.right, length + 1, false, maxLength);
        } else {
            traverse(node.right, 1, false, maxLength);
        }
    }
}