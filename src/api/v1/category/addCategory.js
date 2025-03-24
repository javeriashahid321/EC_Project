const addCatagoryFields = require('../../../lib/category/addCatagoryFields')


const addCatagory = async function (req, res, next) {
    const { categoryName, fields } = req.body;

    const fieldsJSON = JSON.stringify(fields);

    const categoryData = {
        categoryName,
        fieldsJSON
    }
    try {
        const response = await addCatagoryFields(categoryData)
        res.status(200).json({
            message: 'Category Added Successfully'
        })
    } catch (err) {
        next(err)
    }
}

module.exports = addCatagory