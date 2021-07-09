const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
 gameName: String,
 genre: String,
 createdAt: {
    type: Date,
    default: Date.now,
  },
  link:String,
  
  description:String,
  coverImage:String
})

module.exports = mongoose.model('Game',gameSchema);