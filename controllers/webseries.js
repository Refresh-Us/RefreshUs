const express = require('express');
const Webseries=require('../models/web-series')

exports.display = async (req,res)=>{
    res.send('Webseries Section');
}

