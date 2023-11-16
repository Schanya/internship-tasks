function searchSubstr(fullText, searchText, allowOverlap = true) {
    if (!searchText.length) return 0;

    if (!allowOverlap) {
        const regExp = new RegExp(searchText, 'g');
        const result = fullText.match(regExp);

        return result.length;
    }

    let count = 0;
    for (let i = 0; i < fullText.length; i++) {
        if (fullText.startsWith(searchText, i)) {
            count++;
        }
    }

    return count;
}

console.log(searchSubstr('aaa', ''));