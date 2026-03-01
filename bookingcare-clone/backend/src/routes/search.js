const express = require('express')
const Router = express.Router()

const searchControler = require('../controllers/searchController') 
Router.get('/',searchControler.search)
module.exports = Router