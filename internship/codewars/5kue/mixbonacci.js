const fibCache = {};

function fib(n) {
    let result = 0;
    if (n in fibCache) {
        result = fibCache[n];
    } else {
        if (n === 1) { result }
        else if (n === 2) { result = 1; }
        else {
            result = fib(n - 1) + fib(n - 2);
            fibCache[n] = result;
        }
    }
    return result
}

const triCache = {};

function tri(n) {
    let result = 0;
    if (n in triCache) {
        result = triCache[n];
    } else {
        if (n <= 2) { result }
        else if (n === 3) { result = 1; }
        else {
            result = tri(n - 1) + tri(n - 2) + tri(n - 3);
            triCache[n] = result;
        }
    }
    return result;
}

const tetCache = {};

function tet(n) {
    let result = 0;
    if (n in tetCache) {
        result = tetCache[n];
    } else {
        if (n <= 3) { result }
        else if (n === 4) { result = 1; }
        else {
            result = tet(n - 1) + tet(n - 2) + tet(n - 3) + tet(n - 4);
            tetCache[n] = result;
        }
    }
    return result;
}

function pad(n) {
    if (n === 1) { return 1; }
    if (n <= 3) { return 0; }
    else {
        return pad(n - 2) + pad(n - 3);
    }
}

const jacCache = {};

function jac(n) {
    let result = 0;
    if (n in jacCache) {
        result = jacCache[n];
    }
    else {
        if (n === 1) { result; }
        else if (n === 2) { result = 1; }
        else {
            result = jac(n - 1) + 2 * jac(n - 2);
            jacCache[n] = result;
        }
    }
    return result;
}

const pelCache = {};

function pel(n) {
    let result = 0;
    if (n in pelCache) {
        result = pelCache[n];
    }
    else {
        if (n === 1) { result; }
        else if (n === 2) { result = 1; }
        else {
            result = 2 * pel(n - 1) + pel(n - 2);
            pelCache[n] = result;
        }
    }
    return result;
}

function mixbonacci(pattern, length) {
    if (pattern.length === 0) { return []; }
    if (length === 0) { return []; }
    let result = [];
    let count = { 'fib': 1, 'pad': 1, 'jac': 1, 'pel': 1, 'tri': 1, 'tet': 1 };

    while (result.length < length) {
        for (let j = 0; j < pattern.length; j++) {
            switch (pattern[j]) {
                case 'fib': {
                    result.push(fib(count[pattern[j]]));
                    break;
                }
                case 'pad': {
                    result.push(pad(count[pattern[j]]));
                    break;
                }
                case 'jac': {
                    result.push(jac(count[pattern[j]]));
                    break;
                }
                case 'pel': {
                    result.push(pel(count[pattern[j]]));
                    break;
                }
                case 'tri': {
                    result.push(tri(count[pattern[j]]));
                    break;
                }
                case 'tet': {
                    result.push(tet(count[pattern[j]]));
                    break;
                }

                default:
                    break;
            }

            count[pattern[j]] += 1;
            if (result.length == length) { break; }
        }
    }
    return result;
}

console.log(mixbonacci(['fib', 'tet'], 10));