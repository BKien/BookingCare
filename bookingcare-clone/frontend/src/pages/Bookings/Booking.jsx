import Payment from "../../components/Bookings/Payment"
import BookingHeader from "../../components/Bookings/BookingHeader"
import fetchDoctorBookingInfo from "../../services/bookingService"
import "./booking.scss"
import { useEffect, useState } from "react"
import { data, useParams } from "react-router-dom"


const Booking = ()=>{
    const {id} = useParams()
    const [doctorBookingData,setDoctorBookingData] = useState(null)
    
    try {

        useEffect(()=>{
          
          const fetchDoctorBookingInformation = async(doctorId)=>{
              const data = await fetchDoctorBookingInfo(doctorId)
              setDoctorBookingData(data.data)
              console.log(data.data)
          }

          fetchDoctorBookingInformation(id)

        },[id])
    } catch (error) {
        console.log(error)
    }
    
    return(
    <div className="booking-container">
      <BookingHeader
        doctor={{
          name: "PGS. TS. BSCKII. TTUT Vũ Văn Hòe",
          avatar: "/doctor.jpg",
        }}
        timeText= {""}
        clinic={{
          name: "Phòng khám Spinetech Clinic",
          address: "257 Giải Phóng, phường Bạch Mai, Hà Nội",
        }}
      />

      <Payment />
    </div>
    )
}

export default Booking