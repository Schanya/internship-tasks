function chained(functions) {
    return function (input) {
        return functions.reduce(function (result, fn) {
            return fn(result);
        }, input);
    };
}