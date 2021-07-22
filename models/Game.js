const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
 gameName: String,
 genre: String,
 createdAt: {
    type: Date,
    default: Date.now,
  },
  link:String,
  rating: String,
  description:String,
  coverImage:String,
  titleImage:String,
  trailer: String

})

module.exports = mongoose.model('Game',gameSchema);