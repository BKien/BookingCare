import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

const getDoctorList = async (id) =>{
    const doctorList = await axios.get(`${API_URL}/api/medical-services/specialist-examination/listOfDoctors/${id}`)
    return doctorList.data
}

const getDoctorInfo = async(id) =>{
    const doctorData = await axios.get(`${API_URL}/api/medical-services/specialist-examination/details/${id}`)
    return doctorData
} 

const getDoctorByClinicId = async(clinic_id)=>{
    const doctorList = await axios.get(`${API_URL}/api/medical-services/specialist-examination/listOfDoctors/${clinic_id}`)
    return doctorList.data
}
const formatTime = (time) => time.slice(0, 5)

export default {getDoctorList,getDoctorInfo,formatTime,getDoctorByClinicId}

