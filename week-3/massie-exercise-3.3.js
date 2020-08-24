const header = require("../Massie-header");
    console.log(header.display("Sarah", "Massie", "Exercise 3.3"));

/*
============================================
; Title:  massie-exercise-3.3.js
; Author: Professor Krasso
; Date:   24 August 2020
; Modified by: Sarah Massie
; Description: Learning Singleton Design
;===========================================
*/

// start program

var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }

    return { 
        getInstance: function() {
            if (!instance) {
            instance = createInstance();
            }
            return instance;
    }
}
})();

function databaseSingletonTest() {
    var witchcraft = DatabaseSingleton.getInstance();
    var catholicism = DatabaseSingleton.getInstance();

    console.log("Same database instance? " + (witchcraft === catholicism));
}

databaseSingletonTest();

// end program