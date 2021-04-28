const Sequelize = require("sequelize");
const db = require("../db");

Movie = db.define("movie", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  platform: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  year: {
    type: Sequelize.INTEGER,
  },
  rating: {
    type: Sequelize.STRING,
  },
  runtime: {
    type: Sequelize.INTEGER,
  },
  seen: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Movie;
