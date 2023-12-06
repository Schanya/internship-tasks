function sortArrays(arr1, arr2) {

    const length = Math.max(arr1.length, arr2.length);

    const initialArray1 = arr1.slice();
    const initialArray2 = arr2.slice();

    const sortedArray1 = arr1.sort((a, b) => a - b);
    const sortedArray2 = arr2.sort((a, b) => a - b);

    const resultArray1 = new Array(length);
    const resultArray2 = new Array(length);

    for (let i = 0; i < length; i++) {
        const el2 = initialArray2[i];
        const indexOfEl2 = sortedArray2.findIndex((value, index) => value == el2 && resultArray1[index] == undefined)

        const el1 = initialArray1[i];
        const indexOfEl1 = sortedArray1.findIndex((value, index) => value == el1 && resultArray2[index] == undefined)

        resultArray1[indexOfEl2] = el1;
        resultArray2[indexOfEl1] = el2;
    }

    return [resultArray1, resultArray2];
}

console.log(sortArrays([5, 6, 9, 2, 6, 5], [3, 6, 7, 4, 8, 1]))
