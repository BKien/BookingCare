const jwt = require("jsonwebtoken")
const verifyAccessToken = (req,res,next)=>{
    
    const authHeaders = req.headers.authorization
    const accessToken = authHeaders.split(" ")[1]
    
    if(!accessToken) res.send("Navagate to login")
    jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
        if(err){
            return res.status(401).send("Token Expired!")
        }
        req.user = decoded
        next()
    })
}
  
const verifyToken = (req,res,next)=>{
    const {verifyToken} = req.body
    console.log(verifyToken)
    if(!verifyToken) return res.status(400).json(false)
    jwt.verify(verifyToken,process.env.VERIFY_TOKEN_SECRET,(err,decoded)=>{
        if(err){
            return res.status(401).send("Token Expired!")
        }
        next()
    })
}

const verifyRefreshToken = (req,res,next)=>{
    const refreshToken = req.headers.authorization
}

module.exports = {verifyToken,verifyAccessToken}