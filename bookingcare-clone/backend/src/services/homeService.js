const db = require('../models/index')
const getHomePageData = async(data) =>{
    const [doctorFeatured,specialties,clinics] = await Promise.all(
        [
            db.Doctor.findAll(),
            db.Specialties.findAll(),
            db.Clinic.findAll()
        ]
    )
    
    return {doctorFeatured,specialties,clinics}
}

module.exports = {getHomePageData}