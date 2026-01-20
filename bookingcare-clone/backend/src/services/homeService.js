const db = require('../models/index')
const getHomePageData = (data) =>{
    return new Promise(async(resolve,reject)=>{
        try {
            const doctorFeatured = await db.Doctor.findAll()
            const specialties = await db.Specialties.findAll()

            resolve({doctorFeatured,specialties})
        } catch (error) {
            console.log(error)   
        }
    })
}

module.exports = {getHomePageData}