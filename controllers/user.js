const Movie=require('../models/Movie')
const Game=require('../models/Game')
const Webseries=require('../models/Web-series')
const express = require('express');

exports.dashboard=async(req,res)=>{

    try {
        console.log(req.user.googleId);
        const games=await Game.find().limit(6).lean()
        const movies=await Movie.find().limit(6).lean()
        const webseries=await Webseries.find().limit(6).lean()
        res.render('home-main',{
            name: req.user.firstName,
            photo: req.user.image,
            title:"Dashboard",
            movies:movies,
            games:games,
            webseries:webseries
            
        })
        // res.status(200).json({
        //     message:"Success",
        //     games, 
        //     movies,
        //     webseries
        // })
        // res.render('login')
        
    } catch (error) {
        res.status(500).send(error)
    }
   
}
// exports.home=async (req,res) => {
    
//     try{
        
//     }
//     catch(err){
//         console.error(err)
//         // res.render('/500')
//     }
// }

exports.login=(req,res) => {
    res.render('login',{
        layout:'login',
        title:"Login",
        style:"style.css"
    })
}

exports.team=(req,res) => {
    res.render('ourteam')
}
exports.faq=(req,res) => {
    res.render('faq',{
        
        name: req.user.displayName,
        
        
    })
}

exports.landingPage=(req,res) => {

    res.render('landing',{title:"Welcome",
style:"landingpage.css"})
}


exports.profilePage= async (req,res) => {
var movies = [];
var games = [];
var webseries = [];
     favM = req.user.favMovie;
     favG = req.user.favGame;
     favW = req.user.favWebseries;
    for (var i = 0; i < favM.length; i++) {
        var item =await Movie.findById({_id:favM[i]}).lean()
        movies.push(item)
    }
    for (var i = 0; i < favG.length; i++) {
        var item =await Game.findById({_id:favG[i]}).lean()
        games.push(item)
    }
    for (var i = 0; i < favW.length; i++) {
        var item =await Webseries.findById({_id:favW[i]}).lean()
        webseries.push(item)
    }
    res.render('profile-main',{
        title:"Profile",
        name: req.user.firstName,
        photo: req.user.image,
        time: req.user.createdAt,
        movies: movies,
        games: games,
        webseries:webseries
    })
}

exports.favRemove=async (req,res)=>{

    console.log("Inside favRemove");

    //Removal OF MOvie
    const id=req.query.id
    const user=req.user
    const movie=await Movie.findById(id)
    console.log(movie);
    await user.removeFav(id)

    var movies = [];
     fav = req.user.favMovie;
     console.log(fav)
    for (var i = 0; i < fav.length; i++) {
        var item =await Movie.findById({_id:fav[i]}).lean()
        console.log(item)
        movies.push(item)
    }

   
    res.render('favMovie',{
        // title:"Profile",
        // name: req.user.displayName,
        // photo: req.user.image,
        // time: req.user.createdAt,
        movies: movies,
    })
}
exports.favGameRemove=async (req,res)=>{

    console.log("Inside favRemove");

    //Removal OF MOvie
    const id=req.query.id
    const user=req.user
    const game=await Game.findById(id)
    console.log(game);
    await user.removeGameFav(id)

    var games = [];
     fav = req.user.favGame;
     console.log(fav)
    for (var i = 0; i < fav.length; i++) {
        var item =await Game.findById({_id:fav[i]}).lean()
        console.log(item)
        games.push(item)
    }

   
    res.render('favGame',{
        // title:"Profile",
        // name: req.user.displayName,
        // photo: req.user.image,
        // time: req.user.createdAt,
        games: games,
    })
}
exports.favWebRemove=async (req,res)=>{

    console.log("Inside favRemoveWebseries");

    //Removal OF MOvie
    const id=req.query.id
    const user=req.user
    const webseries=await Webseries.findById(id)
    console.log(webseries);
    await user.removeWebFav(id)

    var webSeries = [];
     fav = req.user.favWebseries;
     console.log(fav)
    for (var i = 0; i < fav.length; i++) {
        var item =await Webseries.findById({_id:fav[i]}).lean()
        console.log(item)
        webSeries.push(item)
    }

   
    res.render('favWeb',{
        // title:"Profile",
        // name: req.user.displayName,
        // photo: req.user.image,
        // time: req.user.createdAt,
        webseries: webSeries,
    })
}
