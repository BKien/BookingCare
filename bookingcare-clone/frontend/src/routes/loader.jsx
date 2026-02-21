
import { useParams } from "react-router-dom"
import doctorService from "../services/doctorService"
import axios from "axios"
const API_URL = import.meta.env.VITE_API_URL
const SpecialtyLoader = async()=>{
   try {
        const list = await axios.get(`${API_URL}/api/medical-services/specialist-examination`)
        
        return list
   } catch (error) {
        console.log(error);
   }
}

const SpecialtyDetailLoader = async({params})=>{
     
     try {
          const data = await doctorService.getDoctorList(params.specialty_id)
          return data
     } catch (error) {
          
     }
}

export default {SpecialtyLoader,SpecialtyDetailLoader}