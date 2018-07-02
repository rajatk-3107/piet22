var dbPerson = require('../models/person')

module.exports = (req, res) => {
    if (!req.body.name || !req.body.age) {
        res.json({
            success: false,
            msg: "Please enter all details"
        })
    } else {
        new dbPerson({
            name: req.body.name,
            age: req.body.age,
            fathersName: req.body.fathersName,
            phone: [req.body.phone],
            active: true,
            createdBy: req.decoded.email,
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
                console.log(err)
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
    }

}