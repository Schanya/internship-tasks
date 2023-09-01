const food = {
    beef: [26, 0, 18],
    buffalo: [27, 0, 2],
    elk: [30, 0, 2],
    lamb: [23, 0, 19],
    pork: [20, 0, 11],
    rabbit: [29, 0, 8],
    chicken: [24, 0, 5],
    duck: [23, 0, 9],
    goose: [28, 0, 10],
    turkey: [26, 0, 2],
    bass: [24, 0, 5],
    catfish: [18, 0, 3],
    crab: [19, 0, 2],
    lobster: [21, 1, 1],
    salmon: [27, 0, 10],
    beans: [8, 25, 0],
    tofu: [7, 3, 3],
    cheddar: [21, 0, 28],
    eggs: [10, 2, 10],
    mozzarella: [18, 3, 18],
    parmesan: [30, 4, 22],
    beer: [0, 5, 0],
    wine: [0, 3, 0],
    juice: [0, 10, 0],
    milk: [3, 4, 2],
    cabbage: [1, 6, 0],
    broccoli: [3, 7, 0],
    corn: [3, 20, 1],
    mushrooms: [3, 3, 0],
    tomatoes: [1, 3, 0],
    potatoes: [2, 16, 0],
    olives: [1, 6, 11],
    cucumber: [1, 4, 0],
    apples: [0, 14, 0],
    bananas: [1, 23, 0],
    blackberries: [1, 10, 0],
    cherries: [1, 12, 0],
    lemons: [1, 9, 0],
    kiwi: [1, 15, 1],
    watermelon: [1, 8, 0],
    oat: [12, 50, 5],
    quinoa: [14, 60, 5],
    rice: [5, 28, 0],
    chocolate: [7, 45, 30],
    mayonnaise: [0, 0, 12]
}

//carbohydrates and protein = 4 cal
//fat = 9 cal

const flatten = arr => [].concat(...arr);

function bulk(arr) {

    if (!arr.length) return "Total proteins: 0 grams, Total calories: 0"

    let grammFood = arr.map(el => el.split(',')).map(el => el.map(el => el.trim().split(' ')))

    if (Array.isArray(grammFood[0][0])) {
        grammFood = flatten(grammFood)
    }

    const result = grammFood.reduce((sum, el) => {
        const [protein, carbohydrates, fat] = food[el[1]]

        const weight = (+el[0].replace('g', ''));

        const proteinForEl = (weight * protein) / 100;
        const carbohydratesForEl = (weight * carbohydrates) / 100;
        const fatForEl = (weight * fat) / 100;

        const calories = (proteinForEl + carbohydratesForEl) * 4 + fatForEl * 9

        sum[0] += proteinForEl;
        sum[1] += calories;

        return sum
    }, [0, 0])

    if (!Number.isInteger(result[0])) {
        result[0] = result[0].toString().split('.')[1].length > 2 ? result[0].toFixed(2) : result[0]
    }

    if (!Number.isInteger(result[1])) {
        result[1] = result[1].toString().split('.')[1].length > 2 ? result[1].toFixed(2) : result[1]
    }

    return `Total proteins: ${result[0]} grams, Total calories: ${result[1]}`
}

var a = ["175g pork, 100g eggs, 25g chocolate", "175g goose, 200g cheddar, 250g milk, 300g kiwi", "100g catfish, 125g parmesan, 75g chocolate, 125g watermelon", "125g chicken, 25g beans, 50g lemons"];
var b = ["150g elk, 325g tofu, 150g watermelon", "75g pork, 50g mushrooms, 75g kiwi", "275g rabbit, 325g broccoli, 100g cherries", "225g duck, 200g potatoes, 175g parmesan, 25g wine", "225g rabbit, 125g broccoli"];
var c = ["350g goose, 75g mozzarella", "325g beef, 175g tofu, 75g juice", "125g goose, 350g rice", "175g beef, 50g mushrooms", "325g pork, 50g mushrooms", "325g rabbit, 175g cheddar"];
var d = ["325g duck, 175g potatoes, 325g bananas", "75g elk, 225g rice", "100g chicken, 50g broccoli", "300g turkey, 325g corn, 175g milk, 50g wine", "150g bass, 75g tomatoes, 275g wine", "200g buffalo, 150g potatoes"];

console.log(bulk(a));