const Payment = () => {
  return (
    <form className="booking-form">
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
      <input type="text" placeholder="Họ tên bệnh nhân (bắt buộc)" />

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

      <input type="text" placeholder="Số điện thoại liên hệ (bắt buộc)" />
      <input type="email" placeholder="Địa chỉ email" />
      <input type="number" placeholder="Năm sinh (bắt buộc)" />

      <select>
        <option>-- Chọn Tỉnh/Thành --</option>
      </select>

      <select>
        <option>-- Chọn Quận/Huyện --</option>
      </select>

      <input type="text" placeholder="Địa chỉ" />
      <textarea placeholder="Lý do khám" rows={3}></textarea>

      <button type="submit">Xác nhận đặt lịch</button>
    </form>
  );
};

export default Payment