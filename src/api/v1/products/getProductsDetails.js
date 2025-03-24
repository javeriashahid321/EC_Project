const db=require('../../../db/db.config')
const getProductDetails=async function(req,res,next) {
    const {insertid}=req.params
    try{
        const [details] = await db.query('SELECT * FROM items WHERE id = ?', [insertid]);
        if (details.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(details[0]);
    }catch(err){
        next(err)
    }
}

module.exports=getProductDetails