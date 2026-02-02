import "./UserProfile.scss"
import userService from "../../services/userService";
import { use, useContext, useEffect, useState } from "react";

const UserProfile = ()=>{
    const [userData,setUserData] = useState(null)
    const [isClickChange,setIsClickChange] = useState(false)
    const user = {
        fullName: "Nguyễn Văn A",
        email: "nguyenvana@gmail.com",
        birthYear: 1999,
        address: "Hà Nội, Việt Nam",
        role: "Patient",
        avatar: "https://i.pravatar.cc/150?img=12",
    };

    const handleSaveChanges = ()=>{
        // gửi thông tin về server ...
        setIsClickChange(!isClickChange)
    }

    useEffect(()=>{
        const getUserData = async()=>{
            const userData = await userService.getUserInfo()
            setUserData(userData)
        }
        getUserData()
    },[])
    
    return (
        <div className="profile-page">
            <div className="profile-card">
            <div className="profile-cover" />


            <div className="profile-avatar">
                <img src={user.avatar} alt="avatar" />
            </div>


            <div className="profile-info">
                <h2>{userData?.fullName}</h2>
                <p className="email">{userData?.email}</p>
                <span className="role">{userData?.role}</span>
            </div>


            <div className="profile-details">
                <div className="row">
                <span>Năm sinh</span>
                <span>{user.birthYear}</span>
                </div>
                <div className="row">
                <span>Địa chỉ</span>
                <span>{user.address}</span>
                </div>
            </div>


            <div className="profile-actions">
                {!isClickChange ? <button className="btn save" onClick={()=>{setIsClickChange(!isClickChange)}}>Change</button>
                : (<><button className="btn cancel" onClick={()=>{setIsClickChange(!isClickChange)}}>Hủy</button>
                <button className="btn save" onClick={handleSaveChanges}>Lưu thay đổi</button></>)    
            }
                
            </div>
            </div>
        </div>
    );
}

export default UserProfile