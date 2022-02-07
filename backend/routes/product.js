const express = require("express")
const router = express.Router()

const {create, getAllproducts, singleProduct, remove, updateProduct, getCateproducts, getBySearch} = require('../controllers/productController.js')

router.post('/addproduct', create)

router.get('/getallproducts', getAllproducts)

router.get('/getoneproduct/:_id', singleProduct)

router.delete('/product/:_id', remove)

router.put('/updateproduct/:_id', updateProduct)

router.get('/getallproducts/category/:_id', getCateproducts)

router.get('/getallproducts/search/:bookname', getBySearch)


module.exports = router;