const express = require('express')
const router = express.Router()

const userRouter = require('./users')
const bookingRouter = require('./bookings')
const homeRouter = require('./homepage')
const medicalServicesRouter = require('./medicalServices')


router.use('',homeRouter)
router.use('/users',userRouter)
router.use('/medical-services',medicalServicesRouter)
router.use('/bookings',bookingRouter)


module.exports = router