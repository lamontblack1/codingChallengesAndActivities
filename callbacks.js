var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
let writeAndRun = function (str, func) {
    console.log(str);
    func()
}
// Write a function that runs a function argument if
// its other argument is truthy.
let runifTrue = function(bool, func) {
    if (bool == true) {func()}
}
// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
let returnFunc = function (funcAdd, someString) {
    let returnFunc = funcAdd(someString)
    return returnFunc
}
// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?
fs.writeFile("log.txt", "This is just a text message", function(err) {

  if (err) {
    return console.log(err);
  }

  console.log("log.txt was updated");

});