const express = require('express')
const router = express.Router()
const userController=require('../controllers/user')
const {ensureAuth , ensureGuest} = require('../middleware/auth')


//Login page
router.get('/',ensureGuest , (req,res) => {
    res.render('login')
})

//@desc Login page
router.get('/dashboard', userController.dashboard)

module.exports = router