
const router=require('express').Router()
const addCatagory = require('../api/v1/category/addCategory')
const allCategory=require('../api/v1/category/allCategory')
const getCategoriesFields=require('../api/v1/category/getCategoriesFields')


router.get('/categories',allCategory)
router.get('/getCatagorieFields/:catagory',getCategoriesFields)
router.post('/addcatagory',addCatagory)

module.exports=router