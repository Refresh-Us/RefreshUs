const express = require('express');
const router = new express.Router()
const displayMovies = require('../controllers/movies')
const {ensureAuth , ensureGuest} = require('../middleware/auth')
const displayWebseries = require('../controllers/webseries')
const displayGames = require('../controllers/games')

router.get('/movies',ensureAuth ,displayMovies.display)
router.get('/movies/all', ensureAuth,displayMovies.all )
router.get('/webseries',displayWebseries.display)
router.get('/games',displayGames.display)

module.exports = router;

