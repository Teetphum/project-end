const express = require("express")
const router = express.Router()

const {create, getAllusers, remove, getUser, updateUser} = require('../controllers/userController.js')

router.post('/adduser', create)

router.get('/getallusers',getAllusers)

router.delete('/user/:_id', remove)

router.get('/getoneuser/:_id', getUser)

router.put('/updateuser/:_id', updateUser)




module.exports = router;