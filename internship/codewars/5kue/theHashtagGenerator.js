function generateHashtag(str) {

    if (str.trim().length) {

        let result = str.split(' ').filter(el => el).map(el => el[0].toUpperCase() + el.slice(1)).join('')

        if (result[0] !== '#') {
            result = '#' + result
        }

        if (result.length <= 140) {
            return result
        }

    }

    return false
}

const str = 'Do We have A Hashtag'
console.log(generateHashtag(str));