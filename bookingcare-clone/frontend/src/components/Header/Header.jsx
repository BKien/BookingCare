import React from "react";
import { NavLink } from "react-router-dom";
import './Header.scss'
import menuLogo from "../../assets/images/menu_icon.svg"
import bookingCareLogo from "../../assets/images/bookingcarelogo.svg"
import scheduleLogo from "../../assets/images/schedule_logo.svg"
const Header = () => {
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
          <a href="/login"> <button className="login-button">Đăng nhập</button></a>  
        </div>
    </div>
    </div>
  )
};

export default Header;