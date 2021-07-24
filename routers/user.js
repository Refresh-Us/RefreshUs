const express = require('express')
const router = express.Router()
const {ensureAuth , ensureGuest} = require('../middleware/auth')
// const dashboard =require('../controllers/user')
const {dashboard, login,landingPage,profilePage,favRemove,searched,favGameRemove,favWebRemove,team,faq}=require('../controllers/user.js')
const Movie = require('../models/Movie')
const Game = require('../models/Game')
const Webseries=require('../models/Web-series')
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

router.get('/profile/remove',ensureAuth,favRemove)

router.get('/profile/remove/game',ensureAuth,favGameRemove)

router.get('/profile/remove/web',ensureAuth,favWebRemove)

router.get('/ourteam',ensureAuth,team)

router.get('/faq',ensureAuth,faq)






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
router.get('/games/like', ensureAuth,async(req,res)=>{
    console.log("incoming getfav request");
    const id=req.query.id
    const Usermail=req.query._id

    // var Usid = mongoose.Types.ObjectId(userId);
    // const userId=req.user._id
    console.log(id);
    console.log(Usermail);

    const game=await Game.findById({_id:id})
  
    const user=await User.findOne({email:Usermail})

    await user.assignGame(id)

    const games=await Game.find().lean()

    res.render('game-p',{
        // name: req.user.displayName,
        userId: req.user.googleId,
        title:"Games",
        games:games, 

        style:"movie-page.css",           
    })

})
router.get('/webseries/like', ensureAuth,async(req,res)=>{
    console.log("incoming getfav request");
    const id=req.query.id
    const Usermail=req.query._id

    // var Usid = mongoose.Types.ObjectId(userId);
    // const userId=req.user._id
    console.log(id);
    console.log(Usermail);

    const webserie=await Webseries.findById({_id:id})
  
    const user=await User.findOne({email:Usermail})

    await user.assignWebseries(id)

    const webseries=await Webseries.find().lean()

    res.render('webseries-p',{
        // name: req.user.displayName,
        userId: req.user.googleId,
        title:"Webseries",
        webseries:webseries, 

        style:"movie-page.css",           
    })

})


module.exports = router