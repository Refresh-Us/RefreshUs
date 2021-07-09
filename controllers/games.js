const express = require('express');
const Game=require('../models/game')

exports.display = async (req,res)=>{
    res.send('Games Section');
}

