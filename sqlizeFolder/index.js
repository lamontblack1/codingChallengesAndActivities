const Sequelize = require("sequelize");

// started a connection to database
//will go in config folder
const sequelize = new Sequelize('sequelize_this', 'root', 'passphrase', {
  host: 'localhost',
  dialect: 'mysql'
});

// grab connection and create a table
//define a model for our table
//will go in folder called models
const User = sequelize.define("User", {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
});

User.sync();

//sequelize query
//this will go in the controller
User.create({
    name: "lamont",
    age: 47
}).then(function (result) {
    console.log(result)
});
