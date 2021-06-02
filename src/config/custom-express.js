const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(bodyParser.json())

consign()
.include('src/controllers')
.into(app)

module.exports = app