const doctorService = require('../services/doctorService')
const createDoctor = (req,res) =>{
    try {
        const result = doctorService.createDoctor(req.body)
        res.status(201).json(result)
    } catch (error) {
        console.log(error)
    }
}

const listOfDoctor = async(req,res) =>{
    try {
        const id = req.params.id
        const doctorList = await doctorService.listOfDoctor(id)
        res.status(201).json(doctorList)
    } catch (error) {
        console.log(error)
    }
}

const getAllInfo = async(req,res) =>{
    try {
        const doctor_id = req.params.id
        const data = await doctorService.getAllInfo(doctor_id)
        res.status(200).json({
            errCode:0,
            data
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error:-1
        })
    }
}

const getSpecialtyData = async(req,res)=>{
    const data = await doctorService.getSpecialtyData()
    console.log(data)
    res.send(data)
}
module.exports = {
    createDoctor,listOfDoctor,getAllInfo,getSpecialtyData
}