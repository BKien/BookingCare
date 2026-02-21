import { use, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import doctorService from "../../services/doctorService";
import "./Schedule.scss"
import { AuthContext } from "../../context/AuthContext";
const Schedule = ({scheduleDate,timeSlots,doctorId,schedule_id})=>{
    const [selectedSlot,setSelectedSlot] = useState(null)
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
   
    const handleClick = (slotId) =>{
        navigate(`/booking/${doctorId}?slotId=${slotId}&scheduleId=${schedule_id}`,{
          state: {user: user}
        })
    }
    return (
    <div className="schedule-container">
        <div className="doctor-schedule">
      {/* DATE */}
      <div className="schedule-date">
        <span>Thứ 2 - 12/1</span>
      </div>

      {/* TITLE */}
      <div className="schedule-title">
        📅 LỊCH KHÁM
      </div>

      {/* TIME SLOTS */}
      <div className="time-slots">
        {timeSlots.map((slot) => (
          <button
            key={slot.id}
            className={`time-slot ${
              selectedSlot?.id === slot.id ? "active" : ""
            }`}
            //lấy slotId để truyền vào trang Booking sau đó sẽ lưu vào database
            onClick={()=>{handleClick(slot.id)}}
            disabled={!slot.is_available}
          >
            {doctorService.formatTime(slot.start_time)} - {doctorService.formatTime(slot.end_time)}
          </button>
        ))}
      </div>
        
      {/* NOTE */}
      <div className="schedule-note">
        Chọn <span>🖱</span> và đặt (Phí đặt lịch 0đ)
      </div>
    </div>

    <div className="right-side">
        <div className="location">
            <div className="location-lable">Địa Chỉ Khám:</div>
            <div className="address">Trung tâm sức khỏe Nam Giới Men's Health 
            7B/31 Thành Thái, phường Diên Hồng, TP. HCM</div>
        </div>

        <div className="price-container">
            <div className="price-lable">Giá Khám:</div>
            <div className="price">300.000</div>
        </div>

        <div className="insurance-container">
            <div className="insurance-lable">Loại Bảo Hiểm Áp Dụng</div>
        </div>
    </div>


    </div>
  );
}

export default Schedule