const express = require("express")
const Webseries = require("../models/web-series")

exports.display = async (req, res) => {
    const queryObj = { ...req.query }
    const excludedFields = ["page", "sort", "limit", "fields"]
    excludedFields.forEach((el) => {
        delete queryObj[el]
    })
    console.log("quesryobj" + queryObj)
    const search = queryObj
    const sort = req.query.sort
    console.log("This is search " + search.webseriesName)
    console.log(sort)
    var result = search.webseriesName
    // const games=await game.find(search)
    // .sort({duration:'asc'}).lean()
    let query
    if (!(search.webseriesName === undefined)) {
        query = Webseries.find({ webseriesName: new RegExp("^" + result, "i") })
    } else {
        query = Webseries.find(queryObj)
    }

    if (req.query.sort) {
        query = query.sort(req.query.sort)
    }

    const webseries = await query.lean()
    console.log("Succesful Request")
    console.log(req.query)

    console.log(req.user.email)
    let email = req.user.email
    let favWebseries = req.user.favWebseries
    let i
    for (i = 0; i < webseries.length; i++) {
        Object.assign(webseries[i], { email: email })
    }
    for (i = 0; i < webseries.length; i++) {
        Object.assign(webseries[i], { favWebseries: favWebseries })
    }

    // const userId=req.user._id.toString
    // console.log(games);
    res.render("webseries-p", {
        // email: req.user.email,
        // userId: req.user._id,
        title: "Web-Series",
        webseries: webseries,
        name: req.user.firstName,
        style: "movie-page.css",
    })
}

exports.all = async (req, res) => {
    try {
        const user = req.user

        const webseries = await Webseries.find()

        res.status(200).json({
            user,
            webseries,
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.searched = async (req, res) => {
    console.log("games Searching route")
    const queryObj = { ...req.query }
    const excludedFields = ["page", "sort", "limit", "fields"]
    excludedFields.forEach((el) => {
        delete queryObj[el]
    })
    console.log("quesryobj" + queryObj)
    const search = queryObj
    const sort = req.query.sort
    console.log("This is search " + search.webseriesName)
    console.log(sort)
    var result = search.webseriesName
    // const games=await game.find(search)
    // .sort({duration:'asc'}).lean()
    let query
    if (!(search.webseriesName === undefined)) {
        query = Webseries.find({ webseriesName: new RegExp("^" + result, "i") })
    } else {
        query = Webseries.find(queryObj).sort({ createdAt: 1 })
    }

    if (req.query.sort) {
        if (req.query.sort === "-rating") {
            console.log("this req.sort" + req.query.sort)
            // query=query.sort(req.query.sort)
            query = Webseries.find().sort({ rating: -1 })
        } else {
            query = Webseries.find({ genre: req.query.sort })
        }
    }

    const webseries = await query.lean()
    console.log("Succesful Request")
    console.log(req.query)

    console.log(req.user.email)
    let email = req.user.email
    let favWebseries = req.user.favWebseries
    let i
    for (i = 0; i < webseries.length; i++) {
        Object.assign(webseries[i], { email: email })
    }
    for (i = 0; i < webseries.length; i++) {
        Object.assign(webseries[i], { favWebseries: favWebseries })
    }

    res.render("searchWeb", {
        // email: req.user.email,
        // userId: req.user._id,

        webseries: webseries,
        // name: req.user.firstName,
        // style:"game-page.css",
    })
}
