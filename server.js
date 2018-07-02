const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('./config/config.json')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

mongoose.connect(config.MONGO, (err, data) => {
    if (!err) {
        console.log("Database connected")
    }
})

app.use('/api', routes)




app.listen(config.PORT, (err, data) => {
    if (!err) {
        console.log("Server running on port " + config.PORT)
    }
})