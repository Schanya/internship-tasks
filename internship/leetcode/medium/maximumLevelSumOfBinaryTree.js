// /**
//  * Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
    if (root == null)
        return 0;


    let level = 1;
    let result = [root.val, level];

    let q = [];
    q.push(root);

    while (q.length != 0) {

        let count = q.length;

        let sum = [0, level];
        while (count-- > 0) {

            let temp = q.shift();

            sum[0] = sum[0] + temp.val;

            if (temp.left != null)
                q.push(temp.left);
            if (temp.right != null)
                q.push(temp.right);
        }

        result = sum[0] > result[0] ? sum : result
        level += 1;
    }
    return result[1];

};

let root = new TreeNode(1);
root.left = new TreeNode(null);
root.right = new TreeNode(null);

console.log(maxLevelSum(root));
