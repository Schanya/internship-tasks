const rules = {
    0: {
        'A': 0,
        '2': 1,
        '3': 2,
        '4': 3,
        '5': 4,
        '6': 5,
        '7': 6,
        '8': 7,
        '9': 8,
        'T': 9,
        'J': 10,
        'Q': 11,
        'K': 12
    },

}

function reduceCards(input) {
    if (!Array.isArray(input)) return null;

    if (!input.length) return input;

    if (input.some(value => isNaN(Number(value)))) {
        return input.map(el => el.split('')[0]).sort((a, b) => rules[0][a] - rules[0][b]);
    } else {
        return input.map(el => {
            while (el >= 13) {
                el -= 13;
            }

            return el;
        }).sort((a, b) => a - b)
    }
}

console.log(reduceCards(['Td', '5s', 'Kh', '7d']))
console.log('c'.charCodeAt() + ' ' + 'd'.charCodeAt() + ' ' + 'h'.charCodeAt() + ' ' + 's'.charCodeAt());