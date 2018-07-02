var express = require('express')
var app = express()

var addPerson = require('./addPerson')
app.post('/addPerson', addPerson)


module.exports = app