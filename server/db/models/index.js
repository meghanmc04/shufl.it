const Movie = require("./movie");
const Series = require("./series");
const User = require("./user");

User.hasMany(Movie);
Movie.belongsTo(User);

User.hasMany(Series);
Series.belongsTo(User);

module.exports = {
  Movie,
  Series,
  User,
};
