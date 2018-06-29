var mongoose = require('mongoose')
var Schema = mongoose.Schema

var person = new Schema({
    name: String,
    fathersName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    age: Number,
    phone: [{
        type: Number
    }],
    address: {
        line1: String,
        line2: String,
        city: String,
        state: String,
        pincode: Number,
        country: String
    },
    active: Boolean,
    createdOn: Date
})

module.exports = mongoose.model('person', person)