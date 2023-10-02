// function justify(text, width) {

//     const arraryText = text.split(' ');
//     let maxLength = 0;
//     let result = ''

//     for (let i = 0; i < arraryText.length; i++) {
//         maxLength += arraryText[i].length + 1;

//         if (maxLength >= width) {
//             let temp = arraryText.splice(0, i + 1).join(' ');

//             while (temp.length > width) {
//                 temp = temp.split(' ');
//                 arraryText.unshift(temp.pop());
//                 temp = temp.join(' ')
//             }

//             if (temp.length != width) {

//                 while (temp.length != width) {
//                     if (temp.split(' ').length == 1) break;

//                     const numberOfSpace = width - temp.length;

//                     temp = addingSpaces(temp, numberOfSpace)
//                 }

//             }

//             temp += '\n'
//             // console.log(temp);
//             result += temp;
//             maxLength = 0;
//             i = -1
//         }

//     }

//     result += arraryText.join(' ')

//     return result;
// }

// function addingSpaces(str, numberOfSpace) {
//     str = str.split(' ');
//     let count = 0;
//     let i = 0;

//     while (count != numberOfSpace) {
//         str[i] += ' ';
//         i++;

//         if (i >= str.length - 1) {
//             i = 0;
//         }

//         count++;
//     }

//     return str.join(' ');
// }


/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
function justify(str, len) {
    var words = str.split(' ');
    var lines = [];
    var lastLine = words.reduce(function (line, word) {
        if (line) {
            if (line.length + word.length + 1 <= len)
                return line + ' ' + word;
            lines.push(line);
        }
        return word;
    });
    lines = lines.map(function (line) {
        if (line.indexOf(' ') >= 0)
            for (var lineLen = line.length; lineLen < len;)
                line = line.replace(/ +/g, function (spaces) {
                    return spaces + (lineLen++ < len ? ' ' : '');
                });
        return line;
    });
    lastLine && lines.push(lastLine);
    return lines.join('\n');
}

// console.log(justify('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.', 30));
// console.log(justify('12 45 1234 12', 6));

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.'
console.log(justify(text, 15));