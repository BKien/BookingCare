
import { useParams } from "react-router-dom"
import doctorService from "../services/doctorService"
import searchService from "../services/searchService"
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
const ClinicDetailLoader = async({params})=>{
     try {
          const data = await  doctorService.getDoctorByClinicId(params.id)
          return data
     } catch (error) {
          
     }
}

const SearchPageLoader = async({request})=>{
     try {
          const url = new URL(request.url)
          const keyWord = url.searchParams.get("keyWord")
          const data = await searchService.sendKeyToServer(keyWord)
          console.log(data);
          
          return data
          
     } catch (error) {
          console.log(error);
          
     }
}


export default {SpecialtyLoader,SpecialtyDetailLoader,ClinicDetailLoader,SearchPageLoader}