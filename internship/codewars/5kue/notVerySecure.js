function alphanumeric(string) {

    if ((/\_/g).test(string)) {
        return false
    }

    const regexp = /^[0-9A-Z]+$/gi
    return regexp.test(string)
}

const str = "X6zEx5wkC692Z2LdOEdlemfqFvF"
console.log(alphanumeric(str));