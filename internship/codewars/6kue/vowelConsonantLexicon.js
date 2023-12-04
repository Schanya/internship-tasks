function solve(s) {
    const vowels = ["a", "e", "i", "o", "u"];

    s = [...s];

    const vowelsInS = s.filter(vowel => vowels.includes(vowel)).sort();
    const consonantsInS = s.filter(vowel => !vowels.includes(vowel)).sort();

    if (vowelsInS.length !== consonantsInS.length) {
        if (Math.abs(vowelsInS.length - consonantsInS.length) !== 1) return 'failed';
    }

    let result = '';
    for (let i = 0; i < Math.max(vowelsInS.length, consonantsInS.length); i++) {
        if (consonantsInS.length > vowelsInS.length) {
            result += consonantsInS[i] == undefined ? '' : consonantsInS[i];
            result += vowelsInS[i] == undefined ? '' : vowelsInS[i];
        } else {
            result += vowelsInS[i] == undefined ? '' : vowelsInS[i];
            result += consonantsInS[i] == undefined ? '' : consonantsInS[i];
        }
    }

    return result;
};

console.log(solve('lapep'))