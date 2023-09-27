/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const replace = '[aeuio]';
    const regExp = new RegExp(replace, "i");

    let arr = s.split('');

    const vowels = arr.filter(char => regExp.test(char))


    arr = arr.map((el, i) => {
        if (regExp.test(el)) {
            el = vowels.pop()
        }

        return el
    }).join('')


    return arr;
};

console.log(reverseVowels("leetcode"));