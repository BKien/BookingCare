const bookingService = require('../services/bookingService')

const saveBookingData = (req,res)=>{
    const bookingData = req.body
    const data = bookingService.saveBookingData(bookingData)
    res.status(200).json(data)
}

module.exports = {saveBookingData}