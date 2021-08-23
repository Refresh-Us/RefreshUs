const mongoose = require("mongoose")

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

webSchema.virtual('seasons',{
    ref: "WebseriesSeasons",
	localField: "_id",
	foreignField: "webSeriesID",
})

module.exports = mongoose.model("Webseries", webSchema)
