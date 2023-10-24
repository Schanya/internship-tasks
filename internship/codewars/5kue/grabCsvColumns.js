function csvColumns(csv, indices) {
    const result = [];

    indices = indices.sort((a, b) => a - b).filter((el, i, arr) => el != arr[i + 1])

    const arr = csv.split('\n').map(el => el.split(','))

    let i = 0;
    while (i < arr.length) {
        const temp = []
        indices.forEach((index) => {
            if (arr[i][index] !== undefined) {
                temp.push(arr[i][index])
            }
        });

        if (temp.length) {
            result.push(temp.join(','))
        }

        i++;
    }

    return result.join('\n')
}

console.log(csvColumns("Ko\nzVn\nNizaz\nP\na\njQGHm\nULuk\nEA2Qt\nA\ntf", [0, 0, 3]));