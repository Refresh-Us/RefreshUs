const express = require('express')
const router = express.Router()
const {ensureAuth , ensureGuest} = require('../middleware/auth')
// const dashboard =require('../controllers/user')
const {dashboard, login,landingPage,profilePage}=require('../controllers/user.js')


//Landing Page
router.get('/',ensureGuest,landingPage)

//Login page
router.get('/login',ensureGuest,login)

//DashBoard
router.get('/dashboard', ensureAuth ,dashboard)

router.get('/profile',ensureAuth,profilePage)

module.exports = router