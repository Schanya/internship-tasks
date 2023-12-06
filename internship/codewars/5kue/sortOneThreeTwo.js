const numberNames = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",
    "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",
    "hundred", "thousand"
];

function sortByName(integers) {
    const sortedIntegers = integers.sort((a, b) => {
        const nameA = getIntegerName(a);
        const nameB = getIntegerName(b);
        return nameA.localeCompare(nameB);
    });

    return sortedIntegers;
}

function getIntegerName(integer) {
    if (integer < 20) {
        return numberNames[integer];
    } else if (integer < 100) {
        const tens = Math.floor(integer / 10);
        const ones = integer % 10;
        let name = numberNames[tens + 18];
        if (ones > 0) {
            name += " " + numberNames[ones];
        }
        return name;
    } else if (integer < 1000) {
        const hundreds = Math.floor(integer / 100);
        const remainder = integer % 100;
        let name = numberNames[hundreds] + " " + numberNames[28];
        if (remainder > 0) {
            name += " " + getIntegerName(remainder);
        }
        return name;
    } else {
        return "number out of range";
    }
}