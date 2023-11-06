Array.prototype.splice = function (from, count, ...rest) {
    const cutOut = [];
    const shift = [];

    for (let i = from; i < this.length && i < from + count; i++) {
        cutOut.push(this[i]);
        delete this[i];
    }

    this.forEach((el, index) => index >= from + count ? (shift.push(this[index]), delete this[index]) : true)

    if (rest.length) {
        let countRest = 0;
        let insertRest = from;

        for (insertRest; insertRest < this.length; (insertRest++, countRest++)) {
            this[insertRest] = rest[countRest]

        }

        if (countRest < rest.length) {
            rest.forEach((el, i) => i >= countRest ? this.push(el) : true)
        }

    }

    for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined) {
            this[i] = shift.shift()
        }

    }

    if (shift.length) {
        shift.map(el => this.push(el))
    }

    while (this.some(el => el == undefined)) {
        this.pop()
    }


    return cutOut;
};

// Array.prototype.splice = function (from, count, ...args) {
//     const arr = this.slice(from + count);
//     const rem = this.slice(from, from + count);
//     this.length = from;
//     this.push(...args, ...arr);

//     return rem;
// };

const arr = [1, 4]


console.log(arr.splice(1, 1, 5, 6));
console.log(arr);