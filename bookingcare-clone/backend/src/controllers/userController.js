const userService = require('../services/userService')

const sendVerifyEmail = async(req,res) =>{
    try {
        const data = req.body
        const response =  await userService.sendVerifyEmail(data)
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
        const {refreshToken,accessToken,user} = await userService.login(data)
        return res
        .cookie("refreshToken",refreshToken,{
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000// 7days
        })
        .status(200).json({accessToken,user})
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

const getNewAccessToken = async(req,res)=>{
    try {
        const accessToken = await userService.getNewAccessToken(req)
        console.log(accessToken)
        return res.status(200).json({accessToken})
    } catch (error) {
        res.status(error.status).json({
            message: error.message
        })
    }
}



const createAnAccount = async(req,res)=>{
    
    try {
        const data = await userService.createAnAccount(req.body.verifyToken)
        return res.status(200).json("Create An Account!")
    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
}
module.exports = {
    createAnAccount,login,getUserProfile,getNewAccessToken,sendVerifyEmail
}