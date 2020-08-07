var header = require('../Massie-header.js');
  console.log(header.display("Sarah", "Massie", "Exercise 1.4"));

// start program

function Car(model) { this.model = model; };
Car.prototype.start = function() { console.log("Car added to the racetrack!") };

function Truck(model, year) { this.model = model; this.year = year; };
Truck.prototype.start = function() { console.log("Truck added to the racetrack!") };

function Jeep(model, year, color) { this.model = model; this.year = year; this.color = color; };
Jeep.prototype.start = function() { console.log("Jeep added to the racetrack!") };

var racetrack = [];

function driveIt(vehicle) {
    vehicle.start();
    racetrack.push(vehicle);
};

var beetle = new Car("Beetle");
var f150 = new Truck("F150", "2020");
var wrangler = new Jeep("Wrangler", "1998", "green");

console.log("")

driveIt(beetle);
driveIt(f150);
driveIt(wrangler);

console.log("\n-- The following vehicles have been added to the racetrack --");
for (var k = 0; k < racetrack.length; k++) {
  console.log(racetrack[k].constructor.name + ": " + racetrack[k].model);
}

// end program