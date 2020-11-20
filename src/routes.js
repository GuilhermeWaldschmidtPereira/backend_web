const express = require('express');
const crypto = require('crypto');
const connection = require("./database/conections")
const routes = express.Router();



routes.post('/users', (req, res)=> {

    const {email, idade, empresa}  = req.body;
    const id = crypto.randomBytes(4).toString('HEX');
    
    connection('users').insert({

        id,
        name,
        email,
        idade,
        empresa


    })

    res.json({id})

}) 

module.exports = routes;