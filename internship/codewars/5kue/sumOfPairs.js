function sumPairs(ints, s) {
    if (ints.length < 2) return undefined

    let set = new Set()
    for (let i = 0; i < ints.length; i++) {
        let need = s - ints[i]
        if (set.has(need)) {
            return [need, ints[i]]
        }
        set.add(ints[i])
    }

    return undefined
}

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8))