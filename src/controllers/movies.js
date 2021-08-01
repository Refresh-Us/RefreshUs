const express = require("express")
const Movie = require("../models/movie")

exports.display = async (req, res) => {
    const queryObj = { ...req.query }
    const excludedFields = ["page", "sort", "limit", "fields"]
    excludedFields.forEach((el) => {
        delete queryObj[el]
    })
    console.log("quesryobj" + queryObj)
    const search = queryObj
    const sort = req.query.sort
    console.log("This is search " + search.movieName)
    console.log(sort)
    var result = search.movieName
    // const movies=await Movie.find(search)
    // .sort({duration:'asc'}).lean()
    let query
    if (!(search.movieName === undefined)) {
        query = Movie.find({ movieName: new RegExp("^" + result, "i") })
    } else {
        query = Movie.find(queryObj)
    }

    if (req.query.sort) {
        query = query.sort(req.query.sort)
    }

    const movies = await query.lean()
    console.log("Succesful Request")
    console.log(req.query)

    console.log(req.user.email)
    let email = req.user.email
    let favMovie = req.user.favMovie
    let i
    for (i = 0; i < movies.length; i++) {
        Object.assign(movies[i], { email: email })
    }
    for (i = 0; i < movies.length; i++) {
        Object.assign(movies[i], { favMovie: favMovie })
    }

    // const userId=req.user._id.toString
    console.log(movies)
    res.render("movie-p", {
        // email: req.user.email,
        // userId: req.user._id,
        title: "Movies",
        movies: movies,
        name: req.user.firstName,
        style: "movie-page.css",
    })
}

exports.all = async (req, res) => {
    try {
        const user = req.user

        const movies = await Movie.find()

        res.status(200).json({
            user,
            movies,
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.searched = async (req, res) => {
    console.log("Movies Searching route")
    const queryObj = { ...req.query }
    const excludedFields = ["page", "sort", "limit", "fields"]
    excludedFields.forEach((el) => {
        delete queryObj[el]
    })
    console.log("quesryobj" + queryObj)
    const search = queryObj
    const sort = req.query.sort
    console.log("This is search " + search.movieName)
    console.log(sort)
    var result = search.movieName
    // const movies=await Movie.find(search)
    // .sort({duration:'asc'}).lean()
    let query
    if (!(search.movieName === undefined)) {
        query = Movie.find({ movieName: new RegExp("^" + result, "i") })
    } else {
        query = Movie.find(queryObj).sort({ createdAt: 1 })
    }

    if (req.query.sort) {
        if (req.query.sort === "-rating") {
            console.log("this req.sort" + req.query.sort)
            // query=query.sort(req.query.sort)
            query = Movie.find().sort({ rating: -1 })
        } else {
            query = Movie.find({ genre: req.query.sort })
        }
    }

    const movies = await query.lean()
    console.log("Succesful Request")
    console.log(req.query)

    console.log(req.user.email)
    let email = req.user.email
    let favMovie = req.user.favMovie
    let i
    for (i = 0; i < movies.length; i++) {
        Object.assign(movies[i], { email: email })
    }
    for (i = 0; i < movies.length; i++) {
        Object.assign(movies[i], { favMovie: favMovie })
    }

    res.render("serch", {
        // email: req.user.email,
        // userId: req.user._id,

        movies: movies,
        // name: req.user.firstName,
        // style:"movie-page.css",
    })
}
