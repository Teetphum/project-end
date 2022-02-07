const User = require('../models/User.js')
const jwt = require("jsonwebtoken")

exports.signin = async (req,res) => {
    const {username, password} = req.body;

    const user = await User.findOne({ username: username })

    if(user){
        if(password === user.password){
            const token = jwt.sign(
                {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    isAdmin: user.isAdmin
                },
                process.env.JWT_KEY,
                {
                    expiresIn: '2h'
                }
            );

            res.status(200).json(
                {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: token
                }
            )

        }
        return ;
    }

    res.status(401).json({
        error: 'Invalid username or password'
    })
}