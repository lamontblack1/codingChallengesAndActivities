module.exports = function (sequelize, Sequelize) {
    const Todo = sequelize.define("Todo", {
        text: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1,140]
            }
        } ,
        complete: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        } 
    });

    return Todo
};