var header = require('../Massie-header.js');
    console.log(header.display("Sarah", "Massie", "Exercise 3.2"))

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

function Oracle(properties) {
    this.username = properties.username || "theoracle";
    this.password = properties.password || "badpassword";
    this.server = properties.server || "localhost:3000";
    this.version = properties.version || 8.1
};

function Informix(properties) {
    this.username = properties.username || "informedix";
    this.password = properties.password || "secretpassword";
    this.server = properties.server || "localhost:1234";
};


function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if (properties.databaseType === "MySql") {
        this.databaseClass = MySql;
    }
    if (properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    }
    if (properties.databaseType === "Informix") 
        { this.databaseClass = Informix; 
    }
    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: 'Oracle',
    username: "default",
    password: "password",
    version: 8.1
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: 'Informix',
    username: "testusername",
    password: "testpassword",
    version: 1.3
});

console.log(oracle);
console.log(informix)

// end program


