function findTheKey(messages, secrets) {
    const result = []

    for (let i = 0; i < messages.length; i++) {
        messages[i] = messages[i].split('');
        secrets[i] = secrets[i].split('');

        for (let j = 0; j < messages[i].length; j++) {
            if (messages[i][j] != secrets[i][j]) {

                if (!result.includes([messages[i][j], secrets[i][j]].join('')) && !result.includes([secrets[i][j], messages[i][j]].join(''))) {
                    result.push([messages[i][j], secrets[i][j]].join(''))
                }
            }
        }
    }

    return result.map(el => el.split('').sort().join('')).sort().join('')
}

var messages = ["dance on the table", "hide my beers", "scouts rocks"];
var secrets = ["egncd pn thd tgbud", "hked mr bddys", "scplts ypcis"];
console.log(findTheKey(messages, secrets));   //=> agdeikluopry