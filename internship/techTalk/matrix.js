function writeToArrays(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        console.log('First ' + array1[i]);
    }

    for (let i = 0; i < array2.length; i++) {
        console.log('Second ' + array2[i]);
    }
}

function writeToArrays2(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        console.log('First ' + array1[i]);

        for (let i = 0; i < array2.length; i++) {
            console.log('Second ' + array2[i]);
        }
    }
}

writeToArrays([10, 9, 8, 7, 6, 5, 4, 3], [10, 9, 8, 7, 6, 5, 4, 3].reverse())
writeToArrays2([10, 9, 8, 7, 6, 5, 4, 3], [10, 9, 8, 7, 6, 5, 4, 3].reverse())
