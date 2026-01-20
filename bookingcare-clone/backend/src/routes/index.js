const express = require('express')
const router = express.Router()

const userRouter = require('./users')
const doctorRouter = require('./doctors')
const bookingRouter = require('./bookings')
const homeRouter = require('./homepage')

router.use('',homeRouter)
router.use('/users',userRouter)
router.use('/doctors',doctorRouter)
router.use('/bookings',bookingRouter)


module.exports = router