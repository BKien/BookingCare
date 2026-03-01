import axios from "axios"
const API_URL = import.meta.env.VITE_API_URL
const sendKeyToServer = async(keyWord)=>{
    const data = await axios.get(`${API_URL}/api/search?keyWord=${keyWord}`)
    return data.data
}

export default {sendKeyToServer}