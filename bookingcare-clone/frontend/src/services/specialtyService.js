import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

const getListOfSpecialties = async()=>{
    try {
        const list = await axios.get(`${API_URL}/api/medical-services/specialist-examination`)
        return list.data
    } catch (error) {
        throw error
    }
}

export default {getListOfSpecialties}