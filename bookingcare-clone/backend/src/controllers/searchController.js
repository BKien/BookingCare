const searchService = require("../services/searchService")
const search = async(req,res)=>{
    try {
        const keyWord = req.query.keyWord
        const data = await searchService.search(keyWord)
        console.log(data);
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {search}