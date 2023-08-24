function solution(array) {
    const n = arr.length;
    const temp = Array(n).fill(0);
    let duplicate = -1;
    let missing = -1;

    for (let i = 0; i < n; i++) {
        temp[arr[i] - 1]++;
        if (temp[arr[i] - 1] > 1) {
            duplicate = arr[i];
        }
    }
    for (let i = 0; i < n; i++) {
        if (temp[i] === 0) {
            missing = i + 1;
            break;
        }
    }
    return [missing, duplicate];
}

const arr = [2, 3, 1, 4, 4, 6];
console.log(solution(arr));