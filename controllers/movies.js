const express = require('express');
const Movie=require('../models/movie')

exports.display = async (req,res)=>{
        const movies=await Movie.find(req.query).lean()
        console.log(req.query)
        res.render('movie-page',{
            // name: req.user.displayName,
            // photo: req.user.image,
            title:"Movies",
            movies:movies,            
        })
}


