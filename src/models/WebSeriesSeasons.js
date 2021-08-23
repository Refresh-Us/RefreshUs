const mongoose = require("mongoose");

const webSeasonSchema = new mongoose.Schema({
    seasonTitle: String,
    duration: String,
    description: String,
    coverImage: String,
    titleImage: String,
    webSeriesID:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Webseries'
    }
})

webSeasonSchema.virtual('episodes',{
    ref: "WebseriesEpisodes",
	localField: "_id",
	foreignField: "webSeriesSeasonID",
})

module.exports = mongoose.model("WebseriesSeasons", webSeasonSchema)
