import React from "react";
import {Link} from 'react-router-dom'
import DoctorInfo from "../../components/DoctorDetail/DoctorInfo";
import Schedule from "../../components/DoctorDetail/Schedule";
import { useParams } from "react-router-dom"
import { getDoctorInfo,formatTime } from "../../services/doctorService"
import { useState,useEffect } from "react";
const DoctorDetail = () => {

    const {id} = useParams()
    const [doctorData,setDoctorData] = useState(null)
    useEffect(()=>{
        const fetchDoctorInfo = async()=>{
            try {
                const doctorInfo = await getDoctorInfo(id)
                setDoctorData(doctorInfo.data)
                console.log(doctorData)
            } catch (error) {
                console.log(error)
            }
        }
        fetchDoctorInfo()
    },[id])

    if(!doctorData) return <div>Loading...</div>
    console.log(doctorData.data)
    return (<>
        <DoctorInfo
            doctorInfo = {doctorData.data.doctor_info}
        ></DoctorInfo>
        <Schedule
            scheduleDate={doctorData.data.schedule.date}
            timeSlots={doctorData.data.time_slots}
            //truyền doctorId vào để trang Booking fetch data tổng hợp lại lần nữa
            doctorId={doctorData.data.doctor_info.id}
        ></Schedule>
    </>)
}

export default DoctorDetail