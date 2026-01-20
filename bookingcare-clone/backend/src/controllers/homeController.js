const homeService = require('../services/homeService')

const getHomePageData = async(req,res)=>{
    const data = await homeService.getHomePageData("oke")
    res.json(data)
}

module.exports = {getHomePageData}