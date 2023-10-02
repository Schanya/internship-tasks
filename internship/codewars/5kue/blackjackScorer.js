function scoreHand(cards) {

    let countAce = 0;

    let result = cards.reduce((tempResult, card) => {
        if (card == 'A') {
            countAce++;

            return tempResult
        };

        tempResult += isNaN(Number(card)) ? 10 : Number(card);

        return tempResult
    }, 0);

    for (let i = countAce; i > 0; i--) {
        result += result > (11 - i) ? 1 : 11
    }

    return result;
}


const cards = ['A', 'J', 'A'];

console.log(scoreHand(cards));