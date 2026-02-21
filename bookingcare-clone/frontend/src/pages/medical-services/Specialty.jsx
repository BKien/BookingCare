import { useEffect, useState } from "react"
import bookingCareLogo from "../../assets/images/bookingcarelogo.svg"
import axios from "axios"
import './Specialty.scss'
import { Link, useLoaderData, useMatches, useParams } from "react-router-dom"
const API_URL = import.meta.env.VITE_API_URL
const Specialty = ()=>{
    const loaderData = useLoaderData()
       
    return(
        <div className="specialty-container">
            {loaderData.data.data.map((item,index)=>(
               <Link className="item" to={`${item.id}`}>
                    <img src={`${API_URL}${item.img}`}></img>
                    <div className="name">{item.name}</div>
               </Link>
            ))}
        </div>  
    )
}

export default Specialty