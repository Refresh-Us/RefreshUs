const express = require('express');
const Movie=require('../models/movie')

exports.display = async (req,res)=>{

    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => {
      delete queryObj[el];
    });
    const search=queryObj
    const sort=req.query.sort
    console.log(search)
    console.log(sort)
        // const movies=await Movie.find(search)
        // .sort({duration:'asc'}).lean()
        console.log(queryObj)
        let query=Movie.find(queryObj)

        if(req.query.sort){
            query=query.sort(req.query.sort)
        }

        const movies=await query.lean()
        console.log("Succesful Request")
        console.log(req.query)

        console.log(req.user.email)
        let email=req.user.email
        for(let i=0;i<movies.length;i++){

            Object.assign(movies[i], {email:email});
        }
        
        console.log(movies);
        // const userId=req.user._id.toString
        res.render('movie-p',{
            // email: req.user.email,
            // userId: req.user._id,
            title:"Movies",
            movies:movies, 
            style:"movie-page.css",           
        })
}


