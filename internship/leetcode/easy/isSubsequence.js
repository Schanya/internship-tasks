/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {

    const dictionary = s.split('');
    const arrayT = t.split('');
    let result = '';
    let j = 0;

    for (let i = 0; i < arrayT.length; i++) {
        const char = arrayT[i];

        if (dictionary[j] == undefined) break;

        if (char == dictionary[j]) {
            result += char;
            j++;
        } else {
            arrayT.splice(i, 1);
            i--;
        }
    }

    return result == s
};
const s = "abc", t = "ahbgdc"

console.log(isSubsequence(s, t));