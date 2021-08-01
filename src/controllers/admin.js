const mongoose=require("mongoose")
const Movie=require('../models/movie')
const Game=require('../models/game')
const Webseries=require('../models/web-series')
const express = require('express');


exports.addMovie=async(req,res)=>{
    const movie=new Movie(req.body)
    try {
        await movie.save()
        res.status(201).json({
            message:"Success",
            // movie:movie[0].coverImage
            
        })
        
    } catch (error) {

        res.status(404).send(error)
    }
    
}
exports.addGame=async(req,res)=>{
    const game=new Game(req.body)
    try {
        await game.save()
        res.status(201).json({
            message:"Success",
            game
        })
        
    } catch (error) {

        res.status(404).send(error)
    }
    
}
exports.deleteGame=async(req,res)=>{
    console.log("Heloo form controller")
    const _id=req.params.id
    console.log(_id);

    try {
        const game=await Game.findByIdAndDelete({_id})
        if (!game) {
            res.status(404).send("No game with that id")
          }
       
        res.status(201).json({
            message:"Successfully Deleted Game",
            game:game
        })
        
    } catch (error) {

        res.status(404).send(error)
    }
    
}


exports.addWebseries=async(req,res)=>{
    const webseries=new Webseries(req.body)
    try {
        await webseries.save()
        res.status(201).json({
            message:"Success",
            webseries
        })
        
    } catch (error) {

        res.status(404).send(error)
    }
    
}
exports.deleteWebseries=async(req,res)=>{
    console.log("Heloo form controller")
    const _id=req.params.id
    console.log(_id);

    try {
        const webseries=await Webseries.findByIdAndDelete({_id})
        await webseries.save()
        res.status(201).json({
            message:"Successfully Deleted Movie",
            webseries
        })
        
    } catch (error) {

        res.status(404).send(error)
    }
    
}
exports.deleteMovie=async(req,res)=>{
    console.log("Hello form controller")
    const _id=req.params.id
    console.log(_id);

    try {
        const movie=await Movie.findByIdAndDelete({_id})
        await movie.save()
        res.status(201).json({
            message:"Successfully Deleted Movie",
            movie
        })
        
    } catch (error) {

        res.status(404).send(error)
    }
    
}
