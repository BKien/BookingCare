import React from "react";
import {Link, useLocation} from 'react-router-dom'
import DoctorInfo from "./DoctorInfo";
import Schedule from "./Schedule";
import { useParams } from "react-router-dom"
import { getDoctorInfo,formatTime } from "../../services/doctorService"
import { useState,useEffect } from "react";
import MainLayout from "../../Layouts/MainLayout";
import Comments from "./Comments";
import './DoctorDetail.scss'
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
const DoctorDetail = () => {

    const {id} = useParams()
    const [doctorData,setDoctorData] = useState(null)
    const location = useLocation()
    
    useEffect(()=>{
        const fetchDoctorInfo = async()=>{
            try {
                const doctorInfo = await getDoctorInfo(id)
                setDoctorData(doctorInfo.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchDoctorInfo()
    },[id])

    if(!doctorData) return <div>Loading...</div>
    console.log(doctorData.data)
    return (
       <>
                
                <div className="doctor-info-schedule-section">
                    <DoctorInfo
                    doctorInfo = {doctorData.data.doctor_info}
                    ></DoctorInfo>
                    <Schedule
                        scheduleDate={doctorData.data.schedule.date}
                        timeSlots={doctorData.data.time_slots}
                        //truyền doctorId vào để trang Booking fetch data tổng hợp lại lần nữa
                        doctorId={doctorData.data.doctor_info.id}
                        //truyền schedule_id vào để lưu dữ liệu của trang Booking vào Database
                        schedule_id={doctorData.data.schedule.id}
                    ></Schedule> 
                </div>

                <div>
                    <Comments></Comments>
                </div>
        </>
    )
}

export default DoctorDetail