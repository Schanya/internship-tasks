const solve = (s = '') => {
    const stack = []
    for (let i = 0; i < s.length; i++) {

        if (s[i] === ')') {
            let pattern = ''
            let c = stack.pop()

            while (c !== '(') {
                pattern = c + pattern
                c = stack.pop()
            }

            let numStr = ''
            let num = stack.pop()
            let isChar = '';

            if (isNaN(Number(num))) {
                isChar = num
                num = '1'
            };

            while (/[0-9]/.test(num)) {
                numStr = num + numStr
                num = stack.pop()
            }

            stack.push(num)
            let str = ''

            for (let j = 0; j < parseInt(numStr, 10); j++) {
                str += pattern
            }

            if (isChar.length) str = isChar + str;

            stack.push(str)
        } else {
            stack.push(s[i])
        }
    }
    return stack.join('')
}

console.log(decodeString("k(a3(b(a2(c))))"))
console.log(decodeString('2(a3(b))'));