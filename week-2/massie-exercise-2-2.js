var header = require('../Massie-header.js');
  console.log(header.display("Sarah", "Massie", "Exercise 2.2"));

// start program

var person = {
    getAge: function() {
        return this.age;
    }
}

var woman = Object.create(person, {
    "age": {
        "value": 24
    },
    "fullName": {
        "value": "Sarah Massie"
    }
});

woman.getAge();

console.log("\nThe person's full name is " + woman.fullName + ".");
console.log("The person's age is " + woman.getAge() + ".");

// end program