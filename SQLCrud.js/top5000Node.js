var mysql = require("mysql");
let inquirer = require("inquirer");

let dbName = "top_songsdb";

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

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  startPrompts();
});

function startPrompts() {
   
    inquirer.prompt([
       {
    type: "list",
    name: "action",
    message: "What would you like to search for?",
    choices: ["artist", "song", "artist multiple appearances", "range of positions"]
  }
    ]).then(function(answers) {
     ;
        switch (answers.action) {
            case "artist":
            getArtist()
                break;
            
            case "song":
            getSong()
                break;
            
            case "artist multiple appearances":
            getMultipleAppearances()
                break;
            
            case "range of positions":
            getRange()
                break;
        }
    });
    
};

function getArtist() {
    inquirer.prompt([
       {
    type: "input",
    name: "artist",
    message: "Enter the artist name or first or last name",
  }
    ]).then(function(answers) {
      // initializes the variable newProgrammer to be a programmer object which will
      // take in all of the user's answers to the questions above
        // count++;
        readLike("top5000", "artist", answers.artist)
      // run the askquestion function again so as to either end the loop or ask the questions again
    });
};

function getSong() {
    inquirer.prompt([
       {
    type: "input",
    name: "song",
    message: "Enter part or all of the song title",
  }
    ]).then(function(answers) {
      // initializes the variable newProgrammer to be a programmer object which will
      // take in all of the user's answers to the questions above
        // count++;
        readLike("top5000", "song_title", answers.song)
      // run the askquestion function again so as to either end the loop or ask the questions again
    });
};

function getMultipleAppearances() {
    connection.query(
            "SELECT COUNT(position), artist FROM top5000 GROUP BY artist HAVING COUNT(Position) > 2 ORDER BY COUNT(Position) DESC",
            function (err, res) {
                ;

                if (err) throw err;
                console.log("How many times?  | Artist   ");
                console.log("---------------------------------")
                for (let i = 0; i < res.length; i++) {
                    const element = res[i];
                    console.log(element['COUNT(position)'] + "  |  " + element.artist)
                }
                startPrompts()
             });   
};

function getRange() {
     inquirer.prompt([
        {
            type: "input",
            name: "high",
            message: "Enter the highest position:",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        },
        {
            type: "input",
            name: "low",
            message: "Enter the lowest position:",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
    ]).then(function(answers) {
        connection.query(
            "SELECT * FROM top5000 WHERE position BETWEEN " + answers.low +" AND " + answers.high,
            function (err, res) {

                if (err) throw err;
                // Log all results of the SELECT statement
                // console.log(res);
                printToConsole(res);
                startPrompts()
             });   

    });
};

function readLike(tableName, field, criteria) {
        connection.query(
            "SELECT * FROM " + tableName + " WHERE " + field +" LIKE '%" + criteria + "%'",
            function (err, res) {

                if (err) throw err;
                // Log all results of the SELECT statement
                // console.log(res);
                printToConsole(res);
                startPrompts()
             });   
   
};

function printToConsole(result) {
        console.log("Position  | Artist       |  song              |  year  |  world  |  US  |  UK  |  Eur  |  Album Sale");
        console.log("--------------------------------------------------------------------------------------------------------")
        for (let i = 0; i < result.length; i++) {
            const element = result[i];
            console.log(element.position + "  |  " + element.artist + "  |  " + element.song_title + "  |  " + element.year + "  |  " + element.world_popularity + "  |  " + element.us_popularity + "  |  " + element.uk_popularity + "  |  " + element.eur_popularity + "  |  " + element.album_sale_popularity)
        }
}