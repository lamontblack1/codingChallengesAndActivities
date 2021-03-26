// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for
let TV = require("./tv");

let nodeArgs = process.argv
let search = nodeArgs[2].toLowerCase()
let term = nodeArgs[3]
if (nodeArgs.length > 4) {
    for (let j = 4; j < nodeArgs.length; j++) {
        term = term + "+" + nodeArgs[j]
    }
}
// let term = process.argv.slice(3).join(" ")
//defaults
if (!search) {
    search = "show";
    term = "star+trek";
}

if (search === "show") {
    console.log("looking for a tv show")
    if (!term) { term = "star+trek" }
    //call tv object
    let tv = new TV
    tv.findShow(term)
} else if (search === "actor") {
    console.log("looking for an actor")
    if (!term) { term = "christopher+walken" }
    //call actor object
    let tv = new TV;
    tv.findActor(term)
} else {
    console.log("command not recognized")
};

console.log(search + "  " + term)
