module.exports = function (sequelize, Sequelize) {
    const Todo = sequelize.define("Todo", {
        text: Sequelize.STRING,
        complete: Sequelize.BOOLEAN
    });

    return Todo
};