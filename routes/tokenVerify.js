var jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    if (!req.headers.token) {
        res.json({
            success: false,
            msg: "Authentication failure"
        })
    } else {
        jwt.verify(req.headers.token, 'secret', (err, decoded) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Invalid request"
                })
            } else {
                req.decoded = decoded;
                next(decoded);
            }
        })
    }
}