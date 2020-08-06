const header = require('../Massie-header.js');
  console.log(header.display("Sarah", "Massie", "Exercise 1.3"));
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>
*/

// start program

function Cellphone(manufacturer, model, color, price) {
  this.manufacturer = manufacturer;
  this.model = model;   
  this.color = color;
  this.price = price;
  // get price function
  this.getPrice = function() {
    return this.price;
  };
  // get model function
  this.getModel = function() {
    return this.model;
  };
  // get details function
  this.getDetails = function() {
    return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() + "\nColor: " + this.color + "\nPrice: " + this.getPrice();
  };
};
var cellphone = new Cellphone("Motorola", "RAZR V3m", "Pink", "$50");    
console.log("\n" + cellphone.getDetails())

// end program