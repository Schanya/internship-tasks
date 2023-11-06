class Jar {
    fruits = new Map()

    add(amount, type) {
        if (this.fruits.has(type)) {
            const oldAmount = this.fruits.get(type);
            amount += oldAmount;
        }
        this.fruits.set(type, amount);
    }
    pourOut(amount) {
        const array = Array.from(this.fruits.entries())

        this.fruits = new Map(array.map(el => el[1] - amount * this.getConcentration(el[0]) >= 0 ? [el[0], el[1] - amount * this.getConcentration(el[0])] : [el[0], 0]))
    }
    getTotalAmount() {
        return this.fruits.size ? Array.from(this.fruits.values()).reduce((totalAmount, el) => totalAmount += el) : 0
    }

    getConcentration(type) {
        if (!this.fruits.has(type) || !this.fruits.get(type)) return 0;

        return this.fruits.size ? (this.fruits.get(type) / this.getTotalAmount()) : 0
    }
}
let jar = new Jar();

jar.add(200, 'apple');
jar.add(200, 'banana');

jar.pourOut(200)

jar.add(200, 'apple');

jar.pourOut(50)

jar.pourOut(350)

console.log(jar.getTotalAmount());
console.log(jar.getConcentration('apple'));




