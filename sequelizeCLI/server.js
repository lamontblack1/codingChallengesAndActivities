const express = require('express')
const db = require("./models");


const app = express()

app.get('/create-user', function (req, res) {
    db.User.create({
        name: "lamont",
        password: "pass"
    }).then(function (result) {
        res.end()
    })
})

db.sequelize.sync().then(function () {
   app.listen(3000) 
});
