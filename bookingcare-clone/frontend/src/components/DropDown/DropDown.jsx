import "./DropDown.scss"
import { Link } from "react-router-dom"
import userService from "../../services/userService"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../context/AuthContext"
const DropDown = ({isOpen,user})=>{
    const {logout} = useContext(AuthContext)
    
    const handleLogout = ()=>{
        logout()
    }
    if(!isOpen) return null

    return(
        <>

            <div className="dropdown">
                <Link className="dropdown-item" to={`/user/me`}>Thông tin cá nhân</Link>
                <div className="dropdown-item">Cài đặt</div>
                <div className="dropdown-item logout" onClick={handleLogout}>Đăng xuất</div>
            </div>
        </>
    )
}

export default DropDown