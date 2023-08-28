const replacer = (match) => ' ' + match + ' ';

function toUnderscore(string) {

    string = String(string)

    string = string.trim()
    if (string.length == 1) return string;

    const regexp = /[A-Z]/g;
    return string?.replace(regexp, replacer).split(' ').filter(el => el.length).map((el, i) => regexp.test(el) && i != 0 ? '_' + el.toLowerCase() : el.toLowerCase()).join('')
}

console.log(toUnderscore(5));