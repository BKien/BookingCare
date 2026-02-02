import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink ,Navigate, useNavigate} from "react-router-dom";
import './Header.scss'
import menuLogo from "../../assets/images/menu_icon.svg"
import bookingCareLogo from "../../assets/images/bookingcarelogo.svg"
import scheduleLogo from "../../assets/images/schedule_logo.svg"
import { AuthContext } from "../../context/AuthContext";
import DropDown from "../DropDown/DropDown.jsx";
const Header = () => {
  const {user} = useContext(AuthContext)
  let [isOpen,setIsOpen] = useState(false)
  const avatarRef = useRef(null)
  const navigate = useNavigate()

  const handleDropDownClick = ()=>{
      setIsOpen(!isOpen)
  }

  useEffect(()=>{
    const handleClickOutSide = (e)=>{
        if(!avatarRef.current.contains(e.target))
        setIsOpen(false)
    }
      
      document.addEventListener("mousedown",handleClickOutSide)
    return ()=>{
      document.removeEventListener("mousedown",handleClickOutSide)
    }

  },[])

  return(
    <div className="header">
      <div className="header-container">
        
        <div className="left-side">
          <img src={menuLogo} className="menu-logo"></img>
          <a href="/"><img src={bookingCareLogo} className="bookingcare-logo"></img></a>
        </div>

        <div className="center">
          <NavLink
            to="/all"
            className={({isActive})=>`nav-item ${isActive?'active':''}`}
          >
            Tất Cả
          </NavLink>

          <NavLink
            to="/home-care"
            className={({isActive})=>`nav-item ${isActive?'active':''}`}
          >
            Tại Nhà
          </NavLink>

          <NavLink
            to="/hospital"
            className={({isActive})=>`nav-item ${isActive?'active':''}`}
          >
            Tại Viện
          </NavLink>

          <NavLink
            to="/wellness"
            className={({isActive})=>`nav-item ${isActive?'active':''}`}
          >
            Sống Khỏe
          </NavLink>
        </div>

        <div className="right-side">
          <a href="/schedule"><img src={scheduleLogo} className="shedule-logo"></img></a>
          {!user ? (
              <button
                className="login-button"
                onClick={() => navigate("/login")}
              >
                Đăng nhập
              </button>
            ) : (
              <div className="user-avatar" onClick={handleDropDownClick} ref={avatarRef}>
                <img src={bookingCareLogo}></img>
                <DropDown isOpen={isOpen} user={user}></DropDown>
              </div>
            )}
        </div>
    </div>
    </div>
  )
};

export default Header;