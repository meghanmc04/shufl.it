const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/shufl.it", {
  logging: false,
});

module.exports = db;
