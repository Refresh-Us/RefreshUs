const mongoose = require("mongoose")

// MongoDB model for web-series
const webSchema = new mongoose.Schema({
    webseriesName: String,
    genre: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    link: String,
    duration: String,
    description: String,
    coverImage: String,
    titleImage: String,
    year: String,
    rating: String,
    trailer: String,
})

module.exports = mongoose.model("Webseries", webSchema)
