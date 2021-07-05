const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
 gameName: String,
 genre: String,
 createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Game',gameSchema);