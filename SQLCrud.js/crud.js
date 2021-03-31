var mysql = require("mysql");

let dbName = "ice_creamDB"
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: dbName
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
    //call CRUD functions here
        //   connection.query("SELECT * FROM songs", function(err, res) {
        //     if (err) throw err;
        //     console.log(res);
        //   });
    
    connection.end();
};

   
   
function append(tableName, objCriteria) {
    console.log("Inserting a new row...\n");
    var query = connection.query(
        "INSERT INTO " + tableName + " SET ?",
        // {
        //   flavor: "Rocky Road",
        //   price: 3.0,
        //   quantity: 50
        // },
        objCriteria,
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " rows inserted!\n");
        }
    );
};

function update(tableName, aryCriteria) {
    console.log("Updating ...\n");
    var query = connection.query(
        "UPDATE" + tableName + " SET ? WHERE ?",
        // [
        //     {
        //         quantity: 100
        //     },
        //     {
        //         flavor: "Rocky Road"
        //     }
        // ],
        aryCriteria,
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " rows updated!\n");
        }
    );
};

function delete(tableName, objCriteria) {
  console.log("Deleting all strawberry icecream...\n");
  connection.query(
    "DELETE FROM " + tableName + " WHERE ?",
    // {
    //   flavor: "strawberry"
    // },
      objCriteria,
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " products deleted!\n");
    }
  );
};

function read(tableName, objCriteria) {
    if (objCriteria) {
        connection.query(
            "SELECT * FROM " + tableName " WHERE ?",
            objCriteria,
            function (err, res) {
                if (err) throw err;
                // Log all results of the SELECT statement
                console.log(res);
             });   
    } else {
      console.log("Selecting all products...\n");
      connection.query("SELECT * FROM " + tableName, function(err, res) {
      if (err) throw err;
          // Log all results of the SELECT statement
          console.log(res);
      });    
    }
};