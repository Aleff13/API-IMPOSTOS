const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
const routes = require("./routes")
const Tax = require("./taxCalc")

const app = express()

require("dotenv-safe").config();

const jwt = require('jsonwebtoken');

app.use(morgan("dev"))

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.json())

app.use(cors())

app.use(routes)

app.use(Tax)

app.listen(21262, () => {

    console.log(`Express started at https://localhost:21262`)

})