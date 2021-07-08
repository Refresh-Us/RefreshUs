const express = require("express");
const dotenv = require('dotenv');
const session = require('express-session')
const exphbs = require('express-handlebars')
const passport = require('passport')
const hbs = require('hbs');
const path = require('path');
const MongoStore = require('connect-mongo');
const connectDB = require('./config/db')


dotenv.config({path: './config/config.env'})
require('./config/passport')(passport)

connectDB()

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json())



app.engine('.hbs',exphbs({
  defaultLayout: 'login',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');



app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: 'mongodb+srv://Shivansh:Joshi@cluster0.efzmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'})
  })
)

app.use(passport.initialize())
app.use(passport.session())

// app.use(userRouter)
// app.use(adminRouter)

app.use(express.static(path.join(__dirname,'public')))


app.use('/',require('./routers/user'))
app.use('/auth',require('./routers/auth'));
app.listen(process.env.PORT, () => {
  console.log(`Server is running`);
});
