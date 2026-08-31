const student = {
    name: "fatima gul",
    department: "computer science",
    calculus: 58,
    programming: 89,
    Web: 92,
    getAvg() {
        let avg = (this.calculus, this.programming, this.Web) / 3;
        console.log(`${this.name} has got avg marks= ${avg}`);
        
    }
};