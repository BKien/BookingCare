const express = require('express')
const router = express.Router()
const doctorController = require('../controllers/doctorController')

router.post('/createDoctor',doctorController.createDoctor)
router.get('/listOfDoctors',doctorController.listOfDoctor)
router.get('/details/:id',doctorController.getAllInfo)
module.exports = router