const User = require('../models/User.js')
const bcrypt = require('bcryptjs')

// Hash
const makeHash = (plaintext) => {
    
}



// Create/add User
exports.create = async (req,res) => {
    const {username, email, password, tel, isAdmin, homeAddress, workAddress} = req.body
    // const username = await req.body.username;
    // const email = await req.body.email;
    // const tel = await req.body.tel;
    // const isAdmin = await req.body.isAdmin;
    // const password = await makeHash(req.body.password);
    

    // validate
    if(!username){
        return res.status(400).json({err:"username is require"})
    }
    if(!email){
        return res.status(400).json({err:"email is require"})
    }
    if(!password){
        return res.status(400).json({err:"password is require"})
    }
    if(!tel){
        return res.status(400).json({err:"phone number is require"})
    }


    // save data
    const newUser = new User({username, email, password, tel, isAdmin, homeAddress, workAddress});
    try {
        const saveUser = await newUser.save();
        res.status(200).json(saveUser);
    } catch (err) {
        res.status(400).json({err: "Username or Email is Already use!!"})
    }

}

// Get All Users
exports.getAllusers = async (req, res) => {
    User.find({}).exec((err, users) => {
        res.json(users)
    })
}

exports.remove = async (req, res) => {
    const {_id} = await req.params
    User.findOneAndRemove({_id}).exec((err, category) => {
        if(err){
            console.log(err);
        }
        res.json({
            message:"Delete User Success!!"
        })
    })
}

// Get One User
exports.getUser = async (req, res) => {
    const {_id} = await req.params
    User.findOne({_id}).exec((err, user) => {
        res.json(user)
    })
}


exports.updateUser = async (req, res) => {
    const {_id} = await req.params

    const {username, email, password, tel, isAdmin} = req.body

    User.findOneAndUpdate({_id}, {username, email, password, tel, isAdmin}, {new:true})
    .exec((err, user)=>{
        if(err){
            console.log(err);
        }
        res.json(user)
    })

}