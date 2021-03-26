let axios = require('axios');
let fs = require('fs');
const { url } = require('inspector');

let TV = function () {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    axios.get(URL).then(
      function (response) {
        let info = response.data
        let str = "Show: " + info.name + "\n \n" +
          "Genre(s): " + info.genres + "\n \n" +
          "Rating: " + info.rating.average + "\n \n" +
          "Network: " + info.network.name + "\n \n" +
          "Summary: " + info.summary + "\n" +
          "________________________________________________________ \n"
     
        fs.appendFile("log.txt", str, function(err) {
        // If an error was experienced we will log it.
        if (err) {
          console.log(err);
        }
        });

      console.log(str)
    })
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  this.findActor = function(actor) {
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;

    // Add code to search the TVMaze API for the given actor
    // The API will return an array containing multiple actors, just grab the first result
    // Append the actor's name, birthday, gender, country, and URL to the `log.txt` file
    // Print this information to the console
    var divider = "\n------------------------------------------------------------\n\n";

    axios.get(URL).then(
      function (response) {
        let info = response.data[0]
        
        let actorData = [
          "Actor Name: " + info.person.name,
          "Actor Birthday: " + info.person.birthday,
          "Actor Gender: " + info.person.gender,
          "Actor Country: " + info.person.country.name,
          "URL: " + info.person.url
        ].join("\n\n");
     
        fs.appendFile("log.txt", actorData + divider, function(err) {
        // If an error was experienced we will log it.
        if (err) {
          console.log(err);
        }
        console.log(actorData)
        });

    })
  };
};

module.exports = TV;
 