function dup(s) {
    return s.map(el => deleteDup(el))
};


function deleteDup(str) {
    let prevEl = str[0];
    let result = prevEl;

    for (let i = 1; i < str.length; i++) {
        if (str[i] !== prevEl) {
            result += str[i];

            prevEl = str[i]
        }
    }

    return result;
}

console.log(dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]))