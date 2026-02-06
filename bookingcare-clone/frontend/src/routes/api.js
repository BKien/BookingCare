import axios from "axios"
import { useContext } from "react"
const API_URL = import.meta.env.VITE_API_URL
const api = axios.create({
    baseURL: API_URL
})

// check token hết hạn cho api
api.interceptors.response.use(rs=>rs,err=>{
    if(err.response?.status === 401){
        localStorage.removeItem("user")
        localStorage.removeItem("accessToken")
        window.location.href = "/login"
    }
    return Promise.reject(err)
})

api.interceptors.request.use(config=>{
    const token = localStorage.getItem("accessToken")
    if(!token) window.location.href = "/login"
    config.headers.Authorization = `Bear ${token}`
    return config
})

export default api