function pickPeaks(arr) {
    let prev = 0;
    let cur = 0;

    const pos = [];
    const peaks = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[cur]) {
            prev = cur;
            cur = i;
        } else {
            if (arr[i] < arr[cur]) {
                if (arr[prev] < arr[cur]) {
                    pos.push(cur);
                    peaks.push(arr[cur])
                }
                prev = cur;
                cur = i
            }
        }
    }

    return { pos, peaks }
}

console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]))