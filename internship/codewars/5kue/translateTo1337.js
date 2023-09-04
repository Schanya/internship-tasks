function toLeet(str) {
    const rules = new Map(
        [
            ['a', ['4', '@']],
            ['b', ['|3', '8']],
            ['d', ['|)', 'o|']],
            ['e', ['3']],
            ['f', ['|=']],
            ['g', ['9', '6']],
            ['h', ['|-|', ']-[', '}-{', '(-)', ')-(', '#']],
            ['i', ['1', '!', '][']],
            ['j', ['_|']],
            ['k', ['|<', '|{']],
            ['l', ['|_']],
            ['n', ['|\\|']],
            ['o', ['0']],
            ['p', ['|2', '|D']],
            ['q', ['(,)']],
            ['r', ['|Z', '|?']],
            ['s', ['5', '$']],
            ['t', ['+', '7']],
            ['v', ['|/', '\/']],
            ['w', ['\^/', '//']],
            ['x', ['><', '}{']],
            ['y', ['`/']],
            ['z', ['(\)']],
        ]
    )


    const arr = str.split('');
    const map = new Map();

    return arr.map(el => {
        if (!map.has(el)) {
            map.set(el, 0)
        } else {
            map.set(el, map.get(el) + 1)
        }

        const replacer = rules.get(el);

        if (!replacer) return el;

        if (map.get(el) >= replacer.length) {
            map.set(el, 0);
            return replacer[0];
        } else {
            return replacer[map.get(el)]
        }

    }).join('')
}

const str = 'pancakes';
console.log(toLeet(str));