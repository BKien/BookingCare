const express = require('express')
const routes = express.Router()

const userController = require('../controllers/userController')

routes.post('/auth/sign-up',userController.createAnAccount)
routes.post('/auth/login',userController.login)
module.exports = routes