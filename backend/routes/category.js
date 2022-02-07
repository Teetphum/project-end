const express = require("express")
const router = express.Router()

const {create, getAllcategory, remove, updateCategory, getCategory} = require('../controllers/categoryController.js')

router.post('/addcategory', create)

router.get('/getcategory', getAllcategory)

router.delete('/category/:_id', remove)

router.get('/getonecategory/:_id', getCategory)

router.put('/updatecategory/:_id', updateCategory)



module.exports = router;