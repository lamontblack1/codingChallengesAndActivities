module.exports = function(sequelize, DataTypes) {
  // Add code here to create a Post model
  // This model needs a title, a body, and a category
  // Don't forget to 'return' the post after defining

  const Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING(140),
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    } ,
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "Personal"
    } 
  });

  return Post;
};
