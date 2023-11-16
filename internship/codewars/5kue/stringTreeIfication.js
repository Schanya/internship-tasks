function word2Tree(str, type = 'root') {
    if (str.length === 1) {
        return {
            value: str,
            type: 'leaf'
        };
    }

    const mid = Math.floor(str.length / 2);
    const left = str.slice(0, mid);
    const right = str.slice(mid);

    return {
        left: word2Tree(left, 'node'),
        right: word2Tree(right, 'node'),
        type: type,
        value: str,
    };
}

// Пример использования:
const str = 'christmas';
const tree = word2Tree(str);
console.log(tree);
const ans = { "value": "christmas", "left": { "value": "chri", "left": { "value": "ch", "left": { "value": "c", "type": "leaf" }, "right": { "value": "h", "type": "leaf" }, "type": "node" }, "right": { "value": "ri", "left": { "value": "r", "type": "leaf" }, "right": { "value": "i", "type": "leaf" }, "type": "node" }, "type": "node" }, "right": { "value": "stmas", "left": { "value": "st", "left": { "value": "s", "type": "leaf" }, "right": { "value": "t", "type": "leaf" }, "type": "node" }, "right": { "value": "mas", "left": { "value": "m", "type": "leaf" }, "right": { "value": "as", "left": { "value": "a", "type": "leaf" }, "right": { "value": "s", "type": "leaf" }, "type": "node" }, "type": "node" }, "type": "node" }, "type": "root" };
// console.log(ans)