function isAlt(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const chars = str.toLowerCase().split('');

    for (let i = 0; i < chars.length - 1; i++) {
        const currentChar = chars[i];
        const nextChar = chars[i + 1];

        if (vowels.includes(currentChar) === vowels.includes(nextChar)) {
            return false;
        }
    }

    return true;
}

// Пример использования
console.log(isAlt('apple')); // false
console.log(isAlt('banana')); // true
console.log(isAlt('hello')); // true
console.log(isAlt('world')); // true