const { where } = require('sequelize')
const db = require('../models/index')
const {Resend} = require('resend')
const resend = new Resend(process.env.RESEND_KEY)
const saveBookingData = async(data)=>{
    //dùng transaction khi dữ liệu cần nhất quán
    // (khi thành công hết thì mới tạo không thì rollback)
    const t = await db.sequelize.transaction()
    let result = false
    try {
        const isTimeSlotAvailable = await checkAndMarkTimeSlotUnavailable(data.time_slot_id)
        if(!isTimeSlotAvailable) throw {
            message: "This Time Slots Is Not Available!"
        }
        //tạo patient mới
        const newPatient = await db.Patient.create({
            name: data.name,
            gender: data.gender,
            number: data.number,
            email: data.email,
            birth: data.birth,
            address: data.address,
            user_id: data.user_id
        },{transaction:t})

        //tạo bản ghi booking mới
        const newBooking = await db.Booking.create({
            doctor_id: data.doctor_id,
            patient_id: newPatient.id,
            schedule_id: data.schedule_id,
            user_id : data.user_id
        },{transaction:t})

        // tạo bản ghi payment mới
        const newPayment = await db.Payment.create({
            amount: data.amount,
            method: data.method,
            booking_id: newBooking.id,
            status: "pending"
        },{transaction:t})
        const bookingId = newBooking.id
        result = true
        await t.commit()
        return {result,bookingId}
    } catch (error) {
        await t.rollback()
        throw error
    }

    
}

const checkAndMarkTimeSlotUnavailable = async(timeSlotId)=>{
    const timeSlot = await db.TimeSlot.findOne({
        where: {id: timeSlotId}
    })
    if(timeSlot.is_available){
        timeSlot.is_available = false
        await timeSlot.save()
        return true
    }
    else false
}

const sendBookingEmail = async(bookingId)=>{
    try {
        const bookingData = await  db.Booking.findOne({
            where: {id: bookingId}
        })
        
        const respsonse = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'thekien2006@gmail.com',
            subject: 'Third Email',
            html: `<div>${bookingData}</div>`
        });
        return respsonse
    } catch (error) {
        
    }
}

module.exports = {saveBookingData,sendBookingEmail}