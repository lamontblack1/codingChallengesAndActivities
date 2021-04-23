var orm = require("./config/orm.js");

function callback(res) {
    console.log("callback logs: " + res);
};

var data = orm.selectWhere("parties", "party_type", "grown-up", callback);

console.log("logged from server.js: " + data); // Data is undefined. Why?
