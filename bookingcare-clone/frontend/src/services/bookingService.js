import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

const fetchDoctorBookingInfo = async(id)=>{
    const doctorBookingInfo = axios.get(`${API_URL}/api/doctors/details/${id}`)
    return doctorBookingInfo
}

export default fetchDoctorBookingInfo