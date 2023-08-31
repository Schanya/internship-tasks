function* fibonacciSequence() {
    var current = a = b = 1n;

    yield 1n;

    while (true) {
        current = b;

        yield current;

        b = a + b;
        a = current;
    }
}

sequence = fibonacciSequence();
console.log(sequence.next()); // 1
sequence.next(); // 1
sequence.next(); // 2