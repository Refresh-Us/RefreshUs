const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
 gameName: String,
 genre: String,
 createdAt: {
    type: Date,
    default: Date.now,
  },
  link:String,
  rating: Number,
  description:String,
  coverImage:String,
  titleImage:String

})

module.exports = mongoose.model('Game',gameSchema);