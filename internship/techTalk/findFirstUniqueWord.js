function findFirstUniqueWordSlow(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        let isUnique = true;
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[i] === words[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            return words[i];
        }
    }
    return null;
}

function findFirstUniqueWordFast(str) {
    const words = str.split(' ');
    const wordCount = {};
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    for (let i = 0; i < words.length; i++) {
        if (wordCount[words[i]] === 1) {
            return words[i];
        }
    }
    return null;
}

console.log(findFirstUniqueWordFast('слово слово потом привет четверг потом привет среда привет слово пятница четверг'));
console.log(findFirstUniqueWordSlow('слово слово потом привет четверг потом привет среда привет слово пятница четверг'));
