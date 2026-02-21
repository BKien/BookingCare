import { useContext, useEffect, useState } from "react";
import axios from "axios";
import bookingService from "../../services/bookingService"
import { useNavigate } from "react-router-dom";
import userService from "../../services/userService";
import { LoadingContext } from "../../context/LoadingContext";
import './BookingBody.scss'

const BookingBody = ({doctor_id,schedule_id,time_slot_id,user_id}) => {
  const {setLoading} = useContext(LoadingContext)
  const navigate = useNavigate()
  const [bookingDataToServer,setBookingDataToServer] = useState({
      fullName: "",
      gender: "",
      phoneNumber:"",
      email: "",
      birth: "",
      address: "",
      reason: "",
      user_id: user_id,
      doctor_id: Number(doctor_id),
      schedule_id: Number(schedule_id),
      time_slot_id: Number(time_slot_id)
  })
  console.log({user_id:user_id})
  const handleOnchange = (e)=>{
    setBookingDataToServer({
      ...bookingDataToServer,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    setLoading(true)
    const response = await bookingService.sendBookingDataToServer(bookingDataToServer)
    console.log(response);
    
    if(response.data.result){
      const res = await bookingService.sendBookingEmail(response.data.bookingId)
      navigate('/booking-sucess')
      setLoading(true)
    }
    else navigate('/booking-error')
  }

  useEffect(()=>{
    const getAndSetUserData = async(user_id)=>{
      const data = await userService.getUserInfo(user_id)
      setBookingDataToServer({
        ...bookingDataToServer,
        ...data
      })
    }
    if(user_id)
    getAndSetUserData(user_id)
  },[])

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      {/* Giá khám */}
      <div className="price-box">
        <div className="label">
          <input type="radio" checked readOnly />
          <div>Giá khám</div>
        </div>
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