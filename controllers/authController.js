const User = require('../models/user')

exports.signup = (req, res, next) => {
    res.send("you've registered")
}

exports.signin = (req, res, next) => {
    const { email, password } = req.body
    const user = new User({
        email: email,
        password: password
    })

    user.save((err, data) => {
        if(err) return console.error(err)
    })

    res.send(user.email)
}
