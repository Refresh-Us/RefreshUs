const express = require('express')
const router = express.Router()
const {addGame,addWebseries,deleteMovie,addMovie,deleteWebseries,deleteGame}=require('../controllers/admin')
const adminAuth=require('../middleware/adminAuth')
const {ensureAuth , ensureGuest} = require('../middleware/auth')

router.get('/admin',(req,res)=>{
    res.status(200).send("Welcome To Admin Login Page")
    // res.render('admin-login')
})
router.post('/alogin',adminAuth,(req,res)=>{
    res.send("Now U r Logged In Admin Sectioin")
})

router.delete('/admin/delete/movie/:id',deleteMovie)

router.post('/admin/add/movie',addMovie)

router.post('/admin/add/game',addGame)

router.delete('/admin/delete/game/:id',deleteGame)

router.post('/admin/add/webseries',addWebseries)

router.delete('/admin/delete/webseries/:id',deleteWebseries)


module.exports = router


