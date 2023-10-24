stringMerge = (s, t, l) => s.split(l, 1) + t.match(`${l}.*`)

console.log(stringMerge("hello", "world", "l"))