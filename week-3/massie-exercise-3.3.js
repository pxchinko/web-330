var header = require("../Massie-header");
    console.log(header.display("Sarah", "Massie", "Exercise 3.3"));

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