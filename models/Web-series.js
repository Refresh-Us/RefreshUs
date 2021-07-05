const mongoose = require('mongoose')

const webSchema = new mongoose.Schema({
 movieName: String,
 genre: String,
 createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Webseries',webSchema);