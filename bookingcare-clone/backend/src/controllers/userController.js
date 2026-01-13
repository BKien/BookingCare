const userService = require('../services/userService')

const createAnAccount = async(req,res) =>{
    try {
        const data = req.body
        userService.createAnAccount(data)
        res.send("oke")
    } catch (error) {
        
    }
}

module.exports = {
    createAnAccount
}