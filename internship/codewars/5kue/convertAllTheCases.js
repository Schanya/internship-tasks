function changeCase(identifier, targetCase) {

    const isSnake = /\_/g.test(identifier);
    const isKebab = /\-/g.test(identifier);
    const haveUpperChar = /[A-Z]/g.test(identifier);

    const isCamel = !(isSnake || isKebab);

    if (((isKebab || isSnake) && haveUpperChar) || (isKebab && isSnake)) return undefined;


    if (isCamel) {
        const replacer = (match) => ' ' + match + ' ';
        const regexp = /[A-Z]/g;

        identifier = identifier.replace(regexp, replacer).split(' ').filter(el => el != ' ');

        for (let i = 0; i < identifier.length; i++) {
            let el = identifier[i];

            if (el.length == 1) {
                identifier[i] = el.toLowerCase() + identifier[i + 1];
                identifier.splice(i + 1, 1)
            }
        }

    }

    if (isKebab) {
        identifier = identifier.split('-');
    }

    if (isSnake) {
        identifier = identifier.split('_');
    }

    switch (targetCase) {
        case 'snake': {
            identifier = identifier.join('_');
            break;
        }
        case 'camel': {
            identifier = identifier.map((el, i) => {
                if (i) {
                    return el[0].toUpperCase() + el.slice(1)
                } else {
                    return el
                }
            }).join('')
            break;
        }
        case 'kebab': {
            identifier = identifier.join('-')
            break;
        }

        default:
            return undefined;
    }

    return identifier;
}

console.log(changeCase('some-lisp_name', 'camel'));