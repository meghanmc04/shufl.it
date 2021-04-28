const Sequelize = require("sequelize");
const db = require("../db");

const Series = db.define("series", {
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
  seasons: {
    type: Sequelize.INTEGER,
  },
  active: {
    type: Sequelize.BOOLEAN,
  },
  seen: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Series;
