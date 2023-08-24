function valueOfX(eq) {
    const regexp = /[x]/
    const arr = eq.split('=')
    const X = arr.filter(el => regexp.test(el));
    let number = eval(arr.filter(el => !regexp.test(el)).join(''));

    if (X.length > 1) {
        console.log('Больше чем один x')
        return -1;
    }

    let temp = X[0].trim().split(' ');
    const xIndex = temp.indexOf('x');

    let flag = temp[xIndex - 1] == '-'
    temp.splice(xIndex - 1 < 0 ? 0 : xIndex - 1, xIndex - 1 < 0 ? 1 : 2)

    if (!temp.length) {
        temp = [0]
    }

    number += -1 * eval(temp.join(''))


    return flag ? -1 * number : number;
}

const arr = [
    '10 + x = 77']

console.log(arr.map(el => valueOfX(el)));