function countZeroRowsAndColumns(arr1, arr2) {
    let rowLength = arr1.length;
    let colLength = arr1[0].length;

    let col = Array.from({ length: colLength }, (_, i) => 0);
    let row = Array.from({ length: rowLength }, (_, i) => 0);

    for (let i = 0; i < rowLength; ++i) {

        let count = 0;

        for (let j = 0; j < colLength; ++j) {
            if (arr1[i][j] + arr2[i][j] !== 0)

                col[j] += 1;
            else
                col[j] += 0;

            if (arr1[i][j] + arr2[i][j] !== 0)

                count += 1;
            else
                count += 0;
        }

        row[i] = count;
    }

    return row.filter(el => el == 0).length + col.filter(el => el == 0).length
}

let arr1 = [[1, 3, -5], [2, -4, 6]], arr2 = [[-1, -3, 5], [-2, -4, -6]]

console.log(countZeroRowsAndColumns(arr1, arr2));