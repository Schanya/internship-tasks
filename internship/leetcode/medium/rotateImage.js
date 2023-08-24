/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            const tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        };
    }

    matrix.forEach(el => el.reverse())

    return matrix
};


const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(rotate(matrix));