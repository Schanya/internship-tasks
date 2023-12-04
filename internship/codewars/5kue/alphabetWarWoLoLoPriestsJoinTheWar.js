function findKeyByValue(obj, value) {
    const key = Object.keys(obj).find(key => obj[key] === value);

    return key;
}


function alphabetWar(fight) {
    const leftSide = { w: 4, p: 3, b: 2, s: 1, t: 0 };
    const rightSide = { m: 4, q: 3, d: 2, z: 1, j: 0 };

    const str = fight.split('');

    fight = fight.replace(/(?<=\w)t|t(?=\w)/g, (value, index) => {
        if (`${str[index + 1]}` in rightSide && str[index + 1] !== "j") {
            if (str[index + 2] !== "j") {
                str[index + 1] = findKeyByValue(leftSide, rightSide[str[index + 1]]);
            }
        }

        if (`${str[index - 1]}` in rightSide && str[index - 1] !== "j") {
            if (str[index - 2] !== "j") {
                str[index - 1] = findKeyByValue(leftSide, rightSide[str[index - 1]]);
            }

        }

        return 't'
    })

    fight = fight.replace(/(?<=\w)j|j(?=\w)/g, (value, index) => {
        if (`${str[index + 1]}` in leftSide && str[index + 1] !== "t") {
            if (str[index + 2] !== "t") {
                str[index + 1] = findKeyByValue(rightSide, leftSide[str[index + 1]]);
            }
        }

        if (`${str[index - 1]}` in leftSide && str[index - 1] !== "t") {
            if (str[index - 2] !== "t") {
                str[index - 1] = findKeyByValue(rightSide, leftSide[str[index - 1]]);
            }
        }

        return 'j'
    })

    const rightPower = str.reduce((sum, el) => (sum += rightSide[el] ?? 0, sum), 0);
    const leftPower = str.reduce((sum, el) => (sum += leftSide[el] ?? 0, sum), 0);



    if (leftPower > rightPower) {
        return 'Left side wins!';
    } else if (leftPower < rightPower) {
        return 'Right side wins!';
    } else {
        return "Let's fight again!";
    }
}

console.log(alphabetWar('ztzt ztzj stj'))