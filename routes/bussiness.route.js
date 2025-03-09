const router=require('express').Router()
const bussinessController=require('../controllers/bussiness.controller')


router.post('/signup',bussinessController.signup)
router.post('/login',bussinessController.login)
router.get('/categories',bussinessController.getCategories)
router.get('/getCatagorieFields/:catagory',bussinessController.getCategoriesFields)


module.exports=router