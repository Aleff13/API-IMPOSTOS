const bodyParser = require("body-parser")
const { json } = require("body-parser")
const express = require("express")
const routes = express.Router()
const fs = require("fs")

routes.get("/consult/icms/simple", (req, res) => {

    const body = req.body
    
    return res.json(body).status(200)

})

module.exports = routes