var searchArray = function (arrayToSearch, query) {
    if (!Array.isArray(arrayToSearch)) throw Error;

    if (!Array.isArray(query)) throw Error;

    if (query.length > 2 || query.length < 2) throw Error

    arrayToSearch.forEach(el => {
        if (el.length > 2 || el.length < 2) {
            throw Error
        }
    })

    return arrayToSearch.map(el => {
        return el.join('')
    }).indexOf(query.join(''))
}

var arrayToSearch = [[2, 3, 4], [7, 2], [9, 20], [1, 2], [7, 2], [45, 4], [7, 87], [4, 5], [2, 7], [6, 32]];
var query = [9, 20];

console.log(searchArray(arrayToSearch, query));