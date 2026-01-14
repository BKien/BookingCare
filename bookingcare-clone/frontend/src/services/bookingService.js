import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

const fetchDoctorBookingInfo = async(id)=>{
    const doctorBookingInfo = axios.get(`${API_URL}/api/doctors/details/${id}`)
    return doctorBookingInfo
}

const sendBookingDataToServer = async(data)=>{
    console.log(data)
    await axios.post(`${API_URL}/api/bookings/saveBookingData`,data)
}

export default {
    fetchDoctorBookingInfo,
    sendBookingDataToServer
}

