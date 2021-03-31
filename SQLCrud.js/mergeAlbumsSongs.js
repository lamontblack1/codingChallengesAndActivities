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

let artistName = process.argv[2]
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  runQuery(artistName);
});

function runQuery(artistName) {
    let strQuery = "SELECT topAlbums.year, topAlbums.position, topAlbums.artist, top5000.song_title, topAlbums.album_title " +
        "FROM topAlbums " +
        "INNER JOIN top5000 ON topAlbums.artist = top5000.artist " +
        "AND topAlbums.year = top5000.year " +
        "WHERE topAlbums.artist = '" + artistName +"' " +
        "ORDER BY topAlbums.year DESC"

    connection.query(
        strQuery,
            function (err, res) {
                if (err) throw err;

                // console.log(res);
                let len = res.length
                console.log(len + " matches found!");
                for (let i = 0; i < len; i++) {
                    const element = res[i];
                    console.log("Year: " + element.year + "  ||  Album position: " + element.position +
                    "  ||  Artist: " + element.artist + "  ||  Song: " + element.song_title +
                    "  ||  Album Title: " + element.album_title)
                };
        });
    connection.end()
}