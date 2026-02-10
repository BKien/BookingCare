import "./DoctorInfo.scss"
import { useEffect, useState } from "react"
const API_URL = import.meta.env.VITE_API_URL
const DoctorInfo = ({doctorInfo})=>{
    
    return(
        <div className="doctor-info-container">
            <img src={`${API_URL}${doctorInfo.img}`} className="doctor-img"></img>
            <div className="doctor-infomation">
                <div className="name">Name: {doctorInfo.name}</div> <br></br>
                <div className="description">Description: {doctorInfo.description} <br></br></div>
                Price: {doctorInfo.price}
            </div>
            
        </div>
    )
}

export default DoctorInfo