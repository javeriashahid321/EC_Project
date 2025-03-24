const router=require('express').Router()
const addProduct = require('../api/v1/products/addProduct')
const getProductDetails = require('../api/v1/products/getProductsDetails')
const authmiddleware=require('../middlewares/authmiddleware')



router.post('/adproducts',authmiddleware,addProduct)
router.get('/getProductDetails/:insertid',getProductDetails)

module.exports=router