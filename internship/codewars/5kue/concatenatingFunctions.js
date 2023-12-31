// just a small amount of possible functions to start testing with.
var addOne = function (e) { return e + 1; };
var square = function (e) { return e * e; };

// Extend the Function prototype with a method pipe
Function.prototype.pipe = function (fn) {
    const prevFunction = this;

    return function (argument) {
        return fn(prevFunction(argument))
    }
}

console.log([1, 2, 3, 4, 5].map(addOne.pipe(square)))