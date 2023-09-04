// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(r) {
    if (!r) return [];
    let vals = [];
    let q = [r];

    while (q.length) {
        let size = q.length;
        let lvl = [];
        for (let i = 0; i < size; i++) {
            let c = q.shift();
            lvl.push(c.val);
            if (c.left) q.push(c.left);
            if (c.right) q.push(c.right);
        }
        vals.push(lvl.at(-1));
    }
    return vals;
}
let root = new TreeNode(1);




console.log(rightSideView(root));