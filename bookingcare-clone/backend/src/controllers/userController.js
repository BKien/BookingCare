const userService = require('../services/userService')

const createAnAccount = async(req,res) =>{
    try {
        const data = req.body
        const response =  await userService.createAnAccount(data)
        res.send(response)
    } catch (error) {
        res.status(error.status||500).json({
            message: error.message
        })
    }
}

const login  = async(req,res)=>{
    try {
        const data = req.body
        const isValid = await userService.login(data)
        res.status(200).json(isValid)
    } catch (error) {
        res.status(error.status||500).json({
            message: error.message
        })
    }
}

module.exports = {
    createAnAccount,login
}