let inquirer = require("inquirer");
let mysql = require("mysql");

let dbName = "ice_creamDB"
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "passphrase",
  database: dbName
});

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
//   afterConnection();
// });

function afterConnection() {
    //call CRUD functions here
        //   connection.query("SELECT * FROM songs", function(err, res) {
        //     if (err) throw err;
        //     console.log(res);
        //   });
    
    connection.end();
};

function startPrompts() {
     inquirer.prompt([
       {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: ["POST AN ITEM", "BID ON AN ITEM"]
  }
    ]).then(function(answers) {
      // initializes the variable newProgrammer to be a programmer object which will
      // take in all of the user's answers to the questions above
        // count++;
        console.log(answers.action)
      // run the askquestion function again so as to either end the loop or ask the questions again
        // startPrompts();
    });
};

startPrompts();