const express = require('express')
const router = express.Router()
const {ensureAuth , ensureGuest} = require('../middleware/auth')


//Login page
router.get('/',ensureGuest , (req,res) => {
    res.render('login',{
        layout: 'login'
    })
})

//@desc Login page
router.get('/dashboard', ensureAuth , async (req,res) => {
    
    try{
        res.render('dashboard',{
            name: req.user.displayName,
            photo: req.user.image
        })
    }
    catch(err){
        console.error(err)
        // res.render('/500')
    }
})

module.exports = router