import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatTime } from "../../services/doctorService";
import "./Schedule.scss"
const Schedule = ({scheduleDate,timeSlots,doctorId,schedule_id})=>{
    const [selectedSlot,setSelectedSlot] = useState(null)
    const navigate = useNavigate()

    const handleClick = (slotId) =>{
        navigate(`/booking/${doctorId}?slotId=${slotId}&scheduleId=${schedule_id}`)
    }
    return (
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
            {formatTime(slot.start_time)} - {formatTime(slot.end_time)}
          </button>
        ))}

      {/* NOTE */}
      <div className="schedule-note">
        Chọn <span>🖱</span> và đặt (Phí đặt lịch 0đ)
      </div>
    </div>
  );
}

export default Schedule