const express = require('express');
const sendMail = require('../config/mail')

exports.contact = (req,res)=>{
    res.render('suggestions',{
        title:"Suggestions",
        style:"suggestion.css",
        name: req.user.displayName,
        email: req.user.email
})
}

exports.email = (req,res)=>{
    const {email,subject,text} = req.body;

    sendMail(email,subject,text,function(err,data){
        if (err) {
            res.status(500).json({message: 'Internal Error'})
        }
        else{
            console.log(data)
            res.json({message: 'Email sent!!!'})
        }
    })
}
