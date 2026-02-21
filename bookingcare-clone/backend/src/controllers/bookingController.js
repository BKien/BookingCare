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

const sendBookingEmail = async(req,res)=>{
    try {
       
        
        const data = await bookingService.sendBookingEmail(req.body.booking_id)
      
        return res.send(data)
    } catch (error) {
        
    }
}

module.exports = {saveBookingData,sendBookingEmail}