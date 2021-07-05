const express = require('express');
const Movie = require('../models/Movie');

exports.display = async (req,res)=>{
    res.send('Webseries Section');
}

