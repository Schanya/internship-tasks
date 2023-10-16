/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    while (s.includes('[')) {
        s = s.replace(/\d{1,}?\[(\w*)\]/, (m, a) => a.repeat(+m.replace(/\[(\w*)\]/, '') || 1));
    }
    return s;
};

console.log(decodeString('30[a2[c]]'));
