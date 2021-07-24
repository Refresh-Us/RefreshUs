const express = require('express');
const router = new express.Router()
const displayMovies = require('../controllers/movies')
const {ensureAuth , ensureGuest} = require('../middleware/auth')
const {display,all,searched}= require('../controllers/webseries')
const displayGames = require('../controllers/games')
// const displayWebseries=require("../controllers/webseries")

router.get('/movies',ensureAuth ,displayMovies.display)
router.get('/movies/all', ensureAuth,displayMovies.all )
router.get('/movies/search', ensureAuth,displayMovies.searched)

router.get('/webseries',ensureAuth,display)
router.get('/webseries/all', ensureAuth,all )
router.get('/webseries/search', ensureAuth,searched)

router.get('/games',ensureAuth,displayGames.display)
router.get('/games/all',ensureAuth,displayGames.all)
router.get('/games/search',ensureAuth,displayGames.searched)

module.exports = router;

