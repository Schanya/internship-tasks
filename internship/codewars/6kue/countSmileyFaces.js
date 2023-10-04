const countSmileys = arr => arr.filter(e => {
    if (new RegExp('(:|;)(~|-|)(\\)|D)').test(e)) {
        return e;
    }
}).length;