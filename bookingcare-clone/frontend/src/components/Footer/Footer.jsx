import './Footer.scss'
import bookingCareLogo from "../../assets/images/bookingcarelogo.svg"
const Footer = () => {
  return (
    <div className="footer">
        <div className="left-side">
         <div className='container-of-left-footer-content'>
             <div className='footer-lable'>Công ty Cổ phần Công nghệ BookingCare</div>
                <div className='element'>
                    <div className='icon'></div>
                    <div>ĐKKD số. 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015</div>
                </div>

                <div className='element'>
                    <div className='icon'></div>
                    <div>024-7301-2468 Thứ 2 - Thứ 7 (7h30-18h)</div>
                </div>

                <div className='element'>
                    <div className='icon'></div>
                    <div>support@bookingcare.vn Thứ 2 - Thứ 7 (7h30-18h)</div>
                </div>
         </div>

         <div className='container-of-left-footer-content'>
            <div className='footer-lable'>Văn phòng tại TP Hồ Chí Minh</div>
            <div className='element'>
                <div className='icon'></div>
                <div>Tòa nhà H3 Building, số 384 Hoàng Diệu, phường Khánh Hội, Tp Hồ Chí Minh</div>
            </div>
         </div>

          
          
        </div>

        <div className="middle-side">
            <img src={bookingCareLogo}></img>
            <div className='middle-side-link'>Liên hệ hợp tác</div>
            <div className='middle-side-link'>Chuyển đổi số</div>
            <div className='middle-side-link'>Chính sách bảo mật</div>
            <div className='middle-side-link'>Quy chế hoạt động</div>
            <div className='middle-side-link'>Tuyển dụng</div>
            <div className='middle-side-link'>Điều khoản sử dụng</div>
            <div className='middle-side-link'>Câu hỏi thường gặp</div>
            <div className='middle-side-link'>Sức khỏe doanh nghiệp</div>
        </div>

        <div className="right-side">
            <div className='lable'>Đối tác bảo trợ nội dung</div>
            <div className='element'> 
                <img src={bookingCareLogo}></img>
                <div className='content'>
                    <div className='title'>HELLO DOCTOR</div>
                    <div className='description'>Bảo trợ chuyên mục nội dung "sức khỏe tinh thần"</div>
                </div>
            </div>

            <div className='element'> 
                <img src={bookingCareLogo}></img>
                <div className='content'>
                    <div className='title'>BERNARD HEALTHCARE</div>
                    <div className='description'>Bảo trợ chuyên mục nội dung "y khoa chuyên sâu"</div>
                </div>
            </div>

            <div className='element'> 
                <img src={bookingCareLogo}></img>
                <div className='content'>
                    <div className='title'>Doctor Check</div>
                    <div className='description'>Bảo trợ chuyên mục nội dung "sức khỏe tổng quát"</div>
                </div>
            </div>

        </div>
    </div>
  )
};

export default Footer;