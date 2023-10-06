function segmentify(dictionary, inputString) {

    dictionary = dictionary.sort((a, b) => b.length - a.length)

    const result = []
    const posibleWords = [];
    let testingImposableString = inputString;

    for (let i = 0; i < dictionary.length; i++) {
        const word = dictionary[i];

        const regex = new RegExp(word, 'g')

        let [...temp] = testingImposableString.matchAll(regex)

        temp = temp.map(el => [el[0], el.index])

        result.push(...temp)

        testingImposableString = testingImposableString.replace(regex, `${word.split('').map(el => 1).join('')}`)

        const wordIndex = inputString.indexOf(word);

        if (wordIndex >= 0) {
            posibleWords.push([word, wordIndex])
        }
    }

    testingImposableString = testingImposableString.replace(/1/g, '')

    let i = 0;
    while (i < dictionary.length) {

        const word = dictionary[i];
        const regex = new RegExp(word, 'g')

        for (let i = 0; i < posibleWords.length; i++) {
            if (posibleWords[i][0] != word) {
                posibleWords[i][0] = posibleWords[i][0].replace(regex, `${word.split('').map(el => 1).join('')}`)
            }
        }

        i++;
    }

    const test = posibleWords.filter(el => el[0].replace(/1/g, '').length == 0)
    if (testingImposableString.length) return 'IMPOSSIBLE'

    if (test.length) return 'AMBIGUOUS'


    const resultStr = result.sort((a, b) => a[1] - b[1]).map(el => el[0]).join(' ');


    return resultStr
}

const dictionary = ["examples", "over", "haul", "overhaul", "the"];
const inputString = 'overhaultheexamples'

console.log(segmentify(dictionary, inputString));