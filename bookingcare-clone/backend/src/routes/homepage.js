const express = require('express')
const homeController = require('../controllers/homeController')
const Router = express.Router()

Router.get("/",homeController.getHomePageData)

module.exports = Router