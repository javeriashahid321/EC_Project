const getAllCategories = require('../../../lib/category/getAllCategories')

const allCategory = async function (req, res, next) {
    try {
        const categories = await getAllCategories()
        res.status(200).json({
            categories
        })
    } catch (error) {
        next(error)
    }
}

module.exports = allCategory