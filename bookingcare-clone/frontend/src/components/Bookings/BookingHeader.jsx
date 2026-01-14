const BookingHeader = ({ doctor, timeText, clinic }) => {
  console.log(timeText)
  return (
    <div className="booking-header">
      <img src={doctor.avatar} alt="doctor" className="doctor-avatar" />

      <div className="booking-info">
        <h3>ĐẶT LỊCH KHÁM</h3>
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
  );
};

export default BookingHeader;
