function Toy(manufacturer, model, year, price) {
    this.manufacturer = manufacturer;
    this.model = model;   
    this.year = year;
    this.price = price;
};

Toy.prototype.getDetails = function() {
    return this.manufacturer + " made " + this.model + " in the year " + this.year + ".";
};

var polly = new Toy("Mattel", "Polly Pocket", 1989, "$25");
var barbie = new Toy("Mattel", "Barbie", 1959, "$20");

console.log(polly.getDetails());
console.log(barbie.getDetails());