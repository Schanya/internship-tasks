function topThreeWords(text) {
    const regex = ".*[a-zA-Z].*";

    const reultObj = text.split(' ').reduce((result, word) => {
        if (word.match(regex)) {
            word = word.replace(/[/.,]/g, '');

            word = word.split('').map(el => el.toLowerCase()).join('')

            result[word] !== undefined ? result[word] += 1 : result[word] = 1;
        }

        return result;
    }, {})

    const resultArr = Object.entries(reultObj).sort((a, b) => b[1] - a[1]);

    return resultArr.slice(0, 3).map(el => el[0])
}

const text = 'e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e'

console.log(topThreeWords(text));