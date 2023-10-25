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
    }
}

const rulesBack = {
    0: 'A',
    1: '2',
    2: '3',
    3: '4',
    4: '5',
    5: '6',
    6: '7',
    7: '8',
    8: '9',
    9: 'T',
    10: 'J',
    11: 'Q',
    12: 'K'
}

function encode(input) {

    return input.map(el => el.split('')).map(el => {
        switch (el[1]) {
            case 'c':
                return rules[0][el[0]];
            case 'd':
                return rules[0][el[0]] + 13;
            case 'h':
                return rules[0][el[0]] + 26;
            case 's':
                return rules[0][el[0]] + 39
        }
    }).sort((a, b) => a - b)
}

function decode(input) {
    return input.sort((a, b) => a - b).map(el => {
        let count = 0;
        let suit = 'c';

        while (el >= 13) {
            el -= 13;
            count++;
        }

        switch (count) {
            case 1:
                suit = 'd';
                break;
            case 2:
                suit = 'h';
                break;
            case 3:
                suit = 's';
                break;
        }

        return rulesBack[el] + suit;
    }).sort((a, b) => a - b)
}

console.log(encode(["5h", "7c", "Qh", "Qs", "Ad"]))

console.log(decode([50, 6, 13, 30, 37]));