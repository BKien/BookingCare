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
        return res.status(200).json(isValid)
    } catch (error) {
        res.status(error.status||500).json({
            message: error.message
        })
    }
}

const getUserProfile = async(req,res)=>{
    try {
        console.log(req.user)
        const userProfile = await userService.getUserProfile(req.user.userId)
        return res.send(userProfile)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createAnAccount,login,getUserProfile
}