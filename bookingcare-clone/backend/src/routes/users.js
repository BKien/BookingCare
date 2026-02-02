const express = require('express')
const routes = express.Router()
const  {verifyToken} = require('../middlewares/authMiddleware') 
const userController = require('../controllers/userController')

routes.post('/auth/sign-up',userController.createAnAccount)
routes.post('/auth/login',userController.login)
routes.get('/me',verifyToken,userController.getUserProfile)
module.exports = routes