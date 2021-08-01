const express = require("express")
const dotenv = require("dotenv")
const session = require("express-session")
const exphbs = require("express-handlebars")
const passport = require("passport")
const hbs = require("hbs")
const path = require("path")
// const fetch = require('node-fetch');
const MongoStore = require("connect-mongo")
const connectDB = require("./src/helpers/db")
const userRouter = require("./src/routers/user")
const adminRouter = require("./src/routers/admin")

dotenv.config({ path: "./config/config.env" })
require("./src/helpers/passport")(passport)

connectDB()

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const { stripTags, truncate } = require("./src/helpers/hbs")

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
app.use(express.static(path.join(__dirname, "public")))

//Setting Routes
app.use(userRouter)
app.use(adminRouter)
app.use("/auth", require("./src/routers/auth"))
app.use("/", require("./src/routers/dashboard"))
app.use("/", require("./src/routers/suggestion"))

app.listen(process.env.PORT, () => {
    console.log(`Server is running`)
})
