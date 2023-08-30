// input: courses - array of course-names "name-yymm"
// output: sorted by "yymm", then "name"
sortme = function (courses) {
    const sortedCoursesByYYMM = courses.map(el => el.split('-')).sort((a, b) => +a[1] - +b[1])

    const result = sortedCoursesByYYMM.sort((a, b) => a[1] == b[1] ? a[0].localeCompare(b[0]) : 0)

    return result.map(el => el.join('-'));
}


console.log(sortme(["web-1305", "site-1305", "web-1304", "site-1304"]));//["site-1304", "web-1304", "site-1305", "web-1305"]