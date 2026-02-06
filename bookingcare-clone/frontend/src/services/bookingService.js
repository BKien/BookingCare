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


export default {
    fetchDoctorBookingInfo,
    sendBookingDataToServer
}

