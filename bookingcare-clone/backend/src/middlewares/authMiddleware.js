const jwt = require("jsonwebtoken")
const verifyToken = (req,res,next)=>{
    
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

module.exports = {verifyToken}