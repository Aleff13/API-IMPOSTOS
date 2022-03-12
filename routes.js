const bodyParser = require("body-parser")
const { json } = require("body-parser")
const express = require("express")
const routes = express.Router()
const fs = require("fs")
const Tax = require("./taxCalc")
const dotenv = require('dotenv');

// get config vars
dotenv.config();
// access config var
const secret = process.env.SECRET;

routes.get("/consult/icms-simple", (req, res) => {

    const body = req.body

    if(body.token != secret){

        return res.json("Token inválido").status(404)

    }

    let calculator = new Tax()
    
    let resultado = calculator.icms(body.price, body.mva, body.internal, body.external)

    return res.json("O valor de icms a ser pago é de: " + resultado).status(200)

})

routes.get("/consult/icms-complete", (req, res) => {

    const body = req.body

    let calculator = new Tax()
    
    let resultado = calculator.icms(body.price, body.mva, body.internal, body.external, body.descount, body.shipping, body.ipi)

    return res.json(resultado).status(200)

})

module.exports = routes