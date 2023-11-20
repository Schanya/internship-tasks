function sortAnimals(animals) {
    const sortedAnimals = [...animals];

    sortedAnimals.sort((a, b) => {
        if (a.numberOfLegs !== b.numberOfLegs) {
            return a.numberOfLegs - b.numberOfLegs;
        } else {
            return a.name.localeCompare(b.name);
        }
    });

    return sortedAnimals;
}

const animals = [
    { name: "Cat", numberOfLegs: 4 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Bird", numberOfLegs: 2 },
    { name: "Elephant", numberOfLegs: 4 }
];

const sortedAnimals = sortAnimals(animals);
console.log(sortedAnimals);