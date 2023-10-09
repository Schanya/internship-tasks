class Sandpile {
    piles = new Array(3).fill([0, 0, 0]);

    constructor(piles) {
        if (piles) {
            this.piles = piles = piles.split('\n').map(el => el.split('').map(el => Number(el)))

            this.piles = this.findExceedingValues(piles)
        }
    }

    add(sandpile) {
        const temp = [];

        let result = this.piles.map((arrEl, i) => {
            arrEl = arrEl.map((el, j) => {
                el += sandpile.piles[i][j]

                if (el > 3) {
                    temp.push([el, i, j])
                }

                return el
            })

            return arrEl
        })

        if (temp.length) {
            result = this.check(temp, result)
        }

        return new Sandpile(result.map(el => el.join('')).join('\n'))
    }

    topple(piles, el, i, j) {

        if (piles[i] != undefined) {
            if (piles[i][j + 1] != undefined) {
                piles[i][j + 1] += 1;
            }

            if (piles[i][j - 1] != undefined) {
                piles[i][j - 1] += 1;
            }
        }

        if (piles[i + 1] != undefined) {
            if (piles[i + 1][j] != undefined) {
                piles[i + 1][j] += 1;
            }
        }

        if (piles[i - 1] != undefined) {
            if (piles[i - 1][j] != undefined) {
                piles[i - 1][j] += 1;
            }
        }

        piles[i][j] -= 4;

        return piles;
    }

    check(temp, piles) {

        while (temp.length) {
            let i = 0;
            while (i < temp.length) {
                piles = this.topple(piles, ...temp[i])
                i++
            }

            temp = [];

            piles.forEach((arrEl, i) => arrEl.map((el, j) => {
                if (el > 3) {
                    temp.push([el, i, j])
                }
            }))
        }

        return piles;

    }

    findExceedingValues(piles) {
        const temp = [];

        piles.forEach((arrEl, i) => arrEl.map((el, j) => {
            if (el > 3) {
                temp.push([el, i, j])
            }
        }))

        piles = this.check(temp, piles)

        return piles;
    }

    toString() {
        return this.piles.reduce((str, el) => (str.push(el.join('')), str), []).join('\n')
    }
}

const empty = new Sandpile();
const notEmpty = new Sandpile('130\n121\n322');
const sandpile = new Sandpile('402\n230\n001')

// console.log(empty.toString());
// console.log(notEmpty.toString());

console.log(notEmpty.add(sandpile));