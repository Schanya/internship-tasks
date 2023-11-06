var distribution = function (size) {

    if (size == 1) return [[1]]

    let index = 2;
    let matrixSize = index ** 2 - Math.floor(index / 2) * (index - 1);

    while (size > matrixSize) {
        index++;

        matrixSize = index ** 2 - Math.floor(index / 2) * (index - 1);
    }

    let matrix = Array(index);

    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(index).fill(0, 0, index)
    }

    let countFold = 1;

    matrix = matrix.map((el, i, arr) => {
        if (i % 2 == 0 && size) {
            if (countFold % 2 != 0) {
                for (let i = 0; i < el.length && size; i++) {
                    el[i] = 1;
                    size--;
                }
            } else {
                for (let i = el.length - 1; i >= 0 && size; i--) {
                    el[i] = 1;
                    size--;
                }
            }

        } else if (size) {
            countFold % 2 == 0 ? el[0] = 1 :
                el[el.length - 1] = 1

            size--;
            countFold++;
        }

        return el;
    })

    // writeMatrix(matrix);
    // console.log('')

    return transpose(matrix)
}

function transpose(matrix) {
    return matrix[0].map((col, i) => matrix.map((row) => row[i]));
}

function writeMatrix(matrix) {
    matrix.forEach(el => {
        console.log(el.join(' '));
    });
}

writeMatrix(distribution(41));