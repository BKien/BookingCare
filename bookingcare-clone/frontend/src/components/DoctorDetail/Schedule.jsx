import { useState } from "react";
import { formatTime } from "../../services/doctorService";
import "./Schedule.scss"
const Schedule = ({scheduleDate,timeSlots,doctorId})=>{
    const [selectedSlot,setSelectedSlot] = useState(null)
    
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
      <a className="time-slots" href={`booking/${doctorId}`}>
        {timeSlots.map((slot) => (
          <button
            key={slot.id}
            className={`time-slot ${
              selectedSlot?.id === slot.id ? "active" : ""
            }`}
            onClick={() => setSelectedSlot(slot)}
            disabled={!slot.is_available}
          >
            {formatTime(slot.start_time)} - {formatTime(slot.end_time)}
          </button>
        ))}
      </a>

      {/* NOTE */}
      <div className="schedule-note">
        Chọn <span>🖱</span> và đặt (Phí đặt lịch 0đ)
      </div>
    </div>
  );
}

export default Schedule