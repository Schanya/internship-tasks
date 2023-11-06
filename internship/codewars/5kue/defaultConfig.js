function defaults(obj, defs) {
    const result = {};

    for (var key in obj) {
        result[key] = obj[key];
    }

    for (var key in defs) {
        if (!obj.hasOwnProperty(key)) {
            result[key] = defs[key];

            if (result[key].error !== undefined) {
                throw result[key].error
            }
        }
    }

    return result;
}


function mandatory(err) {
    return {
        error: err
    };
}

const a = defaults({
    x: 1
}, {
    y: 2,
    z: 3
});

console.log(a);