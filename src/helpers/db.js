const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        return await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB
