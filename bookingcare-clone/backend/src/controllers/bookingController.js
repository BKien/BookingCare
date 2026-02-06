const bookingService = require('../services/bookingService')

const saveBookingData = async(req,res)=>{
    try {
        const bookingData = req.body
        const result = await bookingService.saveBookingData(bookingData)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

module.exports = {saveBookingData}