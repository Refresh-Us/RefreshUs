const express = require('express')
const router = express.Router()
const {ensureAuth , ensureGuest} = require('../middleware/auth')
// const dashboard =require('../controllers/user')
const {dashboard, login,landingPage,profilePage}=require('../controllers/user.js')
const Movie = require('../models/movie')
const User = require('../models/User')
const mongoose = require('mongoose');


//Landing Page
router.get('/getAll',async(req,res)=>{
    const users=await User.find().populate('favMovie')
    res.json({
        message:"Success",
        users
    })


})

router.get('/',ensureGuest,landingPage)

//Login page
router.get('/login',ensureGuest,login)

//DashBoard
router.get('/dashboard', ensureAuth ,dashboard)

router.get('/profile',ensureAuth,profilePage)

router.get('/movies/like', ensureAuth,async(req,res)=>{
    console.log("incoming getfav request");
    const id=req.query.id
    const Usermail=req.query._id

    // var Usid = mongoose.Types.ObjectId(userId);
    // const userId=req.user._id
    console.log(id);
    console.log(Usermail);

    const movie=await Movie.findById({_id:id})
  
    const user=await User.findOne({email:Usermail})

    await user.assign(id)

    const movies=await Movie.find().lean()

    res.render('movie-p',{
        // name: req.user.displayName,
        userId: req.user.googleId,
        title:"Movies",
        movies:movies, 
        style:"movie-page.css",           
    })

})

module.exports = router