import Payment from "./BookingBody"
import BookingHeader from "./BookingHeader"
import bookingService from "../../services/bookingService"
import doctorService from "../../services/doctorService"
import "./booking.scss"
import { useEffect, useState } from "react"
import { data, useLocation, useParams, useSearchParams } from "react-router-dom"

const Booking = ()=>{
    const {state} = useLocation()
    const {id} = useParams()
    const [searchParams] = useSearchParams()
    //lấy slot id để hiển thị đúng time-slot mà client chọn
    const slotId = searchParams.get("slotId")
    const scheduleId = searchParams.get("scheduleId")
    const [doctorBookingData,setDoctorBookingData] = useState(null)

    try {

        useEffect(()=>{
          
          const fetchDoctorBookingInformation = async(doctorId)=>{
              const data = await bookingService.fetchDoctorBookingInfo(doctorId)
              setDoctorBookingData(data.data)
              
          }

          fetchDoctorBookingInformation(id)
          

        },[id])
    } catch (error){
        console.log(error)
    }
    if(doctorBookingData == null) return "Loading..."
    
    return(
    <div className="booking-container">
      <BookingHeader
        doctor={{
          name: "PGS. TS. BSCKII. TTUT Vũ Văn Hòe",
          avatar: "/doctor.jpg",
        }}

        timeText= {`${doctorService.formatTime(doctorBookingData.data.time_slots.find((slot)=>{return slot.id.toString() === slotId}).start_time)}
        -  ${doctorService.formatTime(doctorBookingData.data.time_slots.find((slot)=>{return slot.id.toString() === slotId}).end_time)}`}

        clinic={{
          name: "Phòng khám Spinetech Clinic",
          address: "257 Giải Phóng, phường Bạch Mai, Hà Nội",
        }}
      />

      <Payment 
        doctor_id={id}
        schedule_id={scheduleId}
        time_slot_id={slotId}
        user_id = {state.user?.id}
      />
    </div>
    )
}

export default Booking