function rotate(matrix, direction) {
    const result = JSON.parse(JSON.stringify(matrix));
    switch (direction) {
        case 'clockwise': {
            return result.reverse()[0].map((col, i) => result.map((row) => row[i]));
        }
        case 'counter-clockwise': {
            return result.reverse().map(el => el.reverse())[0].map((col, i) => result.map((row) => row[i]).reverse());
        }
    }
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(rotate(matrix, 'counter-clockwise'));
console.log(rotate(matrix, 'clockwise'));