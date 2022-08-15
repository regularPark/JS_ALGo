class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    static enrollStudent() {
        return ""
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage() {
        let sum = this.scores.reduce((a, b) => a + b);
        return sum / this.scores.length;
    }
}

let mo = new Student("Mohammed", "Salah", 11);
let virgil = new Student("Van", "Dijk", 4);
let taa = new Student("Trent", "Alexander-Arnold", 66);
mo.markLate();
mo.markLate();
mo.markLate();

mo.addScore(92);
mo.addScore(12);
mo.addScore(62);
mo.addScore(82);
console.log(mo.fullName());
console.log(mo.markLate());

console.log(mo.calculateAverage());