const express = require('express')
const Router = express.Router()

const doctorController = require('../controllers/doctorController')

Router.post('/specialist-examination/createDoctor',doctorController.createDoctor)
Router.get('/specialist-examination/listOfDoctors',doctorController.listOfDoctor)
Router.get('/specialist-examination/details/:id',doctorController.getAllInfo)


module.exports = Router