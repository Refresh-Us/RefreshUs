const express = require('express')
const router = express.Router()
const {ensureAuth , ensureGuest} = require('../middleware/auth')


//Login page
router.get('/',ensureGuest , (req,res) => {
    res.send("Login page")
})

//@desc Login page
router.get('/dashboard', async (req,res) => {
    res.send('Dashboard')
})

module.exports = router