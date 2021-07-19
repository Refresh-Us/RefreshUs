const express = require('express');
const Game=require('../models/game')

exports.display = async (req,res)=>{

    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => {
      delete queryObj[el];
    });
    console.log("quesryobj"+queryObj)
    const search=queryObj
    const sort=req.query.sort
    console.log('This is search '+ search.gameName)
    console.log(sort)
    var result = search.gameName
        // const games=await game.find(search)
        // .sort({duration:'asc'}).lean()
        let query;
        if (!(search.gameName === undefined)) {
            query=Game.find({"gameName": new RegExp("^"+result, 'i')})
        }
        else{
        query = Game.find(queryObj)
        }

        if(req.query.sort){
            query=query.sort(req.query.sort)
        }

        const games=await query.lean()
        console.log("Succesful Request")
        console.log(req.query)

        console.log(req.user.email)
        let email=req.user.email
        let favGame=req.user.favGame
        let i;
        for( i=0;i<games.length;i++){

            Object.assign(games[i], {email:email});
        }
        for( i=0;i<games.length;i++){

            Object.assign(games[i], {favGame:favGame});
        }
        
        // const userId=req.user._id.toString
        // console.log(games);
        res.render('game-p',{
            // email: req.user.email,
            // userId: req.user._id,
            title:"Games",
            games:games, 
            name: req.user.firstName,
            style:"movie-page.css",
        })
}

exports.all=async (req,res)=>{

    try {
        const user=req.user

        const games=await Game.find()

        res.status(200).json({
            user,games
        })

    } catch (error) {
        res.status(500).send(error)
    }


} 

exports.searched=async (req,res)=>{
    console.log("games Searching route")
    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => {
      delete queryObj[el];
    });
    console.log("quesryobj"+queryObj)
    const search=queryObj
    const sort=req.query.sort
    console.log('This is search '+ search.gameName)
    console.log(sort)
    var result = search.gameName
        // const games=await game.find(search)
        // .sort({duration:'asc'}).lean()
        let query;
        if (!(search.gameName === undefined)) {
            query=Game.find({"gameName": new RegExp("^"+result, 'i')})
        }
        else{
        query = Game.find(queryObj).sort({createdAt:1 })
        }

        if(req.query.sort){
            if(req.query.sort==='-rating'){
                console.log('this req.sort'+req.query.sort)
                query=Game.find().sort({rating:-1})

            }else{
                query=Game.find({genre:req.query.sort})
            }
        }

        const games=await query.lean()
        console.log("Succesful Request")
        console.log(req.query)

        console.log(req.user.email)
        let email=req.user.email
        let favGame=req.user.favGame
        let i;
        for( i=0;i<games.length;i++){

            Object.assign(games[i], {email:email});
        }
        for( i=0;i<games.length;i++){

            Object.assign(games[i], {favGame:favGame});
        }
    
    
    res.render('searchg',{
        // email: req.user.email,
        // userId: req.user._id,
       
        games:games, 
        // name: req.user.firstName,
        // style:"game-page.css",
    })

}


