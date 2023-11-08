function multiFilter(...filters) {
    return function (element) {
        return filters.every(filter => filter(element));
    }
}