import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import api from "../routes/api";
const API_URL = import.meta.env.VITE_API_URL

const getUserInfo = async()=>{
    const data = await api.get(`${API_URL}/api/user/me`)
    return data.data
}

export default {getUserInfo}