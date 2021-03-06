
let inquirer = require("inquirer");

// constructor function used to create programmer objects
function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function () {
        let rnd = Math.random();
        if (rnd > .5) {
            if (this.offense < 10) {this.offense++}
        } else {
            if (this.defense < 10) {this.defense++}
        }
    };
    this.badGame = function () {
        let rnd = Math.random();
        if (rnd > .5) {
            if (this.offense > 1) {this.offense--}
        } else {
            if (this.defense > 1) {this.defense--}
        }
    }
    this.printStats = function () {
        console.log("Name: " + this.name)
        console.log("Position: " + this.position)
        console.log("Offense: " + this.offense)
        console.log("Defense: " + this.defense)
        
    };
};
// variable we will use to count how many times our questions have been asked
let count = 0;
let playerArray = [];
let subArray = [];
let score = 0
let playCount = 0

let askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 3) {
    console.log("NEW PLAYER");
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the letiable answers inside of the .then statement
      if (count === 0) {
        console.log("Enter the information for your sub:");
      } else {
          console.log("Enter the information for one of your starters:");
      }
    inquirer.prompt([
      {
        name: "name",
        message: "What is the player's name?"
      }, {
        name: "position",
        message: "What is the player's position?"
      }, {
        name: "offense",
        message: "How good is the player on offense (1-10)?"
      }, {
        name: "defense",
        message: "How good is the player on defense (1-10)?"
      }
    ]).then(function(answers) {
      // initializes the letiable newPlayer to be a programmer object which will
      // take in all of the user's answers to the questions above
        let newPlayer = new Player(
            answers.name,
            answers.position,
            parseInt(answers.offense),
            parseInt(answers.defense)
        );
      // pushes newPlayer object into our array
        if (count === 0) {
             subArray.push(newPlayer)
        } else {
            playerArray.push(newPlayer);
        }
      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
  }
  else {
    for (let x = 0; x < playerArray.length; x++) {
      playerArray[x].printStats();
      }
      subArray[0].printStats()
      playGame()
  }
};

// call askQuestion to run our code
askQuestion();

function playGame() {
    if (playCount < 5) {
        inquirer.prompt([
            {
                name: "answer",
                message: "hit enter to play "
            }
        ]).then(function (answers) {
        let rnd1 = Math.floor(Math.random() * 20);
        let rnd2 = Math.floor(Math.random() * 20);
        let teamOffense = 0
        let teamDefense = 0
        for (let j = 0; j < playerArray.length; j++) {
            const element = playerArray[j];
            teamOffense += element.offense
            teamDefense += element.defense
        };
        if (rnd1 < teamOffense) {
            console.log(`Number rolled: ${rnd1} Team Offense is: ${teamOffense}. +1!!`);
            score++
        };
        if (rnd2 > teamDefense) {
            console.log("Number rolled: " + rnd2 + ", Team Defense: " + teamDefense + ". -1!")
            score--
        };
        console.log("Your score: " + score);

                inquirer.prompt([
                    {
                        name: "answer",
                        message: "Would you like to substitute in a sub player? (y/n) "
                    }
                ]).then(function (answers) {
                    if (answers.answer = "y") {
                        subArray.push(playerArray[0])
                        playerArray.shift()
                        playerArray.push(subArray[0])
                        subArray.shift()
                    }
                });
    
        if (score > 0) {
            for (let i = 0; i < playerArray.length; i++) {
                const element = playerArray[i];
                element.goodGame;
            };
            subArray[0].goodGame()
        } else if (score < 0) {
            for (let i = 0; i < playerArray.length; i++) {
                const element = playerArray[i];
                element.badGame;
            };
            subArray[0].badGame
        };
            console.log("Team score: " + score)
            playCount++
            

        for (let x = 0; x < playerArray.length; x++) {
        playerArray[x].printStats();
        };
        subArray[0].printStats()
            
             inquirer.prompt([
                {
                    name: "answer",
                    message: "Would you like play again? (y/n) "
                }
            ]).then(function (answers) {
                if (answers.answer = "y") {
                    score = 0
                    playGame()
                }
            });
            
        });


        
    }
    
}

