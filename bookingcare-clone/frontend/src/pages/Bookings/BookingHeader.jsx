import bookingCareLogo from "../../assets/images/bookingcarelogo.svg"

const BookingHeader = ({ doctor, timeText, clinic }) => {
  console.log(timeText)
  return (
    <div className="booking-header">
      <div className="booking-lable">ĐẶT LỊCH KHÁM</div>

      <div className="booking-info">
        <img src={bookingCareLogo} alt="doctor" className="doctor-avatar" />
        
        <div className="doctor-info">
            <h2>{doctor.name}</h2>

            <div className="booking-time">
              <span>📅</span>
              <span>{timeText}</span>
            </div>

            <div className="booking-clinic">
              <strong>{clinic.name}</strong>
              <p>{clinic.address}</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default BookingHeader;
