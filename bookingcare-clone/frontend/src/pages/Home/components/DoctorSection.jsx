import "./DoctorSection.scss"
import { useRef } from "react"
import leftArrow from "../../../assets/images/left-arrow.svg"
const DoctorSection = ({list})=>{
    const API_URL = import.meta.env.VITE_API_URL
    const scrollClassName = useRef(null)
    
    const handleRightButton = ()=>{
        scrollClassName.current.scrollBy({
            left: 360* 3 + 25 * 2,
            behavior: "smooth"
        })
        
    }

    const handleLeftButton = ()=>{
        console.log("oke")
        scrollClassName.current.scrollBy({
            left: -(360 * 3 + 25 * 2),
            behavior: "smooth"
        })
    }

    return(
        <div className="doctor-section-container">
            <div className="header">
                <div className="name-of-section">Bác Sĩ Nổi Bật</div>
                <a href="/" className="learn-more">Learn More</a>
            </div>
            <div className="scroll-container">
                <div className="list-container" >
                    {list.map((item) => (
                        <div className="item-container" key={item.id}>
                            <img src={`${API_URL}${item.img}`} className="img" />
                            <div className="name">{item.name}</div>
                            <div className="detail">detail</div>
                        </div>
                    ))}
                </div>
                <img className="left-button" onClick={handleLeftButton} src={leftArrow} ></img>
                <img className="right-button" onClick={handleRightButton} src={leftArrow}></img>
            </div>
        </div>
    )
}

export default DoctorSection