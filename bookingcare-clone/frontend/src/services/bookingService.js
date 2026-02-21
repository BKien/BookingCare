import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

const fetchDoctorBookingInfo = async(id)=>{
    const doctorBookingInfo = axios.get(`${API_URL}/api/medical-services/specialist-examination/details/${id}`)
    return doctorBookingInfo
}

const sendBookingDataToServer = async(data)=>{
    const response = await axios.post(`${API_URL}/api/bookings/saveBookingData`,data)
    return response
}

const sendBookingEmail = async(booking_id)=>{
    const res = await axios.post(`${API_URL}/api/bookings/sendBookingEmail`,{booking_id})
    return res
}
const getSpecialtyPageData = async()=>{
    const data = axios.get(`${API_URL}/api/medical-services/specialist-examination`)
    return data 
}

export default {
    fetchDoctorBookingInfo,
    sendBookingDataToServer,
    getSpecialtyPageData,
    sendBookingEmail
}

