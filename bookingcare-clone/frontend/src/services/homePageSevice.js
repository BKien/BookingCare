import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

const getHomePageData = ()=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const homePageData = await axios.get(`${API_URL}/api/`)
            console.log(homePageData.data.specialties)
            resolve(homePageData.data)
        } catch (error) {
            
        }
    })
}

export default {getHomePageData}