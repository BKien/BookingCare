import "./DropDown.scss"
const DropDown = ({isOpen})=>{
    console.log(isOpen)
    if(!isOpen) return null
    return(
        <>

            <div className="dropdown">
                <div className="dropdown-item">Thông tin cá nhân</div>
                <div className="dropdown-item">Cài đặt</div>
                <div className="dropdown-item logout">Đăng xuất</div>
            </div>
        </>
    )
}

export default DropDown