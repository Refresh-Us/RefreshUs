const Movie=require('../models/movie')
const Game=require('../models/game')
const Webseries=require('../models/web-series')
const express = require('express');

exports.dashboard=async(req,res)=>{

    try {
        // const games=await Game.find()
        // const movies=await Movie.find()
        // const webseries=await Webseries.find()
        // res.status(200).json({
        //     message:"Success",
        //     games, 
        //     movies,
        //     webseries
        // })
        res.render('login')
        
    } catch (error) {
        res.status(500).send(error)
    }
   
}
