function replaceCommon(string, letter) {
    const array = string.split('').filter(el => el != ' ');
    const set = Array.from(new Set(array))

    let regex = new RegExp(set[0], 'g');
    let matches = string.match(regex);

    let mostPopular = [set[0], matches ? matches.length : 0]

    for (let i = 1; i < set.length; i++) {
        const el = set[i];

        regex = new RegExp(el, 'g');
        matches = string.match(regex);

        if (matches) {
            if (matches.length > mostPopular[1]) {
                mostPopular = [el, matches.length]
            }
        }

    }

    return string.replace(new RegExp(mostPopular[0], 'g'), letter);
}

console.log(replaceCommon('my mom loves me as never did', 't'));