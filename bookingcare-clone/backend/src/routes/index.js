const express = require('express')
const router = express.Router()

const userRouter = require('./users')
const bookingRouter = require('./bookings')
const homeRouter = require('./homepage')
const medicalServicesRouter = require('./medicalServices')
const searchRouter = require('./search')

router.use('',homeRouter)
router.use('/user',userRouter)
router.use('/medical-services',medicalServicesRouter)
router.use('/bookings',bookingRouter)
router.use('/search',searchRouter)


module.exports = router