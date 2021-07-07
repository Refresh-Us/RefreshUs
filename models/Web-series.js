const mongoose = require('mongoose')

const webSchema = new mongoose.Schema({
 movieName: String,
 genre: String,
 createdAt: {
    type: Date,
    default: Date.now,
  },
  link:String,
  duration:String,
  description:String
})

module.exports = mongoose.model('Webseries',webSchema);