function prioritizeMissiles(missiles) {
    return missiles.map(el => ({ name: el.name, time: (el.distance / el.speed) })).sort((a, b) => a.time - b.time).map(el => el.name)
}

const arr = [
    { name: 'DASHER_V3', distance: 1000, speed: 100 },
    { name: 'DANCER_V2.3', distance: 1000, speed: 10 },
    { name: 'PRANCER_V1.2', distance: 1000, speed: 1 }]

console.log(prioritizeMissiles(arr));