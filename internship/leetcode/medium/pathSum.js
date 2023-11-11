let pathSum = function (root, sum) {
    if (root === null) return 0;
    return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);;
};

// dfs() is just the count starting from the specified node, 
// and need to add counts starting from it's children.
function dfs(node, sum) {
    let res = 0;
    if (node === null) return 0;
    if (node.val === sum) res++;
    return res + dfs(node.left, sum - node.val) + dfs(node.right, sum - node.val);
}