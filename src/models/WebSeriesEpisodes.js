const mongoose = require("mongoose");

const webEpisodesSchema = new mongoose.Schema({
    seasonTitle: String,
    duration: String,
    description: String,
    coverImage: String,
    titleImage: String,
    webSeriesSeasonID:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'WebseriesSeasons'
    },
    gdURL: String,
    gDrivePublicURL: String,
    megaDownloadURL: String,
    megaEmail: String,
    gmail: String,
})

module.exports = mongoose.model("WebseriesEpisodes", webEpisodesSchema)
