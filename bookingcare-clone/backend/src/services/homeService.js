const db = require('../models/index')
const getHomePageData = async(data) =>{
    const [doctorFeatured,specialties,clinics,services] = await Promise.all(
        [
            db.Doctor.findAll({
                include: [
                    {
                        model: db.User,
                        as: 'user',
                        attributes: ['fullName']
                    }
                ]
            }),
            db.Specialties.findAll(),
            db.Clinic.findAll(),
            db.Service.findAll()
        ]
    )
    
    return {doctorFeatured,specialties,clinics,services}
}

module.exports = {getHomePageData}