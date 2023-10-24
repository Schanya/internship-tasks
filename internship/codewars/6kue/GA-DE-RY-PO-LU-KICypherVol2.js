function keyConvert(key) {
    key = key.split('')
    const obj = {};

    for (let i = 0; i < key.length; i += 2) {
        obj[key[i]] = key[i + 1];
        obj[key[i + 1]] = key[i];
    }

    return obj;
}

function encode(str, key) {
    key = keyConvert(key);

    str = str.split('').map(el => {
        if (key[el.toLowerCase()]) {
            if (isUpper(el)) {
                return key[el.toLowerCase()].toUpperCase()
            }
            return key[el]
        }

        return el
    }).join('')


    return str;
}

function decode(str, key) {
    key = keyConvert(key);

    str = str.split('').map(el => {
        if (key[el.toLowerCase()]) {
            if (isUpper(el)) {
                return key[el.toLowerCase()].toUpperCase()
            }
            return key[el];
        }

        return el;
    }).join('')

    return str;
}

function isUpper(str) {
    if (str === str.toUpperCase(str)) return true;
    else return false;
}