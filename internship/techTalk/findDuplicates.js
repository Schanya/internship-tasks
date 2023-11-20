function findDuplicatesSlow(arr) {
    const duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }

    return duplicates;
}

function findDuplicatesFast(arr) {

    const duplicates = [];
    const uniqueElements = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (uniqueElements.has(arr[i]) && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        } else {
            uniqueElements.add(arr[i]);
        }
    }

    return duplicates;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 1, 2, 3];

console.log(findDuplicatesSlow(arr1));
console.log(findDuplicatesSlow(arr2));

console.log(findDuplicatesFast(arr1));
console.log(findDuplicatesFast(arr2));

