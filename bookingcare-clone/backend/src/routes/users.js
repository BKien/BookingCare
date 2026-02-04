const express = require('express')
const routes = express.Router()
const  {verifyToken,verifyAccessToken} = require('../middlewares/authMiddleware') 
const userController = require('../controllers/userController')

routes.post('/auth/sign-up',userController.sendVerifyEmail)
routes.post('/auth/login',userController.login)
routes.post('/auth/refresh-token',userController.getNewAccessToken)
routes.get('/me',verifyAccessToken,userController.getUserProfile)
routes.post('/auth/verify-email',userController.createAnAccount)
module.exports = routes