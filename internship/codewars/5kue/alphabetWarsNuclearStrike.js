function alphabetWar(battlefield) {
    let survivedLetters = '';

    const array = battlefield.split('');

    let isAtLeastOneBomb = array.some(el => el === '#')

    if (!isAtLeastOneBomb) return array.filter(el => el !== '[' && el !== ']').join('');

    let countBeforeShelterBomb = 0;
    let countAfterShelterBomb = 0;

    let countShelter = -1;

    let maybeSurvive = '';


    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case '[': {
                if (countShelter == 1) {
                    if (countBeforeShelterBomb + countAfterShelterBomb < 2) {
                        survivedLetters += maybeSurvive;
                    }

                    countShelter = -1;

                    countBeforeShelterBomb = countAfterShelterBomb;
                    countAfterShelterBomb = 0;

                    maybeSurvive = '';
                }
                countShelter++;
                break;
            }
            case ']': {
                countShelter++;
                break;
            }
            case '#': {
                if (countShelter == 0) {
                    countBeforeShelterBomb++;
                    break;
                }
                if (countShelter == 1) {
                    countAfterShelterBomb++;
                    break;
                }
                countBeforeShelterBomb++;
                break;
            }
            default: {
                if (countShelter == 0 && countBeforeShelterBomb + countAfterShelterBomb < 2) {
                    maybeSurvive += array[i]
                }
                break;
            }
        }

    }

    if (maybeSurvive.length && countBeforeShelterBomb + countAfterShelterBomb < 2) {
        survivedLetters += maybeSurvive;
    }

    return survivedLetters;
}

console.log(alphabetWar('abde[fgh]ijk'));