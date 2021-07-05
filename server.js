const express = require("express");
const dotenv = require('dotenv');
const session = require('express-session')
const passport = require('passport')
const hbs = require('hbs');
const path = require('path');

const app = express();
dotenv.config({path: './config/config.env'})
require('./config/passport')(passport)


// app.use(express.static(path.join(__dirname,'views')))

app.set("view engine",".hbs")

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use('/',require('./routers/login'))
app.use('/auth',require('./routers/auth'));
app.listen(process.env.PORT, () => {
  console.log(`Server is running`);
});
