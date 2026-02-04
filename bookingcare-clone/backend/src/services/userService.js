const db = require('../models/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {Resend} = require('resend')
const {verifyToken} = require('../middlewares/authMiddleware')
const crypto = require('crypto')
const { Op } = require("sequelize");

const createAnAccount = async(token) =>{
    try {
        const tokenHash = crypto
            .createHash("sha256")
            .update(token)
            .digest("hex");
        const user = await db.User.findOne({
            where: {
                verifyTokenHash: tokenHash,
                verifyExpiresAt: { [Op.gt]: Date.now() }// chỉ lấy cái vẫn còn hạn
            } 
        })
        console.log(user)
        if(!user) throw{
            message: "Invalid or Expired!"
        }

        user.isVerified = true
        user.verifyTokenHash = null
        user.verifyExpiresAt = null
        user.save()
        return "Created An Account With IsVerified Is False!"
    } catch (error) { 
        throw error
    }
}

const login = async(data)=>{
    try {
        const user = await db.User.findOne({
            where:{
                email:data.email

            }
        })
        
        if(!user) throw {
            status: 400,
            message: "This Email doesn't exists!"
        }
        if(!user.isVerified) throw{
            status: 401,
            message: "The Account Doesn't Exists"
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

        const refreshToken = jwt.sign(
            {userId:user.id},
            process.env.REFRESH_TOKEN_SECRET ,
            {expiresIn:'7d'}
        )
        return {user,accessToken,refreshToken}
        
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

const getNewAccessToken = (req) => {
  const refreshToken = req.cookies.refreshToken

  if (!refreshToken) {
    throw { status: 401, message: "No refresh token" }
  }

  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    )

    const newAccessToken = jwt.sign(
      { userId: decoded.userId },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    )

    return newAccessToken
  } catch {
    throw { status: 403, message: "Invalid refresh token" }
  }
}

const sendVerifyEmail = async(data)=>{
    try {
        const resend = new Resend(process.env.RESEND_KEY)

        const isEmailValid = await db.User.findOne({
            where : {email:data.email}
        })
        
        if(isEmailValid) throw{
            status: 400,
            message: "This email was used"
        }

        const salt = bcrypt.genSaltSync(10)

        const hashedPassword = bcrypt.hashSync(data.password,salt)

        const rawToken = crypto.randomBytes(32).toString("hex");
        const tokenHash = crypto
            .createHash("sha256")
            .update(rawToken)
            .digest("hex");
        // tạo ra người dùng với isVerified = false (chưa đăng nhập được cho đến khi isVerified = true)
        await db.User.create({
            email: data.email,
            fullName: data.fullName,
            password: hashedPassword,
            isVerified: false,
            verifyTokenHash: tokenHash,
            verifyExpiresAt: new Date(Date.now() + 7 * 60 * 1000) // hết hạn sau 7 phút
        })
        //gửi mã xác thực email kèm veryfyToken
        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: data.email,
            subject: 'Second Email',
            html: `<a href="http://localhost:5173/verify-email?verifyToken=${rawToken}">Click Here!</a>`
        });

        return new Promise((resolve,reject)=>{
            resolve("")
        })
    } catch (error) {
        throw error
    }
}



module.exports = {
    createAnAccount,login,getUserProfile,getNewAccessToken,sendVerifyEmail
}   