const express = require('express')
const router = express.Router()
const {addGame,addWebseries,deleteMovie,addMovie,deleteWebseries,deleteGame}=require('../controllers/admin')
const adminAuth=require('../middleware/adminAuth')
const {ensureAuth , ensureGuest} = require('../middleware/auth')

router.get('/admin',(req,res)=>{
    // res.status(200).send("Welcome To Admin Login Page")
    res.render('admin-login',)
})
router.post('/alogin',adminAuth,(req,res)=>{
    res.render('admin-dash',{
    style:"admin-dash.css"})
})

router.delete('/admin/delete/movie/:id',deleteMovie)

router.get('/admin/movie',(req,res)=>{
    res.status(201).render('addMovie',{
        style:"addmovie.css"

    })
})
router.get('/admin/game',(req,res)=>{
    res.status(201).render('addGame',{
        style:"addgame.css"

    })
})
router.get('/admin/webseries',(req,res)=>{
    res.status(201).render('addWebseries',{
        style:"addwebseries.css"

    })
})

router.post('/admin/add/movie',addMovie)

router.post('/admin/add/game',addGame)

router.delete('/admin/delete/game/:id',deleteGame)

router.post('/admin/add/webseries',addWebseries)

router.delete('/admin/delete/webseries/:id',deleteWebseries)


module.exports = router


