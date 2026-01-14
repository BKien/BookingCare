import { useState } from "react";
import axios from "axios";
import bookingService from "../../services/bookingService"
const BookingBody = ({doctor_id,schedue_id,time_slot_id}) => {
  
  const [bookingDataToServer,setBookingDataToServer] = useState({
      fullName: "",
      gender: "",
      phoneNumber:"",
      email: "",
      birth: "",
      address: "",
      reason: "",
      user_id: 1,
      doctor_id: Number(doctor_id),
      schedue_id: Number(schedue_id),
      time_slot_id: Number(time_slot_id)
  })

  const handleOnchange = (e)=>{
    setBookingDataToServer({
      ...bookingDataToServer,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = await bookingService.sendBookingDataToServer(bookingDataToServer)
    console.log(data)
  }


  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      {/* Giá khám */}
      <div className="price-box">
        <label>
          <input type="radio" checked readOnly />
          Giá khám
        </label>
        <div className="price">500.000đ</div>
      </div>

      {/* Đặt cho */}
      <div className="booking-for">
        <label>
          <input type="radio" name="for" defaultChecked />
          Đặt cho mình
        </label>
        <label>
          <input type="radio" name="for" />
          Đặt cho người thân
        </label>
      </div>

      {/* Họ tên */}
      <input type="text" placeholder="Họ tên bệnh nhân (bắt buộc)" 
        name="fullName" onChange={handleOnchange} value={bookingDataToServer.fullName}
      />

      {/* Giới tính */}
      <div className="gender">
        <label>
          <input type="radio" name="gender" />
          Nam
        </label>
        <label>
          <input type="radio" name="gender" />
          Nữ
        </label>
      </div>

      <input type="text" name="phoneNumber" placeholder="Số điện thoại liên hệ (bắt buộc)" onChange={handleOnchange} value={bookingDataToServer.phoneNumber}/>
      <input type="email" name="email" placeholder="Địa chỉ email" onChange={handleOnchange} value={bookingDataToServer.email}/>
      <input type="number" name="birth" placeholder="Năm sinh (bắt buộc)" onChange={handleOnchange} value={bookingDataToServer.birth}/>

      <select>
        <option>-- Chọn Tỉnh/Thành --</option>
      </select>

      <select>
        <option>-- Chọn Quận/Huyện --</option>
      </select>

      <input type="text" name="address" placeholder="Địa chỉ" onChange={handleOnchange} value={bookingDataToServer.address}/>
      <textarea placeholder="Lý do khám" rows={3}></textarea>

      <button type="submit">Xác nhận đặt lịch</button>
    </form>
  );
};

export default BookingBody