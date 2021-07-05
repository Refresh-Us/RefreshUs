const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
 movieName: String,
 genre: String,
 createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Movie',movieSchema);