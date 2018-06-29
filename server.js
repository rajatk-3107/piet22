const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('./config/config.json')
const bodyParser = require('body-parser')
const dbPerson = require('./models/person')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

mongoose.connect(config.MONGO, (err, data) => {
    if (!err) {
        console.log("Database connected")
    }
})

app.post('/abc', (req, res) => {
    new dbPerson({
        name: req.body.name,
        age: req.body.age,
        fathersName: req.body.fathersName,
        phone: [req.body.phone],
        active: true,
        email: req.body.email,
        createdOn: new Date(),
        address: {
            line1: req.body.line1,
            line2: req.body.line2,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
            country: req.body.country
        }
    }).save((err, data) => {
        if (err) {
            res.json({
                success: false,
                msg: "Something went wrong. Please try again after some time."
            })
        } else {
            res.json({
                success: true,
                msg: "New data created.",
                daata: data
            })
        }
    })
})




app.listen(config.PORT, (err, data) => {
    if (!err) {
        console.log("Server running on port " + config.PORT)
    }
})