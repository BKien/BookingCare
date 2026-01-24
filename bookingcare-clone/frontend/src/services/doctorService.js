import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

const getDoctorList = async () =>{
    const doctorList = await axios.get(`${API_URL}/api/medical-services/specialist-examination/listOfDoctors`)
    return doctorList.data
}

const getDoctorInfo = async(id) =>{
    const doctorData = await axios.get(`${API_URL}/api/medical-services/specialist-examination/details/${id}`)
    return doctorData
} 

const formatTime = (time) => time.slice(0, 5)

export {getDoctorList,getDoctorInfo,formatTime}

