var wordWrap = function (str) {
    let result = [];
    const regexp = /^[a-zA-Z0-9]+$/;

    if (str.length == 25) {
        return str
    }

    for (let i = 0; i < str.length; i += 24) {

        let row = str.slice(i, i + 24);

        const tempItem = str[i + 24];
        const firstStrItem = str[i + 25];

        const temp = regexp.test(tempItem)
        const test = regexp.test(firstStrItem)

        if (tempItem) {
            if (!temp) {
                row += tempItem
                i++;
            } else {
                if (test) {
                    row += '-';

                } else {
                    row += tempItem
                    i++;
                }

            }
        }

        result.push(...[row, '\n']);
    }

    result.pop()

    return result.join('');
};

const input = "KUTlAvrNcFTxxQ L9O hViZJQmzCNsZ y  IzKFsFCo7JIEF qi kHm QD6Aoa O XtsVb";
console.log(wordWrap(input));