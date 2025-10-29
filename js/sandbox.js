class Car {
    constructor(make, model, year, gas = false) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.gas = gas; 
    }
    fillUp () {
            this.gas = true;
        }
}