var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
  name: String,
  genre: String,
  date: String
});

module.exports = mongoose.model('moviedetails', movieSchema);
