function integerRightTriangles(p) {
    const triangles = [];
    const upperLimit = Math.floor(p / 2);

    for (let a = 1; a <= upperLimit; a++) {
        const b = (p * (p - 2 * a)) / (2 * (p - a));

        if (Number.isInteger(b) && b !== 0) {
            const c = p - a - b;

            const triangle = [a, b, c].sort((x, y) => x - y);
            if (!triangles.some(t => t.toString() === triangle.toString())) {
                triangles.push(triangle);
            }
        }
    }

    return triangles;
}


console.log(integerRightTriangles(4));   // []
console.log(integerRightTriangles(12));  // [[3,4,5]]
console.log(integerRightTriangles(120)); // [[20,48,52], [24,45,51], [30,40,50]]