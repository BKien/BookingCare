const e = require('express')
const db = require('../models/index')
const { where } = require('sequelize')

const createDoctor = async(data) => {
    const t = await db.sequelize.transaction() 
    try {
        const user = await db.User.create({
            email: data.email,
            fullName: data.fullName,
            password: data.password,
            role: 'DOCTOR'
        },{transaction:t})

        const doctor = await db.Doctor.create({
            user_id: user.id,
            description: data.description,
            price: data.price
        },{transaction:t})

        await t.commit()
        return {user,doctor}
    } catch (error) {
        await t.rollback()
        throw error
    }
}

const listOfDoctor = async(specialty_id) =>{
    
    const listOfDoctors = await db.Doctor.findAll({
        include:{
            model: db.Specialties,
            where:{
                id: specialty_id
            }
        }
    })
    return {listOfDoctors}
}

const getAllInfo = async(id)=>{
    try {

        let doctor_info = await db.Doctor.findOne({
        where: {id:id}
        })
        
        doctor_info = doctor_info.dataValues

        let schedule = await db.Schedule.findOne({
            where: {doctor_id:id}
        })
        
        schedule = schedule.dataValues
        
        let time_slots = await db.TimeSlot.findAll({
            where: {schedule_id:schedule.id}
        })
        return {doctor_info,schedule,time_slots}

    } catch (error) {
        throw error
    }
    
    
}

const getSpecialtyData = async()=>{
    try {
        const data = await db.Specialties.findAll()
        return {data}
    } catch (error) {
        
    }
}
module.exports = {
    createDoctor,listOfDoctor,getAllInfo,getSpecialtyData
}