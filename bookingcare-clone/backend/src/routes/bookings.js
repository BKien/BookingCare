const express = require('express')
const router = express.Router()
const bookingController = require('../controllers/bookingController')

router.post('/saveBookingData',bookingController.saveBookingData)
router.post('/sendBookingEmail',bookingController.sendBookingEmail)
module.exports = router