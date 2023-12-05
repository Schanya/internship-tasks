function parseHTMLColor(color) {
    let tempResult = [];
    const result = {};

    if (!(/[0-9]/.test(color)) && PRESET_COLORS[color.toLowerCase()]) {
        color = PRESET_COLORS[color.toLowerCase()];
    }


    color = color.replace('#', '');

    if (color.length == 6) {
        tempResult = color.match(/.{1,2}/g);
    }

    if (color.length == 3) {
        tempResult = color.split('').map(el => `${el}${el}`)
    }


    result.r = parseInt(tempResult[0], 16)
    result.g = parseInt(tempResult[1], 16)
    result.b = parseInt(tempResult[2], 16)

    return result;
}

console.log(parseHTMLColor('#AEA'))