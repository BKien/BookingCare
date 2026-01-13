const { where } = require('sequelize')
const db = require('../models/index')

const saveBookingData = async(data)=>{
    //dùng transaction khi dữ liệu cần nhất quán
    // (khi thành công hết thì mới tạo không thì rollback)
    const t = await db.sequelize.transaction()
    try {
        //tạo patient mới
        const newPatient = await db.Patient.create({
            name: data.name,
            gender: data.gender,
            number: data.number,
            email: data.email,
            birth: data.birth,
            address: data.address
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
        await t.commit()
        if(newPayment) return "Oke"
    } catch (error) {
        await t.rollback()
        console.log(error)
    }
}

module.exports = {saveBookingData}