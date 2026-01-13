const express = require('express')
const routes = express.Router()

const userController = require('../controllers/userController')

routes.post('/createAnAccount',userController.createAnAccount)

module.exports = routes