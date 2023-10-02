/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let result = '';

    word1 = word1.split('');
    word2 = word2.split('');

    for (let i = 0; i < (word1.length + word2.length); i++) {
        result += (word1[i] ?? '') + (word2[i] ?? '')
    }


    return result;
};

const word1 = "abc", word2 = "pqr"

console.log(mergeAlternately(word1, word2));