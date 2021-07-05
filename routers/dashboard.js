const express = require('express');
const router = new express.Router()
const displayMovies = require('../controllers/movies')
const displayWebseries = require('../controllers/webseries')
const displayGames = require('../controllers/games')

router.get('/movies',displayMovies.display)
router.get('/webseries',displayWebseries.display)
router.get('/games',displayGames.display)

module.exports = router;

