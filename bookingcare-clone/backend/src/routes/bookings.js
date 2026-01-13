const express = require('express')
const router = express.Router()
const bookingController = require('../controllers/bookingController')

router.post('/saveBookingData',bookingController.saveBookingData)

module.exports = router