// Takes an array of numbers and returns the variance as a float.
// The array of numbers will always have at least one element in it.
var variance = function (numbers) {
    const mean = numbers.reduce((sum, el) => sum += el) / numbers.length

    const deviation = numbers.map(el => el - mean);

    const degree = deviation.map(el => Math.pow(el, 2));

    const degreeSum = degree.reduce((sum, el) => sum += el);

    const variance = degreeSum / numbers.length;

    return variance;
};

const numbers = [-1, -10, -500]
console.log(variance(numbers));