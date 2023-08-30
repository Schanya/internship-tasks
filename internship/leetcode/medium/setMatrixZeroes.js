/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const rows = [];
    const cols = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const element = matrix[i][j];

            if (element === 0) {
                rows.push(i)
                cols.push(j)
            }
        }
    }


    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[rows[i]][j] = 0
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < cols.length; j++) {
            matrix[i][cols[j]] = 0
        }
    }

};

const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
setZeroes(matrix)