const db = require('../models/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const createAnAccount = async(data) =>{
    try {
        const salt = bcrypt.genSaltSync(10)
        const isEmailValid = await db.User.findOne({
            where : {email:data.email}
        })

        if(isEmailValid) throw{
            status: 400,
            message: "This email was used"
        }
        
        const hashedPassword = bcrypt.hashSync(data.password,salt)

        await db.User.create({
            email: data.email,
            fullName: data.fullName,
            password: hashedPassword
        })

        return "Created An Account!"
    } catch (error) {
        throw error
    }
}

const login = async(data)=>{
    try {
        const user = await db.User.findOne({
            where:{email:data.email}
        })
        
        if(!user) throw {
            status: 400,
            message: "This Email doesn't exists!"
        }
        
        const valid = await bcrypt.compare(data.password,user.password)
        if(!valid) throw{
            status: 401,
            message: "Wrong password!"
        }

        const accessToken = jwt.sign(
            {userId: user.id},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:'15m'}
        )

        return {user,accessToken}
        
    } catch (error) {
        throw error
    }
}

const getUserProfile = async(userId)=>{
    const data = await db.User.findOne({
        where: {id:userId}
    })
    return data
}
module.exports = {
    createAnAccount,login,getUserProfile
}