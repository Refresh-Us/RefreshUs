const express = require('express');
const router = new express.Router()
const {contact,email}=require('../controllers/suggestion')


router.get('/contact',contact)
router.post('/email',email)

module.exports = router