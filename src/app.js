const express = require("express")
const dotenv = require("dotenv")
const session = require("express-session")
const exphbs = require("express-handlebars")
const passport = require("passport")
const hbs = require("hbs")
const path = require("path")
const MongoStore = require("connect-mongo")
const connectDB = require("./helpers/db")
const userRouter = require("./routers/user")
const adminRouter = require("./routers/admin")
require("./helpers/passport")(passport)

const getApp = async () => {
    await connectDB()

    const app = express()

    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())

    const { stripTags, truncate } = require("./helpers/hbs")

    app.engine(
        ".hbs",
        exphbs({
            defaultLayout: "login",
            extname: ".hbs",
            helpers: {
                stripTags,
                truncate,
            },
        })
    )
    app.set("views", path.join(__dirname, "/views"))
    app.set("view engine", ".hbs")

    app.use(
        session({
            secret: "keyboard cat",
            resave: false,
            saveUninitialized: false,
            store: MongoStore.create({
                mongoUrl:
                    "mongodb+srv://Shivansh:Joshi@cluster0.efzmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            }),
        })
    )

    app.use(passport.initialize())
    app.use(passport.session())

    //Using Static Files
    app.use(express.static(path.join(__dirname, "../public")))

    //Setting Routes
    app.use(userRouter)
    app.use(adminRouter)
    app.use("/auth", require("./routers/auth"))
    app.use("/", require("./routers/dashboard"))
    app.use("/", require("./routers/suggestion"))

    return app
}

module.exports = { getApp }
