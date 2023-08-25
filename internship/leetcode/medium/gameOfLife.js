/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    const tempBoard = JSON.parse(JSON.stringify(board))
    for (let i = 0; i < tempBoard.length; i++) {
        for (let j = 0; j < tempBoard[i].length; j++) {
            const element = tempBoard[i][j];
            let countLivingNeighbor = 0;

            if (i - 1 >= 0) {
                const top = tempBoard[i - 1].slice(j - 1 < 0 ? 0 : j - 1, j + 2);
                countLivingNeighbor += top.filter(el => el == 1).length;
            }

            if (i + 1 < tempBoard.length) {
                const bottom = tempBoard[i + 1].slice(j - 1 < 0 ? 0 : j - 1, j + 2)
                countLivingNeighbor += bottom.filter(el => el == 1).length;
            }

            if (j - 1 >= 0) {
                const left = tempBoard[i][j - 1];
                left == 1 ? countLivingNeighbor++ : true;
            }

            if (j + 1 <= tempBoard[i].length) {
                const left = tempBoard[i][j + 1];
                left == 1 ? countLivingNeighbor++ : true;
            }

            if (element == 0) {
                countLivingNeighbor == 3 ? board[i][j] = 1 : true
            } else {
                (countLivingNeighbor == 2 || countLivingNeighbor == 3) ? board[i][j] = 1 : board[i][j] = 0
            }

        }
    }

};

const board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]];
gameOfLife(board)