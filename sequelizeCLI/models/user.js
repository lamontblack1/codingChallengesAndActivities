module.exports =  function(sequelize, Sequelize) {
    const User = sequelize.define("User", {
        name: Sequelize.STRING,
        password: Sequelize.STRING
    });

    return User
 }
